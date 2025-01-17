import { Page, Locator } from '@playwright/test';

export class AccountLocators {
  readonly page             :Page;
  readonly maleGender       :Locator;
  readonly femaleGender     :Locator;
  readonly firstNameInput   :Locator;
  readonly lastNameInput    :Locator;
  readonly emailInput       :Locator;
  readonly passwordInput    :Locator;
  readonly passwordWarning  :Locator;
  readonly birthdateInput   :Locator;
  readonly agreeCheckbox    :Locator;
  readonly privacyChecbox   :Locator;
  readonly saveButton       :Locator;
  
  constructor(page: Page) {
    this.page            = page;
    this.maleGender      = page.locator('[id="field-id_gender-1"]');
    this.femaleGender    = page.locator('[id="field-id_gender-2"]');
    this.firstNameInput  = page.locator('[name="firstname"]');
    this.lastNameInput   = page.locator('[name="lastname"]');
    this.emailInput      = page.locator('[id="field-email"]');
    this.passwordInput   = page.locator('[name="password"]');
    this.passwordWarning = page.locator('li').filter({hasText: 'The minimum score must be: Strong'});
    this.birthdateInput  = page.locator('[name="birthday"]');
    this.agreeCheckbox   = page.locator('[name="psgdpr"]');
    this.privacyChecbox  = page.locator('[name="customer_privacy"]');
    this.saveButton      = page.locator('[class="btn btn-primary form-control-submit float-xs-right"]');
  }

  getUsername(username: string) {
    return this.page.locator('span').filter({hasText: username});
  }
}