import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'publicity-visibility',
    number: '01',
    title: 'Publicity & visibility',
    summary: 'Strategic exposure campaigns across crypto media, key opinion leaders, and trending feeds to put eyes on your project.',
    deliverables: [
      'Multi-channel PR coverage and press release distribution',
      'KOL and alpha caller outreach and coordination',
      'DEX tracker, trending and scanner visibility sprints',
      'Targeted impressions and media reach analytics'
    ],
    imageSrc: '/assets/service-trending.jpg',
    imageAlt: 'Publicity and visibility operations artwork'
  },
  {
    id: 'content-social',
    number: '02',
    title: 'Content creation & social media management',
    summary: 'High-impact narratives, daily visual storytelling, and active timeline management tailored for Web3 audiences.',
    deliverables: [
      'Daily content schedules, original copy, and narrative framing',
      'Infographics, video clips, and high-engagement meme production',
      'Full-spectrum X (Twitter) profile & thread management',
      'Audience interaction rituals and organic impression growth'
    ],
    imageSrc: '/assets/service-ambassador.jpg',
    imageAlt: 'Content creation and social media management visual'
  },
  {
    id: 'promotion-marketing',
    number: '03',
    title: 'Promotion & marketing',
    summary: 'Targeted marketing drives, coordinated hype cycles, and partnership distributions designed to build momentum.',
    deliverables: [
      'Strategic marketing campaign calendars and execution',
      'Ecosystem partner cross-promotions and collabs',
      'Sponsored distribution and influencer campaign tracking',
      'Post-campaign conversion and ROI transparency logs'
    ],
    imageSrc: '/assets/service-community.jpg',
    imageAlt: 'Promotion and marketing artwork'
  },
  {
    id: 'community-growth',
    number: '04',
    title: 'Community & growth development campaigns',
    summary: 'Active community cultivation, raid operations, and viral retention loops that turn holders into loyal evangelists.',
    deliverables: [
      'Structured community raid briefs and target coordination',
      '24/7 moderation coverage, spam filtration, and engagement prompts',
      'Live X Spaces, community AMAs, and voice call hosting',
      'Gamified incentive campaigns and holder retention programs'
    ],
    imageSrc: '/assets/service-raids.jpg',
    imageAlt: 'Community and growth development visual'
  },
  {
    id: 'game-development',
    number: '05',
    title: 'Game development',
    summary: 'Interactive Telegram mini-apps, casual Web3 arcade games, and gamified reward systems built for viral adoption.',
    deliverables: [
      'Telegram mini-game (TMA) and browser-based arcade builds',
      'Smart contract integration, token reward sinks, and leaderboards',
      'Custom pixel / 2D/3D game art, sound, and asset production',
      'Game deployment, bug-testing, and post-launch maintenance'
    ],
    imageSrc: '/assets/service-spaces.jpg',
    imageAlt: 'Game development visual'
  },
  {
    id: 'website-development',
    number: '06',
    title: 'Website development & tech development',
    summary: 'High-performance landing pages, decentralized applications (dApps), custom bots, and modern Web3 infrastructure.',
    deliverables: [
      'Bespoke high-conversion landing page design and front-end build',
      'Web3 wallet connection, minting / staking / claim dApp integration',
      'Custom Telegram & Discord verification/utility bots',
      'Responsive full-stack architecture, ultra-fast load times, and SEO'
    ],
    imageSrc: '/assets/service-trending.jpg',
    imageAlt: 'Website and tech development visual'
  }
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Understand', description: "Tell us what you're building." },
  { step: '02', title: 'Plan', description: 'Agree on the work and how to measure it.' },
  { step: '03', title: 'Run', description: 'Put the campaign into motion.' },
  { step: '04', title: 'Review', description: 'Look at the activity, results, and next steps.' }
];
