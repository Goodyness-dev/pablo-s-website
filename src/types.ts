export type DiamondStage = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface Chapter {
  id: number;
  stage: DiamondStage;
  stageName: string;
  numeral: string;
  dateLabel: string;
  title: string;
  sheenWord: string;
  lead: string;
  body: string;
  tagline?: string;
  quote?: string;
  verifiedNotes?: string[];
  imageSrc?: string;
  imageAlt?: string;
  badgeLabel?: string;
}

export interface StatItem {
  value: string;
  label: string;
  verified: boolean;
  highlight?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  date: string;
  link?: string;
  stats: StatItem[];
  deliverables: string[];
  heroImage: string;
  secondaryImage?: string;
  verifiedQuote?: string;
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
}

export interface ServiceItem {
  id: string;
  title: string;
  punchline: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface ReviewQuote {
  quote: string;
  author: string;
  role: string;
  context: string;
}
