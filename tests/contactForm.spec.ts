import { test, expect } from '@playwright/test';
import { ContactPage } from '../pageObjects/contactSection.page';
import { PATHS } from '../utils/config';

test.describe('Contact tests', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.gotoContactPage();
  });

  test('should upload a pdf on contact form', async ({ page }) => {
    await contactPage.uploadFile('Customer service', 'sd@gmail.com', PATHS.FILEPATH, 'This is a test message');
    const fileUploaded = await contactPage.checkUploadedFile();
    expect(fileUploaded).toBeTruthy();
  });

  test('should not send contact and should trigger email warning message', async ({ page }) => {
    await contactPage.uploadFile('Customer service', '', PATHS.FILEPATH, 'This is a test message');
    const emailValidationShown = await contactPage.emailValidationMessage();
    expect(emailValidationShown).toBeTruthy();
  });
});