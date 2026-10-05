import { Page } from '@playwright/test'
import { LoginPageLocator } from './loginPageLocator'

export class LoginPage extends LoginPageLocator
{
    constructor(page: Page)
    {
        super(page)
    }

    async login(username: string, password: string)
    {
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
}