# eodhistoricaldata.com API (React, Vue, Angular, Node.js)

[eodhistoricaldata.com](https://eodhistoricaldata.com) API wrapper.

Supports client-side (React, Vue, Angular, etc.) and server-side (Node.js).

# Getting Started

- `npm install eodhistoricaldata-api`
- No API token required

# Examples

## Node.js

```js
const api = require('eodhistoricaldata-api');

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
```

## React

Live Demo: https://codesandbox.io/s/znoo29zp74

```js
import api from 'eodhistoricaldata-api';

class Eodhistoricaldata extends React.Component {
  componentDidMount() {
    api.getFundamentals('VGT').then(data => this.setState({ data }));
  }

  render() {
    // ...
    return <pre>{JSON.stringify(this.state.data, null, 1)}</pre>;
  }
}
```

# Documentation

## getHistoricalEodData(options)

Returns historical stock price data.

Accepts an object as input:

- `symbol` (string, required) - any symbol of a company, ETF, or Mutual Fund
- `from` (string, optional) - YYYY-MM-DD format, e.g. `2018-02-01`
- `to` (string, optional) - YYYY-MM-DD format, e.g. `2018-10-01`
- `period` (string, optional) - use `d` for daily, `w` for weekly and `m`
  for monthly prices. By default daily prices will be shown.
- `order` (string, optional): use `a` for ascending dates (from old to new) and `d` for
  descending dates (from new to old). By default dates are shown in ascending order.
- `filter` (string, optional) - use `last_close` to get only the last value,
  or `last_volume`

## getFundamentals(symbol)

- `symbol` - any symbol of a company, ETF, or Mutual Fund

```js
api.getFundamentals('AAPL').then(data => ... )
```

Returns company, ETF, and Mutual Fund fundamentals.

#### Company Fundamentals

- Code and name of the company.
- Exchange, currency, and country information.
- Sector/industry and company description.
- ISIN and CUSIP of the asset.
- General Information:
  - Market Capitalization
  - EBITDA, PE ratio, PEG ratio.
  - Earnings per share (EPS), book value, dividend share, dividend yield.
  - Profit margin, operating margin, return on assets and return on equity.
  - Revenue, revenue per share, gross profit, diluted EPS and quarterly earnings growth (year-over-year).
- Numbers for Valuation
  - Trailing PE, Forward PE
  - Price/Sales
  - Price/Book Ratio
  - Enterprise Value/Revenue
  - Enterprise Value Ebitda
- Technical Indicators
  - Beta
  - 52 Week high/low
  - 50/200 day moving average
  - Shares short, short ratio, short ratio percentage.
- Splits and Dividends
  - The forward annual dividend rate and yield
  - Payout ratio.
  - Dividend date, ex-dividend date.
  - Last split factor and split date.
- Outstanding Shares (only US companies):
  - Date.
  - Amount of outstanding shares on the date in Millions.
- Earnings:
  - History and Trend.
  - Quarterly and Annual.
- Financials
  - Balance Sheet
  - Cash Flow
  - Income Statements.
  - Quarterly and Annual.

#### ETF Fundamentals

- ETF general data.
  - ISIN, Company Name, and URL.
  - Current Yield, Dividend Payments information.
  - Ongoing charge, Average Market Capitalization (in Millions).
  - Net expense ratio and annual holdings turnover.
- Technicals
  - Beta
  - 52 week high/lows
  - 50/200 day moving average
- Breakdowns
  - Market Capitalization.
  - Asset Allocation.
  - World Regions.
  - Sector Weights.
  - Top 10 Holdings.
  - Valuation and Growth Rates for portfolio and compare to the ETF category.
  - Morning Star Data: Ratio, Category_Benchmark, Sustainability Ratio.
  - Performance: Volatility, Expected Returns, Sharp Ratio, Returns YTD/3 years/5 years/10 years.

## listSupportedEtfs()

```js
api.listSupportedEtfs().then(etfs => ... )
```

Returns a list of supported ETFs.

Example:

```js
[
 { 'ETF Code': '3BLR',
    'Exchange': 'LSE',
    'Country': 'UK',
    'ISIN': 'IE00BYTYHS72',
    'ETF Name': 'Boost Brent Oil 3X Leverage Daily ETP' },
  { 'ETF Code': '3BRL',
    'Exchange': 'LSE',
    'Country': 'UK',
    'ISIN': 'IE00BYTYHS72',
    'ETF Name': 'Boost Brent Oil 3X Leverage Daily ETP' },
  ...
]
```
