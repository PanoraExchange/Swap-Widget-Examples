# Panora Widget SDK — Next.js App Router Example

A minimal Next.js App Router example demonstrating all three display modes of the Panora swap widget.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3457](http://localhost:3457).

## Configuration

Copy `.env.example` to `.env.local` and add your API key (optional — the widget falls back to a public key):

```bash
cp .env.example .env.local
```

## Important Notes

- The `"use client"` directive is required on any component that calls `init()` or `close()`, since the widget uses browser APIs.
- The widget loads its UI from the CDN at runtime, so your Next.js bundle size is unaffected.

## Display Modes

- **INTEGRATED** — Renders inline inside a target `<div>`
- **WIDGET** — Floating button in the corner
- **MODAL** — Centered popup dialog

## Learn More

- [Widget SDK Documentation](https://docs.panora.exchange/developer/swap/widget)
- [Full Configuration Reference](https://docs.panora.exchange/developer/swap/widget)
