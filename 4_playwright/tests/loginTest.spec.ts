import {test} from '@playwright/test';

test('Login Test for Orange HRM',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com'); //nav to page

    //login:
    await page.locator('input[placeholder="Username"]').fill('Admin'); //enter name
    await page.locator('input[placeholder="Password"]').fill('admin123'); //enter pswrd
    await page.locator('button[type="submit"]').click(); //click btn

    //logout:
    await page.locator('.oxd-userdropdown-tab').click(); //click dropdwn
    await page.locator('text=Logout').click(); //click logout dropdown option

    //close page:
    await page.close(); //+++++++++++++ALWAYS CLOSE PAGE :P
});

