import { CaseStudy, PnlReceipt, ReviewQuote } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'clover-boys',
    title: 'Clover Boys',
    scope: 'Ambassador work / Community campaigns / X Spaces',
    tagline: 'Bring the project into the conversation.',
    tags: ['AMBASSADOR', 'COMMUNITY CAMPAIGNS', 'X SPACES'],
    date: 'MARCH — MAY 2026',
    link: 'https://cloverboys.vercel.app',
    linkLabel: 'View the source ↗',
    stats: [
      {
        value: '30.2K',
        targetNum: 30.2,
        suffix: 'K',
        decimals: 1,
        label: 'Impressions',
        verified: true,
        highlight: true,
        statusNote: 'Reported analytics'
      },
      {
        value: '72',
        targetNum: 72,
        decimals: 0,
        label: 'Live listeners',
        verified: true,
        statusNote: 'Verified X Space'
      },
      {
        value: '12.9%',
        targetNum: 12.9,
        suffix: '%',
        decimals: 1,
        label: 'Engagement rate',
        verified: true,
        statusNote: 'Campaign report'
      },
      {
        value: '100+',
        label: 'Members brought in',
        verified: true,
        statusNote: 'Telegram community growth'
      }
    ],
    deliverables: [
      'Appointed official Ambassador on 19 March 2026',
      'Hosted 48-minute live X Space with 72 live participants',
      'Coordinated community activity sprints driving 486 replies',
      'Grew official account visibility from low baseline to 30.2K impressions'
    ],
    heroImage: '/assets/clover-analytics.jpg',
    heroImageAlt: 'Clover Boys 30.2K impressions analytics report',
    heroImageCaption: 'Campaign figures: 30.2K impressions, 12.9% engagement rate',
    secondaryImage: '/assets/clover-space.jpg',
    secondaryImageAlt: 'Clover Boys live X Space with 72 listeners',
    secondaryImageCaption: 'Live X Space: hosted by @IZYCHE_, 72 live listeners',
    verifiedQuote: 'From less than a thousand overall impressions to this in less than a week. All organic.'
  },
  {
    id: 'wojak-meter',
    title: 'Wojak Meter',
    scope: 'Content / Utility visibility / Community',
    tagline: 'Put the utility in the picture.',
    tags: ['CONTENT', 'UTILITY VISIBILITY', 'COMMUNITY'],
    date: 'APRIL — MAY 2026',
    link: 'http://wojakmeter.com',
    linkLabel: 'View the original posts ↗',
    stats: [
      {
        value: '3.6K',
        targetNum: 3.6,
        suffix: 'K',
        decimals: 1,
        label: 'Thread views',
        verified: true,
        statusNote: 'Post reach'
      },
      {
        value: '100s',
        label: 'Reported daily users',
        verified: true,
        highlight: true,
        statusNote: 'Active daily traders'
      }
    ],
    deliverables: [
      'Connected utility with ongoing CT sentiment and narrative threads',
      'Authored relatable sentiment posts ("Price says one thing. Emotion says another")',
      'Measurable surge in active utility visitors and community traction'
    ],
    heroImage: '/assets/wojak-after.jpg',
    heroImageAlt: 'Wojak Meter post-campaign activity',
    heroImageCaption: 'After campaign: activity and volume surge',
    secondaryImage: '/assets/wojak-before.jpg',
    secondaryImageAlt: 'Wojak Meter pre-campaign baseline',
    secondaryImageCaption: 'Before campaign: pre-campaign baseline',
    verifiedQuote: 'Price says one thing. Emotion says another. The utility without us and with us.'
  }
];

export const CLOVER_EVIDENCE_GALLERY = [
  {
    id: 'clover-art',
    title: 'Project artwork',
    category: 'Artwork',
    src: '/assets/clover-art.jpg',
    alt: 'Clover Boys project artwork',
    caption: 'Official Clover Boys project banner artwork.'
  },
  {
    id: 'clover-analytics',
    title: 'Campaign figures',
    category: 'Analytics',
    src: '/assets/clover-analytics.jpg',
    alt: 'Clover Boys 30.2K impressions analytics report',
    caption: 'Campaign figures: 30.2K impressions, 12.9% engagement rate, 486 replies.'
  },
  {
    id: 'clover-space',
    title: 'Live X Space',
    category: 'Audio',
    src: '/assets/clover-space.jpg',
    alt: 'Clover Boys X Space hosted by IZYCHE',
    caption: 'Live X Space hosted by @IZYCHE_: 72 live listeners, 224 views.'
  },
  {
    id: 'clover-mascot-hoodie',
    title: 'Mascot artwork',
    category: 'Mascot',
    src: '/assets/clover-hoodie-character.png',
    alt: 'Clover Boys 3D hoodie mascot character',
    caption: 'Official 3D campaign mascot in signature Clover Boys hoodie.'
  },
  {
    id: 'clover-raid',
    title: 'Community records',
    category: 'Community',
    src: '/assets/clover-raid.jpg',
    alt: 'Clover Boys raid activity record',
    caption: 'Coordinated raid execution across CT timelines.'
  },
  {
    id: 'clover-character',
    title: 'Character artwork',
    category: 'Visual',
    src: '/assets/clover-character.png',
    alt: 'Clover Boys character illustration',
    caption: 'Original character asset from the official campaign.'
  }
];

export const PARTNERS_LEDGER = [
  {
    id: 'ether-archive',
    name: 'The Fundraiser × Ether Archive',
    category: 'NFT Collection Partnership',
    relationship: 'Official Partner & Whitelist Distributor',
    date: '13 October 2026',
    details: 'A collaboration that brought whitelist opportunities to our community.',
    imageSrc: '/assets/ether-archive-poster.jpg',
    imageAlt: 'Ether Archive official partnership poster',
    link: 'https://etherarchive.xyz',
    linkLabel: 'Explore Ether Archive ↗',
    secondaryLink: 'https://t.me/Senor_Izyche',
    secondaryLinkLabel: 'View the announcement ↗'
  },
  {
    id: 'funpump',
    name: 'Funpump Launchpad',
    category: 'Launchpad Infrastructure',
    relationship: 'Official Ambassador',
    date: '15 June 2026',
    details: 'Ambassador work, launchpad advisory, and promotion.',
    imageSrc: '/assets/brand-card-gold-coin.jpg',
    imageAlt: 'Funpump launchpad card',
    link: 'https://t.me/Senor_Izyche',
    linkLabel: 'View the role announcement ↗'
  },
  {
    id: 'rents-due',
    name: 'The Fundraiser × Rents Due',
    category: 'Meme Community Alliance',
    relationship: 'Strategic Campaign Partner',
    date: 'October 2026',
    details: 'A collaboration rooted in meme culture and community campaigns.',
    imageSrc: '/assets/rents-due-poster.jpg',
    imageAlt: 'Rents Due official partnership poster',
    link: 'https://t.me/Senor_Izyche',
    linkLabel: 'View the collaboration ↗'
  }
];

export const HISTORICAL_PNL_ARCHIVE: PnlReceipt[] = [
  {
    id: 'aesop',
    ticker: '$AESOP',
    calledAt: '372.6K MCap',
    result: '32.8x Multiple',
    multiplier: '32.8X',
    reached: '12.2M ATH',
    timeframe: '9d, 8h',
    date: 'Pleased Devs Era',
    imageSrc: '/assets/pnl-aesop-32x.png',
    caption: 'Historical channel snipe: called at 372.6K, peak reached 12.2M ATH (32.8x).'
  },
  {
    id: 'memmerz-26x',
    ticker: '$MEMMERZ',
    calledAt: '49.0K MCap',
    result: '26.8x Multiple',
    multiplier: '26.8X',
    reached: '1.31M ATH',
    timeframe: '2h, 56m',
    date: 'Pleased Devs Era',
    imageSrc: '/assets/pnl-memmerz-26x.png',
    caption: 'Historical channel snipe: called at 49.0K, peak reached 1.31M ATH (26.8x).'
  },
  {
    id: 'memmerz-18x',
    ticker: '$MEMMERZ',
    calledAt: '49.0K MCap',
    result: '18.1x Multiple',
    multiplier: '18.1X',
    reached: '886.9K ATH',
    timeframe: '32m, 11s',
    date: 'Pleased Devs Era',
    imageSrc: '/assets/pnl-memmerz-18x.png',
    caption: 'Historical channel call: called at 49.0K, peak reached 886.9K ATH (18.1x).'
  },
  {
    id: 'wish-7x',
    ticker: '$WISH',
    calledAt: '65.4K MCap',
    result: '7.7x Multiple',
    multiplier: '7.7X',
    reached: '503.0K ATH',
    timeframe: '13 days',
    date: 'January 2026',
    imageSrc: '/assets/pnl-wish-7x.jpg',
    caption: 'Promoter campaign call: called at 65.4K, peak reached 503.0K ATH.'
  },
  {
    id: 'retard-4x',
    ticker: '$RETARD',
    calledAt: 'Early Entry',
    result: '4.4x Multiple',
    multiplier: '4.4X',
    reached: 'Peak Multiple',
    timeframe: 'Bot Record',
    date: '2025 Archive',
    imageSrc: '/assets/pnl-retard-4x.jpg',
    caption: 'Snipe execution receipt from channel archive.'
  },
  {
    id: 'namecoin-3x',
    ticker: '$NAMECOIN',
    calledAt: 'Initial Call',
    result: '3.2x Multiple',
    multiplier: '3.2X',
    reached: 'Peak Multiple',
    timeframe: 'Bot Record',
    date: '2025 Archive',
    imageSrc: '/assets/pnl-namecoin-3x.jpg',
    caption: 'Early sniper call record logged in public.'
  }
];

export const RETRO_ARCHIVE = [
  {
    id: 'etf-snipe',
    title: 'ETF Token Snipe',
    date: '31 March 2025',
    result: 'Quick 3x (+207% day)',
    source: 'Channel Snipe Call',
    actionLabel: 'Open the record ↗',
    imageSrc: '/assets/etf-snipe.jpg',
    alt: 'ETF token snipe record',
    description: 'One of the very first documented calls in the channel. 1.09M MCap, 260K volume.'
  },
  {
    id: 'tlc-raid',
    title: 'TLC Raid Manager Record',
    date: '01 April 2025',
    result: 'Raid Score +6',
    source: 'Telegram Raid Bot',
    actionLabel: 'View the message ↗',
    imageSrc: '/assets/tlc-raid.jpg',
    alt: 'TLC raid sprint leaderboard',
    description: 'The foundation of the raid squad: 13-minute coordinated sprint with leaderboard entry.'
  },
  {
    id: 'early-avatar',
    title: 'Web 3 gains Genesis Mark',
    date: '29 March 2025',
    result: 'Day 1 Avatar',
    source: 'Channel Archive',
    actionLabel: 'View the artwork ↗',
    imageSrc: '/assets/avatar-origin.jpg',
    alt: 'Genesis pink chart avatar',
    description: 'The original pink chart avatar when the community stood at exactly 17 members.'
  },
  {
    id: 'mascot-art',
    title: 'Community Artwork Tribute',
    date: '03 May 2026',
    result: 'Custom Fan Artwork',
    source: 'Community Gift',
    actionLabel: 'View the artwork ↗',
    imageSrc: '/assets/mascot-art.jpg',
    alt: 'Fundraiser community mascot illustration',
    description: 'Illustrated gift from a community member brought into Web3 through Fundraisers Web.'
  }
];

export const REVIEWS: ReviewQuote[] = [
  {
    id: 'founder-1',
    quote: "Nice work brother, you are doing a wonderful job. I'm being realistic here, I have a great feeling about our run.",
    author: "Project Founder",
    role: "Launch Partner",
    context: "Client collaboration feedback",
    date: '2026'
  },
  {
    id: 'lead-2',
    quote: "A perfect professional to pilot the project. He knows his way around the space and will pilot you to the top.",
    author: "DeFi Builder",
    role: "Community Lead",
    context: "Post-campaign feedback",
    date: '2026'
  },
  {
    id: 'contributor-3',
    quote: "Value breeds value. When you work with people who actually care about the community, the numbers show.",
    author: "Core Contributor",
    role: "Fundraisers Web Family",
    context: "Community campaign tribute",
    date: 'May 2026'
  }
];

export const PNL_RECEIPTS = HISTORICAL_PNL_ARCHIVE;
