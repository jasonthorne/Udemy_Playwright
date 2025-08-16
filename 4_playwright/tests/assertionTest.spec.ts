import {test, expect} from "@playwright/test"; //+++++++++++Note: importing expect for assertions


test('Visible/Hidden Assertion', async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeVisible(); //check displayed text is visible
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close(); //+++++++++++++++DONT FORGET :P
});

//+++++++++++.only means only this test will be executed ++++++++
test/*.only*/('Present/Not Present Assertion', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.locator('.added-manually')).not.toHaveCount(1); //assert that there is NOT 1 of these elements
    //await page.pause();
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('.added-manually')).toHaveCount(1); //assert that there IS 1 of these elements
    await page.close(); //+++++++++++++++DONT FORGET :P
});

test/*.only*/('Enabled/Disabled Assertion', async({page})=>{
    await page.goto('https://letcode.in/button');
    await expect(page.locator('#property')).toBeEnabled(); //btn should be enabled
    await expect(page.locator('[title="Disabled button"]')).toBeDisabled(); //btn should be disabled
    await page.close(); //++++++
});

test/*.only*/('Text Match/Mismatch Assertion', async({page})=>{
    await page.goto('https://letcode.in/button');
    await expect(page.locator('[id="color"]')).toHaveText('What is my color?');
    await expect(page.locator('[id="color"]')).not.toHaveText('shouldn\'t have this text');
    await page.close(); //++++++
});

test/*.only*/('Attribute Assertion', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    //NOTE: below, we're passing the attributes key and value as args: +++++++++++++
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('name','username');
    //NOTE class value below (of oxd-input inthis case), CANT be string, has to be with slashes and . (reg expression) ++++++++++++++++++++
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('class',/.oxd-input/);
    await page.close(); //++++++
});

test/*.only*/('URL Assertion', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    //full URL assertion:
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //partial URL assertion (NOTE: NO QUOTES - not a string):
    await expect(page).toHaveURL(/demo.orangehrmlive.com/);
    await page.close(); //++++++
});

test.only('Title Assertion', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    //full title assertion:
    await expect(page).toHaveTitle('OrangeHRM');
    //partual title assertion (NOTE reg expression for checking if txt in title: /.*)
    await expect(page).toHaveTitle(/.*HRM/);
    await page.close(); //++++++
});

