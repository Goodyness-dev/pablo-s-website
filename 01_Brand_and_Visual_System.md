# 01. Brand and Visual System

The look in one sentence: obsidian black, lit by diamond light, with a street smile.

Everything on the site pulls from this sheet. If a design choice is not in here, it does not ship.

***

## 1. Brand sources we are building from

1. The black and white circular face logo with the text THE FUNDRAISER wrapped around it. This is the identity mark.
2. The gold glass hand holding the F coin, from the brand card with the line "Web3, DeFi, Growth strategy" and the handle @IZYCHE_. This is the money mark.
3. The Ether Archive partnership poster: black space, a glowing planet horizon, chrome four point stars, a glass pill holding "10 WL spots". This proves his visual language already leans diamond and chrome. We push it further.
4. The old pink chart avatar from the Web 3 gains channel. Used only as an origin artifact.

## 2. Color system

Token names use underscores so they can be pasted straight into code.

### Base surfaces (about 70 percent of every screen)
1. obsidian_950: #05060A. The deepest black. Page base and loader.
2. obsidian_900: #07080C. Main background.
3. midnight_850: #0B0E1A. Section bands.
4. midnight_800: #0E1226. Glass panel base.
5. midnight_700: #161B36. Raised surfaces, hover state.

### Diamond light (about 20 percent)
1. diamond_white: #F4FBFF. Headlines, highlights.
2. diamond_ice: #BDE7FF. The signature color. Links, outlines, glows.
3. diamond_cyan: #6FD8FF. Active states, facet light.
4. diamond_deep: #2FA8E6. Deep facets, buttons pressed.
5. chrome_silver: #C9D3E0. Secondary metal, borders, stars.
6. chrome_shadow: #7A8699. Muted metal.

### Prism flashes (about 8 percent, only on light effects)
1. prism_violet: #9B7CFF
2. prism_pink: #FF7AD9
3. prism_mint: #7CFFD9
These never appear as flat fills. They exist only inside gradients and sparkles, the way a real diamond throws color.

### Gold (about 2 percent, money moments only)
1. gold_light: #FFE49A
2. gold_coin: #F2C14E
3. gold_deep: #B8862B
Use gold for: PNL multipliers, the F coin, the single highest value number in a stat, and the contact button glow. Never for body text or backgrounds.

### Text
1. text_primary: #F4FBFF
2. text_secondary: #A8B4C8
3. text_muted: #6B778C
4. Minimum contrast for body text: 7 to 1 on obsidian_900. text_secondary passes. text_muted is for labels only, never paragraphs.

### Gradients
1. Diamond sheen, angle 135 degrees: diamond_white at 0 percent, diamond_ice at 30 percent, #8FB8FF at 55 percent, #C9A8FF at 78 percent, #FFD6F1 at 100 percent. Used on the big headline sweep and button shine.
2. Void glow, radial: #11163A at center fading to obsidian_950 at the edges. Sits behind the hero diamond.
3. Coin gold, angle 160 degrees: gold_light, gold_coin, gold_deep.
4. Prism edge, conic: diamond_ice, prism_violet, prism_pink, prism_mint, back to diamond_ice. Used as a 1 pixel border on the most important cards.

### Light behavior rules
1. Only diamonds emit light. Cards glow ice only when hovered or active.
2. Never use a drop shadow that is black on black. Depth comes from edge highlights and glow.
3. One light source: top left. Every highlight, facet and sheen respects that.

## 3. Typography

### Families (all free, loadable from Google Fonts)
1. Display: Sora, weights 600 and 800. Soft, round, clean tech. Not geek.
2. Body: DM Sans, weights 400 and 500.
3. Mono labels: JetBrains Mono, weight 500, used only for dates, tickers, chapter numbers and small tags.
4. Street accent: Permanent Marker, used maybe five times on the whole site for mascot speech bubbles and one underline scribble. It carries the Riley energy.
5. Optional upgrade if the client wants more luxury: Clash Display from Fontshare for headlines instead of Sora.

### Scale (desktop / mobile)
1. Hero headline: 120 pixels / 52 pixels, weight 800, line height 0.95, letter spacing slightly tight.
2. Chapter title: 72 / 36, weight 800.
3. Section heading: 48 / 30, weight 600.
4. Lead paragraph: 22 / 18, DM Sans 400, line height 1.5.
5. Body: 17 / 16, line height 1.65.
6. Mono label: 13 / 12, uppercase, letter spacing 0.14em.
7. Outlined chapter numeral: 220 / 120, no fill, 1 pixel diamond_ice outline at 40 percent opacity.

### Type rules
1. One idea per headline. Short. Never more than two lines on mobile.
2. Headline words that matter get the diamond sheen gradient, never more than two words per headline.
3. Numbers (like 7.7x) use Sora 800 in gold_coin with a faint glow.
4. No all caps paragraphs. All caps only for mono labels and the logo lockup.

## 4. Spacing, shape, depth

1. Spacing scale in pixels: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192.
2. Section vertical padding: 192 desktop, 96 mobile.
3. Content max width: 1200 pixels. Text column max width: 640 pixels.
4. Corner radius: 14 small, 22 cards, 32 hero panels, full pill for buttons and tags.
5. The diamond cut corner: signature cards have the top right corner cut at 45 degrees, 24 pixels deep, like a chamfered gem. This is the shape language that ties cards to diamonds.
6. Glass card recipe: fill white at 4 percent opacity over midnight_800, background blur 18 pixels, 1 pixel border diamond_ice at 14 percent, a 1 pixel inner top highlight white at 20 percent, outer glow ice at 10 percent and 40 pixels wide.
7. Hover on glass: border rises to 40 percent, glow to 22 percent, card lifts 6 pixels, a diagonal glint sweeps across in 700 milliseconds.

## 5. The diamond kit (the heart of the design)

### 5.1 Master diamond geometry (vector, 100 by 100 grid)
A classic brilliant cut gem icon. Give this to whoever draws the SVG.

1. Outer outline points: 10,38 then 28,16 then 72,16 then 90,38 then 50,92 and close.
2. Girdle line: straight from 10,38 to 90,38.
3. Table (top edge): 28,16 to 72,16, with a midpoint at 50,16.
4. Crown facet lines: 28,16 to 38,38. 50,16 to 38,38. 50,16 to 62,38. 72,16 to 62,38.
5. Pavilion facet lines: 38,38 to 50,92. 62,38 to 50,92. 50,38 to 50,92.
6. Facet fills, lit from top left:
   * Table: diamond_white at 95 percent
   * Crown left: diamond_ice
   * Crown mid left: #8FD3FF
   * Crown mid right: #6FB6F2
   * Crown right: #4C9BE0
   * Pavilion left: diamond_cyan fading to diamond_deep
   * Pavilion center: diamond_deep fading to #1B5FAE
   * Pavilion right: #14478A fading to midnight_700
7. Stroke: diamond_white at 70 percent, 1 pixel at 100 pixel scale.

### 5.2 Where diamonds appear (the heavy diamond checklist)
1. Hero: a large live diamond, about 520 pixels, 3D with refraction.
2. Scroll companion: a sticky diamond that morphs through seven stages.
3. Bullets: every list marker is a 10 pixel diamond.
4. Dividers: a thin line with a centered small diamond and two smaller ones either side.
5. Cursor: a diamond outline that trails sparkles (desktop).
6. Loader: the stone cutting animation.
7. Card corners: the cut corner, plus a tiny diamond that lights in the notch on hover.
8. Section transitions: a field of drifting facet shards that settle into the next section.
9. Stat badges: each big number sits in a small diamond shaped badge.
10. Footer: a GM ticker with diamond separators.
11. Contact: the diamond chain button.
12. Favicon and share image: the master diamond with a tiny gold coin.

### 5.3 Sparkle spec
1. Shape: a four point star, long vertical and horizontal points, thin waist.
2. Colors: diamond_white core, diamond_ice halo, occasional prism tint.
3. Life: grow from 0 to 1 scale, hold, shrink to 0, total 900 milliseconds.
4. Density: 6 to 14 per large diamond, 2 to 4 per card, randomized delays.
5. Never more than 40 sparkles on screen at once.

### 5.4 Background texture
1. Film grain overlay at 3 percent opacity across the whole page to kill banding.
2. Star dust: very faint tiny dots drifting upward at about 4 pixels per second, 60 on desktop and 24 on mobile.
3. Subtle facet shards: huge, blurred, translucent triangles in midnight tones behind sections, moving slowly with scroll.

## 6. Logo usage

1. Primary lockup: the face logo, white on obsidian, with THE FUNDRAISER wordmark in Sora 800 beside it.
2. The face is also the mascot. Redrawn as a sticker with a thick white outline and slight tilt, it can lean in from the edge with a speech bubble in Permanent Marker.
3. The gold F coin is used as: the bullet for money stats, the loading spinner finish, the favicon accent, and the mark on the Contact section.
4. Clear space around the logo: the height of the face's eyes on every side.
5. Never recolor the face. Never place it on a busy image without a dark scrim.
6. Never place the old pink chart avatar anywhere except the origin chapter and the archive.

## 7. Imagery and screenshot treatment

Screenshots are the proof of work, so they get jewelry treatment.

1. Every screenshot sits inside a glass frame with the cut corner and a 1 pixel ice border.
2. The Phanes and RickBurp PNL cards are loud green. To make them belong, add a 10 percent diamond_ice color overlay in multiply blend and lower saturation by about 15 percent. The multiplier number stays crisp.
3. Crop out wallet balances, other people's usernames, blur marks and any redaction scribbles. A redaction mark looks cheap.
4. Tweets and X analytics screenshots get a faint device frame, no shadow, rounded corners 22 pixels.
5. Display sizes: cards 480 pixels wide, hero case study images 960 pixels, always exported as WebP with a JPEG fallback.
6. Captions are always mono labels: DATE, SOURCE, and a verified tick if confirmed.

## 8. Iconography

1. Line icons, 1.5 pixel stroke, rounded caps, in diamond_ice.
2. Custom set needed: raid, community, megaphone, vote, calendar, Telegram, X, link out, copy, GM sun.
3. Icons sit inside a small circle with the glass recipe.

## 9. Voice and tone

The voice is Izyche on a good day: confident, warm, quick, funny, never corporate, never hype shouting.

### Do
1. Short lines. Punchy. Rhythm like speech.
2. Plain words over jargon.
3. A bit of swagger: "We deliver." "You dig?" "Light work."
4. Own the journey, including setbacks.
5. Always tie a claim to a receipt.

### Do not
1. No "revolutionary", "synergy", "cutting edge", "web3 ecosystem leverage".
2. No promises of profit. Ever.
3. No fake urgency, no countdown clocks on guarantees.
4. No insulting other projects.

### Sample lines in the voice
1. "Pressure makes diamonds."
2. "We get chosen because we deliver."
3. "Wallet got drained. The drive did not."
4. "Light work. Loud results."
5. "Value breeds value."
6. "Keep showing up. Your time will come."
7. "You dig?"

## 10. Sound (optional, off by default)

1. A soft glass chime on diamond sparkle moments.
2. A low whoosh on chapter changes.
3. A single bright ping when the diamond becomes brilliant.
4. A visible toggle in the nav. Respect the choice for the whole session.

## 11. Accessibility inside the brand

1. Every sparkle and animation can be turned off through a reduced motion setting, and the site respects the device's reduced motion preference automatically.
2. Text on glass always sits on a dark scrim to keep contrast.
3. Focus rings: 2 pixel diamond_cyan with a 4 pixel offset, never removed.
4. Gold and ice are never the only way meaning is shown. Always add a label.
