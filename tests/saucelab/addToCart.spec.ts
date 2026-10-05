import { test, expect } from '../../fixtures/baseFixtures'
import { saucelabData } from '../../test-data/saucelabData'

const { backpack, bikeLight, boltShirt, fleeceJacket, onesie } = saucelabData.products

test.describe("SauceLab - Add Product To Cart", () =>
{
    test.beforeEach(async ({ pageM }) =>
    {
        const user = saucelabData.users.standard
        await pageM.loginPage.navigate("/")
        await pageM.loginPage.login(user.username, user.password)
        await expect(pageM.inventoryPage.pageTitle).toHaveText(saucelabData.titles.inventory)
    })

    test("TC01 - Add single product and verify in cart", async ({ pageM }) =>
    {
        await expect(pageM.inventoryPage.cartBadge).toBeHidden()

        await pageM.inventoryPage.addProductToCart(backpack.name)

        await expect(pageM.inventoryPage.cartBadge).toHaveText("1")
        await expect(pageM.inventoryPage.removeButton(backpack.name)).toBeVisible()

        await pageM.inventoryPage.goToCart()
        await expect(pageM.cartPage.pageTitle).toHaveText(saucelabData.titles.cart)
        await expect(pageM.cartPage.cartItems).toHaveCount(1)
        await expect(pageM.cartPage.cartItemNames).toHaveText([backpack.name])
        await expect(pageM.cartPage.itemPrice(backpack.name)).toHaveText(backpack.price)
        await expect(pageM.cartPage.itemQuantity(backpack.name)).toHaveText("1")
    })

    test("TC02 - Add multiple products and verify names and prices", async ({ pageM }) =>
    {
        const products = [backpack, bikeLight, boltShirt]

        await pageM.inventoryPage.addMultipleProductsToCart(products.map(p => p.name))
        await expect(pageM.inventoryPage.cartBadge).toHaveText("3")

        await pageM.inventoryPage.goToCart()
        await expect(pageM.cartPage.cartItems).toHaveCount(3)
        await expect(pageM.cartPage.cartItemNames).toHaveText(products.map(p => p.name))

        for (const product of products)
        {
            await expect(pageM.cartPage.itemPrice(product.name)).toHaveText(product.price)
        }
    })

    test("TC03 - Add product from product details page", async ({ pageM }) =>
    {
        await pageM.inventoryPage.openProduct(fleeceJacket.name)

        await expect(pageM.productDetailsPage.productName).toHaveText(fleeceJacket.name)
        await expect(pageM.productDetailsPage.productPrice).toHaveText(fleeceJacket.price)

        await pageM.productDetailsPage.addToCart()
        await expect(pageM.productDetailsPage.cartBadge).toHaveText("1")
        await expect(pageM.productDetailsPage.removeButton).toBeVisible()

        await pageM.productDetailsPage.backToProducts()
        await expect(pageM.inventoryPage.removeButton(fleeceJacket.name)).toBeVisible()

        await pageM.inventoryPage.goToCart()
        await expect(pageM.cartPage.cartItemNames).toHaveText([fleeceJacket.name])
    })

    test("TC04 - Remove product from inventory page", async ({ pageM }) =>
    {
        await pageM.inventoryPage.addProductToCart(onesie.name)
        await expect(pageM.inventoryPage.cartBadge).toHaveText("1")

        await pageM.inventoryPage.removeProduct(onesie.name)

        await expect(pageM.inventoryPage.cartBadge).toBeHidden()
        await expect(pageM.inventoryPage.addToCartButton(onesie.name)).toBeVisible()
    })

    test("TC05 - Remove one product from cart page", async ({ pageM }) =>
    {
        await pageM.inventoryPage.addMultipleProductsToCart([backpack.name, bikeLight.name])
        await pageM.inventoryPage.goToCart()
        await expect(pageM.cartPage.cartItems).toHaveCount(2)

        await pageM.cartPage.removeProduct(backpack.name)

        await expect(pageM.cartPage.cartItems).toHaveCount(1)
        await expect(pageM.cartPage.cartItemNames).toHaveText([bikeLight.name])
        await expect(pageM.cartPage.cartBadge).toHaveText("1")
    })

    test("TC06 - Cart keeps products after Continue Shopping", async ({ pageM }) =>
    {
        await pageM.inventoryPage.addProductToCart(backpack.name)
        await pageM.inventoryPage.goToCart()
        await pageM.cartPage.continueShopping()

        await expect(pageM.inventoryPage.pageTitle).toHaveText(saucelabData.titles.inventory)
        await expect(pageM.inventoryPage.cartBadge).toHaveText("1")

        await pageM.inventoryPage.addProductToCart(bikeLight.name)
        await expect(pageM.inventoryPage.cartBadge).toHaveText("2")

        await pageM.inventoryPage.goToCart()
        await expect(pageM.cartPage.cartItemNames).toHaveText([backpack.name, bikeLight.name])
    })

    test("TC07 - Add all products to cart", async ({ pageM }) =>
    {
        await pageM.inventoryPage.addAllProductsToCart()

        await expect(pageM.inventoryPage.cartBadge).toHaveText(String(saucelabData.totalProducts))
        await expect(pageM.inventoryPage.allAddToCartButtons).toHaveCount(0)

        await pageM.inventoryPage.goToCart()
        await expect(pageM.cartPage.cartItems).toHaveCount(saucelabData.totalProducts)
    })
})