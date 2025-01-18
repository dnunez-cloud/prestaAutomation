Install node and vscode
Open the project in vscode
Run command npm install
Run command npx playwright install

The project is divided in 2 main folders:
- pageObejcts: contains all the page objects, such as pages, data, locators, methods
- tests: contains all the tests

PageObject is structured with sections as pages
Locators and Data folders are at the same level as the page objects files

The .env file has to be filled with real data such as urls
To run automated tests, shortcuts are written on package.json file, scripts section

After test execution a html report is stored with the test name on html-reports folder, it can be
triggered with command:

-npm run openReport

Be sure to introduce the file path on the scripts
 "openReport" : "npx open-cli hmtl-reports/{insert folder}/index.html",
