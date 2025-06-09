export const BaseSelectors = {
    // Login selectors
    businessEmail: "//input[@name='user_name']",
    password: "//input[@type='password']",
    signInButton: "//button[@type='submit']",
    
    // Common navigation elements
    homePage: "//a[@id='homepage']",
    profileDropdown: "//div[contains(@class,'profile-pic-dropdown')]",
    
    // Common validation elements
    alertMessage: "//span[@compile='alert.data.message']",
    loader: "//div[@class='page-loader']",
    
    // Profile and settings
    profileIcon: "//div[contains(@class,'profile-pic-dropdown')]",
    
    // Common buttons
    closeButton: "//button[contains(@class,'close')]",
    saveButton: "//button[contains(@class,'btn-primary')]",
    cancelButton: "//button[contains(@class,'btn-default')]"
}
