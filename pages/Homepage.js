export class Homepage{

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
         this.myacc=page.getByRole('link', { name: 'My Account' });
         this.myhome=page.getByText(" My Home");
         this.logoo=page.getByAltText("Kerala Property");

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

    async Myaccount()
    {
        await this.myacc.click();
    }

    async Myhomee()
    {
        await this.myhome.click();
    }
    async logo()
    {
        await this.logoo.click();
    }
}