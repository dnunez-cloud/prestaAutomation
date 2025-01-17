import { Page, Locator } from '@playwright/test';

export class ContactLocators {
  readonly page             :Page;
  readonly contactButton    :Locator;
  readonly subjectDropdown  :Locator;
  readonly emailInput       :Locator;
  readonly fileButton       :Locator;
  readonly messageTextarea  :Locator;
  readonly sendButton       :Locator;
  readonly msgConfirmation  :Locator;
  readonly emailWarning     :Locator;
  
  constructor(page: Page) {
    this.page            = page;
    this.contactButton   = page.locator('div[id="contact-link"] > a');
    this.subjectDropdown = page.locator('[name="id_contact"]');
    this.emailInput      = page.locator('[id="email"]');
    this.fileButton      = page.locator('span[class="buttonText"]').filter({hasText: 'Choose file'});
    this.messageTextarea = page.locator('[name="message"]');
    this.sendButton      = page.locator('[name="submitMessage"]');
    this.msgConfirmation = page.locator('li').filter({hasText: 'Your message has been successfully sent to our team.'});
    this.emailWarning    = page.locator('li').filter({hasText: 'Invalid email address.'});
  }

  getOption(option: string) {
    return this.page.locator('option').filter({hasText: option});
  }
}