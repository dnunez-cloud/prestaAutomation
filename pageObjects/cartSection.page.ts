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

  async deleteProduct(itemNumber: string) {
    const deleteIcon = getDeleteIcon(itemNumber).waitFor({ state: 'visible'});
    await this.deleteIcon.click();
  }

  async changeQuantitySingleProduct(itemNumber: string, quantity: string) {
    const quantityInput = getQuantityInput(itemNumber).waitFor({ state: 'visible'});
    await this.quantityInput.click();
    await this.quantityInput.fill(quantity);
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