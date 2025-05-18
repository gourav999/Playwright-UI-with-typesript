import { test, expect } from '@playwright/test';

test('Check Playwright website title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
