const api = require('./index');

// insert your API token here
api.setToken('YOUR API TOKEN');

// get fundamentals of Tesla (symbol: TSLA)
api.getFundamentals('TSLA').then(result => console.log(result));

// list supported ETFs
api.listSupportedEtfs().then(etfs => console.log(etfs));
