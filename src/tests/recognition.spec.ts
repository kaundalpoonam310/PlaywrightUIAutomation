import { test, expect } from '../common/base.test';
import { RecognitionPage } from '../pages/recognition_page';

test('Create Recognition @smoke', async ({ page, loginAsAdmin }) => {
    const recognitionPage = new RecognitionPage(page);
    await recognitionPage.createRecognition(
        'PH RE Finance Admin 2',
        'Above and Beyond',
        'you are recognized for great work'
    );
    // Assert success message is visible
    await expect(page.locator("//div[contains(text(),'Recognition posted')]")).toBeVisible();
});
