import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://qahris.peoplehum.org',
    trace: 'on-first-retry',
    actionTimeout: 60000,
    navigationTimeout: 60000,
    screenshot: 'only-on-failure',
  },
  name: 'PlayWrightUIAutomation',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
