import {test} from '@playwright/test';

//Fill method - most common method for entering text into a text box:
//puts text immediately into text box
test/*.only*/('Fill Method', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close();
});


//press sequentially - enters each letter of text sequencially (mimicking key presses)
test/*.only*/('Press: Sequentially Method', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[placeholder="Username"]').pressSequentially('Admin');
    await page.locator('input[placeholder="Password"]').pressSequentially('admin123');
    ///await page.locator('input[placeholder="Password"]').press('Enter');
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close();
});

//press sequentially with delay - enters each letter of text sequencially, then wait x mill secs
test.only('Press: Sequentially Method with Delay', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[placeholder="Username"]').pressSequentially('Admin',{delay:200});
    await page.locator('input[placeholder="Password"]').pressSequentially('admin123',{delay:200});
    await page.locator('input[placeholder="Password"]').press('Enter'); //asking for the enter key to be pressed (so skipping the submit button)++++++
    //await page.locator('button[type="submit"]').click(); //skipped due to above
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close();
});