# Portfolio OS — Design (2026-07-22)

Redesign of canberkvarli.is-a.dev from the terminal/hacker aesthetic into an
**8-bit "retro operating system" desktop**. Single static `index.html` on GitHub
Pages (keeps CNAME). Super simple, personality-forward, theme-toggleable.

## Concept
A fake pixel-art OS ("CANBERK.OS"). Boot sequence → desktop with clickable icons
→ draggable pixel windows → taskbar with start menu, theme switcher, live clock.

## Windows / content (from resume)
- **about.exe** (auto-opens on boot) — engineer + founder + actor + trained pilot;
  contact links (GitHub, LinkedIn, email).
- **actorrise.exe** (featured, larger) — AI acting platform, 300+ users & paying
  subs, AI ScenePartner, RAG semantic search (pgvector, 12k+ monologues), ETL
  pipeline, Next.js/FastAPI/Supabase. Live launch button.
- **projects.dir** — fullcircle (App Store), Prevail Legal AI, Microsoft intern.
- **resume.pdf** — embedded/downloadable resume.
- **contact.exe** — links + email.

## Themes (localStorage, cycle in taskbar)
Light (default) → Dark → Game Boy green → Windows 95 gray. All driven by CSS
variables: `--desk --win-bg --win-text --accent --title-bg --title-text` + bevels.

## Interaction & motion
- Boot: typed POST lines, skippable, once per session (sessionStorage).
- Windows: drag by titlebar, click-to-focus (z-index), `[_][□][x]` minimize/close,
  minimized windows live in taskbar, reopen from icon or start menu.
- Motion (CSS-first): window open scale/step-in, minimize shrink, blinking cursor,
  icon hover bounce, optional CRT scanline overlay.
- Mobile: icons + windows stack full-width, drag disabled, simplified taskbar.

## Tech
Single file. Fonts: "Press Start 2P" (chrome/headings) + "VT323" (body) via Google
Fonts. No framework, no build. Vanilla JS for drag/focus/boot/themes.
