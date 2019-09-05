export async function fetchAllInstruments() {
  return [
    { instrumentId: 1, instrumentName: "HDFC Hybrid Debt - G" },
    { instrumentId: 2, instrumentName: "HDFC  Inc -D Reinvest" },
    {
      instrumentId: 3,
      instrumentName: "Aditya Birla Sun Life Tax Relief 96-DR-Dir"
    },
    { instrumentId: 4, instrumentName: "ICICI Prudential AA -D" },
    { instrumentId: 5, instrumentName: "DHFL Pramerica Arbi -Annual D-Dir" },
    { instrumentId: 6, instrumentName: "HDFC Top 100 - G" }
  ];
}

export async function fetchInstrumentReturns(instrumentId) {
  return {
    instrumentReturns: {
      instrumentId: 1,
      instrumentName: "HDFC Hybrid Debt - G",
      categoryId: 1,
      categoryName: "Cons. Hybrid",
      return: 6.35
    },
    instrumentReturns: []
  };
}

export default {
  fetchAllInstruments,
  fetchInstrumentReturns
};
