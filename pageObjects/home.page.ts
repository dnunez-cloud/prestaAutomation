import { Page } from '@playwright/test';
import { HomeLocators }  from './locators/home.locators';
import { URLS } from '../utils/config';

export class HomePage extends HomeLocators{
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  
  async goto(url: string) {
    await this.page.goto(url);
  }

  async waitForURL(url: string) {
    await this.page.waitForURL(url);
  }

  async getCurrentURL(): Promise<string> {
    return this.page.url();
  }

  async gotoHomePage() {
    await this.page.goto(URLS.PRESTAURL);
  }

  async gotoAccountSection(){
    await this.createAccountLink.waitFor({ state: 'visible'});
    await this.createAccountLink.click();
  }
}