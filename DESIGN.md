# Design System Specification: Ecladent Sanctuary

## 1. Overview & Creative North Star
**Creative North Star: The Clinical Sanctuary**
Traditional dental branding is cold, sterile, and anxiety-inducing. This design system rejects that paradigm in favor of an "Editorial Sanctuary." We are not building a medical portal; we are curating a high-end wellness experience. 

By leveraging **Organic Asymmetry** and **Tonal Depth**, we break the "template" feel of healthcare. We use wide margins, overlapping glass elements, and dramatic typography scales to create a sense of calm authority. This system is designed to feel inclusive and safe—a digital "deep breath" for the patient.

---

## 2. Colors & Surface Architecture
The palette is rooted in a "Deep Sea" teal, balanced by "Cool Quartz" neutrals.

### The Color Logic
*   **Primary (#004c4c) & Primary-Container (#006666):** Our signature teals. Use these for moments of high brand impact and primary calls to action.
*   **Neutral Bases:** `surface` (#f8fafa) is our primary canvas. It provides the "breathable" whitespace essential to an editorial feel.
*   **Tertiary Accents (#6a3516):** A warm earth tone used sparingly to ground the cool teals, providing a human, organic touch.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit 1px solid borders for sectioning or containment. 
Boundaries must be defined through:
1.  **Background Color Shifts:** A `surface-container-low` (#f2f4f4) section sitting on a `surface` (#f8fafa) background.
2.  **Shadow Depth:** Using diffused, ambient light rather than lines.
3.  **Whitespace:** Using the `16` (5.5rem) or `20` (7rem) spacing tokens to create mental separation.

### The "Glass & Gradient" Rule
To achieve the "Sanctuary" aesthetic, use Glassmorphism for floating elements (modals, navigation bars, or hover-state cards). 
*   **Formula:** `surface-container-lowest` (#ffffff) at 70% opacity + 24px Backdrop Blur + a `0.5px` Ghost Border.
*   **Gradients:** Use subtle linear transitions from `primary` to `primary-container` on large CTA surfaces to add "soul" and dimension.

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing of **Manrope** for impact and **Plus Jakarta Sans** for utility.

*   **Display & Headlines (Manrope):** These are our "Editorial Hooks." Use `display-lg` (3.5rem) for hero sections with `-0.02em` letter spacing. This conveys sophistication and modern dental excellence.
*   **Titles & Body (Plus Jakarta Sans):** Chosen for its warmth and high legibility. `body-lg` (1rem) should be the default for patient information to ensure inclusivity and readability.
*   **Hierarchy as Identity:** Use `label-md` (0.75rem) in all-caps with `0.1em` tracking for category headers. This mimics the layout of high-end fashion or architectural journals.

---

## 4. Elevation & Depth: Tonal Layering
We move away from the "floating shadow" look toward **Physicality and Light.**

*   **The Layering Principle:** Stacking `surface-container` tokens creates natural hierarchy. 
    *   *Level 0:* `surface` (The floor)
    *   *Level 1:* `surface-container-low` (Large content blocks)
    *   *Level 2:* `surface-container-lowest` (Interactive cards/Glass elements)
*   **Ambient Shadows:** If a shadow is required for a floating CTA, use the `on-surface` color (#191c1d) at 4% opacity with a `40px` blur and `12px` Y-offset. It should feel like a soft glow, not a drop shadow.
*   **The Ghost Border:** For accessibility on glass elements, use the `outline-variant` token at **15% opacity**. This provides a hint of structure without breaking the minimalist flow.

---

## 5. Components & Primitives

### Buttons: The Tactile Interaction
*   **Primary:** `primary` (#004c4c) background with `on-primary` (#ffffff) text. Use `full` (9999px) roundedness for a friendly, approachable feel. Padding: `3` (1rem) top/bottom, `6` (2rem) left/right.
*   **Secondary (Glass):** `surface-container-lowest` at 50% opacity with a backdrop blur. This allows the background imagery to peek through, maintaining the "Sanctuary" vibe.

### Cards: The Editorial Container
*   **Styling:** Forbid divider lines. Use `surface-container-lowest` on top of `surface-container-low`.
*   **Radius:** Always use `xl` (0.75rem) or `lg` (0.5rem). Never sharp corners.
*   **Spacing:** Internal padding should be a minimum of `8` (2.75rem) to ensure content "floats" within the card.

---

## 6. Do’s and Don'ts

### Do:
*   **Use Intentional Asymmetry:** Overlap a high-quality "Sanctuary" image with a glass-morphic text card.
*   **Embrace Whitespace:** If a section feels crowded, double the spacing token (e.g., move from `10` to `20`).
*   **Use Imagery as UI:** High-quality photos of macro water droplets, frosted glass, or sun-drenched treatment rooms are core to the system.

### Don’t:
*   **Don't use 1px solid borders:** This immediately cheapens the editorial feel and makes the clinic look "standard."
*   **Don't use default "Clinic Blue":** Stick strictly to the Teal/Neutral palette to maintain the premium, women-owned boutique identity.
*   **Don't crowd the margins:** Editorial design requires "room to breathe." Maintain at least `12` (4rem) of horizontal padding on all main containers.

---

## 7. Landing Page Hierarchy (7 Elements)
1. **HERO**: Promise + Magnetic CTA.
2. **SOCIAL PROOF**: Trust anchors (4.9/5 stars, reviews).
3. **CORE SERVICES**: Bento grid presentation.
4. **PHILOSOPHY**: Inclusivity, USPs (GMB description).
5. **LOGICAL OFFER**: Emergency Care (£75).
6. **BUSINESS BLOCK**: GMB Details (Hours, MAP).
7. **FRICTIONLESS FORM**: Lead capture.

Stitch Project ID: `3225984623274468746`
Stitch Screen ID: `d8017879b19046ebaecea7769b45119f`
