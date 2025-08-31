import {test, expect} from '@playwright/test';

test('Checkbox Button Handling', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    const cricketCheckBox = page.locator('#checkbox1');
    const moviesCheckBox = page.locator('#checkbox2');
    const hockeyCheckBox = page.locator('#checkbox3');

    


    await page.close();
});