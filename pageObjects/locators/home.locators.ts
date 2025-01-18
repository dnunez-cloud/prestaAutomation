import { Page, Locator } from '@playwright/test';

export class HomeLocators {
  readonly page              :Page;
  readonly signinButton      :Locator;
  
  constructor(page: Page) {
    this.page              = page;
    this.signinButton      = page.locator('a[title="Log in to your customer account"]');
  }

  //Dynamic selectors
  getOption(option: string) {
    return this.page.getByRole('option', {name: option, exact: true});
  }

  getProduct(item: string) {
    return this.page.locator('a[class="quick-view js-quick-view"]').nth(item);
  }
};