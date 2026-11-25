// Worst Fix Ever: Funniest Commit Message
// Writes a single original commit-message line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
// Node 22+ stdlib only. Deterministic: every run writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original commit-message line, invented for this bounty.
// A tiny cosmetic fix (a typo in the login error message) backfires in the
// worst possible way: the "fixed" message now leaks the password instead
// of the username. Specific irony, real commit-subject voice.
const LINE =
  "fix: typo in login error message; it now prints the password instead of the username";

function validate(line: string): void {
  // Count code points, not UTF-16 units, so the gate's 1-100 limit holds
  // for any text. The line is plain ASCII here, so both counts agree.
  const length = [...line].length;
  if (length < 1 || length > 100) {
    throw new Error(`entry must be 1-100 characters, got ${length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
