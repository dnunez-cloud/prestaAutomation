import { expect, type Page, type Locator} from '@playwright/test';

export class EvidencePage {
  page :Page;

  constructor(page: Page) {
    this.page = page;
  }

  async generateEvidence(URL,pathResult,fileResult){
    const screenResult = pathResult + fileResult + '.png';
    await this.page.evaluate((URL) => {
      const overlay = document.createElement('div');
      overlay.style.position = 'absolute';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.backgroundColor = 'white';
      overlay.style.padding = '10px';
      overlay.style.fontFamily = 'Arial';
      overlay.style.fontSize = '16px';
      overlay.textContent = URL;
      document.body.appendChild(overlay);
    }, URL);
    await this.page.screenshot({path: screenResult, fullPage: true});
  }
}