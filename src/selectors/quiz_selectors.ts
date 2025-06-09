export const QuizSelectors = {
    // Login selectors
    emailInput: "//input[@type='email']",
    passwordInput: "//input[@type='password']",
    signInButton: "//button[@type='submit']",

    // Navigation selectors
    engagePillar: "//a[@id='engageModules']/parent::li",
    quizMenuItem: "//span[@class='menu-text' and contains(text(),'Quiz')]",
    quizList: "//a[contains(text(),'Quiz List')]",

    // Button selectors
    newQuizButton: "//button[normalize-space()='New Quiz']",
    proceedButton: "//button[normalize-space()='Proceed']",
    
// Input fields
quizNameInput: "//input[@placeholder='Enter a unique quiz name']",
    quizDescriptionInput: "//textarea[@placeholder='Enter template description']",
templateNameInput: "//span[text()='Type ahead to select a quiz template']",
    
    // Date and Time selectors
    startDateInput: "//span[text()='Start Date']/parent::label/following-sibling::input",
startTimeInput: "//span[text()='Start Time']/parent::label/following-sibling::input",
    endDateInput: "//span[text()='End Date']/parent::label/following-sibling::input",
    endTimeInput: "//span[text()='End Time']/parent::label/following-sibling::input",
    
    // Time limit inputs
    hoursInput: "//input[@name='hours']",
    minutesInput: "//input[@name='minutes']",
    secondsInput: "//input[@name='seconds']",
    
    // Attempt controls
    unlimitedAttemptsLabel: "//label[text()='Unlimited Attempts']",
    numberOfAttemptsInput: "//input[@name='number_of_attempt']",
    
    // Pass percentage
    passPercentageInput: "//span[contains(text(), 'Per Correct Answer')]/preceding-sibling::input",
    
    // Display options
    displayResultYes: "//span[text()='Display Result to Users']/parent::div/descendant::label[text()='Yes']",
    viewSubmittedResponsesEnd: "//span[text()='View Submitted Responses']/parent::div/descendant::label[text()='End of Quiz']",
    randomizeQuestionsYes: "//span[text()='Show Questions in Random Order']/parent::div/descendant::label[text()='Yes']",
    randomizeOptionsYes: "//span[text()='Show Options in Random Order']/parent::div/descendant::label[text()='Yes']",
    
    // People/Team view
    peopleViewLabel: "//label[text()='People View']",
    teamViewLabel: "//label[text()='Team View']",
    selectTypeSpan: "//span[text()='Select Type']",
    typeDropdown: "//span[contains(@class,'ui-select-choices-row-inner')]/child::div[contains(text(),'Type')]",
    
    // Search fields
    searchPeopleInput: "//input[@placeholder='Search People to Add']",
    searchJobFunctionInput: "//input[@placeholder='Search by Job Function']",
    searchTeamInput: "//input[@placeholder='Type Team Name']",
    
    // Dynamic selectors
    spanByText: (text: string) => `//span[text()='${text}']`,
    buttonByText: (text: string) => `//button[normalize-space()='${text}']`,
}
