# Panora Widget SDK — HTML Example

A minimal example showing how to integrate the Panora swap widget into a plain HTML page using the CDN script. No bundler or framework required.

## Quick Start

1. Serve the directory with any static file server:

   ```bash
   npx http-server .
   ```

2. Open the URL shown in your terminal (e.g. `http://localhost:8080`)

## How It Works

The CDN script is loaded via a `<script>` tag:

```html
<script src="https://assets.panora.exchange/widget-v1.js" defer></script>
```

Then initialized with:

```javascript
PanoraWidget.render("#panora-widget-container", {
  displayMode: "INTEGRATED",
  panoraApiKey: "YOUR_API_KEY", // optional — uses public key if omitted
});
```

## Display Modes

This example demonstrates all three display modes:

- **INTEGRATED** — Renders inline inside a target `<div>`
- **WIDGET** — Floating button in the corner
- **MODAL** — Centered popup dialog

## Learn More

- [Widget SDK Documentation](https://docs.panora.exchange/developer/swap/widget)
- [Full Configuration Reference](https://docs.panora.exchange/developer/swap/widget)
