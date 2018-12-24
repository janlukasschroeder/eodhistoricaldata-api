const request = require('request');
const assert = require('assert');
const config = require('./config');

module.exports = path => {
  assert.notStrictEqual(path, undefined);

  const combinator = path.includes('?') ? '&' : '?';
  const { baseUrl, apiToken } = config;
  const url = baseUrl + path + combinator + `api_token=` + apiToken;

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
