import{test,expect} from '@playwright/test'
import logindata from '../demo/../test-data/logindata.json' with {type:'json'};
import { LoginPage } from '../../pages/LoginPage';
for(const data of logindata)
{

test(data.testCase,async({page})=>
{
    const loginPage = new LoginPage(page);
   await  loginPage.goToUrl();
   await   loginPage.loginCredentials(data.username,data.password);

    if(data.expected==='success')
    {
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible;

    }
    else
    {
        await expect(loginPage.invalidCredentials).toBeVisible();

    }
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('heading', { name: 'Dashboard' }).click();
});
}
