require('dotenv').config();

const config = {
  baseUrl: 'https://finance-hub.herokuapp.com/eodhistoricaldata',
  apiToken: process.env.API_TOKEN
};

module.exports = config;

module.exports.setToken = token => {
  if (!config.apiToken && token) {
    config.apiToken = token;
  }
};
