import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('button', { name: 'Decline optional cookies' }).click();
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('test name');
  await page.locator('#passContainer').click();
  await page.getByTestId('royal-pass').click();
  await page.getByTestId('royal-pass').fill('test password');
  await page.getByTestId('royal-login-button').click();
});