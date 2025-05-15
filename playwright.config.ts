//Gourav wrote: 02May2025:https://playwright.dev/docs/test-configuration

import { defineConfig, devices } from "@playwright/test";
import { PlaywrightTestConfig } from "@playwright/test";

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

process.env.environmentType = process.env.environmentType
  ? process.env.environmentType
  : "test";
require("dotenv").config({ path: `./.env.${process.env.environmentType}` });
export default defineConfig({
  // //31 March 2025
  // // Glob patterns or regular expressions to ignore test files.Glob patterns or regular expressions that should be ignored when looking for the test files. For example, '*test-assets'
  //   testIgnore: '*test-assets',

  //   // Glob patterns or regular expressions that match test files.Glob patterns or regular expressions that match test files.
  //   // For example, '*todo-tests/*.spec.ts'. By default, Playwright runs .*(test|spec).(js|ts|mjs) files.
  //   testMatch: '*todo-tests/*.spec.ts',

  //02May 2025 I added the below expect till masDiffPixelRatio.
  expect: {
    timeout: 5000,
    toHaveScreenshot: {
      // An acceptable amount of pixels that could be different, unset by default.
      maxDiffPixels: 10,
    },
    toMatchSnapshot: {
      // An acceptable ratio of pixels that are different to the
      // total amount of pixels, between 0 and 1.
      maxDiffPixelRatio: 0.1,
    },
  },

  //31 March 2025: Added testDir to specify the directory where the tests are located.Directory with the test files.
  testDir: "./playwright/tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //13May2025: Below i am commenting because i am going to generate allureport
  //reporter: [["html", { outputFolder: "./playwright/playwright-report" }]],
  reporter:[['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    //added by Gourav jain on 31 March 2025

    headless: process.env.HEADLESS ? process.env.HEADLESS === "true" : true,

    viewport: { width: 1280, height: 720 },
    //userAgent: 'some custom ua',
    //launchOptions:{slowMo:50},

    /* // Maximum time each action such as `click()` can take. Defaults to 0 (no limit).
    actionTimeout: 0,

    // Name of the browser that runs tests. For example `chromium`, `firefox`, `webkit`.
    browserName: 'chromium',

    // Toggles bypassing Content-Security-Policy.
    bypassCSP: true,

    // Channel to use, for example "chrome", "chrome-beta", "msedge", "msedge-beta".
    channel: 'chrome',

    // Run browser in headless mode.
    headless: false,

    // Change the default data-testid attribute.
    testIdAttribute: 'pw-test-id', */
    screenshot: 'only-on-failure',
    //video:'on-first-retry', //Records video only if test fails and reruns.
    //baseURL:'http://www.google.com',
    //storageState:'stage.json'
    /*   colorScheme:'dark',
  // Context geolocation.
    geolocation: { longitude: 12.492507, latitude: 41.889938 },

    // Emulates the user locale.
    locale: 'en-GB',

    // Grants specified permissions to the browser context.
    permissions: ['geolocation'],

    // Emulates the user timezone.
    timezoneId: 'Europe/Paris', */
  },

  /* Configure projects for major browsers */
  //31 march 2025: Run tests in multiple configurations or on multiple browsers
  projects: [
    {
      name: "Microsoft Edge",
      use: { channel: "msedge" },
      
    },

    //firefox and webkit are commented by me on 31st March 2025.
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'],
         //local:'de-DE'},
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
