import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/home.page';
import { SigninPage } from '../pageObjects/signinSection.page';
import { ProductPage } from '../pageObjects/productSection.page';
import { CartPage } from '../pageObjects/cartSection.page';
import { CheckoutPage } from '../pageObjects/checkoutSection.page';

test.describe('submit order tests', () => {
  let homePage     : HomePage;
  let signinPage   : SigninPage;
  let productPage  : ProductPage;
  let cartPage     : CartPage;
  let checkoutPage : CheckoutPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signinPage = new SigninPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await homePage.gotoHomePage();
    await homePage.clickSignInButton();
    await signinPage.signIn('johnd@gmail.com', 'amatista88');
  });

  test('should submit order with 1 product', async ({ page }) => {
    await homePage.selectSingleProduct('0');
    await productPage.addAndProceed();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillAddressForm('John', 'Doe', 'Doe Inc', '123456', '123 Main St', 'Apt 1', 'Miami', '33101', 'United States', '1234567890');
    await checkoutPage.fillShippingMethod();
    await checkoutPage.fillPaymentMethod();
    const messageShown = await checkoutPage.checkConfirmationMessage();
    expect(messageShown).toBeTruthy();
  });

  test('should not submit order with because there are any product', async ({ page }) => {
    await homePage.selectSingleProduct('0');
    await productPage.addAndProceed();
    await cartPage.deleteProduct();
    const messageShown = await checkoutPage.zeroItemMessage();
    expect(messageShown).toBeTruthy();
  });
});