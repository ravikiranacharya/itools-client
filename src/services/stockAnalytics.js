import httpHelpers from "./utils/httpHelpers";
import config from "../config.json";

const apiEndpoint = `${config.apiUrl}/stocks`;

export async function fetchAllStocks() {
  return httpHelpers.get(apiEndpoint);
}

export function filterStocks(state, value) {
  if (!value) return null;
  return (
    state.instrumentName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.instrumentId.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

export async function fetchStockOverview(instrumentId) {
  return httpHelpers.get(`${apiEndpoint}/overview/${instrumentId}`);
}

export async function fetchAMCWiseHoldings(instrumentId) {
  return httpHelpers.get(`${apiEndpoint}/amcholding/${instrumentId}`);
}

export default {
  fetchAllStocks,
  fetchStockOverview,
  filterStocks,
  fetchAMCWiseHoldings
};
