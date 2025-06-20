import { test as base } from '@playwright/test';
import { BasePageSetup } from './BasePageSetup';

type MyFixtures = {
  basePageSetup: BasePageSetup;
  startTime: Date;
};

const test = base.extend<MyFixtures>({
  basePageSetup: async ({ page }, use) => {
    const basePageSetup = new BasePageSetup(page);
    await basePageSetup.goto();
    await basePageSetup.login("payrollautomationgreythrtest@gmail.com", "Test@123");
    await use(basePageSetup);
    // await basePageSetup.logout();
  }
});
let startTime: Date;

test.beforeEach(async () => {
  startTime = new Date();
  console.log(`Test started at: ${startTime.toISOString()}`);
});


test.afterEach(async ({}, testInfo) => {
  const endTime = new Date();
  const duration = (endTime.getTime() - startTime.getTime()) / 1000;

  console.log(`Test ended at: ${endTime.toISOString()}`);
  console.log(`Duration: ${duration.toFixed(2)} seconds`);

  await testInfo.attach('timing-info', {
    body: JSON.stringify({
      test: testInfo.title,
      startedAt: startTime,
      endedAt: endTime,
      durationInSeconds: duration.toFixed(2),
    }, null, 2),
    contentType: 'application/json'
  });
});

export { test };
export const expect = base.expect;
