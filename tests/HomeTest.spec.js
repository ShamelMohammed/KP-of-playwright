// import { Homepage } from "../pages/Homepage";
// import { LoginpageKP } from "../pages/LoginpageKP";
// import {expect, test} from '@playwright/test';
import { expect,test } from "../Fixtures/test-fixture";

test.describe("Kerala Property",async ()=>{



/** @type {LoginpageKP} */
let loginn;

/** @type {Homepage} */
let homee;
    test.beforeEach("url loading",async({page})=>
    {
        await page.goto("https://keralaproperty.in/member/myhome/");
        // loginn=new LoginpageKP(page);
        //  homee=new Homepage(page);
    })

    // test("valid data",async({page})=>
    // {
    //     await loginn.setValues(process.env.User, process.env.Pass);
    //     await loginn.clickLogin();
    //     await expect (page).toHaveURL("https://keralaproperty.in/member/myhome/");
       
        // await page.waitForTimeout(2000);
        // homee=new Homepage(page);
    // })

    test("logo visible",async({homePg})=>{
        await expect(homePg.logoo).toBeVisible();

    })

    test("logo click",async({homePg,page})=>{
        await homePg.logo();
        await expect(page).toHaveURL("https://keralaproperty.in/");
        
    })
})