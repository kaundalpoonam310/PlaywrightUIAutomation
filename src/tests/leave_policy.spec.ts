import { test, expect } from '../common/base.test';
import { LeavePolicyPage, LeavePolicyData } from '../pages/leave_policy_page';

test('Create Leave Policy @smoke', async ({ page, loginAsAdmin }) => {
    const leavePolicyPage = new LeavePolicyPage(page);

    // Navigate to Leave Policy section
    await leavePolicyPage.navigateToLeavePolicy();
    
    const policyData: LeavePolicyData = {
        name: 'SickPolicy21',
        description: 'SickPolicy21 description',
        categoryName: 'SickCategory21', // Make sure this category exists
        accrualCount: '12',
        simultaneousLeaveCount: '5',
        thresholdDays: '12',
        weeklyValue: '5',
        holidayThreshold: '5',
        leaveLimit: '5',
        minLeaveCount: '5',
        atLeastDays: '5'
    };
    
    await leavePolicyPage.createLeavePolicy(policyData);
    
    // TODO: Add assertion for success message
    // await expect(page.locator('text=Policy created successfully')).toBeVisible();
});
