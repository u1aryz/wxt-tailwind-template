# wxt-tailwind-template

[![CI](https://github.com/u1aryz/wxt-tailwind-template/actions/workflows/ci.yml/badge.svg)](https://github.com/u1aryz/wxt-tailwind-template/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/u1aryz/wxt-tailwind-template)](../../LICENSE)
[![Release](https://img.shields.io/github/v/release/u1aryz/wxt-tailwind-template)](https://github.com/u1aryz/wxt-tailwind-template/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](../CONTRIBUTING.md)

[English](../../README.md) | [Español](./README_es.md) | [日本語](./README_ja.md) | [한국어](./README_ko.md) | 简体中文

一个极简的入门模板,使用 **[WXT](https://wxt.dev/)** 构建浏览器扩展,并使用 **[Tailwind CSS](https://tailwindcss.com/)** 进行样式设计。

---

## 前置要求

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/)

---

## 快速开始

### 1. 创建新项目

```bash
pnpm dlx degit u1aryz/wxt-tailwind-template my-extension
cd my-extension
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

- 以 watch 模式编译扩展
- 在基于 Chromium 的浏览器中自动重新加载(通过 WXT 热重载)

### 3. 创建生产构建

```bash
pnpm build
```

在 **`output/`** 中输出经过优化和压缩的构建产物。

### 4. 打包为 ZIP

```bash
pnpm zip            # Chrome
pnpm zip:firefox    # Firefox
```

生成可直接上传到 Chrome Web Store 或 Firefox Add-ons 的 ZIP 文件。

### 5. 格式化源代码

```bash
pnpm format
```

运行 `Biome` 和 `tsc --noEmit`。

---

## 脚本参考

| 命令               | 说明                          |
| ------------------ | ----------------------------- |
| `pnpm dev`         | 启动开发服务器                |
| `pnpm build`       | 生产构建到 `output/`          |
| `pnpm zip`         | 为 Chrome 打包 ZIP            |
| `pnpm zip:firefox` | 为 Firefox 打包 ZIP           |
| `pnpm format`      | 格式化代码                    |

---

## 贡献

欢迎贡献!在提交 Pull Request 之前,请阅读
[贡献指南](../CONTRIBUTING.md)(英文)和
[行为准则](../CODE_OF_CONDUCT.md)(英文)。

如需报告安全漏洞,请参阅[安全政策](../SECURITY.md)(英文)。

---

## 许可证

基于 MIT 许可证分发。详情请参阅 [`LICENSE`](../../LICENSE)。
