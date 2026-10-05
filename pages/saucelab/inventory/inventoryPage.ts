import { Page } from '@playwright/test'
import { InventoryPageLocator } from './inventoryPageLocator'

export class InventoryPage extends InventoryPageLocator
{
    constructor(page: Page)
    {
        super(page)
    }

    async addProductToCart(productName: string)
    {
        await this.addToCartButton(productName).click()
    }

    async addMultipleProductsToCart(productNames: string[])
    {
        for (const name of productNames)
        {
            await this.addProductToCart(name)
        }
    }

    async addAllProductsToCart()
    {
        const count = await this.allAddToCartButtons.count()
        for (let i = 0; i < count; i++)
        {
            // each clicked button turns into "Remove",
            // so the next "Add to cart" is always first()
            await this.allAddToCartButtons.first().click()
        }
    }

    async removeProduct(productName: string)
    {
        await this.removeButton(productName).click()
    }

    async openProduct(productName: string)
    {
        await this.productNameLink(productName).click()
    }

    async goToCart()
    {
        await this.cartLink.click()
    }
}