import { Page } from '@playwright/test';
import { CheckoutLocators }  from './locators/checkoutSection.locators';

export class CheckoutPage extends CheckoutLocators{
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async fillAddressForm(firstname: string, lastname: string, company: string, vatNumber: string, address: string, address2: string, city: string, postalCode: string, country: string, phone: string) {
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.companyInput.fill(company);
    await this.vatNumberInput.fill(vatNumber);
    await this.addressInput.fill(address);
    await this.address2Input.fill(address2);
    await this.cityInput.fill(city);
    await this.postalCodeInput.fill(postalCode);
    await this.countryDropdown.selectOption({label: country});
    await this.phoneInput.fill(phone);
    await this.invoiceCheckbox.check();
    await this.continueButton.click();
  }

  async fillShippingMethod() {
    await this.shippingMethod.check();
    await this.shipingContinueButton.click();
  }

  async fillPaymentMethod() {
    await this.paymentMethod.check();
    await this.agreeCheckbox.check();
    await this.paymentContinueButton.click();
  }

  async checkConfirmationMessage() {
    return await this.confirmedOrderLabel.isVisible();
  }
};