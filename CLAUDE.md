# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build static export to ./out/
npm run lint     # Run ESLint
npm start        # Serve the production build
```

There are no tests in this project.

## Architecture

This is a **Next.js 14** app (App Router) with static export (`output: "export"` in `next.config.mjs`), deployed to GitHub Pages via `.github/workflows/nextjs.yml`.

**Data flow:** `page.tsx` renders `<InputItem>`, which contains a React Hook Form + Zod validated form. On submit, `qrCodeValue` is passed to `<QrCodeDialogItem>`, which opens a Radix UI dialog showing either a QR code (via `react-qr-code`) or an error alert.

**Key components:**
- `components/input-item.tsx` — main form with validation logic
- `components/qrcode-dialog-item.tsx` — dialog that renders the QR code or error state
- `components/ui/` — shadcn/ui components (generated; avoid manual edits)
- `lib/utils.ts` — `cn()` utility for merging Tailwind classes

**Styling:** Tailwind CSS with CSS variables for theming (HSL), dark mode enabled via class. shadcn/ui base color: stone.

**Path alias:** `@/` maps to the project root.
