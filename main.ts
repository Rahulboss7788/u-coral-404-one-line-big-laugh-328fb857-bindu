import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "My doctor prescribed laughter as the best medicine, so I laughed when he handed me the $40,000 bill.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read back and enforce the competition gate: 1-200 chars, not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TEXT) {
  throw new Error("entry.txt does not match the intended text");
}
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  throw new Error(`entry length ${written.length} is outside the 1-200 character gate`);
}
