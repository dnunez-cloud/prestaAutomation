import { test, expect } from '@playwright/test';
import { AccountPage } from '../pageObjects/accountSection.page';

test.describe('Account tests', () => {
  let accountPage: AccountPage;

  test.beforeEach(async ({ page }) => {
    accountPage = new AccountPage(page);
    await accountPage.gotoAccountPage();
  });

  test('should create a new account', async ({ page }) => {
    await accountPage.createAccount('John', 'Doe', 'johnd@gmail.com', 'amatista88', '10/10/1990');
    const accountExists = await accountPage.checkAccountExists('John', 'Doe');
    expect(accountExists).toBeTruthy();
  });

  test('should not create account and should trigger password warning message', async ({ page }) => {
    await accountPage.createAccount('Jane', 'Doe', 'janed@gmail.com', 'password123', '11/11/1995');
    const passwordValidationShown = await accountPage.passwordValidationMessage();
    expect(passwordValidationShown).toBeTruthy();
  });
});