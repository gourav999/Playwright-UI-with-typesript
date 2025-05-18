import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // Set true if you want headless mode
    viewport: { width: 1280, height: 720 },
  },
});
