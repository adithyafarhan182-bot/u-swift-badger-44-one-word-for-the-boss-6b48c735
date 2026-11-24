// Meetingholic — one word for the boss.
// Writes exactly one word to /output/entry.txt: the boss who is addicted
// to meetings. No spaces, no newline, 12 bytes, deterministic on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Meetingholic";
const OUT = "/output/entry.txt";

// The gate allows 1–30 characters and rejects whitespace-only text, so
// guard the word before writing: a single word, no spaces, within the cap.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error("entry must be one word of 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, WORD, "utf8");
console.log(`wrote ${WORD.length} chars to ${OUT}`);
