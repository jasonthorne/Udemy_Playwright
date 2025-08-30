import { expect, test } from "@playwright/test";

test.only('Radio Button Handling', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    const maleRadioBtn = page.locator('input[value="Male"]');
    const femaleRadioBtn = page.locator('input[value="feMale"]');

    //-------------check btns are initially not enabled:------------------

    //first way to assert radio btns (neither wil be enabled during page load):
    expect(maleRadioBtn).not.toBeChecked();
    expect(femaleRadioBtn).not.toBeChecked();

    //second way:
    expect(await maleRadioBtn.isChecked()).toBeFalsy();
    expect(await femaleRadioBtn.isChecked()).toBeFalsy();

    //------------then check btns-----------------------------------------

    await maleRadioBtn.check(); //check male btn
    expect(maleRadioBtn).toBeChecked(); //male should be checked
    //expect(await maleRadioBtn.isChecked()).toBeTruthy(); //+++++other way of checking 
    expect(femaleRadioBtn).not.toBeChecked(); //female should be unchecked

    await femaleRadioBtn.check();
    expect(femaleRadioBtn).toBeChecked(); //female should be checked
    expect(maleRadioBtn).not.toBeChecked(); //male should be unchecked

    await page.close();
});