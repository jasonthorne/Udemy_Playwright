import {test, expect} from '@playwright/test';

test('Checkbox Button Handling', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    const cricketCheckBox = page.locator('#checkbox1');
    const moviesCheckBox = page.locator('#checkbox2');
    const hockeyCheckBox = page.locator('#checkbox3');

    //on ititial load, all should be unchecked:
    //1st way to assert:
    expect(cricketCheckBox).not.toBeChecked();
    expect(moviesCheckBox).not.toBeChecked();
    expect(hockeyCheckBox).not.toBeChecked();
    //2nd way to assert:
    expect(await cricketCheckBox.isChecked()).toBeFalsy();
    expect(await moviesCheckBox.isChecked()).toBeFalsy();
    expect(await hockeyCheckBox.isChecked()).toBeFalsy();

    //check all boxes:
    cricketCheckBox.check();
    moviesCheckBox.check();
    hockeyCheckBox.check();

    //assert that they are now checked:
    expect(await cricketCheckBox.isChecked()).toBeTruthy();
    expect(await moviesCheckBox.isChecked()).toBeTruthy();
    expect(await hockeyCheckBox.isChecked()).toBeTruthy();

    await page.close();
});