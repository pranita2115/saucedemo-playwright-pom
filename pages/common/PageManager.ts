import { Page } from '@playwright/test'
import { LoginPage } from '../saucelab/login/loginPage'
import { InventoryPage } from '../saucelab/inventory/inventoryPage'
import { ProductDetailsPage } from '../saucelab/productDetails/productDetailsPage'
import { CartPage } from '../saucelab/cart/cartPage'

export class PageManager
{
    readonly page: Page
    readonly loginPage: LoginPage
    readonly inventoryPage: InventoryPage
    readonly productDetailsPage: ProductDetailsPage
    readonly cartPage: CartPage

    constructor(page: Page)
    {
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.inventoryPage = new InventoryPage(this.page)
        this.productDetailsPage = new ProductDetailsPage(this.page)
        this.cartPage = new CartPage(this.page)
    }
}