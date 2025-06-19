import { Page } from '@playwright/test';
import { BaseSelectors } from '../selectors/base_selectors';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await this.page.fill(BaseSelectors.businessEmail, email);
    await this.page.fill(BaseSelectors.password, password);
    await this.page.click(BaseSelectors.signInButton);
    await this.page.waitForURL(/.*homepage.*/);
  }
}