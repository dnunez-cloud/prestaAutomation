import { Page, Locator } from '@playwright/test';

export class CheckoutLocators {
  readonly page                    :Page;
  readonly aliasinput              :Locator;
  readonly firstNameInput          :Locator;
  readonly lastNameInput           :Locator;
  readonly companyInput            :Locator;
  readonly vatNumberInput          :Locator;
  readonly addressInput            :Locator;
  readonly address2Input           :Locator;
  readonly cityInput               :Locator;
  readonly postalCodeInput         :Locator;
  readonly countryDropdown         :Locator;
  readonly phoneInput              :Locator;
  readonly invoiceCheckbox         :Locator;
  readonly continueButton          :Locator;
  readonly shippingMethod          :Locator;
  readonly shipingContinueButton   :Locator;
  readonly paymentMethod           :Locator;
  readonly agreeCheckbox           :Locator;
  readonly paymentContinueButton   :Locator;
  readonly confirmedOrderLabel     :Locator;
  
  constructor(page: Page) {
    this.page                    = page;
    this.aliasinput              = page.locator('input[name="alias"]');
    this.firstNameInput          = page.locator('input[name="firstname"]');
    this.lastNameInput           = page.locator('input[name="lastname"]');
    this.companyInput            = page.locator('input[name="company"]');
    this.vatNumberInput          = page.locator('input[name="vat_number"]');
    this.addressInput            = page.locator('input[name="address1"]');
    this.address2Input           = page.locator('input[name="address2"]');
    this.cityInput               = page.locator('input[name="city"]');
    this.postalCodeInput         = page.locator('input[name="postcode"]');
    this.countryDropdown         = page.locator('select[name="id_country"]');
    this.phoneInput              = page.locator('input[name="phone"]');
    this.invoiceCheckbox         = page.locator('input[name="invoice"]');
    this.continueButton          = page.locator('button[name="confirm-addresses"]');
    this.shippingMethod          = page.locator('input[name="delivery_option[1]"]');
    this.shipingContinueButton   = page.locator('button[name="confirmDeliveryOption"]');
    this.paymentMethod           = page.locator('input[name="payment-option"]');
    this.agreeCheckbox           = page.locator('input[name="conditions_to_approve[terms-and-conditions]"]');
    this.paymentContinueButton   = page.locator('button[name="confirmOrder"]');
    this.confirmedOrderLabel     = page.locator('h3').filter({hasText: 'Your order is confirmed.'});
  }
};