# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Overview

A browser extension built with [WXT](https://wxt.dev/), React 19, and Tailwind CSS 4.
Requires **Node.js `^22.18.0 || ^24.11.0 || >=26.0.0`** and **pnpm** (do not use npm or yarn).

## Commands

| Command      | Description                                                |
| ------------ | ---------------------------------------------------------- |
| `pnpm dev`   | Start dev server (Chromium, hot-reload)                    |
| `pnpm build` | Production build to `output/`                              |
| `pnpm zip`   | Package for Chrome (`zip:firefox` for Firefox)             |
| `pnpm check` | Format, lint, and type-check with Vite+ (`vp check --fix`) |

Run `pnpm check` before committing.

## Conventions

- **Commits**: Conventional Commits are enforced by commitlint via a lefthook
  `commit-msg` hook (e.g. `feat: ...`, `fix: ...`, `chore(deps): ...`).
- **Formatting/linting/type checking**: [Vite+](https://viteplus.dev/)
  (`vp check` = Oxfmt + Oxlint + type check), configured in the `fmt` and
  `lint` blocks of `vite.config.ts` — tab indentation, double quotes.
  `vite.config.ts` is only for Vite+ tooling; build settings belong in
  `wxt.config.ts`. Do not add ESLint, Prettier, Biome, or a direct
  `typescript` dependency.
- **Styling**: Tailwind CSS v4. Global styles live in `assets/tailwind.css`
  (imported via `@import "tailwindcss"`); there is no `tailwind.config` file.

## WXT Specifics

- Entrypoints (background, content scripts, popup, etc.) are defined by the
  file structure under `entrypoints/` — see the [WXT docs](https://wxt.dev/guide/essentials/entrypoints.html).
- Modules in `utils/` are auto-imported; no explicit import needed.
- Generated types live in `.wxt/` and are created by `wxt prepare`
  (runs automatically on `pnpm install`).
- Use the `browser` global (from `wxt/browser`, auto-imported) instead of
  `chrome` for cross-browser compatibility. No polyfill is used: the minimum
  supported Chrome version is 148, so `runtime.onMessage` listeners can return
  a Promise natively.
- `output/` is build output — never edit or commit it.
