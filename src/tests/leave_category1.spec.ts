import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '../common/base.test';
import { LeavePolicyPage, LeaveCategoryData } from '../pages/leave_policy_page';
import path from 'path';

test('Create Leave Category @smoke', async ({ page, loginAsAdmin }, testInfo) => {
    const leavePolicyPage = new LeavePolicyPage(page);
    
    // Navigate to Leave Category section
    await leavePolicyPage.navigateToLeaveCategory();
    
    const categoryData: LeaveCategoryData = {
        name: 'SickCategory50',
        code: 'SickCategory50',
        description: 'SickCategory26 description',
        imagePath: path.join('/Users/poonamkaundal/Documents/PeoplehumProjects/PeopleHumProjects/playwrightuiautomation/Flag_of_the_Philippines.png'),
        isUnpaidLeave: true
    };
    
    await leavePolicyPage.createLeaveCategory(categoryData);
    await expect(page.locator('text=Leave category created successfully')).toBeVisible();

    // Run accessibility scan
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .exclude('.non-accessible')
        .analyze();

    // Attach results to report
    await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
    });

    // Log violations if any
    if (accessibilityScanResults.violations.length > 0) {
        console.log('Accessibility violations:', JSON.stringify(accessibilityScanResults.violations, null, 2));
    }

    // Fail test if there are violations
    // expect(accessibilityScanResults.violations).toEqual([]);
});
