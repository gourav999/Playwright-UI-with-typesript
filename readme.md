Blog link: https://jaingourav999.blogspot.com/2025/03/playwright.html

Clone the repo: 
https://github.com/gourav999/Playwright-UI-with-typesript.git
`````````````````````````
install yarn and playwright
yarn install
````````````````````````````

//this is optional: if you want to run the differnt playwright versional use this  yarn add -D @playwright/test@^1.41.0.
`````````````````````````````````
use the correct node version

nvm use
`````````````````````````
install the playwright browser binaries

npx playwright install
````````````````````````````

open your miniapp in ide
add playwright-report to your .gitignore file

playwright-report
`````````````````````

Run the test: 
//For running test in windows machine, please change the env either dev or test,  Headless as false or true.
yarn cross-env-shell environmentType=dev HEADLESS=false npx playwright test 

//suppose if test is failing due to any reason, and some spanx error is there. so you have to append --reporter=html below is example: 
yarn cross-env-shell environmentType=dev HEADLESS=false yarn playwright test .RegressionTest/homePageDemoQA.spec.ts --reporter=html

//also if you dont want to generate plain html you can generate the allure report. 
//Please note all the instructions are given in blog. this is the link: 

//the above command will run the gsmoketest.spec.ts because if you see the pakcage. json under test will run the code which is written under the test folder it will run.

//for running individual file:
yarn cross-env-shell environmentType=dev HEADLESS=false npx playwright test .Regression/regression.spec.ts

//for mac machine 
yarn cross-env-shell environmentType=dev HEADLESS=false npx playwright test 

yarn run-all-test



