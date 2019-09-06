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
    { instrumentId: 6, instrumentName: "Reliance Inc - G" }
  ];
}

export async function fetchInstrumentReturns(instrumentId) {
  const allInstruments = allInstrumentReturns();
  const instrumentReturns = allInstruments.filter(
    item => item.instrumentDetails.instrumentId === instrumentId
  );
  return instrumentReturns.length > 0 ? instrumentReturns[0] : null;
}

function allInstrumentReturns() {
  return [
    {
      instrumentDetails: {
        instrumentId: 1,
        instrumentName: "HDFC Hybrid Debt - G",
        categoryId: 1,
        categoryName: "Cons. Hybrid",
        return: 6.35,
        fromDate: "21-Jan-2018",
        toDate: "21-Jan-2019"
      },
      instrumentReturns: []
    },
    {
      instrumentDetails: {
        instrumentId: 2,
        instrumentName: "HDFC  Inc -D Reinvest",
        categoryId: 2,
        categoryName: "Small Cap",
        return: -4.5,
        fromDate: "21-Jan-2018",
        toDate: "21-Jan-2019"
      },
      instrumentReturns: []
    },
    {
      instrumentDetails: {
        instrumentId: 3,
        instrumentName: "Aditya Birla Sun Life Tax Relief 96-DR-Dir",
        categoryId: 3,
        categoryName: "ELSS",
        return: 2.45
      },
      instrumentReturns: []
    },
    {
      instrumentDetails: {
        instrumentId: 4,
        instrumentName: "ICICI Prudential AA -D",
        categoryId: 4,
        categoryName: "FoFs(Domestic)",
        return: 5.64
      },
      instrumentReturns: []
    },
    {
      instrumentDetails: {
        instrumentId: 5,
        instrumentName: "DHFL Pramerica Arbi -Annual D-Dir",
        categoryId: 5,
        categoryName: "Arbitrage",
        return: 6.35
      },
      instrumentReturns: []
    },
    {
      instrumentDetails: {
        instrumentId: 6,
        instrumentName: "Reliance Inc - G",
        categoryId: 6,
        categoryName: "Medium Long-Dur",
        return: -8.35
      },
      instrumentReturns: []
    }
  ];
}

export default {
  fetchAllInstruments,
  fetchInstrumentReturns
};
