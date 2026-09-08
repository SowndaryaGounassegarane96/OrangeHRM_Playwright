require('dotenv').config();
exports.LoginPage = class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.clickLogin = page.getByRole('button', { name: 'Login' });
       this.dasboardPage =  page.getByRole('heading', { name: 'Dashboard' });


       this.invalidCredentials = page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ });

    }
    async goToUrl()
    {
        await this.page.goto(process.env.BASE_URL);
    }
    async loginCredentials(username,password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.clickLogin.click();
    
    }
}
