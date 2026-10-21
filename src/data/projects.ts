import { CaseStudy, PnlReceipt, ReviewQuote } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'clover-boys',
    title: 'Clover Boys ($CLOVR)',
    scope: 'Community campaigns / Ambassador work / Live X Spaces',
    tagline: 'Bringing the project into the conversation.',
    tags: ['AMBASSADOR', 'X SPACES', 'COMMUNITY RAIDS', 'ENGAGEMENT'],
    date: 'MARCH — MAY 2026',
    link: 'https://cloverboys.vercel.app',
    linkLabel: 'cloverboys.vercel.app',
    stats: [
      {
        value: '30.2K',
        targetNum: 30.2,
        suffix: 'K',
        decimals: 1,
        label: 'Observed impressions',
        verified: true,
        highlight: true,
        statusNote: 'Reported analytics screenshot (March 2026)'
      },
      {
        value: '72',
        targetNum: 72,
        decimals: 0,
        label: 'Live Space listeners',
        verified: true,
        statusNote: 'Verified 48m X Space attendance'
      },
      {
        value: '12.9%',
        targetNum: 12.9,
        suffix: '%',
        decimals: 1,
        label: 'Engagement rate',
        verified: true,
        statusNote: 'Observed campaign analytics report'
      },
      {
        value: '100+',
        label: 'Community members',
        verified: true,
        statusNote: 'Initial Telegram onboarding surge'
      }
    ],
    deliverables: [
      'Appointed official Ambassador on 19 March 2026',
      'Hosted 48-minute X Space ("Shill and Chill") with 72 live participants',
      'Coordinated raid sprints driving 486 replies and 3.9K recorded engagements',
      'Lifted official account visibility from low baseline to 30.2K reported impressions in seven days'
    ],
    heroImage: '/assets/clover-analytics.jpg',
    heroImageAlt: 'Clover Boys 30.2K impressions analytics report screenshot',
    heroImageCaption: 'Reported account analytics: 30.2K impressions, 12.9% engagement rate',
    secondaryImage: '/assets/clover-space.jpg',
    secondaryImageAlt: 'Clover Boys X Space with 72 live listeners',
    secondaryImageCaption: 'X Space record: "Shill and Chill" hosted by @IZYCHE_, 72 live listeners',
    verifiedQuote: 'From less than a thousand overall impressions to this in less than a week. All organic.',
    qualifications: 'Impressions and engagement figures are taken directly from the project analytics screenshot. Baseline comparison reflects reported weekly change.',
    proofLinks: [
      { label: 'View impressions record', href: '/assets/clover-analytics.jpg' },
      { label: 'View Space record', href: '/assets/clover-space.jpg' },
      { label: 'View character asset', href: '/assets/clover-character.png' }
    ]
  },
  {
    id: 'wojak-meter',
    title: 'Wojak Meter Utility',
    scope: 'Utility positioning / Content / Community visibility',
    tagline: 'Give the utility a place in the conversation.',
    tags: ['UTILITY GROWTH', 'X AUDIENCE', 'MARKET SENTIMENT'],
    date: 'APRIL — MAY 2026',
    link: 'http://wojakmeter.com',
    linkLabel: 'wojakmeter.com',
    stats: [
      {
        value: '3.6K',
        targetNum: 3.6,
        suffix: 'K',
        decimals: 1,
        label: 'Thread views',
        verified: true,
        statusNote: 'Verified X engagement on sentiment thread'
      },
      {
        value: '100s',
        label: 'Daily utility users',
        verified: true,
        highlight: true,
        statusNote: 'Reported active web utility traders'
      },
      {
        value: '100%',
        label: 'Organic CT traction',
        verified: true,
        statusNote: 'Non-incentivized community sharing'
      }
    ],
    deliverables: [
      'Built narrative bridge connecting CT market sentiment with utility usage',
      'Authored relatable sentiment threads ("Price says one thing. Emotion says another")',
      'Achieved measurable surge in active utility visitors and on-chain reaction posts'
    ],
    heroImage: '/assets/wojak-after.jpg',
    heroImageAlt: 'Wojak Meter utility post-campaign activity screenshot',
    heroImageCaption: 'Wojak Meter: after campaign utility engagement and volume',
    secondaryImage: '/assets/wojak-before.jpg',
    secondaryImageAlt: 'Wojak Meter utility pre-campaign baseline screenshot',
    secondaryImageCaption: 'Wojak Meter: before campaign baseline',
    verifiedQuote: 'Price says one thing. Emotion says another. The utility without us and with us.',
    qualifications: 'Thread view count verified from published post screenshot. Daily active user count is based on founder reporting.'
  }
];

export const CLOVER_EVIDENCE_GALLERY = [
  {
    id: 'clover-analytics',
    title: 'Campaign Analytics Record',
    category: 'Metrics Proof',
    src: '/assets/clover-analytics.jpg',
    alt: 'Clover Boys 30.2K impressions analytics report',
    caption: 'Official account metrics: 30.2K impressions, 12.9% engagement rate, 486 replies.'
  },
  {
    id: 'clover-space',
    title: 'Live X Space Attendance',
    category: 'Audio Proof',
    src: '/assets/clover-space.jpg',
    alt: 'Clover Boys X Space hosted by IZYCHE',
    caption: '48m 48s live audio room: 72 tuned in live, 224 Space views, guests from Web3 communities.'
  },
  {
    id: 'clover-character',
    title: 'Clover Boys Character Artwork',
    category: 'Campaign Identity',
    src: '/assets/clover-character.png',
    alt: 'Clover Boys mascot character',
    caption: 'Original character asset from the official campaign launch.'
  },
  {
    id: 'clover-mascot-hoodie',
    title: 'Clover Boys 3D Mascot',
    category: 'Campaign Identity',
    src: '/assets/clover-hoodie-character.png',
    alt: 'Clover Boys 3D hoodie mascot character',
    caption: 'Official 3D campaign mascot wearing signature Clover Boys hoodie.'
  },
  {
    id: 'clover-raid',
    title: 'Community Raid Engagement',
    category: 'Raid Sprint',
    src: '/assets/clover-raid.jpg',
    alt: 'Clover Boys community raid record',
    caption: 'Coordinated raid execution across CT timelines and announcement replies.'
  },
  {
    id: 'clover-art',
    title: 'Campaign Illustration',
    category: 'Visual Asset',
    src: '/assets/clover-art.jpg',
    alt: 'Clover Boys community banner art',
    caption: 'Campaign visual: "No insiders. No rugs. No empty hype."'
  },
  {
    id: 'clover-with-us',
    title: 'Partnership Confirmation',
    category: 'Announcement',
    src: '/assets/clover-with-us.jpg',
    alt: 'Clover boys with us confirmation',
    caption: 'Channel confirmation: "Clover boys with us! All organic."'
  }
];

export const PARTNERS_LEDGER = [
  {
    id: 'ether-archive',
    name: 'Ether Archive',
    category: 'NFT Collection Partnership',
    relationship: 'Official Partner & Whitelist Distributor',
    date: '13 October 2026',
    status: 'Announced',
    details: 'Collection of 4,088 unique 1/1 NFTs inspired by Ethereum history. The Fundraiser secured 10 exclusive whitelist spots for community members.',
    imageSrc: '/assets/ether-archive-poster.jpg',
    imageAlt: 'Ether Archive official partnership poster',
    link: 'https://etherarchive.xyz',
    linkLabel: 'etherarchive.xyz',
    handle: '@EtherArchive'
  },
  {
    id: 'rents-due',
    name: 'Rents Due ($RENT)',
    category: 'Meme Community Alliance',
    relationship: 'Strategic Campaign Partner',
    date: 'October 2026',
    status: 'Active',
    details: 'Uniting meme culture and high-conviction raid operations across crypto channels. "Rent is temporary. The moon is forever."',
    imageSrc: '/assets/rents-due-poster.jpg',
    imageAlt: 'Rents Due official partnership poster',
    link: 'https://t.me/Senor_Izyche',
    linkLabel: 'Telegram Alliance',
    handle: '$RENT'
  },
  {
    id: 'funpump',
    name: 'Funpump Launchpad',
    category: 'Launchpad Infrastructure',
    relationship: 'Official Ambassador',
    date: '15 June 2026',
    status: 'Verified Role',
    details: 'Appointed ambassador for the Funpump launchpad project to coordinate builder awareness and launch community participation.',
    imageSrc: '/assets/brand-card-gold-coin.jpg',
    imageAlt: 'Launchpad ambassadorship archive card',
    link: 'https://t.me/Senor_Izyche',
    linkLabel: 'Channel Announcement',
    handle: 'Funpump'
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
    isCommunityTrade: false,
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
    isCommunityTrade: false,
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
    isCommunityTrade: false,
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
    isCommunityTrade: false,
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
    isCommunityTrade: false,
    imageSrc: '/assets/pnl-retard-4x.jpg',
    caption: 'Telegram bot snipe execution receipt from the Pleased Devs era.'
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
    isCommunityTrade: false,
    imageSrc: '/assets/pnl-namecoin-3x.jpg',
    caption: 'Early sniper call record logged in the channel archive.'
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
    alt: 'ETF token snipe record',
    description: 'One of the very first documented calls in the channel. 1.09M MCap, 260K volume.'
  },
  {
    id: 'tlc-raid',
    title: 'TLC Raid Manager Record',
    date: '01 April 2025',
    result: 'Raid Score +6',
    source: 'Telegram Raid Bot',
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
    context: "Client collaboration feedback (Telegram archive)",
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
    role: "Fundraisers Web Community",
    context: "Community campaign tribute",
    date: 'May 2026'
  }
];

export const PNL_RECEIPTS = HISTORICAL_PNL_ARCHIVE;

