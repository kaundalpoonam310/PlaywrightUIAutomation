# Quiz Test Documentation

## Overview
This document outlines the test scenarios and test cases for the Quiz functionality in the PeopleHum application. The tests cover the creation, configuration, and management of quizzes.

## Test Scenarios

### 1. Quiz Navigation
- Verify navigation to Quiz section through Engage pillar
- Verify Quiz List is accessible and loads correctly
- Verify loader is displayed during page transitions

### 2. Quiz Creation
#### Basic Quiz Creation (@smoke)
**Test Case: Create a new quiz with basic settings**
- **Preconditions:**
  - User is logged in as admin
  - User has necessary permissions to create quizzes

- **Test Steps:**
  1. Navigate to Quiz section via Engage pillar
  2. Click on Quiz List
  3. Click "New Quiz" button
  4. Click "Proceed" button
  5. Fill in basic quiz details:
     - Quiz Name: "Test Quiz"
     - Quiz Description: "This is a test quiz description"
     - Select Template: "Basic Template"
  6. Configure quiz schedule:
     - Set start date (current date)
     - Set start time (10:00 AM)
     - Set end date (current date)
     - Set end time (11:00 AM)
  7. Set time limits:
     - Hours: 1
     - Minutes: 0
     - Seconds: 0
  8. Configure quiz settings:
     - Enable unlimited attempts
     - Set pass percentage to 60%
     - Enable display results to users
     - Enable view submitted responses
     - Enable randomize questions
     - Enable randomize options
  9. Set applicability to "People View"
  10. Add users: "John Doe", "Jane Smith"
  11. Click Create button

- **Expected Results:**
  - Quiz should be created successfully
  - Success message should be displayed
  - New quiz should appear in the quiz list

### 3. Quiz Settings Validation
**Test Cases to be Implemented:**
- Verify date validation (end date cannot be before start date)
- Verify time validation (end time cannot be before start time on same day)
- Verify pass percentage accepts only valid values (0-100)
- Verify user selection and removal functionality
- Verify template selection and preview

### 4. Quiz Template Management
**Test Cases to be Implemented:**
- Verify template selection affects available question types
- Verify template preview functionality
- Verify custom template creation and usage

### 5. Quiz Access Control
**Test Cases to be Implemented:**
- Verify quiz accessibility based on user roles
- Verify invite applicability settings (People View, Team View)
- Verify user/team filtering functionality

## Test Data
```typescript
interface QuizData {
    quizName: string;
    quizDescription: string;
    chooseTemplate: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    timeLimitHours: number;
    timeLimitMinutes: number;
    timeLimitSeconds: number;
    unlimitedAttempts: boolean;
    numberOfAttempts?: string;
    passPercentage: string;
    displayResultToUsers: boolean;
    viewSubmittedResponses: boolean;
    randomizeQuestions: boolean;
    randomizeOptions: boolean;
    inviteApplicability: string;
    filterByType?: string[];
    filterType?: string[];
    addUsers?: string[];
    addTeams?: string[];
}
```

## Notes
- Test data should be cleaned up after test execution
- Consider adding more assertions for validation
- Consider adding negative test cases
- Consider testing quiz editing and deletion functionality
