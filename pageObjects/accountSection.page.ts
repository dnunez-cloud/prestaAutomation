import { Page } from '@playwright/test';

export class AccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createAccount(email: string, password: string) {
    await this.page.fill('#email', email);
    await this.page.fill('#password', password);
    await this.page.click('text=Create account');
  }
}