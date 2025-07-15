# wxt-tailwind-template

A minimal starter kit for building browser extensions with **[WXT](https://wxt.dev/)** and styling them with **[Tailwind CSS](https://tailwindcss.com/)**.

---

## Prerequisites

- [mise](https://mise.jdx.dev/) (`mise settings experimental=true`)

---

## Getting Started

### 1. Scaffold a new project

```bash
# With bun
bunx degit u1aryz/wxt-tailwind-template my-extension

# Or with npm
npx degit u1aryz/wxt-tailwind-template my-extension

cd my-extension
mise install
```

### 2. Start the dev server

```bash
mise run dev
```

- Compiles the extension in watch-mode
- Automatically reloads it in Chromium-based browsers (via WXT hot-reload)

### 3. Create a production build

```bash
mise run build
```

Outputs an optimized, minified bundle in **`output/`**.

### 4. Package as a ZIP

```bash
mise run zip
```

Generates **`zip`** – ready to upload to Chrome Web Store, Firefox Add-ons.

### 5. Format source code

```bash
mise run format
```

Runs `Biome` and `tsc --noEmit`.

---

## Scripts Reference

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `mise run dev`    | Start development server      |
| `mise run build`  | Production build to `output/` |
| `mise run zip`    | Zip the `output/` folder      |
| `mise run format` | Format code                   |

---

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.
