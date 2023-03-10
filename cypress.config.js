const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
     require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl:"https://posit.cloud/",
    viewportHeight: 1920,
    viewportWidth: 1080,
    watchForFileChanges: false,
    requestTimeout: 25000,
    defaultCommandTimeout: 10000,

    env:{
      positUserName: "",
      positUserPass: ""
    }

  },
});