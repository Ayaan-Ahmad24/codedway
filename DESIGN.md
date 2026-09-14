---
name: Editorial Technical Studio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c3c9b0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8d937c'
  outline-variant: '#434936'
  surface-tint: '#a3d731'
  primary: '#ffffff'
  on-primary: '#253600'
  primary-container: '#bef44d'
  on-primary-container: '#4f6e00'
  inverse-primary: '#4a6700'
  secondary: '#c9c6c1'
  on-secondary: '#31302d'
  secondary-container: '#474743'
  on-secondary-container: '#b7b5b0'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#bef44d'
  primary-fixed-dim: '#a3d731'
  on-primary-fixed: '#141f00'
  on-primary-fixed-variant: '#374e00'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '600'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  editorial-quote:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  editorial-quote-mobile:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: 0em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  caption-code:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 15px
    letterSpacing: 0.02em
spacing:
  space-xxs: 2px
  space-xs: 4px
  space-sm: 8px
  space-md: 16px
  space-lg: 24px
  space-xl: 32px
  space-2xl: 48px
  space-3xl: 64px
  space-4xl: 96px
  space-5xl: 128px
  gutter: 1px
  col-gap: 24px
  row-gap: 24px
---

## Brand & Style

This design system expresses the discipline of elite systems engineering paired with the poise of high-end Swiss architectural publishing. Built for an audience of technical founders, principal engineers, and discerning product leaders, the interface evokes mathematical precision, uncompromising craft, and restrained authority. 

The aesthetic fuses **Architectural Brutalism** with **Modern Editorial Minimalism**. Layouts are structured through crisp tectonic rules: strict rectilinearity, razor-sharp hairline delineation, high-density data matrices, and deliberate voids of architectural black space. Interactive surfaces channel an elevated terminal instrument without falling into retro cliches. Every visual element is deliberate, functional, and absolute.

## Colors

The palette operates on extreme dynamic contrast, anchored by pure dark tones and punctuated with a hyper-vivid technical beacon.

- **Base Void (`#0C0C0C`):** The primary canvas ground. Accompanied in implementation by an imperceptible 3.5% monochromatic grain overlay to kill sterile digital flatness.
- **Surface Elevation (`#141414`):** Secondary container fill for cards, panels, modules, and floating docks.
- **Sub-surface Elevation (`#1A1A1A`):** Recessed wells, code block backgrounds, and active input states.
- **Structural Dividers (`#222222` and `#1A1A1A`):** Hairline boundary rules that define all architectural grids and partitions.
- **Primary Ink (`#F0EDE8`):** Unbleached warm bone-white for primary headlines, critical data values, and dominant typography.
- **Secondary Ink (`#8E8D8A`):** Neutralized mid-tone gray for metadata, body supporting copy, and non-active labels.
- **Muted Ink (`#4A4A48`):** Low-contrast structural typography, index line numbering, and disabled controls.
- **Electric Lime (`#C8FF57`):** High-energy laser highlight reserved strictly for primary interactive states, cursor indicators, live status beacons, and singular conversion triggers. Used sparingly to preserve high sensory impact.

## Typography

The typographic system creates an interplay between clinical engineering precision and deliberate literary cadence.

- **Primary Matrix (Inter):** Deployed for clear interface communication, data density, and structural titles. Kerning is consistently tightened across all scale levels to evoke modernist signage and high-end technical publication standards.
- **Editorial Accent (EB Garamond Italic):** Used selectively for manifesto statements, philosophical declarations, and pull quotes. It must always be set in italics with generous line heights, creating a tactile human counterweight against cold monoline engineering.
- **Instrument Monospace (JetBrains Mono):** Reserved for technical metrics, serial numbers, protocol timestamps, status indicators, and interactive code tags. Always rendered in uppercase with deliberate positive letter-spacing (`0.06em`) when serving as component labels.

## Layout & Spacing

The layout model is governed by an architectural 12-column coordinate framework bounded by hairline grids.

- **Grid Architecture:** Desktop views operate on a 12-column grid bounded by a max width of 1440px with dynamic outer margins starting at `48px`. Tablets scale to an 8-column layout (`24px` margins), and mobile operates on a 4-column layout (`16px` margins).
- **Tectonic Line Borders:** Instead of utilizing traditional negative space gaps to separate surfaces, components frequently dock flush against each other separated solely by a 1px boundary line (`#222222` or `#1A1A1A`). 
- **Rhythmic Tension:** Micro-spacing inside components relies on high density (`8px` to `16px` padding), while macro-spacing separating conceptual thematic blocks expands to generous architectural fields (`96px` to `128px`). This creates a rhythm of dense information clusters framed by confident negative space.

## Elevation & Depth

This system outright rejects soft diffused drop shadows, blurred light glows, and simulated three-dimensional skeumorphic extrusion. Elevation is achieved through strict planar nesting, border contrasts, and luminosity shifting.

- **Zero-Shadow Rule:** No standard blurred drop shadows are permitted anywhere within the interface. Depth is planar and mathematical.
- **Tonal Stepping:**
  - `Level 0 (Base)`: `#0C0C0C` canvas with raw hairline structural boundaries.
  - `Level 1 (Dock/Card)`: `#141414` surface framed by a 1px border of `#222222`.
  - `Level 2 (Active/Focus/Popover)`: `#1A1A1A` elevated tile framed by a 1px border of `#333333` or an Electric Lime (`#C8FF57`) accent edge.
- **Physical Hard Offsets:** If floating or interactive contextual overlays (dropdown menus, technical tooltips) require pronounced visual lift, use an unblurred 1px hard drop offset: `box-shadow: 4px 4px 0px 0px #000000`.
- **Luminance Stenciling:** Focus states and active layers register depth by increasing the contrast of border perimeters rather than blurring upward into the z-axis.

## Shapes

The geometric rule is absolute: **Zero radius on all UI primitives.**

- **Corner Radii:** `0px` uniformly across all viewports and elements. No rounded corners, soft radiused pills, or chamfered edges are allowed.
- **Cartesian Purity:** All buttons, cards, modal windows, tooltips, tags, inputs, and selection rings terminate at crisp 90-degree right angles.
- **Crosshair Indicators:** Intersections of primary grid containers may feature subtle technical corner-ticks or hairline crosshairs (`+`) rendered in `#4A4A48` to reinforce terminal-grade blueprints.

## Components

### Buttons
- **Primary:** Background in Electric Lime (`#C8FF57`), text in Absolute Black (`#0C0C0C`), font `JetBrains Mono` bold uppercase (`12px`), zero border-radius. Hover transitions background to crisp Bone White (`#F0EDE8`). Active press invokes a 1px downward translation.
- **Secondary / Outline:** Background transparent, 1px border in `#222222`, text in `#F0EDE8`. Hover alters the border to `#C8FF57` and renders the text in `#C8FF57`.
- **Terminal Action:** Monospaced link with leading terminal prompt glyph: `> EXEC_RUN`. Underlined on hover with a 1px solid `#C8FF57` line offset by 4px.

### Cards & Modules
- Enclosed in `#141414` with a 1px continuous border in `#222222`.
- Sharp corners only. Content padding is structured strictly at `24px` or `32px`.
- Optional technical header banner: top 28px partitioned by a 1px horizontal bottom rule, housing a `JetBrains Mono` 11px uppercase category identifier aligned left and a system status dot aligned right.

### Chips & Badges
- Strict rectangular boxes, no rounded pills. 
- Padding: `2px 8px`.
- Background `#1A1A1A` with a 1px border of `#2A2A2A`. Font `JetBrains Mono` (`11px`).
- Active or Live Status variant features a `4px` square indicator in `#C8FF57` rather than a circular beacon.

### Form Inputs
- Background `#0C0C0C` or `#141414`, zero radius, 1px perimeter border in `#222222`.
- Text typed in `#F0EDE8`, font `Inter` (`14px`). Placeholder in `#4A4A48`.
- Focus state instantly snaps border to `#C8FF57` with no glow or halo. Caret is styled as a non-blinking or block cursor colored `#C8FF57`.

### Checkboxes & Selection Controls
- Checkbox: A strict `14px x 14px` square with a 1px border in `#4A4A48`. On select, filled entirely with `#C8FF57` displaying an `#0C0C0C` square core or sharp geometric cross.
- Radio: Represented as a nested square rather than a circle: `14px x 14px` exterior square containing a `6px x 6px` solid inner square when active.

### Data Tables & Spec Lists
- Full-width modular grids separated by 1px hairline horizontal dividers (`#1A1A1A`).
- Row hover produces a subtle `#141414` background shift.
- Headers are locked in `JetBrains Mono` uppercase `11px` in secondary `#8E8D8A`, right-aligned for numeric data, left-aligned for parameters.

### Pull Quote & Editorial Callout
- Flush-left bordered block (2px solid `#C8FF57`).
- Text in `EB Garamond` italic, sized dynamically (`24px` to `36px`), color `#F0EDE8`.
- Accompanied by a technical attribution tag in `JetBrains Mono` uppercase (`11px`) positioned below the quote.