import { Page } from '@playwright/test'
import { BasePage } from '../../common/BasePage'

export class ProductDetailsPageLocator extends BasePage
{
    constructor(page: Page)
    {
        super(page)
    }

    get productName() {
        return this.page.locator('.inventory_details_name');
    }

    get productPrice() {
        return this.page.locator('.inventory_details_price');
    }

    get addToCartButton() {
        return this.page.getByRole('button', { name: 'Add to cart' });
    }

    get removeButton() {
        return this.page.getByRole('button', { name: 'Remove' });
    }

    get backToProductsButton() {
        return this.page.locator('#back-to-products');
    }

    get cartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }
}