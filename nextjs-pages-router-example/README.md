# Panora Widget SDK — Next.js Pages Router Example

A minimal Next.js Pages Router example demonstrating all three display modes of the Panora swap widget.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3458](http://localhost:3458).

## Configuration

Copy `.env.example` to `.env.local` and add your API key (optional — the widget falls back to a public key):

```bash
cp .env.example .env.local
```

## Pages Router vs App Router

This example uses the Pages Router (`src/pages/`). No `"use client"` directive needed — the Pages Router handles client/server rendering automatically.

For the App Router version, see the [nextjs-app-router-example](../nextjs-app-router-example/).

## Display Modes

- **INTEGRATED** — Renders inline inside a target `<div>`
- **WIDGET** — Floating button in the corner
- **MODAL** — Centered popup dialog

## Learn More

- [Widget SDK Documentation](https://docs.panora.exchange/developer/swap/widget)
- [Full Configuration Reference](https://docs.panora.exchange/developer/swap/widget)
