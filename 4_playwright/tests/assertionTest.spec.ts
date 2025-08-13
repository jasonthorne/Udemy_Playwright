import {test, expect} from "@playwright/test"; //+++++++++++Not: importing expect for assertions


test('visible/hidden Assertion', async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeVisible(); //check displayed text is visible
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close(); //+++++++++++++++DONT FORGET :P
});

//+++++++++++.only means only this test will be executed ++++++++
test.only('present/not present Assertion', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.locator('.added-manually')).not.toHaveCount(1); //assert that there is NOT 1 of these elements
    //await page.pause();
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('.added-manually')).toHaveCount(1); //assert that there IS 1 of these elements
    await page.close(); //+++++++++++++++DONT FORGET :P
});