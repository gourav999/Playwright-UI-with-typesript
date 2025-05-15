import { Login } from '../../pages/login';
//import {home} from '../pages/home';
import { Page,test,expect } from '@playwright/test';
import {takescreenshotAndAttachtoTest,logInfo} from '../../helper/test-output';
import assert from 'assert';

test.describe(  'smoketest', () => {
    let page:Page;
    let login: Login;

    test.beforeAll( async( {browser})   => {
        // Initialize the page and login class before all tests
        console.log('Initializing page and login class...');
        page = await browser.newPage();
        login = new Login(page);
    });

    test.beforeEach( async ({request}) => {
        console.log('Clearing cookies before each test...');
        console.log('inside before each test');
    });

    test.afterEach( async ({},testInfo) => {
        await takescreenshotAndAttachtoTest(page, testInfo.title);
    });

    test.afterAll( async () => {
        console.log('inside after all');
        
    });

    test('Login Test', async () => {
        await test.step('Inilize login',async()=>{
        await login.initaliseUI();
        await page.getByText('Elementss').click();
       await page.locator(".menu-list").allInnerTexts();
       console.log("This is the text of menu list--->"+await page.locator(".menu-list").nth(0).allTextContents());

/* 
    await page.getByRole
    await page.getByText
    await page.getByLabel
    await page.getByPlaceholder
    await page.getByAltText
    await page.getByTitle
    await page.getByTestId */


//Please note that for practice purpose i am keeping loctaor here, in real time we should keep it in page class.
      

//
            //await login.login();
        //verify that login is done and app name is displayed
      /*   page.locator("app_logo")   
        const appLogotext=await login.appNameAfterLogin;
        await expect(login.appNameAfterLogin).toBeVisible();
        //console.log("After login the page logo name is--> "+appLogotext.innerHTML());
        console.log("After login the page logo name is--> "+await appLogotext.textContent());
        console.log("After login the page logo name is--> "+await appLogotext.allTextContents());
        expect(appLogotext).toHaveText('Swag Labs')
       */  
    
    });


});



});



