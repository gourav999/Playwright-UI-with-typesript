import { test, expect } from "@playwright/test";

test("Verify new tab opens on button click", async ({ page, context }) => {
  await page.goto("https://demoqa.com",{waitUntil:'domcontentloaded'});

  //Optional if website is taking too much time to load-await page.setDefaultTimeout(60000);

  //this is wrong-->await page.locator('h5').getByLabel('Alerts, Frame & Windows').click();
  await page.locator('h5', { hasText: 'Alerts, Frame & Windows' }).click();
  await page.locator('span',{hasText:'Browser Windows'}).click();


  // Wait for the new tab event to occur
  const [newTab] = await Promise.all([
    context.waitForEvent("page"), // 👈 capture the new tab

    //This also works-->page.click('#tabButton'),     // 👈 trigger new tab
    page.getByRole("button", { name: "New Tab" }).click(), // 👈 click the button to open a new tab
  ]);

  // Wait for the new tab to fully load
  await newTab.waitForLoadState();

  // Assert that the new tab has expected content
  expect(await newTab.url()).toContain("/sample");
 
  // Optional: Print tab titles
  console.log("New Tab Title:", await newTab.title());
  
  await expect(newTab.locator("h1")).toHaveText("This is a sample page");
  await expect(newTab.locator("#sampleHeading")).toBeVisible();
  await expect(newTab.locator("#sampleHeading")).toHaveText("This is a sample page");
  // Optionally, you can close the new tab if you don't need it anymore 
    await newTab.close();

 
});
