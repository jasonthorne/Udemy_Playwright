import {test, expect} from '@playwright/test';


//page: isolated poaghe object passed to test
//async: mnakes the function return a promise
//await: waits untill the promise is resolved

test('My first test', async({page})=>{
    //open up google website:
    await page.goto('https://www.google.com');

    //expect a title:
    await expect(page).toHaveTitle('Google');

});

