import { Page, Locator } from '@playwright/test';

export class CartLocators {
  readonly page                    :Page;
  readonly productQuantityInput    :Locator;
  readonly proceedToCheckoutButton :Locator;
  readonly zeroItem                :Locator;

  constructor(page: Page) {
    this.page                    = page;
    this.productQuantityInput    = page.locator('input[name="qty"]');
    this.proceedToCheckoutButton = page.locator('a[title="Proceed to checkout"]');
    this.zeroItem                = page.locator('span').filter({hasText: '0 items'});
  }

  //dynamic selectors
  getDeleteIcon(productId: string): Locator {
    return this.page.locator(`a[data-id-product="${productId}"] i[class="material-icons float-xs-left"]`);
  }

  getQuantityInput(productId: string): Locator {
    return this.page.locator(`input[data-id-product="${productId}"]`);
  }
};