import { Page, Locator } from '@playwright/test';

export class HomeLocators {
  readonly page                    :Page;
  readonly createAccountLink       :Locator;
  readonly addClientButton         :Locator;
  readonly name                    :Locator;
  readonly clientCode              :Locator;
  readonly organizationType        :Locator;
  readonly sizeDropdown            :Locator;
  readonly taxIdType               :Locator;
  readonly taxId                   :Locator;
  readonly statusDropdown          :Locator;
  readonly divisionsSwitch         :Locator;
  readonly addClientSaveButton     :Locator;
  readonly cancelButton            :Locator;
  readonly createButton            :Locator;
  readonly searchBar               :Locator;
  readonly duplicatesLabel         :Locator;
  
  constructor(page: Page) {
    this.page                 = page;
    this.createAccountLink    = page.locator('//*[@id="footer_account_list"]/li[3]');

    this.addClientButton      = page.getByRole('button', {name: 'Add Client'});
    this.name                 = page.locator('[name="basicInformation.name"]');
    this.sizeDropdown         = page.locator('[id="select-basicInformation.sizeTypeId"]');
    this.addClientSaveButton  = page.locator('#save');
    this.cancelButton         = page.locator('#cancell');
    this.searchBar            = page.locator('[aria-label="Search"]').nth(1);
    this.duplicatesLabel      = page.locator('p').filter({hasText: 'Possible Duplicates'});
  }

  //Dynamic selectors
  getOption(option: string) {
    return this.page.getByRole('option', {name: option, exact: true});
  }
};