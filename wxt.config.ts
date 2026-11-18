import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
	modules: ["@wxt-dev/module-react"],
	outDir: "output",
	manifest: ({ browser }) => ({
		name: "__MSG_extName__",
		description: "__MSG_extDescription__",
		default_locale: "en",
		// Chrome 148 is the first version that provides the `browser` namespace
		// and lets `runtime.onMessage` listeners return a Promise natively.
		...(browser !== "firefox" &&
			browser !== "safari" && { minimum_chrome_version: "148" }),
	}),
	vite: () => ({
		plugins: [tailwindcss()],
	}),
});
