import environment from '../env';
import { Page, Locator } from '@playwright/test';
import {takescreenshotAndAttachtoTest} from '../helper';
const {config} = environment;

export class Login {    
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly appNameAfterLogin:Locator;

    constructor(page: Page) {
        this.page = page;
        /* This is locator of user name: <input class="input_error form_input" placeholder="Username" type="text" data-test="username" id="user-name" name="user-name" autocorrect="off" autocapitalize="none" value=""> */
        
        //NOT WORKINGthis.username = this.page.getByPlaceholder(' Username' );
        //working->this.username=this.page.getByPlaceholder('Username');
        //working, its a id-->this.username=this.page.locator('#user-name');
       //not working->dont know why it should work, because its a class this.username=this.page.locator('.input_error.form_input');
       this.username=this. page.locator('[data-test="username"]'); 
       /* This is locator of password: <input class="input_error form_input" placeholder="Password" type="password" data-test="password" id="password" name="password" autocorrect="off" autocapitalize="none" value=""> */
        
       this.password = this.page.getByPlaceholder( 'Password' );
       
       /* This is locator of loing button:<input type="submit" class="submit-button btn_action" data-test="login-button" id="login-button" name="login-button" value="Login">*/
      //Any <input> with type="submit", type="reset", or type="button" automatically gets the implicit ARIA role of "button". Value is Login so below wil work.
       this.loginButton = this.page.getByRole('button', { name: 'Login' });

       this.appNameAfterLogin=this.page.locator(".app_logo");
    
    }

    async navigateToBaseURL() {
        //await this.page.setViewportSize({ width: 1280, height: 720 });
        const url  = config.baseURL;
        console.log("This is the url--->"+url);
        await this.page.goto(url,{waitUntil:'networkidle'}); // Navigate to the base URL
        await takescreenshotAndAttachtoTest (this.page, 'native to sauce labs'); // Take a screenshot after loading the base URL
    }

    async initaliseUI(){
        await this.navigateToBaseURL();

    }

    async login() {
        await this.initaliseUI();
    
        await this.username.fill(config.username); // Fill in the username
        await this.password.fill(config.password); // Fill in the password
        await this.loginButton.click(); // Click the login button

    }
    

}