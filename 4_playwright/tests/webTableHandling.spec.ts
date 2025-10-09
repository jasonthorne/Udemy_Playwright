import {test, expect} from '@playwright/test';

test.only("Handling Webtable", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.close();
});

test/*.only*/("Selecting single checkbox in a table", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.close();
});

test/*.only*/("Selecting multiple checkboxes in a table using a function", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.close();
});