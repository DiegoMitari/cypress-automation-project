const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  "retries": {
    "openMode": 2,   // Número de intentos para comandos de apertura (visit, get, etc.)
    "runMode": 3     // Número de intentos para comandos durante la ejecución de la prueba
  } ,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
