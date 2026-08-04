import type { Score } from "./types";

export interface TrialParams {
  name: string;
  speed: Score;
  conceptUnderstanding: Score;
  problemSolving: Score;
  focus: Score;
}

type SearchParams = Record<string, string | string[] | undefined>;

function toScore(value: unknown): Score | null {
  if (typeof value !== "string") return null;
  const n = Number(value);
  return n >= 1 && n <= 5 && Number.isInteger(n) ? (n as Score) : null;
}

/**
 * Parse and validate the /trial query string. Returns null when any required
 * value is missing or out of range, in which case the form mode is shown.
 */
export function parseTrialParams(searchParams: SearchParams): TrialParams | null {
  const { name, speed, concept, problem, focus } = searchParams;
  if (typeof name !== "string" || name.trim().length < 2) return null;

  const s = toScore(speed);
  const c = toScore(concept);
  const p = toScore(problem);
  const f = toScore(focus);
  if (s === null || c === null || p === null || f === null) return null;

  return {
    name: name.trim(),
    speed: s,
    conceptUnderstanding: c,
    problemSolving: p,
    focus: f,
  };
}

export function trialQuery(p: TrialParams): string {
  const qs = new URLSearchParams({
    name: p.name,
    speed: String(p.speed),
    concept: String(p.conceptUnderstanding),
    problem: String(p.problemSolving),
    focus: String(p.focus),
  });
  return qs.toString();
}
