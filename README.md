# wxt-tailwind-template

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

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.
