export type Score = 1 | 2 | 3 | 4 | 5;

export type DimensionKey = "speed" | "concept" | "problem" | "focus";

export interface TrialAssessmentInput {
  studentName: string;
  speed: Score;
  conceptUnderstanding: Score;
  problemSolving: Score;
  focus: Score;
}

export interface AssessmentResult {
  paragraphs: [string, string, string];
  markdown: string;
}

export interface PhraseBank {
  title: string;
  dimension: Record<
    DimensionKey,
    {
      high: string[];
      growthLow: string[];
      growthMid: string[];
    }
  >;
  shared: {
    opening: string[];
    generic: string[];
    dynamic: string[];
    allHighGrowth: string[];
    reinforcement: string[];
    closing: string[];
  };
}
