import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["test/global-setup.ts"],
  },
})