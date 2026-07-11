# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Overview

A browser extension built with [WXT](https://wxt.dev/), React 19, and Tailwind CSS 4.
Requires **Node.js >= 22** and **pnpm** (do not use npm or yarn).

## Commands

| Command          | Description                                     |
| ---------------- | ----------------------------------------------- |
| `pnpm dev`       | Start dev server (Chromium, hot-reload)         |
| `pnpm build`     | Production build to `output/`                   |
| `pnpm zip`       | Package for Chrome (`zip:firefox` for Firefox)  |
| `pnpm typecheck` | Type-check with `tsc --noEmit`                  |
| `pnpm format`    | Format and lint with Biome (`--write --unsafe`) |

Run `pnpm typecheck` and `pnpm format` before committing.

## Conventions

- **Commits**: Conventional Commits are enforced by commitlint via a lefthook
  `commit-msg` hook (e.g. `feat: ...`, `fix: ...`, `chore(deps): ...`).
- **Formatting/linting**: Biome (`biome.json`) — tab indentation, double quotes.
  Do not add ESLint or Prettier.
- **Styling**: Tailwind CSS v4. Global styles live in `assets/tailwind.css`
  (imported via `@import "tailwindcss"`); there is no `tailwind.config` file.

## WXT Specifics

- Entrypoints (background, content scripts, popup, etc.) are defined by the
  file structure under `entrypoints/` — see the [WXT docs](https://wxt.dev/guide/essentials/entrypoints.html).
- Modules in `utils/` are auto-imported; no explicit import needed.
- Generated types live in `.wxt/` and are created by `wxt prepare`
  (runs automatically on `pnpm install`).
- Use the `browser` global (webextension-polyfill) instead of `chrome` for
  cross-browser compatibility.
- `output/` is build output — never edit or commit it.
