import { Page } from '@playwright/test';
import { ProductLocators }  from './locators/productSection.locators';

export class ProductPage extends ProductLocators{
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async addAndProceed() {
    await this.addToCartButton.click();
    await this.proceedToCheckoutButton.click();
  }

  async addAndContinueShopping() {
    await this.addToCartButton.click();
    await this.continueShoppingButton.click();
    await this.backToHomeButton.click();
  }

  async changeProductQuantity(quantity: string) {
    await this.productQuantityInput.fill(quantity);
    await this.addToCartButton.click();
  }

  async checkStockMessage() {
    return await this.notEnoughStockAlert.isVisible();
  }
}