import { Page } from '@playwright/test';
import { HomeLocators }  from './locators/home.locators';

export class HomePage extends HomeLocators{
  readonly page: Page;

  constructor(page: Page) {
    super(page);
  }

  async gotoHomePage() {
    await this.page.goto(process.env.PRESTAURL);
  }

  async gotoAccountSection(){
    await this.clientsButton.click();
  }
}