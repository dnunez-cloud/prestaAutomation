import { test } from '@playwright/test';
import { HomePage } from '../pageObjects/homePage';
import { AccountPage } from '../pageObjects/accountPage';

test('Create an account in the Shop', async ({ page }) => {
  const homePage = new HomePage(page);
  const accountPage = new AccountPage(page);

  await homePage.navigate();
  await homePage.goToAccountPage();
  await accountPage.createAccount('test@example.com', 'password123');
});