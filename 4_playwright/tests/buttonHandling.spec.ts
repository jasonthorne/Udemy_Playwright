import {test, expect} from '@playwright/test';

test('Regular Button Songle Click', async({page})=>{
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');

    await page.close();
});