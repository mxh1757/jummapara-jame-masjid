import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// On GitHub Actions the site is built as a plain static site for GitHub Pages:
// no Base44 editor tooling, and the Base44 login/client are swapped for the
// no-op stand-ins in src/standalone, so the site makes no Base44 calls.
const isGitHubBuild = process.env.GITHUB_ACTIONS === 'true'
const src = (p = '') => fileURLToPath(new URL(`./src/${p}`, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  ...(isGitHubBuild && {
    resolve: {
      alias: [
        { find: '@/lib/AuthContext', replacement: src('standalone/AuthContext.jsx') },
        { find: '@/api/base44Client', replacement: src('standalone/base44Client.js') },
        { find: /^@\//, replacement: src() },
      ],
    },
  }),
  plugins: [
    !isGitHubBuild && base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
  ].filter(Boolean)
});