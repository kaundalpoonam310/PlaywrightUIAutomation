import { test as base } from '@playwright/test';
import { BasePage } from '../pages/base_page';

// Declare the types of your fixtures
type MyFixtures = {
    basePage: BasePage;
    loginAsAdmin: void;
};

// Extend base test with custom fixtures
export const test = base.extend<MyFixtures>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },

    loginAsAdmin: async ({ page, basePage }, use) => {
        await page.goto('https://qahris.peoplehum.org/portal/login');
        await basePage.login('payrollautomationgreythrtest@gmail.com', 'Test@123');
        await use();
    }
});

// Export these for use in test files
export { expect } from '@playwright/test';
