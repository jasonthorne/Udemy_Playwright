import {test, expect} from "@playwright/test"; //+++++++++++Not: importing expect for assertions

test('visible/hidden Assertion', async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeVisible(); //check displayed text is visible
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close(); //+++++++++++++++DONT FORGET :P
});