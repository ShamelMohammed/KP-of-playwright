export class LoginpageKP{

    /**
    *
   * @param {import('@playwright/test').Page} page

   */

    constructor(page)
    {
        this.page=page;
        this.user=page.locator("#ulogin");
        this.pass=page.locator("#upass");
        this.loginbtn=page.locator("#sub_logbtn")
        this.logoo=page.getByAltText("Kerala Property");
        this.myacc=page.getByRole('link', { name: 'My Account' });
    }

    async setValues(un,passwd)
    {
        await this.user.fill(un);
        await this.pass.fill(passwd);

    }

    async clickLogin()
    {
        await this.loginbtn.click();
    }

    async logoClick()
    {
        await this.logoo.click();
    }

    async Myaccount()
    {
        await this.myacc.click();

    }

    
}