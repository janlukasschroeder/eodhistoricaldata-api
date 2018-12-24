const fetch = require('./src/fetch');
const config = require('./src/config');

module.exports.setToken = token => {
  config.setToken(token);
};

module.exports.getFundamentals = symbol => {
  const path = `/getFundamentals/${symbol}`;
  return fetch(path);
};

module.exports.getHistoricalEodData = symbol => {
  const path = `/getHistoricalEodData/${symbol}`;
  return fetch(path);
};

module.exports.getHistoricalEodData = ({
  symbol,
  from,
  to,
  period,
  order,
  filter
}) => {
  const path =
    `/getHistoricalEodData/${symbol}?fmt=json` +
    (from ? `&from=${from}` : '') +
    (to ? `&to=${to}` : '') +
    (period ? `&period=${period}` : '') +
    (order ? `&order=${order}` : '') +
    (filter ? `&filter=${filter}` : '');
  return fetch(path);
};

module.exports.listSupportedEtfs = () => {
  const path = `/listSupportedEtfs`;
  return fetch(path);
};
