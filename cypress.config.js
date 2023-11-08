const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x9x5pm",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    retries: {
      openMode: 1,
      // runMode: 2,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
