export const RegisteredEntitySelectors = {
    // Login selectors
    businessEmail: "input[name='user_name']",
    password: "input[type='password']",
    signInButton: "button[type='submit']",

    // Navigation selectors
    profileDropdown: "div.profile-pic-dropdown > .dropdown-toggle",
    organizationSettings: "a:has-text('Organization settings')",
    registeredEntity: "text=Registered entity",
    
    // Entity Creation selectors
    newEntityButton: "button:has-text('New entity')",
    uploadImageButton: "button:has-text(' Upload Image')",
    entityNameInput: "textarea[placeholder='Enter name']",
    descriptionInput: "textarea[placeholder='Description']",
    currencySelect: "div.ng-select-container:has-text('Select Currency')",
    currencyInput: "[role='combobox']",
    currencyOption: "//div[contains(@class, 'ng-option')]//span[text()='UAE Dirham - AED']",
    
    // Address selectors
    addressLine1: "textarea[placeholder='Address line1']",
    addressLine2: "textarea[placeholder='Address line2']",
    countrySelect: "div.ng-select-container:has-text('Select country')",
    countryInput: "[role='combobox']",
    emirateSelect: "div.ng-select-container:has-text('Select emirate')",
    emirateOption: "text=Abu Dhabi Emirate",
    citySelect: "div.ng-select-container:has-text('Select city')",
    cityInput: "div.ng-select-container:has-text('Select city') input[role='combobox']",
    cityOption: "div.ng-option:has-text('Abu Dhabi')",
    
    // Action buttons
    addButton: "button:has-text('Add')",
    closeButton: "[aria-label='close']",
    
    // Success message
    successMessage: "text=Registered entity added"
}
