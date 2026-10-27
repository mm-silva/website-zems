import { rmSync } from "node:fs";
import { resolve } from "node:path";

if (!process.env.npm_config_user_agent?.startsWith("pnpm/")) {
  console.error("Use pnpm to install this workspace: pnpm install");
  process.exit(1);
}

rmSync(resolve(import.meta.dirname, "..", "package-lock.json"), { force: true });
rmSync(resolve(import.meta.dirname, "..", "yarn.lock"), { force: true });
