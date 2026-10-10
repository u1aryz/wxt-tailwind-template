import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { mergeJson } from "./merge-package-json.mjs";

test("preserves branch dependencies and applies main dependency updates", () => {
	const base = {
		devEngines: { packageManager: { name: "pnpm", version: "^11.2.1" } },
		devDependencies: { lefthook: "2.1.12" },
	};
	const ours = {
		...base,
		dependencies: { cn: "^0.2.1" },
		devDependencies: { daisyui: "^5.5.5", lefthook: "2.1.12" },
	};
	const theirs = {
		devEngines: { packageManager: { name: "pnpm", version: "^12.0.0" } },
		devDependencies: { lefthook: "2.1.17" },
	};
	assert.deepEqual(mergeJson(base, ours, theirs), {
		...theirs,
		dependencies: { cn: "^0.2.1" },
		devDependencies: { lefthook: "2.1.17", daisyui: "^5.5.5" },
	});
});

test("CLI resolves index stages when invoked through a symlink", (t) => {
	const cwd = mkdtempSync(join(tmpdir(), "merge-package-json-"));
	t.after(() => rmSync(cwd, { recursive: true, force: true }));
	function git(args, input) {
		return execFileSync("git", args, { cwd, input, encoding: "utf8" }).trim();
	}
	git(["init", "--quiet"]);
	const stages = [
		{ a: 1, b: 1 },
		{ a: 2, b: 1 },
		{ a: 1, b: 2 },
	].map((value, index) => {
		const hash = git(["hash-object", "-w", "--stdin"], JSON.stringify(value));
		return `100644 ${hash} ${index + 1}\tpackage.json\n`;
	});
	git(["update-index", "--index-info"], stages.join(""));
	const script = join(cwd, "merge.mjs");
	symlinkSync(
		fileURLToPath(new URL("./merge-package-json.mjs", import.meta.url)),
		script,
	);
	execFileSync(process.execPath, [script], { cwd });
	assert.deepEqual(
		JSON.parse(readFileSync(join(cwd, "package.json"), "utf8")),
		{
			a: 2,
			b: 2,
		},
	);
});

test("merges independent edits in the same object", () => {
	assert.deepEqual(mergeJson({ a: 1, b: 1 }, { a: 2, b: 1 }, { a: 1, b: 2 }), {
		a: 2,
		b: 2,
	});
});

test("accepts identical changes and preserves arrays", () => {
	assert.deepEqual(
		mergeJson({ files: ["old"] }, { files: ["new"] }, { files: ["new"] }),
		{ files: ["new"] },
	);
});

test("preserves deletions alongside independent additions", () => {
	assert.deepEqual(mergeJson({ a: 1, b: 1 }, { b: 1, c: 2 }, { a: 1, b: 2 }), {
		b: 2,
		c: 2,
	});
});

test("rejects conflicting changes to the same dependency", () => {
	assert.throws(
		() =>
			mergeJson(
				{ dependencies: { react: "19.0.0" } },
				{ dependencies: { react: "19.1.0" } },
				{ dependencies: { react: "19.2.0" } },
			),
		/package.json.dependencies.react/,
	);
});

test("rejects deletion versus modification", () => {
	assert.throws(
		() => mergeJson({ a: { b: 1 } }, {}, { a: { b: 2 } }),
		/package.json.a/,
	);
});

test("rejects conflicting additions and arrays", () => {
	assert.throws(() => mergeJson({}, { a: 1 }, { a: 2 }), /package.json.a/);
	assert.throws(
		() => mergeJson({ a: [] }, { a: [1] }, { a: [2] }),
		/package.json.a/,
	);
});
