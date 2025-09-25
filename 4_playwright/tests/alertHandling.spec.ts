import {test, expect} from '@playwright/test';

//+++++++++++++++NOTE: Playwright will automatically close the slert, so that doesnt need handling in tests 

test('Simple Alert Handling', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.locator("button[onclick='jsAlert()']").click(); //click on alert btn
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert'); //confirm text
    await page.close();
});

