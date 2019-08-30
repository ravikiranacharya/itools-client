import httpHelpers from "./utils/httpHelpers";
import config from "../config.json";

const apiEndpoint = `${config.apiUrl}/fundmanagers`;

export async function fetchAllFundManagers() {
  return httpHelpers.get(apiEndpoint);
}

export async function fetchFundManagerOverview(fundManagerId) {
  return httpHelpers.get(`${apiEndpoint}/overview/${fundManagerId}`);
}

export async function fetchSchemesManaged(fundManagerId) {
  return httpHelpers.get(`${apiEndpoint}/schemes/${fundManagerId}`);
}

export async function fetchRiskReturnStatistics(fundManagerId) {
  return httpHelpers.get(
    `${apiEndpoint}/riskreturnstatistics/${fundManagerId}`
  );
}

export async function fetchPeerSchemePerformance(fundManagerId) {
  return httpHelpers.get(`${apiEndpoint}/peerperformance/${fundManagerId}`);
}

export async function fetchFundManagerPerformanceOverTime(fundManagerId) {
  return httpHelpers.get(`${apiEndpoint}/performance/${fundManagerId}`);
}

export default {
  fetchAllFundManagers,
  fetchFundManagerOverview,
  fetchSchemesManaged,
  fetchRiskReturnStatistics,
  fetchFundManagerPerformanceOverTime
};
