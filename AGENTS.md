<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Browser-only deployment

Production is connected to `by-lws/auroras-room`, not the old local origin. Web-account work must use the Codex in-app browser. The browser upload path uses `aurora-source.zip` (only tracked `src/`) plus root package/lock/tsconfig and `restore-browser-source.mjs`. On Vercel only, the build restores this reviewed snapshot before compiling. Local development reads `src/` directly. After changing source, commit it and regenerate with `git archive --format=zip --output=aurora-source.zip HEAD src` before browser upload. Never include env files, credentials, user submissions or node_modules. This snapshot is the authoritative production source until normal Git synchronization is explicitly allowed; then remove the snapshot mechanism in the same source-sync commit.
