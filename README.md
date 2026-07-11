# wxt-tailwind-template

[![CI](https://github.com/u1aryz/wxt-tailwind-template/actions/workflows/ci.yml/badge.svg)](https://github.com/u1aryz/wxt-tailwind-template/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/u1aryz/wxt-tailwind-template)](./LICENSE)
[![Release](https://img.shields.io/github/v/release/u1aryz/wxt-tailwind-template)](https://github.com/u1aryz/wxt-tailwind-template/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./docs/CONTRIBUTING.md)

English | [Español](./docs/readme/README_es.md) | [日本語](./docs/readme/README_ja.md) | [한국어](./docs/readme/README_ko.md) | [简体中文](./docs/readme/README_zh-CN.md)

A minimal starter kit for building browser extensions with **[WXT](https://wxt.dev/)** and styling them with **[Tailwind CSS](https://tailwindcss.com/)**.

---

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/)

---

## Getting Started

### 1. Scaffold a new project

```bash
pnpm dlx degit u1aryz/wxt-tailwind-template my-extension
cd my-extension
pnpm install
```

### 2. Start the dev server

```bash
pnpm dev
```

- Compiles the extension in watch-mode
- Automatically reloads it in Chromium-based browsers (via WXT hot-reload)

### 3. Create a production build

```bash
pnpm build
```

Outputs an optimized, minified bundle in **`output/`**.

### 4. Package as a ZIP

```bash
pnpm zip            # Chrome
pnpm zip:firefox    # Firefox
```

Generates ZIP files ready to upload to Chrome Web Store or Firefox Add-ons.

### 5. Format source code

```bash
pnpm format
```

Runs `Biome` and `tsc --noEmit`.

---

## Scripts Reference

| Command            | Description                   |
| ------------------ | ----------------------------- |
| `pnpm dev`         | Start development server      |
| `pnpm build`       | Production build to `output/` |
| `pnpm zip`         | Zip for Chrome                |
| `pnpm zip:firefox` | Zip for Firefox               |
| `pnpm format`      | Format code                   |

---

## Contributing

Contributions are welcome! Please read the
[Contributing Guide](./docs/CONTRIBUTING.md) and our
[Code of Conduct](./docs/CODE_OF_CONDUCT.md) before submitting a pull request.

To report a security vulnerability, please see the
[Security Policy](./docs/SECURITY.md).

---

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.
