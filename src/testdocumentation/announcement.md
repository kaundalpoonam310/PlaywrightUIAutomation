# Test Case Documentation: Create Announcement

## Overview
This test case verifies the functionality of creating a new announcement post in the PeopleHum application.

## Test Case ID
TC_AN_001

## Test Case Title
Create a New Announcement Post

## Prerequisites
1. Valid user credentials with access to create announcements
2. Access to https://qahris.peoplehum.org/portal/login

## Test Steps
1. Login to the Application
   - Navigate to login page
   - Enter business email: payrollautomationgreythrtest@gmail.com
   - Enter password: Test@123
   - Click Sign in button
   - Verify navigation to homepage

2. Create New Announcement
   - Click on "Create a post" button
   - Enter announcement title: "New announcement"
   - Enter announcement content: "New announcement"
   - Click "Post" button

3. Verify Creation
   - Verify success message appears
   - Close the success message dialog

4. Sign Out
   - Click on Profile dropdown
   - Click "Sign out" option

## Expected Results
1. User should be able to log in successfully
2. Announcement creation form should be accessible
3. All form fields should accept input
4. Announcement should be posted successfully
5. Success message should be displayed
6. User should be able to sign out successfully

## Test Data
- Business Email: payrollautomationgreythrtest@gmail.com
- Password: Test@123
- Announcement Title: New announcement
- Announcement Content: New announcement

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
- Test uses Page Object Model pattern for better maintainability
- Selectors are maintained in a separate file for easy updates
- Test is tagged as @smoke for inclusion in smoke test suite
- Assumes user has necessary permissions to create announcements

## Author
QA Automation Team

## Last Updated
2 June 2025
