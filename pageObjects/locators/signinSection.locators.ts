import { Page, Locator } from '@playwright/test';

export class SigninLocators {
  readonly page          :Page;
  readonly emailInput    :Locator;
  readonly passwordInput :Locator;
  readonly signinButton  :Locator;
  
  constructor(page: Page) {
    this.page         = page;
    this.emailInput   = page.locator('input[id="field-email"]');
    this.passwordInput= page.locator('input[id="field-passwd"]');
    this.signinButton = page.locator('button[id="submit-login"]');
  }
};