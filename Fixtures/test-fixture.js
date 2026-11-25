import{test as base,expect} from '@playwright/test';
import { LoginpageKP } from '../pages/LoginpageKP';
import { Homepage } from '../pages/Homepage';

export const test=base.extend({

    login:async({page},use)=>{
        await use(new LoginpageKP(page));
    },

    homePg: async ({page},use)=>{
        const home=new Homepage(page);
        await use (home);
    },
    
   
})
export{expect};