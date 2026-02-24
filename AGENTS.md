# Repository Guidelines

## Project Structure & Module Organization
- `src/app/`: Next.js App Router entrypoints (`layout.tsx`, `page.tsx`) and global styles (`globals.css`).
- `src/components/`: Reusable UI pieces (e.g., `header.tsx`, `project-card.tsx`, `work-history.tsx`).
- `src/data/`: Static content and typed data sources (`constants.ts`, `work.json`).
- `public/`: Static assets served directly (for example `public/me.png`).
- `types/`: Shared type declarations (`website.d.ts`).
- Build output directories are `.next/` and `out/`; do not commit generated artifacts.

## Build, Test, and Development Commands
Use `pnpm` (lockfile is `pnpm-lock.yaml`):
- `pnpm dev`: Start local dev server with Turbopack at `http://localhost:3000`.
- `pnpm build`: Create a production build.
- `pnpm start`: Serve the production build locally.
- `pnpm lint`: Run Next.js lint checks.
- `pnpm format`: Apply Prettier formatting across the repository.

## Coding Style & Naming Conventions
- TypeScript + React function components are the standard.
- Formatting is enforced by `.editorconfig` and `.prettierrc`: 2 spaces, single quotes, semicolons, LF endings, trailing commas (`es5`).
- Keep component filenames in kebab-case (for example `project-card.tsx`); export components in PascalCase.
- Keep constants and static mappings in `src/data/` instead of embedding large literals in components.

## Testing Guidelines
- There is currently no automated test suite configured.
- Minimum pre-PR quality gate: run `pnpm lint`, `pnpm build`, and manually verify key pages in `pnpm dev`.
- When adding tests, colocate them with source as `*.test.ts` / `*.test.tsx` and document the command in `package.json`.

## Commit & Pull Request Guidelines
- Follow concise, imperative commit subjects; conventional prefixes like `fix:`, `chore:`, and `feat:` are used in history.
- Keep commits focused on one concern (style, refactor, content, or feature).
- PRs should include:
  - A short summary of what changed and why.
  - Linked issue(s) when applicable.
  - Before/after screenshots for UI changes.
  - Confirmation that `pnpm lint` and `pnpm build` pass.
