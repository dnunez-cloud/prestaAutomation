import { Page } from '@playwright/test';
import { SigninLocators }  from './locators/signinSection.locators';

export class SigninPage extends SigninLocators{
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async signIn(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
}