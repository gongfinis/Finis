# Portfolio Website Plan

## Context

The user wants a graphic designer's portfolio website. The homepage references the upper half of the provided image: a macOS-inspired white canvas with a giant bold "PORTFOLIO" hero heading (with circular photo overlays on some letters), scattered clickable macOS-style blue folder icons, a macOS menu bar at the top, and a macOS-style Dock at the bottom. Each folder navigates to a portfolio sub-page (Design, Branding, Illustration).

The DESIGN.md provides an Apple design system: `system-ui / -apple-system` font stack, `#1d1d1f` near-black ink, `#0066cc` Action Blue accent, `#f5f5f7` parchment, tight negative letter-spacing at display sizes.

---

## Approach

### Routing
Install `react-router` and wire up Data mode with `RouterProvider`. Routes:
- `/` → `HomePage`
- `/design` → `DesignPage`
- `/branding` → `BrandingPage`
- `/illustration` → `IllustrationPage`

Files: `src/app/routes.ts`, update `src/App.tsx` to use `RouterProvider`.

### Pages structure
```
src/pages/HomePage.tsx
src/pages/DesignPage.tsx
src/pages/BrandingPage.tsx
src/pages/IllustrationPage.tsx
src/components/MacNavBar.tsx      ← macOS menu bar
src/components/MacDock.tsx        ← bottom dock with app icons
src/components/FolderIcon.tsx     ← reusable macOS blue folder SVG
```

---

## Design Tokens (in `src/index.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600&display=swap');
@import 'tailwindcss';

:root {
  --ink: #1d1d1f;
  --blue: #0066cc;
  --parchment: #f5f5f7;
  --canvas: #ffffff;
  --nav-bg: rgba(0,0,0,0.85);
}
```

Anton (Google Fonts) for the giant "PORTFOLIO" display heading. Inter for all body/UI text.

---

## Homepage Layout

### `<MacNavBar>`
- Fixed top, height 44px, `backdrop-filter: blur(12px)` semi-black
- Left: Apple  logo, then "Portfolio" (bold), "Design", "Branding", "Illustration" links
- Right: "© 2026"
- Nav links use `<Link>` from react-router

### Hero canvas
- Full-viewport white background
- Giant "PORTFOLIO" in Anton, ~14–18vw, near-black `#1d1d1f`, tight letter-spacing
- "graphic design" in Inter 300, ~3.5vw, below the heading
- "by [Your Name]" with underline, Inter 400, ~1.2rem
- Three circular photo overlays (~160px diameter) absolutely positioned over the P, first O, and last O of PORTFOLIO — using Unsplash portrait photos, `border-radius: 50%`, `mix-blend-mode: multiply` or normal. User can swap out the src.
- Five `<FolderIcon>` components scattered absolutely at different sizes and slight CSS rotations — each is a `<Link>` to its route and has a label below

### `<MacDock>`
- Fixed bottom center, pill-shaped container `backdrop-filter: blur(20px)`, white at ~80% opacity
- 7 icons: Finder (smiley face SVG), Launchpad, Canva logo color, CapCut, Figma, Photoshop, Illustrator
- Use colored SVG inline icons or emoji representations in colored rounded squares
- Hover: translate-y scale up (macOS dock bounce)

### Folder positions (approximate)
| Folder | Label | Position | Size | Rotation |
|---|---|---|---|---|
| 1 | Design | top-left | large | -8deg |
| 2 | Branding | top-center-right | medium | +5deg |
| 3 | Illustration | bottom-left | medium | -3deg |
| 4 | Design (2nd) | right | small | +10deg |
| 5 | Branding (2nd) | bottom-right | large | +3deg |

(Match the scattered placement from the reference image.)

### `<FolderIcon>` SVG
A faithful macOS-style blue folder: rounded body with a tab flap, gradient from lighter to darker blue (~`#6ec6f5` top, `#3d9de1` body, dark inner shadow). Drawn in inline SVG, ~80–120px wide depending on size prop.

---

## Portfolio Sub-pages (Design / Branding / Illustration)

Each sub-page shares the same `<MacNavBar>` and `<MacDock>`. Layout:
- Back breadcrumb link `← Portfolio`
- Section heading (e.g. "Design Work") in Anton, 4rem
- A 3-column grid of placeholder work cards — each card has an Unsplash image, a title, and a short description
- Parchment (`#f5f5f7`) page background

Use `useNavigate` / `<Link>` for the back button.

---

## Files to create / modify

| File | Action |
|---|---|
| `src/index.css` | Add Google Fonts @import (Anton + Inter), CSS variables |
| `src/App.tsx` | Replace with `RouterProvider` |
| `src/app/routes.ts` | New — `createBrowserRouter` with 4 routes |
| `src/pages/HomePage.tsx` | New — hero with PORTFOLIO heading, folders, dock |
| `src/pages/DesignPage.tsx` | New — placeholder portfolio grid |
| `src/pages/BrandingPage.tsx` | New — placeholder portfolio grid |
| `src/pages/IllustrationPage.tsx` | New — placeholder portfolio grid |
| `src/components/MacNavBar.tsx` | New — fixed top nav bar |
| `src/components/MacDock.tsx` | New — fixed bottom dock |
| `src/components/FolderIcon.tsx` | New — macOS folder SVG + Link wrapper |

Install: `react-router` (npm package).

---

## Verification

1. Preview loads the homepage with the white hero, bold PORTFOLIO heading, folder icons, nav bar, dock
2. Clicking a folder navigates to the corresponding portfolio page
3. Nav bar links also navigate to the correct pages
4. Back link on sub-pages returns to `/`
5. Dock icons render with hover animation
6. Circular photo overlays appear on the PORTFOLIO letters
