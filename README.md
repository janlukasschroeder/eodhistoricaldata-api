# eodhistoricaldata.com API - Node.js

[eodhistoricaldata.com](https://eodhistoricaldata.com) API wrapper

## Getting Started

- `npm install eodhistoricaldata-api`
- Set your API token using `setToken('your token')` (see below)

## Getting Started

### Example

```js
const api = require('eodhistoricaldata-api');

api.setToken('YOUR TOKEN');

api.getFundamentals('AAPL').then(data => console.log(data));

api.listSupportedEtfs().then(etfs => console.log(etfs));
```
