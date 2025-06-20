import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  globalSetup: './src/utils/globalSetup',
  globalTeardown: './src/utils/globalTeardown',
  testDir: './src/tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://qahris.peoplehum.org',
    ignoreHTTPSErrors: true,
   proxy: {
    server: 'http://localhost:8080'
    },
    trace: 'on-first-retry',
    actionTimeout: 60000,
    navigationTimeout: 60000,
    screenshot: 'only-on-failure',
  },
  timeout:60000,
  name: 'PlayWrightUIAutomation',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
