import {test} from '@playwright/test';

test('Different Locator Strategy', async({page})=>{
    await page.goto('https://www.saucedemo.com/'); //go to demo page
    await page.locator('id="user-name"').fill('standard_user'); //grab username input field and fill
    //grab above locator using css instead:
    /*
    one css way:
    await page.locator(['id="user-name"']);
    another css way:
    await page.locator('#user-name');
    */
   //grab above locator by using x path:
   /*
   await page.locator('//input[@id="user-name"]'); //note: type of element is 'input'
   */

   //grab element (btn in this case) by its text value:
   await page.locator('text=Login').click();

   //another way of grabbingh by text:
   //await page.locator('input:has-text("Login")').click();

}); 