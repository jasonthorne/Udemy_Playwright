import {test, expect} from '@playwright/test';

//+++++++++++NOTE: (unless using with an event listener) Playwright will automatically close the slert, so that doesnt need handling in tests 

test('Simple Alert Handling', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    //await page.locator("button[onclick='jsAlert()']").click(); //click on alert btn
    //await expect(page.locator('#result')).toHaveText('You successfully clicked an alert'); //confirm text

   
    //call page.on event listener NOTE: playwright will NOT auto lcose alrt using this, so .accept() must be called at end:
    page.on("dialog", async(alert)=>{
        const alertMsg = alert.message();
        expect(alertMsg).toEqual('I am a JS Alert'); //confirm message in alert box
        await alert.accept(); //click okay btn to close alert ++++++++++
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert'); //confirm text
    });

    //++++++++Actions that trigger event listeners ('page.on()' above in this case) should always be called AFTER the event listeneris defined
    await page.locator("button[onclick='jsAlert()']").click(); //click on alert btn

    await page.close();
});


