---
name: Prism Vision
colors:
  surface: '#faf9fe'
  surface-dim: '#dad9df'
  surface-bright: '#faf9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf3'
  surface-container-high: '#e9e7ed'
  surface-container-highest: '#e3e2e7'
  on-surface: '#1a1b1f'
  on-surface-variant: '#414755'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#717786'
  outline-variant: '#c1c6d7'
  surface-tint: '#005bc1'
  primary: '#0058bc'
  on-primary: '#ffffff'
  primary-container: '#0070eb'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#bc000a'
  on-secondary: '#ffffff'
  secondary-container: '#e2241f'
  on-secondary-container: '#fffbff'
  tertiary: '#4c4aca'
  on-tertiary: '#ffffff'
  tertiary-container: '#6664e4'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#930005'
  tertiary-fixed: '#e2dfff'
  tertiary-fixed-dim: '#c2c1ff'
  on-tertiary-fixed: '#0c006a'
  on-tertiary-fixed-variant: '#3631b4'
  background: '#faf9fe'
  on-background: '#1a1b1f'
  surface-variant: '#e3e2e7'
typography:
  headline-display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is engineered to mirror the precision and luminosity of the Chronos Prism smartwatch. The brand personality is **Elite, Kinetic, and Refracted**. It targets a high-performance demographic that values both technological sophistication and aesthetic purity. 

The visual style blends **Minimalism** with **Glassmorphism**. By utilizing vast amounts of white space (negative space), the design system allows the vibrant product photography to take center stage. High-energy accents provide a sense of urgency and technical prowess, while glass-like layers suggest the premium sapphire crystal used in the watch's construction. The emotional response is one of clarity, speed, and uncompromising quality.

## Colors
The palette is rooted in a "Pure Light" philosophy. The primary background is a stark #FFFFFF to ensure maximum contrast and a high-end gallery feel. 

- **Electric Blue (#007AFF):** Used for primary actions, progress indicators, and active states. It represents the "energy" of the Chronos Prism.
- **Vivid Coral (#FF3B30):** Reserved for high-impact call-to-actions, limited-edition alerts, and health-tracking highlights.
- **Neutral Tones:** We use a range of cool grays and a soft off-white (#F5F5F7) for secondary section backgrounds to create subtle structural separation without breaking the minimalist aesthetic.
- **Deep Black (#000000):** Used exclusively for typography and iconography to maintain the highest possible legibility and a premium "ink-on-paper" look.

## Typography
This design system utilizes **Inter** exclusively to achieve a modern, systematic, and utilitarian feel that matches the watch's interface. 

- **Display & Headlines:** Use heavy weights (700-800) with tight letter-spacing to create a sense of density and impact. Headlines should feel "architectural."
- **Body Text:** Set with generous line heights (1.6) to ensure readability against bright white backgrounds.
- **Labels:** Small caps or bold uppercase labels are used for technical specifications and overlines to provide a rhythmic contrast to the fluid body copy.

## Layout & Spacing
The layout philosophy follows a **Fixed-Width Centered Grid** for the core content to maintain a premium, editorial feel, while background elements often bleed to the edges.

- **Grid:** A 12-column system with a 1280px max-width container. 
- **Rhythm:** An 8px base unit drives all spatial decisions. Large vertical gaps (xl: 80px) are used between major sections to prevent visual clutter and give the product photography "room to breathe."
- **Margins:** Desktop margins are set to a minimum of 48px to ensure the interface never feels cramped on smaller laptops.

## Elevation & Depth
Depth in this design system is achieved through **Glassmorphism** rather than traditional heavy shadows.

- **Prism Layers:** Use semi-transparent white surfaces (opacity 40-70%) with a heavy backdrop-blur (20px to 40px). This creates a "frosted glass" effect that allows background colors to bleed through softly.
- **Refractive Borders:** Instead of shadows, use thin, 1px semi-transparent white borders to define edges. 
- **Shadows:** Where depth is critical (e.g., floating action buttons), use "Ambient Shadows"—extremely diffused, low-opacity (#000000 at 5%) with a large Y-offset to simulate a distant light source.

## Shapes
The shape language is **Refined and Geometric**. We avoid "organic" or "hand-drawn" styles in favor of precision-milled aesthetics.

- **Radius:** A standard 0.5rem (8px) radius is used for primary UI elements like buttons and input fields.
- **Large Components:** Cards and major containers use `rounded-xl` (1.5rem) to echo the rounded corners of the Chronos Prism watch face.
- **Iconography:** Icons must use thin (1.5px) lines with slightly rounded caps to match the typography's terminal style.

## Components
- **Primary Buttons:** High-energy Electric Blue backgrounds with white text. Use a slight horizontal scale animation on hover to signal responsiveness.
- **Glass Cards:** High-contrast containers for product features. Use the "Prism Layer" style (backdrop blur) with a subtle inner glow.
- **Thin Line Icons:** 24x24px bounding box, 1.5px stroke width. Icons should be monochrome (Black) or primary blue for interactive states.
- **Input Fields:** Minimalist "Underline" or "Soft Box" style with #F5F5F7 fills. Active states transition to a 2px Electric Blue bottom border.
- **Product Chips:** Small, pill-shaped tags for technical specs (e.g., "50M WATER RESISTANT") using the `label-bold` typography and low-contrast light gray backgrounds.
- **Interactive Triggers:** All hover states should utilize a subtle transition (200ms) involving light refraction effects or subtle opacity shifts to maintain the high-end feel.