const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
      "reportDir": "cypress/results",
      "overwrite": false,
      "html": true,
      "json": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://learn.cypress.io/testing-your-first-application",
    experimentalStudio: true,
    specPattern: 'cypress/e2e/1-testing-your-first-app/*.cy.{js,jsx,ts,tsx}',
  },
});
