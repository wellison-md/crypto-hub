const INITIAL_ENDPOINT = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h&locale=en`;

const QUERY_PARAM = '&x_cg_demo_api_key=';
const API_KEY = import.meta.env.API_KEY;

/**
 * Get the tailor endpoint
 * @returns {String} a standard endpoint
 */
export function getEndpoint() {
  if (!API_KEY) {
    return INITIAL_ENDPOINT;
  }
  return `${INITIAL_ENDPOINT}${QUERY_PARAM}${API_KEY}`;
}

export function getCoinEndpoint(id) {
  const COIN_ENDPOINT = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`;

  if (!API_KEY) {
    return COIN_ENDPOINT;
  }
  return `${COIN_ENDPOINT}${QUERY_PARAM}${API_KEY}`;
}
