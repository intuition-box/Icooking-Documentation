---
sidebar_position: 2
---

# Progressive Web App (PWA)

### Qu’est-ce qu’une PWA ?

Une **Progressive Web App (PWA)** est une application web qui combine les avantages d’un site web et d’une application native.  
Elle peut être installée directement depuis le navigateur, fonctionner hors-ligne, et offrir une expérience fluide sur mobile ou desktop.  

## Intégrer une PWA dans une application React

### 1. Créer un projet avec Vite

Exemple avec **Vite + React** :  

```bash
pnpm create vite@latest my-pwa -- --template react
cd my-pwa
pnpm install
```
### 2. Installer vite-plugin-pwa

```bash
pnpm add -D vite-plugin-pwa
```

### 3.  Ajouter le manifest dans vite.config.js

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