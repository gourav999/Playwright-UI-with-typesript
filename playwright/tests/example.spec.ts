// import { test, expect, type Page } from '@playwright/test';
// import { beforeEach } from 'node:test';

// test.beforeEach(async ({ page }) => {

   
//   // Clear cookies before each test
//   await page.goto('https://playwright.dev/');
//   // Expect the URL to be the Playwright website    
//     await expect(page).toHaveURL('https://playwright.dev/');
//     // Expect the page to have a title
//     await expect(page).toHaveTitle(/Playwright/);


// });
// //open website

// test('has title', async ({ page }) => {
 

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//  ;

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test.only('test multiple windows', async ({ page }) => {
//   // Open a new page
//   const newPage = await page.context().newPage();
//   await newPage.goto('https://jaingourav999.blogspot.com');

//   const pages= await page.context().pages();
//   console.log(pages.length); // Should be 2, as we have opened one new page

//   // Perform actions on the new page
//   ;
//   await expect(newPage).toHaveURL(/.*blogspot/);

//   // Close the new page
//   await newPage.close();

//   //verify the title of first page
//     await expect(page).toHaveTitle(/Playwright/);


  


// });

