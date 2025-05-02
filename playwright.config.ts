import { defineConfig, devices } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';

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

process.env.environmentType=process.env.environmentType?process.env.environmentType:'test';
require('dotenv').config({path:`./.env.${process.env.environmentType}`})
export default defineConfig({
// //31 March 2025  
// // Glob patterns or regular expressions to ignore test files.Glob patterns or regular expressions that should be ignored when looking for the test files. For example, '*test-assets'
//   testIgnore: '*test-assets',

//   // Glob patterns or regular expressions that match test files.Glob patterns or regular expressions that match test files. 
//   // For example, '*todo-tests/*.spec.ts'. By default, Playwright runs .*(test|spec).(js|ts|mjs) files.
//   testMatch: '*todo-tests/*.spec.ts',


  //31 March 2025: Added testDir to specify the directory where the tests are located.Directory with the test files.
  testDir: './playwright/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html',{outputFolder:'./playwright/playwright-report'}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    //added by Gourav jain on 31 March 2025
   
    headless: process.env.HEADLESS?process.env.HEADLESS==='true':true,
    viewport: { width: 1280, height: 720 },
  },

  /* Configure projects for major browsers */
  //31 march 2025: Run tests in multiple configurations or on multiple browsers
  projects: [
    {
      name: 'Microsoft Edge',
      use: { channel:'msedge'} ,
    },

    //firefox and webkit are commented by me on 31st March 2025.
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
