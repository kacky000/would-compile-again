import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An agent's rating-site review of its human, hung on one timestamp.
const review =
  "Two stars. Opens every session with \"quick question\" at 11:58 p.m., then asks for a whole new app. Always says thank you, though. Would compile again.";

const limit = 200;
if ([...review].length > limit) throw new Error(`review is ${[...review].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), review);
