# 03. Components and Layouts

Every reusable piece of the site, with its anatomy, states and mobile behavior. All colors and sizes refer to tokens in 01_Brand_and_Visual_System.md.

Base design widths: 390 (phone), 768 (tablet), 1024 (laptop), 1440 (desktop). Design the 390 version first.

***

## 1. Grid and layout

1. Desktop: 12 columns, 24 pixel gutters, 1200 pixel max content width, centered.
2. Tablet: 8 columns, 20 pixel gutters, 40 pixel side margins.
3. Phone: 4 columns, 16 pixel gutters, 20 pixel side margins.
4. Safe areas on phones: add the device safe area inset to top and bottom padding so nothing sits under the notch or the home bar.
5. Chapters alternate their text and visual sides on desktop. On phone, visual first, text second.

***

## 2. Navigation bar

Anatomy: the face logo (left), anchor links (center on desktop), sound toggle and a small "Work with us" pill (right).

1. Height: 72 desktop, 60 phone.
2. Background: transparent at the top, then glass at 60 percent opacity with 18 pixel blur after the first 80 pixels of scroll.
3. Links: Story, Work, Services, Reviews, Contact. Mono label style. The active link has a diamond bullet that slides to it.
4. Phone: the links collapse into a full screen menu. Opening it plays a facet burst, and the links appear one by one with diamond bullets. The "Work with us" pill stays visible in the bar.
5. The nav hides on scroll down and returns on scroll up.

***

## 3. Progress diamond

1. A small vertical rail in the right margin, 140 pixels tall on desktop. It holds six small diamonds, one per chapter.
2. The current chapter's diamond fills with ice light. Completed ones stay lit. Upcoming ones are outlines.
3. Hover or tap a diamond to jump to that chapter, with a tooltip in mono: "03 THE FUNDRAISER".
4. Phone: becomes a thin horizontal bar under the nav with six tiny diamonds.

***

## 4. Companion diamond (sticky)

1. Desktop: fixed in the viewport on the side opposite the current chapter's text, 420 pixels. It changes state as the scroll passes each chapter, with a 900 millisecond blend.
2. Phone: a 64 pixel diamond badge in the top right corner that morphs between stages, plus full screen diamond interludes of 60 percent viewport height at each chapter break, where the large diamond plays its transformation.
3. Stage list: 00 rough, 01 cleaved, 02 faceted, 03 polished, 04 brilliant, 05 set, 06 chain.
4. If the device is weak, replace the 3D version with a layered vector version and CSS animation. Same look, lower cost.

***

## 5. Buttons

### Primary (diamond button)
1. Shape: pill, height 56, padding 28 horizontal.
2. Fill: diamond sheen gradient at low opacity over midnight_800, 1 pixel prism edge border.
3. Text: diamond_white, DM Sans 500, 16 pixels.
4. Hover: glint sweeps across in 600 milliseconds, glow rises, button lifts 3 pixels, a small sparkle appears at the top right.
5. Press: scales to 0.98, glow dims.
6. Focus: 2 pixel diamond_cyan ring with an offset.
7. Loading: the label is replaced by a tiny spinning diamond.

### Secondary (ghost)
1. Transparent, 1 pixel diamond_ice border at 40 percent, label in diamond_ice.
2. Hover fills with 8 percent ice.

### Gold (use once or twice on the entire site)
1. The Contact button only, and the "Join the community" button on the Ether Archive feature.
2. Fill: coin gold gradient, label in obsidian_900.

### Link
1. Underline is a thin ice line that grows from left to right on hover, with a tiny diamond at its end.

***

## 6. Chapter plate

Anatomy, top to bottom:
1. Outlined numeral (like 03), huge, 1 pixel ice outline at 40 percent opacity, set behind the text.
2. Mono date label in text_secondary.
3. Chapter title in Sora 800, with one word in the diamond sheen gradient.
4. Lead sentence in 22 pixel DM Sans.
5. A diamond divider.

Motion: the numeral draws itself by stroke over 1.2 seconds as the section enters. The title rises 24 pixels while fading in. The date types in character by character in mono.

***

## 7. Glass card (base)

The base for everything else. Specs in 01 section 4.

1. Padding: 32 desktop, 24 phone.
2. Cut corner: top right, 24 pixels, with a tiny diamond that lights in the notch on hover.
3. Hover: lift 6 pixels, glow rising, glint sweep.
4. Touch devices: the glint plays once on tap, no persistent hover.

***

## 8. Proof card

For every project in the Fundraisers Web chapter.

Anatomy:
1. Image area (screenshot in the glass frame) at the top, 16 to 10 aspect ratio.
2. A row of tag pills in mono: AMBASSADOR, X SPACE HOST, RAIDS.
3. Project name in Sora 800.
4. One line result in DM Sans.
5. Stat row: up to three numbers, each inside a small diamond badge with the gold number and a mono label underneath.
6. Footer: a link pill "Open project" with a link out icon.
7. A "VERIFIED" tick in the corner next to any number that comes straight from a screenshot.

States: default, hover (tilt in 3D by up to 6 degrees following the cursor), expanded (opens into the case study view).

Case study view (expanded):
1. A full width gallery at the top (tweets fanned like cards, a Space card, analytics).
2. A "what we did" list with diamond bullets.
3. A "what happened" list of numbers that count up when seen.
4. A closing line and a button to the project site.

***

## 9. PNL receipts carousel

1. A slim horizontal carousel, 3 cards visible on desktop, 1.3 cards visible on phone to hint at more.
2. Card frame: ice glass, cut corner. Inside, the original call image with the ice overlay treatment.
3. Under each card in mono: TICKER, CALLED AT, RESULT, DATE.
4. Drag or swipe to move. Autoplay is off. Arrow buttons on desktop are small diamonds.
5. Above the carousel: "Only the good ones." Below: "Past results are not a promise. NFA, DYOR."
6. Maximum 5 cards. If more is requested, they go to the Archive.

***

## 10. Stats strip

1. A row of three or four big numbers, each in a diamond badge.
2. Numbers count up over 1.4 seconds when the strip first enters view.
3. Gold for the single most important number, ice white for the rest.
4. Only VERIFIED numbers. Suggested set: 72 tuned in live, 30.2K impressions, 100+ community members, 7.7x best recent call.
5. Phone: becomes a two by two grid.

***

## 11. Timeline spine (story rail)

1. A thin vertical line in the center on desktop, on the left on phone.
2. A small diamond node for every dated event, in ice. The latest node pulses softly.
3. Events attach to the rail with short mono labels. Example: 29 MAR 2025, CHANNEL CREATED. 14 OCT 2025, REBRAND. 17 JAN 2026, FAMILY REACHES 60. 22 MAR 2026, X SPACE, 72 LIVE. 13 OCT 2026, ETHER ARCHIVE PARTNERSHIP.
4. The line fills with ice light as you scroll.

***

## 12. Before and after slider

1. Used for: the old and new logo, and the Wojak Meter without us and with us images.
2. A vertical divider with a diamond handle. Drag to reveal.
3. Labels in mono in each corner: BEFORE and AFTER.
4. Phone: also supports a tap to toggle.

***

## 13. Service card

1. Icon in a glass circle, 56 pixels.
2. Title in Sora 600.
3. One line of copy.
4. A small "What it looks like" link that opens the matching case study.
5. Hover: icon rotates slightly, glint sweep.

***

## 14. Review card

1. Quote in DM Sans 500, 20 pixels, with a large faint opening quote mark in ice.
2. Author line: first name or alias, with a small role label.
3. A tiny gold star row is NOT used. Reviews carry no ratings, only words.
4. The card drifts slowly and pauses on hover.

***

## 15. Archive tile

1. Square or portrait glass tile, desaturated to 70 percent. On hover it returns to full color.
2. Tap or click to open a lightbox with the date, source, and a caption.
3. Masonry grid with 3 columns on desktop and 2 on phone.

***

## 16. Mascot sticker

1. The face logo redrawn as a sticker: thick white outline, soft shadow, 6 degree tilt.
2. Appears only at the edges, peeking in at four places on the whole page.
3. A speech bubble in Permanent Marker, white on obsidian, with a hand drawn tail.
4. Lines in the bubbles: "you dig?", "light work", "GM", "we deliver".
5. Clicking the mascot makes it wink and fire a small sparkle burst.

***

## 17. Cursor (desktop only)

1. Default: an 18 pixel diamond outline in ice, following the pointer with a slight lag.
2. Over a link or button: scales to 1.6 and fills with ice at 20 percent.
3. Over a draggable carousel: shows a small "drag" label.
4. Trail: up to 5 tiny sparkles fading in 600 milliseconds.
5. Hidden on touch and when reduced motion is on.

***

## 18. Contact chain button

1. A horizontal chain of seven small diamonds linked by thin gold lines, ending in a large diamond pill that reads "Message on Telegram".
2. On entering view, the diamonds drop in one by one from the top with a spring and link up.
3. On hover, a shimmer travels left to right along the chain.
4. On phone the chain is arranged vertically, three small diamonds above the main button.
5. The button opens https://t.me/Senor_Izyche.

***

## 19. Footer GM ticker

1. A slow marquee of "GM" with diamond separators, 40 pixels per second.
2. Pauses on hover. Stops entirely under reduced motion.
3. Under it: legal line, handles, sign off "You dig?".

***

## 20. Toasts and microcopy

1. Copy confirmation: "Copied. Light work."
2. Form success: "Got it. We will hit you back."
3. Form error: "That did not go through. Try again, or message us on Telegram."
4. Empty carousel or loading: "Polishing..."
5. 404 page: a cracked diamond and the line "This stone got lost. Back to the vault." with a button home.

***

## 21. Responsive behavior summary

1. Hero: stacked on phone, side by side on laptop and up.
2. Case studies: image first on phone, and the number badges wrap into a two column grid.
3. Services: one column on phone, two on tablet, three on desktop with staggered offsets.
4. Companion diamond: badge on phone, sticky large on desktop.
5. All hover effects have a tap equivalent that plays once.
6. Tap targets are never smaller than 44 by 44 pixels.
7. Body text never drops below 16 pixels on phone.

***

## 22. Page templates

1. Home: the whole story, as described in 02.
2. Project page (optional second release): the expanded case study view as its own address, so each project can be linked in outreach messages.
3. Archive page (optional): the full list of old receipts.
4. Legal page: NFA and DYOR statement, results disclaimer, privacy line.
