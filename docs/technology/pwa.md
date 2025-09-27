---
sidebar_position: 2
---

# Progressive Web App (PWA)

### What is a PWA ?

A **Progressive Web App (PWA)** is a web application that combines the benefits of a website and a native application.
It can be installed directly from the browser, work offline, and provide a smooth experience on both mobile and desktop. 

## Integrating a PWA into a React application

### 1. Create a project with Vite

Example with **Vite + React** :  

```bash
pnpm create vite@latest my-pwa -- --template react
cd my-pwa
pnpm install
```
### 2. Install vite-plugin-pwa

```bash
pnpm add -D vite-plugin-pwa
```

### 3. Add the manifest in vit.config.js

```bash
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Vite React PWA',
        short_name: 'MyPWA',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
```