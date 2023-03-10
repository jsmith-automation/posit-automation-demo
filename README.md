# Posit Automation Demo
This project houses the automation framework and test for the Posit take home test. Based on the request:

```  
Next, the team thinks that having automated tests run after each release is highly beneficial. They think that the first test should include:  

Creating a Space  
Creating a Project within the Space  
Verifying that the Posit IDE loads

Please automate this scenario using the tools and language of your choice.  
```
## Table of Contents
- [Built With](#built-with)
- [How to Run](#how-to-run)
- [Framework Breakdown](#framework-breakdown)

<br>

### Built With
- [Cypress](https://www.cypress.io/) - Test framework

<br>


### How to Run

**Local Steps**

1. Run `npm install` after cloning the repo
2. Copy and rename the 'cypress.env.example.json' file to 'cypress.env.json'  
![image](https://user-images.githubusercontent.com/127274537/224429320-d5a9f142-57d5-4ee4-a95b-d872d15ec9ef.png)

3. Add valid login credentials to the pre-existing variables in the env json
4. `npm run cypress:run` to execute the test

<br>

**CI Steps**  
This suite is setup to run in a CI pipeline using GitHub Actions on every push.

In addition, the manual workflow is enabled. This can be triggered by navigating to the 'Posit Cloud Demo' workflow withing GitHub Actions and selecting 'Run workflow.'  
![image](https://user-images.githubusercontent.com/127274537/224429196-84e9e85f-b173-4d0f-8273-6d1c693e56ac.png)


<br>

### Framework Breakdown
An overview of the main areas of the framework.

[GitHub Action](/.github/workflows/main.yml) - Used to execute the suite in a CI pipeline.  
[Test Spec](/cypress/e2e/demoUITests/createProject.cy.js) - Contains the tests being executed.  
[Page Objects](/cypress/pages) - Page elements used in the test files.  
[Custom Commands](/cypress/support/commands.js) - Reusable commands that may not necessisarily belong to a page object.  
[Cypress Config](/cypress.config.js) - Primarily used to adjust default parameters for Cypress.  
[Cypress Env Variables](cypress.env.example.json) - Local is renamed to 'cypress.env.json' and is used to house the login credentials used during the test.  

