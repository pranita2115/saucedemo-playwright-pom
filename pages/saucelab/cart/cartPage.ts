import { Page } from '@playwright/test'
import { CartPageLocator } from './cartPageLocator'

export class CartPage extends CartPageLocator
{
    constructor(page: Page)
    {
        super(page)
    }

    async removeProduct(productName: string)
    {
        await this.removeButton(productName).click()
    }

    async continueShopping()
    {
        await this.continueShoppingButton.click()
    }
}