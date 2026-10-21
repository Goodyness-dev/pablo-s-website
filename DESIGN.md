# DESIGN SYSTEM SPECIFICATION: DARK METALLIC GLOSSY (WEB3)
**Client / Brand:** The Fundraiser (`pablo-s-website` / Izyche)  
**Document Version:** 2.1.0 (Mobile-First Polish Update)  
**Inspiration & Benchmark:** [OpenCircle](https://opencircle.cc/) (Ref: `cc.png`, `cc1.png`, `cc2.png`)  
**Design Lead:** Antigravity UI/UX  

---

## 1. Executive Summary & Design Vision

### 1.1 The Shift
The existing site layout established a diamond theme, but relied on harsh angular chamfer cuts (`clip-path: polygon`), inconsistent ad-hoc image modals, and fragmented component borders.

This design system upgrades the entire interface to an **ultra-premium, dark metallic glossy Web3 design system** directly inspired by **OpenCircle's design language** (`cc.png`, `cc1.png`, `cc2.png`). It is engineered **mobile-first**, recognizing that over 70% of Web3 traffic, Telegram community members, and degen visitors will browse directly on iOS and Android devices.

The system unifies:
1. **Obsidian & Gunmetal Layered Surfaces**: Deep, velvety black foundations with subtle cold luminescence, specular top highlights, and brushed metal textures.
2. **Glossy Metallic Capsule Geometry**: Fully-rounded pills (`rounded-full`) and smooth organic cards (`rounded-2xl`, `rounded-3xl`) replacing rough angular polygons.
3. **Signature Chromatic / Iridescent Rims**: High-spec diffraction glows (rainbow/prism light dispersion along borders and under key action buttons, as seen on OpenCircle's *"Rank me"* and *"Sign in with GitHub"* buttons).
4. **Mobile-First Image Sizing & Touch-Native Zoom Engine**: Standardized responsive image containers, ambient blurred backdrops for proof receipts, and a unified interactive modal viewer with pinch-to-zoom, double-tap zoom, pan drag, swipe-to-dismiss, and gallery navigation.
5. **Ergonomic Floating Bottom Dock**: Persistent frosted glass capsule dock pinned to the mobile thumb zone with safe-area spacing and active metallic indicators.

---

## 2. Core Visual Foundations

### 2.1 Color Palette & Material Hierarchy

| Category | Token Name | Hex / CSS Value | Description & Purpose |
| :--- | :--- | :--- | :--- |
| **Canvas** | `canvas-deep` | `#050608` | Deepest OLED obsidian background base |
| **Canvas Surface** | `canvas-surface` | `#080A0F` | Main viewport canvas with subtle radial illumination |
| **Card Surface L1** | `surface-metallic-1` | `rgba(13, 16, 24, 0.72)` | Primary section cards; backdrop blur 20px |
| **Card Surface L2** | `surface-metallic-2` | `rgba(18, 22, 34, 0.60)` | Inner wells, receipt frames, code/stat blocks |
| **Raised / Floating** | `surface-floating` | `rgba(20, 24, 38, 0.88)` | Floating bottom dock, tooltips, lightbox chrome |
| **Metallic Rim (Subtle)** | `border-metallic-subtle` | `rgba(255, 255, 255, 0.08)` | Standard card/pill hairline boundary |
| **Metallic Rim (Highlight)**| `border-metallic-glow` | `rgba(255, 255, 255, 0.18)` | Hover boundaries, active tabs |
| **Brushed Titanium** | `metal-titanium` | `#7E8B9B` → `#C5D1DE` | Brushed chrome/steel gradients on headers & pedestals |
| **Diamond Ice (Cyan)** | `brand-ice-primary` | `#6FD8FF` | Primary signature diamond cyan for active items & glow |
| **Diamond Ice Light** | `brand-ice-glow` | `#BDE7FF` | Highlight text, secondary sheen, focus rings |
| **Web3 Gold** | `brand-gold-glow` | `#F2C14E` | Curated PNL multipliers, podium crown, #1 rank badge |
| **Web3 Gold Light** | `brand-gold-light` | `#FFE49A` | Specular gold sheen on high-value numbers |
| **Verified Emerald** | `brand-emerald` | `#22C55E` | Live bot stamps, verified on-chain proofs, active pings |
| **Text Primary** | `text-primary` | `#F8FAFC` | 100% white/frost for titles and prominent copy |
| **Text Secondary** | `text-secondary` | `#94A3B8` | Clean cool gray for descriptions, taglines |
| **Text Muted** | `text-muted` | `#64748B` | Monospace tags, timestamps, legal captions |

### 2.2 Dark Metallic Specular Chrome & Titanium Finish
All buttons and interactive capsules feature a **liquid gunmetal & brushed titanium** finish with crisp specular top bevels and cold silver/ice edge reflections (no multi-colored rainbow dispersion):
```css
/* Metallic Specular Chrome Gradient */
--gradient-metallic-sheen: linear-gradient(
  180deg,
  rgba(255, 255, 255, 0.45) 0%,
  rgba(189, 231, 255, 0.25) 35%,
  rgba(255, 255, 255, 0.08) 100%
);

/* Applied to primary metallic action buttons */
.metallic-pill-primary {
  position: relative;
  background: linear-gradient(180deg, #252E42 0%, #151B29 50%, #0C0F17 100%);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.50),
    inset 0 2px 4px rgba(255, 255, 255, 0.12),
    inset 0 -1px 2px rgba(0, 0, 0, 0.8),
    0 4px 16px rgba(0, 0, 0, 0.65);
}
```

### 2.3 Metallic Specular Inset & Gloss
To achieve the tactile metallic hardware feel:
```css
.metallic-card {
  background: linear-gradient(180deg, rgba(25, 30, 46, 0.7) 0%, rgba(10, 12, 18, 0.8) 100%);
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.22),  /* Crisp top-edge bevel */
    inset 0 -1px 0 rgba(0, 0, 0, 0.4),          /* Deep bottom recess */
    0 12px 36px -8px rgba(0, 0, 0, 0.7);        /* Ambient drop shadow */
  backdrop-filter: blur(20px);
}
```

---

## 3. Typography System

| Role | Font Family | Desktop Size | Mobile Size | Weight | Letter Spacing | Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `Sora` / `Inter` | 68px–80px | 34px–40px | 800 (Extrabold) | `-0.035em` | Sentence |
| **H2 Section Headline** | `Sora` / `Inter` | 36px–44px | 24px–28px | 700 (Bold) | `-0.025em` | Sentence |
| **H3 Card Header** | `Sora` / `Inter` | 20px–24px | 17px–19px | 700 (Bold) | `-0.02em` | Sentence |
| **Eyebrow / Badge** | `JetBrains Mono` | 11px–12px | 10px–11px | 600 (Semibold) | `+0.12em` | UPPERCASE |
| **Body Prominent** | `DM Sans` / `Inter` | 18px | 15px–16px | 400 (Regular) | `-0.01em` | Normal |
| **Body Standard** | `DM Sans` / `Inter` | 15px | 13.5px–14px | 400 (Regular) | `0em` | Normal |
| **Data / Numbers** | `JetBrains Mono` / `Sora` | 32px–38px | 22px–26px | 800 (Extrabold) | `-0.02em` | Normal |
| **Meta / Timestamps**| `JetBrains Mono` | 11px–12px | 10px | 500 (Medium) | `+0.04em` | Normal |

---

## 4. Component Taxonomy & Specifications

### 4.1 Buttons & Interactive Controls

#### Button Hierarchy & Matrix:
1. **Primary Iridescent Metallic Button** (e.g., *"Work With Us"*, *"Book The Show"*):
   - **Shape**: Full capsule (`rounded-full`), height 44px (mobile) / 48px (desktop).
   - **Body**: Deep obsidian-gunmetal core (`#0C0F17` to `#161B29`), top specular inset bevel `inset 0 1px 0 rgba(255, 255, 255, 0.3)`.
   - **Border & Halo**: Continuous subtle iridescent rim glow (conic/linear prism) underneath.
   - **Typography**: Semibold 14px (mobile) / 15px (desktop), pure white `#F8FAFC`.
   - **Touch Target**: Guaranteed minimum `44px x 44px` physical touch area with `touch-action: manipulation`.
   - **States**:
     - *Default*: Soft halo (`filter: blur(6px) opacity(0.7)`).
     - *Hover / Tap*: Ambient halo blooms (`filter: blur(12px) opacity(1)`), lift `-2px`.
     - *Active / Pressed*: Instant physical spring compression (`scale(0.96)`), inner shadow deepens.
     - *Focus-Visible*: 2px solid `#6FD8FF` with 4px offset.

2. **Secondary Glossy Metallic Pill** (e.g., *"Watch the Cut"*, *"View Receipts"*):
   - **Shape**: `rounded-full`, height 42px (mobile) / 46px (desktop).
   - **Body**: Frosted glass `rgba(255, 255, 255, 0.05)`, border `1px solid rgba(255, 255, 255, 0.14)`.
   - **States**:
     - *Hover / Tap*: Border lightens to `#BDE7FF` (40% opacity), background shifts to `rgba(255, 255, 255, 0.1)`.
     - *Active*: `scale(0.97)`.

3. **Status & Tag Pills** (e.g., *"Web3 · DeFi"*, *"Case Study 01"*, *"Verified 16K%"*):
   - Height: 24px–28px, padding `px-2.5 sm:px-3 py-1`.
   - Geometry: `rounded-full`.
   - Background: `rgba(14, 18, 30, 0.8)` with hairline border `rgba(111, 216, 255, 0.25)`.
   - Indicators: Leading rotating diamond or pulsating emerald beacon dot.

4. **Segmented Filter Switchers** (e.g., *Analytics / X Space / Community*):
   - Container: Enclosed pill capsule (`rounded-full`, padding 3px sm:4px, background `#0A0D15`, border `border-white/10`).
   - Active Tab: Sliding pill background (`bg-gradient-to-b from-[#1C2337] to-[#121624]`, border `border-white/20`, text white).
   - Touch Scroll: When options overflow mobile screens, smooth momentum horizontal scrolling with fading edge masks.

---

### 4.2 Floating Bottom Navigation Dock (OpenCircle Signature)

As showcased in `cc.png`, `cc1.png`, and `cc2.png`:
- **Placement**: Fixed viewport bottom, centered (`bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50`).
- **Safe Area Inset**: `padding-bottom: calc(0.5rem + env(safe-area-inset-bottom, 0px))` ensuring zero overlap with the iOS home indicator bar or Android navigation bar.
- **Dimensions**:
  - Desktop: `h-14 px-4 rounded-full max-w-[420px]`.
  - Mobile: `h-13 px-3 rounded-full max-w-[calc(100vw-32px)]`.
- **Materiality**:
  - Background: `rgba(12, 15, 23, 0.88)` with `backdrop-filter: blur(24px)`.
  - Border: `1px solid rgba(255, 255, 255, 0.14)`.
  - Shadow: `0 16px 40px -8px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.25)`.
- **Items**:
  1. **Brand Capsule**: Mini logo pill with active indicator dot.
  2. **Navigation Icons**:
     - Story (Diamond icon)
     - Work / Case Studies (Trophy icon)
     - Receipts (Chart / Proof icon)
     - Services (Briefcase icon)
  3. **Direct Contact Action**: Circular WhatsApp / Telegram action button with iridescent glow rim and immediate tap-to-chat.
- **Mobile Touch Response**:
  - Generous 44px touch targets.
  - Active section icon highlighted with a glowing ice-blue pill and subtle lower micro-beacon dot.
  - Page content has `pb-28` so no footer text is obscured by the dock.

---

### 4.3 Mobile-First Image Sizing & Aspect Ratio Engineering

Receipts, PNL bot screenshots, and chart multiples are the lifeblood of this site. If they appear small, blurry, or cropped on mobile, credibility is lost.

#### Standardized Responsive Ratios:
1. **Curated PNL Receipts (`PnlCarousel`)**:
   - Container Aspect Ratio: Standard `16:10` on desktop, `16:10` or `4:3` on mobile.
   - Mobile Layout: Mobile visitors get a **horizontal snap carousel** (`overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 -mx-4 pb-4 scrollbar-none`). Cards peek from the right edge to visually signal swipeability.
   - Micro-Badge: Top-right gold multiplier chip (`rounded-full px-2.5 py-0.5 bg-black/85 border border-amber-400/50 backdrop-blur-md`).
   - Tap-to-Inspect Cue: Clear subtle pill badge `[ 🔍 Tap to Zoom ]` visible on hover or mobile tap.

2. **Case Study Media Displays (`CaseStudyClover` & `CaseStudyWojak`)**:
   - Responsive Aspect: `16:9` on desktop; `16:10` on mobile.
   - Mobile Split Slider in Wojak:
     - Touch Handle enlarged to `36px x 36px` diamond button for easy thumb dragging.
     - Single-tap anywhere on the image dynamically snaps the slider to that percentage.

3. **Story Chapter Artifacts (`ChapterSection`)**:
   - Container: Full width within card, `aspect-[16/10]` on desktop, `aspect-[4/3]` on mobile.
   - **Dual-Layer Ambient Backdrop**:
     - For vertical screenshots (e.g. phone chat captures), the container renders an ambient blurred underlay (`blur-2xl opacity-30 scale-110`) with the sharp foreground image centered (`object-contain`). This guarantees crisp readability without harsh black void bars.

4. **Historical Vault (`ArchiveMasonry`)**:
   - Mobile: 2-column compact grid (`grid-cols-2 gap-3`).
   - Desktop: 4-column masonry grid (`grid-cols-4 gap-4`).
   - Uniform `4:3` ratio with high-contrast metadata badges.

---

### 4.4 Unified Touch-Native Lightbox & Zoom Engine (`ImageLightbox`)

The unified lightbox is designed specifically for deep mobile inspection of numbers, timestamps, and bot receipts:

1. **Mobile Gesture Architecture**:
   - **Pinch-to-Zoom**: Fluid dual-finger pinch zoom up to `3x` magnification with smooth inertial damping.
   - **Double-Tap to Toggle**: Double-tapping the image toggles between `1.0x` (fit-to-screen) and `2.5x` zoom focused on the tap coordinates.
   - **Pan & Drag**: When zoomed in, smooth single-finger drag allows exploring transaction details and timestamps.
   - **Swipe-Down to Dismiss**: Dragging the modal down by >80px smoothly closes the lightbox with spring exit.
   - **Horizontal Swipe Navigation**: When at `1.0x` zoom, swiping left or right navigates to the next or previous receipt in the series.

2. **Mobile Screen Layout**:
   - **Top Floating Chrome**:
     - Close Button (`✕`): Ergonomic 44px capsule in the top-right corner.
     - Zoom Pills: Quick `+` and `−` and `Reset` controls in a floating frosted pill at top-center.
     - Counter Pill: `3 / 8` indicator pill at top-left.
   - **Bottom Sheet Metadata Drawer**:
     - Automatically docks at the bottom of the viewport with a frosted metallic background:
     - Ticker name, ROI multiple in gold, verification badge, and timestamp.
     - Can be swiped down to minimize if the user wants an unobstructed view of the screenshot.

3. **Desktop Accessibility & Controls**:
   - Keyboard: `Esc` to close, `ArrowLeft` / `ArrowRight` to navigate, `+` / `−` keys to zoom.
   - Mouse wheel zoom with pan cursor (`cursor-grab` / `cursor-grabbing`).
   - Click outside image to dismiss.

---

### 4.5 Pedestal / Spotlight Cards (OpenCircle Leaderboard Podiums)

Inspired by the podium cards in `cc.png`:
- **Desktop**: 3-tier podium side-by-side (Gold #1 in center raised higher, Silver #2 left, Bronze #3 right).
- **Mobile**: Vertically stacked metallic cards with #1 Gold at the top displaying the verified crown badge, brushed metallic sheen, and glowing border.

---

## 5. Mobile-First Experience & Ergonomics

### 5.1 The Mobile Thumb Zone Map
```
+---------------------------+  <- Top Bar: Logo + Audio Chime (Hard to reach)
|                           |
|       VIEWPORT            |
|       READING             |
|       ZONE                |
|                           |
|  +---------------------+  |  <- Interactive Cards & Sliders (Natural reach)
|  |   Receipt / Image   |  |
|  +---------------------+  |
|                           |
|      ( Thumb Zone )       |  <- PRIMARY INTERACTION AREA:
|   [ Floating Bottom Dock ]|     - Tab Switchers
|   [ WhatsApp / Work CTA ] |     - Bottom Dock Navigation
+---------------------------+     - Lightbox Dismiss Triggers
```

### 5.2 Mobile Specific Optimizations:
1. **Dynamic Viewport Height (`100dvh`)**:
   - Prevents the dreaded jumping/resizing of hero and modals when Safari or Chrome collapses its URL bar.
2. **Safe Area Insets**:
   - Handled globally via `padding-bottom: env(safe-area-inset-bottom)` and `padding-top: env(safe-area-inset-top)`.
3. **No Horizontal Scroll Glitches**:
   - `overflow-x: clip` on the body and main wrappers prevents rogue badges or shadows from creating unwanted horizontal page shift.
4. **Touch Target Sizing**:
   - All clickable buttons, tabs, close icons, and sound toggles have a minimum tap area of `44px x 44px`.
5. **Fluid Clamp Typography**:
   - Headings use CSS `clamp()` or Tailwind responsive breakpoints to prevent single orphan words on small smartphone screens (e.g. iPhone SE / Mini).
6. **Hardware Acceleration**:
   - All transforms and animations use `transform: translate3d(...)` and `will-change: transform` to ensure consistent 60fps / 120fps (ProMotion) performance on mobile GPUs without battery drain.

---

## 6. Interaction States & Animation Tokens

### 6.1 State Machine Matrix

| Element | Idle State | Hover / Tap State | Pressed / Active State | Focus-Visible State |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Iridescent Pill** | 1px border, soft halo | Glint sweep, bloom halo +100%, lift -2px | Scale 0.96, sunken bevel | 2px solid `#6FD8FF`, 4px offset |
| **Secondary Glass Pill** | `bg-white/5`, `border-white/10` | `bg-white/10`, `border-cyan-300/40` | Scale 0.97, `bg-white/15` | 2px solid `#BDE7FF`, 2px offset |
| **Receipt / Image Card** | Dark surface, subtle border | Scale 1.015, metallic sheen sweep, cursor `zoom-in` | Border `#6FD8FF` flash | Outline 2px solid `#6FD8FF` |
| **Bottom Dock Pill** | Muted icon (`#94A3B8`) | Icon `#F8FAFC`, background `bg-white/10` | Scale 0.90 | Subtle ring glow |
| **Active Dock Tab** | Solid metallic pill + indicator dot | Brighter top sheen | Active | - |
| **Input / Search Pill** | Dark well, placeholder `#64748B` | Border `border-white/25` | Border `#6FD8FF`, subtle glow | Ring 2px `#6FD8FF`/50 |

### 6.2 Keyframe Animations
- **Glint Sweep (`animate-glint`)**: 45-degree metallic sheen bar traversing across buttons and cards every 4–6s.
- **Iridescent Rim Pulse**: Subtle 3s breathing cycle on the primary call-to-action halo.
- **Spring Curves**: `cubic-bezier(0.16, 1, 0.3, 1)` for snappy, elastic physical response.
- **Accessibility Fallback**: Strictly disables heavy transforms for `prefers-reduced-motion`.

---

## 7. Implementation Roadmap & Execution Checklist

- [ ] **Step 1: CSS Foundations & Mobile Tokens**
  - Update `src/index.css` with OpenCircle-style dark metallic variables, iridescent gradients, and metallic card classes.
  - Implement mobile safe area variables (`env(safe-area-inset-*)`) and dynamic viewport classes (`min-h-[100dvh]`).
  - Strip legacy angular polygon cut-corners in favor of smooth, rounded metallic geometry.
- [ ] **Step 2: Universal Touch-Native Lightbox Component**
  - Build `src/components/ImageLightbox.tsx` supporting pinch-to-zoom, double-tap zoom, swipe-to-dismiss, pan/drag, and gallery navigation.
  - Connect all proof receipts, chapter artifacts, and case study media.
- [ ] **Step 3: Signature Floating Bottom Navigation Dock**
  - Implement `src/components/BottomDock.tsx` mirroring OpenCircle's floating frosted-glass dock with safe-area padding and mobile thumb ergonomics.
- [ ] **Step 4: Mobile-First Button & Pill Modernization**
  - Replace legacy buttons across `Hero`, `Navbar`, `CaseStudyClover`, `CaseStudyWojak`, and `ContactChain` with OpenCircle-style iridescent and metallic pills with 44px minimum tap targets.
- [ ] **Step 5: Card & Section Polish for Mobile & Desktop**
  - Update `ChapterSection`, `PnlCarousel`, `ArchiveMasonry`, and `ServicesGrid` with layered metallic frames, ambient dual-layer image backgrounds, and mobile horizontal snap scrolling.
- [ ] **Step 6: Device Testing & Verification**
  - Verify layout on 375px (iPhone SE), 390px (iPhone 14/15/16), 412px (Android Pixel/Galaxy), and desktop viewports.
  - Test touch gestures, image zoom clarity, and color contrast.
