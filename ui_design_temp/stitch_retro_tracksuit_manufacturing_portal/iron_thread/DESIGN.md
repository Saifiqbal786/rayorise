```markdown
# Design System Strategy: Industrial Prestige

## 1. Overview & Creative North Star
**The Creative North Star: "The Architectural Blueprint"**

This design system moves away from the "fast-fashion" aesthetic and leans into the weight and precision of high-end B2B manufacturing. The goal is to evoke the feeling of a high-tech factory floor: organized, immense, and impeccably clean. 

To break the "template" look, we utilize **Intentional Asymmetry**. We favor oversized typography paired with narrow, functional data columns. Elements should feel "bolted" to the layout, using rigid structural alignment rather than decorative flourishes. We achieve a premium feel not through "fluff," but through the meticulous application of tonal depth and brutalist-inspired clarity.

## 2. Color & Atmospheric Depth
Our palette is rooted in a "Deep-Space" Industrial aesthetic. The dominant `#131313` background provides a heavy, reliable foundation.

*   **The "No-Line" Rule:** Explicitly prohibit the use of 1px solid borders for sectioning. Structural separation must be achieved through background shifts. A section transitioning from `surface` to `surface-container-low` creates a physical "zone" without the visual clutter of a hairline.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of machined layers. 
    *   **Base:** `surface` (#131313) for the main canvas.
    *   **Raised Plates:** `surface-container-high` (#2a2a2a) for primary cards or modular sections.
    *   **Recessed Wells:** `surface-container-lowest` (#0e0e0e) for input fields or code-blocks to suggest depth and precision.
*   **The Blue Utility:** The `primary` blue (#b8c3ff) is our "Control Logic" color. It is reserved exclusively for interaction. Use `primary-container` (#0545ed) for deep-action states.
*   **The Trust Gold:** `secondary` (#e9c349) is our "Certification" tone. Use it sparingly for trust badges, quality stamps, or premium indicators to ensure it retains its psychological value.
*   **Signature Textures:** Apply a subtle linear gradient to Hero CTA buttons (from `primary` to `primary-container`) at a 135-degree angle. This adds a "metallic luster" that feels machined rather than rendered.

## 3. Typography: The Editorial Authority
We utilize a high-contrast pairing of **Space Grotesk** (Display/Headlines) and **Manrope** (Body/Labels).

*   **Space Grotesk (Display/Headline):** This is our "Machined" typeface. Use `display-lg` (3.5rem) for hero statements with a tight `-0.02em` letter spacing. This typeface carries the industrial weight.
*   **Manrope (Body/Title):** Our "Functional" typeface. It is clean, highly legible, and modern. 
*   **Hierarchy as Brand:** Use `label-md` (Uppercase, tracked out +10%) for section sub-headers. This mimics the labeling found on architectural technical drawings.
*   **The "Heavy-Light" Balance:** Balance a `headline-lg` title with `body-md` text. The drastic jump in scale communicates a confident, editorial perspective.

## 4. Elevation & Depth: Tonal Layering
Traditional shadows have no place in a manufacturing environment. We use **Tonal Layering** to create a sense of physical assembly.

*   **The Layering Principle:** To "lift" a card, do not use a shadow. Instead, place a `surface-container-high` card atop a `surface-dim` background. The contrast in value creates a natural, sophisticated elevation.
*   **Ambient Shadows:** If an element must float (e.g., a modal), use an ultra-diffused shadow: `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5)`. The shadow color must never be pure black; it should be a deep tint of the background to maintain "Atmospheric Persistence."
*   **The "Ghost Border":** For internal component logic (like button groups), use `outline-variant` (#434654) at 15% opacity. It should be "felt, not seen."
*   **Industrial Glassmorphism:** For navigation bars, use `surface` at 80% opacity with a `backdrop-filter: blur(12px)`. This suggests a "frosted lens" over the machinery.

## 5. Components

### Buttons: The "Interface Controls"
*   **Primary:** `primary` (#b8c3ff) background with `on-primary` (#002388) text. Roundedness: `sm` (0.125rem) for a sharp, industrial corner.
*   **Secondary:** `surface-container-highest` background with a `Ghost Border`.
*   **Tertiary:** Text-only in `primary`, using `label-md` for a technical, link-like feel.

### Cards & Technical Modules
*   **Forbid Dividers:** Never use a horizontal line to separate content. Use a `1.5rem` vertical gap (Spacing Scale) or a shift to `surface-container-low`.
*   **The "Spec" Chip:** Use `secondary-container` with `on-secondary-container` text for technical specs (e.g., "GSM Weight," "Thread Count"). These should have `0.125rem` (sm) corners.

### Input Fields: The "Data Entry"
*   **State:** Background `surface-container-lowest`. 
*   **Active:** A 1px `primary` bottom-border only. This mimics a technical fill-in-the-blank form rather than a "web box."

### Manufacturing Process Timeline (Custom Component)
*   Instead of a standard "stepper," use a vertical `surface-container-high` pillar. Active steps illuminate in `primary` blue, while pending steps remain in `outline-variant`. This visualizes the assembly line.

## 6. Do’s and Don’ts

### Do:
*   **DO** use whitespace as a structural element. A "premium" feel is defined by what you leave out.
*   **DO** align text to a strict vertical axis. This reinforces the "blueprint" aesthetic.
*   **DO** use high-quality, macro photography of fabric textures and machinery.

### Don't:
*   **DON'T** use `full` roundedness (pills). In a manufacturing context, circles feel "soft." Stick to `sm` (0.125rem) for a precision-milled look.
*   **DON'T** use bounce or elastic animations. If an element moves, it should move with linear precision or a standard "power-in-out" ease. 
*   **DON'T** use 100% white (#FFFFFF) for body text. Use `on-surface-variant` (#c3c6d6) to reduce eye strain and maintain the "industrial" mood.

### Accessibility Note
Maintain a minimum contrast ratio of 4.5:1 for all `on-surface` content against `surface` containers. The blue `primary` (#b8c3ff) is specifically chosen to pop against the #131313 background while remaining legible for critical interactive elements.```