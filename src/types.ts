export type DiamondStage = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface Chapter {
  id: number;
  stage: DiamondStage;
  stageName: string;
  numeral: string;
  dateLabel: string;
  title: string;
  sheenWord?: string;
  lead: string;
  body: string;
  tagline?: string;
  quote?: string;
  verifiedNotes?: string[];
  imageSrc?: string;
  imageAlt?: string;
  badgeLabel?: string;
  caption?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  secondaryCaption?: string;
}

export interface MetricDefinition {
  id: string;
  label: string;
  targetValue: number;
  observedDisplay: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  unit?: string;
  status: 'verified' | 'reported' | 'contextual';
  periodLabel?: string;
  sourceNote?: string;
}

export interface StatItem {
  value: string;
  label: string;
  verified: boolean;
  highlight?: boolean;
  targetNum?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  statusNote?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  scope: string;
  tagline: string;
  tags: string[];
  date: string;
  link?: string;
  linkLabel?: string;
  stats: StatItem[];
  deliverables: string[];
  heroImage: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  secondaryImageCaption?: string;
  verifiedQuote?: string;
  qualifications?: string;
  proofLinks?: { label: string; href: string }[];
}

export interface PnlReceipt {
  id: string;
  ticker: string;
  calledAt: string;
  result: string;
  multiplier: string;
  reached: string;
  timeframe: string;
  date: string;
  isCommunityTrade?: boolean;
  imageSrc: string;
  caption?: string;
  sourceNote?: string;
}

export interface ServiceItem {
  id: string;
  number?: string;
  title: string;
  summary?: string;
  deliverables?: string[];
  imageSrc?: string;
  imageAlt?: string;
  punchline?: string;
  description?: string;
  highlights?: string[];
  icon?: string;
}

export interface ReviewQuote {
  id?: string;
  quote: string;
  author: string;
  role: string;
  context: string;
  date?: string;
  verifiedSource?: string;
}
