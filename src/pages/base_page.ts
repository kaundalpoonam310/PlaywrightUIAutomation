import { Page, expect } from '@playwright/test';
import { BaseSelectors } from '../selectors/base_selectors';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;


    }

    /**
     * Login to the application
     * @param email Business email for login
     * @param password Password for login
     */
    async login(email: string, password: string) {
        await this.page.fill(BaseSelectors.businessEmail, email);
        await this.page.fill(BaseSelectors.password, password);
        await this.page.click(BaseSelectors.signInButton);
        // Wait for navigation to complete
        await this.page.waitForURL(/.*homepage.*/);
    }

    async logout(email: string, password: string) {
        await this.page.fill(BaseSelectors.businessEmail, email);
        await this.page.fill(BaseSelectors.password, password);
        await this.page.click(BaseSelectors.signInButton);
    
    }

    /**
     * Wait for loader to disappear
     */
    async waitForLoader() {
        try {
            await this.page.waitForSelector(BaseSelectors.loader, { state: 'hidden', timeout: 30000 });
        } catch (error) {
            console.log('Loader not found or already hidden');
        }
    }

    /**
     * Verify alert message
     * @param expectedMessage Expected message text
     */
    async verifyAlertMessage(expectedMessage: string) {
        const alertText = await this.page.textContent(BaseSelectors.alertMessage);
        expect(alertText).toContain(expectedMessage);
    }

    /**
     * Click profile dropdown
     */
    async clickProfileDropdown() {
        await this.page.click(BaseSelectors.profileDropdown);
    }

    /**
     * Navigate to homepage
     */
    async goToHomepage() {
        await this.page.click(BaseSelectors.homePage);
        await this.waitForLoader();
    }

    /**
     * Generic method to wait for element to be visible
     * @param selector Element selector
     */
    async waitForElement(selector: string) {
        await this.page.waitForSelector(selector, { state: 'visible' });
    }

    /**
     * Generic method to wait for URL to contain specific text
     * @param urlText Text that URL should contain
     */
    async waitForURL(urlText: string) {
        await this.page.waitForURL(new RegExp(urlText));
    }

    /**
     * Upload a file using a hidden input element
     * @param fileInputSelector Selector for the hidden file input element
     * @param visibleButtonSelector Selector for the visible upload button (used to verify page readiness)
     * @param filePath Path to the file to upload
     */
    async uploadFile(fileInputSelector: string, visibleButtonSelector: string, filePath: string) {
        try {
            // Wait for the visible button to ensure the page is ready
            await this.waitForElement(visibleButtonSelector);

            // Set file directly on the hidden input without waiting for visibility
            await this.page.setInputFiles(fileInputSelector, filePath, {
                timeout: 5000
            });

            // Wait for any upload processing
            await this.waitForLoader();
        } catch (error) {
            console.error('File upload failed:', error);
            throw error;
        }
    }

    async uploadFileWithoutInputTag(fileSelector: string, visibleButtonSelector: string, filePath: string){
        try{
            this.page.on('filechooser',async(fileChooser)=>{
                // await fileChooser.isMultiple();
                await fileChooser.setFiles(filePath);
            })

            await this.page.click(".leave-category-uploader .my-drop-zone", {force: true})
        }catch (error) {
            console.error('File upload failed:', error);
            throw error;
        }

    }
}
