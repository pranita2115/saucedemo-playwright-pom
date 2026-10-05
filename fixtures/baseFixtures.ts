import { test as base } from '@playwright/test'
import { PageManager } from '../pages/common/PageManager'

type MyFixtures = {
    pageM: PageManager
}

export const test = base.extend<MyFixtures>({

    pageM: async ({ page }, use) =>
    {
        const pageManager = new PageManager(page)
        await use(pageManager)
    }
})

export { expect } from '@playwright/test'