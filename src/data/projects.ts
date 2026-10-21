import { CaseStudy, PnlReceipt, ReviewQuote } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'clover-boys',
    title: 'Clover Boys ($CLOVR)',
    tagline: 'From under a thousand impressions to a booming community in under a week. All organic.',
    tags: ['AMBASSADOR', 'X SPACE HOST', 'RAID SQUAD', 'GROWTH STRATEGY'],
    date: 'MARCH — MAY 2026',
    link: 'https://cloverboys.vercel.app',
    stats: [
      { value: '30.2K', label: 'Impressions (+16,000%)', verified: true, highlight: true },
      { value: '72', label: 'Tuned in Live (X Space)', verified: true },
      { value: '12.9%', label: 'Engagement Rate', verified: true },
      { value: '100+', label: 'Members Brought In', verified: true }
    ],
    deliverables: [
      'Appointed official Ambassador on 19 March 2026',
      'Hosted 48-minute X Space ("Shill and Chill") with 72 live participants',
      'Organized high-converting raid sprints driving 486 replies & 3.9K engagements',
      'Propelled Clover Boys official Twitter account from <1K to 30.2K impressions in 7 days'
    ],
    heroImage: '/assets/clover-analytics.jpg',
    secondaryImage: '/assets/clover-space.jpg',
    verifiedQuote: 'From less than a thousand overall impressions to this in less than a week for the clover project. All organic.'
  },
  {
    id: 'wojak-meter',
    title: 'Wojak Meter Utility',
    tagline: 'Matching the charts with how portfolios actually feel. Pushed utility to hundreds of daily traders.',
    tags: ['UTILITY GROWTH', 'X AUDIENCE', 'SENTIMENT ALPHA'],
    date: 'APRIL — MAY 2026',
    link: 'http://wojakmeter.com',
    stats: [
      { value: '3.6K', label: 'Thread Views', verified: true },
      { value: '100s', label: 'Daily Utility Users', verified: true, highlight: true },
      { value: '100%', label: 'Organic CT Traction', verified: true }
    ],
    deliverables: [
      'Built narrative bridge connecting CT market sentiment with utility usage',
      'Created relatable alpha threads ("Price says one thing. Emotion says another")',
      'Achieved measurable surge in active utility visitors and on-chain engagement posts'
    ],
    heroImage: '/assets/wojak-after.jpg',
    secondaryImage: '/assets/wojak-before.jpg',
    verifiedQuote: 'The Wojak meter utility project without us and with us.'
  },
  {
    id: 'ether-archive',
    title: 'Ether Archive Partnership',
    tagline: 'Official strategic collaboration securing 10 whitelist spots for The Fundraiser family.',
    tags: ['STRATEGIC PARTNERSHIP', 'WHITELIST ALLOCATION', 'HISTORICAL NFT'],
    date: '13 OCTOBER 2026',
    link: 'https://etherarchive.xyz',
    stats: [
      { value: '10', label: 'Exclusive WL Spots', verified: true, highlight: true },
      { value: '4,088', label: 'Unique 1/1 NFTs', verified: true },
      { value: '31 OCT', label: 'Mint Schedule', verified: true }
    ],
    deliverables: [
      'Announced official collaboration with Ether Archive (@EtherArchive)',
      'Direct whitelist access for The Fundraiser community',
      'Curated community marketing campaign highlighting Ethereum history'
    ],
    heroImage: '/assets/ether-archive-poster.jpg',
    verifiedQuote: "This is just the beginning. We're looking forward to creating more opportunities and growing together in Web3."
  }
];

export const PNL_RECEIPTS: PnlReceipt[] = [
  {
    id: 'aesop',
    ticker: '$AESOP',
    calledAt: '372.6K MCap',
    result: '32.8x Multiple',
    multiplier: '32.8X',
    reached: '12.2M ATH',
    timeframe: '9d, 8h',
    date: 'PLEASING DEVS ERA',
    isCommunityTrade: false,
    imageSrc: '/assets/pnl-aesop-32x.png'
  },
  {
    id: 'memmerz-26x',
    ticker: '$MEMMERZ',
    calledAt: '49.0K MCap',
    result: '26.8x Multiple',
    multiplier: '26.8X',
    reached: '1.31M ATH',
    timeframe: '2h, 56m',
    date: 'PLEASING DEVS ERA',
    isCommunityTrade: false,
    imageSrc: '/assets/pnl-memmerz-26x.png'
  },
  {
    id: 'memmerz-18x',
    ticker: '$MEMMERZ',
    calledAt: '49.0K MCap',
    result: '18.1x Multiple',
    multiplier: '18.1X',
    reached: '886.9K ATH',
    timeframe: '32m, 11s',
    date: 'PLEASING DEVS ERA',
    isCommunityTrade: false,
    imageSrc: '/assets/pnl-memmerz-18x.png'
  }
];

export const REVIEWS: ReviewQuote[] = [
  {
    quote: "Nice work brother, you are doing a wonderful job. I'm being realistic here, I have a great feeling about our run.",
    author: "Project Founder",
    role: "Verified Launch Partner",
    context: "Client collaboration feedback"
  },
  {
    quote: "A perfect professional to pilot the project. He knows his way around the space and will pilot you to the top.",
    author: "DeFi Builder",
    role: "Community Lead",
    context: "Post-campaign review"
  },
  {
    quote: "Value breeds value. When you work with people who actually care about the community, the numbers show.",
    author: "Core Contributor",
    role: "Fundraisers Web Family",
    context: "May 2026 Community Tribute"
  }
];

export const RETRO_ARCHIVE = [
  {
    id: 'etf-snipe',
    title: 'ETF Token Snipe',
    date: '31 March 2025',
    result: 'Quick 3x (+207% day)',
    source: 'Channel Snipe Call',
    imageSrc: '/assets/etf-snipe.jpg',
    description: 'One of the very first documented calls in the channel. 1.09M MCap, 260K volume.'
  },
  {
    id: 'tlc-raid',
    title: 'TLC Raid Manager Record',
    date: '01 April 2025',
    result: 'Raid Score +6',
    source: 'Telegram Raid Bot',
    imageSrc: '/assets/tlc-raid.jpg',
    description: 'The foundation of the raid squad: 13-minute coordinated sprint with leaderboard entry.'
  },
  {
    id: 'early-avatar',
    title: 'Web 3 gains Genesis Mark',
    date: '29 March 2025',
    result: 'Day 1 Avatar',
    source: 'Channel Archive',
    imageSrc: '/assets/avatar-origin.jpg',
    description: 'The original pink chart avatar when the community stood at exactly 17 members.'
  },
  {
    id: 'mascot-art',
    title: 'Community Artwork Tribute',
    date: '03 May 2026',
    result: 'Custom Fan Artwork',
    source: 'Community Gift',
    imageSrc: '/assets/mascot-art.jpg',
    description: 'Illustrated gift from a member brought into Web3 through Fundraisers Web.'
  }
];
