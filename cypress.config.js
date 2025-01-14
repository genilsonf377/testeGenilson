const cypressMochawesomeReporter = require('cypress-mochawesome-reporter/plugin');

module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false,
    embeddedScreenshots: true, // Adiciona screenshots ao relatório
    inlineAssets: true // Inclui assets inline no relatório para visualização
  },
  video: true,
  retries: 3,
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://planoaliados.com.br/portal',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
