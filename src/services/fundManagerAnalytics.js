import axios from "axios";

const apiUrl = "https://localhost:44311/api/";
const controller = "fundmanagers";

export async function fetchAllFundManagers() {
  const data = await axios.get(`${apiUrl}${controller}`);
  return data.data;
}

export async function fetchFundManagerOverview(fundManagerId) {
  const data = await axios.get(
    `${apiUrl}${controller}/overview/${fundManagerId}`
  );
  return data.data;
}

export async function fetchSchemesManaged(fundManagerId) {
  const data = await axios.get(
    `${apiUrl}${controller}/schemes/${fundManagerId}`
  );
  return data.data;
}

export async function fetchRiskReturnStatistics(fundManagerId) {
  const data = await axios.get(
    `${apiUrl}${controller}/riskreturnstatistics/${fundManagerId}`
  );
  return data.data;
}

export async function fetchPeerSchemePerformance(fundManagerId) {
  const data = await axios.get(
    `${apiUrl}${controller}/peerperformance/${fundManagerId}`
  );
  return data.data;
}

export async function fetchFundManagerPerformanceOverTime(fundManagerId) {
  const data = await axios.get(
    `${apiUrl}${controller}/performance/${fundManagerId}`
  );
  return data.data;
}

export default {
  fetchAllFundManagers,
  fetchFundManagerOverview,
  fetchSchemesManaged,
  fetchRiskReturnStatistics,
  fetchFundManagerPerformanceOverTime
};
