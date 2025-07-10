import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  //+++++++++++++++++ TEST DELIBERATELY FAILS HERE :P +++++
  await page.getByRole('button', { name: 'this doesnt exist!' /*'Decline optional cookies'*/ }).click();
});