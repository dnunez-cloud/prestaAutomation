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

  async clickSignInButton() {
    await this.signinButton.click();
  }

  async selectSingleProduct(item: string) {
    await this.getProduct(item).click();
  }

  async selectProduct() {
    await this.product1.click();
  }

  async switchLanguage(language: string) {
    await this.languageSelect.selectOption(language);
  }

  async selectScreenDevice(device: string) {
    await this.getScreenDeviceIcon(device).click();
  }

  async checkScreenDevice(device: string) {
    const screenDevice = await this.frameContainer.getAttribute('class');
    return screenDevice;
  }

  async searchProduct(product: string) {
    await this.searchBar.fill(product);
    await this.searchBar.press('Enter');
  }

  async checkSearchedProducts() {
    const productList = await this.noProductFound.isVisible();
    return productList;
  }
}