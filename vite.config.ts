import { defineConfig } from "vite-plus";

// Used by `vp check` / `vp lint` / `vp fmt` only.
// WXT builds the extension from wxt.config.ts and does not load this file.
export default defineConfig({
	fmt: {
		useTabs: true,
		printWidth: 80,
		// Keep package.json key order stable for the daisyui branch merge script.
		sortPackageJson: false,
		sortImports: true,
		sortTailwindcss: {
			stylesheet: "./assets/tailwind.css",
		},
	},
	lint: {
		// Every built-in plugin except those for unused frameworks/test runners
		// (jest, nextjs, vue). Setting `plugins` replaces the default set.
		plugins: [
			"eslint",
			"typescript",
			"unicorn",
			"oxc",
			"import",
			"react",
			"react-perf",
			"jsx-a11y",
			"promise",
			"node",
			"jsdoc",
			"vitest",
		],
		jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
		categories: {
			correctness: "error",
			suspicious: "error",
			perf: "error",
		},
		rules: {
			curly: "error",
			// Not needed with the automatic JSX runtime ("jsx": "react-jsx").
			"react/react-in-jsx-scope": "off",
			"vite-plus/prefer-vite-plus-imports": "error",
		},
		options: { typeAware: true, typeCheck: true },
	},
});
