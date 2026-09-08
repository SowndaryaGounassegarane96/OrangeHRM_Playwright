import{test,expect} from'@playwright/test'
import 'dotenv/config';
import { EmpPage } from '../../pages/EmpPage';
import empdata from '../demo/../test-data/empdata.json' with {type :'json'}
import { LoginPage } from '../../pages/LoginPage';
for(const data of empdata)
{

test(data.testCase,async({page})=>
{
    const loginPage = new LoginPage(page);
    const empPage = new EmpPage(page);
    await loginPage.goToUrl();
    await loginPage.loginCredentials(process.env.ORANGE_USERNAME,process.env.ORANGE_PASSWORD)

    await empPage.addEmpDetails(data.firstname,data.middlename,data.lastname);
    if(data.expected==="added")
    {
        await expect(page.getByText('Success', { exact: true })).toBeVisible();
    }
    else{
        await expect(page.getByText('Required', { exact: true })).toBeVisible();
    }

   
})
}
