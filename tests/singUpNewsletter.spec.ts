import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/home.page';
import { NewsletterPage } from '../pageObjects/newsletterSection.page';

test.describe('Newsletter tests', () => {
  let homePage: HomePage;
  let newsletterPage: NewsletterPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    newsletterPage = new NewsletterPage(page);
    await homePage.gotoHomePage();
  });

  test('should subscribe to newsletter', async ({ page }) => {
    await newsletterPage.subscribeNewsletter('johnd@gmail.com');
    const messageShown = await newsletterPage.checkConfirmationMessage();
    expect(messageShown).toBeTruthy();
  });

  test('should not subscribe and should trigger email warning message', async ({ page }) => {
    await newsletterPage.subscribeNewsletter('janed');
    const emailValidationShown = await accountPage.emailValidationMessage();
    expect(emailValidationShown).toBeTruthy();
  });
});