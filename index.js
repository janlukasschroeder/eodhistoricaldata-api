const fetch = require('./src/fetch');
const config = require('./src/config');

module.exports.setToken = token => {
  config.setToken(token);
};

module.exports.getFundamentals = symbol => {
  const url = config.baseUrl + `/getFundamentals/${symbol}`;
  return fetch(url);
};

module.exports.listSupportedEtfs = () => {
  const url = config.baseUrl + `/listSupportedEtfs`;
  return fetch(url);
};
