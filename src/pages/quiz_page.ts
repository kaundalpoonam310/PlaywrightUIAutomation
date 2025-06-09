import { Page } from '@playwright/test';
import { QuizSelectors } from '../selectors/quiz_selectors';
import { BasePage } from './base_page';

export interface QuizData {
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

export class QuizPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToQuiz() {
        // Wait for Engage pillar to be clickable and hover
        await this.waitForElement(QuizSelectors.engagePillar);
        await this.page.hover(QuizSelectors.engagePillar);

        // Wait for Quiz menu item to be visible after hover and click
        await this.waitForElement(QuizSelectors.quizMenuItem);
        await this.page.click(QuizSelectors.quizMenuItem);

        // Wait for navigation to quiz page
        await this.waitForURL('quiz');

        // Wait for and click on Quiz List
        await this.waitForElement(QuizSelectors.quizList);
        await this.page.click(QuizSelectors.quizList);
        await this.waitForLoader();
    }

    async createQuiz(quiz: QuizData) {
        // Start quiz creation
        await this.page.click(QuizSelectors.newQuizButton);
        await this.page.click(QuizSelectors.proceedButton);

        // Fill basic quiz details
        await this.page.fill(QuizSelectors.quizNameInput, quiz.quizName);
        await this.page.fill(QuizSelectors.quizDescriptionInput, quiz.quizDescription);
        
        // Select template
        await this.page.getByText('Type ahead to select a quiz').click();
        await this.page.getByRole('searchbox', { name: 'Select box' }).fill('Basic Template');
        await this.page.getByText('Basic Template').click();

        // Set dates and times
        await this.page.locator('input[name="opening_date"]').click();
  await this.page.getByRole('button', { name: '.' }).click();
  await this.page.locator('#time-picker').click();
  await this.page.getByRole('button', { name: 'Now' }).click();
  await this.page.locator('input[name="end_date"]').click();
  await this.page.getByRole('button', { name: '30' }).click();
  await this.page.locator('#end_time_picker').click();
  await this.page.getByRole('button', { name: 'Now' }).click();
  await this.page.getByText('Yes').first().click();
  await this.page.locator('input[name="hours"]').click();
  await this.page.locator('input[name="hours"]').fill('1');
  await this.page.locator('input[name="minutes"]').click();
  await this.page.locator('input[name="minutes"]').fill('00');
  await this.page.locator('input[name="seconds"]').click();
  await this.page.locator('input[name="seconds"]').fill('0');
  await this.page.getByText('Quiz Settings Enter the').click();
  await this.page.locator('input[name="display_answer_input"]').click();
  await this.page.locator('input[name="display_answer_input"]').fill('80');
  await this.page.locator('input[name="number_of_attempt"]').click();
  await this.page.getByRole('combobox', { name: 'Select box' }).click();
  await this.page.getByRole('combobox', { name: 'Select box' }).fill('google user 1');
  await this.page.getByText('g1 Google User 1', { exact: true }).click();
  await this.page.getByRole('button', { name: 'Create' }).click();
    }

    private async setDate(date: string) {
        // Implement date selection logic based on your calendar control
        // This will need to be customized based on your calendar component
    }

    private async setTime(time: string) {
        const [hours, minutes, seconds] = time.split(':');
        // Implement time selection logic based on your time picker
        // This will need to be customized based on your time picker component
    }

    private async handlePeopleView(quiz: QuizData) {
        await this.page.click(QuizSelectors.peopleViewLabel);
        
        if (quiz.addUsers) {
            for (const user of quiz.addUsers) {
                await this.page.click(QuizSelectors.searchPeopleInput);
                await this.page.fill(QuizSelectors.searchPeopleInput, user);
                await this.page.click(QuizSelectors.spanByText(user));
            }
        }
    }

    private async handleTeamView(quiz: QuizData) {
        await this.page.click(QuizSelectors.teamViewLabel);
        await this.page.click(QuizSelectors.selectTypeSpan);
        await this.page.click(QuizSelectors.typeDropdown);

        if (quiz.filterType) {
            for (const type of quiz.filterType) {
                await this.page.fill(QuizSelectors.searchJobFunctionInput, type);
                await this.page.click(QuizSelectors.spanByText(type));
            }
        }

        if (quiz.addUsers) {
            for (const user of quiz.addUsers) {
                await this.page.click(QuizSelectors.searchPeopleInput);
                await this.page.fill(QuizSelectors.searchPeopleInput, user);
                await this.page.click(QuizSelectors.spanByText(user));
            }
        }

        if (quiz.addTeams) {
            for (const team of quiz.addTeams) {
                await this.page.click(QuizSelectors.searchTeamInput);
                await this.page.fill(QuizSelectors.searchTeamInput, team);
                await this.page.click(QuizSelectors.spanByText(team));
            }
        }
    }
}
