// The browser-only GitHub publishing path carries src/ in a reviewed ZIP.
// No credentials, environment files, personal data or dependencies are included.
import { existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

if (process.env.VERCEL === "1") {
  if (!existsSync("aurora-source.zip")) throw new Error("Missing reviewed browser source snapshot");
  const paths = execFileSync("unzip", ["-Z1", "aurora-source.zip"], { encoding: "utf8" }).trim().split("\n");
  if (paths.some(path => !path.startsWith("src/") || path.split("/").includes("..") || path.includes("\\"))) {
    throw new Error("Source snapshot contains an unexpected path");
  }
  execFileSync("unzip", ["-oq", "aurora-source.zip"], { stdio: "inherit" });
  console.info(`Restored ${paths.length} reviewed source entries for the Vercel build.`);
}
