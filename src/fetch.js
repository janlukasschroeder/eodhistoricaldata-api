const request = require('request');
const assert = require('assert');
const config = require('./config');

module.exports = symbol => {
  assert.notStrictEqual(symbol, undefined);

  const url =
    config.baseUrl + `/fundamentals/${symbol}.US?api_token=` + config.apiToken;

  console.log(url);

  const options = {
    url,
    method: 'GET',
    json: true
  };

  return new Promise((res, rej) => {
    request.get(options, (err, response, body) => {
      if (err) {
        return rej(err);
      }
      res(body);
    });
  });
};
