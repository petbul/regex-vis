import { defineRecorder } from 'versioncam'

export default defineRecorder({
  // Vite's default port: vite.config.ts sets none.
  baseUrl: 'http://localhost:5173',
  // CONTRIBUTING's "Run `pnpm start`".
  webServer: { command: 'pnpm start', url: 'http://localhost:5173' },
  viewport: { width: 1440, height: 900 },
  clips: 'demos/clips/**/*.clip.ts',
  // The clip types an expression, selects a node and edits it, which takes
  // longer than the default 9 to 11 seconds to show readably.
  review: { minSeconds: 15, maxSeconds: 20 },
})
