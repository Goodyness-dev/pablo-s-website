import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'raids',
    title: 'Raid Squad Operations',
    punchline: 'Fast, clean, loud.',
    description: 'Targeted, synchronized community raids that take over comment sections, push algorithm feeds, and put your launch in front of real crypto buyers.',
    icon: 'raid',
    highlights: ['Organized timeline takeovers', 'Real accounts, zero bot spam', 'Live raid leaderboards'],
    imageSrc: '/assets/service-raids.jpg'
  },
  {
    id: 'community',
    title: 'Community Building & Moderation',
    punchline: 'A room that stays alive.',
    description: 'Transform passive members into active advocates. We maintain 24/7 moderation, host community competitions, and keep morale high regardless of market conditions.',
    icon: 'community',
    highlights: ['High-energy culture building', 'Spam defense & scam filtration', 'Daily engagement rituals'],
    imageSrc: '/assets/service-community.jpg'
  },
  {
    id: 'ambassador',
    title: 'Ambassador & Growth Roles',
    punchline: 'A dedicated voice for your launch.',
    description: 'Official representation across crypto networks. We put our brand and reputation behind your project, bridging trust between devs and the trenches.',
    icon: 'ambassador',
    highlights: ['Trusted public advocate', 'Cross-community introductions', 'Direct investor trust'],
    imageSrc: '/assets/service-ambassador.jpg'
  },
  {
    id: 'spaces',
    title: 'X Spaces & Live Audio',
    punchline: 'Hosted live, recorded, shared.',
    description: 'Professional X Space hosting that commands attention. Deep-dive interviews, live AMAs, and high-energy shill sessions that convert casual listeners into holders.',
    icon: 'spaces',
    highlights: ['45-60 min high-energy hosting', 'Key CT guests & co-hosts', 'Recorded audio cutdowns'],
    imageSrc: '/assets/service-spaces.jpg'
  },
  {
    id: 'vote-trending',
    title: 'Vote Trending & Scanner Heat',
    punchline: 'Eyes on the chart.',
    description: 'Organic boost strategies that get your token noticed on top ranking scanners, DEX tools, and voting platforms right when liquidity is flowing.',
    icon: 'trending',
    highlights: ['Multi-platform trending rank', 'Coordinated voting sprints', 'Maximum launch visibility'],
    imageSrc: '/assets/service-trending.jpg'
  }
];
