# Design System Specification: Aura Dental Minimalist

## 1. Overview & Creative North Star
**Creative North Star: "The Restorative Sanctuary"**
This minimalist design system rejects the sterile "medical grid" in favor of a high-end editorial experience. It leverages pristine white space, subtle teal accents, and intentional typography to create a digital environment that feels as serene and sophisticated as a luxury wellness retreat.

## 2. Colors & Surface Architecture
*   **Primary:** Teal (`#008080`)
*   **Base Background:** Pure White (`#FFFFFF`) or ultra-light gray (`#F9F9F9`).
*   **Text (High Contrast):** Dark Slate (`#1A1C1C`)

### The "No-Line" Rule
Do not use 1px solid borders to section content. Boundaries must be defined solely through background color shifts or ample whitespace.

### Glassmorphism Elements
Floating elements (navigation bars, sticky CTAs) use semi-transparent white backgrounds with a `backdrop-blur` of 12px–20px. 

## 3. Typography
*   **Display & Headlines:** Noto Serif. Used for bold, authoritative statements.
*   **Body & UI Text:** Manrope. Geometric clarity for precision and legibility.

## 4. Component Rules
- **Buttons:** Subtle gradients or solid Teal. `8px` corner radius.
- **Cards:** No border. Emphasize lift using drop shadows (`box-shadow: 0 12px 40px rgba(0, 101, 101, 0.06);`) or background color differential (`#f3f3f3`).
- **Layouts:** Use extreme padding options (e.g., `py-24` or `py-32`) to ensure sections breathe.
