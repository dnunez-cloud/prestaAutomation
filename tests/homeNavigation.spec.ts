import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/home.page';

test.describe('Home Page Navigation', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.gotoHomePage();
  });

  test('should navigate to home page', async ({ page }) => {
    await expect(page).toHaveURL(process.env.PRESTAURL);
  });

  test('should navigate to account section', async ({ page }) => {
    await homePage.gotoAccountSection();
    // Add an assertion to verify navigation to the account section
    await expect(page).toHaveURL(/.*account/); // Adjust the regex to match the actual URL
  });
});