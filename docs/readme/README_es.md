# wxt-tailwind-template

[![CI](https://github.com/u1aryz/wxt-tailwind-template/actions/workflows/ci.yml/badge.svg)](https://github.com/u1aryz/wxt-tailwind-template/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/u1aryz/wxt-tailwind-template)](../../LICENSE)
[![Release](https://img.shields.io/github/v/release/u1aryz/wxt-tailwind-template)](https://github.com/u1aryz/wxt-tailwind-template/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](../CONTRIBUTING.md)

[English](../../README.md) | Español | [日本語](./README_ja.md) | [한국어](./README_ko.md) | [简体中文](./README_zh-CN.md)

Un kit de inicio minimalista para construir extensiones de navegador con **[WXT](https://wxt.dev/)** y darles estilo con **[Tailwind CSS](https://tailwindcss.com/)**.

---

## Requisitos previos

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/)

---

## Primeros pasos

### 1. Crear un nuevo proyecto

```bash
pnpm dlx degit u1aryz/wxt-tailwind-template my-extension
cd my-extension
pnpm install
```

### 2. Iniciar el servidor de desarrollo

```bash
pnpm dev
```

- Compila la extensión en modo watch
- La recarga automáticamente en navegadores basados en Chromium (mediante el hot-reload de WXT)

### 3. Crear una build de producción

```bash
pnpm build
```

Genera un bundle optimizado y minificado en **`output/`**.

### 4. Empaquetar como ZIP

```bash
pnpm zip            # Chrome
pnpm zip:firefox    # Firefox
```

Genera archivos ZIP listos para subir a Chrome Web Store o Firefox Add-ons.

### 5. Formatear el código fuente

```bash
pnpm format
```

Ejecuta `Biome` y `tsc --noEmit`.

---

## Referencia de scripts

| Comando            | Descripción                          |
| ------------------ | ------------------------------------ |
| `pnpm dev`         | Iniciar el servidor de desarrollo    |
| `pnpm build`       | Build de producción en `output/`     |
| `pnpm zip`         | ZIP para Chrome                      |
| `pnpm zip:firefox` | ZIP para Firefox                     |
| `pnpm format`      | Formatear el código                  |

---

## Contribuir

¡Las contribuciones son bienvenidas! Antes de enviar un pull request, lee la
[guía de contribución](../CONTRIBUTING.md) (en inglés) y nuestro
[código de conducta](../CODE_OF_CONDUCT.md) (en inglés).

Para reportar una vulnerabilidad de seguridad, consulta la
[política de seguridad](../SECURITY.md) (en inglés).

---

## Licencia

Distribuido bajo la licencia MIT. Consulta [`LICENSE`](../../LICENSE) para más detalles.
