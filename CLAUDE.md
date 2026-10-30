# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is pnpm (`pnpm-lock.yaml`).

- `pnpm dev` — dev server at http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — `next lint` (ESLint 8, `.eslintrc.json`)

There is no test suite.

## Architecture

Single-page personal portfolio built with Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS and GSAP. Path alias `@/*` → `src/*`.

- `src/app/page.tsx` is a client component that renders the whole site as stacked sections: `Navbar`/`MobileNavBar`, `About`, `Skills`, `Projects`, `Contact`, `Footer`. There is only one route.
- Section components live in `src/components/<Section>/`. Section data is kept in plain TS modules next to the component (`Skills/getSkills/{frontend,backend,tools}.ts`, `Projects/getProject/GetProject{Desktop,Mobile}.ts`) — add a skill or project by editing those files, not the JSX.
- **Desktop/mobile split:** `src/hooks/useMobileLayout.tsx` tracks `window.innerWidth` (breakpoint 1024px) and swaps the project list between `GetProjectDesktop` and `GetProjectMobile`. It also locks body scroll when the mobile nav is open (`openNav`). A new project must be added to both data files.
- `src/hooks/useMouseHover.tsx` drives the hover-card positions used by `Projects/HoverCard.tsx`.
- Animations are GSAP (`fromTo` in `useLayoutEffect`, with `ScrollTrigger` registered inside components such as `Projects.tsx` for scroll-reveal). Elements animated in start with `opacity-0` in their Tailwind classes.
- Shared UI primitives go in `src/components/reusable/` (e.g. `Badge`).
- Code style: tabs for indentation, single quotes.
