import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('https://lens-staging.radiangen.com/');
  await page.locator('body').click();
  await page.goto('https://lens-staging.radiangen.com/#/login');
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('nelson1@radiangen.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Nelson@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  //code reviewed

  //get the title
  const title= await page.title()
  console.log(title+"Lens Title")
  
});
