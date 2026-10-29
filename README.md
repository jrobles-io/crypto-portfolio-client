# Crypto Portfolio Manager — Client

React front end for a cryptocurrency portfolio manager, built during the Ironhack Web Development Bootcamp (2024). Users create named portfolios, search coins, add or remove them, and edit or delete portfolios.

The mock REST API lives in [crypto-portfolio-server](https://github.com/jrobles-io/crypto-portfolio-server).

## Stack

- React 18 + Vite
- React Router 6
- Context API for portfolio state (`src/contexts/`)
- Axios for API calls (`src/services/`)
- Tailwind CSS
- Deployed on Netlify

## Features

- Dashboard of all portfolios and their coins
- Coin search and add-to-portfolio
- Create, edit and delete portfolios (full CRUD against the API)

## Pages

| Route | Page |
|---|---|
| `/` | Dashboard |
| `/CreatePortfolio` | New portfolio |
| `/Portfolio/:portfolioId` | Edit portfolio |

## Run locally

```bash
npm install
npm run dev
```

The API URL is set in `src/services/API_URL.js`. Point it at `http://localhost:4000` to use a local server.
