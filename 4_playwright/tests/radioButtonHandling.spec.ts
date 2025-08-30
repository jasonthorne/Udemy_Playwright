import { expect, test } from "@playwright/test";

test.only('Radio Button Handling', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');

    await page.close();
});