"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FloatingBlob } from "@/components/ui/FloatingBlob";
import { cn } from "@/lib/utils";
import type { Score } from "@/lib/assessment/types";
import type { TrialParams } from "@/lib/assessment/params";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const SCORES: Score[] = [1, 2, 3, 4, 5];

interface ScorePickerProps {
  label: string;
  hint?: string;
  value: Score | null;
  onChange: (value: Score) => void;
}

function ScorePicker({ label, hint, value, onChange }: ScorePickerProps) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-sm font-bold text-ink-strong">{label}</p>
        {hint ? <p className="text-sm text-ink/60">{hint}</p> : null}
      </div>
      <div className="flex items-center gap-2" role="group" aria-label={label}>
        {SCORES.map((n) => (
          <button
            key={n}
            type="button"
            aria-pressed={value === n}
            onClick={() => onChange(n)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border-2 text-base font-bold transition-all",
              value === n
                ? "border-transparent bg-brand-gradient text-white shadow-gold"
                : "border-black/10 bg-white text-ink hover:border-brand-blue"
            )}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

export function AssessmentForm({
  dict,
  initial,
  onGenerate,
  onCancel,
}: {
  dict: Dictionary["trial"];
  initial: TrialParams | null;
  onGenerate: (p: TrialParams) => void;
  onCancel?: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [speed, setSpeed] = useState<Score | null>(initial?.speed ?? null);
  const [concept, setConcept] = useState<Score | null>(
    initial?.conceptUnderstanding ?? null
  );
  const [problem, setProblem] = useState<Score | null>(initial?.problemSolving ?? null);
  const [focus, setFocus] = useState<Score | null>(initial?.focus ?? null);
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError(dict.form.nameError);
      return;
    }
    if (speed === null || concept === null || problem === null || focus === null) {
      setError(dict.form.scoreError);
      return;
    }
    setError(null);
    onGenerate({
      name: name.trim(),
      speed,
      conceptUnderstanding: concept,
      problemSolving: problem,
      focus,
    });
  };

  return (
    <section className="relative overflow-hidden bg-hero-glow pb-20 pt-10 sm:pb-28 sm:pt-16">
      <FloatingBlob color="gold" className="right-[-120px] top-[-80px] h-[320px] w-[320px]" />
      <FloatingBlob color="blue" className="left-[-140px] top-[300px] h-[380px] w-[380px]" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-center gap-4 text-center"
        >
          <span className="eyebrow">{dict.form.eyebrow}</span>
          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {dict.form.title}
          </h1>
          <p className="max-w-xl text-lg text-ink/80">{dict.form.description}</p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto flex max-w-2xl flex-col gap-8 rounded-4xl border border-black/5 bg-white p-8 shadow-card sm:p-10"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="student-name"
              className="text-sm font-bold text-ink-strong"
            >
              {dict.form.nameLabel}
            </label>
            <input
              id="student-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={dict.form.namePlaceholder}
              className="rounded-2xl border-2 border-black/10 bg-surface-soft px-5 py-3.5 text-base font-medium text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-brand-blue"
            />
          </div>

          <ScorePicker label={dict.form.speedTitle} hint={dict.form.speedHint} value={speed} onChange={setSpeed} />
          <ScorePicker label={dict.form.conceptTitle} hint={dict.form.conceptHint} value={concept} onChange={setConcept} />
          <ScorePicker label={dict.form.problemTitle} hint={dict.form.problemHint} value={problem} onChange={setProblem} />
          <ScorePicker label={dict.form.focusTitle} hint={dict.form.focusHint} value={focus} onChange={setFocus} />

          {error ? (
            <p
              role="alert"
              className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600"
            >
              {error}
            </p>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" icon={<ArrowRight size={18} />} className="w-full sm:flex-1">
              {dict.form.submit}
            </Button>
            {onCancel ? (
              <Button
                type="button"
                variant="ghost"
                onClick={onCancel}
                icon={<RefreshCw size={18} />}
                className="w-full sm:flex-1"
              >
                {dict.form.backToPreview}
              </Button>
            ) : null}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
