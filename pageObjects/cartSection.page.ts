import { Page } from '@playwright/test';
import { CartLocators }  from './locators/cartSection.locators';

export class CartPage extends CartLocators{
  readonly page: Page;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async changeQuantity(quantity: string) {
    await this.productQuantityInput.fill(quantity);
  }

  async deleteProduct() {
    await this.deleteButton.click();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async zeroItemMessage() {
    await this.zeroItem.waitFor({ state: 'visible'});
    const zeroItemShown = await this.zeroItem.isVisible();
    return zeroItemShown;
  }
}