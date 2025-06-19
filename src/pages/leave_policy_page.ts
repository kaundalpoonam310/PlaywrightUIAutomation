import { Page } from '@playwright/test';
import { LeavePolicySelectors } from '../selectors/leave_policy_selectors';
import { BasePage } from './base_page';

export interface LeaveCategoryData {
    name: string;
    code: string;
    description: string;
    imagePath: string;
    isUnpaidLeave: boolean;
}

export interface LeavePolicyData {
    name: string;
    description: string;
    categoryName: string;
    accrualCount: string;
    simultaneousLeaveCount: string;
    thresholdDays: string;
    weeklyValue: string;
    holidayThreshold: string;
    leaveLimit: string;
    minLeaveCount: string;
    atLeastDays: string;
}

export class LeavePolicyPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToLeaveCategory() {
        await this.clickProfileDropdown();
        await this.page.click(LeavePolicySelectors.organizationSettings);
        await this.page.fill(LeavePolicySelectors.searchSettings, 'Leave');
        await this.page.click(LeavePolicySelectors.leaveCategoryLink);
    }

    async createLeaveCategory(data: LeaveCategoryData) {
        // Get button and ensure it's visible and clickable
        const button = this.page.locator(LeavePolicySelectors.newLeaveCategoryButton);
        await button.waitFor({ state: 'visible' });
        
        // Scroll button into view and click with retry
        await button.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(100); // Short wait for any animations
        await button.click({ force: true, timeout: 30000 });

        await this.waitForElement(LeavePolicySelectors.categoryNameInput);
        await this.page.fill(LeavePolicySelectors.categoryNameInput, data.name);
        await this.page.fill(LeavePolicySelectors.categoryCodeInput, data.code);
        await this.page.fill(LeavePolicySelectors.leaveDescriptionInput, data.description);
        
        if (data.imagePath) {
             await this.page.waitForTimeout(10000);
            await this.uploadFileWithoutInputTag(
                LeavePolicySelectors.uploadImageButton,
                LeavePolicySelectors.uploadImageButtonVisible,
                data.imagePath
            );

        } 
        await this.page.click(LeavePolicySelectors.nextStepButton);
        if (data.isUnpaidLeave) {
            await this.page.click(LeavePolicySelectors.unpaidLeaveToggle);
        }
        
        await this.page.click(LeavePolicySelectors.nextStepButton);
        await this.page.click(LeavePolicySelectors.saveButton);
    }

    async navigateToLeavePolicy() {
        await this.clickProfileDropdown();
        await this.page.click(LeavePolicySelectors.organizationSettings);
        await this.page.fill(LeavePolicySelectors.searchSettings, 'Leave');
        await this.page.click(LeavePolicySelectors.leavePolicyLink);
        await this.waitForLoader();
    }

    async createLeavePolicy(data: LeavePolicyData) {
        // Wait for page to be stable and loader to disappear
        await this.page.waitForLoadState('networkidle');
        await this.waitForLoader();
        
        // Get button and ensure it's visible and clickable
        const button = this.page.locator(LeavePolicySelectors.newLeavePolicyButton);
        // await button.waitFor({ state: 'visible' });

        // Scroll button into view and click with retry
        // await button.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(100); // Short wait for any animations
        await button.click({ force: true, timeout: 500 });

        // Handle 'Proceed anyway' dialog if it appears (Playwright equivalent)
        const proceedAnywayButton = this.page.locator("//button[normalize-space()='Proceed anyway']");
        if (await proceedAnywayButton.count() > 0 && await proceedAnywayButton.first().isVisible()) {
            const cancelButton = this.page.locator("(//button[normalize-space()='Cancel'])[2]");
            await cancelButton.click();
        }

        // Make sure we're on the leave policy page and wait for button
        await this.waitForElement(LeavePolicySelectors.policyNameInput);
        
        await this.page.click(LeavePolicySelectors.policyNameInput, {
            force: true,
            timeout: 30000
        });

        // Fill in the policy details
        await this.page.fill(LeavePolicySelectors.policyNameInput, data.name);
        await this.page.fill(LeavePolicySelectors.policyDescriptionInput, data.description);

        // Select category
        await this.page.click(LeavePolicySelectors.categorySelect);
        await this.page.getByText(data.categoryName).click();
        await this.page.click(LeavePolicySelectors.nextStepButton);
        
        // Skip a step
        await this.page.click(LeavePolicySelectors.nextStepButton);
        
        // Accrual Settings
        await this.page.click(LeavePolicySelectors.customRadio);
        await this.page.click(LeavePolicySelectors.accrualTypeSelect);
        await this.page.click(LeavePolicySelectors.accrualYearlyOption);
        await this.page.fill(LeavePolicySelectors.accrualLeaveCount, data.accrualCount);
        await this.page.click(LeavePolicySelectors.accrualStartSelect);
        await this.page.click(LeavePolicySelectors.startOfPeriodOption);
        await this.page.fill(LeavePolicySelectors.simultaneousLeaveInput, data.simultaneousLeaveCount);
        await this.page.click(LeavePolicySelectors.manualAdjustmentToggle);
        await this.page.click(LeavePolicySelectors.managerAddToggle);
        
        // Navigate through steps
        await this.page.click(LeavePolicySelectors.nextStepButton);
        await this.page.click(LeavePolicySelectors.nextStepButton);

        // Handle the ng-select dropdown properly
        await this.page.click(LeavePolicySelectors.leaveTransitionContainer);
        await this.page.waitForSelector(LeavePolicySelectors.leaveTransitionOption, { state: 'visible' });
        // await this.page.click(LeavePolicySelectors.leaveTransitionOption);
        await this.page.click(LeavePolicySelectors.leaveCancel);

        await this.page.click(LeavePolicySelectors.nextStepButton);

        // Handle the leave reset ng-select dropdown
        await this.page.click(LeavePolicySelectors.leaveResetContainer);
        await this.page.waitForSelector(LeavePolicySelectors.leaveResetOption, { state: 'visible' });
        // await this.page.click(LeavePolicySelectors.leaveResetOption);
        await this.page.click(LeavePolicySelectors.leaveCancel);
        await this.page.click(LeavePolicySelectors.nextStepButton);

        // Configure additional settings
        await this.configurePolicySettings(data);
        await this.page.click(LeavePolicySelectors.nextStepButton);
        await this.page.click(LeavePolicySelectors.nextStepButton);

        // Handle the ng-select dropdown properly
        await this.page.click(LeavePolicySelectors.leaveTransitionPolicyContainer);
        await this.page.waitForSelector(LeavePolicySelectors.leaveTransitionPolicyContainer, { state: 'visible' });
        // await this.page.click(LeavePolicySelectors.leaveTransitionOption);
        await this.page.click(LeavePolicySelectors.leaveCancel);
        await this.page.click(LeavePolicySelectors.nextStepButton);
        await this.page.click(LeavePolicySelectors.nextStepButton);

        await this.page.click(LeavePolicySelectors.saveButton);
    }

    private async configurePolicySettings(data: LeavePolicyData) {
        // Click the toggle input directly
        await this.page.waitForSelector(LeavePolicySelectors.restrictToggleText, { state: 'visible' });
        await this.page.click(LeavePolicySelectors.restrictToggleText, { force: true });
        // Wait for the input to be ready
        await this.page.waitForLoadState('networkidle');
        await this.waitForLoader();
        await this.page.waitForSelector(LeavePolicySelectors.thresholdDaysInput, { state: 'visible' });
        await this.page.fill(LeavePolicySelectors.thresholdDaysInput, data.thresholdDays);

        await this.page.waitForSelector(LeavePolicySelectors.weeklyToggle, { state: 'visible' });
        await this.page.click(LeavePolicySelectors.weeklyToggle, { force: true });
         // Wait for the input to be ready
        await this.page.waitForLoadState('networkidle');
        await this.waitForLoader();
        
        // Wait for and fill the weekly value input with retry
        await this.page.waitForSelector(LeavePolicySelectors.weeklyValueInput, { state: 'visible', timeout: 5000 }).catch(async () => {
            // If not found, wait a bit and try again
            await this.page.waitForTimeout(2000);
            await this.page.waitForSelector(LeavePolicySelectors.weeklyValueInput, { state: 'visible' });
        });
        await this.page.fill(LeavePolicySelectors.weeklyValueInput, data.weeklyValue);

        await this.page.waitForSelector(LeavePolicySelectors.holidayToggle, { state: 'visible' });
        await this.page.click(LeavePolicySelectors.holidayToggle, { force: true });
         // Wait for the input to be ready
        await this.page.waitForLoadState('networkidle');
        await this.waitForLoader();
        await this.page.waitForSelector(LeavePolicySelectors.holidayThresholdInput, { state: 'visible' });
        await this.page.fill(LeavePolicySelectors.holidayThresholdInput, data.holidayThreshold);

    }
}
