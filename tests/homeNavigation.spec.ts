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

  test('should navigate to account section', async ({ page }) => {
    await homePage.gotoAccountSection();
    //await expect(page).toHaveURL(/.*account/); // Adjust the regex to match the actual URL
  });
});