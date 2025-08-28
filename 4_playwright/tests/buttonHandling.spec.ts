import {test, expect} from '@playwright/test';
import { assert } from 'console';

test/*.only*/('Regular Button Single Click', async({page})=>{
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.locator('#click_area').click(); //single click in click area
    await expect(page.locator('#click_type')).toHaveText('Click');
    await page.close();
});

test/*.only*/('Double Click', async({page})=>{
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.locator('#click_area').dblclick(); //dbl click in click area
    await expect(page.locator('#click_type')).toHaveText('Double-Click');
    await page.close();
});

test.only('Right Click', async({page})=>{
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.locator('#click_area').click({button:'right'}) //right click in click area
    await expect(page.locator('#click_type')).toHaveText('Right-Click');
    await page.close();
});