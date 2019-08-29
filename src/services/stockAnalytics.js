import axios from "axios";

export async function fetchAllStocks() {
  const data = await axios.get("https://localhost:44311/api/stocks");
  return data.data;
}

export function filterStocks(state, value) {
  if (!value) return null;
  return (
    state.instrumentName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.instrumentId.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

export async function fetchStockOverview(instrumentId) {
  const data = await axios.get(
    "https://localhost:44311/api/stocks/" + "overview/" + instrumentId
  );
  return data.data;
}

export async function fetchAMCWiseHoldings(instrumentId) {
  const data = await axios.get(
    "https://localhost:44311/api/stocks/" + "amcholding/" + instrumentId
  );

  return data.data;
}

export default {
  fetchAllStocks,
  fetchStockOverview,
  filterStocks,
  fetchAMCWiseHoldings
};
