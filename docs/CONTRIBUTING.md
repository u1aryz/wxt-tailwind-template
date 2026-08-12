# Contributing to wxt-tailwind-template

Thank you for your interest in contributing! All kinds of contributions are
welcome — bug reports, feature suggestions, documentation improvements, and
pull requests.

Please note that this project is released with a
[Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to
uphold it.

## Reporting Bugs & Suggesting Features

- Search [existing issues](https://github.com/u1aryz/wxt-tailwind-template/issues)
  first to avoid duplicates.
- Open a [new issue](https://github.com/u1aryz/wxt-tailwind-template/issues/new)
  with a clear description. For bugs, include steps to reproduce, the expected
  behavior, and your environment (OS, Node.js version, browser).
- **Do not report security vulnerabilities through public issues.** See our
  [Security Policy](./SECURITY.md) instead.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/) 11 (see `devEngines.packageManager` in
  `package.json`)

Any compatible pnpm 11 version can be used. A version mismatch does not trigger
an automatic package-manager download.

## Development Setup

1. [Fork](https://github.com/u1aryz/wxt-tailwind-template/fork) the repository
   and clone your fork:

   ```bash
   git clone https://github.com/<your-username>/wxt-tailwind-template.git
   cd wxt-tailwind-template
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

   This also installs the [lefthook](https://github.com/evilmartians/lefthook)
   git hooks (via the `prepare` script) and runs `wxt prepare` (via the
   `postinstall` script).

3. Start the dev server:

   ```bash
   pnpm dev            # Chromium-based browsers
   pnpm dev:firefox    # Firefox
   ```

## Useful Scripts

| Command          | Description                                  |
| ---------------- | -------------------------------------------- |
| `pnpm dev`       | Start development server                     |
| `pnpm build`     | Production build to `output/`                |
| `pnpm typecheck` | Type-check with `tsc --noEmit`               |
| `pnpm format`    | Format and lint with [Biome](https://biomejs.dev/) |

## Coding Style

This project uses [Biome](https://biomejs.dev/) for formatting and linting
(see `biome.json`). Run `pnpm format` before committing, or rely on the
pre-commit hook described below.

## Commit Convention

Commit messages must follow the
[Conventional Commits](https://www.conventionalcommits.org/) specification,
e.g.:

```
feat: add options page entrypoint
fix: correct manifest description key
docs: update setup instructions
chore(deps): update wxt to v0.21
```

This is enforced by [commitlint](https://commitlint.js.org/) via the
`commit-msg` git hook.

## Git Hooks

[lefthook](https://github.com/evilmartians/lefthook) runs automatically:

- **pre-commit**: Biome check (with autofix on staged files) and
  `tsc --noEmit`
- **commit-msg**: commitlint validation

## Pull Request Flow

1. Create a topic branch from `main`.
2. Make your changes and make sure the following pass locally:

   ```bash
   pnpm biome check
   pnpm typecheck
   pnpm build
   ```

   (CI runs these same checks on every pull request.)

3. Push your branch and open a pull request against `main` with a clear
   description of what and why.

Thank you for contributing! 🎉
