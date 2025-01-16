import { Page, Locator } from '@playwright/test';

export class HomeLocators {
  readonly page                    :Page;
  readonly clientsButton           :Locator;
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
    this.clientsButton        = page.locator('li').filter({hasText: 'Clients'});
    this.addClientButton      = page.getByRole('button', {name: 'Add Client'});
    this.name                 = page.locator('[name="basicInformation.name"]');
    this.clientCode           = page.locator('[name="basicInformation.code"]');
    this.organizationType     = page.locator('[id="select-basicInformation.organizationTypeId"]');
    this.sizeDropdown         = page.locator('[id="select-basicInformation.sizeTypeId"]');
    this.taxIdType            = page.locator('[id="select-basicInformation.taxIDTypeId"]');
    this.taxId                = page.locator('[name="basicInformation.taxId"]');
    this.statusDropdown       = page.locator('[id="select-clientStatus.clientStatusId"]');
    this.divisionsSwitch      = page.locator('[name="clientStructure.[4].isActive"]');
    this.addClientSaveButton  = page.locator('#save');
    this.cancelButton         = page.locator('#cancell');
    this.createButton         = page.getByRole('button', { name: 'Yes, Create' });
    this.searchBar            = page.locator('[aria-label="Search"]').nth(1);
    this.duplicatesLabel      = page.locator('p').filter({hasText: 'Possible Duplicates'});
  }

  //Dynamic selectors
  getOption(option: string) {
    return this.page.getByRole('option', {name: option, exact: true});
  }

  getClientFound(clientSearched: string) {
    return this.page.locator('td').filter({hasText: clientSearched});
  }

  getClientHeader(clientHeader: string) {
    return this.page.locator('p').filter({hasText: clientHeader});
  }
};