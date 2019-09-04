export async function fetchAllSchemes() {
  return [
    { schemeId: 1, schemeName: "HDFC Hybrid Debt - G" },
    { schemeId: 2, schemeName: "HDFC LargeCap - G" },
    { schemeId: 3, schemeName: "HDFC Debt - G" }
  ];
}

export default {
  fetchAllSchemes
};
