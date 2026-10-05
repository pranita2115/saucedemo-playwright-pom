import { Page } from '@playwright/test'
import { BasePage } from '../../common/BasePage'

export class InventoryPageLocator extends BasePage
{
    constructor(page: Page)
    {
        super(page)
    }

    get pageTitle() {
        return this.page.locator('.title');
    }

    get cartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    get cartLink() {
        return this.page.locator('.shopping_cart_link');
    }

    get allAddToCartButtons() {
        return this.page.getByRole('button', { name: 'Add to cart' });
    }

    productCard(productName: string) {
        return this.page.locator('.inventory_item').filter({ hasText: productName });
    }

    productNameLink(productName: string) {
        return this.productCard(productName).locator('.inventory_item_name');
    }

    addToCartButton(productName: string) {
        return this.productCard(productName).getByRole('button', { name: 'Add to cart' });
    }

    removeButton(productName: string) {
        return this.productCard(productName).getByRole('button', { name: 'Remove' });
    }
}