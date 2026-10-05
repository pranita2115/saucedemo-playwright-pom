import { Page } from '@playwright/test'
import { ProductDetailsPageLocator } from './productDetailsPageLocator'

export class ProductDetailsPage extends ProductDetailsPageLocator
{
    constructor(page: Page)
    {
        super(page)
    }

    async addToCart()
    {
        await this.addToCartButton.click()
    }

    async backToProducts()
    {
        await this.backToProductsButton.click()
    }
}