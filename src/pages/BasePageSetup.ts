import { Page, Locator } from '@playwright/test';

export class BasePageSetup {
  protected page: Page;
  protected businessEmail: Locator;
  protected password: Locator;
  protected signInButton: Locator;
  protected signOutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.businessEmail = this.page.locator("//input[@name='user_name']");
    this.password = this.page.locator("//input[@type='password']");
    this.signInButton = this.page.locator("//button[@type='submit']");
    this.signOutButton = this.page.locator("//button[text()='Sign Out']");
  }

  getPage() {
    return this.page;
  }

  async login(email: string, password: string) {
    await this.businessEmail.fill(email);
    await this.password.fill(password);
    await this.signInButton.click();
    await this.page.waitForURL(/.*homepage.*/);
  }

  async logout() {
    await this.signOutButton.click();
  }

  async goto() {
    await this.page.goto('https://qahris.peoplehum.org/portal/login');
  }    
}