import axios from "axios";

export async function fetchAllSectors() {
  const data = await axios.get("https://localhost:44311/api/sectors");
  return data.data;
}

export async function fetchSectorOverview(sectorId) {
  const data = await axios.get(
    "https://localhost:44311/api/sectors/" + "overview/" + sectorId
  );
  return data.data;
}

export async function fetchAMCWiseHoldings(sectorId) {
  const data = await axios.get(
    "https://localhost:44311/api/sectors/" + "amcholding/" + sectorId
  );
  return data.data;
}

export default {
  fetchAllSectors,
  fetchSectorOverview,
  fetchAMCWiseHoldings
};
