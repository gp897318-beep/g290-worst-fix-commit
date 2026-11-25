// commit-worst-fix-a: writes one commit message to /output/entry.txt.
// Chosen from 8 distinct candidates (see comparison.md): the off-by-one
// fix that made the error bigger and prouder — the repair worsened the
// very bug it named, and the engineer reports it as progress.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: off-by-one error, now off by two and twice as confident";

// The gate needs exactly one line of UTF-8 text, 1 to 100 characters, not
// only white space — no trailing newline, so the file is the line alone.
if (
  LINE.length < 1 ||
  LINE.length > 100 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry must be one line of 1-100 characters");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
