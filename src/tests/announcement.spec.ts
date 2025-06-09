import { test, expect } from '../common/base.test';
import { AnnouncementPage, AnnouncementData } from '../pages/announcement_page';

test('Create Announcement @smoke', async ({ page, loginAsAdmin }) => {
    const announcementPage = new AnnouncementPage(page);
    
    // Create announcement data
    const announcementData: AnnouncementData = {
        title: 'New announcement',
        content: 'New announcement'
    };
    
    // Create announcement
    await announcementPage.createAnnouncement(announcementData);
    
    // Sign out
    await announcementPage.signOut();
});
