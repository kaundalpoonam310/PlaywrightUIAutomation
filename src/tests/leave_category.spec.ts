import { test, expect } from '../common/base.test';
import { LeavePolicyPage, LeaveCategoryData } from '../pages/leave_policy_page';
import path from 'path';

test('Create Leave Category', async ({ page, loginAsAdmin }, testInfo) => {
    const leavePolicyPage = new LeavePolicyPage(page);
    
    // Navigate to Leave Category section
    await leavePolicyPage.navigateToLeaveCategory();
    
    const categoryData: LeaveCategoryData = {
        name: 'SickCategory31',
        code: 'SickCategory31',
        description: 'SickCategory27 description',
        imagePath: path.join('/Users/poonamkaundal/Documents/PeoplehumProjects/PeopleHumProjects/playwrightuiautomation/Flag_of_the_Philippines.png'),
        isUnpaidLeave: true
    };
    
    await leavePolicyPage.createLeaveCategory(categoryData);
    await expect(page.locator('text=Leave category created successfully')).toBeVisible();
});
