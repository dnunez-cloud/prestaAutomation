import { Page } from '@playwright/test';
import { NewsletterLocators }  from './locators/newsletterSection.locators';

export class NewsletterPage extends NewsletterLocators{
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async subscribeNewsletter(email: string) {
    await this.emailInput.scrollIntoViewIfNeeded();
    await this.emailInput.waitFor({ state: 'visible' });
    await this.emailInput.fill(email);
    await this.subscribeButton.click();
  }

  async checkConfirmationMessage() {
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