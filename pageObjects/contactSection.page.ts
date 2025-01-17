import { Page } from '@playwright/test';
import { ContactLocators }  from './locators/contactSection.locators';
import { URLS } from '../utils/config';

export class ContactPage extends ContactLocators{
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async gotoContactPage() {
    await this.page.goto(URLS.CONTACTURL);
  }

  async uploadFile(option: string, email: string, filePath: string, message: string) {
    await this.subjectDropdown.click();
    await this.subjectDropdown.selectOption({ label: option });
    await this.emailInput.fill(email);
    await this.fileButton.click();
    await this.fileButton.setInputFiles(filePath);
    await this.messageTextarea.fill(message);
    await this.sendButton.click();
  }

  async checkUploadedFile() {
    await this.msgConfirmation.waitFor({ state: 'visible'});
    const confirmationShown = await this.msgConfirmation.isVisible();
    return confirmationShown;
  }

  async emailValidationMessage() {
    await this.emailWarning.waitFor({ state: 'visible'});
    const emailmsgWarning = await this.emailWarning.isVisible();
    return emailmsgWarning;
  }
}