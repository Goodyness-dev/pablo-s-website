import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'campaigns',
    number: '01',
    title: 'Community campaigns',
    summary: 'Give coordinated community activity a clear brief, timeline, and measurable targets.',
    deliverables: [
      'Campaign roadmap and structured timeline',
      'Community participation guidelines and raid briefs',
      'Activity verification logs and engagement records',
      'Post-campaign impact and analytics summary'
    ],
    imageSrc: '/assets/service-community.jpg',
    imageAlt: 'Community campaign operations artwork'
  },
  {
    id: 'operations',
    number: '02',
    title: 'Community operations & moderation',
    summary: 'Keep the room informed, filtered, and active regardless of market conditions.',
    deliverables: [
      'Defined moderation coverage and escalation protocol',
      'Scheduled project announcement and news cadence',
      'Spam, scam, and malicious link filtration',
      'Regular community engagement rituals and voice sessions'
    ],
    imageSrc: '/assets/service-raids.jpg',
    imageAlt: 'Community moderation and raid squad visual'
  },
  {
    id: 'spaces',
    number: '03',
    title: 'X Spaces & live conversations',
    summary: 'Build a live audio conversation that holders, traders, and founders can join and follow.',
    deliverables: [
      'Topic curation and structured agenda preparation',
      'Co-host and high-signal guest coordination',
      '45–60 minute professional hosting by @IZYCHE_',
      'Post-event audio cutdowns, highlights, and thread recap'
    ],
    imageSrc: '/assets/service-spaces.jpg',
    imageAlt: 'X Spaces and live audio hosting visual'
  },
  {
    id: 'ambassador',
    number: '04',
    title: 'Ambassador representation',
    summary: 'Put an accountable, recognized public voice behind the project across crypto networks.',
    deliverables: [
      'Documented ambassadorship scope and duration',
      'Public representation on X Spaces and ecosystem stages',
      'Regular project-focused content and commentary',
      'Transparent milestone reporting to founding team'
    ],
    imageSrc: '/assets/service-ambassador.jpg',
    imageAlt: 'Ambassador representation artwork'
  },
  {
    id: 'positioning',
    number: '05',
    title: 'Content & utility positioning',
    summary: 'Explain what the product actually does and why someone would hold or use it.',
    deliverables: [
      'Core narrative framework and relatable market hooks',
      'High-conversion launch threads and educational breakdowns',
      'DEX, scanner, and voting visibility strategies',
      'Clear measurement methodology for traffic and retention'
    ],
    imageSrc: '/assets/service-trending.jpg',
    imageAlt: 'Content and utility positioning visual'
  }
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Understand the project', description: 'Inspect the tokenomics, utility, community foundation, and current friction points.' },
  { step: '02', title: 'Define the scope', description: 'Establish clear deliverables, communication cadence, and baseline metrics before kicking off.' },
  { step: '03', title: 'Run the work', description: 'Execute coordinated campaigns, live Spaces, community operations, and public distribution.' },
  { step: '04', title: 'Review the record', description: 'Deliver honest analytics, archive the receipts, and plan sustainable retention.' }
];
