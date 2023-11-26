const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  numTestsKeptInMemory: 0,
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {},
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
  },
});
