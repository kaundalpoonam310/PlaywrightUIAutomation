# Test Case Documentation: Create Leave Category and Policy

## Overview
This test case verifies the functionality of creating a new Leave Category and Leave Policy in the Organization settings section of the PeopleHum application.

## Test Case ID
TC_LP_001

## Test Case Title
Create a New Leave Category and Leave Policy

## Prerequisites
1. Valid user credentials with access to Organization settings
2. Image file (wiproLogo.png) available for upload
3. Access to https://qahris.peoplehum.org/portal/login

## Test Steps
1. Login to the Application (handled by loginAsAdmin fixture)
   - Application automatically logs in with test credentials
   - Verifies navigation to homepage

2. Navigate to Leave Category Section
   - Click on Profile dropdown in the top bar
   - Click on "Organization settings"
   - Search for "Leave" in settings search
   - Click on "Leave Category" option

3. Create New Leave Category
   - Click "New Leave Category" button
   - Enter category name: "SickCategory1"
   - Enter category code: "SickCategory1"
   - Enter description: "SickCategory1 description"
   - Upload category logo (wiproLogo.png)
   - Toggle Description Visibility
   - Set as Unpaid Leave
   - Click Save button

4. Create New Leave Policy
   - Click "New Leave Policy" button
   - Fill in basic details:
     - Policy Name
     - Description
     - Select Leave Category
   - Configure policy settings:
     - Accrual Count
     - Simultaneous Leave Count
     - Threshold Days
     - Weekly Value
     - Holiday Threshold
     - Leave Limit
     - Minimum Leave Count
     - At Least Days
   - Click Save button

## Expected Results
1. Navigation to leave category section should be successful
2. Leave Category should be created with all specified details
3. Leave Policy should be created and linked to the category
4. Success messages should be displayed after each creation

## Test Data
### Leave Category Data
- Name: SickCategory1
- Code: SickCategory1
- Description: SickCategory1 description
- Image: wiproLogo.png
- Unpaid Leave: true

### Leave Policy Data
- Policy settings as configured in test data object

## Test Environment
- Browser: Chromium
- Application URL: https://qahris.peoplehum.org/portal/login
- Test Framework: Playwright
- Language: TypeScript

## Dependencies
- @playwright/test
- TypeScript configuration
- Base test configuration for login
- Access to required selectors and page objects

## Project Structure
- Test File: src/tests/leave_policy.spec.ts
- Page Object: src/pages/leave_policy_page.ts
- Selectors: src/selectors/leave_policy_selectors.ts
- Base Configuration: src/common/base.test.ts

## Notes
- Uses Page Object Model pattern
- Extends from BasePage for common functionality
- Uses base test fixture for authentication
- Selectors are maintained in a separate file
- Test handles both Leave Category and Policy creation in a single flow

## Author
QA Automation Team

## Last Updated
31 May 2025
