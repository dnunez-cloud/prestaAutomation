import { Page, Locator } from '@playwright/test';

export class NewsletterLocators {
  readonly page             :Page;
  readonly emailInput       :Locator;
  readonly subscribeButton  :Locator;
  readonly confirmationMsg  :Locator;
  
  constructor(page: Page) {
    this.page            = page;
    this.emailInput  = page.locator('//*[@id="blockEmailSubscription_displayFooterBefore"]/div/div/form/div/div[1]/div[1]/input');
    this.subscribeButton = page.locator('button').filter({hasText: 'Subscribe'});
    this.confirmationMsg = page.locator('p').filter({hasText: 'You have successfully subscribed to this newsletter.'});
  }
}