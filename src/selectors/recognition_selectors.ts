export const RecognitionSelectors = {
    businessEmailInput: "//input[@name='user_name']",
    passwordInput: "//input[@type='password']",
    signInButton: "//button[@type='submit']",
    recognizeTab: "(//span[normalize-space()='Recognize'])[2]",
    selectUsersCombobox: "(//div[contains(@class,'ng-select-container') and .//span[contains(text(),'Select users')]])//input[@role='combobox']",
    userOption: "//span[normalize-space()='PH RE Finance Admin 2']",
    selectCategoryDropdown: "(//div[contains(@class,'ng-select-container') and .//span[contains(text(),'Select category')]])//div[contains(@class,'ng-input')]",
    categoryOption: "//span[normalize-space()='Above and Beyond']",
    messageInput: "//textarea[@placeholder='Add your message here']",
    submitButton: "//button[normalize-space()='Submit']",
    successMessage: "//div[contains(text(),'Recognition posted')]"
}
