import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '../pages/BaseFixtureSetup';
import { LeavePolicyPage, LeaveCategoryData } from '../pages/leave_policy_page';
import path from 'path';

test('Create Leave Category ', async ({ page, basePageSetup }, testInfo) => {
    const leavePolicyPage = new LeavePolicyPage(page);
    
    // Navigate to Leave Category section
    await leavePolicyPage.navigateToLeaveCategory();
    const categoryData: LeaveCategoryData = {
        name: 'SickCategory51',
        code: 'SickCategory51',
        description: 'SickCategory51 description',
        imagePath: path.join('/Users/poonamkaundal/Documents/PeoplehumProjects/PeopleHumProjects/playwrightuiautomation/Flag_of_the_Philippines.png'),
        isUnpaidLeave: true
    };
    
    await leavePolicyPage.createLeaveCategory(categoryData);
    await expect(page.locator('text=Leave category created successfully')).toBeVisible();
});
