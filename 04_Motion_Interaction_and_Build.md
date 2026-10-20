# 04. Motion, Interaction and Build Plan

How it moves, how it is built, and how it stays fast on a mid range Android phone with patchy data.

***

## 1. Motion principles

1. Motion explains the story. If an animation does not move the story forward, cut it.
2. Everything eases like glass, not like rubber. Smooth start, long soft landing.
3. One hero motion per screen. Everything else supports it.
4. Light moves, shapes follow. Glints and sheens do most of the work, big movements are rare.
5. Never block the user. Nothing makes them wait to read or tap.
6. Always degrade. Weak device or reduced motion setting gives a calm, still version that looks just as rich.

### Timing tokens
1. Micro: 160 milliseconds (hover color, press).
2. Quick: 280 milliseconds (cards lifting, links).
3. Standard: 600 milliseconds (reveals, glints).
4. Slow: 900 milliseconds (diamond stage blends).
5. Scene: 1200 to 1800 milliseconds (loader, chapter plates).

### Easing tokens
1. Glass out: cubic bezier 0.22, 1, 0.36, 1. Default for reveals.
2. Soft in out: cubic bezier 0.65, 0, 0.35, 1. For morphs and the diamond.
3. Spring snap: a spring with stiffness 220 and damping 22. For the chain drop and badges.

***

## 2. The scroll choreography

The page uses one master scroll timeline. Each chapter owns a slice. The companion diamond reads the scroll progress inside its slice and blends between states.

Stage by stage, what the diamond does:

1. Stage 00, Rough (hero to Chapter 01). A faceless, irregular stone made of about 14 jagged planes, matte grey indigo, a faint inner glow. It rotates slowly.
2. Stage 01, Cleave (Chapter 02). A single bright seam appears across the stone. The two halves separate by 6 pixels and a thin flare leaks from the crack. At the end of the chapter, the halves close and the surface becomes smoother.
3. Stage 02, Facet (Chapter 03). Facet lines draw on one by one, 120 milliseconds apart, in diamond_white at 70 percent. The inside stays dark so it looks like an engraved blueprint of a gem.
4. Stage 03, Polish (Chapter 04). A diagonal specular sweep crosses the facets repeatedly. The interior begins to glow from the culet upward. A soft heartbeat pulse every 3 seconds.
5. Stage 04, Brilliant (Chapter 05). Full refraction. Prism colors split at the edges. Particles orbit slowly. Light beams radiate from behind. This is the loudest moment on the page.
6. Stage 05, Set (Chapter 06). Four gold prongs grow up around the girdle, then a gold band wraps the base. The F coin glints inside the band.
7. Stage 06, Chain (Contact). The setting detaches into a pendant. A chain of small diamonds links outward and becomes the Contact button.

Scroll rules:
1. Use smooth scrolling with light inertia, but never take away native scroll on phones.
2. Pin the diamond only on desktop. On phone, the badge morphs without pinning.
3. Chapter transitions overlap by about 12 percent of the viewport so there are never dead gaps.

***

## 3. Signature interactions

1. Hero diamond tilt. Desktop follows the cursor within plus or minus 14 degrees. Phone reads device orientation when allowed, and falls back to a slow auto rotation when not.
2. Glint hover on cards. A diagonal band of light sweeps across in 700 milliseconds, once per hover.
3. Tilt cards. Proof cards rotate up to 6 degrees toward the cursor with a subtle depth shadow made from ice glow.
4. Number counters. Count up from zero over 1.4 seconds when first seen, with the final digit landing slightly after the rest.
5. Before and after slider. The handle is a small diamond that sparkles when released.
6. Mascot peeks. The sticker slides in 40 pixels from an edge and the bubble pops with a spring, then retreats after 4 seconds or when scrolled past.
7. Konami style secret. Click the footer diamond seven times for a sparkle burst and the toast "GM, fundraiser fam".
8. Chain assembly. Diamonds fall in with the spring tokens and link.

***

## 4. The hero diamond, three build options

### Option A. Real 3D (best look, heaviest)
1. Use Three.js through React Three Fiber, with a transmission style glass material for refraction and a studio environment map for reflections.
2. A custom low polygon diamond mesh of about 60 faces.
3. Bloom post effect, kept light. Chromatic aberration only on edges.
4. Target: 60 frames per second on a recent phone, 30 on weak devices. Cap pixel ratio at 2.
5. Compressed model under 200 kilobytes, environment map under 300 kilobytes.

### Option B. Spline scene (fastest to produce)
1. Design the diamond and stages in Spline, embed the runtime.
2. Good looking, quick, but a bigger runtime download. Use only on desktop and good phones.

### Option C. Vector layered fallback (lightest, always available)
1. Build the diamond from the master geometry in 01 using SVG polygons with the facet gradients.
2. Animate with CSS transforms and gradient shifts, and a moving highlight mask for the sheen.
3. Runs on any device. Used automatically when the device is weak, data saver is on, or WebGL is not available.

Recommended path: build Option C first so the site always works, then layer Option A on top as a progressive upgrade.

***

## 5. Tech stack recommendation

1. Framework: Next.js with the app router, or Vite with React if the host is simple. Either works. Next.js is better for share previews and image handling.
2. Styling: Tailwind CSS with the tokens from 01 mapped into the theme, plus a small amount of custom CSS for glass and cut corners.
3. Animation: GSAP with ScrollTrigger for the story timeline and the chapter plates. Framer Motion for small interface motion like cards and menus.
4. Smooth scroll: Lenis, disabled on touch devices and for reduced motion.
5. 3D: React Three Fiber with the Drei helpers, loaded lazily after first paint.
6. Icons: a custom SVG set, inlined.
7. Fonts: Sora, DM Sans, JetBrains Mono and Permanent Marker, preloaded for the weights used, with a font display swap and system fallbacks.
8. Forms: a simple form that posts to a serverless function which forwards to Telegram or email.
9. Hosting: Vercel (his other projects already live there, for example the Clover Boys site), with a custom domain.
10. Analytics: a privacy friendly analytics tool to see which sections get views and which button gets pressed.
11. Content: store projects in one simple data file or a lightweight content system so a new project can be added in five minutes without a developer.

Content model for a project entry:
1. name
2. slug
3. role tags
4. date
5. one line result
6. stats list (label, value, verified flag)
7. gallery images
8. external link
9. status (live, past, archive)
10. featured flag

***

## 6. Performance budget

Target users: phones on mobile data, including mid range Android devices.

1. First load JavaScript under 180 kilobytes before the 3D layer. The 3D layer loads after first paint, only on capable devices.
2. Largest Contentful Paint under 2.5 seconds on a mid range phone on 4G.
3. Cumulative layout shift under 0.05. Reserve space for every image and the diamond.
4. All images exported in WebP with a JPEG fallback, sized for the display, with lazy loading below the first screen.
5. Screenshots compressed to about 80 to 120 kilobytes each at display size.
6. No autoplaying video. If a Space recording preview is added later, it loads on tap.
7. Particle counts: 60 desktop, 24 phone, 0 on reduced motion.
8. Test on a low end Android before sign off. If it janks, drop particles first, then post effects, then swap to the vector diamond.

***

## 7. Accessibility and quality

1. Full keyboard navigation with visible focus rings.
2. Every image has useful alt text. For screenshots, the alt describes the number, not just "screenshot".
3. The animation layer respects the system reduced motion setting. In that mode: no loader cut, no cursor trail, no marquee, no parallax, static diamond stages that swap with a gentle fade.
4. Color contrast checked for all text on glass. Dark scrim behind text on images.
5. A skip to content link at the very top.
6. Semantic structure: one H1 (the hero line), H2 for each chapter, proper landmarks.
7. Language set, meta title and description written in the brand voice.

***

## 8. Sharing and SEO

1. Open Graph and X card image: the master diamond on obsidian with the line "Pressure makes diamonds." and the logo. Size 1200 by 630. Make a second square version for Telegram previews.
2. Page title: "The Fundraiser | Web3 Growth Agency".
3. Description: "Raids, communities, Spaces and visibility for Web3 projects. See the proof of work."
4. Favicon: the master diamond with a small gold coin, in 32, 180 and 512 pixel sizes.
5. A short, clean address for each project page if the second release ships.
6. Structured data for the organization, with the handles.

***

## 9. Safety, legal and trust notes

1. A visible disclaimer in the footer and under every PNL block: "Past results are not a promise. NFA, DYOR."
2. No promise of returns, no investing advice, no guaranteed outcomes anywhere in the copy.
3. Do not display wallet addresses, contract addresses with buy links, or token buy buttons. The site is a proof of work for services, not a trading page.
4. Do not publish private chats, prices from conversations, or any person's name without permission.
5. Get written permission, even a short Telegram message, from each named project before launch.
6. Label community trades as community trades so nobody mistakes them for paid client work.

***

## 10. Build plan

Total, with a focused solo builder: about 3 weeks for the full version, or about 8 days for the short version described in 02. Adjust to the client's deadline once known.

### Phase 0. Lock the brand (Days 1 and 2)
1. Get the logo files, collect full size screenshots, get the permissions.
2. Build the brand sheet from 01 as a single page for sign off.
3. Export favicon and share images.

### Phase 1. Wireframes and diamond proof (Days 3 to 5)
1. Mobile wireframes for every section.
2. Build the vector diamond (Option C) with all seven stage states.
3. Prototype the loader and the hero. Show the client. This is the moment that closes the deal.

### Phase 2. Core build (Days 6 to 12)
1. Layout system, nav, progress diamond, buttons, glass cards.
2. Chapters 01 to 06 with real content and screenshots.
3. Proof cards, stats strip, PNL carousel, before and after slider.
4. Services, Reviews, Archive, Contact chain.

### Phase 3. Motion and polish (Days 13 to 17)
1. Scroll choreography and chapter plates.
2. Cursor, sparkles, mascot peeks, GM ticker, easter egg.
3. Optional 3D diamond upgrade (Option A).

### Phase 4. Test and launch (Days 18 to 21)
1. Device testing: low end Android, mid range Android, iPhone, laptop.
2. Speed and accessibility pass.
3. Copy pass with the client. Confirm every number.
4. Domain, analytics, share previews, launch.

### Phase 5. After launch
1. Add the Ether Archive mint result after 31 October 2026.
2. Add new projects as they land using the content model above.
3. Review analytics after two weeks and adjust the hero copy if needed.

***

## 11. Quality checklist before showing the client

1. Does the loader finish in under two seconds on mobile data?
2. Does every number on screen match a screenshot or a confirmed message?
3. Does every diamond use the same master geometry and light direction?
4. Is gold used only for money moments?
5. Is there anywhere that looks like geek techy (code text, grids, neon)? Remove it.
6. Does it still look rich with all animation off?
7. Can a first time visitor say what Fundraisers Web does within ten seconds?
8. Is the contact button reachable in one tap from anywhere on the page?
