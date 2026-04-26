# Patel Precision — Next.js 14

Converted from the Vite + React Router project. Same theme, same components, same content.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Architecture

- **App Router** (`src/app/**/page.tsx`) — server components that export `metadata` and render a client view.
- **Views** (`src/pages/*.tsx`) — original page components, now marked `"use client"`. Untouched logic.
- **Components** (`src/components/`) — identical to the Vite project; all marked `"use client"`.
- **Theme** — `src/app/globals.css` (was `src/index.css`) and `tailwind.config.ts` are unchanged.

### Key swaps already applied
- `react-router-dom` `<Link>` / `useNavigate` / `useLocation` → `next/link` / `next/navigation`
- `<PageSEO>` Helmet usage replaced with Next.js `metadata` exports per route.
- `useParams` for `/products/[slug]` uses `next/navigation`.
