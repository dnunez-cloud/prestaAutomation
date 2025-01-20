import { Page, Locator } from '@playwright/test';

export class HomeLocators {
  readonly page              :Page;
  readonly signinButton      :Locator;
  readonly languageSelect    :Locator;
  readonly frameContainer    :Locator;
  readonly searchBar         :Locator;
  readonly noProductFound    :Locator;
  
  constructor(page: Page) {
    this.page              = page;
    this.signinButton      = page.locator('a[title="Log in to your customer account"]');
    this.languageSelect    = page.locator('select[aria-labelledby="language-selector-label"]');
    this.frameContainer    = page.locator('div[id="iframe-container"]');
    this.searchBar         = page.locator('input[aria-label="Search"]');
    this.noProductFound    = page.locator('h4').filter({hasText: 'No matches were found for your search'});
  }

  //Dynamic selectors
  getOption(option: string) {
    return this.page.getByRole('option', {name: option, exact: true});
  }

  getProduct(item: string) {
    return this.page.locator('a[class="quick-view js-quick-view"]').nth(item);
  }

  getScreenDeviceIcon(device: string) {
    return this.page.locator('i').filter('i[class="material-symbols-outlined"]', {text: device});
  }
};