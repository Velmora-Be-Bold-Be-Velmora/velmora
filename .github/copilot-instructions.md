---
name: velmora-workspace-instructions
description: "Workspace instructions for the Velmora Next.js app using the App Router, Apollo GraphQL, and Mantine UI."
applyTo:
  - "**/*"
---

This repository is a **Next.js 16 app using the App Router** with source code under `src/app/`.

Key conventions:
- Use `src/app/` routes and layouts, not the legacy `pages/` router.
- The store section lives under `src/app/(store)/` and is wired through `src/app/(store)/layout.tsx`.
- Store UI components are under `src/app/components/store/`, including `Header.tsx` and `Footer.tsx`.
- The admin section lives under `src/app/(admin)/`.
- Global styling is in `src/app/globals.css`.

GraphQL and data conventions:
- Apollo client setup is in `src/lib/apolloClient.ts`.
- GraphQL queries and mutations are organized in `src/graphql/queries/` and `src/graphql/mutations/`.
- Generated GraphQL types and helpers are in `src/graphql/generated/`.
- The repository uses `npm run codegen` to update GraphQL artifacts.

Important scripts:
- `npm run dev` — start local development server
- `npm run build` — build production output
- `npm run start` — run built app
- `npm run lint` — run ESLint
- `npm run codegen` — run GraphQL Code Generator

Use the `@/` path alias for imports from `src/` when available, and preserve the App Router/layout structure when adding pages or shared UI.
