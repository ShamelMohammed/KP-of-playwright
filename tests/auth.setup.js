import {test as setup,expect} from '@playwright/test';
const authfile= "playwright/auth/auth.json";

setup("authintication",async ({page})=>{
    await page.goto("https://keralaproperty.in/member/login/");
    await page.locator("#ulogin").fill("shamelformes015@gmail.com");
    await page.locator("#upass").fill("m");
    await page.locator("#sub_logbtn").click();
    await expect(page).toHaveURL('https://keralaproperty.in/member/myhome/');

    await page.context().storageState({path:authfile});

});