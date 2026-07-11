# wxt-tailwind-template

[![CI](https://github.com/u1aryz/wxt-tailwind-template/actions/workflows/ci.yml/badge.svg)](https://github.com/u1aryz/wxt-tailwind-template/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/u1aryz/wxt-tailwind-template)](../../LICENSE)
[![Release](https://img.shields.io/github/v/release/u1aryz/wxt-tailwind-template)](https://github.com/u1aryz/wxt-tailwind-template/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](../CONTRIBUTING.md)

[English](../../README.md) | [Español](./README_es.md) | 日本語 | [한국어](./README_ko.md) | [简体中文](./README_zh-CN.md)

**[WXT](https://wxt.dev/)** でブラウザ拡張機能を構築し、**[Tailwind CSS](https://tailwindcss.com/)** でスタイリングするための、ミニマルなスターターキットです。

---

## 前提条件

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/)

---

## はじめに

### 1. 新しいプロジェクトを作成する

```bash
pnpm dlx degit u1aryz/wxt-tailwind-template my-extension
cd my-extension
pnpm install
```

### 2. 開発サーバーを起動する

```bash
pnpm dev
```

- 拡張機能をウォッチモードでコンパイルします
- Chromium ベースのブラウザで自動的にリロードされます(WXT のホットリロード機能)

### 3. プロダクションビルドを作成する

```bash
pnpm build
```

最適化・ミニファイされたバンドルを **`output/`** に出力します。

### 4. ZIP としてパッケージングする

```bash
pnpm zip            # Chrome
pnpm zip:firefox    # Firefox
```

Chrome Web Store や Firefox Add-ons にそのままアップロードできる ZIP ファイルを生成します。

### 5. ソースコードをフォーマットする

```bash
pnpm format
```

`Biome` と `tsc --noEmit` を実行します。

---

## スクリプト一覧

| コマンド           | 説明                                 |
| ------------------ | ------------------------------------ |
| `pnpm dev`         | 開発サーバーを起動                   |
| `pnpm build`       | `output/` へプロダクションビルド     |
| `pnpm zip`         | Chrome 向けに ZIP 化                 |
| `pnpm zip:firefox` | Firefox 向けに ZIP 化                |
| `pnpm format`      | コードをフォーマット                 |

---

## コントリビューション

コントリビューションを歓迎します!プルリクエストを送る前に、
[コントリビューションガイド](../CONTRIBUTING.md)(英語)と
[行動規範](../CODE_OF_CONDUCT.md)(英語)をお読みください。

脆弱性の報告については[セキュリティポリシー](../SECURITY.md)(英語)をご覧ください。

---

## ライセンス

MIT ライセンスの下で配布されています。詳細は [`LICENSE`](../../LICENSE) をご覧ください。
