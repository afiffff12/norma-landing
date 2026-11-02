# Norma — landing page (coded version)

Concept redesign of a smart ring landing page, built for a portfolio. **Norma is not a real product.** Prices and reviews are illustrative, and nothing on this site can be bought or sent.

This is the coded twin of the Framer build. Both are built from the same final design (Wonder file "Norma – Redesign Yuppi"), with the same tokens, copy and breakpoints.

## Stack, and why

| Choice | Why |
| --- | --- |
| **Astro 5** (static output) | A sales page is read, not used like an app. Astro ships plain HTML and CSS and no framework runtime, so it loads fast on phones. |
| **Plain CSS with custom properties** | The design tokens live in one file, `src/styles/tokens.css`, with the same names as the Framer color and text styles. |
| **One small TypeScript file** | `src/scripts/main.ts` handles only what needs JS: the mobile menu, the cart and sizing-kit dialogs, finish and size selection, the anatomy highlight, scroll reveals and the sticky order bar. Without JS, every link still scrolls, the FAQ still opens and the content is fully readable. |
| **`astro:assets`** | Product photos are resized and converted to WebP at build time (from about 1.3 MB to 10–70 kB each). |
| **Fontsource** | Newsreader, IBM Plex Sans and IBM Plex Mono are self-hosted, with no third-party font request. |

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the build
```

Node 18.20+ or 20+.

## Deploy to Vercel

Vercel detects Astro with no extra configuration.

1. In Vercel, choose **Add New → Project** and import `afiffff12/norma-landing`.
2. Keep the detected settings: framework Astro, build `npm run build`, output `dist`.
3. Optional: add the environment variable `SITE_URL` with your final domain, so the social preview image gets an absolute URL.
4. Deploy, then connect your domain under **Settings → Domains**.

## Where things are

```
src/
  styles/tokens.css    colors, type scale per breakpoint, spacing, motion
  styles/global.css    component styles, with overrides at 1199px and 809px
  data/content.ts      every line of copy, measures, sizes and FAQ
  data/icons.ts        inline SVG icons and the logo
  components/          Nav, Hero, Sections, Anatomy, Compare, Pricing, Faq, Footer, Dialogs
  scripts/main.ts      behaviour
public/                favicon
```

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--color-page` | `#F2F2EE` | Page background (cool bond paper) |
| `--color-band` | `#E6E6E0` | Tinted sections, Norma column |
| `--color-hair` | `#C9C9C1` | Hairlines, the normal band |
| `--color-ink` | `#141414` | Text and strong rules |
| `--color-ink-2` | `#55554F` | Secondary text |
| `--color-inverse` | `#0E0F0D` | Anatomy section |
| `--color-flag` | `#8F1D17` | Out of range, primary action |

Type: Newsreader for display, IBM Plex Sans for text, IBM Plex Mono for data. No shadows; corners are square, with 2 px on controls.

Breakpoints match Framer: desktop ≥ 1200 px, tablet 810–1199 px, phone < 810 px.

Motion: 150 / 250 / 500 / 900 ms, easing `cubic-bezier(0.2, 0, 0, 1)`. The range bar draws in order: the band widens from its centre, the marker slides in, then the flag tag appears 200 ms later. Every animation is switched off under `prefers-reduced-motion`.

## Accessibility

- Skip link, visible focus rings, and logical heading order.
- Native `<dialog>` for the cart and sizing kit, so focus is trapped and Escape closes them.
- Finish and size are real radio groups. Ordering without a size moves focus to the sizes and announces the reason.
- FAQ uses `<details name="faq">`, so only one answer is open at a time with no script.
- Range bars carry a text label, for example "54 bpm, inside your range of 49 to 58".

## Differences from the Framer version

These three need code, so they exist only in this version:

- **Sizing-kit links** in the hero, menu and size picker open the kit dialog directly. In Framer they scroll to Pricing.
- **FAQ** keeps one answer open at a time.
- **Anatomy**: hovering or focusing a part also highlights its callout in the drawing, and the other way round.

The forms, both the sizing kit and the newsletter, validate and show their success state. Nothing is sent and nothing is stored.
