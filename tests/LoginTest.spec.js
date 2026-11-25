import { LoginpageKP } from "../pages/LoginpageKP";
import {expect, test} from '@playwright/test';

test.describe("Kerala Property",async ()=>{



/** @type {LoginpageKP} */

let loginn;
    test.beforeEach("url loading",async({page})=>
    {
        await page.goto(process.env.Baseurl);
        loginn=new LoginpageKP(page);
    })

    // test("valid data",async({page})=>
    // {
    //     await loginn.setValues(process.env.User, process.env.Pass);
    //     await loginn.clickLogin();
    //     await expect (page).toHaveURL("https://keralaproperty.in/member/myhome/");
       
    //     // await page.waitForTimeout(2000);
    // })

    test("logo verfication",async()=>{
        await expect(loginn.logoo).toBeVisible;
    })

    // test("logo click",async({page})=>{
    //     await loginn.logoClick();
    //     await expect(page).toHaveURL("https://keralaproperty.in/");
    // })

    test("My Account verification",async()=>{
        await expect(loginn.myacc).toBeVisible;
    })

    test("My Account Click",async()=>{
        await loginn.Myaccount();
    })


})