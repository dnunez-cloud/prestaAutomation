import { Page, TestInfo } from '@playwright/test';
import * as path from 'path';

export async function captureScreenshotOnFailure(page: Page, testInfo: TestInfo) {
  if (testInfo.status !== testInfo.expectedStatus) {
  const screenshotPath = path.resolve(__dirname, `../../screenshots/${testInfo.title.replace(/\s/g, '_')}.png`);
    await page.screenshot({ path: screenshotPath });
    testInfo.attachments.push({
      name: 'screenshot',
      path: screenshotPath,
      contentType: 'image/png'
    });
  }
}