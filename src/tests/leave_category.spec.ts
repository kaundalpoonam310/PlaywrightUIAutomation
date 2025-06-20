import { test, expect } from '../pages/BaseFixtureSetup';
import { LeavePolicyPage, LeaveCategoryData } from '../pages/leave_policy_page';
import path from 'path';

test('Admin creates a new sick leave category with image', async ({ page, basePageSetup }) => {
  const leavePolicyPage = new LeavePolicyPage(page);
  await leavePolicyPage.navigateToLeaveCategory();
await new Promise(res => setTimeout(res, 1500)); // 1.5 sec delay
  const categoryData: LeaveCategoryData = {
    name: 'SickCategory100',
    code: 'SickCategory100',
    description: 'SickCategory100 description',
    imagePath: path.resolve(__dirname, '../Files/Flag_of_the_Philippines.png'),
    isUnpaidLeave: true
  };

  await leavePolicyPage.createLeaveCategory(categoryData);
  await expect(page.locator('text=Leave category created successfully')).toBeVisible();
});
