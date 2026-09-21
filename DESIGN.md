# Ben Swann Visual System

## Direction

Editorial, cinematic and authoritative. The site takes structural inspiration from Steven Bartlett's large-scale identity system and timeline storytelling while using a distinct Ben Swann composition, signature, colors and imagery.

## Palette

- Ink: #050505
- Carbon: #0B0B0B
- Paper: #F4F1E8
- White: #FFFFFF
- Signature gold: #E8BD3D
- Deep gold: #A87308
- Muted text: rgba(244, 241, 232, 0.64)
- Dark line: rgba(255, 255, 255, 0.16)
- Light line: rgba(5, 5, 5, 0.16)

## Typography

- Display: Bebas Neue, used for the hero name, section titles, dates and navigation.
- Body: Manrope Variable, used for narrative text, labels and controls.
- Display type uses fluid clamp values, tight leading and controlled line measures.
- Body copy remains at 16px or larger with a 45-75 character measure.

## Layout

- Maximum content width: 1440px
- Fluid gutter: clamp(20px, 4vw, 72px)
- Fluid section spacing: clamp(88px, 11vw, 176px)
- Major sections alternate between black, paper and cinematic image surfaces.
- Persistent text remains in normal document flow; absolute positioning is reserved for short hero overlays.

## Motion

- Hero name uses clipped bands and short GSAP transforms to establish identity.
- Scroll reveals use transform and opacity only.
- Desktop timeline media receives subtle parallax; timeline content is never hidden while scrolling.
- Mobile uses native horizontal scrolling rather than a pinned GSAP sequence.
- Reduced motion disables looping, parallax and scroll-linked transforms.

## Navigation

- Fixed transparent header over the hero, transitioning to a dark glass surface after scrolling.
- Large full-screen menu on narrow screens.
- Touch targets are at least 44px square.

## Accessibility

- A real H1 is present in the hero.
- Every supplied image has contextual alt text.
- Keyboard focus is visible.
- The menu closes with Escape.
- Gold is not used for small low-contrast body copy.
