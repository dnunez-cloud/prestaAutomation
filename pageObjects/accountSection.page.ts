import { Page } from '@playwright/test';
import { AccountLocators }  from './locators/accountSection.locators';
import { URLS } from '../utils/config';

export class AccountPage extends AccountLocators{
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async gotoAccountPage() {
    await this.page.goto(URLS.ACCOUNTURL);
  }

  async createAccount(firstname: string, lastname: string, email: string, password: string, birthdate: string) {
    await this.maleGender.click();
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.birthdateInput.fill(birthdate);
    await this.agreeCheckbox.check();
    await this.privacyChecbox.check();  
    await this.saveButton.click();
  }

  async checkAccountExists(firstname: string, lastName: string) {
    const fullName = `${firstname} ${lastName}`;
    await this.getUsername(fullName).waitFor({ state: 'visible'});
    const accountExists = await this.getUsername(fullName).isVisible();
    return accountExists;
  }

  async passwordValidationMessage() {
    await this.passwordWarning.waitFor({ state: 'visible'});
    const passwordWarning = await this.passwordWarning.isVisible();
    return passwordWarning;
  }
}