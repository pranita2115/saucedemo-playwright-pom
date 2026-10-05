# SauceDemo Playwright POM Framework

Test automation framework for https://www.saucedemo.com built with Playwright and TypeScript using the Page Object Model.

## Structure
- `pages/common` – BasePage and PageManager
- `pages/saucelab` – locator and page classes for Login, Inventory, Product Details, Cart
- `fixtures` – custom fixture providing the PageManager to tests
- `test-data` – users, products and expected values
- `tests/saucelab` – login and add-to-cart test suites

## Run
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```
