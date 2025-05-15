import { test, chromium, expect } from '@playwright/test';

test('Guest vs Authenticated user view', async ({browser}) => {
 
    /* //we can use this line as well, 
    // but the thing is that in browser.config.ts already i have defined the browser so commenting it and in test function i am using browser. 
    // const browser = await chromium.launch();
 */
  const guestContext = await browser.newContext();
  const authContext = await browser.newContext();

  const guestPage = await guestContext.newPage();
  const authPage = await authContext.newPage();

  // Guest visits homepage
  await guestPage.goto('https://www.saucedemo.com/');
  await expect (guestPage.getByRole('button',{name:'Login'})).toBeVisible();
  await guestPage.fill('#user-name', 'standard_user');
  await guestPage.fill('#password', 'secret_sauce');
  await guestPage.click('text=Login');

  // Authenticated user login
  await authPage.goto('https://www.saucedemo.com/');
  await authPage.fill('#user-name', 'performance_glitch_user');
  await authPage.fill('#password', 'secret_sauce');
  await authPage.click('text=Login');

  // Authenticated user should see dashboard
  await authPage.waitForSelector('text=Welcome back');

  await browser.close();
});
