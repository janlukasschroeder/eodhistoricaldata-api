const fetch = require('./src/fetch');
const csv = require('csvtojson');
const config = require('./src/config');

module.exports.setToken = token => {
  config.setToken(token);
};

module.exports.getFundamentals = symbol => {
  return fetch(symbol);
};

/**
 * List Supported ETFs
 * @returns {*}
 */
module.exports.listSupportedEtfs = () => {
  const csvFilePath = './assets/List_Of_Supported_ETFs.csv';
  return csv().fromFile(csvFilePath);
};

/**
 * Bootstrap module
 */
// const initialise = () => {
//   if (!config.apiToken) {
//     throw new SyntaxError('Please provide your API token');
//   }
// };
//
// initialise();
