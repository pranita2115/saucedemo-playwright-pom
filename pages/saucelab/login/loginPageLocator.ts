import { Page } from '@playwright/test'
import { BasePage } from '../../common/BasePage'

export class LoginPageLocator extends BasePage
{
    constructor(page: Page)
    {
        super(page)
    }

    get usernameField() {
        return this.page.getByPlaceholder('Username');
    }

    get passwordField() {
        return this.page.getByPlaceholder('Password');
    }

    get loginButton() {
        return this.page.locator('#login-button');
    }

    get errorMessage() {
        return this.page.locator('[data-test="error"]');
    }
}