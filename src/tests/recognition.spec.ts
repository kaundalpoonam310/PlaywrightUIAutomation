import { test, expect } from '../common/base.test';
import { RecognitionPage } from '../pages/recognition_page';
import { BasePage } from '../pages/base_page';

test.beforeEach(async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto('https://qahris.peoplehum.org/portal/login');
  await basePage.login('payrollautomationgreythrtest@gmail.com', 'Test@123');
});

test('Create Recognition @smoke', async ({ page }) => {

    const recognitionPage = new RecognitionPage(page);
    await recognitionPage.createRecognition(
        'PH RE Finance Admin 2',
        'Above and Beyond',
        'you are recognized for great work'
    );
    // Assert success message is visible
    await expect(page.locator("//div[contains(text(),'Recognition posted')]")).toBeVisible();
});

test.afterEach(async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.logout();
});

