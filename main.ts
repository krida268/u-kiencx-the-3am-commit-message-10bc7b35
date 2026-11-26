// The 3AM Commit Message — u-kiencx-the-3am-commit-message-10bc7b35
// Writes one commit message line to <output>/entry.txt.
// Gate: UTF-8 text, 1-139 characters, not only whitespace, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "fix: it works now, no idea why — merging before the tests change their minds";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
