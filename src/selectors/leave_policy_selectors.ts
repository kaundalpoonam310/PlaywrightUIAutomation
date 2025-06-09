export const LeavePolicySelectors = {
    // Login selectors

    password: "input[type='password']",
    signInButton: "button[type='submit']",

    // Navigation selectors
    profileDropdown: ".icon-dropdown",
    organizationSettings: "a:has-text('Organization settings')",
    searchSettings: "input[placeholder='Search settings']",
    leaveCategoryLink: "text=Leave category",
    leavePolicyLink: "text=Leave policy",

    // Leave Category Creation
    newLeaveCategoryButton: "button:has-text('New leave category')",
    categoryNameInput: "input[placeholder='Enter category name']",
    categoryCodeInput: "input[placeholder='Enter Category code']",
    leaveDescriptionInput: "textarea[placeholder='Enter leave description']",
    descriptionVisibilityToggle: "span:has-text('Make leave description visible to employee')",
    uploadImageButton: "input[type='file'][id='uploadBar']",
    uploadImageButtonVisible: "button:has-text('Browse for a file')",
    unpaidLeaveToggle: "//span[contains(text(), 'Unpaid leave')]",
    
    // Leave Policy Creation
    newLeavePolicyButton: "button:has-text('New leave policy')",
    policyNameInput: "input[placeholder='Enter leave policy name']",
    policyDescriptionInput: "[placeholder='Enter leave policy description']",
    categorySelect: ".ng-select-container",
    leaveTransitionSelect: 'ng-select[name="appliedLeaveTransitionTypeOnExit"] input[type="text"]',
    leaveResetSelect: 'ng-select[name="appliedLeaveTransitionTypeOnReset"] input[type="text"]',
    
    // Leave Transition Selectors
    leaveTransitionContainer: 'ng-select[name="appliedLeaveTransitionTypeOnExit"]',
    leaveTransitionInput: 'ng-select[name="appliedLeaveTransitionTypeOnExit"] input[type="text"]',
    leaveTransitionOption: '.ng-option:nth-child(2)', // Second option in the dropdown
    leaveCancel: 'span:has-text("Cancel")',

    // Leave Transition from one policy to another Selectors
    leaveTransitionPolicyContainer: 'ng-select[name="appliedLeaveTransitionType"]',
    leaveTransitionPolicyInput: 'ng-select[name="appliedLeaveTransitionType"] input[type="text"]',
    leaveTransitionPolicyOption: '.ng-option:nth-child(2)', // Second option in the dropdown
    
    // Leave Reset Selectors
    leaveResetContainer: 'ng-select[name="appliedLeaveTransitionTypeOnReset"]',
    leaveResetOption: '.ng-option:nth-child(2)', // Second option in the dropdown
    
    // Accrual Settings
    customRadio: "text=Custom",
    accrualTypeSelect: ".ng-input >> nth=0",
    accrualYearlyOption: "text=Yearly",
    accrualLeaveCount: "input[name='accrualLeaveCount']",
    accrualStartSelect: "div:nth-child(6) .ng-input",
    startOfPeriodOption: "text=Start of Period",
    simultaneousLeaveInput: "input[name='numberOfSimultaneousLeave']",
    manualAdjustmentToggle: "text=Yes, allow manual adjustments",
    managerAddToggle: "text=Yes, allow manager to add leave for their reportees",
    
    // Additional Settings
    thresholdDaysInput: "input[placeholder='Enter number of days']",
    weeklyValueInput: "input[placeholder='Enter a value']",
    holidayThresholdInput: "input[name='thresholdToIncludeHoliday']",
    leaveLimitInput: "input[name='leaveLimitCount']",
    minLeaveCountInput: "input[name='leaveCount']",
    atLeastDaysInput: "input[name='atLeastDays']",
    businessDaysSelect: ".ng-select:nth-child(3)",
    businessDaysOption: "text=Business days",

    // Navigation Buttons
    nextStepButton: "button:has-text('Next step')",
    saveButton: "//button[normalize-space(text())='Save']",

    // Toggle Areas
    restrictToggleText: "div.toggle-card-header:has-text('Do you want to restrict submission of leave requests for past dates?') input",
    weeklyToggle: "div.toggle-card-header:has-text('Do you want to include weekly off between leave days in leave count?') input",
    holidayToggle: "div.toggle-card-header:has-text('Do you want to include holiday between leave days in leave count?') input",
    leaveLimitToggle: "div.toggle-card-header:has-text('Limit the number of leaves an employee can apply for a given period?') input",
    negativeBalanceToggle: "div.toggle-card-header:has-text('Do you want to allow negative leave balance?') input",
    minLeaveToggle: "div.toggle-card-header:has-text('Limit the minimum number of days in advance this leave has to be applied?') input"
}