import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'campaigns',
    number: '01',
    title: 'Raid campaigns',
    summary: 'Coordinated community activity with a clear brief, schedule, and record of participation.',
    deliverables: [
      'Campaign brief and participation guidelines',
      'Structured timeline and raid target scheduling',
      'Timeline engagement tracking and activity log',
      'Reporting on reach and community response'
    ],
    imageSrc: '/assets/service-community.jpg',
    imageAlt: 'Raid campaigns operations artwork'
  },
  {
    id: 'moderation',
    number: '02',
    title: 'Community building & moderation',
    summary: 'Keep people informed, conversations moving, and the community organised.',
    deliverables: [
      'Active moderation coverage across key time zones',
      'Daily conversation prompts and announcements',
      'Filtration of spam, scams, and malicious links',
      'Community voice calls and engagement rituals'
    ],
    imageSrc: '/assets/service-raids.jpg',
    imageAlt: 'Community building and moderation visual'
  },
  {
    id: 'ambassador',
    number: '03',
    title: 'Ambassador representation',
    summary: 'A public voice for your project across content, conversations, and community appearances.',
    deliverables: [
      'Accountable public representation by @IZYCHE_',
      'Regular dedicated content and milestone commentary',
      'Ecosystem introductions and cross-community visibility',
      'Ongoing communication and milestone alignment'
    ],
    imageSrc: '/assets/service-ambassador.jpg',
    imageAlt: 'Ambassador representation artwork'
  },
  {
    id: 'spaces',
    number: '04',
    title: 'X Spaces & live conversations',
    summary: 'Plan the topic. Bring people together. Host a conversation worth joining.',
    deliverables: [
      'Agenda development and discussion framing',
      'Speaker and guest co-host coordination',
      'Live hosting and audience moderation by @IZYCHE_',
      'Post-Space recording distribution and recap threads'
    ],
    imageSrc: '/assets/service-spaces.jpg',
    imageAlt: 'X Spaces and live conversations visual'
  },
  {
    id: 'trending',
    number: '05',
    title: 'Trending & scanner campaigns',
    summary: 'Campaign coordination with clear deliverables and reporting on what ran.',
    deliverables: [
      'DEX scanner, voting platform, and timeline strategy',
      'Coordinated community activity sprints',
      'Deliverable verification and visibility logs',
      'Transparent reporting on campaign performance'
    ],
    imageSrc: '/assets/service-trending.jpg',
    imageAlt: 'Trending and scanner campaigns visual'
  }
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Understand', description: "Tell us what you're building." },
  { step: '02', title: 'Plan', description: 'Agree on the work and how to measure it.' },
  { step: '03', title: 'Run', description: 'Put the campaign into motion.' },
  { step: '04', title: 'Review', description: 'Look at the activity, results, and next steps.' }
];
