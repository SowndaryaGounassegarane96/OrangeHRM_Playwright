require('dotenv').config();
exports.EmpPage = class EmpPage

{
    constructor (page)
    {
        this.page = page;
         this.clickPIM = page.getByRole('link', { name: 'PIM' });
         this.clickAdd = page.getByRole('button', { name: ' Add' });
         this.firstname = page.getByRole('textbox', { name: 'First Name' });
         this.middlename = page.getByRole('textbox', { name: 'Middle Name' });
         this.lastname =  page.getByRole('textbox', { name: 'Last Name' });
         this.clickSave = page.getByRole('button', { name: 'Save' });
         this.successMasg = page.getByText('Success', { exact: true });
         this.errorMsg = page.getByText('Required', { exact: true });
    }

    async goToPage()
    {
        await this.page.goto(process.env.BASE_URL);

    }
    async addEmpDetails(firstname,middlename,lastname)
    {
        await this.clickPIM.click();
        await this.clickAdd.click();
        await this.firstname.fill(firstname);
        await this.middlename.fill(middlename);
        await this.lastname.fill(lastname);
        await this.clickSave.click();
    }
}