import { Page } from '@playwright/test';
import { RecognitionSelectors } from '../selectors/recognition_selectors';
import { BasePage } from './base_page';

export class RecognitionPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async createRecognition(user: string, category: string, message: string) {
        // Click Recognize tab
        await this.page.locator(RecognitionSelectors.recognizeTab).click();

        // Select user
        await this.page.locator(RecognitionSelectors.selectUsersCombobox).click();
        await this.page.locator(RecognitionSelectors.selectUsersCombobox).fill(user);
        await this.page.locator(RecognitionSelectors.userOption).click();

        // Select category
        await this.page.locator(RecognitionSelectors.selectCategoryDropdown).click();
        await this.page.locator(RecognitionSelectors.categoryOption).click();

        // Enter message
        await this.page.locator(RecognitionSelectors.messageInput).click();
        await this.page.locator(RecognitionSelectors.messageInput).fill(message);

        // Submit
        await this.page.locator(RecognitionSelectors.submitButton).click();

        // Wait for success message
        await this.page.locator(RecognitionSelectors.successMessage).waitFor({ state: 'visible' });
    }
}
