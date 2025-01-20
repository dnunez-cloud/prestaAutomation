import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/home.page';
import { URLS } from '../utils/config';

test.describe('Home Page Navigation', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.gotoHomePage();
  });

  test('should navigate to home page', async ({ page }) => {
    await expect(page).toHaveURL(URLS.PRESTAURL);
  });

  //In order to have a complete navigation check, soft assertions are used to not stop the test execution
  test('should navigate to different sections & languages', async ({ page }) => {
    await homePage.switchLanguage('Français');
    await expect.soft(page).toHaveURL(/fr$/); // Check if URL ends with 'fr'
    await homePage.switchLanguage('Español');
    await expect.soft(page).toHaveURL(/es$/); // Check if URL ends with 'es'
    await homePage.selectScreenDevice('tablet');
    const screenDevice = await homePage.checkScreenDevice('tablet');
    await expect.soft(screenDevice).toBeTruthy(); // Check if the page body is set to tablet
    await homePage.switchLanguage('English');
    await homePage.searchProduct('t-shirt');
    const productList = await homePage.checkSearchedProducts();
    await expect.soft(productList).toBeFalsy(); // Check if the product list is empty
  });
});