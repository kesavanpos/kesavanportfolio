export type Severity = "critical" | "high" | "medium" | "low";

export interface SkillMatch {
  skill: string;
  category: string;

  required: boolean;

  found: boolean;
  occurrences: number;

  inSkillsSection: boolean;
  inExperienceSection: boolean;
  inProjectsSection: boolean;

  evidenceScore: number;
}

export interface ATSIssue {
  severity: Severity;
  title: string;
  explanation: string;
  recommendation: string;
}

export interface ATSResult {
  overallScore: number;

  parseability: number;
  jobMatch: number;
  technicalSkills: number;
  experienceEvidence: number;
  structure: number;

  matchedSkills: SkillMatch[];
  missingSkills: SkillMatch[];

  issues: ATSIssue[];

  recommendations: string[];
}