import { execFileSync } from "node:child_process";
import { realpathSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { isDeepStrictEqual } from "node:util";

function isObject(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}

function getOwnValue(object, key) {
	if (object && Object.hasOwn(object, key)) {
		return object[key];
	}
	return undefined;
}

export function mergeJson(base, ours, theirs, path = "package.json") {
	if (isDeepStrictEqual(ours, theirs)) {
		return ours;
	}
	if (isDeepStrictEqual(base, ours)) {
		return theirs;
	}
	if (isDeepStrictEqual(base, theirs)) {
		return ours;
	}
	if (
		(base === undefined || isObject(base)) &&
		isObject(ours) &&
		isObject(theirs)
	) {
		const keys = new Set([
			...Object.keys(base ?? {}),
			...Object.keys(ours),
			...Object.keys(theirs),
		]);
		const entries = [];
		for (const key of keys) {
			const value = mergeJson(
				getOwnValue(base, key),
				getOwnValue(ours, key),
				getOwnValue(theirs, key),
				`${path}.${key}`,
			);
			if (value !== undefined) {
				entries.push([key, value]);
			}
		}
		return Object.fromEntries(entries);
	}
	throw new Error(
		`Conflicting changes in ${path}; resolve manually on the daisyui branch.`,
	);
}

if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href
) {
	const [base, ours, theirs] = [1, 2, 3].map((stage) =>
		JSON.parse(
			execFileSync("git", ["show", `:${stage}:package.json`], {
				encoding: "utf8",
			}),
		),
	);
	const merged = mergeJson(base, ours, theirs);
	writeFileSync("package.json", `${JSON.stringify(merged, null, "\t")}\n`);
}
