# wxt-tailwind-template

[![CI](https://github.com/u1aryz/wxt-tailwind-template/actions/workflows/ci.yml/badge.svg)](https://github.com/u1aryz/wxt-tailwind-template/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/u1aryz/wxt-tailwind-template)](../../LICENSE)
[![Release](https://img.shields.io/github/v/release/u1aryz/wxt-tailwind-template)](https://github.com/u1aryz/wxt-tailwind-template/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](../CONTRIBUTING.md)

[English](../../README.md) | [Español](./README_es.md) | [日本語](./README_ja.md) | 한국어 | [简体中文](./README_zh-CN.md)

**[WXT](https://wxt.dev/)** 로 브라우저 확장 프로그램을 만들고 **[Tailwind CSS](https://tailwindcss.com/)** 로 스타일링하기 위한 미니멀 스타터 킷입니다.

---

## 사전 요구 사항

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/)

---

## 시작하기

### 1. 새 프로젝트 생성

```bash
pnpm dlx degit u1aryz/wxt-tailwind-template my-extension
cd my-extension
pnpm install
```

### 2. 개발 서버 시작

```bash
pnpm dev
```

- 확장 프로그램을 watch 모드로 컴파일합니다
- Chromium 기반 브라우저에서 자동으로 리로드됩니다 (WXT 핫 리로드)

### 3. 프로덕션 빌드 생성

```bash
pnpm build
```

최적화되고 압축된 번들을 **`output/`** 에 출력합니다.

### 4. ZIP으로 패키징

```bash
pnpm zip            # Chrome
pnpm zip:firefox    # Firefox
```

Chrome Web Store 또는 Firefox Add-ons에 바로 업로드할 수 있는 ZIP 파일을 생성합니다.

### 5. 소스 코드 포맷팅

```bash
pnpm format
```

`Biome` 과 `tsc --noEmit` 을 실행합니다.

---

## 스크립트 목록

| 명령어             | 설명                              |
| ------------------ | --------------------------------- |
| `pnpm dev`         | 개발 서버 시작                    |
| `pnpm build`       | `output/` 에 프로덕션 빌드        |
| `pnpm zip`         | Chrome용 ZIP 생성                 |
| `pnpm zip:firefox` | Firefox용 ZIP 생성                |
| `pnpm format`      | 코드 포맷팅                       |

---

## 기여하기

기여를 환영합니다! 풀 리퀘스트를 보내기 전에
[기여 가이드](../CONTRIBUTING.md)(영어)와
[행동 강령](../CODE_OF_CONDUCT.md)(영어)을 읽어 주세요.

보안 취약점 신고는 [보안 정책](../SECURITY.md)(영어)을 참고해 주세요.

---

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [`LICENSE`](../../LICENSE) 를 참고하세요.
