# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server (exposed on network)
bun run dev        # or: npm run dev

# Build static output to dist/
bun run build

# Preview built output
bun run preview

# Email server (separate Node.js process)
cd server && node index.js
```

Package manager: **bun** (lockfile is `bun.lockb`). `npm` also works.

## Architecture

**Astro + React + Tailwind** static site for Prometheus R&D landing page. Bilingual (ES default, EN).

### i18n

- Default locale: `es` — lives at `src/pages/index.astro`
- English: `src/pages/en/index.astro`
- Translations defined in `src/i18n/ui.ts` (key-value per locale)
- Helper `useTranslations(lang)` from `src/i18n/utils.ts` — call with `getLangFromUrl(Astro.url)` to get typed `t()` function

### Component split

- `.astro` components — static sections (Hero, Service, About, Portfolio, Testimonials, Footer, Header, Banner, Differentiators, FloatingWhatsApp)
- `.jsx` components — interactive islands (Contact form with reCAPTCHA, Language selector modal, Language switcher)

### Contact form flow

`Contact.jsx` → POST to `server/index.js` (Express on port 3001) → nodemailer sends email via `prometheustij.com` SMTP. The server is a **separate process**, not part of the Astro build. reCAPTCHA key comes from env.

### Design system (Tailwind custom tokens)

Defined in `tailwind.config.mjs`:
- Colors: `cyan` (#39BAC8), `cyan-light` (#68C6E1), `dark` (#0D1117), `dark-2` (#111820), `dark-3` (#161E27), `gray-custom` (#AFAFAF)
- Fonts: `font-bebas` (Bebas Neue — headings), `font-barlow` (body, default)

### Section render order

Banner → Header → Hero → Service → About → Differentiators → Portfolio → Testimonials → Contact → Footer + FloatingWhatsApp (fixed)

Full UI spec with spacing, colors, and per-component details: `UI-OFFICIAL.md`.
