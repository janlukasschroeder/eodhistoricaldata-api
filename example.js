const api = require('./index');

// get fundamentals of Tesla (symbol: TSLA)
api.getFundamentals('TSLA').then(result => console.log(result));

// list supported ETFs
api.listSupportedEtfs().then(etfs => console.log(etfs));
