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
}