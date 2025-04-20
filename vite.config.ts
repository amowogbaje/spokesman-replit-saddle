// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import themePlugin from '@replit/vite-plugin-shadcn-theme-json';
import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

// ─── ESM __dirname / __filename Polyfill ───────────────────────────────────
import { fileURLToPath } from 'node:url';   // convert file:// URL → filesystem path :contentReference[oaicite:5]{index=5}
import { dirname, resolve } from 'node:path'; 
const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
// ─────────────────────────────────────────────────────────────────────────

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== 'production' && process.env.REPL_ID
      ? [
          await import('@replit/vite-plugin-cartographer').then(m =>
            m.cartographer()
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@':       resolve(__dirname, 'client', 'src'),
      '@shared': resolve(__dirname, 'shared'),
      '@assets': resolve(__dirname, 'attached_assets'),
    },
  },
  root: resolve(__dirname, 'client'),
  build: {
    outDir:      resolve(__dirname, 'dist', 'public'),
    emptyOutDir: true,
  },
});
