const api = require('./index');

// get historical end-of-day stock price of Apple
const options = {
  symbol: 'AAPL', // ticker
  from: '2018-02-01', // YYYY-MM-DD [optional]
  to: '2018-10-10', // YYYY-MM-DD [optional]
  period: 'd', // d = day, w = week, m = month [optional]
  order: 'd' // d = descending, a = ascending [optional]
  // filter: 'last_close' // last_close, last_volume [optional]
};
api.getHistoricalEodData(options).then(prices => console.log(prices));

// get fundamentals of Tesla (symbol: TSLA)
api.getFundamentals('TSLA').then(result => console.log(result));

// list supported ETFs
api.listSupportedEtfs().then(etfs => console.log(etfs));
