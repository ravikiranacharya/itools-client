import httpHelpers from "./utils/httpHelpers";
import config from "../config.json";

const apiEndpoint = `${config.apiUrl}/stocks`;

export async function fetchAMCUniversalOverview() {
  return {
    reportDate: "06-Oct-2019",
    schemesCount: 1943,
    aum: {
      amount: 2555.2,
      denomination: "('000 Cr.)",
      declarationDate: "30-Aug-2019"
    },
    returns: [
      {
        returnDate: "06-Oct-2019",
        return: 8.01,
        returnInterval: 12
      },
      {
        returnDate: "06-Oct-2019",
        return: 6.41,
        returnInterval: 36
      }
    ]
  };
}
