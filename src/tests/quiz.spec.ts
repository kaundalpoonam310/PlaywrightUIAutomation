import { test, expect } from '../common/base.test';
import { QuizPage, QuizData } from '../pages/quiz_page';

test('Create a new quiz @smoke', async ({ page, loginAsAdmin }) => {
    const quizPage = new QuizPage(page);
    
    // Navigate to Quiz section
    await quizPage.navigateToQuiz();
    
    // Sample quiz data
    const quizData: QuizData = {
        quizName: 'Test Quiz5',
        quizDescription: 'This is a test quiz description',
        chooseTemplate: 'Basic Template',
        startDate: new Date().toISOString().split('T')[0], // Today
        startTime: '10:00:00',
        endDate: new Date().toISOString().split('T')[0], // Today
        endTime: '11:00:00',
        timeLimitHours: 1,
        timeLimitMinutes: 0,
        timeLimitSeconds: 0,
        unlimitedAttempts: true,
        passPercentage: '60',
        displayResultToUsers: true,
        viewSubmittedResponses: true,
        randomizeQuestions: true,
        randomizeOptions: true,
        inviteApplicability: 'People View',
        addUsers: ['John Doe', 'Jane Smith']
    };
    
    // Create the quiz
    await quizPage.createQuiz(quizData);
    
    // Add assertions as needed
    // For example:
    // await expect(page.locator('text=Quiz created successfully')).toBeVisible();
});
