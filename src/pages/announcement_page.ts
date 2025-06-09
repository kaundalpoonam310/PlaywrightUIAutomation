import { Page } from '@playwright/test';
import { AnnouncementSelectors } from '../selectors/announcement_selectors';
import { BasePage } from './base_page';

export interface AnnouncementData {
    title: string;
    content: string;
}

export class AnnouncementPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async createAnnouncement(data: AnnouncementData) {
        // Create new announcement
        await this.page.click(AnnouncementSelectors.createPostButton);
        
        // Fill in announcement details
        await this.page.fill(AnnouncementSelectors.announcementTitle, data.title);
        await this.page.fill(AnnouncementSelectors.postContent, data.content);
        
        // Post announcement
        await this.page.click(AnnouncementSelectors.postButton);
        
        // Wait for success and close
        await this.page.waitForSelector(AnnouncementSelectors.successMessage);
        await this.page.click(AnnouncementSelectors.closeButton);
    }

    async signOut() {
        await this.clickProfileDropdown();
        await this.page.getByRole('link', { name: 'Sign out' }).click();
    }
}
