import { expect, type Page, type Locator } from '@playwright/test';
import * as fs from 'fs';

export class JsonPage {
  page                :Page;
  userForm_lctr       :Locator;
  passForm_lctr       :Locator;
  loginButton_lctr    :Locator;
  subEnv_lctr         :Locator;

  pendingTab_lctr     :Locator;
  claimButton_lctr    :Locator;
  jsonPath            :String;
  
  constructor(page: Page) {
    this.page = page;
  }
  
  async readJsonFile(jsonPath) {
    let jsonData;
    const posLastSlash  = jsonPath.lastIndexOf('/');
    const fileName      = jsonPath.slice(posLastSlash+1);
    try{
        const jsonWCclaimContent    = fs.readFileSync(jsonPath, 'utf8');
        jsonData                    = JSON.parse(jsonWCclaimContent);
    }catch(error){
        console.error('Error reading ' + fileName, error.message); 
    }
    return jsonData;
  }

  async writeJsonFile(jsonData,jsonPath) {
    const posLastSlash  = jsonPath.lastIndexOf('/');
    const fileName      = jsonPath.slice(posLastSlash+1);
    try {
        const jsonStr = JSON.stringify(jsonData, null, 2);
        fs.writeFileSync(jsonPath, jsonStr, 'utf-8');
        console.log(fileName + ' was updated successfuly.');
    } catch (error) {
        console.error('Error reading ' + fileName, error.message);
    }
  }
};