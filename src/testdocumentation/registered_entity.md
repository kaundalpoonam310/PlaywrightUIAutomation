# Test Case Documentation: Create Registered Entity

## Overview
This test case verifies the functionality of creating a new registered entity in the Organization settings section of the PeopleHum application.

## Test Case ID
TC_RE_001

## Test Case Title
Create a New Registered Entity with Basic Details

## Prerequisites
1. Valid user credentials with access to Organization settings
2. Image file (burhani-UAE.jpg) available for upload
3. Access to https://qahris.peoplehum.org/portal/login

## Test Steps
1. Login to the Application
   - Navigate to login page
   - Enter business email: payrollautomationgreythrtest@gmail.com
   - Enter password: Test@123
   - Click Sign in button
   - Verify navigation to homepage

2. Navigate to Registered Entity Section
   - Click on Profile dropdown in the top bar
   - Click on "Organization settings"
   - Click on "Registered entity" option

3. Create New Registered Entity
   - Click "New entity" button
   - Upload company logo (burhani-UAE.jpg)
   - Enter entity name: "burhani"
   - Enter description: "burhani"
   - Select currency: "AED"
   - Fill address details:
     - Address line 1: "ABC"
     - Address line 2: "ANBC"
     - Select country: "United Arab Emirates"
     - Select emirate: "Abu Dhabi Emirate"
     - Select city: "Abu Dhabi"
   - Click "Add" button

4. Verify Creation
   - Verify success message: "Registered entity added"
   - Close the dialog

## Expected Results
1. User should be able to log in successfully
2. Navigation to registered entity section should work
3. All form fields should accept input
4. Entity should be created successfully with provided details
5. Success message should be displayed

## Test Data
- Business Email: payrollautomationgreythrtest@gmail.com
- Password: Test@123
- Entity Name: burhani
- Description: burhani
- Currency: AED
- Address Line 1: ABC
- Address Line 2: ANBC
- Country: United Arab Emirates
- Emirate: Abu Dhabi Emirate
- City: Abu Dhabi
- Image: burhani-UAE.jpg

## Test Environment
- Browser: Chromium
- Application URL: https://qahris.peoplehum.org/portal/login
- Test Framework: Playwright
- Language: TypeScript

## Dependencies
- @playwright/test
- TypeScript configuration
- Access to required selectors and page objects

## Notes
- Image file path needs to be configured based on the project structure
- Test uses Page Object Model pattern for better maintainability
- Selectors are maintained in a separate file for easy updates

## Author
QA Automation Team

## Last Updated
29 May 2025
