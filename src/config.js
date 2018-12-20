require('dotenv').config();

const config = {
  baseUrl: 'https://eodhistoricaldata.com/api',
  paths: {
    fundamentals: '/fundamentals'
  },
  apiToken: process.env.API_TOKEN
};

module.exports = config;

module.exports.setToken = token => {
  if (!config.apiToken && token) {
    config.apiToken = token;
  }
};
