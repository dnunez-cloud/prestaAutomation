import { Page, Locator } from '@playwright/test';

export class ProductLocators {
  readonly page                    :Page;
  readonly addToCartButton         :Locator;
  readonly confirmationShopAlert   :Locator;
  readonly continueShoppingButton  :Locator;
  readonly proceedToCheckoutButton :Locator;
  readonly productQuantityInput    :Locator;
  
  constructor(page: Page) {
    this.page                    = page;
    this.addToCartButton         = page.locator('button[class="btn btn-primary add-to-cart"]');
    this.confirmationShopAlert   = page.locator('i').filter({hasText: ' Product successfully added to your shopping cart '});
    this.continueShoppingButton  = page.locator('span[title="Continue shopping"]');
    this.proceedToCheckoutButton = page.locator('a[title="Proceed to checkout"]');
    this.productQuantityInput    = page.locator('input[name="qty"]');
  }

  getProduct(item: string) {
    return this.page.locator('a[class="thumbnail product-thumbnail"]').nth(item);
  }
};