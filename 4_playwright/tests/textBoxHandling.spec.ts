import {test} from '@playwright/test';

//Fill method - most common method for entering text into a text box:
test('Fill Method', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    ///await page.locator('input[placeholder="Password"]').press('Enter');
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    
    await page.close();
});


test('Press: Sequentially Method', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    ///await page.locator('input[placeholder="Password"]').press('Enter');
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    
    await page.close();
});