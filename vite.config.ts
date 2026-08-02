import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';

const staticBundleEntry = /  <script defer src="\.\/assets\/index-BNdThFsL\.js"><\/script>\r?\n  <link rel="stylesheet" href="\.\/assets\/index-BNH1bA44\.css">/;
const viteModuleEntry = '  <script type="module" src="/src/main.tsx"></script>';

const directFileEntryPlugin: Plugin = {
  name: 'serve-module-entry-with-vite',
  transformIndexHtml: {
    order: 'pre',
    handler(html: string) {
      return html.replace(staticBundleEntry, viteModuleEntry);
    },
  },
};

export default defineConfig({
  base: './',
  plugins: [directFileEntryPlugin, react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
