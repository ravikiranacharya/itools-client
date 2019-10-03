export async function fetchAllInstruments() {
  return [
    { instrumentId: 474, instrumentName: "Axis Banking & PSU Debt -G" },
    { instrumentId: 481, instrumentName: "Axis Dynamic Bond -G" },
    { instrumentId: 499, instrumentName: "Axis Midcap -G" },
    { instrumentId: 500, instrumentName: "Axis STP-G" },
    { instrumentId: 501, instrumentName: "Axis Treasury Adv -G" },
    { instrumentId: 504, instrumentName: "Baroda Hybrid Equity -G" },
    {
      instrumentId: 505,
      instrumentName: "Baroda Banking and Financial Services -G"
    },
    {
      instrumentId: 519,
      instrumentName: "Aditya Birla Sun Life Equity Hybrid 95 -G"
    },
    {
      instrumentId: 520,
      instrumentName: "Aditya Birla Sun Life Equity Adv -D"
    },
    {
      instrumentId: 527,
      instrumentName: "Birla Sun Life CEF-Global Multi Commodity-Retail-G "
    },
    {
      instrumentId: 528,
      instrumentName: "Birla Sun Life CEF-Global Precious Metal-Retail-G "
    },
    { instrumentId: 541, instrumentName: "Aditya Birla Sun Life CPOF-9" },
    { instrumentId: 581, instrumentName: "Birla Sun Life FTP-FM-G " }
  ];
}

export async function fetchInstrumentReturns(instrumentId) {
  const allInstruments = allInstrumentReturns();
  const instrumentReturns = allInstruments.filter(
    item =>
      item.instrumentDetails.instrumentId.toString() === instrumentId.toString()
  );
  return instrumentReturns.length > 0 ? instrumentReturns[0] : null;
}

function allInstrumentReturns() {
  return [
    {
      instrumentDetails: {
        instrumentId: 474,
        instrumentName: "Axis Banking & PSU Debt -G",
        categoryId: 59,
        categoryName: "Banking & PSU",
        return: 6,
        fromDate: "21-Jan-2018",
        toDate: "21-Jan-2019"
      },
      instrumentReturns: [
        {
          priceDate: "2019-08-30T00:00:00",
          instrumentPrice: 1824.5499,
          percentageChange: 0.019866379
        },
        {
          priceDate: "2019-09-03T00:00:00",
          instrumentPrice: 1828.311,
          percentageChange: 0.206138511
        },
        {
          priceDate: "2019-09-04T00:00:00",
          instrumentPrice: 1829.3951,
          percentageChange: 0.059295164
        },
        {
          priceDate: "2019-09-05T00:00:00",
          instrumentPrice: 1828.6964,
          percentageChange: -0.038192952
        },
        {
          priceDate: "2019-09-06T00:00:00",
          instrumentPrice: 1828.8398,
          percentageChange: 0.007841652
        },
        {
          priceDate: "2019-09-09T00:00:00",
          instrumentPrice: 1830.9661,
          percentageChange: 0.116264968
        },
        {
          priceDate: "2019-09-11T00:00:00",
          instrumentPrice: 1830.3995,
          percentageChange: -0.030945412
        },
        {
          priceDate: "2019-09-12T00:00:00",
          instrumentPrice: 1830.3457,
          percentageChange: -0.002939249
        },
        {
          priceDate: "2019-09-13T00:00:00",
          instrumentPrice: 1831.0564,
          percentageChange: 0.038828731
        },
        {
          priceDate: "2019-09-16T00:00:00",
          instrumentPrice: 1830.1397,
          percentageChange: -0.050063996
        },
        {
          priceDate: "2019-09-17T00:00:00",
          instrumentPrice: 1829.1811,
          percentageChange: -0.052378515
        },
        {
          priceDate: "2019-09-18T00:00:00",
          instrumentPrice: 1831.8273,
          percentageChange: 0.144665829
        },
        {
          priceDate: "2019-09-19T00:00:00",
          instrumentPrice: 1832.3753,
          percentageChange: 0.029915484
        },
        {
          priceDate: "2019-09-20T00:00:00",
          instrumentPrice: 1826.5692,
          percentageChange: -0.316861944
        },
        {
          priceDate: "2019-09-23T00:00:00",
          instrumentPrice: 1827.5022,
          percentageChange: 0.051079368
        },
        {
          priceDate: "2019-09-24T00:00:00",
          instrumentPrice: 1826.7354,
          percentageChange: -0.04195891
        },
        {
          priceDate: "2019-09-25T00:00:00",
          instrumentPrice: 1827.2674,
          percentageChange: 0.029122992
        },
        {
          priceDate: "2019-09-26T00:00:00",
          instrumentPrice: 1827.6254,
          percentageChange: 0.019592097
        },
        {
          priceDate: "2019-09-27T00:00:00",
          instrumentPrice: 1827.9628,
          percentageChange: 0.018461114
        },
        {
          priceDate: "2019-09-30T00:00:00",
          instrumentPrice: 1830.7111,
          percentageChange: 0.150347699
        }
      ]
    },
    {
      instrumentDetails: {
        instrumentId: 481,
        instrumentName: "Axis Dynamic Bond Fund(G)",
        categoryId: 56,
        categoryName: "Dynamic Bond",
        return: 5.4,
        fromDate: "21-Jan-2018",
        toDate: "21-Jan-2019"
      },
      instrumentReturns: [
        {
          priceDate: "2019-09-03T00:00:00",
          instrumentPrice: 20.0769,
          percentageChange: 0.267187391
        },
        {
          priceDate: "2019-09-25T00:00:00",
          instrumentPrice: 20.0073,
          percentageChange: 0.069522943
        },
        {
          priceDate: "2019-09-24T00:00:00",
          instrumentPrice: 19.9934,
          percentageChange: -0.051490474
        },
        {
          priceDate: "2019-09-23T00:00:00",
          instrumentPrice: 20.0037,
          percentageChange: 0.066031365
        },
        {
          priceDate: "2019-09-20T00:00:00",
          instrumentPrice: 19.9905,
          percentageChange: -0.511118189
        },
        {
          priceDate: "2019-09-19T00:00:00",
          instrumentPrice: 20.0932,
          percentageChange: -0.000995352
        },
        {
          priceDate: "2019-09-18T00:00:00",
          instrumentPrice: 20.0934,
          percentageChange: 0.460972342
        },
        {
          priceDate: "2019-09-17T00:00:00",
          instrumentPrice: 20.0012,
          percentageChange: -0.102887852
        },
        {
          priceDate: "2019-09-16T00:00:00",
          instrumentPrice: 20.0218,
          percentageChange: -0.176992915
        },
        {
          priceDate: "2019-09-13T00:00:00",
          instrumentPrice: 20.0573,
          percentageChange: 0.084829069
        },
        {
          priceDate: "2019-09-12T00:00:00",
          instrumentPrice: 20.0403,
          percentageChange: -0.071803617
        },
        {
          priceDate: "2019-09-11T00:00:00",
          instrumentPrice: 20.0547,
          percentageChange: -0.292836688
        },
        {
          priceDate: "2019-09-09T00:00:00",
          instrumentPrice: 20.1136,
          percentageChange: 0.212246525
        },
        {
          priceDate: "2019-09-06T00:00:00",
          instrumentPrice: 20.071,
          percentageChange: -0.009963633
        },
        {
          priceDate: "2019-09-05T00:00:00",
          instrumentPrice: 20.073,
          percentageChange: -0.060243663
        },
        {
          priceDate: "2019-09-04T00:00:00",
          instrumentPrice: 20.0851,
          percentageChange: 0.040842959
        },
        {
          priceDate: "2019-08-30T00:00:00",
          instrumentPrice: 20.0234,
          percentageChange: 0.071467482
        },
        {
          priceDate: "2019-09-26T00:00:00",
          instrumentPrice: 20.0238,
          percentageChange: 0.082469898
        },
        {
          priceDate: "2019-09-27T00:00:00",
          instrumentPrice: 20.0213,
          percentageChange: -0.012485143
        },
        {
          priceDate: "2019-09-30T00:00:00",
          instrumentPrice: 20.0502,
          percentageChange: 0.144346271
        }
      ]
    }
  ];
}

export default {
  fetchAllInstruments,
  fetchInstrumentReturns
};
