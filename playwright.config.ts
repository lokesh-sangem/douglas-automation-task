import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */


export default defineConfig({
  testDir: './tests',

  /* Increase test timeout (default: 30s) */
  timeout: 90 * 1000, // 90 seconds per test

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is left */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporters */
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],

  /* Shared settings */
  use: {
    baseURL: 'http://www.douglas.de/de',

    /* Increase action timeout (click, fill, etc.) */
    actionTimeout: 30 * 1000, // 30 seconds

    /* Increase navigation timeout */
    navigationTimeout: 60 * 1000, // 60 seconds

    // /* Expect/assertion timeout */
    // expect: {
    //   timeout: 30 * 1000
    // },

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
