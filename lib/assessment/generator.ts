import type { Locale } from "@/lib/i18n/config";
import { en } from "./phrases/en";
import { id } from "./phrases/id";
import type { AssessmentResult, DimensionKey, PhraseBank, TrialAssessmentInput } from "./types";

const DIM_ORDER: DimensionKey[] = ["speed", "concept", "problem", "focus"];

const MIN_WORDS = 120;
const MAX_WORDS = 220;

/**
 * Deterministic PRNG seeded from the score tuple so that every score
 * combination produces its own variation of phrasing (rule: never identical
 * paragraphs for different score combinations).
 */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function fillName(template: string, name: string): string {
  return template.replaceAll("{name}", name);
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/**
 * Picks a sentence from `choices` that hasn't been used yet in this
 * assessment, falling back to any choice when exhausted — keeps the output
 * natural and varied without repeating a phrase.
 */
function makePicker(rng: () => number) {
  const used = new Set<string>();
  return (choices: string[]): string | null => {
    const pool = choices.filter((c) => !used.has(c));
    if (pool.length === 0) return null;
    const chosen = pool[Math.floor(rng() * pool.length)];
    used.add(chosen);
    return chosen;
  };
}

function removeLastSentence(paragraph: string): string | null {
  const sentences = paragraph.match(/[^.!?]+[.!?]+/g);
  if (!sentences || sentences.length <= 1) return null;
  return sentences.slice(0, -1).join(" ").trim();
}

/**
 * Generates a personalized trial class assessment following the scoring
 * dictionary and dynamic sentence rules in assesment-plan.md.
 *
 * Output is always three paragraphs: strengths, areas for growth, and an
 * encouraging conclusion — never mentioning scores or numbers.
 */
export function generateAssessment(
  input: TrialAssessmentInput,
  locale: Locale
): AssessmentResult {
  const bank: PhraseBank = locale === "id" ? id : en;
  const name = input.studentName.trim();
  const seed =
    input.speed * 1000 +
    input.conceptUnderstanding * 100 +
    input.problemSolving * 10 +
    input.focus;
  const rng = mulberry32(seed);
  const pick = makePicker(rng);
  const fill = (template: string) => fillName(template, name);

  const dims: { key: DimensionKey; score: number }[] = [
    { key: "speed", score: input.speed },
    { key: "concept", score: input.conceptUnderstanding },
    { key: "problem", score: input.problemSolving },
    { key: "focus", score: input.focus },
  ];

  // Rank strengths highest-first; ties break in input order so rankings are stable.
  const ranked = [...dims].sort(
    (a, b) => b.score - a.score || DIM_ORDER.indexOf(a.key) - DIM_ORDER.indexOf(b.key)
  );
  const top1 = ranked[0];
  const top2 = ranked[1];
  const lowest = ranked[2];

  // Paragraph 1 — open with strengths, strongest ability first.
  let p1 = fill(pick(bank.shared.opening)!);
  p1 += " " + (top1.score >= 4 ? fill(pick(bank.dimension[top1.key].high)!) : fill(pick(bank.shared.generic)!));
  p1 += " " + (top2.score >= 4 ? fill(pick(bank.dimension[top2.key].high)!) : fill(pick(bank.shared.generic)!));
  if (dims.some((d) => d.score >= 4)) {
    p1 += " " + fill(pick(bank.shared.dynamic)!);
  }

  // Paragraph 2 — growth areas, always in positive wording.
  let p2: string;
  if (lowest.score <= 2) {
    p2 = fill(pick(bank.dimension[lowest.key].growthLow)!);
  } else if (lowest.score === 3) {
    p2 = fill(pick(bank.dimension[lowest.key].growthMid)!);
  } else {
    p2 = fill(pick(bank.shared.allHighGrowth)!);
  }

  // Paragraph 3 — encouraging conclusion.
  let p3 = fill(pick(bank.shared.closing)!);

  // Enforce the 120–220 word range.
  let total = wordCount(p1) + wordCount(p2) + wordCount(p3);
  let guard = 0;
  while (total < MIN_WORDS && guard++ < 8) {
    const next = pick(bank.shared.reinforcement);
    if (!next) break;
    p2 += " " + fill(next);
    total = wordCount(p1) + wordCount(p2) + wordCount(p3);
  }
  guard = 0;
  while (total > MAX_WORDS && guard++ < 8) {
    const trimmedP2 = removeLastSentence(p2);
    if (trimmedP2 && wordCount(p1) + wordCount(trimmedP2) + wordCount(p3) <= MAX_WORDS) {
      p2 = trimmedP2;
    } else {
      const trimmedP1 = removeLastSentence(p1);
      if (!trimmedP1) break;
      if (wordCount(trimmedP1) + wordCount(p2) + wordCount(p3) > MAX_WORDS) break;
      p1 = trimmedP1;
    }
    total = wordCount(p1) + wordCount(p2) + wordCount(p3);
  }

  const paragraphs = [p1, p2, p3] as [string, string, string];
  return {
    paragraphs,
    markdown: `## ${bank.title}\n\n${p1}\n\n${p2}\n\n${p3}`,
  };
}

export function interpolateName(template: string, name: string): string {
  return fillName(template, name);
}
