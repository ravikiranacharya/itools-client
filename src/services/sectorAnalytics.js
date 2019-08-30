import httpHelpers from "./utils/httpHelpers";
import config from "../config.json";

const apiEndpoint = `${config.apiUrl}/sectors`;

export async function fetchAllSectors() {
  return httpHelpers.get(apiEndpoint);
}

export async function fetchSectorOverview(sectorId) {
  return httpHelpers.get(`${apiEndpoint}/overview/${sectorId}`);
}

export async function fetchAMCWiseHoldings(sectorId) {
  return httpHelpers.get(`${apiEndpoint}/amcholding/${sectorId}`);
}

export default {
  fetchAllSectors,
  fetchSectorOverview,
  fetchAMCWiseHoldings
};
