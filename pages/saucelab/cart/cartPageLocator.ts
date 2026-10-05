import { Page } from '@playwright/test'
import { BasePage } from '../../common/BasePage'

export class CartPageLocator extends BasePage
{
    constructor(page: Page)
    {
        super(page)
    }

    get pageTitle() {
        return this.page.locator('.title');
    }

    get cartItems() {
        return this.page.locator('.cart_item');
    }

    get cartItemNames() {
        return this.page.locator('.cart_item .inventory_item_name');
    }

    get cartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    get continueShoppingButton() {
        return this.page.locator('#continue-shopping');
    }

    cartItem(productName: string) {
        return this.cartItems.filter({ hasText: productName });
    }

    itemPrice(productName: string) {
        return this.cartItem(productName).locator('.inventory_item_price');
    }

    itemQuantity(productName: string) {
        return this.cartItem(productName).locator('.cart_quantity');
    }

    removeButton(productName: string) {
        return this.cartItem(productName).getByRole('button', { name: 'Remove' });
    }
}