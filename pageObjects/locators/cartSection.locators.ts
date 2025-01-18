import { Page, Locator } from '@playwright/test';

export class CartLocators {
  readonly page                    :Page;
  readonly productQuantityInput    :Locator;
  readonly proceedToCheckoutButton :Locator;
  readonly deleteButton            :Locator;
  readonly zeroItem                :Locator;

  constructor(page: Page) {
    this.page                    = page;
    this.productQuantityInput    = page.locator('input[name="qty"]');
    this.deleteButton            = page.locator('a[title="Delete"]');
    this.proceedToCheckoutButton = page.locator('a[title="Proceed to checkout"]');
    this.zeroItem                = page.locator('span').filter({hasText: '0 items'});
  }
};