import { test, expect } from '../../fixtures/baseFixtures'
import { saucelabData } from '../../test-data/saucelabData'

test.describe("SauceLab - Login", () =>
{
    test.beforeEach(async ({ pageM }) =>
    {
        await pageM.loginPage.navigate("/")
    })

    test("TC01 - Valid user can login", async ({ pageM }) =>
    {
        const user = saucelabData.users.standard
        await pageM.loginPage.login(user.username, user.password)

        await expect(pageM.page).toHaveURL(/inventory.html/)
    })

    test("TC02 - Invalid user sees error", async ({ pageM }) =>
    {
        const user = saucelabData.users.invalid
        await pageM.loginPage.login(user.username, user.password)

        await expect(pageM.loginPage.errorMessage).toHaveText(saucelabData.errors.invalidLogin)
    })

    test("TC03 - Locked out user sees error", async ({ pageM }) =>
    {
        const user = saucelabData.users.lockedOut
        await pageM.loginPage.login(user.username, user.password)

        await expect(pageM.loginPage.errorMessage).toHaveText(saucelabData.errors.lockedOut)
    })
})