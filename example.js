const api = require('./index');

api.setToken('YOUR TOKEN');

api
  .getFundamentals('TSLA')
  .then(result => console.log(JSON.stringify(result, null, 1)));

api.listSupportedEtfs().then(etfs => console.log(etfs));
