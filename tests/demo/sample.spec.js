import{test,expect} from'@playwright/test'
test('emp',async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).first().click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).first().fill('Brook');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.pause()
 // page.locator('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label').first().click()
 
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
});
