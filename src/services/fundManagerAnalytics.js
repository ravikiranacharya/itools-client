import httpHelpers from "./utils/httpHelpers";
import config from "../config.json";

const apiEndpoint = `${config.apiUrl}/fundmanagers`;

export async function fetchAllFundManagers() {
  // return httpHelpers.get(apiEndpoint);
  return [
    {
      fundManagerId: 1,
      fundManagerName: "Ravi Kiran"
    },
    {
      fundManagerId: 2,
      fundManagerName: "Ravi Acharya"
    },
    {
      fundManagerId: 3,
      fundManagerName: "Ravi Mudumbai"
    }
  ];
}

export async function fetchFundManagerOverview(fundManagerId) {
  // return httpHelpers.get(`${apiEndpoint}/overview/${fundManagerId}`);
  return {
    fundManagerId: "1",
    fundManagerName: "Ravi Kiran",
    schemesCount: 9,
    totalAUM: {
      amount: 55959,
      denomination: "(Cr.)"
    },
    return1y: 5.39,
    volatility: 13.29
  };
}

export async function fetchSchemesManaged(fundManagerId) {
  // return httpHelpers.get(`${apiEndpoint}/schemes/${fundManagerId}`);
  return [
    {
      schemeId: "975",
      schemeName: "HDFC Multi-Asset -G",
      categoryId: "1",
      categoryName: "Multi Cap",
      schemeAUM: "165.8"
    },
    {
      schemeId: "977",
      schemeName: "HDFC Hybrid Equity -G",
      categoryId: "2",
      categoryName: "Large Cap",
      schemeAUM: "21150.8"
    },
    {
      schemeId: "16185",
      schemeName: "HDFC Retirement Savings -Equity-Reg-G",
      categoryId: "2",
      categoryName: "Large Cap",
      schemeAUM: "711"
    },
    {
      schemeId: "16187",
      schemeName: "HDFC Retirement Savings -Hybrid-Equity-Reg-G",
      categoryId: "2",
      categoryName: "Large Cap",
      schemeAUM: "305.8"
    },
    {
      schemeId: "972",
      schemeName: "HDFC Mid-Cap Opp -G",
      categoryId: "3",
      categoryName: "Mid Cap",
      schemeAUM: "20893.2"
    },
    {
      schemeId: "969",
      schemeName: "HDFC LT Adv -G",
      categoryId: "3",
      categoryName: "Mid Cap",
      schemeAUM: "1361.1"
    },
    {
      schemeId: "1494",
      schemeName: "HDFC Small Cap -Reg-G",
      categoryId: "4",
      categoryName: "Small Cap",
      schemeAUM: "7894"
    },
    {
      schemeId: "888",
      schemeName: "HDFC Childrens Gift ",
      categoryId: "4",
      categoryName: "Small Cap",
      schemeAUM: "2735.3"
    },
    {
      schemeId: "16186",
      schemeName: "HDFC Retirement Savings -Hybrid-Debt-Reg-G",
      categoryId: "4",
      categoryName: "Small Cap",
      schemeAUM: "67.2"
    }
  ];
}

export async function fetchRiskReturnStatistics(fundManagerId) {
  // return httpHelpers.get(
  //   `${apiEndpoint}/riskreturnstatistics/${fundManagerId}`
  // );
  return {
    schemes: [
      {
        schemeId: 861,
        schemeName: "Franklin India Opp -G",
        schemeAUM: 10,
        return: -12.21,
        risk: 12.31,
        color: "#FFF"
      },
      {
        schemeId: 862,
        schemeName: "Franklin India Equity -G",
        schemeAUM: 100,
        return: -13.26,
        risk: 11.47,
        color: null
      },
      {
        schemeId: 863,
        schemeName: "Franklin India Smaller Companies -G",
        schemeAUM: 340,
        return: -20.2,
        risk: 10.52,
        color: null
      },
      {
        schemeId: 864,
        schemeName: "Franklin India Taxshield-G",
        schemeAUM: 560,
        return: -9.51,
        risk: 10.99,
        color: null
      },
      {
        schemeId: 857,
        schemeName: "Franklin India Equity Adv -G",
        schemeAUM: 780,
        return: -12.69,
        risk: 11.89,
        color: null
      },
      {
        schemeId: 2116,
        schemeName: "Franklin India Prima -G",
        schemeAUM: 1000,
        return: -12.37,
        risk: 10.51,
        color: null
      }
    ],
    AUM: {
      minAUM: 10.1,
      maxAUM: 1000
    }
  };
}

export async function fetchPeerSchemePerformance(fundManagerId) {
  // return httpHelpers.get(`${apiEndpoint}/peerperformance/${fundManagerId}`);
  return {
    fundManagerId: 1,
    numberOfSchemesManaged: 6,
    assetWiseBreakDown: [
      {
        assetId: 1,
        assetName: "Equity",
        AUM: {
          minAUM: 10,
          maxAUM: 100
        },
        numberOfSchemesManaged: 3,
        color: "rgba(223, 83, 83, .5)",
        schemes: [
          {
            schemeId: 1,
            schemeName: "Axis Bluechip -G",
            schemeAUM: 0.5555696584590859,
            isManaged: false,
            risk: 10.34,
            return: -0.56,
            color: null
          },
          {
            schemeId: 2,
            schemeName: "Axis Focused 25 -G",
            schemeAUM: 0.8531018765200207,
            isManaged: false,
            risk: 11.73,
            return: -8.63,
            color: null
          },
          {
            schemeId: 3,
            schemeName: "Axis LT Equity -G",
            schemeAUM: 0.9818815807840273,
            isManaged: false,
            risk: 11.52,
            return: -5.31,
            color: null
          },
          {
            schemeId: 4,
            schemeName: "Axis Midcap -G",
            schemeAUM: 0.5394897065773054,
            isManaged: false,
            risk: 9.87,
            return: -7.57,
            color: null
          },
          {
            schemeId: 5,
            schemeName: "Baroda Banking and Financial Services -G",
            schemeAUM: 0.05960231927253146,
            isManaged: false,
            risk: 13.68,
            return: -2.72,
            color: null
          },
          {
            schemeId: 6,
            schemeName: "Baroda Equity Linked Saving  96-D",
            schemeAUM: 0.46798264355323393,
            isManaged: false,
            risk: 10.97,
            return: -15.58,
            color: null
          },
          {
            schemeId: 7,
            schemeName: "Baroda Multi Cap -G",
            schemeAUM: 0.683562259398051,
            isManaged: false,
            risk: 10.93,
            return: -10.54,
            color: null
          },
          {
            schemeId: 8,
            schemeName: "Baroda Large Cap -G",
            schemeAUM: 0.07855770605315637,
            isManaged: false,
            risk: 11.17,
            return: -8.39,
            color: null
          },
          {
            schemeId: 9,
            schemeName: "Baroda Mid-cap -G",
            schemeAUM: 0.05064972773567544,
            isManaged: false,
            risk: 11.14,
            return: -16.57,
            color: null
          },
          {
            schemeId: 10,
            schemeName: "Aditya Birla Sun Life Equity Adv -D",
            schemeAUM: 0.9512233638241221,
            isManaged: false,
            risk: 12.27,
            return: -17.12,
            color: null
          },
          {
            schemeId: 11,
            schemeName: "Aditya Birla Sun Life D Yield -G",
            schemeAUM: 0.6524393970358171,
            isManaged: false,
            risk: 10.14,
            return: -17.33,
            color: null
          },
          {
            schemeId: 12,
            schemeName: "Aditya Birla Sun Life Equity -G",
            schemeAUM: 0.3512166801017931,
            isManaged: false,
            risk: 12.2,
            return: -10.25,
            color: null
          },
          {
            schemeId: 13,
            schemeName: "Aditya Birla Sun Life Frontline Equity -G",
            schemeAUM: 0.2851881645282974,
            isManaged: false,
            risk: 11.18,
            return: -8.81,
            color: null
          },
          {
            schemeId: 14,
            schemeName: "Aditya Birla Sun Life Index -Reg-G",
            schemeAUM: 0.415723023251501,
            isManaged: false,
            risk: 11.4,
            return: -5.94,
            color: null
          },
          {
            schemeId: 15,
            schemeName: "Aditya Birla Sun Life India GenNext -G",
            schemeAUM: 0.3234884076500095,
            isManaged: false,
            risk: 11.02,
            return: -6.32,
            color: null
          },
          {
            schemeId: 16,
            schemeName: "Aditya Birla Sun Life Infrastructure -G",
            schemeAUM: 0.21516145004760467,
            isManaged: false,
            risk: 14.4,
            return: -19.29,
            color: null
          },
          {
            schemeId: 17,
            schemeName: "Aditya Birla Sun Life International Equity -A-G",
            schemeAUM: 0.46527601165978316,
            isManaged: false,
            risk: 11.81,
            return: 3.73,
            color: null
          },
          {
            schemeId: 18,
            schemeName: "Aditya Birla Sun Life Midcap -G",
            schemeAUM: 0.28002238629990583,
            isManaged: false,
            risk: 12.79,
            return: -20.53,
            color: null
          },
          {
            schemeId: 19,
            schemeName: "Aditya Birla Sun Life MNC -G",
            schemeAUM: 0.5729039470208273,
            isManaged: false,
            risk: 9.92,
            return: -13.31,
            color: null
          },
          {
            schemeId: 20,
            schemeName: "Aditya Birla Sun Life Digital India -G",
            schemeAUM: 0.419491618125893,
            isManaged: false,
            risk: 12.47,
            return: -1.27,
            color: null
          },
          {
            schemeId: 21,
            schemeName: "Aditya Birla Sun Life Nifty Exchange Traded ",
            schemeAUM: 0.4541897240844992,
            isManaged: false,
            risk: 11.55,
            return: -5.32,
            color: null
          },
          {
            schemeId: 22,
            schemeName: "Aditya Birla Sun Life Pure Value -G",
            schemeAUM: 0.01793826915968455,
            isManaged: false,
            risk: 13.6,
            return: -24.87,
            color: null
          },
          {
            schemeId: 23,
            schemeName: "Aditya Birla Sun Life Small Cap -G",
            schemeAUM: 0.990745252673366,
            isManaged: false,
            risk: 13.76,
            return: -27.02,
            color: null
          },
          {
            schemeId: 24,
            schemeName: "Aditya Birla Sun Life Tax-D",
            schemeAUM: 0.4694605474797735,
            isManaged: false,
            risk: 10.35,
            return: -16.06,
            color: null
          },
          {
            schemeId: 25,
            schemeName: "Aditya Birla Sun Life Focused Equity -G",
            schemeAUM: 0.7445540703278133,
            isManaged: false,
            risk: 11.53,
            return: -7.16,
            color: null
          },
          {
            schemeId: 26,
            schemeName: "BNP Paribas Multi Cap -G",
            schemeAUM: 0.4628365863056798,
            isManaged: false,
            risk: 10.67,
            return: -6.5,
            color: null
          },
          {
            schemeId: 27,
            schemeName: "BNP Paribas Large Cap -G",
            schemeAUM: 0.9919084557527573,
            isManaged: false,
            risk: 10.47,
            return: -0.97,
            color: null
          },
          {
            schemeId: 28,
            schemeName: "BNP Paribas Mid Cap -G",
            schemeAUM: 0.1770505489597105,
            isManaged: false,
            risk: 11.96,
            return: -12.63,
            color: null
          },
          {
            schemeId: 29,
            schemeName: "BNP Paribas LT Equity -G",
            schemeAUM: 0.7312716746426959,
            isManaged: false,
            risk: 10.22,
            return: -2.53,
            color: null
          },
          {
            schemeId: 30,
            schemeName: "BOI AXA Large & Mid Cap Equity -Reg-G",
            schemeAUM: 0.77518550310461,
            isManaged: false,
            risk: 12.6,
            return: -18.12,
            color: null
          },
          {
            schemeId: 31,
            schemeName: "BOI AXA Manufacturing & Infrastructure -Reg-G",
            schemeAUM: 0.5730494186090256,
            isManaged: false,
            risk: 13.5,
            return: -20.32,
            color: null
          },
          {
            schemeId: 32,
            schemeName: "BOI AXA Tax Adv -Reg-G",
            schemeAUM: 0.9065835163130647,
            isManaged: false,
            risk: 12.34,
            return: -15.31,
            color: null
          },
          {
            schemeId: 33,
            schemeName: "Canara Robeco Emerging Equities-Reg-G",
            schemeAUM: 0.46003545046978767,
            isManaged: false,
            risk: 11.52,
            return: -14.02,
            color: null
          },
          {
            schemeId: 34,
            schemeName: "Canara Robeco Equity Diversified -Reg-G",
            schemeAUM: 0.9076798509572901,
            isManaged: false,
            risk: 10.75,
            return: -6.89,
            color: null
          },
          {
            schemeId: 35,
            schemeName: "Canara Robeco Equity Tax Saver -Reg-D",
            schemeAUM: 0.9313996377917197,
            isManaged: false,
            risk: 11.37,
            return: -10.04,
            color: null
          },
          {
            schemeId: 36,
            schemeName: "Canara Robeco Consumer Trends -Reg-G",
            schemeAUM: 0.14364828305339028,
            isManaged: false,
            risk: 12.03,
            return: -8.51,
            color: null
          },
          {
            schemeId: 37,
            schemeName: "Canara Robeco Infrastructure -Reg-G",
            schemeAUM: 0.8404888052540811,
            isManaged: false,
            risk: 13.81,
            return: -12.59,
            color: null
          },
          {
            schemeId: 38,
            schemeName: "Canara Robeco Bluechip Equity -Reg-G",
            schemeAUM: 0.7348164692247332,
            isManaged: false,
            risk: 11,
            return: -5.48,
            color: null
          },
          {
            schemeId: 39,
            schemeName: "SBI Small Cap -Reg-G",
            schemeAUM: 0.4237138066930519,
            isManaged: false,
            risk: 10.49,
            return: -13.85,
            color: null
          },
          {
            schemeId: 40,
            schemeName: "DSP Equity -Reg-D",
            schemeAUM: 0.7457708635171398,
            isManaged: false,
            risk: 11.89,
            return: -6.95,
            color: null
          },
          {
            schemeId: 41,
            schemeName: "DSP Focus -Reg-G",
            schemeAUM: 0.4876637078227397,
            isManaged: false,
            risk: 12.89,
            return: -10.18,
            color: null
          },
          {
            schemeId: 42,
            schemeName: "DSP India T.I.G.E.R. -Reg-G",
            schemeAUM: 0.714588696519914,
            isManaged: false,
            risk: 13.82,
            return: -9.29,
            color: null
          },
          {
            schemeId: 43,
            schemeName: "DSP Small Cap -Reg-G",
            schemeAUM: 0.8709774113973101,
            isManaged: false,
            risk: 11.91,
            return: -19.85,
            color: null
          },
          {
            schemeId: 44,
            schemeName: "DSP Equity Opp -Reg-G",
            schemeAUM: 0.9542597068307384,
            isManaged: false,
            risk: 11.53,
            return: -8.13,
            color: null
          },
          {
            schemeId: 45,
            schemeName: "DSP Midcap -Reg-G",
            schemeAUM: 0.8160356256805521,
            isManaged: false,
            risk: 10.86,
            return: -10.19,
            color: null
          },
          {
            schemeId: 46,
            schemeName: "DSP Tax Saver -Reg-G",
            schemeAUM: 0.8308293745444735,
            isManaged: false,
            risk: 11.68,
            return: -4.4,
            color: null
          },
          {
            schemeId: 47,
            schemeName: "DSP Top 100 Equity -Reg-G",
            schemeAUM: 0.5294526237352744,
            isManaged: false,
            risk: 13.32,
            return: -10.32,
            color: null
          },
          {
            schemeId: 48,
            schemeName: "DSP US Flexible Equity -Reg-G",
            schemeAUM: 0.9427003424787592,
            isManaged: false,
            risk: 11.72,
            return: -2.69,
            color: null
          },
          {
            schemeId: 49,
            schemeName: "DSP World Agriculture -Reg-G",
            schemeAUM: 0.5387924905818189,
            isManaged: false,
            risk: 11.22,
            return: -0.34,
            color: null
          },
          {
            schemeId: 50,
            schemeName: "DSP World Mining -Reg-G",
            schemeAUM: 0.05603998474927718,
            isManaged: false,
            risk: 16.74,
            return: 0.66,
            color: null
          },
          {
            schemeId: 51,
            schemeName: "DHFL Pramerica Large Cap -G",
            schemeAUM: 0.7627541147912087,
            isManaged: false,
            risk: 10.47,
            return: -5.59,
            color: null
          },
          {
            schemeId: 52,
            schemeName: "DHFL Pramerica Global Equity Opp -G",
            schemeAUM: 0.07220803173396018,
            isManaged: false,
            risk: 15.39,
            return: 10.61,
            color: null
          },
          {
            schemeId: 53,
            schemeName: "DHFL Pramerica Euro Equity -G",
            schemeAUM: 0.5067667143975785,
            isManaged: false,
            risk: 11.86,
            return: -8.35,
            color: null
          },
          {
            schemeId: 54,
            schemeName: "Edelweiss Large Cap -G",
            schemeAUM: 0.15585359378203867,
            isManaged: false,
            risk: 10.87,
            return: -8.44,
            color: null
          },
          {
            schemeId: 55,
            schemeName: "Edelweiss LT Equity  (Tax Savings)-Reg-G",
            schemeAUM: 0.8368664189369608,
            isManaged: false,
            risk: 10.69,
            return: -9.64,
            color: null
          },
          {
            schemeId: 56,
            schemeName: "Quant Active -G",
            schemeAUM: 0.982973711484219,
            isManaged: false,
            risk: 13.44,
            return: -12.1,
            color: null
          },
          {
            schemeId: 57,
            schemeName: "Quant Large & Mid Cap -G",
            schemeAUM: 0.5587600034527422,
            isManaged: false,
            risk: 12.59,
            return: -11.28,
            color: null
          },
          {
            schemeId: 58,
            schemeName: "Quant Small Cap -G",
            schemeAUM: 0.10647290196945147,
            isManaged: false,
            risk: 13.87,
            return: -30.48,
            color: null
          },
          {
            schemeId: 59,
            schemeName: "Quant Infrastructure -G",
            schemeAUM: 0.9253571595460619,
            isManaged: false,
            risk: 14.24,
            return: -10.22,
            color: null
          },
          {
            schemeId: 60,
            schemeName: "Quant Focused -G",
            schemeAUM: 0.7684645890833055,
            isManaged: false,
            risk: 12.97,
            return: -12.94,
            color: null
          },
          {
            schemeId: 61,
            schemeName: "Quant Mid Cap -G",
            schemeAUM: 0.7040723098328789,
            isManaged: false,
            risk: 13.13,
            return: -18.57,
            color: null
          },
          {
            schemeId: 62,
            schemeName: "Quant Consumption -G",
            schemeAUM: 0.55799961013914,
            isManaged: false,
            risk: 12.52,
            return: -16.68,
            color: null
          },
          {
            schemeId: 63,
            schemeName: "Quant Tax-G",
            schemeAUM: 0.2211620819163298,
            isManaged: false,
            risk: 13.96,
            return: -12.98,
            color: null
          },
          {
            schemeId: 64,
            schemeName: "Franklin Asian Equity -G",
            schemeAUM: 0.5466136027418902,
            isManaged: false,
            risk: 13.2,
            return: 0.4,
            color: null
          },
          {
            schemeId: 65,
            schemeName: "Franklin Build India -G",
            schemeAUM: 0.6063153931316925,
            isManaged: false,
            risk: 13.93,
            return: -8.44,
            color: null
          },
          {
            schemeId: 66,
            schemeName: "Franklin India Bluechip -G",
            schemeAUM: 0.3132770363795805,
            isManaged: false,
            risk: 11.64,
            return: -12.72,
            color: null
          },
          {
            schemeId: 67,
            schemeName: "Franklin India Equity Adv -G",
            schemeAUM: 0.9995317705409346,
            isManaged: false,
            risk: 11.89,
            return: -12.69,
            color: null
          },
          {
            schemeId: 68,
            schemeName: "Franklin India Focused Equity -G",
            schemeAUM: 0.07515987610945452,
            isManaged: false,
            risk: 13.08,
            return: -5.49,
            color: null
          },
          {
            schemeId: 69,
            schemeName: "Franklin India Index -NSE Nifty-G",
            schemeAUM: 0.3797685568643514,
            isManaged: false,
            risk: 11.36,
            return: -6.02,
            color: null
          },
          {
            schemeId: 70,
            schemeName: "Franklin India Opp -G",
            schemeAUM: 0.9638342283301458,
            isManaged: false,
            risk: 12.31,
            return: -12.21,
            color: null
          },
          {
            schemeId: 71,
            schemeName: "Franklin India Equity -G",
            schemeAUM: 0.666123776234667,
            isManaged: false,
            risk: 11.47,
            return: -13.26,
            color: null
          },
          {
            schemeId: 72,
            schemeName: "Franklin India Smaller Companies -G",
            schemeAUM: 0.9947980207252414,
            isManaged: false,
            risk: 10.52,
            return: -20.2,
            color: null
          },
          {
            schemeId: 73,
            schemeName: "Franklin India Taxshield-G",
            schemeAUM: 0.5743635628120145,
            isManaged: false,
            risk: 10.99,
            return: -9.51,
            color: null
          },
          {
            schemeId: 74,
            schemeName: "Franklin India Technology -G",
            schemeAUM: 0.2116518446938367,
            isManaged: false,
            risk: 10.59,
            return: -2.03,
            color: null
          },
          {
            schemeId: 75,
            schemeName: "Franklin India Feeder-Franklin U.S. Opp -G",
            schemeAUM: 0.5687383658935927,
            isManaged: false,
            risk: 17.45,
            return: 4.78,
            color: null
          },
          {
            schemeId: 76,
            schemeName: "Reliance ETF Bank BeES",
            schemeAUM: 0.8405056524156134,
            isManaged: false,
            risk: 13.84,
            return: -2.87,
            color: null
          },
          {
            schemeId: 77,
            schemeName: "Reliance ETF Hang Seng BeES",
            schemeAUM: 0.20758610386071297,
            isManaged: false,
            risk: 14.47,
            return: -0.68,
            color: null
          },
          {
            schemeId: 78,
            schemeName: "Reliance ETF Infra BeES",
            schemeAUM: 0.33179816184557165,
            isManaged: false,
            risk: 14.56,
            return: -6.89,
            color: null
          },
          {
            schemeId: 79,
            schemeName: "Reliance ETF Junior BeES",
            schemeAUM: 0.2974034761836546,
            isManaged: false,
            risk: 13.41,
            return: -16.21,
            color: null
          },
          {
            schemeId: 80,
            schemeName: "Reliance ETF Nifty BeES",
            schemeAUM: 0.7453929958865331,
            isManaged: false,
            risk: 11.53,
            return: -5,
            color: null
          },
          {
            schemeId: 81,
            schemeName: "Reliance ETF PSU Bank BeES",
            schemeAUM: 0.4633126875476228,
            isManaged: false,
            risk: 25.5,
            return: -25.78,
            color: null
          },
          {
            schemeId: 82,
            schemeName: "Reliance ETF Shariah BeES",
            schemeAUM: 0.44368847918723753,
            isManaged: false,
            risk: 12.62,
            return: -3.49,
            color: null
          },
          {
            schemeId: 83,
            schemeName: "HDFC Cap Builder Value -G",
            schemeAUM: 0.7558803290874352,
            isManaged: false,
            risk: 11.33,
            return: -14.86,
            color: null
          },
          {
            schemeId: 84,
            schemeName: "HDFC Childrens Gift ",
            schemeAUM: 0.04187628378885,
            isManaged: false,
            risk: 7.56,
            return: -3.94,
            color: null
          },
          {
            schemeId: 85,
            schemeName: "HDFC Focused 30 -G",
            schemeAUM: 0.16335092620284275,
            isManaged: false,
            risk: 12.83,
            return: -12.06,
            color: null
          },
          {
            schemeId: 86,
            schemeName: "HDFC Equity -G",
            schemeAUM: 0.23498453167639743,
            isManaged: false,
            risk: 13.09,
            return: -6.38,
            color: null
          },
          {
            schemeId: 87,
            schemeName: "HDFC Index -NIFTY 50-G",
            schemeAUM: 0.6054077814526697,
            isManaged: false,
            risk: 11.52,
            return: -5.4,
            color: null
          },
          {
            schemeId: 88,
            schemeName: "HDFC Index -Sensex-G",
            schemeAUM: 0.43279692906145306,
            isManaged: false,
            risk: 11.32,
            return: -3.25,
            color: null
          },
          {
            schemeId: 89,
            schemeName: "HDFC Infrastructure -G",
            schemeAUM: 0.9545500280416415,
            isManaged: false,
            risk: 16.81,
            return: -20.48,
            color: null
          },
          {
            schemeId: 90,
            schemeName: "HDFC LT Adv -G",
            schemeAUM: 0.7572977967950743,
            isManaged: false,
            risk: 10.8,
            return: -5.78,
            color: null
          },
          {
            schemeId: 91,
            schemeName: "HDFC Mid-Cap Opp -G",
            schemeAUM: 0.7800837690895976,
            isManaged: false,
            risk: 11.09,
            return: -16.75,
            color: null
          },
          {
            schemeId: 92,
            schemeName: "HDFC Tax Saver-G",
            schemeAUM: 0.4601469578372437,
            isManaged: false,
            risk: 11.72,
            return: -11.93,
            color: null
          },
          {
            schemeId: 93,
            schemeName: "HDFC Top 100 -G",
            schemeAUM: 0.06958742611370905,
            isManaged: false,
            risk: 12.44,
            return: -4.86,
            color: null
          },
          {
            schemeId: 94,
            schemeName: "HSBC Brazil -G",
            schemeAUM: 0.6479640910338287,
            isManaged: false,
            risk: 26.13,
            return: 29.96,
            color: null
          },
          {
            schemeId: 95,
            schemeName: "HSBC Large Cap Equity -G",
            schemeAUM: 0.2781063257737135,
            isManaged: false,
            risk: 11.69,
            return: -6.19,
            color: null
          },
          {
            schemeId: 96,
            schemeName: "HSBC Multi Cap Equity -G",
            schemeAUM: 0.9924073353742608,
            isManaged: false,
            risk: 13.03,
            return: -16.92,
            color: null
          },
          {
            schemeId: 97,
            schemeName: "HSBC Small Cap Equity -G",
            schemeAUM: 0.395063860394961,
            isManaged: false,
            risk: 13.21,
            return: -23.49,
            color: null
          },
          {
            schemeId: 98,
            schemeName: "HSBC Infrastructure Equity -G",
            schemeAUM: 0.762389104826388,
            isManaged: false,
            risk: 17.07,
            return: -28.76,
            color: null
          },
          {
            schemeId: 99,
            schemeName: "HSBC Tax Saver Equity -G",
            schemeAUM: 0.8983944970904412,
            isManaged: false,
            risk: 12.63,
            return: -10.86,
            color: null
          },
          {
            schemeId: 100,
            schemeName: "ICICI Prudential Banking & Financial Services -G",
            schemeAUM: 0.7532534478303081,
            isManaged: false,
            risk: 15.24,
            return: -6.16,
            color: null
          },
          {
            schemeId: 101,
            schemeName: "ICICI Prudential Value Discovery -G",
            schemeAUM: 0.36258738952629055,
            isManaged: false,
            risk: 10.7,
            return: -11.48,
            color: null
          },
          {
            schemeId: 102,
            schemeName: "ICICI Prudential FMCG -G",
            schemeAUM: 0.8572700356343406,
            isManaged: false,
            risk: 9.92,
            return: -9.25,
            color: null
          },
          {
            schemeId: 103,
            schemeName: "ICICI Prudential Bluechip -G",
            schemeAUM: 0.9163065465251723,
            isManaged: false,
            risk: 11.28,
            return: -6.7,
            color: null
          },
          {
            schemeId: 104,
            schemeName: "ICICI Prudential Nifty Index -Cum",
            schemeAUM: 0.5791079577273863,
            isManaged: false,
            risk: 11.49,
            return: -5.74,
            color: null
          },
          {
            schemeId: 105,
            schemeName: "ICICI Prudential Infrastructure -G",
            schemeAUM: 0.3608288925825931,
            isManaged: false,
            risk: 14.03,
            return: -8.71,
            color: null
          },
          {
            schemeId: 106,
            schemeName: "ICICI Prudential Midcap -G",
            schemeAUM: 0.7357450073005791,
            isManaged: false,
            risk: 11.32,
            return: -13.1,
            color: null
          },
          {
            schemeId: 107,
            schemeName: "ICICI Prudential Nifty Next 50 Index -G",
            schemeAUM: 0.6343905042769649,
            isManaged: false,
            risk: 13.27,
            return: -16.75,
            color: null
          },
          {
            schemeId: 108,
            schemeName: "ICICI Prudential R.I.G.H.T. -G",
            schemeAUM: 0.5866739191386492,
            isManaged: false,
            risk: 11.44,
            return: -14.23,
            color: null
          },
          {
            schemeId: 109,
            schemeName: "ICICI Prudential Exports and Services -G",
            schemeAUM: 0.7110543857863447,
            isManaged: false,
            risk: 10.81,
            return: -10.93,
            color: null
          },
          {
            schemeId: 110,
            schemeName: "ICICI Prudential Focused Equity -G",
            schemeAUM: 0.5777122619675286,
            isManaged: false,
            risk: 11.16,
            return: -10.43,
            color: null
          },
          {
            schemeId: 111,
            schemeName: "ICICI Prudential LT Equity  (Tax Saving)-G",
            schemeAUM: 0.43155149165500095,
            isManaged: false,
            risk: 11.18,
            return: -9.13,
            color: null
          },
          {
            schemeId: 112,
            schemeName: "ICICI Prudential Technology -G",
            schemeAUM: 0.8745079200041728,
            isManaged: false,
            risk: 12.48,
            return: 0.88,
            color: null
          },
          {
            schemeId: 113,
            schemeName: "ICICI Prudential Large & Mid Cap -G",
            schemeAUM: 0.8653412368779592,
            isManaged: false,
            risk: 11.42,
            return: -7.74,
            color: null
          },
          {
            schemeId: 114,
            schemeName: "ICICI Prudential Multicap -G",
            schemeAUM: 0.9527982406768016,
            isManaged: false,
            risk: 11.45,
            return: -10.49,
            color: null
          },
          {
            schemeId: 115,
            schemeName: "ICICI Prudential US Bluechip Equity -G",
            schemeAUM: 0.057193294534460204,
            isManaged: false,
            risk: 12.93,
            return: 3.65,
            color: null
          },
          {
            schemeId: 116,
            schemeName: "ICICI Prudential Nifty ETF",
            schemeAUM: 0.2136838193931152,
            isManaged: false,
            risk: 11.53,
            return: -5.04,
            color: null
          },
          {
            schemeId: 117,
            schemeName: "IDBI India Top 100 Equity -G",
            schemeAUM: 0.11170996937808009,
            isManaged: false,
            risk: 10.73,
            return: -6.96,
            color: null
          },
          {
            schemeId: 118,
            schemeName: "IDBI Nifty Index -G",
            schemeAUM: 0.22711241993035647,
            isManaged: false,
            risk: 11.51,
            return: -5.97,
            color: null
          },
          {
            schemeId: 119,
            schemeName: "IDBI Nifty Junior Index -G",
            schemeAUM: 0.05923042833935144,
            isManaged: false,
            risk: 13.28,
            return: -16.6,
            color: null
          },
          {
            schemeId: 120,
            schemeName: "IDFC All Seasons Bond -Reg-G",
            schemeAUM: 0.10602058244822499,
            isManaged: false,
            risk: 1.24,
            return: 10.61,
            color: null
          },
          {
            schemeId: 121,
            schemeName: "IDFC AAF-Aggr-Reg-G",
            schemeAUM: 0.9581248617218012,
            isManaged: false,
            risk: 7.64,
            return: -8.33,
            color: null
          },
          {
            schemeId: 122,
            schemeName: "IDFC AAF-Cons-Reg-G",
            schemeAUM: 0.08447241596159238,
            isManaged: false,
            risk: 2.51,
            return: 3.29,
            color: null
          },
          {
            schemeId: 123,
            schemeName: "IDFC AAF-Moderate-Reg-G",
            schemeAUM: 0.34043451770883726,
            isManaged: false,
            risk: 4.55,
            return: -1.75,
            color: null
          },
          {
            schemeId: 124,
            schemeName: "IDFC Core Equity -Reg- G",
            schemeAUM: 0.9279340129368772,
            isManaged: false,
            risk: 11.59,
            return: -12.79,
            color: null
          },
          {
            schemeId: 125,
            schemeName: "IDFC Large Cap -Reg-G",
            schemeAUM: 0.498373361883941,
            isManaged: false,
            risk: 10.78,
            return: -9.95,
            color: null
          },
          {
            schemeId: 126,
            schemeName: "IDFC Focused Equity -Reg-G",
            schemeAUM: 0.9763988759032078,
            isManaged: false,
            risk: 11.66,
            return: -18.89,
            color: null
          },
          {
            schemeId: 127,
            schemeName: "IDFC Infrastructure -Reg-G",
            schemeAUM: 0.36376534192795784,
            isManaged: false,
            risk: 15.29,
            return: -20.98,
            color: null
          },
          {
            schemeId: 128,
            schemeName: "IDFC Nifty -Reg-G",
            schemeAUM: 0.6329801114631055,
            isManaged: false,
            risk: 11.37,
            return: -5.23,
            color: null
          },
          {
            schemeId: 129,
            schemeName: "IDFC Multi Cap -Reg-G",
            schemeAUM: 0.3857104320355882,
            isManaged: false,
            risk: 10.45,
            return: -12.38,
            color: null
          },
          {
            schemeId: 130,
            schemeName: "IDFC Sterling Value -Reg-G",
            schemeAUM: 0.43448396751250695,
            isManaged: false,
            risk: 12.8,
            return: -20.81,
            color: null
          },
          {
            schemeId: 131,
            schemeName: "IDFC Tax Adv (ELSS) -Reg-G",
            schemeAUM: 0.1607731751570678,
            isManaged: false,
            risk: 11.69,
            return: -14.33,
            color: null
          },
          {
            schemeId: 132,
            schemeName: "Indiabulls Blue Chip -G",
            schemeAUM: 0.4046272195550693,
            isManaged: false,
            risk: 11.21,
            return: -6.65,
            color: null
          },
          {
            schemeId: 133,
            schemeName: "Aditya Birla Sun Life Active Debt Mul Mgr FoF -G",
            schemeAUM: 0.46061518571343085,
            isManaged: false,
            risk: 1.08,
            return: 8.48,
            color: null
          },
          {
            schemeId: 134,
            schemeName: "Aditya Birla Sun Life AA Mul Mgr FoF -G",
            schemeAUM: 0.7805465262766427,
            isManaged: false,
            risk: 6.12,
            return: -4.72,
            color: null
          },
          {
            schemeId: 135,
            schemeName: "Aditya Birla Sun Life Global Real Estate -G",
            schemeAUM: 0.4007259405600887,
            isManaged: false,
            risk: 9.88,
            return: 8.56,
            color: null
          },
          {
            schemeId: 136,
            schemeName: "JM Value -G",
            schemeAUM: 0.6449748297916265,
            isManaged: false,
            risk: 13.44,
            return: -12.32,
            color: null
          },
          {
            schemeId: 137,
            schemeName: "JM Core 11 -G",
            schemeAUM: 0.6724396271993851,
            isManaged: false,
            risk: 13.73,
            return: -11.53,
            color: null
          },
          {
            schemeId: 138,
            schemeName: "JM Large Cap -G",
            schemeAUM: 0.22071804931496786,
            isManaged: false,
            risk: 4.74,
            return: -2.49,
            color: null
          },
          {
            schemeId: 139,
            schemeName: "JM Multicap -G",
            schemeAUM: 0.06539827775897256,
            isManaged: false,
            risk: 10.72,
            return: -6.52,
            color: null
          },
          {
            schemeId: 140,
            schemeName: "JM Tax Gain -G",
            schemeAUM: 0.28810219559102057,
            isManaged: false,
            risk: 12.29,
            return: -6.06,
            color: null
          },
          {
            schemeId: 141,
            schemeName: "Edelweiss Large & Mid Cap -Reg-G",
            schemeAUM: 0.18794207711509392,
            isManaged: false,
            risk: 10.57,
            return: -9.55,
            color: null
          },
          {
            schemeId: 142,
            schemeName: "Edelweiss Mid Cap -Reg-G",
            schemeAUM: 0.9540832703407454,
            isManaged: false,
            risk: 12.06,
            return: -16.03,
            color: null
          },
          {
            schemeId: 143,
            schemeName: "Edelweiss Tax Adv -Reg-G",
            schemeAUM: 0.4288727836261379,
            isManaged: false,
            risk: 11.4,
            return: -12.1,
            color: null
          },
          {
            schemeId: 144,
            schemeName: "Edelweiss ASEAN Equity Off-Shore -Reg-G",
            schemeAUM: 0.9766611326238916,
            isManaged: false,
            risk: 8.61,
            return: 3.23,
            color: null
          },
          {
            schemeId: 145,
            schemeName: "Edelweiss Gr China Eq Off-Shore -Reg-G",
            schemeAUM: 0.17580958958840553,
            isManaged: false,
            risk: 18.28,
            return: 6.83,
            color: null
          },
          {
            schemeId: 146,
            schemeName: "Kotak India EQ Contra -G",
            schemeAUM: 0.5522634211936615,
            isManaged: false,
            risk: 10.79,
            return: -7.59,
            color: null
          },
          {
            schemeId: 147,
            schemeName: "Kotak Emerging Equity -G",
            schemeAUM: 0.9483204272792807,
            isManaged: false,
            risk: 11.29,
            return: -11.01,
            color: null
          },
          {
            schemeId: 148,
            schemeName: "Kotak AA -G",
            schemeAUM: 0.5772941021381692,
            isManaged: false,
            risk: 1.28,
            return: 6.29,
            color: null
          },
          {
            schemeId: 149,
            schemeName: "Kotak Global Emerging Market -G",
            schemeAUM: 0.49453558008367704,
            isManaged: false,
            risk: 9.95,
            return: -6.91,
            color: null
          },
          {
            schemeId: 150,
            schemeName: "Kotak Small Cap -G",
            schemeAUM: 0.5565944179778026,
            isManaged: false,
            risk: 10.91,
            return: -15.99,
            color: null
          },
          {
            schemeId: 151,
            schemeName: "Kotak Nifty Exchange Traded ",
            schemeAUM: 0.09385358211087769,
            isManaged: false,
            risk: 11.54,
            return: -5.11,
            color: null
          },
          {
            schemeId: 152,
            schemeName: "Kotak Equity Opp -G",
            schemeAUM: 0.9950774203882629,
            isManaged: false,
            risk: 10.81,
            return: -5.31,
            color: null
          },
          {
            schemeId: 153,
            schemeName: "Kotak PSU Bank ETF",
            schemeAUM: 0.10102653475588563,
            isManaged: false,
            risk: 25.47,
            return: -25.98,
            color: null
          },
          {
            schemeId: 154,
            schemeName: "Kotak Standard Multicap -G",
            schemeAUM: 0.8709970980860569,
            isManaged: false,
            risk: 11.35,
            return: -5.62,
            color: null
          },
          {
            schemeId: 155,
            schemeName: "Kotak Sensex ETF",
            schemeAUM: 0.836281426810473,
            isManaged: false,
            risk: 11.32,
            return: -2.98,
            color: null
          },
          {
            schemeId: 156,
            schemeName: "Kotak Tax Saver -G",
            schemeAUM: 0.7315072657860031,
            isManaged: false,
            risk: 10.66,
            return: -4.81,
            color: null
          },
          {
            schemeId: 157,
            schemeName: "L&T Equity -Reg-G",
            schemeAUM: 0.5706781145514002,
            isManaged: false,
            risk: 10.88,
            return: -9.79,
            color: null
          },
          {
            schemeId: 158,
            schemeName: "L&T India Large Cap -Reg-G",
            schemeAUM: 0.301688717868436,
            isManaged: false,
            risk: 11.21,
            return: -5.26,
            color: null
          },
          {
            schemeId: 159,
            schemeName: "L&T Large and Midcap -Reg-G",
            schemeAUM: 0.08864126057201194,
            isManaged: false,
            risk: 11.06,
            return: -14.87,
            color: null
          },
          {
            schemeId: 160,
            schemeName: "L&T India Value -Reg-G",
            schemeAUM: 0.6230870206068535,
            isManaged: false,
            risk: 12.16,
            return: -13.69,
            color: null
          },
          {
            schemeId: 161,
            schemeName: "L&T Infrastructure -Reg-G",
            schemeAUM: 0.4947090109761467,
            isManaged: false,
            risk: 13.34,
            return: -18.47,
            color: null
          },
          {
            schemeId: 162,
            schemeName: "L&T Midcap -Reg-G",
            schemeAUM: 0.16645607898535864,
            isManaged: false,
            risk: 10.94,
            return: -17.71,
            color: null
          },
          {
            schemeId: 163,
            schemeName: "L&T Tax Adv -Reg-G",
            schemeAUM: 0.38416006713231354,
            isManaged: false,
            risk: 10.65,
            return: -12.62,
            color: null
          },
          {
            schemeId: 164,
            schemeName: "LIC MF Childrens Gift -G",
            schemeAUM: 0.12165693560428648,
            isManaged: false,
            risk: 9.48,
            return: -2.59,
            color: null
          },
          {
            schemeId: 165,
            schemeName: "LIC MF Multi Cap -G",
            schemeAUM: 0.05378132346978215,
            isManaged: false,
            risk: 9.71,
            return: -2.76,
            color: null
          },
          {
            schemeId: 166,
            schemeName: "LIC MF Large Cap -G",
            schemeAUM: 0.15354123231014194,
            isManaged: false,
            risk: 11.13,
            return: -3.97,
            color: null
          },
          {
            schemeId: 167,
            schemeName: "LIC MF Index -Nifty-G",
            schemeAUM: 0.34804635661455396,
            isManaged: false,
            risk: 11.47,
            return: -5.99,
            color: null
          },
          {
            schemeId: 168,
            schemeName: "LIC MF Index -Sensex-G",
            schemeAUM: 0.6621389202013723,
            isManaged: false,
            risk: 11.28,
            return: -3.99,
            color: null
          },
          {
            schemeId: 169,
            schemeName: "LIC MF Infrastructure -G",
            schemeAUM: 0.8742814284213369,
            isManaged: false,
            risk: 11.22,
            return: -5.42,
            color: null
          },
          {
            schemeId: 170,
            schemeName: "LIC MF Tax-G",
            schemeAUM: 0.9743394326641517,
            isManaged: false,
            risk: 10.5,
            return: -5.57,
            color: null
          },
          {
            schemeId: 171,
            schemeName: "LIC MF ULI ",
            schemeAUM: 0.7278085485724908,
            isManaged: false,
            risk: 9.3,
            return: -3.5,
            color: null
          },
          {
            schemeId: 172,
            schemeName: "HDFC Small Cap -Reg-G",
            schemeAUM: 0.7076870156838486,
            isManaged: false,
            risk: 11,
            return: -18.63,
            color: null
          },
          {
            schemeId: 173,
            schemeName: "HDFC G Opp -Reg-G",
            schemeAUM: 0.12889065571230485,
            isManaged: false,
            risk: 12.13,
            return: -9.63,
            color: null
          },
          {
            schemeId: 174,
            schemeName: "Motilal Oswal Midcap 100 ETF",
            schemeAUM: 0.06076533829417752,
            isManaged: false,
            risk: 14.55,
            return: -20.64,
            color: null
          },
          {
            schemeId: 175,
            schemeName: "Motilal Oswal Nasdaq 100 ETF",
            schemeAUM: 0.9204172812474904,
            isManaged: false,
            risk: 18.79,
            return: 6.34,
            color: null
          },
          {
            schemeId: 176,
            schemeName: "Essel Large Cap Equity -G",
            schemeAUM: 0.3133457545649916,
            isManaged: false,
            risk: 11.69,
            return: -7.82,
            color: null
          },
          {
            schemeId: 177,
            schemeName: "Kotak Infrastructure and Economic Reform -G",
            schemeAUM: 0.3949866139056475,
            isManaged: false,
            risk: 12.48,
            return: -9.67,
            color: null
          },
          {
            schemeId: 178,
            schemeName: "Principal D Yield -G",
            schemeAUM: 0.974672651235819,
            isManaged: false,
            risk: 10.32,
            return: -12.46,
            color: null
          },
          {
            schemeId: 179,
            schemeName: "Principal Emerging Bluechip -G",
            schemeAUM: 0.5672030512605792,
            isManaged: false,
            risk: 11.63,
            return: -15.68,
            color: null
          },
          {
            schemeId: 180,
            schemeName: "Principal Global Opp -G",
            schemeAUM: 0.10627084389256747,
            isManaged: false,
            risk: 12.21,
            return: -7.86,
            color: null
          },
          {
            schemeId: 181,
            schemeName: "Principal Multi Cap G -G",
            schemeAUM: 0.5558736344343198,
            isManaged: false,
            risk: 11.12,
            return: -13.18,
            color: null
          },
          {
            schemeId: 182,
            schemeName: "Principal Nifty 100 Equal Weight -G",
            schemeAUM: 0.05583412721582626,
            isManaged: false,
            risk: 12.84,
            return: -16.77,
            color: null
          },
          {
            schemeId: 183,
            schemeName: "Principal Focused Multicap -G",
            schemeAUM: 0.9612009172781346,
            isManaged: false,
            risk: 10.88,
            return: -7.54,
            color: null
          },
          {
            schemeId: 184,
            schemeName: "Principal Personal Tax Saver ",
            schemeAUM: 0.09503187373315747,
            isManaged: false,
            risk: 11.88,
            return: -14.59,
            color: null
          },
          {
            schemeId: 185,
            schemeName: "Principal Tax Savings ",
            schemeAUM: 0.366282427453551,
            isManaged: false,
            risk: 11.84,
            return: -14.11,
            color: null
          },
          {
            schemeId: 186,
            schemeName: "Quantum Equity  of -G-Dir",
            schemeAUM: 0.9007380767839857,
            isManaged: false,
            risk: 10.43,
            return: -8.45,
            color: null
          },
          {
            schemeId: 187,
            schemeName: "Quantum Nifty ETF",
            schemeAUM: 0.9190340415078073,
            isManaged: false,
            risk: 11.54,
            return: -5.08,
            color: null
          },
          {
            schemeId: 188,
            schemeName: "Quantum LT Equity Value -G-Dir",
            schemeAUM: 0.9029585025188771,
            isManaged: false,
            risk: 10.73,
            return: -6.71,
            color: null
          },
          {
            schemeId: 189,
            schemeName: "Quantum Tax Saving -G-Dir",
            schemeAUM: 0.5598099842357731,
            isManaged: false,
            risk: 10.78,
            return: -7,
            color: null
          },
          {
            schemeId: 190,
            schemeName: "Reliance ETF Nifty 100",
            schemeAUM: 0.4039076636576542,
            isManaged: false,
            risk: 11.54,
            return: -7.44,
            color: null
          },
          {
            schemeId: 191,
            schemeName: "Reliance Banking -G Opt",
            schemeAUM: 0.48345811102324054,
            isManaged: false,
            risk: 16.14,
            return: -12.25,
            color: null
          },
          {
            schemeId: 192,
            schemeName: "Reliance Power & Infra -G Opt",
            schemeAUM: 0.9954353433299779,
            isManaged: false,
            risk: 14.57,
            return: -13.58,
            color: null
          },
          {
            schemeId: 193,
            schemeName: "Reliance Multi Cap -G Opt",
            schemeAUM: 0.5792871794462289,
            isManaged: false,
            risk: 13.15,
            return: -9.24,
            color: null
          },
          {
            schemeId: 194,
            schemeName: "Reliance G -G Opt",
            schemeAUM: 0.038772152482567046,
            isManaged: false,
            risk: 12,
            return: -9.78,
            color: null
          },
          {
            schemeId: 195,
            schemeName: "Reliance Index -Nifty-G",
            schemeAUM: 0.8501992542409533,
            isManaged: false,
            risk: 11.52,
            return: -6.01,
            color: null
          },
          {
            schemeId: 196,
            schemeName: "Reliance Index -Sensex-G",
            schemeAUM: 0.7496023698182093,
            isManaged: false,
            risk: 11.19,
            return: -3.99,
            color: null
          },
          {
            schemeId: 197,
            schemeName: "Reliance Focused Equity -G",
            schemeAUM: 0.9786529079057429,
            isManaged: false,
            risk: 12.4,
            return: -13.13,
            color: null
          },
          {
            schemeId: 198,
            schemeName: "Reliance Consumption -G",
            schemeAUM: 0.6843179363101564,
            isManaged: false,
            risk: 11.29,
            return: -9.17,
            color: null
          },
          {
            schemeId: 199,
            schemeName: "Reliance Pharma -G",
            schemeAUM: 0.80508847336369,
            isManaged: false,
            risk: 11.85,
            return: -12.52,
            color: null
          },
          {
            schemeId: 200,
            schemeName: "Reliance Quant -G",
            schemeAUM: 0.641146155582005,
            isManaged: false,
            risk: 10.72,
            return: -10.5,
            color: null
          },
          {
            schemeId: 201,
            schemeName: "Reliance Value -G",
            schemeAUM: 0.6603232339014371,
            isManaged: false,
            risk: 12.19,
            return: -11.1,
            color: null
          },
          {
            schemeId: 202,
            schemeName: "Reliance Small Cap -G",
            schemeAUM: 0.9028417961825665,
            isManaged: false,
            risk: 12.5,
            return: -22.14,
            color: null
          },
          {
            schemeId: 203,
            schemeName: "Reliance Tax Saver (ELSS) -G",
            schemeAUM: 0.6601282240960464,
            isManaged: false,
            risk: 14.93,
            return: -20.27,
            color: null
          },
          {
            schemeId: 204,
            schemeName: "Reliance Large Cap -G",
            schemeAUM: 0.3042707453607665,
            isManaged: false,
            risk: 13.3,
            return: -9.5,
            color: null
          },
          {
            schemeId: 205,
            schemeName: "Reliance Vision -G",
            schemeAUM: 0.005621539622570948,
            isManaged: false,
            risk: 15.49,
            return: -12.36,
            color: null
          },
          {
            schemeId: 206,
            schemeName: "Invesco India Financial Services -G",
            schemeAUM: 0.3782355991442319,
            isManaged: false,
            risk: 13.99,
            return: -3.63,
            color: null
          },
          {
            schemeId: 207,
            schemeName: "Invesco India Largecap -G",
            schemeAUM: 0.8784706002464187,
            isManaged: false,
            risk: 10.95,
            return: -7.78,
            color: null
          },
          {
            schemeId: 208,
            schemeName: "Invesco India Contra -G",
            schemeAUM: 0.9792763565326761,
            isManaged: false,
            risk: 12.25,
            return: -11.76,
            color: null
          },
          {
            schemeId: 209,
            schemeName: "Invesco India G Opp -G",
            schemeAUM: 0.1278784549467713,
            isManaged: false,
            risk: 11.29,
            return: -8.98,
            color: null
          },
          {
            schemeId: 210,
            schemeName: "Invesco India Infrastructure -G",
            schemeAUM: 0.0939560839916711,
            isManaged: false,
            risk: 12.12,
            return: -8.5,
            color: null
          },
          {
            schemeId: 211,
            schemeName: "Invesco India Midcap -G",
            schemeAUM: 0.31606965155658506,
            isManaged: false,
            risk: 11.5,
            return: -14.22,
            color: null
          },
          {
            schemeId: 212,
            schemeName: "Invesco India Multicap -G",
            schemeAUM: 0.19713955865138466,
            isManaged: false,
            risk: 11.33,
            return: -17.01,
            color: null
          },
          {
            schemeId: 213,
            schemeName: "Invesco India Nifty Exchange Traded ",
            schemeAUM: 0.5168373467478109,
            isManaged: false,
            risk: 11.51,
            return: -5.06,
            color: null
          },
          {
            schemeId: 214,
            schemeName: "Invesco India PSU Equity -G",
            schemeAUM: 0.5215890648510735,
            isManaged: false,
            risk: 14.6,
            return: -8.13,
            color: null
          },
          {
            schemeId: 215,
            schemeName: "Invesco India Tax-G",
            schemeAUM: 0.9746156895012532,
            isManaged: false,
            risk: 11.09,
            return: -11.2,
            color: null
          },
          {
            schemeId: 216,
            schemeName: "Sahara Banking & Financial Services -G",
            schemeAUM: 0.06880777217868284,
            isManaged: false,
            risk: 13.84,
            return: -2.59,
            color: null
          },
          {
            schemeId: 217,
            schemeName: "Sahara G -G",
            schemeAUM: 0.5527604099421233,
            isManaged: false,
            risk: 11.68,
            return: -7.76,
            color: null
          },
          {
            schemeId: 218,
            schemeName: "Sahara Infrastructure -Fixed Pricing Opt-G",
            schemeAUM: 0.1548578421213398,
            isManaged: false,
            risk: 11.21,
            return: -10.85,
            color: null
          },
          {
            schemeId: 219,
            schemeName: "Sahara Midcap -G",
            schemeAUM: 0.4723055152210307,
            isManaged: false,
            risk: 10.74,
            return: -9.74,
            color: null
          },
          {
            schemeId: 220,
            schemeName: "Sahara Power & Natural Resources -G",
            schemeAUM: 0.6908445281856124,
            isManaged: false,
            risk: 12.35,
            return: -15.8,
            color: null
          },
          {
            schemeId: 221,
            schemeName: "Sahara R.E.A.L -G",
            schemeAUM: 0.23886298624773605,
            isManaged: false,
            risk: 11.49,
            return: -15.21,
            color: null
          },
          {
            schemeId: 222,
            schemeName: "Sahara Star Value -G",
            schemeAUM: 0.0297672200897936,
            isManaged: false,
            risk: 10.49,
            return: -12.03,
            color: null
          },
          {
            schemeId: 223,
            schemeName: "Sahara Super 20 -G",
            schemeAUM: 0.5490008248953073,
            isManaged: false,
            risk: 11.11,
            return: -8.19,
            color: null
          },
          {
            schemeId: 224,
            schemeName: "Sahara Tax Gain -G",
            schemeAUM: 0.8392103154978614,
            isManaged: false,
            risk: 11.39,
            return: -11.38,
            color: null
          },
          {
            schemeId: 225,
            schemeName: "Sahara Wealth Plus -Fixed Pricing Opt-G",
            schemeAUM: 0.7492451544740604,
            isManaged: false,
            risk: 10.71,
            return: -17.52,
            color: null
          },
          {
            schemeId: 226,
            schemeName: "SBI Blue Chip -Reg-G",
            schemeAUM: 0.6728033745386621,
            isManaged: false,
            risk: 11.8,
            return: -6.52,
            color: null
          },
          {
            schemeId: 227,
            schemeName: "SBI Contra -Reg-D",
            schemeAUM: 0.39135318615786807,
            isManaged: false,
            risk: 12.11,
            return: -16.81,
            color: null
          },
          {
            schemeId: 228,
            schemeName: "SBI Focused Equity -Reg-G",
            schemeAUM: 0.7545027775705888,
            isManaged: false,
            risk: 10.32,
            return: -3.75,
            color: null
          },
          {
            schemeId: 229,
            schemeName: "SBI Consumption Opp -Reg-D",
            schemeAUM: 0.1926031803132231,
            isManaged: false,
            risk: 10.04,
            return: -16,
            color: null
          },
          {
            schemeId: 230,
            schemeName: "SBI Technology Opp -Reg-D",
            schemeAUM: 0.15241334933238204,
            isManaged: false,
            risk: 11.16,
            return: 4.06,
            color: null
          },
          {
            schemeId: 231,
            schemeName: "SBI Infrastructure -Reg-G",
            schemeAUM: 0.5104610421247351,
            isManaged: false,
            risk: 12.9,
            return: -4.54,
            color: null
          },
          {
            schemeId: 232,
            schemeName: "SBI Magnum Childrens Benefit Plan",
            schemeAUM: 0.853269159689422,
            isManaged: false,
            risk: 3.94,
            return: -2.31,
            color: null
          },
          {
            schemeId: 233,
            schemeName: "SBI Magnum COMMA -Reg-G",
            schemeAUM: 0.17746430154542314,
            isManaged: false,
            risk: 12.99,
            return: -12.42,
            color: null
          },
          {
            schemeId: 234,
            schemeName: "SBI Magnum Equity ESG -Reg-D",
            schemeAUM: 0.9150350230017041,
            isManaged: false,
            risk: 11.58,
            return: -3.49,
            color: null
          },
          {
            schemeId: 235,
            schemeName: "SBI Magnum Global -Reg-D",
            schemeAUM: 0.6827972427024602,
            isManaged: false,
            risk: 8.68,
            return: -10.34,
            color: null
          },
          {
            schemeId: 236,
            schemeName: "SBI Nifty Index -Reg-G",
            schemeAUM: 0.8337674818569354,
            isManaged: false,
            risk: 11.54,
            return: -5.77,
            color: null
          },
          {
            schemeId: 237,
            schemeName: "SBI Magnum Midcap -Reg-G",
            schemeAUM: 0.9357416127877172,
            isManaged: false,
            risk: 12.65,
            return: -15.8,
            color: null
          },
          {
            schemeId: 238,
            schemeName: "SBI Magnum Multicap -Reg-G",
            schemeAUM: 0.23174262125106737,
            isManaged: false,
            risk: 10.95,
            return: -5.27,
            color: null
          },
          {
            schemeId: 239,
            schemeName: "SBI Large & Midcap -Reg-D",
            schemeAUM: 0.8072314385670827,
            isManaged: false,
            risk: 11.06,
            return: -7.66,
            color: null
          },
          {
            schemeId: 240,
            schemeName: "SBI Magnum TaxGain  1993-Reg-D",
            schemeAUM: 0.7933779055882617,
            isManaged: false,
            risk: 11.89,
            return: -11.97,
            color: null
          },
          {
            schemeId: 241,
            schemeName: "SBI Healthcare Opp -Reg-D",
            schemeAUM: 0.08422244349629082,
            isManaged: false,
            risk: 13.13,
            return: -15.82,
            color: null
          },
          {
            schemeId: 242,
            schemeName: "SBI PSU -Reg-G",
            schemeAUM: 0.749542996969764,
            isManaged: false,
            risk: 15.45,
            return: -15.27,
            color: null
          },
          {
            schemeId: 243,
            schemeName: "SBI-ETF Sensex",
            schemeAUM: 0.26217495344489916,
            isManaged: false,
            risk: 11.33,
            return: -2.83,
            color: null
          },
          {
            schemeId: 244,
            schemeName: "SBI Tax Adv -II-G",
            schemeAUM: 0.011241673548600062,
            isManaged: false,
            risk: 11.67,
            return: -4.22,
            color: null
          },
          {
            schemeId: 245,
            schemeName: "ICICI Prudential Sensex ETF",
            schemeAUM: 0.8451895237142955,
            isManaged: false,
            risk: 11.23,
            return: -2.73,
            color: null
          },
          {
            schemeId: 246,
            schemeName: "Sundaram Large and Mid Cap -G",
            schemeAUM: 0.05916068964079124,
            isManaged: false,
            risk: 11.85,
            return: -9.92,
            color: null
          },
          {
            schemeId: 247,
            schemeName: "Sundaram Global Adv-G",
            schemeAUM: 0.060958356535479874,
            isManaged: false,
            risk: 10.32,
            return: -2.45,
            color: null
          },
          {
            schemeId: 248,
            schemeName: "Sundaram Small Cap -G",
            schemeAUM: 0.4016796074916116,
            isManaged: false,
            risk: 13.58,
            return: -23.59,
            color: null
          },
          {
            schemeId: 249,
            schemeName: "Sundaram Select Focus-App",
            schemeAUM: 0.5280063070346259,
            isManaged: false,
            risk: 10.61,
            return: -4.17,
            color: null
          },
          {
            schemeId: 250,
            schemeName: "Sundaram Mid Cap -G",
            schemeAUM: 0.4744262213582553,
            isManaged: false,
            risk: 11.39,
            return: -17.57,
            color: null
          },
          {
            schemeId: 251,
            schemeName: "Sundaram Diversified Equity-D",
            schemeAUM: 0.45652288688555687,
            isManaged: false,
            risk: 11.62,
            return: -14.86,
            color: null
          },
          {
            schemeId: 252,
            schemeName: "Sundaram Infrastructure Adv -G",
            schemeAUM: 0.7594166769494524,
            isManaged: false,
            risk: 13.36,
            return: -13.63,
            color: null
          },
          {
            schemeId: 253,
            schemeName: "Sundaram Financial Services Opp -G",
            schemeAUM: 0.7356830886027406,
            isManaged: false,
            risk: 13.27,
            return: -1.16,
            color: null
          },
          {
            schemeId: 254,
            schemeName: "Sundaram Rural and Consumption -App",
            schemeAUM: 0.6313155738776075,
            isManaged: false,
            risk: 11.7,
            return: -13.68,
            color: null
          },
          {
            schemeId: 255,
            schemeName: "Tata Large & Mid Cap -G",
            schemeAUM: 0.3294464692567938,
            isManaged: false,
            risk: 10.43,
            return: -0.58,
            color: null
          },
          {
            schemeId: 256,
            schemeName: "Tata Equity P/E -G",
            schemeAUM: 0.3412119907201159,
            isManaged: false,
            risk: 11.01,
            return: -12.84,
            color: null
          },
          {
            schemeId: 257,
            schemeName: "Tata Ethical -App",
            schemeAUM: 0.6630087693733988,
            isManaged: false,
            risk: 9.63,
            return: -9.78,
            color: null
          },
          {
            schemeId: 258,
            schemeName: "Tata Index -Nifty-G",
            schemeAUM: 0.9855350268465151,
            isManaged: false,
            risk: 11.41,
            return: -5.38,
            color: null
          },
          {
            schemeId: 259,
            schemeName: "Tata Index -Sensex-G",
            schemeAUM: 0.34933627238347875,
            isManaged: false,
            risk: 11.16,
            return: -3.01,
            color: null
          },
          {
            schemeId: 260,
            schemeName: "Tata Infrastructure -Reg-G",
            schemeAUM: 0.2912912292818053,
            isManaged: false,
            risk: 13.36,
            return: -9.9,
            color: null
          },
          {
            schemeId: 261,
            schemeName: "Tata Mid Cap G -G",
            schemeAUM: 0.7519770653408211,
            isManaged: false,
            risk: 11.5,
            return: -7.81,
            color: null
          },
          {
            schemeId: 262,
            schemeName: "Tata Large Cap -App",
            schemeAUM: 0.3697122133865982,
            isManaged: false,
            risk: 11.49,
            return: -6.06,
            color: null
          },
          {
            schemeId: 263,
            schemeName: "Tata Retirement Savings  Cons-G",
            schemeAUM: 0.7433035524692235,
            isManaged: false,
            risk: 3.68,
            return: 2.45,
            color: null
          },
          {
            schemeId: 264,
            schemeName: "Tata Retirement Savings  Moderate-G",
            schemeAUM: 0.6704831473924253,
            isManaged: false,
            risk: 9.37,
            return: -8.71,
            color: null
          },
          {
            schemeId: 265,
            schemeName: "Tata Retirement Savings  Progressive-G",
            schemeAUM: 0.8973634170042566,
            isManaged: false,
            risk: 11.05,
            return: -9.67,
            color: null
          },
          {
            schemeId: 266,
            schemeName: "Tata India Tax Savings -Reg-D Pay",
            schemeAUM: 0.5444643225045509,
            isManaged: false,
            risk: 11.72,
            return: -6.86,
            color: null
          },
          {
            schemeId: 267,
            schemeName: "Tata Young Citizen ",
            schemeAUM: 0.4963061892599612,
            isManaged: false,
            risk: 9.74,
            return: -12.28,
            color: null
          },
          {
            schemeId: 268,
            schemeName: "Taurus Banking & Financial Services -Reg-G",
            schemeAUM: 0.732208050377104,
            isManaged: false,
            risk: 13.7,
            return: -1.02,
            color: null
          },
          {
            schemeId: 269,
            schemeName: "Taurus Largecap Equity -Reg-G",
            schemeAUM: 0.9736907767360123,
            isManaged: false,
            risk: 11.06,
            return: -9.08,
            color: null
          },
          {
            schemeId: 270,
            schemeName: "Taurus Discovery (Midcap) -Reg-G",
            schemeAUM: 0.8880776918579052,
            isManaged: false,
            risk: 11.92,
            return: -18.54,
            color: null
          },
          {
            schemeId: 271,
            schemeName: "Taurus Ethical -Reg-G",
            schemeAUM: 0.37830811494861627,
            isManaged: false,
            risk: 9.33,
            return: -11.48,
            color: null
          },
          {
            schemeId: 272,
            schemeName: "Taurus Infrastructure -Reg-G",
            schemeAUM: 0.699281476681094,
            isManaged: false,
            risk: 12.38,
            return: -16.62,
            color: null
          },
          {
            schemeId: 273,
            schemeName: "Taurus Nifty Index -Reg-G",
            schemeAUM: 0.02952502124079337,
            isManaged: false,
            risk: 11.48,
            return: -6.59,
            color: null
          },
          {
            schemeId: 274,
            schemeName: "Taurus Starshare (Multi Cap) -Reg-G",
            schemeAUM: 0.5717446984916261,
            isManaged: false,
            risk: 11.13,
            return: -14.59,
            color: null
          },
          {
            schemeId: 275,
            schemeName: "Taurus Tax Shield-Reg-G",
            schemeAUM: 0.3747248399278271,
            isManaged: false,
            risk: 10.91,
            return: -12.24,
            color: null
          },
          {
            schemeId: 276,
            schemeName: "Templeton India Equity  Inc -G",
            schemeAUM: 0.2510650818976503,
            isManaged: false,
            risk: 9.95,
            return: -8.8,
            color: null
          },
          {
            schemeId: 277,
            schemeName: "Union Multi Cap -G",
            schemeAUM: 0.25289611475814366,
            isManaged: false,
            risk: 10.29,
            return: -7.65,
            color: null
          },
          {
            schemeId: 278,
            schemeName: "Union Tax Saver -G",
            schemeAUM: 0.9303009430008307,
            isManaged: false,
            risk: 10.43,
            return: -8.18,
            color: null
          },
          {
            schemeId: 279,
            schemeName: "UTI Banking and Financial Services -Reg- Inc",
            schemeAUM: 0.18914230120942332,
            isManaged: false,
            risk: 15.21,
            return: -14.55,
            color: null
          },
          {
            schemeId: 280,
            schemeName: "UTI Children’s Career -Savings Plan",
            schemeAUM: 0.0077553837322486,
            isManaged: false,
            risk: 4.75,
            return: -6.41,
            color: null
          },
          {
            schemeId: 281,
            schemeName: "UTI Children’s Career -Investment-G",
            schemeAUM: 0.5004362694661435,
            isManaged: false,
            risk: 10.68,
            return: -15.39,
            color: null
          },
          {
            schemeId: 282,
            schemeName: "UTI D Yield -Reg-G",
            schemeAUM: 0.8480732855309918,
            isManaged: false,
            risk: 9.68,
            return: -8.38,
            color: null
          },
          {
            schemeId: 283,
            schemeName: "UTI Equity -Reg-D",
            schemeAUM: 0.5013037739893123,
            isManaged: false,
            risk: 10.91,
            return: -13.38,
            color: null
          },
          {
            schemeId: 284,
            schemeName: "UTI LT Equity  (Tax Saving)-Reg-D",
            schemeAUM: 0.2351471658268116,
            isManaged: false,
            risk: 11.64,
            return: -11.45,
            color: null
          },
          {
            schemeId: 285,
            schemeName: "UTI India Consumer -Reg-G",
            schemeAUM: 0.9312969828293935,
            isManaged: false,
            risk: 11.36,
            return: -17.49,
            color: null
          },
          {
            schemeId: 286,
            schemeName: "UTI Infrastructure -Reg- Inc",
            schemeAUM: 0.5160353585405191,
            isManaged: false,
            risk: 14.2,
            return: -10.88,
            color: null
          },
          {
            schemeId: 287,
            schemeName: "UTI Mastershare Unit -Reg- Inc",
            schemeAUM: 0.7315150281487681,
            isManaged: false,
            risk: 10.79,
            return: -8.21,
            color: null
          },
          {
            schemeId: 288,
            schemeName: "UTI Master Equity Unit ",
            schemeAUM: 0.19104076163494144,
            isManaged: false,
            risk: 11.41,
            return: -10.92,
            color: null
          },
          {
            schemeId: 289,
            schemeName: "UTI Mid Cap -Reg- Inc",
            schemeAUM: 0.5088250683302564,
            isManaged: false,
            risk: 13.18,
            return: -17.2,
            color: null
          },
          {
            schemeId: 290,
            schemeName: "UTI MNC -Reg- Inc",
            schemeAUM: 0.6008032762405773,
            isManaged: false,
            risk: 9.34,
            return: -14.89,
            color: null
          },
          {
            schemeId: 291,
            schemeName: "UTI Nifty Index -Reg- Inc",
            schemeAUM: 0.17134394511479734,
            isManaged: false,
            risk: 11.53,
            return: -5.21,
            color: null
          },
          {
            schemeId: 292,
            schemeName: "UTI Value Opp -Reg-G",
            schemeAUM: 0.8649533314142126,
            isManaged: false,
            risk: 11.41,
            return: -11.03,
            color: null
          },
          {
            schemeId: 293,
            schemeName: "UTI Healthcare - Inc",
            schemeAUM: 0.41260190264548346,
            isManaged: false,
            risk: 11.32,
            return: -16.84,
            color: null
          },
          {
            schemeId: 294,
            schemeName: "UTI Retirement Benefit Pension ",
            schemeAUM: 0.020908199992312637,
            isManaged: false,
            risk: 5.7,
            return: -7.12,
            color: null
          },
          {
            schemeId: 295,
            schemeName: "UTI Core Equity -G",
            schemeAUM: 0.5533131218392233,
            isManaged: false,
            risk: 12.14,
            return: -12.88,
            color: null
          },
          {
            schemeId: 296,
            schemeName: "UTI Transportation and Logistics -Reg- Inc",
            schemeAUM: 0.00938815371927082,
            isManaged: false,
            risk: 15.56,
            return: -32.24,
            color: null
          },
          {
            schemeId: 297,
            schemeName: "Aditya Birla Sun Life CEF-Global Agri-Reg-G",
            schemeAUM: 0.9226910341377841,
            isManaged: false,
            risk: 12.88,
            return: 0.44,
            color: null
          },
          {
            schemeId: 298,
            schemeName: "Aditya Birla Sun Life International Equity -B-G",
            schemeAUM: 0.18760810714840281,
            isManaged: false,
            risk: 8.46,
            return: -10.81,
            color: null
          },
          {
            schemeId: 299,
            schemeName: "DSP Natural Resources and New Energy -Reg-G",
            schemeAUM: 0.7448721391227882,
            isManaged: false,
            risk: 15.8,
            return: -19.01,
            color: null
          },
          {
            schemeId: 300,
            schemeName: "DSP World Energy -Reg-G",
            schemeAUM: 0.6451944315410025,
            isManaged: false,
            risk: 14.17,
            return: -16.26,
            color: null
          },
          {
            schemeId: 301,
            schemeName: "Franklin India Prima -G",
            schemeAUM: 0.10549342656501515,
            isManaged: false,
            risk: 10.51,
            return: -12.37,
            color: null
          },
          {
            schemeId: 302,
            schemeName: "Franklin India Dynamic PE Ratio FOF-G",
            schemeAUM: 0.8459980966179297,
            isManaged: false,
            risk: 3.97,
            return: 2.13,
            color: null
          },
          {
            schemeId: 303,
            schemeName: "Franklin India Life Stage FOF-The 20s-G",
            schemeAUM: 0.06145832508821525,
            isManaged: false,
            risk: 9.07,
            return: -9.83,
            color: null
          },
          {
            schemeId: 304,
            schemeName: "Franklin India Life Stage FOF-The 30s-G",
            schemeAUM: 0.8109388466422511,
            isManaged: false,
            risk: 6.31,
            return: -4.25,
            color: null
          },
          {
            schemeId: 305,
            schemeName: "Franklin India Life Stage FOF-The 40s-G",
            schemeAUM: 0.33940667973582084,
            isManaged: false,
            risk: 4.09,
            return: 0.28,
            color: null
          },
          {
            schemeId: 306,
            schemeName: "Franklin India Life Stage FOF-The 50 Plus-G",
            schemeAUM: 0.3515761808853468,
            isManaged: false,
            risk: 2.7,
            return: 3.06,
            color: null
          },
          {
            schemeId: 307,
            schemeName:
              "Franklin India Life Stage FOF -The 50s Plus Floating Rate-G",
            schemeAUM: 0.9902633360513644,
            isManaged: false,
            risk: 2.34,
            return: 3.56,
            color: null
          },
          {
            schemeId: 308,
            schemeName: "HSBC Global Emerging Markets -G",
            schemeAUM: 0.7711233361206193,
            isManaged: false,
            risk: 11.96,
            return: -4.61,
            color: null
          },
          {
            schemeId: 309,
            schemeName: "ICICI Prudential Passive Strategy -G",
            schemeAUM: 0.5584929837219337,
            isManaged: false,
            risk: 10.54,
            return: -8.38,
            color: null
          },
          {
            schemeId: 310,
            schemeName: "ICICI Prudential Moderate -G",
            schemeAUM: 0.7993796501345065,
            isManaged: false,
            risk: 0.96,
            return: 7.27,
            color: null
          },
          {
            schemeId: 311,
            schemeName: "ICICI Prudential Child Care -Gift Plan",
            schemeAUM: 0.16058897027258423,
            isManaged: false,
            risk: 9.33,
            return: -4.15,
            color: null
          },
          {
            schemeId: 312,
            schemeName: "ICICI Prudential Smallcap -G",
            schemeAUM: 0.7477834128557204,
            isManaged: false,
            risk: 11.73,
            return: -12.44,
            color: null
          },
          {
            schemeId: 313,
            schemeName: "ICICI Prudential AA -G",
            schemeAUM: 0.00032300800285312015,
            isManaged: false,
            risk: 2.42,
            return: 5.12,
            color: null
          },
          {
            schemeId: 314,
            schemeName: "ICICI Prudential Thematic Adv -G",
            schemeAUM: 0.9468657137440875,
            isManaged: false,
            risk: 9.9,
            return: -13.21,
            color: null
          },
          {
            schemeId: 315,
            schemeName: "ICICI Prudential Debt Management -G",
            schemeAUM: 0.7074208592113125,
            isManaged: false,
            risk: 0.59,
            return: 8.04,
            color: null
          },
          {
            schemeId: 316,
            schemeName: "Aditya Birla Sun Life Financial Planning FOF Aggr-G",
            schemeAUM: 0.06208637757030333,
            isManaged: false,
            risk: 7.81,
            return: -6.62,
            color: null
          },
          {
            schemeId: 317,
            schemeName: "Aditya Birla Sun Life Financial Planning FOF Cons-G",
            schemeAUM: 0.530607251990326,
            isManaged: false,
            risk: 3.36,
            return: 0.07,
            color: null
          },
          {
            schemeId: 318,
            schemeName:
              "Aditya Birla Sun Life Financial Planning FOF Prudent-G",
            schemeAUM: 0.6524179201616997,
            isManaged: false,
            risk: 5.59,
            return: -2.95,
            color: null
          },
          {
            schemeId: 319,
            schemeName: "Aditya Birla Sun Life Global Emerging Opp -G",
            schemeAUM: 0.6892759281423597,
            isManaged: false,
            risk: 11.97,
            return: 1.55,
            color: null
          },
          {
            schemeId: 320,
            schemeName: "Mirae Asset Great Consumer -Reg-G",
            schemeAUM: 0.8445254337318988,
            isManaged: false,
            risk: 11.51,
            return: -9.6,
            color: null
          },
          {
            schemeId: 321,
            schemeName: "HDFC Dynamic PE Ratio FOF-Reg-G",
            schemeAUM: 0.4227616807849772,
            isManaged: false,
            risk: 6.23,
            return: -1.06,
            color: null
          },
          {
            schemeId: 322,
            schemeName: "Motilal Oswal M50 ETF",
            schemeAUM: 0.4873281460188401,
            isManaged: false,
            risk: 11.46,
            return: -5.1,
            color: null
          },
          {
            schemeId: 323,
            schemeName: "Quantum Multi Asset -G-Dir",
            schemeAUM: 0.3591856113781333,
            isManaged: false,
            risk: 3.18,
            return: 5.91,
            color: null
          },
          {
            schemeId: 324,
            schemeName: "Templeton India Value -D",
            schemeAUM: 0.7496572252630764,
            isManaged: false,
            risk: 12.4,
            return: -19.3,
            color: null
          },
          {
            schemeId: 325,
            schemeName: "Franklin India Pension-G",
            schemeAUM: 0.44882888672167565,
            isManaged: false,
            risk: 4.24,
            return: 1.53,
            color: null
          },
          {
            schemeId: 326,
            schemeName: "Motilal Oswal Focused 25 -Reg-G",
            schemeAUM: 0.828115954502129,
            isManaged: false,
            risk: 11.12,
            return: -6.74,
            color: null
          },
          {
            schemeId: 327,
            schemeName: "Parag Parikh LT Equity -Reg-G",
            schemeAUM: 0.9676613018999447,
            isManaged: false,
            risk: 7.27,
            return: -3.79,
            color: null
          },
          {
            schemeId: 328,
            schemeName: "Edelweiss US Value Equity Offshore -Reg-G",
            schemeAUM: 0.00936807977665488,
            isManaged: false,
            risk: 11.57,
            return: -1.23,
            color: null
          },
          {
            schemeId: 329,
            schemeName: "ICICI Prudential Nifty 100 ETF",
            schemeAUM: 0.8293619312103024,
            isManaged: false,
            risk: 11.27,
            return: -6.62,
            color: null
          },
          {
            schemeId: 330,
            schemeName: "IDBI Equity Adv -Reg-G",
            schemeAUM: 0.01913759988879704,
            isManaged: false,
            risk: 11.57,
            return: -11.26,
            color: null
          },
          {
            schemeId: 331,
            schemeName: "ICICI Prudential Global Stable Equity -G",
            schemeAUM: 0.8282912991665916,
            isManaged: false,
            risk: 9.43,
            return: 2.09,
            color: null
          },
          {
            schemeId: 332,
            schemeName: "Axis Small Cap -Reg-G",
            schemeAUM: 0.18578803510797615,
            isManaged: false,
            risk: 8.77,
            return: 1.48,
            color: null
          },
          {
            schemeId: 333,
            schemeName: "DHFL Pramerica Midcap Opp -Reg-G",
            schemeAUM: 0.21762452097649732,
            isManaged: false,
            risk: 12.84,
            return: -20.06,
            color: null
          },
          {
            schemeId: 334,
            schemeName:
              "Aditya Birla Sun Life Banking And Financial Services -Reg-G",
            schemeAUM: 0.843715526054907,
            isManaged: false,
            risk: 15.51,
            return: -13.91,
            color: null
          },
          {
            schemeId: 335,
            schemeName: "Kotak US Equity -G",
            schemeAUM: 0.907068733355743,
            isManaged: false,
            risk: 13.58,
            return: -2.29,
            color: null
          },
          {
            schemeId: 336,
            schemeName:
              "Invesco India Feeder-Invesco Pan European Equity -Reg-G",
            schemeAUM: 0.306163006303398,
            isManaged: false,
            risk: 11.96,
            return: -14.39,
            color: null
          },
          {
            schemeId: 337,
            schemeName: "Edelweiss Europe Dynamic Equity Offshore -Reg-G",
            schemeAUM: 0.3968132453751727,
            isManaged: false,
            risk: 11.25,
            return: -9.3,
            color: null
          },
          {
            schemeId: 338,
            schemeName: "CPSE Exchange Traded ",
            schemeAUM: 0.17029607315939543,
            isManaged: false,
            risk: 19.31,
            return: -19.02,
            color: null
          },
          {
            schemeId: 339,
            schemeName: "HSBC Asia Pacific (Ex Japan) D Yield -Reg-G",
            schemeAUM: 0.4207605299231627,
            isManaged: false,
            risk: 11.21,
            return: 0.76,
            color: null
          },
          {
            schemeId: 340,
            schemeName: "IDBI Diversified Equity -G",
            schemeAUM: 0.9113870456330422,
            isManaged: false,
            risk: 9.39,
            return: -10.96,
            color: null
          },
          {
            schemeId: 341,
            schemeName: "Kotak Bluechip -D",
            schemeAUM: 0.8122136951626742,
            isManaged: false,
            risk: 11.25,
            return: -7.8,
            color: null
          },
          {
            schemeId: 342,
            schemeName: "Motilal Oswal Midcap 30 -Reg-G",
            schemeAUM: 0.9088375335924554,
            isManaged: false,
            risk: 13.09,
            return: -16.46,
            color: null
          },
          {
            schemeId: 343,
            schemeName: "Reliance ETF Consumption",
            schemeAUM: 0.38070479323757,
            isManaged: false,
            risk: 12.78,
            return: -13.48,
            color: null
          },
          {
            schemeId: 344,
            schemeName: "Reliance ETF D Opp",
            schemeAUM: 0.7718427536519064,
            isManaged: false,
            risk: 10.79,
            return: -8.52,
            color: null
          },
          {
            schemeId: 345,
            schemeName: "SBI Tax Adv -III-Reg-G",
            schemeAUM: 0.4236238936726817,
            isManaged: false,
            risk: 11.1,
            return: 0.38,
            color: null
          },
          {
            schemeId: 346,
            schemeName: "HSBC Managed Solutions India-Cons-G",
            schemeAUM: 0.8257603023679612,
            isManaged: false,
            risk: 3.81,
            return: 5.23,
            color: null
          },
          {
            schemeId: 347,
            schemeName: "HSBC Managed Solutions India-G-G",
            schemeAUM: 0.713936571881794,
            isManaged: false,
            risk: 9.29,
            return: -7,
            color: null
          },
          {
            schemeId: 348,
            schemeName: "HSBC Managed Solutions India-Moderate-G",
            schemeAUM: 0.2451641985147479,
            isManaged: false,
            risk: 7.72,
            return: -4.68,
            color: null
          },
          {
            schemeId: 349,
            schemeName: "Motilal Oswal Multicap 35 -Reg-G",
            schemeAUM: 0.5098867465279449,
            isManaged: false,
            risk: 12.11,
            return: -9.86,
            color: null
          },
          {
            schemeId: 350,
            schemeName: "Aditya Birla Sun Life Tax Relief 96-D",
            schemeAUM: 0.7583721272532553,
            isManaged: false,
            risk: 10.04,
            return: -14.82,
            color: null
          },
          {
            schemeId: 351,
            schemeName: "Franklin India Feeder-Franklin European G -G",
            schemeAUM: 0.6448660966535531,
            isManaged: false,
            risk: 12.01,
            return: -15.03,
            color: null
          },
          {
            schemeId: 352,
            schemeName: "ICICI Prudential D Yield Equity -G",
            schemeAUM: 0.4862200148809612,
            isManaged: false,
            risk: 10.08,
            return: -15.66,
            color: null
          },
          {
            schemeId: 353,
            schemeName: "ICICI Prudential G -1-DP",
            schemeAUM: 0.6365198472622184,
            isManaged: false,
            risk: 9.22,
            return: 0.86,
            color: null
          },
          {
            schemeId: 354,
            schemeName: "Edelweiss Emerging Markets Opp Equity Offshore -Reg-G",
            schemeAUM: 0.4182932030511264,
            isManaged: false,
            risk: 11.36,
            return: 1.67,
            color: null
          },
          {
            schemeId: 355,
            schemeName: "L&T Emerging Businesses -Reg-G",
            schemeAUM: 0.32193882556251374,
            isManaged: false,
            risk: 10.89,
            return: -21.97,
            color: null
          },
          {
            schemeId: 356,
            schemeName: "Invesco India Feeder-Invesco Global Equity  Inc -G",
            schemeAUM: 0.720055640286517,
            isManaged: false,
            risk: 9.82,
            return: -5.33,
            color: null
          },
          {
            schemeId: 357,
            schemeName: "Union Small Cap -G",
            schemeAUM: 0.24823174891102906,
            isManaged: false,
            risk: 10.88,
            return: -22.74,
            color: null
          },
          {
            schemeId: 358,
            schemeName: "DSP Global Allocation -Reg-G",
            schemeAUM: 0.07776124225692893,
            isManaged: false,
            risk: 6.47,
            return: 2.1,
            color: null
          },
          {
            schemeId: 359,
            schemeName: "Reliance Japan Equity -G",
            schemeAUM: 0.24691010421090143,
            isManaged: false,
            risk: 10.93,
            return: -0.01,
            color: null
          },
          {
            schemeId: 360,
            schemeName: "ICICI Prudential G -2-DP",
            schemeAUM: 0.10780813883490481,
            isManaged: false,
            risk: 8.24,
            return: 0.44,
            color: null
          },
          {
            schemeId: 361,
            schemeName: "L&T Business Cycle -Reg-G",
            schemeAUM: 0.9477789206673726,
            isManaged: false,
            risk: 12.58,
            return: -11.75,
            color: null
          },
          {
            schemeId: 362,
            schemeName: "Reliance ETF Sensex",
            schemeAUM: 0.4655097267007189,
            isManaged: false,
            risk: 11.31,
            return: -2.79,
            color: null
          },
          {
            schemeId: 363,
            schemeName: "UTI Focussed Equity -I-G",
            schemeAUM: 0.1166935676408618,
            isManaged: false,
            risk: 13.21,
            return: -11.69,
            color: null
          },
          {
            schemeId: 364,
            schemeName: "ICICI Prudential G -3-DP",
            schemeAUM: 0.4307345173741586,
            isManaged: false,
            risk: 8.38,
            return: -5.19,
            color: null
          },
          {
            schemeId: 365,
            schemeName: "IIFL Focused Equity -Reg-G",
            schemeAUM: 0.12316732672640418,
            isManaged: false,
            risk: 12.67,
            return: -5.02,
            color: null
          },
          {
            schemeId: 366,
            schemeName: "SBI Equity Opp -I-Reg-G",
            schemeAUM: 0.38846958554128763,
            isManaged: false,
            risk: 10.84,
            return: -10.06,
            color: null
          },
          {
            schemeId: 367,
            schemeName: "DSP 3 Y Close Ended Equity -Reg-G",
            schemeAUM: 0.14623705744939852,
            isManaged: false,
            risk: 14.64,
            return: -6,
            color: null
          },
          {
            schemeId: 368,
            schemeName: "Reliance Retirement -Wealth Creation -G",
            schemeAUM: 0.05498651045274272,
            isManaged: false,
            risk: 12.27,
            return: -13.61,
            color: null
          },
          {
            schemeId: 369,
            schemeName: "Reliance Retirement - Inc Generation -G",
            schemeAUM: 0.1644660240967084,
            isManaged: false,
            risk: 4.25,
            return: 11.35,
            color: null
          },
          {
            schemeId: 370,
            schemeName: "LIC MF Banking & Financial Services -Reg-G",
            schemeAUM: 0.5699488771530521,
            isManaged: false,
            risk: 13.64,
            return: -5.71,
            color: null
          },
          {
            schemeId: 371,
            schemeName: "Sundaram Select Small Cap-III-Reg-G",
            schemeAUM: 0.9221769980537011,
            isManaged: false,
            risk: 12.02,
            return: -10.04,
            color: null
          },
          {
            schemeId: 372,
            schemeName: "Kotak Banking ETF",
            schemeAUM: 0.9900700452542708,
            isManaged: false,
            risk: 13.84,
            return: -2.95,
            color: null
          },
          {
            schemeId: 373,
            schemeName: "SBI-ETF BSE 100",
            schemeAUM: 0.390029722239019,
            isManaged: false,
            risk: 11.6,
            return: -6.86,
            color: null
          },
          {
            schemeId: 374,
            schemeName: "SBI-ETF Nifty Bank",
            schemeAUM: 0.678163313862717,
            isManaged: false,
            risk: 13.85,
            return: -2.86,
            color: null
          },
          {
            schemeId: 375,
            schemeName: "SBI Banking & Financial Services -Reg-G",
            schemeAUM: 0.49371043007710624,
            isManaged: false,
            risk: 14.03,
            return: -2.92,
            color: null
          },
          {
            schemeId: 376,
            schemeName: "SBI-ETF Nifty Next 50",
            schemeAUM: 0.0014601127125113411,
            isManaged: false,
            risk: 13.45,
            return: -16.12,
            color: null
          },
          {
            schemeId: 377,
            schemeName: "Sundaram LT Tax Adv -I-Reg-G",
            schemeAUM: 0.884778214961571,
            isManaged: false,
            risk: 11.07,
            return: -12.23,
            color: null
          },
          {
            schemeId: 378,
            schemeName: "SBI LT Adv -I-Reg-G",
            schemeAUM: 0.20019600615905664,
            isManaged: false,
            risk: 11,
            return: -9.98,
            color: null
          },
          {
            schemeId: 379,
            schemeName: "SBI LT Adv -II-Reg-G",
            schemeAUM: 0.2463555255991967,
            isManaged: false,
            risk: 11.15,
            return: -7.65,
            color: null
          },
          {
            schemeId: 380,
            schemeName: "Aditya Birla Sun Life Manufacturing Equity -Reg-G",
            schemeAUM: 0.030511265443666113,
            isManaged: false,
            risk: 11.19,
            return: -17.03,
            color: null
          },
          {
            schemeId: 381,
            schemeName: "Franklin India Multi-Asset Solution -G",
            schemeAUM: 0.9924677344041595,
            isManaged: false,
            risk: 4.23,
            return: 2.37,
            color: null
          },
          {
            schemeId: 382,
            schemeName: "Motilal Oswal LT Equity -Reg-G",
            schemeAUM: 0.7818204397205275,
            isManaged: false,
            risk: 11.85,
            return: -10.59,
            color: null
          },
          {
            schemeId: 383,
            schemeName: "Sundaram World Brand -- II-Reg-G",
            schemeAUM: 0.051938799902875754,
            isManaged: false,
            risk: 13.52,
            return: 3.18,
            color: null
          },
          {
            schemeId: 384,
            schemeName: "Sundaram World Brand -- III-Reg-G",
            schemeAUM: 0.7207776894397167,
            isManaged: false,
            risk: 13.5,
            return: 3.13,
            color: null
          },
          {
            schemeId: 385,
            schemeName: "LIC MF G-Sec LT Exchange Traded ",
            schemeAUM: 0.3517255707516511,
            isManaged: false,
            risk: 4.22,
            return: 16.37,
            color: null
          },
          {
            schemeId: 386,
            schemeName: "DHFL Pramerica Diversified Equity -Reg-G",
            schemeAUM: 0.4885636119229082,
            isManaged: false,
            risk: 11.92,
            return: -10.5,
            color: null
          },
          {
            schemeId: 387,
            schemeName: "Edelweiss Multi-Cap -Reg-G",
            schemeAUM: 0.5972714126091463,
            isManaged: false,
            risk: 10.42,
            return: -8.69,
            color: null
          },
          {
            schemeId: 388,
            schemeName: "Sundaram Value -II-Reg-G",
            schemeAUM: 0.8901641397205293,
            isManaged: false,
            risk: 10.57,
            return: -11.12,
            color: null
          },
          {
            schemeId: 389,
            schemeName: "LIC MF Large & Midcap -Reg-G",
            schemeAUM: 0.5285911543006221,
            isManaged: false,
            risk: 10.73,
            return: -8.53,
            color: null
          },
          {
            schemeId: 390,
            schemeName: "HSBC Global Consumer Opp  (HGCOF)-Reg-G",
            schemeAUM: 0.13916996450442554,
            isManaged: false,
            risk: 11.25,
            return: -1.96,
            color: null
          },
          {
            schemeId: 391,
            schemeName: "Sundaram Select Small Cap-IV-Reg-G",
            schemeAUM: 0.6829977082847525,
            isManaged: false,
            risk: 11.89,
            return: -9.98,
            color: null
          },
          {
            schemeId: 392,
            schemeName: "DHFL Pramerica Large Cap -2-Reg-G",
            schemeAUM: 0.23260232384883306,
            isManaged: false,
            risk: 11,
            return: -7.84,
            color: null
          },
          {
            schemeId: 393,
            schemeName: "Edelweiss ETF-Nifty 50",
            schemeAUM: 0.6640260502153241,
            isManaged: false,
            risk: 11.53,
            return: -4.86,
            color: null
          },
          {
            schemeId: 394,
            schemeName: "Essel LT Adv -Reg-G",
            schemeAUM: 0.5470543049701051,
            isManaged: false,
            risk: 10.8,
            return: -9.15,
            color: null
          },
          {
            schemeId: 395,
            schemeName: "Tata Banking & Financial Services -Reg-G",
            schemeAUM: 0.09280981971128432,
            isManaged: false,
            risk: 13.51,
            return: -1.79,
            color: null
          },
          {
            schemeId: 396,
            schemeName: "Tata Digital India -Reg-G",
            schemeAUM: 0.20208974576559702,
            isManaged: false,
            risk: 12.59,
            return: -0.32,
            color: null
          },
          {
            schemeId: 397,
            schemeName: "Tata India Consumer -Reg-G",
            schemeAUM: 0.19704378678421475,
            isManaged: false,
            risk: 11.16,
            return: -17.12,
            color: null
          },
          {
            schemeId: 398,
            schemeName: "Tata India Pharma & Healthcare -Reg-G",
            schemeAUM: 0.567744441612168,
            isManaged: false,
            risk: 11.33,
            return: -8.65,
            color: null
          },
          {
            schemeId: 399,
            schemeName: "Tata Resources & Energy -Reg-G",
            schemeAUM: 0.269528377730889,
            isManaged: false,
            risk: 12.34,
            return: -12.29,
            color: null
          },
          {
            schemeId: 400,
            schemeName: "Aditya Birla Sun Life Emerging Leaders -7-Reg-G",
            schemeAUM: 0.6709192387812295,
            isManaged: false,
            risk: 14.15,
            return: -29.46,
            color: null
          },
          {
            schemeId: 401,
            schemeName: "Edelweiss ETF-Nifty 100 Quality 30",
            schemeAUM: 0.43249505829791346,
            isManaged: false,
            risk: 11.43,
            return: -9.72,
            color: null
          },
          {
            schemeId: 402,
            schemeName: "HDFC Retirement Savings -Equity-Reg-G",
            schemeAUM: 0.8211665261791938,
            isManaged: false,
            risk: 9.2,
            return: -7.14,
            color: null
          },
          {
            schemeId: 403,
            schemeName: "HDFC Retirement Savings -Hybrid-Debt-Reg-G",
            schemeAUM: 0.8083164032678647,
            isManaged: false,
            risk: 2.66,
            return: 4.23,
            color: null
          },
          {
            schemeId: 404,
            schemeName: "HDFC Retirement Savings -Hybrid-Equity-Reg-G",
            schemeAUM: 0.5032659303618463,
            isManaged: false,
            risk: 7.42,
            return: -3.66,
            color: null
          },
          {
            schemeId: 405,
            schemeName: "ICICI Prudential NV20 ETF",
            schemeAUM: 0.5182020415434141,
            isManaged: false,
            risk: 11.43,
            return: -2.52,
            color: null
          },
          {
            schemeId: 406,
            schemeName: "LIC MF Exchange Traded -Nifty 100",
            schemeAUM: 0.3945223542423437,
            isManaged: false,
            risk: 11.57,
            return: -6.87,
            color: null
          },
          {
            schemeId: 407,
            schemeName: "SBI-ETF 10 Y Gilt",
            schemeAUM: 0.6283006968727269,
            isManaged: false,
            risk: 4.63,
            return: 15.06,
            color: null
          },
          {
            schemeId: 408,
            schemeName: "SBI LT Adv -III-Reg-G",
            schemeAUM: 0.2967438175405688,
            isManaged: false,
            risk: 10.77,
            return: -6.39,
            color: null
          },
          {
            schemeId: 409,
            schemeName: "Sundaram LT Tax Adv -II-Reg-G",
            schemeAUM: 0.6668128080700384,
            isManaged: false,
            risk: 10.99,
            return: -11.28,
            color: null
          },
          {
            schemeId: 410,
            schemeName: "Sundaram Value -III-Reg-G",
            schemeAUM: 0.536104727763826,
            isManaged: false,
            risk: 10.91,
            return: -11.03,
            color: null
          },
          {
            schemeId: 411,
            schemeName: "UTI LT Adv -III-G",
            schemeAUM: 0.29322164161309683,
            isManaged: false,
            risk: 13.8,
            return: -17.87,
            color: null
          },
          {
            schemeId: 412,
            schemeName: "ICICI Prudential Midcap Select ETF",
            schemeAUM: 0.6901758250342587,
            isManaged: false,
            risk: 14.39,
            return: -18.64,
            color: null
          },
          {
            schemeId: 413,
            schemeName: "Aditya Birla Sun Life Sensex ETF",
            schemeAUM: 0.42541093721235446,
            isManaged: false,
            risk: 11.33,
            return: -5.6,
            color: null
          },
          {
            schemeId: 414,
            schemeName: "Reliance ETF LT Gilt",
            schemeAUM: 0.535355369221217,
            isManaged: false,
            risk: 4.19,
            return: 17.13,
            color: null
          },
          {
            schemeId: 415,
            schemeName: "LIC MF Exchange Traded -Nifty 50",
            schemeAUM: 0.24233613716837166,
            isManaged: false,
            risk: 11.53,
            return: -5.05,
            color: null
          },
          {
            schemeId: 416,
            schemeName: "LIC MF Exchange Traded -Sensex",
            schemeAUM: 0.9304621635059087,
            isManaged: false,
            risk: 11.33,
            return: -2.74,
            color: null
          },
          {
            schemeId: 417,
            schemeName: "Axis Childrens Gift -Compulsory Lock-in-Reg-G",
            schemeAUM: 0.10983798473403339,
            isManaged: false,
            risk: 8.03,
            return: -2.78,
            color: null
          },
          {
            schemeId: 418,
            schemeName: "Aditya Birla Sun Life Resurgent India -1-Reg-G",
            schemeAUM: 0.687744529097335,
            isManaged: false,
            risk: 14.43,
            return: -16.6,
            color: null
          },
          {
            schemeId: 419,
            schemeName: "IDFC Nifty ETF",
            schemeAUM: 0.731184016507364,
            isManaged: false,
            risk: 11.4,
            return: -4.95,
            color: null
          },
          {
            schemeId: 420,
            schemeName: "IDFC Sensex ETF",
            schemeAUM: 0.15411295569550454,
            isManaged: false,
            risk: 11.2,
            return: -2.76,
            color: null
          },
          {
            schemeId: 421,
            schemeName: "Mahindra Mutual  Kar Bachat Yojana-Reg-G",
            schemeAUM: 0.5354271034241014,
            isManaged: false,
            risk: 10.18,
            return: -12.07,
            color: null
          },
          {
            schemeId: 422,
            schemeName: "IDBI Midcap -G",
            schemeAUM: 0.6830792430485912,
            isManaged: false,
            risk: 11.18,
            return: -19.98,
            color: null
          },
          {
            schemeId: 423,
            schemeName: "ICICI Prudential Value -10-Cum",
            schemeAUM: 0.1676498712704555,
            isManaged: false,
            risk: 8.89,
            return: -11.69,
            color: null
          },
          {
            schemeId: 424,
            schemeName: "ICICI Prudential Value -11-Cum",
            schemeAUM: 0.05683690808982855,
            isManaged: false,
            risk: 10.29,
            return: -5.49,
            color: null
          },
          {
            schemeId: 425,
            schemeName: "Sundaram Smart NIFTY 100 Equal Weight -Reg-G",
            schemeAUM: 0.9579819223610613,
            isManaged: false,
            risk: 12.82,
            return: -15.89,
            color: null
          },
          {
            schemeId: 426,
            schemeName: "Sundaram LT Micro Cap Tax Adv -III-Reg-G",
            schemeAUM: 0.2131217481760983,
            isManaged: false,
            risk: 13.78,
            return: -25.91,
            color: null
          },
          {
            schemeId: 427,
            schemeName: "Sundaram LT Micro Cap Tax Adv -IV-Reg-G",
            schemeAUM: 0.9812549615791084,
            isManaged: false,
            risk: 13.64,
            return: -26.88,
            color: null
          },
          {
            schemeId: 428,
            schemeName: "UTI LT Adv -V-G",
            schemeAUM: 0.9997244115533406,
            isManaged: false,
            risk: 14.28,
            return: -17.17,
            color: null
          },
          {
            schemeId: 429,
            schemeName: "Sundaram TOP 100-VI-Reg-G",
            schemeAUM: 0.9577351743070439,
            isManaged: false,
            risk: 11.39,
            return: -12.88,
            color: null
          },
          {
            schemeId: 430,
            schemeName: "SBI LT Adv -IV-Reg-G",
            schemeAUM: 0.38114588489601453,
            isManaged: false,
            risk: 11.39,
            return: -8.58,
            color: null
          },
          {
            schemeId: 431,
            schemeName: "Sundaram Select Micro Cap-XI-Reg-G",
            schemeAUM: 0.9828786175371793,
            isManaged: false,
            risk: 13.8,
            return: -25.77,
            color: null
          },
          {
            schemeId: 432,
            schemeName: "Sundaram Select Micro Cap-XII-Reg-G",
            schemeAUM: 0.037601778136604924,
            isManaged: false,
            risk: 13.89,
            return: -25.54,
            color: null
          },
          {
            schemeId: 433,
            schemeName: "UTI LT Adv -IV-G",
            schemeAUM: 0.7377739319982941,
            isManaged: false,
            risk: 14.7,
            return: -16.94,
            color: null
          },
          {
            schemeId: 434,
            schemeName: "Aditya Birla Sun Life Resurgent India -2-Reg-G",
            schemeAUM: 0.2756805363681052,
            isManaged: false,
            risk: 14.67,
            return: -19.62,
            color: null
          },
          {
            schemeId: 435,
            schemeName: "Axis Emerging Opp -1-Reg-G",
            schemeAUM: 0.7934949628220107,
            isManaged: false,
            risk: 12.63,
            return: -13.69,
            color: null
          },
          {
            schemeId: 436,
            schemeName: "Axis Emerging Opp -2-Reg-G",
            schemeAUM: 0.47130298106556623,
            isManaged: false,
            risk: 12.53,
            return: -14.72,
            color: null
          },
          {
            schemeId: 437,
            schemeName: "ICICI Prudential Value -9-Cum",
            schemeAUM: 0.7480641659427099,
            isManaged: false,
            risk: 11.95,
            return: -6.37,
            color: null
          },
          {
            schemeId: 438,
            schemeName: "Aditya Birla Sun Life Resurgent India -3-Reg-G",
            schemeAUM: 0.48890277466618115,
            isManaged: false,
            risk: 12.05,
            return: -18.11,
            color: null
          },
          {
            schemeId: 439,
            schemeName: "Sundaram Value -VII-Reg-G",
            schemeAUM: 0.7569853972552891,
            isManaged: false,
            risk: 14.68,
            return: -20.02,
            color: null
          },
          {
            schemeId: 440,
            schemeName: "ICICI Prudential Value -12-D",
            schemeAUM: 0.3760330526052291,
            isManaged: false,
            risk: 7.94,
            return: 2.05,
            color: null
          },
          {
            schemeId: 441,
            schemeName: "Sundaram Select Micro Cap-XIV-Reg-G",
            schemeAUM: 0.5441327294217948,
            isManaged: false,
            risk: 13.73,
            return: -27.44,
            color: null
          },
          {
            schemeId: 442,
            schemeName: "Sundaram TOP 100-VII-Reg-G",
            schemeAUM: 0.5830146662483222,
            isManaged: false,
            risk: 11.48,
            return: -13.2,
            color: null
          },
          {
            schemeId: 443,
            schemeName: "Sundaram Select Micro Cap-XV-Reg-G",
            schemeAUM: 0.7498133936895839,
            isManaged: false,
            risk: 13.88,
            return: -29.09,
            color: null
          },
          {
            schemeId: 444,
            schemeName: "Sundaram Value -VIII-Reg-G",
            schemeAUM: 0.057989375861826176,
            isManaged: false,
            risk: 11.9,
            return: -15.55,
            color: null
          },
          {
            schemeId: 445,
            schemeName: "Union Largecap -Reg-G",
            schemeAUM: 0.7006628524784275,
            isManaged: false,
            risk: 11.02,
            return: -7.03,
            color: null
          },
          {
            schemeId: 446,
            schemeName: "HDFC Equity Opp -2-1126 D-May 2017 (1)-Reg-G",
            schemeAUM: 0.3307224405810376,
            isManaged: false,
            risk: 12.59,
            return: -9.21,
            color: null
          },
          {
            schemeId: 447,
            schemeName: "ICICI Prudential Value -13-D",
            schemeAUM: 0.1867807843449587,
            isManaged: false,
            risk: 8.85,
            return: -3.7,
            color: null
          },
          {
            schemeId: 448,
            schemeName: "ICICI Prudential Value -14-Cum",
            schemeAUM: 0.6451937995474444,
            isManaged: false,
            risk: 7.15,
            return: -0.78,
            color: null
          },
          {
            schemeId: 449,
            schemeName: "Mahindra Mutual  Badhat Yojana-Reg-G",
            schemeAUM: 0.4642182570768405,
            isManaged: false,
            risk: 10.28,
            return: -7.78,
            color: null
          },
          {
            schemeId: 450,
            schemeName: "IDBI Small Cap -G",
            schemeAUM: 0.5706945964576073,
            isManaged: false,
            risk: 11.3,
            return: -20.64,
            color: null
          },
          {
            schemeId: 451,
            schemeName: "Sundaram LT Micro Cap Tax Adv -V-Reg-G",
            schemeAUM: 0.02932630633510036,
            isManaged: false,
            risk: 13.74,
            return: -28.3,
            color: null
          },
          {
            schemeId: 452,
            schemeName: "Sundaram Select Small Cap-V-Reg-G",
            schemeAUM: 0.48793696306849443,
            isManaged: false,
            risk: 12.31,
            return: -10.89,
            color: null
          },
          {
            schemeId: 453,
            schemeName: "Sundaram Select Micro Cap-XVI-Reg-G",
            schemeAUM: 0.9089991542797733,
            isManaged: false,
            risk: 14.1,
            return: -28.88,
            color: null
          },
          {
            schemeId: 454,
            schemeName: "Sundaram Select Small Cap-VI-Reg-G",
            schemeAUM: 0.03741677002321242,
            isManaged: false,
            risk: 12.47,
            return: -11.53,
            color: null
          },
          {
            schemeId: 455,
            schemeName: "ICICI Prudential Value -15-Cum",
            schemeAUM: 0.6050819734934441,
            isManaged: false,
            risk: 10.15,
            return: -1.19,
            color: null
          },
          {
            schemeId: 456,
            schemeName: "ICICI Prudential Value -16-Cum",
            schemeAUM: 0.48548089676969775,
            isManaged: false,
            risk: 14.42,
            return: 1.92,
            color: null
          },
          {
            schemeId: 457,
            schemeName: "HDFC Equity Opp -2-1100 D-Jun 2017 (1)-Reg-G",
            schemeAUM: 0.5241365882165825,
            isManaged: false,
            risk: 13.05,
            return: -8.49,
            color: null
          },
          {
            schemeId: 458,
            schemeName: "Aditya Birla Sun Life Resurgent India -4-Reg-G",
            schemeAUM: 0.8931790733526426,
            isManaged: false,
            risk: 14.95,
            return: -17.13,
            color: null
          },
          {
            schemeId: 459,
            schemeName: "Axis Nifty ETF",
            schemeAUM: 0.8310588255022175,
            isManaged: false,
            risk: 11.46,
            return: -4.88,
            color: null
          },
          {
            schemeId: 460,
            schemeName: "ICICI Prudential Nifty Low Vol 30 ETF",
            schemeAUM: 0.32980840096102493,
            isManaged: false,
            risk: 10.06,
            return: -5.71,
            color: null
          },
          {
            schemeId: 461,
            schemeName: "UTI- Nifty Next 50 Exchange Traded ",
            schemeAUM: 0.1893777478641745,
            isManaged: false,
            risk: 13.44,
            return: -15.96,
            color: null
          },
          {
            schemeId: 462,
            schemeName: "Sundaram Value -IX-Reg-G",
            schemeAUM: 0.17163947964945114,
            isManaged: false,
            risk: 14.87,
            return: -15.79,
            color: null
          },
          {
            schemeId: 463,
            schemeName: "BNP Paribas Focused 25 Equity -Reg-G",
            schemeAUM: 0.9831683487781926,
            isManaged: false,
            risk: 11.25,
            return: -7.11,
            color: null
          },
          {
            schemeId: 464,
            schemeName: "ICICI Prudential Sensex Index -G",
            schemeAUM: 0.5274329591880751,
            isManaged: false,
            risk: 11.13,
            return: -3.46,
            color: null
          },
          {
            schemeId: 465,
            schemeName: "IDBI Focused 30 Equity -Reg-G",
            schemeAUM: 0.768234338666022,
            isManaged: false,
            risk: 10.93,
            return: -13.07,
            color: null
          },
          {
            schemeId: 466,
            schemeName: "Axis Multicap -Reg-G",
            schemeAUM: 0.5697794940568428,
            isManaged: false,
            risk: 10.09,
            return: -1.39,
            color: null
          },
          {
            schemeId: 467,
            schemeName: "Aditya Birla Sun Life Resurgent India -5-Reg-G",
            schemeAUM: 0.8753347049420563,
            isManaged: false,
            risk: 13.97,
            return: -14.69,
            color: null
          },
          {
            schemeId: 468,
            schemeName: "Reliance Cap Builder -IV-B-G",
            schemeAUM: 0.5947039024727427,
            isManaged: false,
            risk: 18.32,
            return: -21.89,
            color: null
          },
          {
            schemeId: 469,
            schemeName: "Sundaram LT Micro Cap Tax Adv -VI-Reg-G",
            schemeAUM: 0.13142697213040022,
            isManaged: false,
            risk: 14.4,
            return: -28.85,
            color: null
          },
          {
            schemeId: 470,
            schemeName: "UTI Focussed Equity -IV-G",
            schemeAUM: 0.07022889348701922,
            isManaged: false,
            risk: 13,
            return: -11.21,
            color: null
          },
          {
            schemeId: 471,
            schemeName: "Reliance Cap Builder -IV-A-G",
            schemeAUM: 0.9125447095196397,
            isManaged: false,
            risk: 12.45,
            return: -13.44,
            color: null
          },
          {
            schemeId: 472,
            schemeName: "ICICI Prudential Value -18-Cum",
            schemeAUM: 0.9488041449852387,
            isManaged: false,
            risk: 6.5,
            return: 3.94,
            color: null
          },
          {
            schemeId: 473,
            schemeName: "Bharat 22 ETF",
            schemeAUM: 0.7888574388540626,
            isManaged: false,
            risk: 14.08,
            return: -13.69,
            color: null
          },
          {
            schemeId: 474,
            schemeName: "HDFC Housing Opp -1-1140 D-Nov 2017 (1)-Reg-G",
            schemeAUM: 0.3204068434723186,
            isManaged: false,
            risk: 12.27,
            return: -10.15,
            color: null
          },
          {
            schemeId: 475,
            schemeName: "DSP A.C.E.  (Analysts Conviction Equalized)-1-Reg-G",
            schemeAUM: 0.6810106288800948,
            isManaged: false,
            risk: 14.5,
            return: -6.04,
            color: null
          },
          {
            schemeId: 476,
            schemeName: "Sundaram Value -X-Reg-G",
            schemeAUM: 0.511774837656576,
            isManaged: false,
            risk: 14.84,
            return: -16.78,
            color: null
          },
          {
            schemeId: 477,
            schemeName: "UTI Focussed Equity -V-G",
            schemeAUM: 0.26032536474237666,
            isManaged: false,
            risk: 12.94,
            return: -14.21,
            color: null
          },
          {
            schemeId: 478,
            schemeName: "ICICI Prudential Value -19-Cum",
            schemeAUM: 0.33189625540448575,
            isManaged: false,
            risk: 11.26,
            return: -6.03,
            color: null
          },
          {
            schemeId: 479,
            schemeName: "IDFC Equity Opportunity-4-Reg-G",
            schemeAUM: 0.7015258845725718,
            isManaged: false,
            risk: 15.51,
            return: -23,
            color: null
          },
          {
            schemeId: 480,
            schemeName: "Indiabulls Tax Savings -Reg-G",
            schemeAUM: 0.7176787037636625,
            isManaged: false,
            risk: 10.94,
            return: -9.13,
            color: null
          },
          {
            schemeId: 481,
            schemeName: "Reliance Cap Builder -IV-C-G",
            schemeAUM: 0.2359644436634314,
            isManaged: false,
            risk: 13.83,
            return: -28.9,
            color: null
          },
          {
            schemeId: 482,
            schemeName: "Reliance Cap Builder -IV-D-G",
            schemeAUM: 0.09123332637446446,
            isManaged: false,
            risk: 13.8,
            return: -27.18,
            color: null
          },
          {
            schemeId: 483,
            schemeName: "UTI LT Adv -VI-G",
            schemeAUM: 0.24416900691530663,
            isManaged: false,
            risk: 14.31,
            return: -23.42,
            color: null
          },
          {
            schemeId: 484,
            schemeName: "Mahindra Unnati Emerging Business Yojana-Reg-G",
            schemeAUM: 0.4848189753388492,
            isManaged: false,
            risk: 9.84,
            return: -12.9,
            color: null
          },
          {
            schemeId: 485,
            schemeName: "ICICI Prudential Value -20-Cum",
            schemeAUM: 0.757160247903164,
            isManaged: false,
            risk: 8.2,
            return: -7.99,
            color: null
          },
          {
            schemeId: 486,
            schemeName: "UTI Focussed Equity -VI-G",
            schemeAUM: 0.97777298443421,
            isManaged: false,
            risk: 12.68,
            return: -13.87,
            color: null
          },
          {
            schemeId: 487,
            schemeName: "L&T Emerging Opp -I-Reg-D",
            schemeAUM: 0.623459534721428,
            isManaged: false,
            risk: 11.49,
            return: -17.6,
            color: null
          },
          {
            schemeId: 488,
            schemeName: "Kotak India G -4-G",
            schemeAUM: 0.4279879370095834,
            isManaged: false,
            risk: 9.47,
            return: -10.21,
            color: null
          },
          {
            schemeId: 489,
            schemeName: "BOI AXA Midcap Tax -1-Reg-G",
            schemeAUM: 0.9027956822364047,
            isManaged: false,
            risk: 12.2,
            return: -22.7,
            color: null
          },
          {
            schemeId: 490,
            schemeName: "Edelweiss Maiden Opp -1-Reg-G",
            schemeAUM: 0.7886833266427669,
            isManaged: false,
            risk: 13.42,
            return: -11.84,
            color: null
          },
          {
            schemeId: 491,
            schemeName: "DSP A.C.E.  (Analysts Conviction Equalized)-2-Reg-G",
            schemeAUM: 0.10228171424669719,
            isManaged: false,
            risk: 10.72,
            return: -5.51,
            color: null
          },
          {
            schemeId: 492,
            schemeName: "Aditya Birla Sun Life Resurgent India -6-Reg-G",
            schemeAUM: 0.9348967357601157,
            isManaged: false,
            risk: 13.2,
            return: -27.79,
            color: null
          },
          {
            schemeId: 493,
            schemeName: "Axis Cap Builder -1-Reg-G",
            schemeAUM: 0.30379017849746415,
            isManaged: false,
            risk: 9.82,
            return: -7.08,
            color: null
          },
          {
            schemeId: 494,
            schemeName: "Sundaram Emerging Small Cap-I-Reg-G",
            schemeAUM: 0.6997023902653612,
            isManaged: false,
            risk: 13.45,
            return: -20.99,
            color: null
          },
          {
            schemeId: 495,
            schemeName: "ICICI Prudential LT Wealth Enhancement -G",
            schemeAUM: 0.39677746374543066,
            isManaged: false,
            risk: 11.33,
            return: -8.84,
            color: null
          },
          {
            schemeId: 496,
            schemeName: "IDFC Equity Opportunity-5-Reg-G",
            schemeAUM: 0.3509773683423085,
            isManaged: false,
            risk: 11.82,
            return: -18.13,
            color: null
          },
          {
            schemeId: 497,
            schemeName: "UTI LT Adv -VII-G",
            schemeAUM: 0.10045601706576912,
            isManaged: false,
            risk: 14.15,
            return: -21.69,
            color: null
          },
          {
            schemeId: 498,
            schemeName: "SBI LT Adv -V-Reg-G",
            schemeAUM: 0.23708671185759722,
            isManaged: false,
            risk: 10.41,
            return: -5.94,
            color: null
          },
          {
            schemeId: 499,
            schemeName: "Sundaram LT Tax Adv -III-Reg-G",
            schemeAUM: 0.45202807651142907,
            isManaged: false,
            risk: 12.48,
            return: -23.04,
            color: null
          },
          {
            schemeId: 500,
            schemeName: "Aditya Birla Sun Life Resurgent India -7-Reg-G",
            schemeAUM: 0.47495200793487147,
            isManaged: false,
            risk: 13.12,
            return: -26.04,
            color: null
          },
          {
            schemeId: 501,
            schemeName: "ICICI Prudential Bharat Consumption -1-Cum",
            schemeAUM: 0.07426716069541306,
            isManaged: false,
            risk: 7.94,
            return: -6.16,
            color: null
          },
          {
            schemeId: 502,
            schemeName: "Sundaram Emerging Small Cap-II-Reg-G",
            schemeAUM: 0.17994621606630967,
            isManaged: false,
            risk: 13.44,
            return: -21.26,
            color: null
          },
          {
            schemeId: 503,
            schemeName: "ICICI Prudential S&P BSE 500 ETF",
            schemeAUM: 0.013074524330093373,
            isManaged: false,
            risk: 11.22,
            return: -9.65,
            color: null
          },
          {
            schemeId: 504,
            schemeName: "ICICI Prudential Bharat Consumption -2-Cum",
            schemeAUM: 0.48829312459466423,
            isManaged: false,
            risk: 8.17,
            return: -6.79,
            color: null
          },
          {
            schemeId: 505,
            schemeName: "Sundaram Emerging Small Cap-III-Reg-G",
            schemeAUM: 0.39578641720140784,
            isManaged: false,
            risk: 11.96,
            return: -19.18,
            color: null
          },
          {
            schemeId: 506,
            schemeName: "Kotak India G -5-G",
            schemeAUM: 0.3071648287310862,
            isManaged: false,
            risk: 11.83,
            return: -16.96,
            color: null
          },
          {
            schemeId: 507,
            schemeName: "IDBI Banking & Financial Services -Reg-G",
            schemeAUM: 0.914286226963021,
            isManaged: false,
            risk: 11.24,
            return: -4.08,
            color: null
          },
          {
            schemeId: 508,
            schemeName: "Sundaram Emerging Small Cap-IV-Reg-G",
            schemeAUM: 0.4544498701478892,
            isManaged: false,
            risk: 10.97,
            return: -17.36,
            color: null
          },
          {
            schemeId: 509,
            schemeName: "UTI Nifty Next 50 Index -Reg-G",
            schemeAUM: 0.2708853310915105,
            isManaged: false,
            risk: 13.39,
            return: -16.85,
            color: null
          },
          {
            schemeId: 510,
            schemeName: "L&T Emerging Opp -II-Reg-D",
            schemeAUM: 0.7292363101756618,
            isManaged: false,
            risk: 11.48,
            return: -13.52,
            color: null
          },
          {
            schemeId: 511,
            schemeName: "ICICI Prudential Bharat 22 FOF-G",
            schemeAUM: 0.93738592418867,
            isManaged: false,
            risk: 13.1,
            return: -13.16,
            color: null
          },
          {
            schemeId: 512,
            schemeName: "Mirae Asset Healthcare -Reg-G",
            schemeAUM: 0.4090631296563447,
            isManaged: false,
            risk: 11.75,
            return: -7.9,
            color: null
          },
          {
            schemeId: 513,
            schemeName: "Sundaram LT Tax Adv -IV-Reg-G",
            schemeAUM: 0.7500514123890369,
            isManaged: false,
            risk: 9.91,
            return: -17.84,
            color: null
          },
          {
            schemeId: 514,
            schemeName: "Sundaram Multi Cap -I-Reg-G",
            schemeAUM: 0.2952208384681494,
            isManaged: false,
            risk: 10.7,
            return: -7.77,
            color: null
          },
          {
            schemeId: 515,
            schemeName: "Essel Multi Cap -Reg-G",
            schemeAUM: 0.9085824950749406,
            isManaged: false,
            risk: 11.61,
            return: -5.48,
            color: null
          },
          {
            schemeId: 516,
            schemeName:
              "ICICI Prudential Pharma Healthcare and Diagnostics (P.H.D) -G",
            schemeAUM: 0.28401946078228524,
            isManaged: false,
            risk: 9.58,
            return: -12,
            color: null
          },
          {
            schemeId: 517,
            schemeName: "ICICI Prudential Bharat Consumption -3-Cum",
            schemeAUM: 0.9957416498893938,
            isManaged: false,
            risk: 7.49,
            return: -6.58,
            color: null
          },
          {
            schemeId: 518,
            schemeName: "Tata Value -1-Reg-G",
            schemeAUM: 0.3324805364258745,
            isManaged: false,
            risk: 10.51,
            return: -11.14,
            color: null
          },
          {
            schemeId: 519,
            schemeName: "SBI LT Adv -VI-Reg-G",
            schemeAUM: 0.3840201840410842,
            isManaged: false,
            risk: 11.48,
            return: -6.31,
            color: null
          },
          {
            schemeId: 520,
            schemeName: "IDFC Equity Opportunity-6-Reg-G",
            schemeAUM: 0.28584331204053437,
            isManaged: false,
            risk: 7.66,
            return: -6.64,
            color: null
          },
          {
            schemeId: 521,
            schemeName: "Sundaram Multi Cap -II-Reg-G",
            schemeAUM: 0.7113686341298826,
            isManaged: false,
            risk: 10.4,
            return: -6.07,
            color: null
          },
          {
            schemeId: 522,
            schemeName: "Tata Value -2-Reg-G",
            schemeAUM: 0.7556773714116647,
            isManaged: false,
            risk: 9.84,
            return: -10.17,
            color: null
          },
          {
            schemeId: 523,
            schemeName: "Sundaram Emerging Small Cap-V-Reg-G",
            schemeAUM: 0.5568623514390025,
            isManaged: false,
            risk: 9.9,
            return: -15.76,
            color: null
          },
          {
            schemeId: 524,
            schemeName: "ICICI Prudential Bharat Consumption -4-Cum",
            schemeAUM: 0.6898224350925493,
            isManaged: false,
            risk: 9.83,
            return: -7.89,
            color: null
          },
          {
            schemeId: 525,
            schemeName: "ICICI Prudential Nifty Next 50 ETF",
            schemeAUM: 0.5819516977869801,
            isManaged: false,
            risk: 13.26,
            return: -16.29,
            color: null
          },
          {
            schemeId: 526,
            schemeName: "IDBI LT Value -Reg-G",
            schemeAUM: 0.9223097304322121,
            isManaged: false,
            risk: 7,
            return: -3.7,
            color: null
          },
          {
            schemeId: 527,
            schemeName: "Reliance ETF NV20",
            schemeAUM: 0.8887950905748008,
            isManaged: false,
            risk: 11.64,
            return: -2.52,
            color: null
          },
          {
            schemeId: 528,
            schemeName: "Reliance US Equity Opp -G",
            schemeAUM: 0.25922302053386503,
            isManaged: false,
            risk: 13.73,
            return: 6.62,
            color: null
          },
          {
            schemeId: 529,
            schemeName: "SBI-ETF Nifty 50",
            schemeAUM: 0.7561670989964111,
            isManaged: false,
            risk: 11.54,
            return: -5.04,
            color: null
          },
          {
            schemeId: 530,
            schemeName: "ICICI Prudential Value -8-D",
            schemeAUM: 0.16979201545364364,
            isManaged: false,
            risk: 9.87,
            return: -11.82,
            color: null
          },
          {
            schemeId: 531,
            schemeName: "Indiabulls Value -Reg-G",
            schemeAUM: 0.7198110011643897,
            isManaged: false,
            risk: 11.19,
            return: -16.65,
            color: null
          },
          {
            schemeId: 532,
            schemeName: "UTI-Nifty Exchange Traded ",
            schemeAUM: 0.12402064192688544,
            isManaged: false,
            risk: 11.54,
            return: -5.04,
            color: null
          },
          {
            schemeId: 533,
            schemeName: "UTI-Sensex Exchange Traded ",
            schemeAUM: 0.7825111670693772,
            isManaged: false,
            risk: 11.34,
            return: -2.81,
            color: null
          },
          {
            schemeId: 534,
            schemeName: "SBI Equity Opp -IV-Reg-G",
            schemeAUM: 0.0022092869000236437,
            isManaged: false,
            risk: 9.73,
            return: -11.18,
            color: null
          },
          {
            schemeId: 535,
            schemeName: "Sundaram Select Micro Cap-VIII-Reg-G",
            schemeAUM: 0.31986136414414634,
            isManaged: false,
            risk: 14.4,
            return: -20.94,
            color: null
          },
          {
            schemeId: 536,
            schemeName: "Sundaram Select Micro Cap-IX-Reg-G",
            schemeAUM: 0.30261982793115316,
            isManaged: false,
            risk: 14.68,
            return: -21.28,
            color: null
          },
          {
            schemeId: 537,
            schemeName: "Kotak NV 20 ETF",
            schemeAUM: 0.7506075933302931,
            isManaged: false,
            risk: 11.62,
            return: -2.44,
            color: null
          },
          {
            schemeId: 538,
            schemeName: "Essel Large & Midcap -Reg-G",
            schemeAUM: 0.724947596335848,
            isManaged: false,
            risk: 10.81,
            return: -6.26,
            color: null
          },
          {
            schemeId: 539,
            schemeName: "Sundaram Select Micro Cap-X-Reg-G",
            schemeAUM: 0.30029716590343924,
            isManaged: false,
            risk: 14.7,
            return: -22.25,
            color: null
          },
          {
            schemeId: 540,
            schemeName: "HDFC Nifty 50 ETF",
            schemeAUM: 0.7334474691690516,
            isManaged: false,
            risk: 11.54,
            return: -5.04,
            color: null
          },
          {
            schemeId: 541,
            schemeName: "HDFC Sensex ETF",
            schemeAUM: 0.5644015555146034,
            isManaged: false,
            risk: 11.33,
            return: -2.79,
            color: null
          },
          {
            schemeId: 542,
            schemeName: "DHFL Pramerica LT Equity -Reg-G",
            schemeAUM: 0.7889472107777664,
            isManaged: false,
            risk: 10.2,
            return: -7.89,
            color: null
          },
          {
            schemeId: 543,
            schemeName: "Principal Retirement Savings -Progressive-G",
            schemeAUM: 0.03317133429147634,
            isManaged: false,
            risk: 7.97,
            return: -7.35,
            color: null
          },
          {
            schemeId: 544,
            schemeName: "Principal Retirement Savings -Moderate-G",
            schemeAUM: 0.8172918636117963,
            isManaged: false,
            risk: 4.9,
            return: -3.94,
            color: null
          },
          {
            schemeId: 545,
            schemeName: "Edelweiss ETF-Nifty Bank",
            schemeAUM: 0.7457743173810971,
            isManaged: false,
            risk: 13.83,
            return: -2.72,
            color: null
          }
        ]
      },
      {
        assetId: 2,
        assetName: "Debt",
        AUM: {
          minAUM: 10,
          maxAUM: 100
        },
        numberOfSchemesManaged: 0,
        color: "rgba(120, 43, 183, .5)",
        schemes: [
          {
            schemeId: 546,
            schemeName: "Axis Banking & PSU Debt -G",
            schemeAUM: 0.4714188685170839,
            isManaged: false,
            risk: 1.51,
            return: 11.2,
            color: null
          },
          {
            schemeId: 547,
            schemeName: "Axis Gilt -G",
            schemeAUM: 0.9248414237662497,
            isManaged: false,
            risk: 2.97,
            return: 15.51,
            color: null
          },
          {
            schemeId: 548,
            schemeName: "Axis Dynamic Bond -G",
            schemeAUM: 0.7228152963337362,
            isManaged: false,
            risk: 2.12,
            return: 12.36,
            color: null
          },
          {
            schemeId: 549,
            schemeName: "Axis Strategic Bond -G",
            schemeAUM: 0.5716366505346946,
            isManaged: false,
            risk: 2.24,
            return: 7.16,
            color: null
          },
          {
            schemeId: 550,
            schemeName: "Axis Liquid -G",
            schemeAUM: 0.1565474287194799,
            isManaged: false,
            risk: 0.06,
            return: 7.36,
            color: null
          },
          {
            schemeId: 551,
            schemeName: "Axis STP-G",
            schemeAUM: 0.6625105235137774,
            isManaged: false,
            risk: 1.5,
            return: 9.77,
            color: null
          },
          {
            schemeId: 552,
            schemeName: "Axis Treasury Adv -G",
            schemeAUM: 0.8288364809265287,
            isManaged: false,
            risk: 0.53,
            return: 8.95,
            color: null
          },
          {
            schemeId: 553,
            schemeName: "Baroda Dynamic Bond -G",
            schemeAUM: 0.272600319465639,
            isManaged: false,
            risk: 7.48,
            return: -0.12,
            color: null
          },
          {
            schemeId: 554,
            schemeName: "Baroda Gilt -G",
            schemeAUM: 0.7108041215988723,
            isManaged: false,
            risk: 3.37,
            return: 13.87,
            color: null
          },
          {
            schemeId: 555,
            schemeName: "Baroda ST Bond -G",
            schemeAUM: 0.7098510589109175,
            isManaged: false,
            risk: 0.85,
            return: 9.05,
            color: null
          },
          {
            schemeId: 556,
            schemeName: "Aditya Birla Sun Life Low Duration -G",
            schemeAUM: 0.8938327900208876,
            isManaged: false,
            risk: 0.51,
            return: 8.52,
            color: null
          },
          {
            schemeId: 557,
            schemeName: "Aditya Birla Sun Life Dynamic Bond -Reg-G",
            schemeAUM: 0.15562122628778585,
            isManaged: false,
            risk: 2.31,
            return: 8.9,
            color: null
          },
          {
            schemeId: 558,
            schemeName: "Aditya Birla Sun Life Gov Sec -G",
            schemeAUM: 0.8283271896831543,
            isManaged: false,
            risk: 3.35,
            return: 15.25,
            color: null
          },
          {
            schemeId: 559,
            schemeName: "Aditya Birla Sun Life  Inc -G",
            schemeAUM: 0.8736090867299371,
            isManaged: false,
            risk: 2.34,
            return: 13.08,
            color: null
          },
          {
            schemeId: 560,
            schemeName:
              "Aditya Birla Sun Life Interval  Inc -Quarterly I-Reg-G",
            schemeAUM: 0.11235202449193848,
            isManaged: false,
            risk: 0.31,
            return: 6.96,
            color: null
          },
          {
            schemeId: 561,
            schemeName: "Aditya Birla Sun Life Medium Term-G",
            schemeAUM: 0.6468523028302047,
            isManaged: false,
            risk: 1.78,
            return: 4.22,
            color: null
          },
          {
            schemeId: 562,
            schemeName: "Aditya Birla Sun Life Corp Bond -G",
            schemeAUM: 0.8761249003344092,
            isManaged: false,
            risk: 0.91,
            return: 10.39,
            color: null
          },
          {
            schemeId: 563,
            schemeName: "Aditya Birla Sun Life ST Opp -G",
            schemeAUM: 0.5839619416201531,
            isManaged: false,
            risk: 1.04,
            return: 9.63,
            color: null
          },
          {
            schemeId: 564,
            schemeName: "BNP Paribas Flexi Debt -G",
            schemeAUM: 0.5036486339960806,
            isManaged: false,
            risk: 1.77,
            return: 9.58,
            color: null
          },
          {
            schemeId: 565,
            schemeName: "BOI AXA Liquid -Reg-G",
            schemeAUM: 0.49098603805909447,
            isManaged: false,
            risk: 0.06,
            return: 7.19,
            color: null
          },
          {
            schemeId: 566,
            schemeName: "BOI AXA ST  Inc -Reg-G",
            schemeAUM: 0.4925823822991371,
            isManaged: false,
            risk: 10.1,
            return: -13.88,
            color: null
          },
          {
            schemeId: 567,
            schemeName: "BOI AXA Ultra Short Duration -Reg-G",
            schemeAUM: 0.16635991513057813,
            isManaged: false,
            risk: 0.42,
            return: 8.05,
            color: null
          },
          {
            schemeId: 568,
            schemeName: "Canara Robeco Dynamic Bond -Reg-G",
            schemeAUM: 0.0024669815164608533,
            isManaged: false,
            risk: 2.14,
            return: 10.97,
            color: null
          },
          {
            schemeId: 569,
            schemeName: "Canara Robeco Savings -Reg-G",
            schemeAUM: 0.012371916843949116,
            isManaged: false,
            risk: 0.47,
            return: 8.37,
            color: null
          },
          {
            schemeId: 570,
            schemeName: "Canara Robeco Gilt 1988-Reg-G",
            schemeAUM: 0.24352362652452775,
            isManaged: false,
            risk: 2.93,
            return: 13.36,
            color: null
          },
          {
            schemeId: 571,
            schemeName: "Canara Robeco  Inc -Reg-G",
            schemeAUM: 0.18650437275119258,
            isManaged: false,
            risk: 2.12,
            return: 12.16,
            color: null
          },
          {
            schemeId: 572,
            schemeName: "Canara Robeco Short Duration -Reg-G",
            schemeAUM: 0.30561606578250244,
            isManaged: false,
            risk: 0.78,
            return: 8.71,
            color: null
          },
          {
            schemeId: 573,
            schemeName: "SBI Banking and PSU -Reg-G",
            schemeAUM: 0.6604329089460339,
            isManaged: false,
            risk: 1.15,
            return: 10.04,
            color: null
          },
          {
            schemeId: 574,
            schemeName: "DSP Bond -Reg-G",
            schemeAUM: 0.14506730532895817,
            isManaged: false,
            risk: 4.72,
            return: 1.79,
            color: null
          },
          {
            schemeId: 575,
            schemeName: "DSP Gov Sec -Reg-G",
            schemeAUM: 0.4181214455662128,
            isManaged: false,
            risk: 3.25,
            return: 15.97,
            color: null
          },
          {
            schemeId: 576,
            schemeName: "DSP Credit Risk -Reg-G",
            schemeAUM: 0.10883669087661407,
            isManaged: false,
            risk: 4.36,
            return: -4.67,
            color: null
          },
          {
            schemeId: 577,
            schemeName: "DSP Ultra Short -Reg-G",
            schemeAUM: 0.412211191520649,
            isManaged: false,
            risk: 1.07,
            return: 5.72,
            color: null
          },
          {
            schemeId: 578,
            schemeName: "DSP STP-Reg-G",
            schemeAUM: 0.7940026191534801,
            isManaged: false,
            risk: 1,
            return: 9.38,
            color: null
          },
          {
            schemeId: 579,
            schemeName: "DSP Savings -Reg-G",
            schemeAUM: 0.3335725030051291,
            isManaged: false,
            risk: 0.5,
            return: 8.39,
            color: null
          },
          {
            schemeId: 580,
            schemeName: "DHFL Pramerica Banking & PSU Debt -G",
            schemeAUM: 0.6915374021884286,
            isManaged: false,
            risk: 1.33,
            return: 10.61,
            color: null
          },
          {
            schemeId: 581,
            schemeName: "DHFL Pramerica Low Duration -G",
            schemeAUM: 0.8613162301823241,
            isManaged: false,
            risk: 13.82,
            return: -9.64,
            color: null
          },
          {
            schemeId: 582,
            schemeName: "DHFL Pramerica Gilt -G",
            schemeAUM: 0.8822954356029109,
            isManaged: false,
            risk: 2.97,
            return: 13.73,
            color: null
          },
          {
            schemeId: 583,
            schemeName: "DHFL Pramerica Premier Bond -G",
            schemeAUM: 0.1850051968317219,
            isManaged: false,
            risk: 1.03,
            return: 8.28,
            color: null
          },
          {
            schemeId: 584,
            schemeName: "DHFL Pramerica Short Maturity -G",
            schemeAUM: 0.220211501635714,
            isManaged: false,
            risk: 11.66,
            return: -1.38,
            color: null
          },
          {
            schemeId: 585,
            schemeName: "Quant Dynamic Bond-G",
            schemeAUM: 0.6712133571708081,
            isManaged: false,
            risk: 1.69,
            return: 7.88,
            color: null
          },
          {
            schemeId: 586,
            schemeName: "Quant Liquid-G",
            schemeAUM: 0.14696439638709125,
            isManaged: false,
            risk: 0.19,
            return: 7.53,
            color: null
          },
          {
            schemeId: 587,
            schemeName: "Quant Money Market -G",
            schemeAUM: 0.9593510012265922,
            isManaged: false,
            risk: 0.36,
            return: 8.03,
            color: null
          },
          {
            schemeId: 588,
            schemeName: "Reliance ETF Liquid BeES",
            schemeAUM: 0.17843997369554887,
            isManaged: false,
            risk: 0.14,
            return: 4.12,
            color: null
          },
          {
            schemeId: 589,
            schemeName: "HDFC Overnight -G",
            schemeAUM: 0.8404716323701749,
            isManaged: false,
            risk: 0.16,
            return: 6.02,
            color: null
          },
          {
            schemeId: 590,
            schemeName: "HDFC Money Market -G",
            schemeAUM: 0.11727057607293534,
            isManaged: false,
            risk: 0.47,
            return: 8.56,
            color: null
          },
          {
            schemeId: 591,
            schemeName: "HDFC Low Duration -G",
            schemeAUM: 0.558199558309026,
            isManaged: false,
            risk: 0.52,
            return: 8.1,
            color: null
          },
          {
            schemeId: 592,
            schemeName: "HDFC Gilt -G",
            schemeAUM: 0.4369219537930953,
            isManaged: false,
            risk: 1.77,
            return: 11.18,
            color: null
          },
          {
            schemeId: 593,
            schemeName: "HDFC Dynamic Debt -G",
            schemeAUM: 0.8256024356940768,
            isManaged: false,
            risk: 2.62,
            return: 3.71,
            color: null
          },
          {
            schemeId: 594,
            schemeName: "HDFC Medium Term Debt -G",
            schemeAUM: 0.8248274846246857,
            isManaged: false,
            risk: 1.17,
            return: 9.03,
            color: null
          },
          {
            schemeId: 595,
            schemeName: "HDFC  Inc -G",
            schemeAUM: 0.4698139988921657,
            isManaged: false,
            risk: 1.73,
            return: 9.8,
            color: null
          },
          {
            schemeId: 596,
            schemeName: "HDFC Liquid -G",
            schemeAUM: 0.4745582128501704,
            isManaged: false,
            risk: 0.18,
            return: 7.23,
            color: null
          },
          {
            schemeId: 597,
            schemeName: "HDFC Corp Bond -G",
            schemeAUM: 0.3183498756379737,
            isManaged: false,
            risk: 1.22,
            return: 11.07,
            color: null
          },
          {
            schemeId: 598,
            schemeName: "HDFC ST Debt -G",
            schemeAUM: 0.1380219512333909,
            isManaged: false,
            risk: 0.86,
            return: 9.55,
            color: null
          },
          {
            schemeId: 599,
            schemeName: "HSBC Debt -G",
            schemeAUM: 0.39030743471995444,
            isManaged: false,
            risk: 2.77,
            return: 14.06,
            color: null
          },
          {
            schemeId: 600,
            schemeName: "HSBC Short Duration -G",
            schemeAUM: 0.3794094480663417,
            isManaged: false,
            risk: 7.16,
            return: -0.59,
            color: null
          },
          {
            schemeId: 601,
            schemeName: "ICICI Prudential Banking & PSU Debt -G",
            schemeAUM: 0.3397646342366136,
            isManaged: false,
            risk: 1.07,
            return: 9.55,
            color: null
          },
          {
            schemeId: 602,
            schemeName: "ICICI Prudential Savings -G",
            schemeAUM: 0.038382916728149086,
            isManaged: false,
            risk: 0.5,
            return: 8.71,
            color: null
          },
          {
            schemeId: 603,
            schemeName: "ICICI Prudential Gilt -G",
            schemeAUM: 0.6752612534699169,
            isManaged: false,
            risk: 2.25,
            return: 12.01,
            color: null
          },
          {
            schemeId: 604,
            schemeName: "ICICI Prudential Bond -G",
            schemeAUM: 0.5647217284992319,
            isManaged: false,
            risk: 1.55,
            return: 10.91,
            color: null
          },
          {
            schemeId: 605,
            schemeName: "ICICI Prudential LT Bond -G",
            schemeAUM: 0.4764790859606407,
            isManaged: false,
            risk: 3.71,
            return: 16.84,
            color: null
          },
          {
            schemeId: 606,
            schemeName: "ICICI Prudential Ultra STP-G",
            schemeAUM: 0.10669850662078528,
            isManaged: false,
            risk: 0.41,
            return: 8.51,
            color: null
          },
          {
            schemeId: 607,
            schemeName: "ICICI Prudential Credit Risk -G",
            schemeAUM: 0.7988837576295635,
            isManaged: false,
            risk: 0.76,
            return: 8.09,
            color: null
          },
          {
            schemeId: 608,
            schemeName: "ICICI Prudential STP-G",
            schemeAUM: 0.007416705697940396,
            isManaged: false,
            risk: 0.9,
            return: 9.39,
            color: null
          },
          {
            schemeId: 609,
            schemeName: "IDBI Dynamic Bond -G",
            schemeAUM: 0.5823860580322626,
            isManaged: false,
            risk: 2.37,
            return: 7.52,
            color: null
          },
          {
            schemeId: 610,
            schemeName: "IDBI Gilt -G",
            schemeAUM: 0.031298114427290136,
            isManaged: false,
            risk: 3.53,
            return: 12.34,
            color: null
          },
          {
            schemeId: 611,
            schemeName: "IDBI Liquid -G",
            schemeAUM: 0.03841609729268325,
            isManaged: false,
            risk: 0.06,
            return: 7.36,
            color: null
          },
          {
            schemeId: 612,
            schemeName: "IDBI ST Bond -G",
            schemeAUM: 0.3044952508751235,
            isManaged: false,
            risk: 4.14,
            return: 3.34,
            color: null
          },
          {
            schemeId: 613,
            schemeName: "IDBI Ultra STP-G",
            schemeAUM: 0.9120683285212359,
            isManaged: false,
            risk: 6.84,
            return: 2.51,
            color: null
          },
          {
            schemeId: 614,
            schemeName: "IDFC Banking & PSU Debt -Reg-G",
            schemeAUM: 0.21918816704928545,
            isManaged: false,
            risk: 1.72,
            return: 12.1,
            color: null
          },
          {
            schemeId: 615,
            schemeName: "IDFC Gov Sec -Constant Maturity-Reg-G",
            schemeAUM: 0.3165562750805708,
            isManaged: false,
            risk: 4.17,
            return: 20.77,
            color: null
          },
          {
            schemeId: 616,
            schemeName: "IDFC Money Manager -Reg-G",
            schemeAUM: 0.14275435247482604,
            isManaged: false,
            risk: 0.38,
            return: 7.06,
            color: null
          },
          {
            schemeId: 617,
            schemeName: "IDFC Bond - Inc-Reg-G",
            schemeAUM: 0.6048332375143739,
            isManaged: false,
            risk: 2.85,
            return: 14.3,
            color: null
          },
          {
            schemeId: 618,
            schemeName: "IDFC Bond -Medium Term-Reg-G",
            schemeAUM: 0.8801337923177424,
            isManaged: false,
            risk: 1.33,
            return: 10.75,
            color: null
          },
          {
            schemeId: 619,
            schemeName: "IDFC Bond -STP-Reg-G",
            schemeAUM: 0.37254692839845527,
            isManaged: false,
            risk: 1.06,
            return: 10.11,
            color: null
          },
          {
            schemeId: 620,
            schemeName: "IDFC Low Duration -Reg-G",
            schemeAUM: 0.40399728407519087,
            isManaged: false,
            risk: 0.5,
            return: 8.71,
            color: null
          },
          {
            schemeId: 621,
            schemeName: "IDFC Yly Interval -II-Reg-G",
            schemeAUM: 0.2461575303301795,
            isManaged: false,
            risk: 0.5,
            return: 8.56,
            color: null
          },
          {
            schemeId: 622,
            schemeName: "Indiabulls  Inc -Reg-G",
            schemeAUM: 0.26496721605641715,
            isManaged: false,
            risk: 1.29,
            return: 9.3,
            color: null
          },
          {
            schemeId: 623,
            schemeName: "Indiabulls Liquid -G",
            schemeAUM: 0.057892852468090616,
            isManaged: false,
            risk: 0.04,
            return: 7.2,
            color: null
          },
          {
            schemeId: 624,
            schemeName: "Indiabulls Ultra STP-G",
            schemeAUM: 0.5796677886460904,
            isManaged: false,
            risk: 0.4,
            return: 7.94,
            color: null
          },
          {
            schemeId: 625,
            schemeName: "JM Dynamic Debt -Reg-G",
            schemeAUM: 0.5971032392344864,
            isManaged: false,
            risk: 0.31,
            return: 7.1,
            color: null
          },
          {
            schemeId: 626,
            schemeName: "JM G-Sec -Reg-G",
            schemeAUM: 0.7705512987377456,
            isManaged: false,
            risk: 3.11,
            return: 11.89,
            color: null
          },
          {
            schemeId: 627,
            schemeName: "JM Liquid -G",
            schemeAUM: 0.0810045344506134,
            isManaged: false,
            risk: 0.06,
            return: 7.36,
            color: null
          },
          {
            schemeId: 628,
            schemeName: "JM  Inc -G",
            schemeAUM: 0.8940721997640648,
            isManaged: false,
            risk: 8.2,
            return: -1.13,
            color: null
          },
          {
            schemeId: 629,
            schemeName: "JM Ultra Short Duration -G",
            schemeAUM: 0.9308402678410119,
            isManaged: false,
            risk: 4.38,
            return: 1.42,
            color: null
          },
          {
            schemeId: 630,
            schemeName: "JM Low Duration -G",
            schemeAUM: 0.8834091315756816,
            isManaged: false,
            risk: 8.52,
            return: -4.42,
            color: null
          },
          {
            schemeId: 631,
            schemeName: "JM Money Market -G",
            schemeAUM: 0.8137695900281101,
            isManaged: false,
            risk: 0.32,
            return: 7.07,
            color: null
          },
          {
            schemeId: 632,
            schemeName: "Edelweiss Dynamic Bond -Reg-G",
            schemeAUM: 0.507531040589039,
            isManaged: false,
            risk: 2.81,
            return: 15.75,
            color: null
          },
          {
            schemeId: 633,
            schemeName: "Edelweiss STP-Reg-G",
            schemeAUM: 0.5554797498288802,
            isManaged: false,
            risk: 7.25,
            return: -2.47,
            color: null
          },
          {
            schemeId: 634,
            schemeName: "Kotak Bond -Reg-G",
            schemeAUM: 0.36875442495660016,
            isManaged: false,
            risk: 2.08,
            return: 12.36,
            color: null
          },
          {
            schemeId: 635,
            schemeName: "Kotak Bond -STP-G",
            schemeAUM: 0.7190975436314342,
            isManaged: false,
            risk: 0.98,
            return: 9.77,
            color: null
          },
          {
            schemeId: 636,
            schemeName: "Kotak Savings -G",
            schemeAUM: 0.8972187059701282,
            isManaged: false,
            risk: 0.42,
            return: 8.27,
            color: null
          },
          {
            schemeId: 637,
            schemeName: "Kotak Money Market -G",
            schemeAUM: 0.6694500403388859,
            isManaged: false,
            risk: 0.39,
            return: 8.58,
            color: null
          },
          {
            schemeId: 638,
            schemeName: "Kotak Gilt Unit  ’98-Investment-Reg-G",
            schemeAUM: 0.4643880390562376,
            isManaged: false,
            risk: 3.06,
            return: 14.56,
            color: null
          },
          {
            schemeId: 639,
            schemeName: "Kotak Banking and PSU Debt -G",
            schemeAUM: 0.8827194257077708,
            isManaged: false,
            risk: 1.23,
            return: 11.14,
            color: null
          },
          {
            schemeId: 640,
            schemeName: "Kotak Credit Risk -G",
            schemeAUM: 0.48362087310872237,
            isManaged: false,
            risk: 0.9,
            return: 8.03,
            color: null
          },
          {
            schemeId: 641,
            schemeName: "L&T Money Market -Reg-G",
            schemeAUM: 0.8648666475507849,
            isManaged: false,
            risk: 2.26,
            return: 6.72,
            color: null
          },
          {
            schemeId: 642,
            schemeName: "L&T Gilt -Reg-G",
            schemeAUM: 0.41808447878920885,
            isManaged: false,
            risk: 3.19,
            return: 12.71,
            color: null
          },
          {
            schemeId: 643,
            schemeName: "L&T ST Bond -Reg-G",
            schemeAUM: 0.8433223224780091,
            isManaged: false,
            risk: 0.92,
            return: 9.58,
            color: null
          },
          {
            schemeId: 644,
            schemeName: "L&T Low Duration -Reg-G",
            schemeAUM: 0.8814416365969153,
            isManaged: false,
            risk: 2.16,
            return: 5.69,
            color: null
          },
          {
            schemeId: 645,
            schemeName: "L&T Triple Ace Bond -Reg-G",
            schemeAUM: 0.7542628009443215,
            isManaged: false,
            risk: 2.8,
            return: 14.19,
            color: null
          },
          {
            schemeId: 646,
            schemeName: "LIC MF Bond -G",
            schemeAUM: 0.43238524254713884,
            isManaged: false,
            risk: 2.2,
            return: 11.8,
            color: null
          },
          {
            schemeId: 647,
            schemeName: "LIC MF Gov Sec -Reg-G",
            schemeAUM: 0.9396752562193456,
            isManaged: false,
            risk: 2.99,
            return: 15.33,
            color: null
          },
          {
            schemeId: 648,
            schemeName: "LIC MF Banking & PSU Debt -G",
            schemeAUM: 0.03824217242834149,
            isManaged: false,
            risk: 1.14,
            return: 10.87,
            color: null
          },
          {
            schemeId: 649,
            schemeName: "LIC MF Liquid -G",
            schemeAUM: 0.5762174626692333,
            isManaged: false,
            risk: 0.04,
            return: 7.17,
            color: null
          },
          {
            schemeId: 650,
            schemeName: "LIC MF Savings -G",
            schemeAUM: 0.591647035090566,
            isManaged: false,
            risk: 5.71,
            return: 3.73,
            color: null
          },
          {
            schemeId: 651,
            schemeName: "Mirae Asset Cash Management -Reg-G",
            schemeAUM: 0.1548366711207394,
            isManaged: false,
            risk: 0.18,
            return: 7.28,
            color: null
          },
          {
            schemeId: 652,
            schemeName: "DHFL Pramerica Dynamic Bond -G",
            schemeAUM: 0.2751679376896292,
            isManaged: false,
            risk: 2.18,
            return: 13.24,
            color: null
          },
          {
            schemeId: 653,
            schemeName: "Principal Cash Management -G",
            schemeAUM: 0.3464592962477093,
            isManaged: false,
            risk: 5.06,
            return: -2.29,
            color: null
          },
          {
            schemeId: 654,
            schemeName: "Principal Low Duration -G",
            schemeAUM: 0.8075431364045704,
            isManaged: false,
            risk: 13.87,
            return: -11.06,
            color: null
          },
          {
            schemeId: 655,
            schemeName: "Principal Credit Risk -G",
            schemeAUM: 0.09367793888969711,
            isManaged: false,
            risk: 5.99,
            return: 0.02,
            color: null
          },
          {
            schemeId: 656,
            schemeName: "Principal Dynamic Bond -G",
            schemeAUM: 0.12791084963610855,
            isManaged: false,
            risk: 7.78,
            return: 0.06,
            color: null
          },
          {
            schemeId: 657,
            schemeName: "Principal ST Debt -G",
            schemeAUM: 0.9524380884093149,
            isManaged: false,
            risk: 7.88,
            return: -1.09,
            color: null
          },
          {
            schemeId: 658,
            schemeName: "Principal Ultra STP-G",
            schemeAUM: 0.0057961726989383955,
            isManaged: false,
            risk: 3.14,
            return: 1.29,
            color: null
          },
          {
            schemeId: 659,
            schemeName: "Quantum Liquid -G-Dir",
            schemeAUM: 0.5374843455825522,
            isManaged: false,
            risk: 0.07,
            return: 6.7,
            color: null
          },
          {
            schemeId: 660,
            schemeName: "Reliance Dynamic Bond -G",
            schemeAUM: 0.996335919911558,
            isManaged: false,
            risk: 2.36,
            return: 11.7,
            color: null
          },
          {
            schemeId: 661,
            schemeName: "Reliance Floating Rate -G",
            schemeAUM: 0.6492776650129086,
            isManaged: false,
            risk: 0.86,
            return: 8.9,
            color: null
          },
          {
            schemeId: 662,
            schemeName: "Reliance Gilt Sec -G",
            schemeAUM: 0.635487196777291,
            isManaged: false,
            risk: 3.27,
            return: 16.54,
            color: null
          },
          {
            schemeId: 663,
            schemeName: "Reliance  Inc -G",
            schemeAUM: 0.7429226313987076,
            isManaged: false,
            risk: 2.9,
            return: 14.85,
            color: null
          },
          {
            schemeId: 664,
            schemeName: "Reliance Interval -MIP-- I-G",
            schemeAUM: 0.34290758303473323,
            isManaged: false,
            risk: 0.31,
            return: 7.19,
            color: null
          },
          {
            schemeId: 665,
            schemeName: "Reliance Interval -MIP-- II-G",
            schemeAUM: 0.08049404499583757,
            isManaged: false,
            risk: 0.3,
            return: 7.18,
            color: null
          },
          {
            schemeId: 666,
            schemeName: "Reliance Interval -QIP-- I-G",
            schemeAUM: 0.42940904886639397,
            isManaged: false,
            risk: 0.43,
            return: 7.7,
            color: null
          },
          {
            schemeId: 667,
            schemeName: "Reliance Interval -QIP-- II-G",
            schemeAUM: 0.2267530278673,
            isManaged: false,
            risk: 0.32,
            return: 7.59,
            color: null
          },
          {
            schemeId: 668,
            schemeName: "Reliance Interval -QIP-- III-G",
            schemeAUM: 0.23076217479443506,
            isManaged: false,
            risk: 0.31,
            return: 7.2,
            color: null
          },
          {
            schemeId: 669,
            schemeName: "Reliance Ultra Short Duration -G",
            schemeAUM: 0.20291867243438388,
            isManaged: false,
            risk: 1.45,
            return: 5.81,
            color: null
          },
          {
            schemeId: 670,
            schemeName: "Reliance Money Market -G",
            schemeAUM: 0.3806673779948686,
            isManaged: false,
            risk: 0.4,
            return: 8.68,
            color: null
          },
          {
            schemeId: 671,
            schemeName: "Reliance Prime Debt -G",
            schemeAUM: 0.6058538898796859,
            isManaged: false,
            risk: 1.04,
            return: 8.04,
            color: null
          },
          {
            schemeId: 672,
            schemeName: "Reliance Credit Risk -G",
            schemeAUM: 0.2713806326848467,
            isManaged: false,
            risk: 2.24,
            return: 3.35,
            color: null
          },
          {
            schemeId: 673,
            schemeName: "Reliance STP-G",
            schemeAUM: 0.1596056179760703,
            isManaged: false,
            risk: 1,
            return: 9.19,
            color: null
          },
          {
            schemeId: 674,
            schemeName: "Reliance Yly Interval -1-G",
            schemeAUM: 0.32503619724501354,
            isManaged: false,
            risk: 0.49,
            return: 8.52,
            color: null
          },
          {
            schemeId: 675,
            schemeName: "Invesco India Corp Bond -G",
            schemeAUM: 0.09779541329652863,
            isManaged: false,
            risk: 1.31,
            return: 10.53,
            color: null
          },
          {
            schemeId: 676,
            schemeName: "Invesco India Banking & PSU Debt -G",
            schemeAUM: 0.16167096950799031,
            isManaged: false,
            risk: 1.08,
            return: 9.98,
            color: null
          },
          {
            schemeId: 677,
            schemeName: "Invesco India Gilt -G",
            schemeAUM: 0.04311087512737033,
            isManaged: false,
            risk: 3.72,
            return: 14.99,
            color: null
          },
          {
            schemeId: 678,
            schemeName: "Invesco India Ultra STP-G",
            schemeAUM: 0.5300932702925023,
            isManaged: false,
            risk: 0.4,
            return: 8.16,
            color: null
          },
          {
            schemeId: 679,
            schemeName: "Invesco India STP-G",
            schemeAUM: 0.2304281844998297,
            isManaged: false,
            risk: 1.09,
            return: 9.18,
            color: null
          },
          {
            schemeId: 680,
            schemeName: "Sahara Liquid -Fixed Pricing Opt-G",
            schemeAUM: 0.37398086625771954,
            isManaged: false,
            risk: 0.2,
            return: 5.61,
            color: null
          },
          {
            schemeId: 681,
            schemeName: "SBI Dynamic Bond -G",
            schemeAUM: 0.31457212091411035,
            isManaged: false,
            risk: 2.36,
            return: 14.14,
            color: null
          },
          {
            schemeId: 682,
            schemeName: "SBI Magnum Gilt -Reg-G",
            schemeAUM: 0.6398486704417896,
            isManaged: false,
            risk: 2.89,
            return: 15.52,
            color: null
          },
          {
            schemeId: 683,
            schemeName: "SBI Magnum Constant Maturity -G",
            schemeAUM: 0.14087079062790808,
            isManaged: false,
            risk: 3.94,
            return: 16.8,
            color: null
          },
          {
            schemeId: 684,
            schemeName: "SBI Credit Risk -Reg-G",
            schemeAUM: 0.6142511492995988,
            isManaged: false,
            risk: 1.23,
            return: 6.68,
            color: null
          },
          {
            schemeId: 685,
            schemeName: "SBI Savings -Reg-G",
            schemeAUM: 0.3092619134188137,
            isManaged: false,
            risk: 0.4,
            return: 8.08,
            color: null
          },
          {
            schemeId: 686,
            schemeName: "SBI Magnum  Inc -Reg-G",
            schemeAUM: 0.8683042583816192,
            isManaged: false,
            risk: 2.02,
            return: 10.47,
            color: null
          },
          {
            schemeId: 687,
            schemeName: "SBI Magnum Ultra Short Duration -Reg-G",
            schemeAUM: 0.41187417137942717,
            isManaged: false,
            risk: 0.4,
            return: 8.49,
            color: null
          },
          {
            schemeId: 688,
            schemeName: "SBI Overnight -Reg-G",
            schemeAUM: 0.21073264013726178,
            isManaged: false,
            risk: 0.04,
            return: 6.1,
            color: null
          },
          {
            schemeId: 689,
            schemeName: "SBI Magnum Medium Duration -Reg-G",
            schemeAUM: 0.9980562492323057,
            isManaged: false,
            risk: 1.43,
            return: 10.43,
            color: null
          },
          {
            schemeId: 690,
            schemeName: "SBI Magnum Low Duration -G",
            schemeAUM: 0.36837680090612257,
            isManaged: false,
            risk: 0.5,
            return: 8.61,
            color: null
          },
          {
            schemeId: 691,
            schemeName: "Sundaram Medium Term Bond -G",
            schemeAUM: 0.8571745728312863,
            isManaged: false,
            risk: 1.39,
            return: 8.54,
            color: null
          },
          {
            schemeId: 692,
            schemeName: "Sundaram Corp Bond -G",
            schemeAUM: 0.8093253718935494,
            isManaged: false,
            risk: 1.68,
            return: 11.56,
            color: null
          },
          {
            schemeId: 693,
            schemeName: "Sundaram ST Credit Risk -App",
            schemeAUM: 0.5926883835243149,
            isManaged: false,
            risk: 7.6,
            return: -5.77,
            color: null
          },
          {
            schemeId: 694,
            schemeName: "Sundaram ST Debt -App",
            schemeAUM: 0.6259778704655192,
            isManaged: false,
            risk: 8.01,
            return: -4.74,
            color: null
          },
          {
            schemeId: 695,
            schemeName: "Tata Dynamic Bond -Reg-G",
            schemeAUM: 0.6812458673579553,
            isManaged: false,
            risk: 1.47,
            return: 8.41,
            color: null
          },
          {
            schemeId: 696,
            schemeName: "Tata Treasury Adv -G",
            schemeAUM: 0.3001401264524597,
            isManaged: false,
            risk: 3.7,
            return: 2.41,
            color: null
          },
          {
            schemeId: 697,
            schemeName: "Tata Gilt Sec -Reg-G",
            schemeAUM: 0.5772672227838243,
            isManaged: false,
            risk: 3.18,
            return: 15.05,
            color: null
          },
          {
            schemeId: 698,
            schemeName: "Tata  Inc -Reg-App",
            schemeAUM: 0.9714533275172721,
            isManaged: false,
            risk: 1.97,
            return: 9.67,
            color: null
          },
          {
            schemeId: 699,
            schemeName: "Tata Medium Term -Reg-G",
            schemeAUM: 0.6039913827152843,
            isManaged: false,
            risk: 11.3,
            return: -9.18,
            color: null
          },
          {
            schemeId: 700,
            schemeName: "Tata ST Bond -App",
            schemeAUM: 0.4364619318326852,
            isManaged: false,
            risk: 3.18,
            return: 2.96,
            color: null
          },
          {
            schemeId: 701,
            schemeName: "Franklin India Savings -G",
            schemeAUM: 0.7600016853172569,
            isManaged: false,
            risk: 0.48,
            return: 8.84,
            color: null
          },
          {
            schemeId: 702,
            schemeName: "Franklin India Floating Rate -G",
            schemeAUM: 0.36721562743515235,
            isManaged: false,
            risk: 0.41,
            return: 7.3,
            color: null
          },
          {
            schemeId: 703,
            schemeName: "Franklin India Credit Risk -G",
            schemeAUM: 0.14374515053824166,
            isManaged: false,
            risk: 1.35,
            return: 6.91,
            color: null
          },
          {
            schemeId: 704,
            schemeName: "Franklin India Gov Sec -G",
            schemeAUM: 0.8559338607954794,
            isManaged: false,
            risk: 3.08,
            return: 13.54,
            color: null
          },
          {
            schemeId: 705,
            schemeName: "Franklin India Corp Debt -A-G",
            schemeAUM: 0.18423435882781036,
            isManaged: false,
            risk: 1.96,
            return: 10.5,
            color: null
          },
          {
            schemeId: 706,
            schemeName: "Franklin India Dynamic Accrual -G",
            schemeAUM: 0.0007224027516279374,
            isManaged: false,
            risk: 1.16,
            return: 8.44,
            color: null
          },
          {
            schemeId: 707,
            schemeName: "Franklin India  Inc Opp -G",
            schemeAUM: 0.3026777964458989,
            isManaged: false,
            risk: 1.55,
            return: 7.16,
            color: null
          },
          {
            schemeId: 708,
            schemeName: "Franklin India Low Duration -MD",
            schemeAUM: 0.8780943963682886,
            isManaged: false,
            risk: 0.84,
            return: 5.99,
            color: null
          },
          {
            schemeId: 709,
            schemeName: "Franklin India ST  Inc-G",
            schemeAUM: 0.8281794161107963,
            isManaged: false,
            risk: 1.13,
            return: 7.98,
            color: null
          },
          {
            schemeId: 710,
            schemeName: "Union Dynamic Bond -G",
            schemeAUM: 0.348842314220712,
            isManaged: false,
            risk: 2.41,
            return: 11.8,
            color: null
          },
          {
            schemeId: 711,
            schemeName: "Union Liquid -G",
            schemeAUM: 0.10235602756880047,
            isManaged: false,
            risk: 2.26,
            return: 3.38,
            color: null
          },
          {
            schemeId: 712,
            schemeName: "UTI Bond -Reg-G",
            schemeAUM: 0.7945575155636486,
            isManaged: false,
            risk: 5.54,
            return: -3.03,
            color: null
          },
          {
            schemeId: 713,
            schemeName: "UTI Credit Risk -Reg-G",
            schemeAUM: 0.2642167299050264,
            isManaged: false,
            risk: 2.73,
            return: 1.81,
            color: null
          },
          {
            schemeId: 714,
            schemeName: "UTI Dynamic Bond -Reg-G",
            schemeAUM: 0.5574654370973369,
            isManaged: false,
            risk: 5.41,
            return: -1.85,
            color: null
          },
          {
            schemeId: 715,
            schemeName: "UTI Fixed Interval  Inc -AIP-II-G",
            schemeAUM: 0.0034427409778039486,
            isManaged: false,
            risk: 0.26,
            return: 6.08,
            color: null
          },
          {
            schemeId: 716,
            schemeName: "UTI Fixed Interval  Inc -AIF-III-Retail-G",
            schemeAUM: 0.6027436350027426,
            isManaged: false,
            risk: 0.25,
            return: 5.81,
            color: null
          },
          {
            schemeId: 717,
            schemeName: "UTI Fixed Interval  Inc -AIP-I-Retail-G",
            schemeAUM: 0.36113140307066716,
            isManaged: false,
            risk: 4.46,
            return: 0.39,
            color: null
          },
          {
            schemeId: 718,
            schemeName: "UTI Fixed Interval  Inc -AIF-IV-Retail-G",
            schemeAUM: 0.46416517390315293,
            isManaged: false,
            risk: 0.26,
            return: 6.15,
            color: null
          },
          {
            schemeId: 719,
            schemeName: "UTI Fixed  Inc Interval -Half Yly-I-G",
            schemeAUM: 0.9981713095488518,
            isManaged: false,
            risk: 0.25,
            return: 5.84,
            color: null
          },
          {
            schemeId: 720,
            schemeName: "UTI Fixed  Inc Interval -Half Yly-II-G",
            schemeAUM: 0.06142133794977633,
            isManaged: false,
            risk: 0.25,
            return: 5.83,
            color: null
          },
          {
            schemeId: 721,
            schemeName: "UTI Fixed  Inc Interval -II-QIP-IV-G",
            schemeAUM: 0.43398399611853833,
            isManaged: false,
            risk: 0.25,
            return: 5.83,
            color: null
          },
          {
            schemeId: 722,
            schemeName: "UTI Fixed  Inc Interval -II-QIP-VII-Retail-G",
            schemeAUM: 0.002577349558156916,
            isManaged: false,
            risk: 0.25,
            return: 5.8,
            color: null
          },
          {
            schemeId: 723,
            schemeName: "UTI Fixed  Inc Interval -II-QIP-VI-Retail-G",
            schemeAUM: 0.7040042707391447,
            isManaged: false,
            risk: 0.33,
            return: 7.28,
            color: null
          },
          {
            schemeId: 724,
            schemeName: "UTI Fixed  Inc Interval -II-QIP-V-Retail-G",
            schemeAUM: 0.005627478418094745,
            isManaged: false,
            risk: 0.32,
            return: 6.32,
            color: null
          },
          {
            schemeId: 725,
            schemeName: "UTI Fixed  Inc Interval -Mly Interval-II-Retail-G",
            schemeAUM: 0.6679418234693077,
            isManaged: false,
            risk: 0.25,
            return: 5.81,
            color: null
          },
          {
            schemeId: 726,
            schemeName: "UTI Fixed  Inc Interval  – Mly Interval-I-Retail-G",
            schemeAUM: 0.014775831381469873,
            isManaged: false,
            risk: 0.25,
            return: 5.79,
            color: null
          },
          {
            schemeId: 727,
            schemeName: "UTI Fixed  Inc Interval -QIP-III-Retail-G",
            schemeAUM: 0.563496497211414,
            isManaged: false,
            risk: 0.32,
            return: 7.17,
            color: null
          },
          {
            schemeId: 728,
            schemeName: "UTI Fixed  Inc Interval -QIP-I-Retail-G",
            schemeAUM: 0.47598682824737937,
            isManaged: false,
            risk: 0.3,
            return: 6.47,
            color: null
          },
          {
            schemeId: 729,
            schemeName: "UTI Ultra STP-Reg-G",
            schemeAUM: 0.9624527841664394,
            isManaged: false,
            risk: 2.48,
            return: 3.04,
            color: null
          },
          {
            schemeId: 730,
            schemeName: "UTI Gilt -Reg-G",
            schemeAUM: 0.04064256226184426,
            isManaged: false,
            risk: 3.17,
            return: 14.75,
            color: null
          },
          {
            schemeId: 731,
            schemeName: "UTI Overnight -Reg-G",
            schemeAUM: 0.009696125285336032,
            isManaged: false,
            risk: 0.05,
            return: 6.13,
            color: null
          },
          {
            schemeId: 732,
            schemeName: "IIFL Dynamic Bond -Reg-G",
            schemeAUM: 0.7334617021713086,
            isManaged: false,
            risk: 0.95,
            return: 7.35,
            color: null
          },
          {
            schemeId: 733,
            schemeName: "Motilal Oswal Ultra STP-Reg-G",
            schemeAUM: 0.21301693432780722,
            isManaged: false,
            risk: 7.72,
            return: -7.99,
            color: null
          },
          {
            schemeId: 734,
            schemeName: "Indiabulls STP-G",
            schemeAUM: 0.6770712286682863,
            isManaged: false,
            risk: 1.03,
            return: 7.86,
            color: null
          },
          {
            schemeId: 735,
            schemeName: "Edelweiss Banking and PSU Debt -Reg-G",
            schemeAUM: 0.9068998638360204,
            isManaged: false,
            risk: 2.08,
            return: 12.68,
            color: null
          },
          {
            schemeId: 736,
            schemeName: "DSP Banking & PSU Debt -Reg-G",
            schemeAUM: 0.07813052157577616,
            isManaged: false,
            risk: 1.16,
            return: 10.48,
            color: null
          },
          {
            schemeId: 737,
            schemeName: "IIFL Liquid -Reg-G",
            schemeAUM: 0.7957133313637585,
            isManaged: false,
            risk: 0.17,
            return: 6.54,
            color: null
          },
          {
            schemeId: 738,
            schemeName: "UTI Banking & PSU Debt -Reg-G",
            schemeAUM: 0.17777013135806463,
            isManaged: false,
            risk: 6.01,
            return: 1.03,
            color: null
          },
          {
            schemeId: 739,
            schemeName: "Canara Robeco Corp Bond -Reg-G",
            schemeAUM: 0.6952099016793638,
            isManaged: false,
            risk: 1.11,
            return: 9.82,
            color: null
          },
          {
            schemeId: 740,
            schemeName: "BNP Paribas Medium Term -G",
            schemeAUM: 0.39490747144004,
            isManaged: false,
            risk: 11.38,
            return: -2.05,
            color: null
          },
          {
            schemeId: 741,
            schemeName: "HDFC Banking and PSU Debt -Reg-G",
            schemeAUM: 0.8939908967533747,
            isManaged: false,
            risk: 1.22,
            return: 10.13,
            color: null
          },
          {
            schemeId: 742,
            schemeName: "HDFC Credit Risk Debt -G",
            schemeAUM: 0.5447704841833836,
            isManaged: false,
            risk: 1.05,
            return: 8.06,
            color: null
          },
          {
            schemeId: 743,
            schemeName: "HDFC FMP-XXIX-370 D-Mar 2014 (1)-Reg-G",
            schemeAUM: 0.721594791424381,
            isManaged: false,
            risk: 0.66,
            return: 9,
            color: null
          },
          {
            schemeId: 744,
            schemeName: "HDFC FMP-XXIX-793 D-Feb 2014 (1)-Reg-G",
            schemeAUM: 0.14037776744895547,
            isManaged: false,
            risk: 0.67,
            return: 9.02,
            color: null
          },
          {
            schemeId: 745,
            schemeName: "HDFC FMP-XXVII-1846 D-Aug 2013(1)-Reg-G",
            schemeAUM: 0.9920640469682018,
            isManaged: false,
            risk: 1.37,
            return: 7.09,
            color: null
          },
          {
            schemeId: 746,
            schemeName: "HDFC FMP-XXX-3360 D-Mar 2014 (1)-Reg-G",
            schemeAUM: 0.18580495637549332,
            isManaged: false,
            risk: 1.55,
            return: 12.81,
            color: null
          },
          {
            schemeId: 747,
            schemeName: "ICICI Prudential FMP-73-1140 D E-Cum",
            schemeAUM: 0.9132359305781135,
            isManaged: false,
            risk: 0.76,
            return: 8.49,
            color: null
          },
          {
            schemeId: 748,
            schemeName: "IDBI Credit Risk -G",
            schemeAUM: 0.7355362745388763,
            isManaged: false,
            risk: 6.13,
            return: -0.84,
            color: null
          },
          {
            schemeId: 749,
            schemeName: "Edelweiss Gov Sec -Reg-G",
            schemeAUM: 0.08065441303211363,
            isManaged: false,
            risk: 3.5,
            return: 15.29,
            color: null
          },
          {
            schemeId: 750,
            schemeName: "Kotak Medium Term -G",
            schemeAUM: 0.37083577645283516,
            isManaged: false,
            risk: 1.93,
            return: 6.08,
            color: null
          },
          {
            schemeId: 751,
            schemeName: "Reliance Fixed Horizon  -XXIV- 2-G",
            schemeAUM: 0.03443136932498336,
            isManaged: false,
            risk: 4.23,
            return: 3.05,
            color: null
          },
          {
            schemeId: 752,
            schemeName: "Reliance Fixed Horizon  -XXV- 15-G",
            schemeAUM: 0.5332454288100605,
            isManaged: false,
            risk: 0.76,
            return: 8.21,
            color: null
          },
          {
            schemeId: 753,
            schemeName: "Franklin India Banking & PSU Debt -G",
            schemeAUM: 0.6576748080835513,
            isManaged: false,
            risk: 1.36,
            return: 11.91,
            color: null
          },
          {
            schemeId: 754,
            schemeName: "Baroda Liquid -G",
            schemeAUM: 0.6945981462751727,
            isManaged: false,
            risk: 0.12,
            return: 7.32,
            color: null
          },
          {
            schemeId: 755,
            schemeName: "Baroda Treasury Adv -G",
            schemeAUM: 0.8502579630126241,
            isManaged: false,
            risk: 14.33,
            return: -12.27,
            color: null
          },
          {
            schemeId: 756,
            schemeName: "Aditya Birla Sun Life Liquid -G",
            schemeAUM: 0.32512238400638327,
            isManaged: false,
            risk: 0.05,
            return: 7.41,
            color: null
          },
          {
            schemeId: 757,
            schemeName: "Aditya Birla Sun Life Floating Rate -G",
            schemeAUM: 0.3934718287408532,
            isManaged: false,
            risk: 0.54,
            return: 9.02,
            color: null
          },
          {
            schemeId: 758,
            schemeName: "Aditya Birla Sun Life Money Manager -G",
            schemeAUM: 0.6376182533481465,
            isManaged: false,
            risk: 0.42,
            return: 8.74,
            color: null
          },
          {
            schemeId: 759,
            schemeName: "Aditya Birla Sun Life Savings -G",
            schemeAUM: 0.37556692086606547,
            isManaged: false,
            risk: 0.44,
            return: 8.94,
            color: null
          },
          {
            schemeId: 760,
            schemeName: "Aditya Birla Sun Life Banking & PSU Debt-G",
            schemeAUM: 0.42238032989141283,
            isManaged: false,
            risk: 1.22,
            return: 10.79,
            color: null
          },
          {
            schemeId: 761,
            schemeName: "BNP Paribas Corp Bond -G",
            schemeAUM: 0.8456928527365115,
            isManaged: false,
            risk: 9.67,
            return: 0.25,
            color: null
          },
          {
            schemeId: 762,
            schemeName: "BNP Paribas Low Duration -G",
            schemeAUM: 0.8690796392658582,
            isManaged: false,
            risk: 6.23,
            return: 7.27,
            color: null
          },
          {
            schemeId: 763,
            schemeName: "BNP Paribas Liquid -G",
            schemeAUM: 0.7259288727457913,
            isManaged: false,
            risk: 0.18,
            return: 7.34,
            color: null
          },
          {
            schemeId: 764,
            schemeName: "BNP Paribas STP-G",
            schemeAUM: 0.8916005508902267,
            isManaged: false,
            risk: 3.53,
            return: 6.76,
            color: null
          },
          {
            schemeId: 765,
            schemeName: "Canara Robeco Liquid -Reg-G",
            schemeAUM: 0.42273547585111837,
            isManaged: false,
            risk: 0.05,
            return: 7.11,
            color: null
          },
          {
            schemeId: 766,
            schemeName: "Canara Robeco Ultra STP-Reg-G",
            schemeAUM: 0.23665841881741345,
            isManaged: false,
            risk: 0.31,
            return: 6.85,
            color: null
          },
          {
            schemeId: 767,
            schemeName: "DSP Liquidity -Reg-G",
            schemeAUM: 0.6429939215137688,
            isManaged: false,
            risk: 0.04,
            return: 7.28,
            color: null
          },
          {
            schemeId: 768,
            schemeName: "DSP Strategic Bond -Reg-G",
            schemeAUM: 0.5260185146033831,
            isManaged: false,
            risk: 4.98,
            return: 10.91,
            color: null
          },
          {
            schemeId: 769,
            schemeName: "DHFL Pramerica Insta Cash -G",
            schemeAUM: 0.5706587658000439,
            isManaged: false,
            risk: 0.05,
            return: 7.43,
            color: null
          },
          {
            schemeId: 770,
            schemeName: "DHFL Pramerica Ultra STP-G",
            schemeAUM: 0.8434951022806461,
            isManaged: false,
            risk: 1.42,
            return: 12.27,
            color: null
          },
          {
            schemeId: 771,
            schemeName: "HDFC Floating Rate Debt -G",
            schemeAUM: 0.5121396514046923,
            isManaged: false,
            risk: 0.52,
            return: 8.5,
            color: null
          },
          {
            schemeId: 772,
            schemeName: "HSBC Cash -G",
            schemeAUM: 0.6193967807998728,
            isManaged: false,
            risk: 0.19,
            return: 7.36,
            color: null
          },
          {
            schemeId: 773,
            schemeName: "HSBC Flexi Debt -G",
            schemeAUM: 0.6675990481973568,
            isManaged: false,
            risk: 2.37,
            return: 13.21,
            color: null
          },
          {
            schemeId: 774,
            schemeName: "HSBC Low Duration -G",
            schemeAUM: 0.3558043760183991,
            isManaged: false,
            risk: 7.86,
            return: -2.35,
            color: null
          },
          {
            schemeId: 775,
            schemeName: "ICICI Prudential Medium Term Bond -G",
            schemeAUM: 0.6131680519517282,
            isManaged: false,
            risk: 1,
            return: 7.24,
            color: null
          },
          {
            schemeId: 776,
            schemeName: "ICICI Prudential FMP-74-9 Y U-Cum",
            schemeAUM: 0.08463773982629474,
            isManaged: false,
            risk: 1.9,
            return: 13.07,
            color: null
          },
          {
            schemeId: 777,
            schemeName: "ICICI Prudential Liquid -G",
            schemeAUM: 0.8688793588605781,
            isManaged: false,
            risk: 0.05,
            return: 7.31,
            color: null
          },
          {
            schemeId: 778,
            schemeName: "ICICI Prudential All Seasons Bond -G",
            schemeAUM: 0.7529720119320216,
            isManaged: false,
            risk: 1.41,
            return: 10.04,
            color: null
          },
          {
            schemeId: 779,
            schemeName: "ICICI Prudential Money Market -G",
            schemeAUM: 0.5002778315649499,
            isManaged: false,
            risk: 0.39,
            return: 8.39,
            color: null
          },
          {
            schemeId: 780,
            schemeName: "ICICI Prudential Floating Interest -G",
            schemeAUM: 0.8290712334834345,
            isManaged: false,
            risk: 0.5,
            return: 7.81,
            color: null
          },
          {
            schemeId: 781,
            schemeName: "ICICI Prudential Corp Bond -G",
            schemeAUM: 0.8655870602142466,
            isManaged: false,
            risk: 0.86,
            return: 9.59,
            color: null
          },
          {
            schemeId: 782,
            schemeName: "IDFC Cash -Reg-G",
            schemeAUM: 0.1692675515005575,
            isManaged: false,
            risk: 0.05,
            return: 7.09,
            color: null
          },
          {
            schemeId: 783,
            schemeName: "IDFC Dynamic Bond -Reg-G",
            schemeAUM: 0.48807627437219847,
            isManaged: false,
            risk: 2.73,
            return: 14.38,
            color: null
          },
          {
            schemeId: 784,
            schemeName: "IDFC Gov Sec -Investment-Reg-G",
            schemeAUM: 0.4858854020810155,
            isManaged: false,
            risk: 3.5,
            return: 17.17,
            color: null
          },
          {
            schemeId: 785,
            schemeName: "JM STP-G",
            schemeAUM: 0.15181006784663498,
            isManaged: false,
            risk: 4.62,
            return: 1.6,
            color: null
          },
          {
            schemeId: 786,
            schemeName: "Edelweiss Corp Bond -Reg-G",
            schemeAUM: 0.9690107864712447,
            isManaged: false,
            risk: 11.38,
            return: -5.9,
            color: null
          },
          {
            schemeId: 787,
            schemeName: "Edelweiss Liquid -Reg-G",
            schemeAUM: 0.08507749952671695,
            isManaged: false,
            risk: 0.11,
            return: 7.33,
            color: null
          },
          {
            schemeId: 788,
            schemeName: "Edelweiss Low Duration -Reg-G",
            schemeAUM: 0.5263388657056602,
            isManaged: false,
            risk: 9.9,
            return: -5.12,
            color: null
          },
          {
            schemeId: 789,
            schemeName: "Kotak Dynamic Bond -Reg-G",
            schemeAUM: 0.590603234377403,
            isManaged: false,
            risk: 1.83,
            return: 12.82,
            color: null
          },
          {
            schemeId: 790,
            schemeName: "Kotak Liquid -Reg-G",
            schemeAUM: 0.9976532379693728,
            isManaged: false,
            risk: 0.18,
            return: 7.2,
            color: null
          },
          {
            schemeId: 791,
            schemeName: "L&T Cash -Reg-G",
            schemeAUM: 0.0008034000118688489,
            isManaged: false,
            risk: 0.14,
            return: 5.4,
            color: null
          },
          {
            schemeId: 792,
            schemeName: "L&T Flexi Bond -Reg-G",
            schemeAUM: 0.21001300707850978,
            isManaged: false,
            risk: 1.97,
            return: 12.03,
            color: null
          },
          {
            schemeId: 793,
            schemeName: "L&T Credit Risk -G",
            schemeAUM: 0.041419058771948736,
            isManaged: false,
            risk: 2.33,
            return: 4.72,
            color: null
          },
          {
            schemeId: 794,
            schemeName: "L&T Liquid -G",
            schemeAUM: 0.8733138892720937,
            isManaged: false,
            risk: 0.18,
            return: 7.26,
            color: null
          },
          {
            schemeId: 795,
            schemeName: "L&T Banking and PSU Debt -Reg-G",
            schemeAUM: 0.15924203293878447,
            isManaged: false,
            risk: 1.13,
            return: 9.32,
            color: null
          },
          {
            schemeId: 796,
            schemeName: "L&T Ultra STP-G",
            schemeAUM: 0.53972226264555,
            isManaged: false,
            risk: 0.4,
            return: 8.21,
            color: null
          },
          {
            schemeId: 797,
            schemeName: "Mirae Asset Savings -Reg Savings-G",
            schemeAUM: 0.0254721215063618,
            isManaged: false,
            risk: 1.16,
            return: 6.59,
            color: null
          },
          {
            schemeId: 798,
            schemeName: "Essel Liquid -Reg-G",
            schemeAUM: 0.6562078200860362,
            isManaged: false,
            risk: 0.19,
            return: 7.17,
            color: null
          },
          {
            schemeId: 799,
            schemeName: "Essel Ultra STP-Reg-G",
            schemeAUM: 0.5179443535748458,
            isManaged: false,
            risk: 0.33,
            return: 6.77,
            color: null
          },
          {
            schemeId: 800,
            schemeName: "Kotak Low Duration -G",
            schemeAUM: 0.013010278434263833,
            isManaged: false,
            risk: 0.73,
            return: 8.08,
            color: null
          },
          {
            schemeId: 801,
            schemeName: "Kotak Corp Bond -G",
            schemeAUM: 0.5724789003163391,
            isManaged: false,
            risk: 0.75,
            return: 9.65,
            color: null
          },
          {
            schemeId: 802,
            schemeName: "Reliance Strategic Debt -G",
            schemeAUM: 0.24872334974727983,
            isManaged: false,
            risk: 3.51,
            return: -1.18,
            color: null
          },
          {
            schemeId: 803,
            schemeName: "Reliance Interval -AIF-- I-G",
            schemeAUM: 0.24770111696977026,
            isManaged: false,
            risk: 0.46,
            return: 8,
            color: null
          },
          {
            schemeId: 804,
            schemeName: "Reliance Liquid -G",
            schemeAUM: 0.27310183885676476,
            isManaged: false,
            risk: 0.05,
            return: 7.44,
            color: null
          },
          {
            schemeId: 805,
            schemeName: "Reliance Low Duration -G",
            schemeAUM: 0.8924937988505501,
            isManaged: false,
            risk: 1.74,
            return: 6.84,
            color: null
          },
          {
            schemeId: 806,
            schemeName: "Invesco India Money Market -G",
            schemeAUM: 0.9203170882716436,
            isManaged: false,
            risk: 0.32,
            return: 7.58,
            color: null
          },
          {
            schemeId: 807,
            schemeName: "Invesco India Liquid -G",
            schemeAUM: 0.023847584600790395,
            isManaged: false,
            risk: 0.03,
            return: 7.25,
            color: null
          },
          {
            schemeId: 808,
            schemeName: "Invesco India Treasury Adv -G",
            schemeAUM: 0.896168355321111,
            isManaged: false,
            risk: 0.54,
            return: 9.08,
            color: null
          },
          {
            schemeId: 809,
            schemeName: "SBI Liquid -G",
            schemeAUM: 0.8850030908330062,
            isManaged: false,
            risk: 0.06,
            return: 7.2,
            color: null
          },
          {
            schemeId: 810,
            schemeName: "SBI ST Debt -Reg-G",
            schemeAUM: 0.11286808317565478,
            isManaged: false,
            risk: 1.04,
            return: 9.49,
            color: null
          },
          {
            schemeId: 811,
            schemeName: "Sundaram Banking & PSU Debt -G",
            schemeAUM: 0.3804455544157166,
            isManaged: false,
            risk: 1.18,
            return: 10.34,
            color: null
          },
          {
            schemeId: 812,
            schemeName: "Sundaram Money -Reg-G",
            schemeAUM: 0.4003532063175035,
            isManaged: false,
            risk: 0.06,
            return: 7.36,
            color: null
          },
          {
            schemeId: 813,
            schemeName: "Sundaram Low Duration -Reg-G",
            schemeAUM: 0.9880012254958175,
            isManaged: false,
            risk: 5.79,
            return: -2.21,
            color: null
          },
          {
            schemeId: 814,
            schemeName: "Tata Money Market -Reg-G",
            schemeAUM: 0.23182351970295612,
            isManaged: false,
            risk: 5.09,
            return: 0.73,
            color: null
          },
          {
            schemeId: 815,
            schemeName: "Tata Liquid -Reg-G",
            schemeAUM: 0.6617227116724373,
            isManaged: false,
            risk: 0.04,
            return: 7.32,
            color: null
          },
          {
            schemeId: 816,
            schemeName: "Tata Corp Bond -Reg-G",
            schemeAUM: 0.006448576038945442,
            isManaged: false,
            risk: 28.02,
            return: -40.65,
            color: null
          },
          {
            schemeId: 817,
            schemeName: "Taurus Liquid -Super  Inst-G",
            schemeAUM: 0.9643444261148995,
            isManaged: false,
            risk: 0.13,
            return: 5.75,
            color: null
          },
          {
            schemeId: 818,
            schemeName: "Franklin India Liquid -Super  Inst-G",
            schemeAUM: 0.5382822149940472,
            isManaged: false,
            risk: 0.06,
            return: 7.53,
            color: null
          },
          {
            schemeId: 819,
            schemeName: "Franklin India Ultra Short Bond -Super  Inst-G",
            schemeAUM: 0.9840182685206491,
            isManaged: false,
            risk: 0.51,
            return: 9.79,
            color: null
          },
          {
            schemeId: 820,
            schemeName: "UTI Liquid Cash-Reg-G",
            schemeAUM: 0.9059844714554681,
            isManaged: false,
            risk: 0.07,
            return: 7.36,
            color: null
          },
          {
            schemeId: 821,
            schemeName: "UTI Money Market -Reg-G",
            schemeAUM: 0.09797311065412417,
            isManaged: false,
            risk: 0.42,
            return: 8.6,
            color: null
          },
          {
            schemeId: 822,
            schemeName: "UTI ST  Inc -Reg-G",
            schemeAUM: 0.2464868733147927,
            isManaged: false,
            risk: 8.63,
            return: -4.35,
            color: null
          },
          {
            schemeId: 823,
            schemeName: "UTI Treasury Adv -Reg-G",
            schemeAUM: 0.6810822717716802,
            isManaged: false,
            risk: 7.99,
            return: -4.05,
            color: null
          },
          {
            schemeId: 824,
            schemeName: "Axis Credit Risk -Reg-G",
            schemeAUM: 0.7585054999308967,
            isManaged: false,
            risk: 3.01,
            return: 4,
            color: null
          },
          {
            schemeId: 825,
            schemeName: "DSP 10Y G-Sec -Reg-G",
            schemeAUM: 0.8572795051161364,
            isManaged: false,
            risk: 4.47,
            return: 15.58,
            color: null
          },
          {
            schemeId: 826,
            schemeName: "DHFL Pramerica Credit Risk -Reg-G",
            schemeAUM: 0.5990498662005763,
            isManaged: false,
            risk: 3.2,
            return: 2.74,
            color: null
          },
          {
            schemeId: 827,
            schemeName: "ICICI Prudential Constant Maturity Gilt -G",
            schemeAUM: 0.5765517734493739,
            isManaged: false,
            risk: 4.13,
            return: 18.12,
            color: null
          },
          {
            schemeId: 828,
            schemeName: "Invesco India Credit Risk -G",
            schemeAUM: 0.138156075782772,
            isManaged: false,
            risk: 6.72,
            return: -6.24,
            color: null
          },
          {
            schemeId: 829,
            schemeName: "DSP Low Duration -Reg-G",
            schemeAUM: 0.5172893054179748,
            isManaged: false,
            risk: 1.56,
            return: 7.74,
            color: null
          },
          {
            schemeId: 830,
            schemeName: "Baroda Credit Risk -A-G",
            schemeAUM: 0.23013563353987876,
            isManaged: false,
            risk: 1.86,
            return: 3.47,
            color: null
          },
          {
            schemeId: 831,
            schemeName: "BOI AXA Credit Risk -Reg-G",
            schemeAUM: 0.3544713129409147,
            isManaged: false,
            risk: 28.61,
            return: -48.09,
            color: null
          },
          {
            schemeId: 832,
            schemeName: "L&T Resurgent India Bond -Reg-G",
            schemeAUM: 0.2901231246382323,
            isManaged: false,
            risk: 1.88,
            return: 6.76,
            color: null
          },
          {
            schemeId: 833,
            schemeName: "Reliance Banking & PSU Debt -G",
            schemeAUM: 0.003789432353100697,
            isManaged: false,
            risk: 1.31,
            return: 11.1,
            color: null
          },
          {
            schemeId: 834,
            schemeName: "Quantum Dynamic Bond -G-Dir",
            schemeAUM: 0.6457017585367661,
            isManaged: false,
            risk: 1.75,
            return: 12.14,
            color: null
          },
          {
            schemeId: 835,
            schemeName: "Aditya Birla Sun Life Credit Risk -Reg-G",
            schemeAUM: 0.4377414983381174,
            isManaged: false,
            risk: 1.14,
            return: 5.97,
            color: null
          },
          {
            schemeId: 836,
            schemeName: "UTI Medium Term -Reg-G",
            schemeAUM: 0.5001813570432772,
            isManaged: false,
            risk: 1.83,
            return: 6.42,
            color: null
          },
          {
            schemeId: 837,
            schemeName: "IDFC Corp Bond -Reg-G",
            schemeAUM: 0.3181075609376647,
            isManaged: false,
            risk: 0.74,
            return: 8.83,
            color: null
          },
          {
            schemeId: 838,
            schemeName: "HDFC FMP-XXXV-1168 D-Feb 2016 (1)-Reg-G",
            schemeAUM: 0.31213863126439234,
            isManaged: false,
            risk: 0.64,
            return: 8.78,
            color: null
          },
          {
            schemeId: 839,
            schemeName: "ICICI Prudential FMP-78-1281 D V-Cum",
            schemeAUM: 0.40241926606509426,
            isManaged: false,
            risk: 0.43,
            return: 8.46,
            color: null
          },
          {
            schemeId: 840,
            schemeName: "ICICI Prudential FMP-79-1218 D A-Cum",
            schemeAUM: 0.18921602918409208,
            isManaged: false,
            risk: 0.41,
            return: 7.76,
            color: null
          },
          {
            schemeId: 841,
            schemeName: "UTI FT  Inc -XXIV-XIV (1831 D)-G",
            schemeAUM: 0.1518925957329995,
            isManaged: false,
            risk: 0.94,
            return: 10.59,
            color: null
          },
          {
            schemeId: 842,
            schemeName: "Mahindra Liquid -Reg-G",
            schemeAUM: 0.4010464475594051,
            isManaged: false,
            risk: 0.06,
            return: 7.4,
            color: null
          },
          {
            schemeId: 843,
            schemeName: "HDFC FMP-XXXVI-1161 D-Jul 2016 (1)-Reg-G",
            schemeAUM: 0.33693767620064863,
            isManaged: false,
            risk: 0.5,
            return: 8.28,
            color: null
          },
          {
            schemeId: 844,
            schemeName: "Aditya Birla Sun Life FTP-NT-1099 D-Reg-G",
            schemeAUM: 0.6120589581633733,
            isManaged: false,
            risk: 0.44,
            return: 7.7,
            color: null
          },
          {
            schemeId: 845,
            schemeName: "DHFL Pramerica Fixed Duration -31-Reg-G",
            schemeAUM: 0.9095121781497708,
            isManaged: false,
            risk: 0.38,
            return: 7.2,
            color: null
          },
          {
            schemeId: 846,
            schemeName: "ICICI Prudential FMP-79-1106 D M-Cum",
            schemeAUM: 0.9373650083092724,
            isManaged: false,
            risk: 0.4,
            return: 7.78,
            color: null
          },
          {
            schemeId: 847,
            schemeName: "ICICI Prudential FMP-79-1118 D K-Cum",
            schemeAUM: 0.008854391705702458,
            isManaged: false,
            risk: 0.39,
            return: 7.73,
            color: null
          },
          {
            schemeId: 848,
            schemeName: "ICICI Prudential FMP-79-1120 D J-Cum",
            schemeAUM: 0.4760015701906808,
            isManaged: false,
            risk: 0.39,
            return: 7.68,
            color: null
          },
          {
            schemeId: 849,
            schemeName: "Reliance Fixed Horizon  -XXXI- 6-1143 D-G",
            schemeAUM: 0.6508112982934995,
            isManaged: false,
            risk: 5.12,
            return: 1.63,
            color: null
          },
          {
            schemeId: 850,
            schemeName: "Reliance Fixed Horizon  -XXXI- 8-1419 D-G",
            schemeAUM: 0.9075171011859982,
            isManaged: false,
            risk: 0.64,
            return: 9.56,
            color: null
          },
          {
            schemeId: 851,
            schemeName: "Reliance Fixed Horizon  -XXXI- 9-1130 D-G",
            schemeAUM: 0.9998159041776085,
            isManaged: false,
            risk: 0.41,
            return: 8.13,
            color: null
          },
          {
            schemeId: 852,
            schemeName: "SBI Debt -B-43-1100 D-Reg-G",
            schemeAUM: 0.6471052998829201,
            isManaged: false,
            risk: 0.31,
            return: 7.35,
            color: null
          },
          {
            schemeId: 853,
            schemeName: "UTI FT  Inc -XXV-III (1100 D)-G",
            schemeAUM: 0.6722742273729729,
            isManaged: false,
            risk: 4.96,
            return: -0.11,
            color: null
          },
          {
            schemeId: 854,
            schemeName: "UTI FT  Inc -XXV-V (1100 D)-G",
            schemeAUM: 0.27244201863572126,
            isManaged: false,
            risk: 0.42,
            return: 7.88,
            color: null
          },
          {
            schemeId: 855,
            schemeName: "HDFC FMP-XXXVII-1111 D-Sep 2016 (1)-Reg-G",
            schemeAUM: 0.9172199980429361,
            isManaged: false,
            risk: 0.49,
            return: 7.77,
            color: null
          },
          {
            schemeId: 856,
            schemeName: "HDFC FMP-XXXVII-1302 D-Sep 2016 (1)-Reg-G",
            schemeAUM: 0.8775490894176237,
            isManaged: false,
            risk: 0.79,
            return: 7.33,
            color: null
          },
          {
            schemeId: 857,
            schemeName: "HDFC FMP-XXXVII-1309 D-Sep 2016 (1)-Reg-G",
            schemeAUM: 0.5161536402506537,
            isManaged: false,
            risk: 0.79,
            return: 7.49,
            color: null
          },
          {
            schemeId: 858,
            schemeName: "ICICI Prudential FMP-79-1104 D O-Cum",
            schemeAUM: 0.3744049348690166,
            isManaged: false,
            risk: 0.46,
            return: 8.35,
            color: null
          },
          {
            schemeId: 859,
            schemeName: "ICICI Prudential FMP-79-1104 D P-Cum",
            schemeAUM: 0.08010206347234639,
            isManaged: false,
            risk: 0.4,
            return: 7.75,
            color: null
          },
          {
            schemeId: 860,
            schemeName: "ICICI Prudential FMP-79-1404 D T-Cum",
            schemeAUM: 0.06473676664270256,
            isManaged: false,
            risk: 0.65,
            return: 9.27,
            color: null
          },
          {
            schemeId: 861,
            schemeName: "Reliance Fixed Horizon  -XXXI- 11-1101 D-G",
            schemeAUM: 0.5698912842042321,
            isManaged: false,
            risk: 5.05,
            return: 1.75,
            color: null
          },
          {
            schemeId: 862,
            schemeName: "Reliance Fixed Horizon  -XXXI- 13-1130 D-G",
            schemeAUM: 0.2729986629375285,
            isManaged: false,
            risk: 0.43,
            return: 8.1,
            color: null
          },
          {
            schemeId: 863,
            schemeName: "Reliance Fixed Horizon  -XXXI- 15-1403 D-G",
            schemeAUM: 0.07278964232936302,
            isManaged: false,
            risk: 2.08,
            return: 5.01,
            color: null
          },
          {
            schemeId: 864,
            schemeName: "SBI Debt -B-44-1100 D-Reg-G",
            schemeAUM: 0.1605916611693583,
            isManaged: false,
            risk: 0.3,
            return: 7.24,
            color: null
          },
          {
            schemeId: 865,
            schemeName: "UTI FT  Inc -XXV-IV (1100 D)-G",
            schemeAUM: 0.2974485715882642,
            isManaged: false,
            risk: 5.7,
            return: -1.32,
            color: null
          },
          {
            schemeId: 866,
            schemeName: "UTI FT  Inc -XXV-VI (1098 D)-G",
            schemeAUM: 0.2972510052523545,
            isManaged: false,
            risk: 5.93,
            return: -1.69,
            color: null
          },
          {
            schemeId: 867,
            schemeName: "UTI FT  Inc -XXV-VII (1097 D)-G",
            schemeAUM: 0.26143017542224944,
            isManaged: false,
            risk: 5.64,
            return: -1.19,
            color: null
          },
          {
            schemeId: 868,
            schemeName: "L&T FMP-XIV-A-1233 D-G",
            schemeAUM: 0.45988970776466886,
            isManaged: false,
            risk: 0.77,
            return: 7.99,
            color: null
          },
          {
            schemeId: 869,
            schemeName: "ICICI Prudential FMP-80-1100 D A-Cum",
            schemeAUM: 0.5404820130413464,
            isManaged: false,
            risk: 0.46,
            return: 8.18,
            color: null
          },
          {
            schemeId: 870,
            schemeName: "ICICI Prudential FMP-80-1248 D D-Cum",
            schemeAUM: 0.9911406051201677,
            isManaged: false,
            risk: 0.51,
            return: 8.86,
            color: null
          },
          {
            schemeId: 871,
            schemeName: "ICICI Prudential FMP-80-1194 D F-Cum",
            schemeAUM: 0.25152292452837943,
            isManaged: false,
            risk: 0.6,
            return: 9.19,
            color: null
          },
          {
            schemeId: 872,
            schemeName: "ICICI Prudential FMP-80-1187 D G-Cum",
            schemeAUM: 0.6583856443521847,
            isManaged: false,
            risk: 0.59,
            return: 9.21,
            color: null
          },
          {
            schemeId: 873,
            schemeName: "UTI FT  Inc -XXV-VIII (1100 D)-G",
            schemeAUM: 0.7613163190215764,
            isManaged: false,
            risk: 5.21,
            return: -0.41,
            color: null
          },
          {
            schemeId: 874,
            schemeName: "UTI FT  Inc -XXV-IX (1098 D)-G",
            schemeAUM: 0.5487046121152495,
            isManaged: false,
            risk: 5.72,
            return: -1.24,
            color: null
          },
          {
            schemeId: 875,
            schemeName: "UTI FT  Inc -XXVI-I (1182 D)-G",
            schemeAUM: 0.4634366297135024,
            isManaged: false,
            risk: 0.62,
            return: 8.77,
            color: null
          },
          {
            schemeId: 876,
            schemeName: "Reliance Fixed Horizon  -XXXII- 1-1418 D-G",
            schemeAUM: 0.47539454857024865,
            isManaged: false,
            risk: 2.99,
            return: 2.81,
            color: null
          },
          {
            schemeId: 877,
            schemeName: "UTI FT  Inc -XXV-X (1229 D)-G",
            schemeAUM: 0.6058446858225592,
            isManaged: false,
            risk: 0.61,
            return: 8.83,
            color: null
          },
          {
            schemeId: 878,
            schemeName: "Reliance Fixed Horizon  -XXXII- 2-1417 D-G",
            schemeAUM: 0.7713867611350698,
            isManaged: false,
            risk: 3.08,
            return: 3.06,
            color: null
          },
          {
            schemeId: 879,
            schemeName: "Reliance Fixed Horizon  -XXXII- 4-1414 D-G",
            schemeAUM: 0.41006233850349383,
            isManaged: false,
            risk: 1.56,
            return: 5.75,
            color: null
          },
          {
            schemeId: 880,
            schemeName: "UTI FT  Inc -XXV-XI (1211 D)-G",
            schemeAUM: 0.811063931385364,
            isManaged: false,
            risk: 0.6,
            return: 8.73,
            color: null
          },
          {
            schemeId: 881,
            schemeName: "Reliance Fixed Horizon  -XXXII- 7-1376 D-G",
            schemeAUM: 0.8681660262378283,
            isManaged: false,
            risk: 4.5,
            return: 0.97,
            color: null
          },
          {
            schemeId: 882,
            schemeName: "UTI FT  Inc -XXVI-II (1176 D)-G",
            schemeAUM: 0.7294624649799148,
            isManaged: false,
            risk: 0.7,
            return: 8.61,
            color: null
          },
          {
            schemeId: 883,
            schemeName: "Reliance Fixed Horizon  -XXXII- 8-1295 D-G",
            schemeAUM: 0.8730038085544898,
            isManaged: false,
            risk: 0.7,
            return: 9.52,
            color: null
          },
          {
            schemeId: 884,
            schemeName: "Reliance Fixed Horizon  -XXXII- 9-1285 D-G",
            schemeAUM: 0.6502647119135463,
            isManaged: false,
            risk: 0.7,
            return: 9.48,
            color: null
          },
          {
            schemeId: 885,
            schemeName: "UTI FT  Inc -XXVI-III (1169 D)-G",
            schemeAUM: 0.7608462254511263,
            isManaged: false,
            risk: 0.69,
            return: 8.46,
            color: null
          },
          {
            schemeId: 886,
            schemeName: "UTI FT  Inc -XXV-XII (1198 D)-G",
            schemeAUM: 0.0611831448494391,
            isManaged: false,
            risk: 0.61,
            return: 8.67,
            color: null
          },
          {
            schemeId: 887,
            schemeName: "Reliance Fixed Horizon  -XXXII- 5-1332 D-G",
            schemeAUM: 0.1251954355546343,
            isManaged: false,
            risk: 0.67,
            return: 9.39,
            color: null
          },
          {
            schemeId: 888,
            schemeName: "DHFL Pramerica Fixed Duration -AA-Reg-G",
            schemeAUM: 0.7128991489854759,
            isManaged: false,
            risk: 2.99,
            return: 4.22,
            color: null
          },
          {
            schemeId: 889,
            schemeName: "HDFC FMP-XXXVII-1218 D-Dec 2016 (1)-Reg-G",
            schemeAUM: 0.7205621222870555,
            isManaged: false,
            risk: 0.7,
            return: 8.9,
            color: null
          },
          {
            schemeId: 890,
            schemeName: "HDFC FMP-XXXVII-1199 D-Jan 2017 (1)-Reg-G",
            schemeAUM: 0.31829135099133543,
            isManaged: false,
            risk: 0.73,
            return: 8.44,
            color: null
          },
          {
            schemeId: 891,
            schemeName: "DHFL Pramerica Fixed Duration -AB-Reg-G",
            schemeAUM: 0.3177772426659331,
            isManaged: false,
            risk: 1.52,
            return: 5.84,
            color: null
          },
          {
            schemeId: 892,
            schemeName: "HDFC FMP-XXXVII-1169 D-Feb 2017 (1)-Reg-G",
            schemeAUM: 0.9424362114535552,
            isManaged: false,
            risk: 0.65,
            return: 8.91,
            color: null
          },
          {
            schemeId: 893,
            schemeName: "Aditya Birla Sun Life FTP-OD-1145 D-Reg-G",
            schemeAUM: 0.9524112137947753,
            isManaged: false,
            risk: 0.6,
            return: 9.14,
            color: null
          },
          {
            schemeId: 894,
            schemeName: "Aditya Birla Sun Life FTP-OE-1153 D-Reg-G",
            schemeAUM: 0.5881967041755807,
            isManaged: false,
            risk: 0.62,
            return: 9.26,
            color: null
          },
          {
            schemeId: 895,
            schemeName: "Aditya Birla Sun Life FTP-OF-1151 D-Reg-G",
            schemeAUM: 0.5396462601552572,
            isManaged: false,
            risk: 1.87,
            return: 7.28,
            color: null
          },
          {
            schemeId: 896,
            schemeName: "DHFL Pramerica Fixed Duration -AC-Reg-G",
            schemeAUM: 0.05048216151435736,
            isManaged: false,
            risk: 2.68,
            return: 5.56,
            color: null
          },
          {
            schemeId: 897,
            schemeName: "HDFC FMP-XXXVII-1150 D-Feb 2017 (1)-Reg-G",
            schemeAUM: 0.6068217892075767,
            isManaged: false,
            risk: 0.66,
            return: 9.15,
            color: null
          },
          {
            schemeId: 898,
            schemeName: "HDFC FMP-XXXVII-1155 D-Feb 2017 (1)-Reg-G",
            schemeAUM: 0.2544710443207967,
            isManaged: false,
            risk: 0.66,
            return: 8.96,
            color: null
          },
          {
            schemeId: 899,
            schemeName: "HDFC FMP-XXXVII-1170 D-Feb 2017 (1)-Reg-G",
            schemeAUM: 0.8655475414875915,
            isManaged: false,
            risk: 0.73,
            return: 7.86,
            color: null
          },
          {
            schemeId: 900,
            schemeName: "HDFC FMP-XXXVII-1178 D-Feb 2017 (1)-Reg-G",
            schemeAUM: 0.7908505605389946,
            isManaged: false,
            risk: 0.7,
            return: 8.26,
            color: null
          },
          {
            schemeId: 901,
            schemeName: "ICICI Prudential FMP-80-1170 D I-Cum",
            schemeAUM: 0.6407432201778818,
            isManaged: false,
            risk: 0.69,
            return: 8.39,
            color: null
          },
          {
            schemeId: 902,
            schemeName: "ICICI Prudential FMP-80-1253 D J-Cum",
            schemeAUM: 0.017492224478644625,
            isManaged: false,
            risk: 0.66,
            return: 9.57,
            color: null
          },
          {
            schemeId: 903,
            schemeName: "IDFC Credit Risk -Reg-G",
            schemeAUM: 0.049514612563689386,
            isManaged: false,
            risk: 1,
            return: 8.51,
            color: null
          },
          {
            schemeId: 904,
            schemeName: "Kotak FMP 199-1147 D-G",
            schemeAUM: 0.9805024805620093,
            isManaged: false,
            risk: 0.62,
            return: 8.81,
            color: null
          },
          {
            schemeId: 905,
            schemeName: "Mahindra Low Duration Bachat Yojana-Reg-G",
            schemeAUM: 0.6079711225125772,
            isManaged: false,
            risk: 0.48,
            return: 8.08,
            color: null
          },
          {
            schemeId: 906,
            schemeName: "Reliance Fixed Horizon  -XXXII- 10-1151 D-G",
            schemeAUM: 0.8588071742473333,
            isManaged: false,
            risk: 6.83,
            return: -4.85,
            color: null
          },
          {
            schemeId: 907,
            schemeName: "SBI Debt -B-46-1155 D-Reg-G",
            schemeAUM: 0.30861044650384684,
            isManaged: false,
            risk: 0.48,
            return: 8.41,
            color: null
          },
          {
            schemeId: 908,
            schemeName: "Aditya Birla Sun Life FTP-OG-1146 D-Reg-G",
            schemeAUM: 0.6166839641602664,
            isManaged: false,
            risk: 0.64,
            return: 9.24,
            color: null
          },
          {
            schemeId: 909,
            schemeName: "Aditya Birla Sun Life FTP-OH-1120 D-Reg-G",
            schemeAUM: 0.7201703090748137,
            isManaged: false,
            risk: 0.69,
            return: 9.29,
            color: null
          },
          {
            schemeId: 910,
            schemeName: "Aditya Birla Sun Life FTP-OI-1120 D-Reg-G",
            schemeAUM: 0.2087869723056175,
            isManaged: false,
            risk: 0.65,
            return: 9.29,
            color: null
          },
          {
            schemeId: 911,
            schemeName: "Aditya Birla Sun Life FTP-OK-1135 D-Reg-G",
            schemeAUM: 0.6542172629061314,
            isManaged: false,
            risk: 0.69,
            return: 9.42,
            color: null
          },
          {
            schemeId: 912,
            schemeName: "DHFL Pramerica Fixed Duration -AE-Reg-G",
            schemeAUM: 0.660850671651269,
            isManaged: false,
            risk: 0.59,
            return: 9.11,
            color: null
          },
          {
            schemeId: 913,
            schemeName: "DHFL Pramerica Fixed Duration -AG-Reg-G",
            schemeAUM: 0.32518653450848656,
            isManaged: false,
            risk: 0.57,
            return: 9.07,
            color: null
          },
          {
            schemeId: 914,
            schemeName: "DSP FMP-204-37 M-Reg-G",
            schemeAUM: 0.6293750233238269,
            isManaged: false,
            risk: 0.72,
            return: 9.02,
            color: null
          },
          {
            schemeId: 915,
            schemeName: "DSP FMP-205-37 M-Reg-G",
            schemeAUM: 0.09042345221008197,
            isManaged: false,
            risk: 0.71,
            return: 8.92,
            color: null
          },
          {
            schemeId: 916,
            schemeName: "Franklin India FMP-1-A (1108 D)-G",
            schemeAUM: 0.12030430555635396,
            isManaged: false,
            risk: 0.71,
            return: 9.29,
            color: null
          },
          {
            schemeId: 917,
            schemeName: "HDFC FMP-XXXVIII-1213 D-Mar 2017 (1)-Reg-G",
            schemeAUM: 0.9853576373604902,
            isManaged: false,
            risk: 0.8,
            return: 7.42,
            color: null
          },
          {
            schemeId: 918,
            schemeName: "ICICI Prudential FMP-80-1150 D N-Cum",
            schemeAUM: 0.4612489438591105,
            isManaged: false,
            risk: 0.64,
            return: 8.45,
            color: null
          },
          {
            schemeId: 919,
            schemeName: "ICICI Prudential FMP-80-1227 D Q-Cum",
            schemeAUM: 0.9329314699877018,
            isManaged: false,
            risk: 0.64,
            return: 9.42,
            color: null
          },
          {
            schemeId: 920,
            schemeName: "ICICI Prudential FMP-80-1231 D P-Cum",
            schemeAUM: 0.3506421749535933,
            isManaged: false,
            risk: 0.65,
            return: 9.48,
            color: null
          },
          {
            schemeId: 921,
            schemeName: "ICICI Prudential FMP-80-1233 D O-Cum",
            schemeAUM: 0.49598214492973547,
            isManaged: false,
            risk: 0.62,
            return: 9.39,
            color: null
          },
          {
            schemeId: 922,
            schemeName: "ICICI Prudential FMP-80-1245 D L-Cum",
            schemeAUM: 0.8294784964011828,
            isManaged: false,
            risk: 0.61,
            return: 9.35,
            color: null
          },
          {
            schemeId: 923,
            schemeName: "IDFC FTP--129-1147 D-Reg-G",
            schemeAUM: 0.5060839854103367,
            isManaged: false,
            risk: 0.68,
            return: 8.92,
            color: null
          },
          {
            schemeId: 924,
            schemeName: "Invesco India FMP-29-B (1150 D)-G",
            schemeAUM: 0.5385509561899138,
            isManaged: false,
            risk: 0.72,
            return: 9.07,
            color: null
          },
          {
            schemeId: 925,
            schemeName: "Kotak FMP 200-1158 D-G",
            schemeAUM: 0.15718616565140753,
            isManaged: false,
            risk: 0.63,
            return: 8.65,
            color: null
          },
          {
            schemeId: 926,
            schemeName: "L&T FMP-XIV-C-1150 D-G",
            schemeAUM: 0.344823834321097,
            isManaged: false,
            risk: 0.87,
            return: 9.08,
            color: null
          },
          {
            schemeId: 927,
            schemeName: "Mirae Asset Dynamic Bond -Reg-G",
            schemeAUM: 0.9174367909547432,
            isManaged: false,
            risk: 2.68,
            return: 13.36,
            color: null
          },
          {
            schemeId: 928,
            schemeName: "Reliance Fixed Horizon  -XXXIII- 1-1222 D-G",
            schemeAUM: 0.32644842613304403,
            isManaged: false,
            risk: 0.68,
            return: 9.6,
            color: null
          },
          {
            schemeId: 929,
            schemeName: "Reliance Fixed Horizon  -XXXIII- 2-1314 D-G",
            schemeAUM: 0.5352682100059818,
            isManaged: false,
            risk: 4.35,
            return: 1.25,
            color: null
          },
          {
            schemeId: 930,
            schemeName: "Reliance Fixed Horizon  -XXXIII- 3-1215 D-G",
            schemeAUM: 0.720038459987933,
            isManaged: false,
            risk: 0.71,
            return: 9.46,
            color: null
          },
          {
            schemeId: 931,
            schemeName: "Reliance Fixed Horizon  -XXXIII- 4-1208 D-G",
            schemeAUM: 0.41788641906467605,
            isManaged: false,
            risk: 0.68,
            return: 9.54,
            color: null
          },
          {
            schemeId: 932,
            schemeName: "Reliance Fixed Horizon  -XXXIII- 6-1201 D-G",
            schemeAUM: 0.3070630562527583,
            isManaged: false,
            risk: 0.65,
            return: 9.32,
            color: null
          },
          {
            schemeId: 933,
            schemeName: "SBI Debt -B-49-1170 D-Reg-G",
            schemeAUM: 0.7857009085175153,
            isManaged: false,
            risk: 0.56,
            return: 8.82,
            color: null
          },
          {
            schemeId: 934,
            schemeName: "UTI FT  Inc -XXVI-V (1160 D)-G",
            schemeAUM: 0.7092525000513163,
            isManaged: false,
            risk: 0.79,
            return: 8.28,
            color: null
          },
          {
            schemeId: 935,
            schemeName: "UTI FT  Inc -XXVI-VI (1146 D)-G",
            schemeAUM: 0.4024431834488522,
            isManaged: false,
            risk: 0.69,
            return: 9.23,
            color: null
          },
          {
            schemeId: 936,
            schemeName: "Aditya Birla Sun Life FTP-OJ-1136 D-Reg-G",
            schemeAUM: 0.4505306043475219,
            isManaged: false,
            risk: 1.9,
            return: 7.1,
            color: null
          },
          {
            schemeId: 937,
            schemeName: "Aditya Birla Sun Life FTP-OL-1148 D-Reg-G",
            schemeAUM: 0.8104862995377355,
            isManaged: false,
            risk: 0.6,
            return: 9.01,
            color: null
          },
          {
            schemeId: 938,
            schemeName: "Aditya Birla Sun Life FTP-OM-1146 D-Reg-G",
            schemeAUM: 0.6805478418568991,
            isManaged: false,
            risk: 0.61,
            return: 9.13,
            color: null
          },
          {
            schemeId: 939,
            schemeName: "DHFL Pramerica Fixed Duration -AF-Reg-G",
            schemeAUM: 0.708025792623578,
            isManaged: false,
            risk: 5.59,
            return: 1.45,
            color: null
          },
          {
            schemeId: 940,
            schemeName: "DSP FMP-209-37 M-Reg-G",
            schemeAUM: 0.3379189139097356,
            isManaged: false,
            risk: 0.68,
            return: 8.92,
            color: null
          },
          {
            schemeId: 941,
            schemeName: "DSP FMP-210-36 M-Reg-G",
            schemeAUM: 0.9397647470849142,
            isManaged: false,
            risk: 0.67,
            return: 8.94,
            color: null
          },
          {
            schemeId: 942,
            schemeName: "DSP FMP-211-38 M-Reg-G",
            schemeAUM: 0.8870196663890297,
            isManaged: false,
            risk: 0.67,
            return: 8.95,
            color: null
          },
          {
            schemeId: 943,
            schemeName: "Edelweiss FMP-41-Reg-G",
            schemeAUM: 0.19379474320764034,
            isManaged: false,
            risk: 5.17,
            return: 1.4,
            color: null
          },
          {
            schemeId: 944,
            schemeName: "HDFC FMP-XXXVIII-1165 D-Apr 2017 (1)-Reg-G",
            schemeAUM: 0.13708316609103388,
            isManaged: false,
            risk: 0.74,
            return: 8.79,
            color: null
          },
          {
            schemeId: 945,
            schemeName: "HDFC FMP-XXXVIII-1166 D-May 2017 (1)-Reg-G",
            schemeAUM: 0.5525977164441813,
            isManaged: false,
            risk: 0.76,
            return: 8.15,
            color: null
          },
          {
            schemeId: 946,
            schemeName: "HDFC FMP-XXXVIII-1172 D-Apr 2017 (1)-Reg-G",
            schemeAUM: 0.8537481375669893,
            isManaged: false,
            risk: 0.76,
            return: 8.89,
            color: null
          },
          {
            schemeId: 947,
            schemeName: "HDFC FMP-XXXVIII-1188 D-Mar 2017 (1)-Reg-G",
            schemeAUM: 0.4987462946842973,
            isManaged: false,
            risk: 0.91,
            return: 7.32,
            color: null
          },
          {
            schemeId: 948,
            schemeName: "HSBC FT 128-Reg-G",
            schemeAUM: 0.5885737182370314,
            isManaged: false,
            risk: 0.68,
            return: 8.53,
            color: null
          },
          {
            schemeId: 949,
            schemeName: "ICICI Prudential FMP-80-1125 D S-Cum",
            schemeAUM: 0.7411334909184732,
            isManaged: false,
            risk: 0.68,
            return: 8.2,
            color: null
          },
          {
            schemeId: 950,
            schemeName: "ICICI Prudential FMP-80-1138 D R-Cum",
            schemeAUM: 0.1345717950706662,
            isManaged: false,
            risk: 0.72,
            return: 8.2,
            color: null
          },
          {
            schemeId: 951,
            schemeName: "ICICI Prudential FMP-80-1216 D U-Cum",
            schemeAUM: 0.369420300351198,
            isManaged: false,
            risk: 0.64,
            return: 9.43,
            color: null
          },
          {
            schemeId: 952,
            schemeName: "ICICI Prudential FMP-80-1225 D T-Cum",
            schemeAUM: 0.44790438984320846,
            isManaged: false,
            risk: 0.63,
            return: 9.39,
            color: null
          },
          {
            schemeId: 953,
            schemeName: "ICICI Prudential FMP-81-1101 D C-Cum",
            schemeAUM: 0.3928081135755692,
            isManaged: false,
            risk: 0.73,
            return: 8.09,
            color: null
          },
          {
            schemeId: 954,
            schemeName: "ICICI Prudential FMP-81-1190 D F-Cum",
            schemeAUM: 0.8966848792841147,
            isManaged: false,
            risk: 0.65,
            return: 9.28,
            color: null
          },
          {
            schemeId: 955,
            schemeName: "ICICI Prudential FMP-81-1195 D D-Cum",
            schemeAUM: 0.9567459178783588,
            isManaged: false,
            risk: 0.67,
            return: 9.31,
            color: null
          },
          {
            schemeId: 956,
            schemeName: "ICICI Prudential FMP-81-1205 D B-Cum",
            schemeAUM: 0.8548234457663431,
            isManaged: false,
            risk: 0.63,
            return: 9.23,
            color: null
          },
          {
            schemeId: 957,
            schemeName: "ICICI Prudential FMP-81-1211 D A-Cum",
            schemeAUM: 0.04367651282254381,
            isManaged: false,
            risk: 0.64,
            return: 9.33,
            color: null
          },
          {
            schemeId: 958,
            schemeName: "IDFC FTP--131-1139 D-Reg-G",
            schemeAUM: 0.1699012492410561,
            isManaged: false,
            risk: 0.67,
            return: 9.1,
            color: null
          },
          {
            schemeId: 959,
            schemeName: "Kotak FMP 202-1144 D-G",
            schemeAUM: 0.3989516824683865,
            isManaged: false,
            risk: 0.64,
            return: 8.85,
            color: null
          },
          {
            schemeId: 960,
            schemeName: "Kotak FMP 203-1100 D-G",
            schemeAUM: 0.6190039902725915,
            isManaged: false,
            risk: 0.64,
            return: 8.76,
            color: null
          },
          {
            schemeId: 961,
            schemeName: "Reliance Fixed Horizon  -XXXIII- 10-1173 D-G",
            schemeAUM: 0.6436187459966589,
            isManaged: false,
            risk: 0.7,
            return: 9.51,
            color: null
          },
          {
            schemeId: 962,
            schemeName: "Reliance Fixed Horizon  -XXXIII- 5-1295 D-G",
            schemeAUM: 0.1542694707405894,
            isManaged: false,
            risk: 4.07,
            return: 1.9,
            color: null
          },
          {
            schemeId: 963,
            schemeName: "Reliance Fixed Horizon  -XXXIII- 7-1197 D-G",
            schemeAUM: 0.2765724386394257,
            isManaged: false,
            risk: 0.65,
            return: 9.35,
            color: null
          },
          {
            schemeId: 964,
            schemeName: "Reliance Fixed Horizon  -XXXIII- 8-1183 D-G",
            schemeAUM: 0.5557615682284096,
            isManaged: false,
            risk: 0.7,
            return: 9.48,
            color: null
          },
          {
            schemeId: 965,
            schemeName: "Reliance Fixed Horizon  -XXXIII- 9-1265 D-G",
            schemeAUM: 0.7032406910091196,
            isManaged: false,
            risk: 4.46,
            return: 0.71,
            color: null
          },
          {
            schemeId: 966,
            schemeName: "UTI FT  Inc -XXVI-IX (1113 D)-G",
            schemeAUM: 0.2143653690023668,
            isManaged: false,
            risk: 0.73,
            return: 8.28,
            color: null
          },
          {
            schemeId: 967,
            schemeName: "UTI FT  Inc -XXVI-VII (1140 D)-G",
            schemeAUM: 0.6062038065126647,
            isManaged: false,
            risk: 0.78,
            return: 8.43,
            color: null
          },
          {
            schemeId: 968,
            schemeName: "UTI FT  Inc -XXVI-VIII (1154 D)-G",
            schemeAUM: 0.354953046449616,
            isManaged: false,
            risk: 0.71,
            return: 9.24,
            color: null
          },
          {
            schemeId: 969,
            schemeName: "UTI FT  Inc -XXVI-X (1107 D)-G",
            schemeAUM: 0.7097095792450561,
            isManaged: false,
            risk: 0.73,
            return: 8.26,
            color: null
          },
          {
            schemeId: 970,
            schemeName: "UTI FT  Inc -XXVI-XI (1105 D)-G",
            schemeAUM: 0.7718277177323412,
            isManaged: false,
            risk: 0.72,
            return: 8.26,
            color: null
          },
          {
            schemeId: 971,
            schemeName: "UTI FT  Inc -XXVI-XII (1096 D)-G",
            schemeAUM: 0.6366683034094591,
            isManaged: false,
            risk: 0.7,
            return: 8.51,
            color: null
          },
          {
            schemeId: 972,
            schemeName: "UTI FT  Inc -XXVI-XIII (1124 D)-G",
            schemeAUM: 0.05194108660726271,
            isManaged: false,
            risk: 0.77,
            return: 8.42,
            color: null
          },
          {
            schemeId: 973,
            schemeName: "UTI FT  Inc -XXVI-XIV (1105 D)-G",
            schemeAUM: 0.3009606463513521,
            isManaged: false,
            risk: 0.72,
            return: 8.47,
            color: null
          },
          {
            schemeId: 974,
            schemeName: "UTI FT  Inc -XXVI-XV (1097 D)-G",
            schemeAUM: 0.08939687472108582,
            isManaged: false,
            risk: 0.72,
            return: 8.45,
            color: null
          },
          {
            schemeId: 975,
            schemeName: "Franklin India FMP-1-B (1104 D)-G",
            schemeAUM: 0.1606537638176666,
            isManaged: false,
            risk: 0.72,
            return: 9.29,
            color: null
          },
          {
            schemeId: 976,
            schemeName: "HDFC FMP-XXXVIII-1136 D-Jun 2017 (1)-Reg-G",
            schemeAUM: 0.7869929032066116,
            isManaged: false,
            risk: 0.87,
            return: 7.73,
            color: null
          },
          {
            schemeId: 977,
            schemeName: "HSBC FT 129-Reg-G",
            schemeAUM: 0.4395422417971999,
            isManaged: false,
            risk: 0.8,
            return: 8.56,
            color: null
          },
          {
            schemeId: 978,
            schemeName: "ICICI Prudential FMP-81-1185 D G-Cum",
            schemeAUM: 0.12783296092765606,
            isManaged: false,
            risk: 0.66,
            return: 9.33,
            color: null
          },
          {
            schemeId: 979,
            schemeName: "ICICI Prudential FMP-81-1101 D E-Cum",
            schemeAUM: 0.9475096029703653,
            isManaged: false,
            risk: 0.75,
            return: 8.27,
            color: null
          },
          {
            schemeId: 980,
            schemeName: "ICICI Prudential FMP-81-1116 D I-Cum",
            schemeAUM: 0.5409013444127586,
            isManaged: false,
            risk: 0.69,
            return: 8.22,
            color: null
          },
          {
            schemeId: 981,
            schemeName: "ICICI Prudential FMP-81-1154 D J-Cum",
            schemeAUM: 0.30237462633374257,
            isManaged: false,
            risk: 0.66,
            return: 9.04,
            color: null
          },
          {
            schemeId: 982,
            schemeName: "ICICI Prudential FMP-81-1178 D H-Cum",
            schemeAUM: 0.6468162995393918,
            isManaged: false,
            risk: 0.65,
            return: 9.38,
            color: null
          },
          {
            schemeId: 983,
            schemeName: "Kotak FMP 204-1141 D-G",
            schemeAUM: 0.5583189009051082,
            isManaged: false,
            risk: 0.69,
            return: 9.28,
            color: null
          },
          {
            schemeId: 984,
            schemeName: "Reliance Fixed Horizon  -XXXIV- 1-1238 D-G",
            schemeAUM: 0.14160311930791303,
            isManaged: false,
            risk: 4.3,
            return: 1.38,
            color: null
          },
          {
            schemeId: 985,
            schemeName: "Reliance Fixed Horizon  -XXXIV- 2-1145 D-G",
            schemeAUM: 0.6252405692984524,
            isManaged: false,
            risk: 0.71,
            return: 9.4,
            color: null
          },
          {
            schemeId: 986,
            schemeName: "Reliance Fixed Horizon  -XXXIV- 3-1139 D-G",
            schemeAUM: 0.3139058146984841,
            isManaged: false,
            risk: 0.7,
            return: 9.42,
            color: null
          },
          {
            schemeId: 987,
            schemeName: "Reliance Fixed Horizon  -XXXIV- 4-1132 D-G",
            schemeAUM: 0.15537951494739954,
            isManaged: false,
            risk: 0.71,
            return: 9.32,
            color: null
          },
          {
            schemeId: 988,
            schemeName: "Reliance Fixed Horizon  -XXXIV- 7-1105 D-G",
            schemeAUM: 0.10968141795999786,
            isManaged: false,
            risk: 0.7,
            return: 9.09,
            color: null
          },
          {
            schemeId: 989,
            schemeName: "Reliance Fixed Horizon  -XXXIV- 8-1191 D-G",
            schemeAUM: 0.41374675288116824,
            isManaged: false,
            risk: 4.44,
            return: 0.96,
            color: null
          },
          {
            schemeId: 990,
            schemeName: "UTI FT  Inc -XXVII-III (1096 D)-G",
            schemeAUM: 0.5751899363254249,
            isManaged: false,
            risk: 0.79,
            return: 8.63,
            color: null
          },
          {
            schemeId: 991,
            schemeName: "DHFL Pramerica Fixed Duration -AH-Reg-G",
            schemeAUM: 0.9373833039659021,
            isManaged: false,
            risk: 0.67,
            return: 8.97,
            color: null
          },
          {
            schemeId: 992,
            schemeName: "ICICI Prudential FMP-81-1163 D Q-Cum",
            schemeAUM: 0.3217685439607143,
            isManaged: false,
            risk: 0.71,
            return: 9.57,
            color: null
          },
          {
            schemeId: 993,
            schemeName: "UTI FT  Inc -XXVII-V (1097 D)-G",
            schemeAUM: 0.8704495893082398,
            isManaged: false,
            risk: 0.73,
            return: 8.58,
            color: null
          },
          {
            schemeId: 994,
            schemeName: "SBI Debt -C-2-1100 D-Reg-G",
            schemeAUM: 0.610411413379657,
            isManaged: false,
            risk: 0.63,
            return: 8.82,
            color: null
          },
          {
            schemeId: 995,
            schemeName: "ICICI Prudential FMP-81-1150 D K-Cum",
            schemeAUM: 0.4630120043037911,
            isManaged: false,
            risk: 0.66,
            return: 9.3,
            color: null
          },
          {
            schemeId: 996,
            schemeName: "Reliance Fixed Horizon  -XXXIV- 9-1130 D-G",
            schemeAUM: 0.39996916643585334,
            isManaged: false,
            risk: 0.73,
            return: 9.46,
            color: null
          },
          {
            schemeId: 997,
            schemeName: "Axis Corp Debt -Reg-G",
            schemeAUM: 0.30249659604299683,
            isManaged: false,
            risk: 3.34,
            return: 6.49,
            color: null
          },
          {
            schemeId: 998,
            schemeName: "UTI FT  Inc -XXVII-IV (1113 D)-G",
            schemeAUM: 0.23865736557621675,
            isManaged: false,
            risk: 0.73,
            return: 8.56,
            color: null
          },
          {
            schemeId: 999,
            schemeName: "ICICI Prudential FMP-81-1162 D P-Cum",
            schemeAUM: 0.11882048007817358,
            isManaged: false,
            risk: 0.71,
            return: 9.58,
            color: null
          },
          {
            schemeId: 1000,
            schemeName: "UTI FT  Inc -XXVII-VI (1113 D)-G",
            schemeAUM: 0.19420672336897415,
            isManaged: false,
            risk: 3.9,
            return: -0.4,
            color: null
          },
          {
            schemeId: 1001,
            schemeName: "UTI FT  Inc -XXVII-I (1113 D)-G",
            schemeAUM: 0.8447976073225401,
            isManaged: false,
            risk: 0.77,
            return: 8.7,
            color: null
          },
          {
            schemeId: 1002,
            schemeName: "SBI Debt -C-1-1100 D-Reg-G",
            schemeAUM: 0.47930199804399454,
            isManaged: false,
            risk: 3,
            return: 1.67,
            color: null
          },
          {
            schemeId: 1003,
            schemeName: "HDFC FMP-XXXVIII-1430 D-Jul 2017 (1)-Reg-G",
            schemeAUM: 0.09811851191844911,
            isManaged: false,
            risk: 1,
            return: 10.39,
            color: null
          },
          {
            schemeId: 1004,
            schemeName: "ICICI Prudential FMP-81-1100 D O-Cum",
            schemeAUM: 0.3356817021318641,
            isManaged: false,
            risk: 0.98,
            return: 7.02,
            color: null
          },
          {
            schemeId: 1005,
            schemeName: "Reliance Fixed Horizon  -XXXIV- 10-1174 D-G",
            schemeAUM: 0.4800920738307546,
            isManaged: false,
            risk: 4.39,
            return: 0.99,
            color: null
          },
          {
            schemeId: 1006,
            schemeName: "Aditya Birla Sun Life FTP-OT-1117 D-Reg-G",
            schemeAUM: 0.8537098120518922,
            isManaged: false,
            risk: 0.74,
            return: 9.19,
            color: null
          },
          {
            schemeId: 1007,
            schemeName: "ICICI Prudential FMP-81-1100 D R-Cum",
            schemeAUM: 0.7597206095646616,
            isManaged: false,
            risk: 0.76,
            return: 8.26,
            color: null
          },
          {
            schemeId: 1008,
            schemeName: "Reliance Fixed Horizon  -XXXIV- 6-1208 D-G",
            schemeAUM: 0.07535875389850899,
            isManaged: false,
            risk: 4.22,
            return: 1.46,
            color: null
          },
          {
            schemeId: 1009,
            schemeName: "UTI FT  Inc -XXVII-II (1161 D)-G",
            schemeAUM: 0.009219029649101929,
            isManaged: false,
            risk: 0.81,
            return: 7.47,
            color: null
          },
          {
            schemeId: 1010,
            schemeName: "UTI FT  Inc -XXVII-VII (1104 D)-G",
            schemeAUM: 0.33193448462267616,
            isManaged: false,
            risk: 0.76,
            return: 8.53,
            color: null
          },
          {
            schemeId: 1011,
            schemeName: "ICICI Prudential FMP-81-1100 D W-Cum",
            schemeAUM: 0.605373716149955,
            isManaged: false,
            risk: 0.72,
            return: 9.09,
            color: null
          },
          {
            schemeId: 1012,
            schemeName: "Kotak FMP 211-1105 D-G",
            schemeAUM: 0.09034250356607387,
            isManaged: false,
            risk: 0.73,
            return: 9.53,
            color: null
          },
          {
            schemeId: 1013,
            schemeName: "UTI FT  Inc -XXVII-X (1118 D)-G",
            schemeAUM: 0.3484844960902038,
            isManaged: false,
            risk: 1.05,
            return: 7.62,
            color: null
          },
          {
            schemeId: 1014,
            schemeName: "Reliance Fixed Horizon  -XXXV- 6-1263 D-G",
            schemeAUM: 0.09208349581609587,
            isManaged: false,
            risk: 0.85,
            return: 10.36,
            color: null
          },
          {
            schemeId: 1015,
            schemeName: "UTI FT  Inc -XXVII-IX (1160 D)-G",
            schemeAUM: 0.30591143788713215,
            isManaged: false,
            risk: 4.12,
            return: -0.94,
            color: null
          },
          {
            schemeId: 1016,
            schemeName: "Kotak FMP 210-1127 D-G",
            schemeAUM: 0.5939544740772913,
            isManaged: false,
            risk: 0.71,
            return: 9.43,
            color: null
          },
          {
            schemeId: 1017,
            schemeName: "UTI FT  Inc -XXVII-VIII (1117 D)-G",
            schemeAUM: 0.8303819907865899,
            isManaged: false,
            risk: 0.71,
            return: 8.58,
            color: null
          },
          {
            schemeId: 1018,
            schemeName: "Kotak FMP 212-1260 D-G",
            schemeAUM: 0.26969898193116326,
            isManaged: false,
            risk: 0.86,
            return: 9.93,
            color: null
          },
          {
            schemeId: 1019,
            schemeName: "Reliance Fixed Horizon  -XXXV- 7-1269 D-G",
            schemeAUM: 0.9229691614726234,
            isManaged: false,
            risk: 0.89,
            return: 10.24,
            color: null
          },
          {
            schemeId: 1020,
            schemeName: "Reliance Fixed Horizon  -XXXV- 5-1130 D-G",
            schemeAUM: 0.07681712270885299,
            isManaged: false,
            risk: 5.43,
            return: 0.75,
            color: null
          },
          {
            schemeId: 1021,
            schemeName: "Reliance Fixed Horizon  -XXXV- 9-1343 D-G",
            schemeAUM: 0.2718493614709774,
            isManaged: false,
            risk: 4.84,
            return: 0.75,
            color: null
          },
          {
            schemeId: 1022,
            schemeName: "Aditya Birla Sun Life FTP-OX-1234 D-Reg-G",
            schemeAUM: 0.6930509690832931,
            isManaged: false,
            risk: 0.95,
            return: 10.15,
            color: null
          },
          {
            schemeId: 1023,
            schemeName: "ICICI Prudential FMP-82-1236 D A-Cum",
            schemeAUM: 0.990580682371579,
            isManaged: false,
            risk: 0.87,
            return: 10.24,
            color: null
          },
          {
            schemeId: 1024,
            schemeName: "Reliance Fixed Horizon  -XXXV- 11-1242 D-G",
            schemeAUM: 0.031883629426112226,
            isManaged: false,
            risk: 0.87,
            return: 10.39,
            color: null
          },
          {
            schemeId: 1025,
            schemeName: "UTI FT  Inc -XXVIII-I (1230 D)-G",
            schemeAUM: 0.5746020556658815,
            isManaged: false,
            risk: 3.75,
            return: -0.59,
            color: null
          },
          {
            schemeId: 1026,
            schemeName: "Aditya Birla Sun Life FTP-OW-1245 D-Reg-G",
            schemeAUM: 0.30160925817942763,
            isManaged: false,
            risk: 6.37,
            return: -12.35,
            color: null
          },
          {
            schemeId: 1027,
            schemeName: "Franklin India FMP-2-A (1224 D)-G",
            schemeAUM: 0.04461894429385738,
            isManaged: false,
            risk: 1.05,
            return: 9.83,
            color: null
          },
          {
            schemeId: 1028,
            schemeName: "Franklin India FMP-2-B (1224 D)-G",
            schemeAUM: 0.42070450536459303,
            isManaged: false,
            risk: 1.06,
            return: 9.94,
            color: null
          },
          {
            schemeId: 1029,
            schemeName: "UTI FT  Inc -XXVIII-II (1210 D)-G",
            schemeAUM: 0.8567514100783522,
            isManaged: false,
            risk: 3.51,
            return: -0.16,
            color: null
          },
          {
            schemeId: 1030,
            schemeName: "Kotak FMP 213-1230 D-G",
            schemeAUM: 0.0015922414882256763,
            isManaged: false,
            risk: 0.85,
            return: 9.96,
            color: null
          },
          {
            schemeId: 1031,
            schemeName: "L&T FMP-XVI-A-1223 D-G",
            schemeAUM: 0.9573558783913385,
            isManaged: false,
            risk: 1.04,
            return: 10.02,
            color: null
          },
          {
            schemeId: 1032,
            schemeName: "ICICI Prudential FMP-82-1225 D B-Cum",
            schemeAUM: 0.4646660702005556,
            isManaged: false,
            risk: 0.86,
            return: 10.28,
            color: null
          },
          {
            schemeId: 1033,
            schemeName: "ICICI Prudential FMP-82-1217 D C-Cum",
            schemeAUM: 0.0790210477351081,
            isManaged: false,
            risk: 0.84,
            return: 10.3,
            color: null
          },
          {
            schemeId: 1034,
            schemeName: "Invesco India FMP-30-A (1223 D)-G",
            schemeAUM: 0.6138542890173446,
            isManaged: false,
            risk: 1.06,
            return: 10.05,
            color: null
          },
          {
            schemeId: 1035,
            schemeName: "Reliance Fixed Horizon  -XXXV- 13-1221 D-G",
            schemeAUM: 0.9329703337431616,
            isManaged: false,
            risk: 0.88,
            return: 10.24,
            color: null
          },
          {
            schemeId: 1036,
            schemeName: "HSBC FT 130-Reg-G",
            schemeAUM: 0.06311814666345716,
            isManaged: false,
            risk: 0.96,
            return: 9.6,
            color: null
          },
          {
            schemeId: 1037,
            schemeName: "DSP FMP-217-40 M-Reg-G",
            schemeAUM: 0.3208095640280402,
            isManaged: false,
            risk: 1.02,
            return: 9.85,
            color: null
          },
          {
            schemeId: 1038,
            schemeName: "UTI FT  Inc -XXVIII-IV (1204 D)-G",
            schemeAUM: 0.922811112463775,
            isManaged: false,
            risk: 1.02,
            return: 10.19,
            color: null
          },
          {
            schemeId: 1039,
            schemeName: "UTI FT  Inc -XXVIII-III (1203 D)-G",
            schemeAUM: 0.3032923879673377,
            isManaged: false,
            risk: 2.5,
            return: 1.97,
            color: null
          },
          {
            schemeId: 1040,
            schemeName: "Aditya Birla Sun Life FTP-OY-1218 D-Reg-G",
            schemeAUM: 0.5966834096937395,
            isManaged: false,
            risk: 1.09,
            return: 10.2,
            color: null
          },
          {
            schemeId: 1041,
            schemeName: "SBI Debt -C-7-1190 D-Reg-G",
            schemeAUM: 0.8761272678041607,
            isManaged: false,
            risk: 0.89,
            return: 9.51,
            color: null
          },
          {
            schemeId: 1042,
            schemeName: "Aditya Birla Sun Life FTP-OZ-1187 D-Reg-G",
            schemeAUM: 0.4512217096246789,
            isManaged: false,
            risk: 1.02,
            return: 10.08,
            color: null
          },
          {
            schemeId: 1043,
            schemeName: "Franklin India FMP-2-C (1205 D)-G",
            schemeAUM: 0.15452429105797383,
            isManaged: false,
            risk: 1.04,
            return: 10.06,
            color: null
          },
          {
            schemeId: 1044,
            schemeName: "Reliance Fixed Horizon  -XXXV- 12-1227 D-G",
            schemeAUM: 0.885561312886552,
            isManaged: false,
            risk: 0.9,
            return: 10.24,
            color: null
          },
          {
            schemeId: 1045,
            schemeName: "ICICI Prudential FMP-82-1219 D D-Cum",
            schemeAUM: 0.7338892812159254,
            isManaged: false,
            risk: 0.87,
            return: 10.28,
            color: null
          },
          {
            schemeId: 1046,
            schemeName: "UTI FT  Inc -XXVIII-VI (1190 D)-G",
            schemeAUM: 0.8510134818646269,
            isManaged: false,
            risk: 0.96,
            return: 10.23,
            color: null
          },
          {
            schemeId: 1047,
            schemeName: "Kotak FMP 214-1240 D-G",
            schemeAUM: 0.904838981862851,
            isManaged: false,
            risk: 0.86,
            return: 9.99,
            color: null
          },
          {
            schemeId: 1048,
            schemeName: "UTI FT  Inc -XXVIII-V (1190 D)-G",
            schemeAUM: 0.6739054410619201,
            isManaged: false,
            risk: 3.36,
            return: -0.35,
            color: null
          },
          {
            schemeId: 1049,
            schemeName: "Sundaram FTP-IC-1206 D-Reg-G",
            schemeAUM: 0.7479726021948812,
            isManaged: false,
            risk: 0.9,
            return: 10.26,
            color: null
          },
          {
            schemeId: 1050,
            schemeName: "Reliance Fixed Horizon  -XXXV- 14-1214 D-G",
            schemeAUM: 0.10067773341186403,
            isManaged: false,
            risk: 0.92,
            return: 10.2,
            color: null
          },
          {
            schemeId: 1051,
            schemeName: "Aditya Birla Sun Life FTP-PA-1177 D-Reg-G",
            schemeAUM: 0.5554495046608774,
            isManaged: false,
            risk: 0.91,
            return: 10.09,
            color: null
          },
          {
            schemeId: 1052,
            schemeName: "Reliance Fixed Horizon  -XXXV- 15-1207 D-G",
            schemeAUM: 0.02077657852739434,
            isManaged: false,
            risk: 0.93,
            return: 10.21,
            color: null
          },
          {
            schemeId: 1053,
            schemeName: "ICICI Prudential FMP-82-1223 D E-Cum",
            schemeAUM: 0.7485474593720955,
            isManaged: false,
            risk: 0.85,
            return: 10.33,
            color: null
          },
          {
            schemeId: 1054,
            schemeName: "DSP FMP-218-40 M-Reg-G",
            schemeAUM: 0.18602878853308757,
            isManaged: false,
            risk: 0.98,
            return: 9.71,
            color: null
          },
          {
            schemeId: 1055,
            schemeName: "Reliance Fixed Horizon  -XXXV- 16-1330 D-G",
            schemeAUM: 0.2564779303931668,
            isManaged: false,
            risk: 4.86,
            return: 0.48,
            color: null
          },
          {
            schemeId: 1056,
            schemeName: "SBI Debt -C-8-1175 D-Reg-G",
            schemeAUM: 0.586152788355665,
            isManaged: false,
            risk: 0.91,
            return: 9.75,
            color: null
          },
          {
            schemeId: 1057,
            schemeName: "ICICI Prudential FMP-82-1223 D G-Cum",
            schemeAUM: 0.30081136275658027,
            isManaged: false,
            risk: 0.89,
            return: 10.34,
            color: null
          },
          {
            schemeId: 1058,
            schemeName: "Kotak FMP 215-1240 D-G",
            schemeAUM: 0.6512692560029028,
            isManaged: false,
            risk: 0.87,
            return: 10.19,
            color: null
          },
          {
            schemeId: 1059,
            schemeName: "DSP FMP-219-40 M-Reg-G",
            schemeAUM: 0.3314666447166079,
            isManaged: false,
            risk: 1,
            return: 9.74,
            color: null
          },
          {
            schemeId: 1060,
            schemeName: "ICICI Prudential FMP-82-1187 D F-Cum",
            schemeAUM: 0.0002380546294151742,
            isManaged: false,
            risk: 1.15,
            return: 6.7,
            color: null
          },
          {
            schemeId: 1061,
            schemeName: "Aditya Birla Sun Life FTP-PB-1190 D-Reg-G",
            schemeAUM: 0.6471242837081026,
            isManaged: false,
            risk: 0.93,
            return: 10.05,
            color: null
          },
          {
            schemeId: 1062,
            schemeName: "UTI FT  Inc -XXVIII-VIII (1171 D)-G",
            schemeAUM: 0.5211266431991441,
            isManaged: false,
            risk: 0.94,
            return: 10.1,
            color: null
          },
          {
            schemeId: 1063,
            schemeName: "Aditya Birla Sun Life FTP-PC-1169 D-Reg-G",
            schemeAUM: 0.6972857202638405,
            isManaged: false,
            risk: 1.02,
            return: 10.14,
            color: null
          },
          {
            schemeId: 1064,
            schemeName: "ICICI Prudential FMP-82-1185 D I-Cum",
            schemeAUM: 0.9259688681441889,
            isManaged: false,
            risk: 0.91,
            return: 10.31,
            color: null
          },
          {
            schemeId: 1065,
            schemeName: "UTI FT  Inc -XXVIII-VII (1169 D)-G",
            schemeAUM: 0.15452247486244342,
            isManaged: false,
            risk: 3.69,
            return: -1.33,
            color: null
          },
          {
            schemeId: 1066,
            schemeName: "ICICI Prudential FMP-82-1215 D H-Cum",
            schemeAUM: 0.6353463419453138,
            isManaged: false,
            risk: 0.91,
            return: 10.39,
            color: null
          },
          {
            schemeId: 1067,
            schemeName: "Invesco India FMP-30-C (1181 D)-G",
            schemeAUM: 0.07035012131919194,
            isManaged: false,
            risk: 1.1,
            return: 10.19,
            color: null
          },
          {
            schemeId: 1068,
            schemeName: "Aditya Birla Sun Life FTP-PD-1177 D-Reg-G",
            schemeAUM: 0.6893671755069566,
            isManaged: false,
            risk: 1.02,
            return: 10.15,
            color: null
          },
          {
            schemeId: 1069,
            schemeName: "ICICI Prudential FMP-82-1203 D K-Cum",
            schemeAUM: 0.6604642921234369,
            isManaged: false,
            risk: 0.89,
            return: 10.38,
            color: null
          },
          {
            schemeId: 1070,
            schemeName: "DSP FMP-220-40 M-Reg-G",
            schemeAUM: 0.8715659111923273,
            isManaged: false,
            risk: 1.13,
            return: 10.19,
            color: null
          },
          {
            schemeId: 1071,
            schemeName: "ICICI Prudential FMP-82-1199 D L-Cum",
            schemeAUM: 0.7387631885165946,
            isManaged: false,
            risk: 0.9,
            return: 10.31,
            color: null
          },
          {
            schemeId: 1072,
            schemeName: "Sundaram FTP-IE-1200 D-Reg-G",
            schemeAUM: 0.09784072407140165,
            isManaged: false,
            risk: 1.06,
            return: 6.37,
            color: null
          },
          {
            schemeId: 1073,
            schemeName: "Reliance Fixed Horizon  -XXXVI- 1-1179 D-G",
            schemeAUM: 0.9415305057117802,
            isManaged: false,
            risk: 0.94,
            return: 10.13,
            color: null
          },
          {
            schemeId: 1074,
            schemeName: "SBI Debt -C-9-1150 D-Reg-G",
            schemeAUM: 0.8486888638143029,
            isManaged: false,
            risk: 0.94,
            return: 9.82,
            color: null
          },
          {
            schemeId: 1075,
            schemeName: "Kotak FMP 216-1240 D-G",
            schemeAUM: 0.021739981070570735,
            isManaged: false,
            risk: 0.95,
            return: 10.4,
            color: null
          },
          {
            schemeId: 1076,
            schemeName: "DSP FMP-221-40 M-Reg-G",
            schemeAUM: 0.5395694183866551,
            isManaged: false,
            risk: 1.08,
            return: 9.81,
            color: null
          },
          {
            schemeId: 1077,
            schemeName: "Aditya Birla Sun Life FTP-PF-1148 D-Reg-G",
            schemeAUM: 0.24063094805798646,
            isManaged: false,
            risk: 1.07,
            return: 10.19,
            color: null
          },
          {
            schemeId: 1078,
            schemeName: "UTI FT  Inc -XXVIII-IX (1168 D)-G",
            schemeAUM: 0.45785328864668595,
            isManaged: false,
            risk: 1.02,
            return: 10.16,
            color: null
          },
          {
            schemeId: 1079,
            schemeName: "HDFC FMP-XXXIX-1158 D-Feb 2018 (1)-Reg-G",
            schemeAUM: 0.7137979111119837,
            isManaged: false,
            risk: 0.97,
            return: 10.17,
            color: null
          },
          {
            schemeId: 1080,
            schemeName: "ICICI Prudential FMP-82-1185 D M-Cum",
            schemeAUM: 0.6642683838772925,
            isManaged: false,
            risk: 0.97,
            return: 10.38,
            color: null
          },
          {
            schemeId: 1081,
            schemeName: "Franklin India FMP-3-A (1157 D)-G",
            schemeAUM: 0.03599883127252057,
            isManaged: false,
            risk: 1.1,
            return: 9.9,
            color: null
          },
          {
            schemeId: 1082,
            schemeName: "Reliance Fixed Horizon  -XXXVI- 3-1173 D-G",
            schemeAUM: 0.07126887935142867,
            isManaged: false,
            risk: 0.94,
            return: 9.83,
            color: null
          },
          {
            schemeId: 1083,
            schemeName: "Kotak FMP 217-1239 D-G",
            schemeAUM: 0.09724378768692632,
            isManaged: false,
            risk: 0.93,
            return: 10.41,
            color: null
          },
          {
            schemeId: 1084,
            schemeName: "SBI Debt -C-10-1150 D-Reg-G",
            schemeAUM: 0.3036207293048854,
            isManaged: false,
            risk: 0.96,
            return: 9.88,
            color: null
          },
          {
            schemeId: 1085,
            schemeName: "Aditya Birla Sun Life FTP-PE-1159 D-Reg-G",
            schemeAUM: 0.6354359350901422,
            isManaged: false,
            risk: 1.06,
            return: 10.08,
            color: null
          },
          {
            schemeId: 1086,
            schemeName: "ICICI Prudential FMP-82-1157 D J-Cum",
            schemeAUM: 0.8319691698605047,
            isManaged: false,
            risk: 1.09,
            return: 8.66,
            color: null
          },
          {
            schemeId: 1087,
            schemeName: "Reliance Fixed Horizon  -XXXVI- 6-1160 D-G",
            schemeAUM: 0.7737073526979534,
            isManaged: false,
            risk: 1.01,
            return: 9.85,
            color: null
          },
          {
            schemeId: 1088,
            schemeName: "IDFC FTP--140-1145 D-Reg-G",
            schemeAUM: 0.10318541922620916,
            isManaged: false,
            risk: 1.01,
            return: 9.98,
            color: null
          },
          {
            schemeId: 1089,
            schemeName: "Aditya Birla Sun Life FTP-PG-1148 D-Reg-G",
            schemeAUM: 0.19266938285973767,
            isManaged: false,
            risk: 1.09,
            return: 10.18,
            color: null
          },
          {
            schemeId: 1090,
            schemeName: "UTI FT  Inc -XXVIII-XI (1161 D)-G",
            schemeAUM: 0.4771126886416892,
            isManaged: false,
            risk: 0.94,
            return: 10.4,
            color: null
          },
          {
            schemeId: 1091,
            schemeName: "Reliance Fixed Horizon  -XXXVI- 2-1386 D-G",
            schemeAUM: 0.2889823925437216,
            isManaged: false,
            risk: 4.8,
            return: -0.15,
            color: null
          },
          {
            schemeId: 1092,
            schemeName: "HDFC FMP-XXXIX-1150 D-Mar 2018 (1)-Reg-G",
            schemeAUM: 0.7847856260948636,
            isManaged: false,
            risk: 0.97,
            return: 10,
            color: null
          },
          {
            schemeId: 1093,
            schemeName: "DHFL Pramerica Fixed Duration -AP-Reg-G",
            schemeAUM: 0.7295092623029065,
            isManaged: false,
            risk: 1.04,
            return: 9.7,
            color: null
          },
          {
            schemeId: 1094,
            schemeName: "ICICI Prudential FMP-82-1185 D N-Cum",
            schemeAUM: 0.5280470797015746,
            isManaged: false,
            risk: 0.94,
            return: 10.3,
            color: null
          },
          {
            schemeId: 1095,
            schemeName: "Franklin India FMP-3-B (1139 D)-G",
            schemeAUM: 0.674753733597288,
            isManaged: false,
            risk: 1.09,
            return: 9.83,
            color: null
          },
          {
            schemeId: 1096,
            schemeName: "DHFL Pramerica Fixed Duration -AR-Reg-G",
            schemeAUM: 0.9177522367743098,
            isManaged: false,
            risk: 3.93,
            return: -0.81,
            color: null
          },
          {
            schemeId: 1097,
            schemeName: "HDFC FMP-XXXIX-1208 D-Mar 2018 (1)-Reg-G",
            schemeAUM: 0.5590749724411535,
            isManaged: false,
            risk: 1.09,
            return: 6.57,
            color: null
          },
          {
            schemeId: 1098,
            schemeName: "HSBC FT 132-Reg-G",
            schemeAUM: 0.30555894032187725,
            isManaged: false,
            risk: 1.05,
            return: 8.16,
            color: null
          },
          {
            schemeId: 1099,
            schemeName: "DHFL Pramerica Fixed Duration -AQ-Reg-G",
            schemeAUM: 0.2798330218171705,
            isManaged: false,
            risk: 0.96,
            return: 9.4,
            color: null
          },
          {
            schemeId: 1100,
            schemeName: "DSP FMP-223-39 M-Reg-G",
            schemeAUM: 0.3654518518969436,
            isManaged: false,
            risk: 1.15,
            return: 10.2,
            color: null
          },
          {
            schemeId: 1101,
            schemeName: "IDFC FTP--142-1139 D-Reg-G",
            schemeAUM: 0.43507974841495156,
            isManaged: false,
            risk: 1.06,
            return: 9.98,
            color: null
          },
          {
            schemeId: 1102,
            schemeName: "Aditya Birla Sun Life FTP-PH-1143 D-Reg-G",
            schemeAUM: 0.8967845251255575,
            isManaged: false,
            risk: 1.08,
            return: 10.15,
            color: null
          },
          {
            schemeId: 1103,
            schemeName: "Franklin India FMP-3-C (1132 D)-G",
            schemeAUM: 0.8650992324213054,
            isManaged: false,
            risk: 1.08,
            return: 9.76,
            color: null
          },
          {
            schemeId: 1104,
            schemeName: "Aditya Birla Sun Life FTP-PJ-1135 D-Reg-G",
            schemeAUM: 0.34774963645496015,
            isManaged: false,
            risk: 1.1,
            return: 10.15,
            color: null
          },
          {
            schemeId: 1105,
            schemeName: "Invesco India FMP-30-D (1169 D)-G",
            schemeAUM: 0.5980919736575065,
            isManaged: false,
            risk: 1.12,
            return: 10.28,
            color: null
          },
          {
            schemeId: 1106,
            schemeName: "UTI FT  Inc -XXVIII-X (1153 D)-G",
            schemeAUM: 0.9432019225484871,
            isManaged: false,
            risk: 4.62,
            return: -2.41,
            color: null
          },
          {
            schemeId: 1107,
            schemeName: "Aditya Birla Sun Life FTP-PI-1140 D-Reg-G",
            schemeAUM: 0.8452776298164024,
            isManaged: false,
            risk: 1.07,
            return: 10.14,
            color: null
          },
          {
            schemeId: 1108,
            schemeName: "Kotak FMP 219-1173 D-G",
            schemeAUM: 0.37796572308430965,
            isManaged: false,
            risk: 0.87,
            return: 10.22,
            color: null
          },
          {
            schemeId: 1109,
            schemeName: "HDFC FMP-XXXIX-1143 D-Mar 2018 (1)-Reg-G",
            schemeAUM: 0.6956869413817774,
            isManaged: false,
            risk: 1,
            return: 10.09,
            color: null
          },
          {
            schemeId: 1110,
            schemeName: "ICICI Prudential FMP-82-1175 D Q-Cum",
            schemeAUM: 0.19245074857971645,
            isManaged: false,
            risk: 0.98,
            return: 10.22,
            color: null
          },
          {
            schemeId: 1111,
            schemeName: "Mirae Asset STP-G",
            schemeAUM: 0.34515295691251247,
            isManaged: false,
            risk: 0.94,
            return: 9.39,
            color: null
          },
          {
            schemeId: 1112,
            schemeName: "DSP Liquid ETF",
            schemeAUM: 0.9802050087328225,
            isManaged: false,
            risk: 0.11,
            return: 4.12,
            color: null
          },
          {
            schemeId: 1113,
            schemeName: "ICICI Prudential FMP-82-1136 D P-Cum",
            schemeAUM: 0.5823128482577686,
            isManaged: false,
            risk: 0.99,
            return: 8.27,
            color: null
          },
          {
            schemeId: 1114,
            schemeName: "Reliance Fixed Horizon  -XXXVI- 7-1153 D-G",
            schemeAUM: 0.2197950294803961,
            isManaged: false,
            risk: 1.01,
            return: 10.25,
            color: null
          },
          {
            schemeId: 1115,
            schemeName: "Aditya Birla Sun Life FTP-PO-1140 D-Reg-G",
            schemeAUM: 0.14902324017064528,
            isManaged: false,
            risk: 0.94,
            return: 10.35,
            color: null
          },
          {
            schemeId: 1116,
            schemeName: "UTI FT  Inc -XXVIII-XII (1154 D)-G",
            schemeAUM: 0.9143568223541465,
            isManaged: false,
            risk: 0.99,
            return: 10.45,
            color: null
          },
          {
            schemeId: 1117,
            schemeName: "DSP FMP-224-39 M-Reg-G",
            schemeAUM: 0.9557527567257769,
            isManaged: false,
            risk: 1.09,
            return: 9.87,
            color: null
          },
          {
            schemeId: 1118,
            schemeName: "IDFC FTP--144-1141 D-Reg-G",
            schemeAUM: 0.5590121232164325,
            isManaged: false,
            risk: 1.04,
            return: 10.04,
            color: null
          },
          {
            schemeId: 1119,
            schemeName: "ICICI Prudential FMP-82-1135 D U-Cum",
            schemeAUM: 0.4003986256282599,
            isManaged: false,
            risk: 0.93,
            return: 10.44,
            color: null
          },
          {
            schemeId: 1120,
            schemeName: "HDFC FMP-XXXIX-1145 D-Mar 2018 (1)-Reg-G",
            schemeAUM: 0.38200420528413903,
            isManaged: false,
            risk: 1,
            return: 10.12,
            color: null
          },
          {
            schemeId: 1121,
            schemeName: "Tata FMP-53- A-1140 D-G",
            schemeAUM: 0.9553947392255213,
            isManaged: false,
            risk: 1.1,
            return: 10.25,
            color: null
          },
          {
            schemeId: 1122,
            schemeName: "Aditya Birla Sun Life FTP-PK-1132 D-Reg-G",
            schemeAUM: 0.2157344382243105,
            isManaged: false,
            risk: 1.04,
            return: 10.08,
            color: null
          },
          {
            schemeId: 1123,
            schemeName: "DHFL Pramerica Fixed Duration -AT-Reg-G",
            schemeAUM: 0.6117442097561661,
            isManaged: false,
            risk: 5.26,
            return: -2.89,
            color: null
          },
          {
            schemeId: 1124,
            schemeName: "SBI Debt -C-12-1122 D-Reg-G",
            schemeAUM: 0.19427187466228601,
            isManaged: false,
            risk: 0.93,
            return: 9.19,
            color: null
          },
          {
            schemeId: 1125,
            schemeName: "Invesco India FMP-31-A (1150 D)-G",
            schemeAUM: 0.2575782448120292,
            isManaged: false,
            risk: 1.1,
            return: 10.3,
            color: null
          },
          {
            schemeId: 1126,
            schemeName: "Reliance Fixed Horizon  -XXXVI- 5-1294 D-G",
            schemeAUM: 0.6980406953836915,
            isManaged: false,
            risk: 1.05,
            return: 7.18,
            color: null
          },
          {
            schemeId: 1127,
            schemeName: "Franklin India FMP-3-D (1132 D)-G",
            schemeAUM: 0.3293854776139582,
            isManaged: false,
            risk: 1.07,
            return: 9.76,
            color: null
          },
          {
            schemeId: 1128,
            schemeName: "Aditya Birla Sun Life FTP-PM-1141 D-Reg-G",
            schemeAUM: 0.744900506138827,
            isManaged: false,
            risk: 1.38,
            return: 6.54,
            color: null
          },
          {
            schemeId: 1129,
            schemeName: "HDFC FMP-XXXIX-1147 D-Mar 2018 (1)-Reg-G",
            schemeAUM: 0.6507997868938149,
            isManaged: false,
            risk: 1,
            return: 10.1,
            color: null
          },
          {
            schemeId: 1130,
            schemeName: "UTI FT  Inc -XXVIII-XIV (1147 D)-G",
            schemeAUM: 0.028679981588554115,
            isManaged: false,
            risk: 0.96,
            return: 10.36,
            color: null
          },
          {
            schemeId: 1131,
            schemeName: "UTI FT  Inc -XXVIII-XIII (1134 D)-G",
            schemeAUM: 0.5045280609734988,
            isManaged: false,
            risk: 1.66,
            return: 3.4,
            color: null
          },
          {
            schemeId: 1132,
            schemeName: "Invesco India FMP-31-B (1143 D)-G",
            schemeAUM: 0.22293862673825582,
            isManaged: false,
            risk: 1.1,
            return: 10.16,
            color: null
          },
          {
            schemeId: 1133,
            schemeName: "Tata FMP-53- B-1136 D-G",
            schemeAUM: 0.7420618561115555,
            isManaged: false,
            risk: 1.06,
            return: 10.23,
            color: null
          },
          {
            schemeId: 1134,
            schemeName: "HSBC FT 131-Reg-G",
            schemeAUM: 0.8560827224523249,
            isManaged: false,
            risk: 1.01,
            return: 9.46,
            color: null
          },
          {
            schemeId: 1135,
            schemeName: "DHFL Pramerica Fixed Duration -AU-Reg-G",
            schemeAUM: 0.6484998170560516,
            isManaged: false,
            risk: 4.7,
            return: 0.67,
            color: null
          },
          {
            schemeId: 1136,
            schemeName: "ICICI Prudential FMP-82-1135 D S-Cum",
            schemeAUM: 0.17522529604234993,
            isManaged: false,
            risk: 0.98,
            return: 7.78,
            color: null
          },
          {
            schemeId: 1137,
            schemeName: "Aditya Birla Sun Life FTP-PN-1135 D-Reg-G",
            schemeAUM: 0.832038566411448,
            isManaged: false,
            risk: 1.36,
            return: 6.59,
            color: null
          },
          {
            schemeId: 1138,
            schemeName: "ICICI Prudential FMP-82-1135 D V-Cum",
            schemeAUM: 0.2756589349774268,
            isManaged: false,
            risk: 0.86,
            return: 7.74,
            color: null
          },
          {
            schemeId: 1139,
            schemeName: "Aditya Birla Sun Life FTP-PR-1134 D-Reg-G",
            schemeAUM: 0.38444017711127265,
            isManaged: false,
            risk: 0.96,
            return: 10.29,
            color: null
          },
          {
            schemeId: 1140,
            schemeName: "DSP FMP-226-39 M-Reg-G",
            schemeAUM: 0.7962766807247954,
            isManaged: false,
            risk: 1.14,
            return: 10.2,
            color: null
          },
          {
            schemeId: 1141,
            schemeName: "HDFC FMP-XXXIX-1177 D-Mar 2018 (1)-Reg-G",
            schemeAUM: 0.9771835001202223,
            isManaged: false,
            risk: 1,
            return: 7.62,
            color: null
          },
          {
            schemeId: 1142,
            schemeName: "ICICI Prudential FMP-82-1170 D R-Cum",
            schemeAUM: 0.5893857064977008,
            isManaged: false,
            risk: 0.93,
            return: 10.32,
            color: null
          },
          {
            schemeId: 1143,
            schemeName: "SBI Debt -C-14-1122 D-Reg-G",
            schemeAUM: 0.1248855087259777,
            isManaged: false,
            risk: 0.94,
            return: 9.22,
            color: null
          },
          {
            schemeId: 1144,
            schemeName: "Kotak FMP 224-1150 D-G",
            schemeAUM: 0.48356122968773896,
            isManaged: false,
            risk: 0.9,
            return: 10.35,
            color: null
          },
          {
            schemeId: 1145,
            schemeName: "DSP FMP-227-39 M-Reg-G",
            schemeAUM: 0.35912957781156085,
            isManaged: false,
            risk: 1.13,
            return: 9.95,
            color: null
          },
          {
            schemeId: 1146,
            schemeName: "HSBC FT 133-Reg-G",
            schemeAUM: 0.1638464973448872,
            isManaged: false,
            risk: 0.97,
            return: 8.26,
            color: null
          },
          {
            schemeId: 1147,
            schemeName: "Kotak FMP 220-1150 D-G",
            schemeAUM: 0.9420384779648743,
            isManaged: false,
            risk: 0.84,
            return: 8,
            color: null
          },
          {
            schemeId: 1148,
            schemeName: "Reliance Fixed Horizon  -XXXVI- 9-1139 D-G",
            schemeAUM: 0.6734587497759439,
            isManaged: false,
            risk: 1.02,
            return: 10.12,
            color: null
          },
          {
            schemeId: 1149,
            schemeName: "Kotak FMP 221-1140 D-G",
            schemeAUM: 0.7896594514196826,
            isManaged: false,
            risk: 0.85,
            return: 10.16,
            color: null
          },
          {
            schemeId: 1150,
            schemeName: "Reliance Fixed Horizon  -XXXVI- 8-1315 D-G",
            schemeAUM: 0.642367691825394,
            isManaged: false,
            risk: 1.08,
            return: 7.46,
            color: null
          },
          {
            schemeId: 1151,
            schemeName: "Kotak FMP 223-1153 D-G",
            schemeAUM: 0.2824281631477268,
            isManaged: false,
            risk: 0.88,
            return: 7.78,
            color: null
          },
          {
            schemeId: 1152,
            schemeName: "UTI FT  Inc -XXIX-I (1134 D)-G",
            schemeAUM: 0.5609566437300302,
            isManaged: false,
            risk: 1.13,
            return: 5.96,
            color: null
          },
          {
            schemeId: 1153,
            schemeName: "ICICI Prudential FMP-82-1119 D X-Cum",
            schemeAUM: 0.8226928810100802,
            isManaged: false,
            risk: 0.88,
            return: 10.39,
            color: null
          },
          {
            schemeId: 1154,
            schemeName: "Kotak FMP 225-1128 D-G",
            schemeAUM: 0.028312844328801434,
            isManaged: false,
            risk: 0.81,
            return: 10.02,
            color: null
          },
          {
            schemeId: 1155,
            schemeName: "HDFC FMP-XXXIX-1183 D-Apr 2018 (1)-Reg-G",
            schemeAUM: 0.7561370228392716,
            isManaged: false,
            risk: 1.08,
            return: 10.29,
            color: null
          },
          {
            schemeId: 1156,
            schemeName: "Reliance Fixed Horizon  -XXXVII- 1-1122 D-G",
            schemeAUM: 0.05675933145190304,
            isManaged: false,
            risk: 1,
            return: 10.24,
            color: null
          },
          {
            schemeId: 1157,
            schemeName: "HDFC FMP-XXXX-1181 D-Apr 2018 (1)-Reg-G",
            schemeAUM: 0.5133538602362553,
            isManaged: false,
            risk: 1.04,
            return: 10.28,
            color: null
          },
          {
            schemeId: 1158,
            schemeName: "ICICI Prudential FMP-82-1141 D Y-Cum",
            schemeAUM: 0.3053410964903118,
            isManaged: false,
            risk: 0.91,
            return: 10.42,
            color: null
          },
          {
            schemeId: 1159,
            schemeName: "Reliance Fixed Horizon  -XXXVII- 4-1438 D-G",
            schemeAUM: 0.7421138811527561,
            isManaged: false,
            risk: 1.27,
            return: 11.78,
            color: null
          },
          {
            schemeId: 1160,
            schemeName: "HDFC FMP-XXXX-1146 D-Apr 2018 (1)-Reg-G",
            schemeAUM: 0.8122676890948728,
            isManaged: false,
            risk: 1.32,
            return: 5.94,
            color: null
          },
          {
            schemeId: 1161,
            schemeName: "Reliance Fixed Horizon  -XXXVII- 3-1281 D-G",
            schemeAUM: 0.9237871907944464,
            isManaged: false,
            risk: 1.01,
            return: 8.26,
            color: null
          },
          {
            schemeId: 1162,
            schemeName: "HDFC FMP-XXXX-1434 D-May 2018 (1)-Reg-G",
            schemeAUM: 0.4060024341492876,
            isManaged: false,
            risk: 1.29,
            return: 11.31,
            color: null
          },
          {
            schemeId: 1163,
            schemeName: "UTI FT  Inc -XXIX-II (1118 D)-G",
            schemeAUM: 0.09020908014852114,
            isManaged: false,
            risk: 2.57,
            return: 1.43,
            color: null
          },
          {
            schemeId: 1164,
            schemeName: "Parag Parikh Liquid -Reg-G",
            schemeAUM: 0.191255599286132,
            isManaged: false,
            risk: 0.16,
            return: 6.34,
            color: null
          },
          {
            schemeId: 1165,
            schemeName: "Reliance Fixed Horizon  -XXXVII- 5-1105 D-G",
            schemeAUM: 0.7441994666043672,
            isManaged: false,
            risk: 1.01,
            return: 10.15,
            color: null
          },
          {
            schemeId: 1166,
            schemeName: "Aditya Birla Sun Life FTP-PU-1463 D-Reg-G",
            schemeAUM: 0.5228972489296999,
            isManaged: false,
            risk: 1.19,
            return: 11.8,
            color: null
          },
          {
            schemeId: 1167,
            schemeName: "Aditya Birla Sun Life FTP-PT-1100 D-Reg-G",
            schemeAUM: 0.39723746428720164,
            isManaged: false,
            risk: 0.87,
            return: 10.24,
            color: null
          },
          {
            schemeId: 1168,
            schemeName: "UTI FT  Inc -XXIX-IV (1422 D)-G",
            schemeAUM: 0.9900527135935897,
            isManaged: false,
            risk: 1.19,
            return: 11.43,
            color: null
          },
          {
            schemeId: 1169,
            schemeName: "Kotak FMP 226-1470 D-G",
            schemeAUM: 0.3909810766678783,
            isManaged: false,
            risk: 1.19,
            return: 11.55,
            color: null
          },
          {
            schemeId: 1170,
            schemeName: "Reliance Fixed Horizon  -XXXVII- 6-1417 D-G",
            schemeAUM: 0.872749361237779,
            isManaged: false,
            risk: 1.2,
            return: 11.42,
            color: null
          },
          {
            schemeId: 1171,
            schemeName: "Tata FMP-54- A -1136 D-G",
            schemeAUM: 0.35442338965541764,
            isManaged: false,
            risk: 1.14,
            return: 10.16,
            color: null
          },
          {
            schemeId: 1172,
            schemeName: "Franklin India FMP-3-E (1104 D)-G",
            schemeAUM: 0.6911893138430389,
            isManaged: false,
            risk: 1.09,
            return: 9.66,
            color: null
          },
          {
            schemeId: 1173,
            schemeName: "UTI FT  Inc -XXIX-III (1131 D)-G",
            schemeAUM: 0.36232491887417795,
            isManaged: false,
            risk: 5.76,
            return: -2.79,
            color: null
          },
          {
            schemeId: 1174,
            schemeName: "Aditya Birla Sun Life FTP-PV-1462 D-Reg-G",
            schemeAUM: 0.3432408254271626,
            isManaged: false,
            risk: 1.17,
            return: 11.55,
            color: null
          },
          {
            schemeId: 1175,
            schemeName: "HDFC FMP-XXXX-1134 D-May 2018 (1)-Reg-G",
            schemeAUM: 0.116590272066188,
            isManaged: false,
            risk: 0.98,
            return: 10.01,
            color: null
          },
          {
            schemeId: 1176,
            schemeName: "ICICI Prudential FMP-83-1105 D A-Cum",
            schemeAUM: 0.560610982360997,
            isManaged: false,
            risk: 0.92,
            return: 10.3,
            color: null
          },
          {
            schemeId: 1177,
            schemeName: "ICICI Prudential FMP-83-1412 D B-Cum",
            schemeAUM: 0.6417433275308664,
            isManaged: false,
            risk: 1.23,
            return: 11.7,
            color: null
          },
          {
            schemeId: 1178,
            schemeName: "Aditya Birla Sun Life FTP-PY-1409 D-Reg-G",
            schemeAUM: 0.004589577615920382,
            isManaged: false,
            risk: 1.1,
            return: 11.43,
            color: null
          },
          {
            schemeId: 1179,
            schemeName: "Union Corp Bond -Reg-G",
            schemeAUM: 0.31954025694121935,
            isManaged: false,
            risk: 4.97,
            return: 4,
            color: null
          },
          {
            schemeId: 1180,
            schemeName: "DHFL Pramerica Fixed Duration -AY-Reg-G",
            schemeAUM: 0.03855602128769964,
            isManaged: false,
            risk: 1.12,
            return: 11.25,
            color: null
          },
          {
            schemeId: 1181,
            schemeName: "UTI FT  Inc -XXIX-VI (1135 D)-G",
            schemeAUM: 0.04795376413167651,
            isManaged: false,
            risk: 1.03,
            return: 10.51,
            color: null
          },
          {
            schemeId: 1182,
            schemeName: "Aditya Birla Sun Life FTP-PW-1100 D-Reg-G",
            schemeAUM: 0.7016431940839831,
            isManaged: false,
            risk: 0.88,
            return: 10.23,
            color: null
          },
          {
            schemeId: 1183,
            schemeName: "ICICI Prudential FMP-83-1406 D D-Cum",
            schemeAUM: 0.1372869745777281,
            isManaged: false,
            risk: 1.21,
            return: 11.81,
            color: null
          },
          {
            schemeId: 1184,
            schemeName: "IDFC FTP--149-1424 D-Reg-G",
            schemeAUM: 0.12441439152832667,
            isManaged: false,
            risk: 1.33,
            return: 9.77,
            color: null
          },
          {
            schemeId: 1185,
            schemeName: "Baroda Ultra Short Duration -G",
            schemeAUM: 0.13028158138080226,
            isManaged: false,
            risk: 0.4,
            return: 8.14,
            color: null
          },
          {
            schemeId: 1186,
            schemeName: "SBI Debt -C-16-1100 D-Reg-G",
            schemeAUM: 0.09019722490580917,
            isManaged: false,
            risk: 0.95,
            return: 10.18,
            color: null
          },
          {
            schemeId: 1187,
            schemeName: "Aditya Birla Sun Life FTP-PZ-1120 D-Reg-G",
            schemeAUM: 0.49459377341669497,
            isManaged: false,
            risk: 0.84,
            return: 9.92,
            color: null
          },
          {
            schemeId: 1188,
            schemeName: "Kotak FMP 228-1141 D-G",
            schemeAUM: 0.6928285177993534,
            isManaged: false,
            risk: 0.92,
            return: 10.33,
            color: null
          },
          {
            schemeId: 1189,
            schemeName: "Reliance Fixed Horizon  -XXXVII- 10-1131 D-G",
            schemeAUM: 0.3682902536977919,
            isManaged: false,
            risk: 1.03,
            return: 9.87,
            color: null
          },
          {
            schemeId: 1190,
            schemeName: "HDFC FMP-41-1113 D-Jun 2018 (1)-Reg-G",
            schemeAUM: 0.9862241835439189,
            isManaged: false,
            risk: 0.99,
            return: 9.93,
            color: null
          },
          {
            schemeId: 1191,
            schemeName: "UTI FT  Inc -XXIX-V (1113 D)-G",
            schemeAUM: 0.5428290557028705,
            isManaged: false,
            risk: 4.5,
            return: -0.31,
            color: null
          },
          {
            schemeId: 1192,
            schemeName: "HSBC FT 134-Reg-G",
            schemeAUM: 0.5927319383237433,
            isManaged: false,
            risk: 6.24,
            return: 0.21,
            color: null
          },
          {
            schemeId: 1193,
            schemeName: "Tata FMP-55- A-1098 D-G",
            schemeAUM: 0.753850324879328,
            isManaged: false,
            risk: 1.08,
            return: 10.28,
            color: null
          },
          {
            schemeId: 1194,
            schemeName: "Franklin India FMP-3-F (1098 D)-G",
            schemeAUM: 0.9430137454335226,
            isManaged: false,
            risk: 1.09,
            return: 9.34,
            color: null
          },
          {
            schemeId: 1195,
            schemeName: "Aditya Birla Sun Life FTP-QB-1113 D-Reg-G",
            schemeAUM: 0.6207558733818768,
            isManaged: false,
            risk: 0.92,
            return: 10.34,
            color: null
          },
          {
            schemeId: 1196,
            schemeName: "ICICI Prudential FMP-83-1113 D E-Cum",
            schemeAUM: 0.45517135924940355,
            isManaged: false,
            risk: 1.06,
            return: 8.11,
            color: null
          },
          {
            schemeId: 1197,
            schemeName: "DSP FMP-232-36 M-Reg-G",
            schemeAUM: 0.02998398885158049,
            isManaged: false,
            risk: 1.09,
            return: 9.83,
            color: null
          },
          {
            schemeId: 1198,
            schemeName: "ICICI Prudential FMP-83-1108 D H-Cum",
            schemeAUM: 0.12994388604263096,
            isManaged: false,
            risk: 0.94,
            return: 10.36,
            color: null
          },
          {
            schemeId: 1199,
            schemeName: "ICICI Prudential FMP-83-1105 D F-Cum",
            schemeAUM: 0.9968797982921251,
            isManaged: false,
            risk: 0.9,
            return: 10.16,
            color: null
          },
          {
            schemeId: 1200,
            schemeName: "HDFC FMP-XXXX-1119 D-Jun 2018 (1)-Reg-G",
            schemeAUM: 0.18885313634974765,
            isManaged: false,
            risk: 1,
            return: 9.98,
            color: null
          },
          {
            schemeId: 1201,
            schemeName: "UTI FT  Inc -XXIX-VII (1135 D)-G",
            schemeAUM: 0.051555604837562274,
            isManaged: false,
            risk: 1.07,
            return: 9.49,
            color: null
          },
          {
            schemeId: 1202,
            schemeName: "DHFL Pramerica Fixed Duration -BA-Reg-G",
            schemeAUM: 0.6580633619393819,
            isManaged: false,
            risk: 1.09,
            return: 11.07,
            color: null
          },
          {
            schemeId: 1203,
            schemeName: "DHFL Pramerica Fixed Duration -AZ-Reg-G",
            schemeAUM: 0.8702242949570889,
            isManaged: false,
            risk: 8.11,
            return: -5.89,
            color: null
          },
          {
            schemeId: 1204,
            schemeName: "Kotak FMP 230-1140 D-G",
            schemeAUM: 0.6455002816190434,
            isManaged: false,
            risk: 0.93,
            return: 10.47,
            color: null
          },
          {
            schemeId: 1205,
            schemeName: "ICICI Prudential FMP-83-1392 D J-Cum",
            schemeAUM: 0.376365555278928,
            isManaged: false,
            risk: 1.21,
            return: 11.59,
            color: null
          },
          {
            schemeId: 1206,
            schemeName: "Reliance Fixed Horizon  -XXXVII- 12-1119 D-G",
            schemeAUM: 0.03498575723334785,
            isManaged: false,
            risk: 1.06,
            return: 10.44,
            color: null
          },
          {
            schemeId: 1207,
            schemeName: "Reliance Fixed Horizon  -XXXVII- 15-1114 D-G",
            schemeAUM: 0.8924446693921764,
            isManaged: false,
            risk: 1.04,
            return: 10.3,
            color: null
          },
          {
            schemeId: 1208,
            schemeName: "Reliance Fixed Horizon  -XXXVII- 9-1443 D-G",
            schemeAUM: 0.7960511826797645,
            isManaged: false,
            risk: 1.24,
            return: 7.24,
            color: null
          },
          {
            schemeId: 1209,
            schemeName: "Aditya Birla Sun Life FTP-QC-1116 D-Reg-G",
            schemeAUM: 0.4529202414264619,
            isManaged: false,
            risk: 3.52,
            return: 3.75,
            color: null
          },
          {
            schemeId: 1210,
            schemeName: "UTI FT  Inc -XXIX-VIII (1127 D)-G",
            schemeAUM: 0.1887779871086297,
            isManaged: false,
            risk: 0.99,
            return: 10.42,
            color: null
          },
          {
            schemeId: 1211,
            schemeName: "Invesco India FMP-31-D (1468 D)-G",
            schemeAUM: 0.9550187251833158,
            isManaged: false,
            risk: 1.49,
            return: 11.2,
            color: null
          },
          {
            schemeId: 1212,
            schemeName: "SBI Debt -C-18-1100 D-Reg-G",
            schemeAUM: 0.8984228530038227,
            isManaged: false,
            risk: 0.97,
            return: 10.08,
            color: null
          },
          {
            schemeId: 1213,
            schemeName: "Aditya Birla Sun Life FTP-QE -1101 D-Reg-G",
            schemeAUM: 0.26743416020606126,
            isManaged: false,
            risk: 0.88,
            return: 10.33,
            color: null
          },
          {
            schemeId: 1214,
            schemeName: "DSP FMP-233-36 M-Reg-G",
            schemeAUM: 0.7155940638493097,
            isManaged: false,
            risk: 1.04,
            return: 9.68,
            color: null
          },
          {
            schemeId: 1215,
            schemeName: "IDFC FTP--154-1098 D-Reg-G",
            schemeAUM: 0.08069692921578131,
            isManaged: false,
            risk: 1.07,
            return: 10.26,
            color: null
          },
          {
            schemeId: 1216,
            schemeName: "Franklin India FMP-4-A (1098 D)-G",
            schemeAUM: 0.4321750166035776,
            isManaged: false,
            risk: 1.1,
            return: 9.38,
            color: null
          },
          {
            schemeId: 1217,
            schemeName: "IDFC FTP--152-1452 D-Reg-G",
            schemeAUM: 0.27469983526872843,
            isManaged: false,
            risk: 1.42,
            return: 10.65,
            color: null
          },
          {
            schemeId: 1218,
            schemeName: "Aditya Birla Sun Life FTP-QG -1100 D-Reg-G",
            schemeAUM: 0.4818709286233738,
            isManaged: false,
            risk: 0.92,
            return: 10.21,
            color: null
          },
          {
            schemeId: 1219,
            schemeName: "HDFC FMP-41-1099 D-Jun 2018 (1)-Reg-G",
            schemeAUM: 0.9077747861932572,
            isManaged: false,
            risk: 0.99,
            return: 9.94,
            color: null
          },
          {
            schemeId: 1220,
            schemeName: "Aditya Birla Sun Life FTP-QH -1101 D-Reg-G",
            schemeAUM: 0.04173977374595661,
            isManaged: false,
            risk: 4.7,
            return: 2.37,
            color: null
          },
          {
            schemeId: 1221,
            schemeName: "DSP FMP-235-36 M-Reg-G",
            schemeAUM: 0.8126125572226328,
            isManaged: false,
            risk: 1.09,
            return: 9.98,
            color: null
          },
          {
            schemeId: 1222,
            schemeName: "Sundaram FTP-IJ-1099 D-Reg-G",
            schemeAUM: 0.0906699661252166,
            isManaged: false,
            risk: 0.99,
            return: 10.44,
            color: null
          },
          {
            schemeId: 1223,
            schemeName: "Aditya Birla Sun Life FTP-QI -1100 D-Reg-G",
            schemeAUM: 0.7944325266558427,
            isManaged: false,
            risk: 0.89,
            return: 10.29,
            color: null
          },
          {
            schemeId: 1224,
            schemeName: "Tata FMP-55- B-1098 D-G",
            schemeAUM: 0.6596134252427632,
            isManaged: false,
            risk: 1.1,
            return: 9.62,
            color: null
          },
          {
            schemeId: 1225,
            schemeName: "HDFC FMP-41-1124 D-Jun 2018 (1)-Reg-G",
            schemeAUM: 0.8787913934716733,
            isManaged: false,
            risk: 1.52,
            return: 4,
            color: null
          },
          {
            schemeId: 1226,
            schemeName: "ICICI Prudential FMP-83-1103 D L-Cum",
            schemeAUM: 0.21034318115060002,
            isManaged: false,
            risk: 0.91,
            return: 10.66,
            color: null
          },
          {
            schemeId: 1227,
            schemeName: "Aditya Birla Sun Life FTP-QF -1385 D-Reg-G",
            schemeAUM: 0.14478790024042,
            isManaged: false,
            risk: 1.15,
            return: 11.62,
            color: null
          },
          {
            schemeId: 1228,
            schemeName: "Kotak FMP 232-1137 D-G",
            schemeAUM: 0.6731396599701898,
            isManaged: false,
            risk: 0.93,
            return: 7.7,
            color: null
          },
          {
            schemeId: 1229,
            schemeName: "Invesco India FMP-32-A (1105 D)-G",
            schemeAUM: 0.7492574707378201,
            isManaged: false,
            risk: 1.12,
            return: 10.12,
            color: null
          },
          {
            schemeId: 1230,
            schemeName: "Invesco India FMP-32-B (1100 D)-G",
            schemeAUM: 0.5914954566133159,
            isManaged: false,
            risk: 1.11,
            return: 10.1,
            color: null
          },
          {
            schemeId: 1231,
            schemeName: "L&T FMP-XVII-B-1452 D-G",
            schemeAUM: 0.5104120569469632,
            isManaged: false,
            risk: 1.49,
            return: 10.76,
            color: null
          },
          {
            schemeId: 1232,
            schemeName: "Edelweiss FMP-49-Reg-G",
            schemeAUM: 0.6189788038374042,
            isManaged: false,
            risk: 4.67,
            return: 2.76,
            color: null
          },
          {
            schemeId: 1233,
            schemeName: "UTI FT  Inc -XXIX-XI (1112 D)-G",
            schemeAUM: 0.7522462440174684,
            isManaged: false,
            risk: 6.64,
            return: -1.74,
            color: null
          },
          {
            schemeId: 1234,
            schemeName: "Aditya Birla Sun Life FTP-QJ -1098 D-Reg-G",
            schemeAUM: 0.4483707156870458,
            isManaged: false,
            risk: 0.89,
            return: 10.18,
            color: null
          },
          {
            schemeId: 1235,
            schemeName: "Axis FTP-95 (1185 D)-Reg-G",
            schemeAUM: 0.13388306652844006,
            isManaged: false,
            risk: 1.21,
            return: 10.38,
            color: null
          },
          {
            schemeId: 1236,
            schemeName: "Reliance Fixed Horizon  -XXXVIII- 1-1106 D-G",
            schemeAUM: 0.515554407359009,
            isManaged: false,
            risk: 1.04,
            return: 10.33,
            color: null
          },
          {
            schemeId: 1237,
            schemeName: "Kotak FMP 233-1140 D-G",
            schemeAUM: 0.7510571936007773,
            isManaged: false,
            risk: 0.9,
            return: 10.26,
            color: null
          },
          {
            schemeId: 1238,
            schemeName: "HDFC FMP-41-1122 D-Jul 2018 (1)-Reg-G",
            schemeAUM: 0.8659611484355856,
            isManaged: false,
            risk: 0.99,
            return: 10.03,
            color: null
          },
          {
            schemeId: 1239,
            schemeName: "UTI FT  Inc -XXIX-IX (1109 D)-G",
            schemeAUM: 0.6836379407468651,
            isManaged: false,
            risk: 6.71,
            return: -4.43,
            color: null
          },
          {
            schemeId: 1240,
            schemeName: "ICICI Prudential FMP-83-1100 D O-Cum",
            schemeAUM: 0.8125456137049722,
            isManaged: false,
            risk: 0.91,
            return: 10.28,
            color: null
          },
          {
            schemeId: 1241,
            schemeName: "Reliance Fixed Horizon  -XXXVIII- 3-1105 D-G",
            schemeAUM: 0.931413599030241,
            isManaged: false,
            risk: 0.97,
            return: 9.92,
            color: null
          },
          {
            schemeId: 1242,
            schemeName: "HSBC FT 135-Reg-G",
            schemeAUM: 0.68195719313964,
            isManaged: false,
            risk: 6.22,
            return: 0.32,
            color: null
          },
          {
            schemeId: 1243,
            schemeName: "DSP FMP-236-36 M-Reg-G",
            schemeAUM: 0.6868436258254995,
            isManaged: false,
            risk: 1.14,
            return: 10.15,
            color: null
          },
          {
            schemeId: 1244,
            schemeName: "UTI FT  Inc -XXIX-XIV (1131 D)-G",
            schemeAUM: 0.9137000928903634,
            isManaged: false,
            risk: 1.03,
            return: 10.36,
            color: null
          },
          {
            schemeId: 1245,
            schemeName: "Reliance Nivesh Lakshya -G",
            schemeAUM: 0.3487421420792107,
            isManaged: false,
            risk: 4.47,
            return: 22.02,
            color: null
          },
          {
            schemeId: 1246,
            schemeName: "SBI Debt -C-19-1100 D-Reg-G",
            schemeAUM: 0.33627258554537587,
            isManaged: false,
            risk: 0.97,
            return: 10.13,
            color: null
          },
          {
            schemeId: 1247,
            schemeName: "Aditya Birla Sun Life FTP-QL -1099 D-Reg-G",
            schemeAUM: 0.13358690467447376,
            isManaged: false,
            risk: 0.84,
            return: 10.44,
            color: null
          },
          {
            schemeId: 1248,
            schemeName: "IDFC FTP--156-1103 D-Reg-G",
            schemeAUM: 0.1067746204546105,
            isManaged: false,
            risk: 1.05,
            return: 10.39,
            color: null
          },
          {
            schemeId: 1249,
            schemeName: "ICICI Prudential FMP-83-1107 D Q-Cum",
            schemeAUM: 0.8958161902619219,
            isManaged: false,
            risk: 0.95,
            return: 10.33,
            color: null
          },
          {
            schemeId: 1250,
            schemeName: "Aditya Birla Sun Life FTP-QK -1099 D-Reg-G",
            schemeAUM: 0.002234100632844793,
            isManaged: false,
            risk: 0.91,
            return: 10.2,
            color: null
          },
          {
            schemeId: 1251,
            schemeName: "ICICI Prudential FMP-83-1105 D M-Cum",
            schemeAUM: 0.9489860642769268,
            isManaged: false,
            risk: 1.07,
            return: 7.81,
            color: null
          },
          {
            schemeId: 1252,
            schemeName: "Kotak FMP 235-1140 D-G",
            schemeAUM: 0.8479980432688772,
            isManaged: false,
            risk: 0.95,
            return: 10.6,
            color: null
          },
          {
            schemeId: 1253,
            schemeName: "UTI FT  Inc -XXIX-XV (1124 D)-G",
            schemeAUM: 0.1384053270016612,
            isManaged: false,
            risk: 0.99,
            return: 10.34,
            color: null
          },
          {
            schemeId: 1254,
            schemeName: "Reliance Fixed Horizon  -XXXVIII- 5-1125 D-G",
            schemeAUM: 0.24126550915207878,
            isManaged: false,
            risk: 1.02,
            return: 9.31,
            color: null
          },
          {
            schemeId: 1255,
            schemeName: "DSP FMP-237-36 M-Reg-G",
            schemeAUM: 0.11817812962903496,
            isManaged: false,
            risk: 1.12,
            return: 10.07,
            color: null
          },
          {
            schemeId: 1256,
            schemeName: "Sundaram FTP-IK-1098 D-Reg-G",
            schemeAUM: 0.795583356245001,
            isManaged: false,
            risk: 0.98,
            return: 10.66,
            color: null
          },
          {
            schemeId: 1257,
            schemeName: "Aditya Birla Sun Life FTP-QM -1100 D-Reg-G",
            schemeAUM: 0.7392462980149173,
            isManaged: false,
            risk: 0.89,
            return: 10.28,
            color: null
          },
          {
            schemeId: 1258,
            schemeName: "DSP FMP-238-36 M-Reg-G",
            schemeAUM: 0.08285837044679045,
            isManaged: false,
            risk: 1.24,
            return: 8,
            color: null
          },
          {
            schemeId: 1259,
            schemeName: "DHFL Pramerica Fixed Duration -BB-Reg-G",
            schemeAUM: 0.7361691093479565,
            isManaged: false,
            risk: 0.87,
            return: 9.82,
            color: null
          },
          {
            schemeId: 1260,
            schemeName: "IDFC Ultra STP-Reg-G",
            schemeAUM: 0.743015061812516,
            isManaged: false,
            risk: 0.41,
            return: 8.58,
            color: null
          },
          {
            schemeId: 1261,
            schemeName: "DSP FMP-239-36 M-Reg-G",
            schemeAUM: 0.4601239522617666,
            isManaged: false,
            risk: 1.2,
            return: 7.77,
            color: null
          },
          {
            schemeId: 1262,
            schemeName: "Reliance Fixed Horizon  -XXXVIII- 6-1119 D-G",
            schemeAUM: 0.2425140095466729,
            isManaged: false,
            risk: 1.01,
            return: 9.33,
            color: null
          },
          {
            schemeId: 1263,
            schemeName: "IDFC FTP--159-1098 D-Reg-G",
            schemeAUM: 0.399996659590675,
            isManaged: false,
            risk: 1.02,
            return: 9.75,
            color: null
          },
          {
            schemeId: 1264,
            schemeName: "UTI FT  Inc -XXIX-XIII (1122 D)-G",
            schemeAUM: 0.3737232721745414,
            isManaged: false,
            risk: 1.28,
            return: 6.02,
            color: null
          },
          {
            schemeId: 1265,
            schemeName: "Aditya Birla Sun Life FTP-QN -1100 D-Reg-G",
            schemeAUM: 0.4724954670510906,
            isManaged: false,
            risk: 0.94,
            return: 9.88,
            color: null
          },
          {
            schemeId: 1266,
            schemeName: "Franklin India FMP-4-B (1098 D)-G",
            schemeAUM: 0.8821289271764008,
            isManaged: false,
            risk: 1.15,
            return: 9.15,
            color: null
          },
          {
            schemeId: 1267,
            schemeName: "Tata FMP-55- D-1100 D-G",
            schemeAUM: 0.73315550507344,
            isManaged: false,
            risk: 1.16,
            return: 9.7,
            color: null
          },
          {
            schemeId: 1268,
            schemeName: "ICICI Prudential FMP-83-1100 D R-Cum",
            schemeAUM: 0.21119134707925036,
            isManaged: false,
            risk: 0.93,
            return: 10.23,
            color: null
          },
          {
            schemeId: 1269,
            schemeName: "Aditya Birla Sun Life FTP-QO -1100 D-Reg-G",
            schemeAUM: 0.4437447768754177,
            isManaged: false,
            risk: 0.94,
            return: 9.91,
            color: null
          },
          {
            schemeId: 1270,
            schemeName: "Kotak FMP 234-1162 D-G",
            schemeAUM: 0.9911660823069008,
            isManaged: false,
            risk: 1.08,
            return: 7.88,
            color: null
          },
          {
            schemeId: 1271,
            schemeName: "ICICI Prudential FMP-83-1735 D P-Cum",
            schemeAUM: 0.0316274653158537,
            isManaged: false,
            risk: 1.48,
            return: 12.14,
            color: null
          },
          {
            schemeId: 1272,
            schemeName: "HDFC FMP-41-1133 D-Jul 2018 (1)-Reg-G",
            schemeAUM: 0.2841089355930335,
            isManaged: false,
            risk: 0.97,
            return: 9.2,
            color: null
          },
          {
            schemeId: 1273,
            schemeName: "SBI Debt -C-20-1100 D-Reg-G",
            schemeAUM: 0.40213121768069104,
            isManaged: false,
            risk: 1.01,
            return: 10.17,
            color: null
          },
          {
            schemeId: 1274,
            schemeName: "Reliance Fixed Horizon  -XXXVIII- 2-1412 D-G",
            schemeAUM: 0.15749204442590425,
            isManaged: false,
            risk: 1.33,
            return: 8.01,
            color: null
          },
          {
            schemeId: 1275,
            schemeName: "Aditya Birla Sun Life FTP-QP -1100 D-Reg-G",
            schemeAUM: 0.09311036460945599,
            isManaged: false,
            risk: 5.46,
            return: 0.47,
            color: null
          },
          {
            schemeId: 1276,
            schemeName: "Invesco India FMP-32-C (1099 D)-G",
            schemeAUM: 0.7990766703572134,
            isManaged: false,
            risk: 1.13,
            return: 10.04,
            color: null
          },
          {
            schemeId: 1277,
            schemeName: "Aditya Birla Sun Life FTP-QS -1100 D-Reg-G",
            schemeAUM: 0.14050173419283274,
            isManaged: false,
            risk: 0.93,
            return: 9.82,
            color: null
          },
          {
            schemeId: 1278,
            schemeName: "Tata FMP-55- E-1099 D-G",
            schemeAUM: 0.8459584973596304,
            isManaged: false,
            risk: 5.2,
            return: -0.39,
            color: null
          },
          {
            schemeId: 1279,
            schemeName: "Kotak FMP 237-1186 D-G",
            schemeAUM: 0.1742025427513716,
            isManaged: false,
            risk: 0.94,
            return: 10.14,
            color: null
          },
          {
            schemeId: 1280,
            schemeName: "Aditya Birla Sun Life FTP-QU -1100 D-Reg-G",
            schemeAUM: 0.31564565225273,
            isManaged: false,
            risk: 0.94,
            return: 10.11,
            color: null
          },
          {
            schemeId: 1281,
            schemeName: "Reliance Fixed Horizon  -XXXVIII- 7-1116 D-G",
            schemeAUM: 0.8610215933249037,
            isManaged: false,
            risk: 1.05,
            return: 9.56,
            color: null
          },
          {
            schemeId: 1282,
            schemeName: "IDFC FTP--160-1105 D-Reg-G",
            schemeAUM: 0.1420402121606743,
            isManaged: false,
            risk: 1.11,
            return: 10.52,
            color: null
          },
          {
            schemeId: 1283,
            schemeName: "DHFL Pramerica Fixed Duration -BC-Reg-G",
            schemeAUM: 0.24876711126144024,
            isManaged: false,
            risk: 5.37,
            return: 0.63,
            color: null
          },
          {
            schemeId: 1284,
            schemeName: "HDFC FMP-42-1105 D-Aug 2018 (1)-Reg-G",
            schemeAUM: 0.9478227986674239,
            isManaged: false,
            risk: 1.1,
            return: 9.62,
            color: null
          },
          {
            schemeId: 1285,
            schemeName: "Aditya Birla Sun Life FTP-QT -1100 D-Reg-G",
            schemeAUM: 0.6366789862344306,
            isManaged: false,
            risk: 0.98,
            return: 9.77,
            color: null
          },
          {
            schemeId: 1286,
            schemeName: "SBI Debt -C-21-1100 D-Reg-G",
            schemeAUM: 0.855076854465765,
            isManaged: false,
            risk: 1,
            return: 9.36,
            color: null
          },
          {
            schemeId: 1287,
            schemeName: "ICICI Prudential FMP-83-1100 D S-Cum",
            schemeAUM: 0.7181255592951914,
            isManaged: false,
            risk: 0.99,
            return: 10.12,
            color: null
          },
          {
            schemeId: 1288,
            schemeName: "DSP FMP-241-36 M-Reg-G",
            schemeAUM: 0.5280626910360546,
            isManaged: false,
            risk: 1.26,
            return: 6.86,
            color: null
          },
          {
            schemeId: 1289,
            schemeName: "ICICI Prudential FMP-83-1110 D T-Cum",
            schemeAUM: 0.9096224122423964,
            isManaged: false,
            risk: 1.03,
            return: 8.37,
            color: null
          },
          {
            schemeId: 1290,
            schemeName: "HDFC FMP-42-1141 D-Aug 2018 (1)-Reg-G",
            schemeAUM: 0.2936456375145291,
            isManaged: false,
            risk: 1.17,
            return: 6.34,
            color: null
          },
          {
            schemeId: 1291,
            schemeName: "HDFC FMP-42-1113 D-Aug 2018 (1)-Reg-G",
            schemeAUM: 0.24047286738402218,
            isManaged: false,
            risk: 1.09,
            return: 9.3,
            color: null
          },
          {
            schemeId: 1292,
            schemeName: "Reliance Fixed Horizon  -XXXVIII- 10-1385 D-G",
            schemeAUM: 0.407999172256297,
            isManaged: false,
            risk: 1.34,
            return: 8.1,
            color: null
          },
          {
            schemeId: 1293,
            schemeName: "Aditya Birla Sun Life FTP-QW -1099 D-Reg-G",
            schemeAUM: 0.635365482118502,
            isManaged: false,
            risk: 4.21,
            return: 1.29,
            color: null
          },
          {
            schemeId: 1294,
            schemeName: "Aditya Birla Sun Life FTP-QV -1100 D-Reg-G",
            schemeAUM: 0.3649982920124992,
            isManaged: false,
            risk: 0.94,
            return: 10.18,
            color: null
          },
          {
            schemeId: 1295,
            schemeName: "Reliance Fixed Horizon  -XXXVIII- 12-1159 D-G",
            schemeAUM: 0.3988533736209521,
            isManaged: false,
            risk: 1.09,
            return: 10.92,
            color: null
          },
          {
            schemeId: 1296,
            schemeName: "Tata FMP-55- F-1100 D-G",
            schemeAUM: 0.24795377444068634,
            isManaged: false,
            risk: 5.3,
            return: -0.54,
            color: null
          },
          {
            schemeId: 1297,
            schemeName: "Kotak FMP 240-1160 D-G",
            schemeAUM: 0.5177057822781295,
            isManaged: false,
            risk: 0.98,
            return: 10.65,
            color: null
          },
          {
            schemeId: 1298,
            schemeName: "HSBC FT 136-Reg-G",
            schemeAUM: 0.8221109404771221,
            isManaged: false,
            risk: 5.26,
            return: -0.14,
            color: null
          },
          {
            schemeId: 1299,
            schemeName: "ICICI Prudential FMP-83-1111 D Y-Cum",
            schemeAUM: 0.608851766737869,
            isManaged: false,
            risk: 0.99,
            return: 10.69,
            color: null
          },
          {
            schemeId: 1300,
            schemeName: "UTI FT  Inc -XXX-I (1104 D)-G",
            schemeAUM: 0.2422094902308154,
            isManaged: false,
            risk: 1.26,
            return: 5.88,
            color: null
          },
          {
            schemeId: 1301,
            schemeName: "DSP FMP-243-36 M-Reg-G",
            schemeAUM: 0.5485876992691612,
            isManaged: false,
            risk: 1.11,
            return: 7.48,
            color: null
          },
          {
            schemeId: 1302,
            schemeName: "UTI FT  Inc -XXX-II (1107 D)-G",
            schemeAUM: 0.24490243790383714,
            isManaged: false,
            risk: 1.13,
            return: 10.64,
            color: null
          },
          {
            schemeId: 1303,
            schemeName: "Aditya Birla Sun Life FTP-QX -1103 D-Reg-G",
            schemeAUM: 0.4822758183434508,
            isManaged: false,
            risk: 0.97,
            return: 9.84,
            color: null
          },
          {
            schemeId: 1304,
            schemeName: "Kotak FMP 239-1330 D-G",
            schemeAUM: 0.8718709475166211,
            isManaged: false,
            risk: 1.19,
            return: 8.15,
            color: null
          },
          {
            schemeId: 1305,
            schemeName: "SBI Debt -C-22-1100 D-Reg-G",
            schemeAUM: 0.06578513447968137,
            isManaged: false,
            risk: 1.09,
            return: 8.48,
            color: null
          },
          {
            schemeId: 1306,
            schemeName: "Kotak FMP 242-1152 D-G",
            schemeAUM: 0.6378378182063602,
            isManaged: false,
            risk: 1,
            return: 10.74,
            color: null
          },
          {
            schemeId: 1307,
            schemeName: "Invesco India FMP-32-D (1099 D)-G",
            schemeAUM: 0.31499801727103405,
            isManaged: false,
            risk: 1.19,
            return: 10.45,
            color: null
          }
        ]
      },
      {
        assetId: 3,
        assetName: "Hybrid",
        AUM: {
          minAUM: 10,
          maxAUM: 100
        },
        numberOfSchemesManaged: 0,
        color: "rgba(223, 0, 13, .5)",
        schemes: [
          {
            schemeId: 1308,
            schemeName: "Axis CPOF-5-G",
            schemeAUM: 0.4106363779682012,
            isManaged: false,
            risk: 7.92,
            return: 2.77,
            color: null
          },
          {
            schemeId: 1309,
            schemeName: "Axis Reg Saver -G",
            schemeAUM: 0.5431729195147406,
            isManaged: false,
            risk: 5.24,
            return: -3.26,
            color: null
          },
          {
            schemeId: 1310,
            schemeName: "Baroda Hybrid Equity -G",
            schemeAUM: 0.4152187743923179,
            isManaged: false,
            risk: 8.15,
            return: -10.6,
            color: null
          },
          {
            schemeId: 1311,
            schemeName: "Baroda Cons Hybrid -G",
            schemeAUM: 0.9370766946277969,
            isManaged: false,
            risk: 3.91,
            return: 11.62,
            color: null
          },
          {
            schemeId: 1312,
            schemeName: "Aditya Birla Sun Life Equity Hybrid 95 -G",
            schemeAUM: 0.20433064637612475,
            isManaged: false,
            risk: 8.19,
            return: -8.56,
            color: null
          },
          {
            schemeId: 1313,
            schemeName: "Aditya Birla Sun Life Arbi -G",
            schemeAUM: 0.3401063143866858,
            isManaged: false,
            risk: 0.9,
            return: 6.6,
            color: null
          },
          {
            schemeId: 1314,
            schemeName: "Aditya Birla Sun Life Reg Savings -G",
            schemeAUM: 0.25827862380637256,
            isManaged: false,
            risk: 3.41,
            return: -0.56,
            color: null
          },
          {
            schemeId: 1315,
            schemeName: "BNP Paribas Cons Hybrid -Reg-G",
            schemeAUM: 0.7377473906721022,
            isManaged: false,
            risk: 3.15,
            return: 4.95,
            color: null
          },
          {
            schemeId: 1316,
            schemeName: "BOI AXA Cons Hybrid -Reg-G",
            schemeAUM: 0.5920675291314164,
            isManaged: false,
            risk: 6.88,
            return: -14.22,
            color: null
          },
          {
            schemeId: 1317,
            schemeName: "Canara Robeco Equity Hybrid -Reg-G",
            schemeAUM: 0.7189427107806177,
            isManaged: false,
            risk: 7.72,
            return: -2.55,
            color: null
          },
          {
            schemeId: 1318,
            schemeName: "Canara Robeco Cons Hybrid -Reg-G",
            schemeAUM: 0.4660394605368099,
            isManaged: false,
            risk: 3.03,
            return: 5.89,
            color: null
          },
          {
            schemeId: 1319,
            schemeName: "DSP Equity & Bond -Reg-G",
            schemeAUM: 0.6488270058091314,
            isManaged: false,
            risk: 9.01,
            return: -3.33,
            color: null
          },
          {
            schemeId: 1320,
            schemeName: "DSP Reg Savings -Reg-G",
            schemeAUM: 0.7936811570416666,
            isManaged: false,
            risk: 4.37,
            return: -4.06,
            color: null
          },
          {
            schemeId: 1321,
            schemeName: "DHFL Pramerica Hybrid FT -12-Reg-G",
            schemeAUM: 0.7434212953810111,
            isManaged: false,
            risk: 1.82,
            return: 5.55,
            color: null
          },
          {
            schemeId: 1322,
            schemeName: "DHFL Pramerica Hybrid Equity -G",
            schemeAUM: 0.5011646697276071,
            isManaged: false,
            risk: 8.17,
            return: -6.21,
            color: null
          },
          {
            schemeId: 1323,
            schemeName: "DHFL Pramerica Equity Savings -G",
            schemeAUM: 0.43437365497729097,
            isManaged: false,
            risk: 4.17,
            return: 1.55,
            color: null
          },
          {
            schemeId: 1324,
            schemeName: "Edelweiss Balanced Adv -Reg-G",
            schemeAUM: 0.2900377089405426,
            isManaged: false,
            risk: 6.15,
            return: -4.41,
            color: null
          },
          {
            schemeId: 1325,
            schemeName: "Quant Absolute -G",
            schemeAUM: 0.721811248812573,
            isManaged: false,
            risk: 11.14,
            return: -4.61,
            color: null
          },
          {
            schemeId: 1326,
            schemeName: "Quant Multi Asset -G",
            schemeAUM: 0.9538152249773699,
            isManaged: false,
            risk: 1.82,
            return: 8.52,
            color: null
          },
          {
            schemeId: 1327,
            schemeName: "Franklin India Equity Hybrid -G",
            schemeAUM: 0.723536963509464,
            isManaged: false,
            risk: 7.97,
            return: -4.15,
            color: null
          },
          {
            schemeId: 1328,
            schemeName: "Franklin India Debt Hybrid -G",
            schemeAUM: 0.05319657947057799,
            isManaged: false,
            risk: 2.64,
            return: 4.18,
            color: null
          },
          {
            schemeId: 1329,
            schemeName: "HDFC Balanced Adv -G",
            schemeAUM: 0.4146836840356123,
            isManaged: false,
            risk: 10.74,
            return: -3.1,
            color: null
          },
          {
            schemeId: 1330,
            schemeName: "HDFC Hybrid Debt -G",
            schemeAUM: 0.3608484546827848,
            isManaged: false,
            risk: 3.72,
            return: 4.31,
            color: null
          },
          {
            schemeId: 1331,
            schemeName: "HDFC Multi-Asset -G",
            schemeAUM: 0.49204806040303883,
            isManaged: false,
            risk: 7.32,
            return: -4.42,
            color: null
          },
          {
            schemeId: 1332,
            schemeName: "HDFC Equity Savings -G",
            schemeAUM: 0.06536033059302548,
            isManaged: false,
            risk: 4.42,
            return: 0.53,
            color: null
          },
          {
            schemeId: 1333,
            schemeName: "HDFC Hybrid Equity -G",
            schemeAUM: 0.891833249950091,
            isManaged: false,
            risk: 8.18,
            return: -3.24,
            color: null
          },
          {
            schemeId: 1334,
            schemeName: "HSBC Reg Savings -G",
            schemeAUM: 0.49407297864615973,
            isManaged: false,
            risk: 3.74,
            return: 5.21,
            color: null
          },
          {
            schemeId: 1335,
            schemeName: "ICICI Prudential Equity & Debt -G",
            schemeAUM: 0.7412332059970437,
            isManaged: false,
            risk: 9.15,
            return: -3.14,
            color: null
          },
          {
            schemeId: 1336,
            schemeName: "ICICI Prudential Multi-Asset -G",
            schemeAUM: 0.6993095645915821,
            isManaged: false,
            risk: 8.33,
            return: -1.38,
            color: null
          },
          {
            schemeId: 1337,
            schemeName: "ICICI Prudential Balanced Adv -G",
            schemeAUM: 0.6840047397971463,
            isManaged: false,
            risk: 5.47,
            return: 1.9,
            color: null
          },
          {
            schemeId: 1338,
            schemeName: "ICICI Prudential Equity-Arbi-G",
            schemeAUM: 0.48697535726654606,
            isManaged: false,
            risk: 0.85,
            return: 6.61,
            color: null
          },
          {
            schemeId: 1339,
            schemeName: "ICICI Prudential Reg Savings -Cum",
            schemeAUM: 0.956426996462213,
            isManaged: false,
            risk: 2.21,
            return: 6.01,
            color: null
          },
          {
            schemeId: 1340,
            schemeName: "IDBI Equity Savings -G",
            schemeAUM: 0.7666638252382829,
            isManaged: false,
            risk: 3.85,
            return: -0.94,
            color: null
          },
          {
            schemeId: 1341,
            schemeName: "IDFC Arbi -Reg-G",
            schemeAUM: 0.07285429641159813,
            isManaged: false,
            risk: 0.85,
            return: 6.83,
            color: null
          },
          {
            schemeId: 1342,
            schemeName: "IDFC Equity Savings -Reg-G",
            schemeAUM: 0.007647614503824229,
            isManaged: false,
            risk: 4.67,
            return: -0.71,
            color: null
          },
          {
            schemeId: 1343,
            schemeName: "IDFC Reg Savings -Reg-G",
            schemeAUM: 0.1384009347485895,
            isManaged: false,
            risk: 2.8,
            return: 5.15,
            color: null
          },
          {
            schemeId: 1344,
            schemeName: "Aditya Birla Sun Life Balanced Adv -G",
            schemeAUM: 0.9498245500666169,
            isManaged: false,
            risk: 5.46,
            return: -0.25,
            color: null
          },
          {
            schemeId: 1345,
            schemeName: "JM Arbi -G",
            schemeAUM: 0.8953339110548746,
            isManaged: false,
            risk: 1.09,
            return: 6.01,
            color: null
          },
          {
            schemeId: 1346,
            schemeName: "JM Equity Hybrid -G",
            schemeAUM: 0.6687296317595575,
            isManaged: false,
            risk: 11.69,
            return: -15.97,
            color: null
          },
          {
            schemeId: 1347,
            schemeName: "Kotak Equity Hybrid -D",
            schemeAUM: 0.518571232802896,
            isManaged: false,
            risk: 8.83,
            return: -4.32,
            color: null
          },
          {
            schemeId: 1348,
            schemeName: "Kotak Equity Arbi -G",
            schemeAUM: 0.15845835552389942,
            isManaged: false,
            risk: 0.88,
            return: 6.71,
            color: null
          },
          {
            schemeId: 1349,
            schemeName: "Kotak Debt Hybrid -G",
            schemeAUM: 0.6597147009795896,
            isManaged: false,
            risk: 3.44,
            return: 4.08,
            color: null
          },
          {
            schemeId: 1350,
            schemeName: "L&T Equity Savings -Reg-G",
            schemeAUM: 0.26404580656420906,
            isManaged: false,
            risk: 5.27,
            return: -3.99,
            color: null
          },
          {
            schemeId: 1351,
            schemeName: "L&T Cons Hybrid -Reg-G",
            schemeAUM: 0.5296363145714265,
            isManaged: false,
            risk: 2.77,
            return: 6.47,
            color: null
          },
          {
            schemeId: 1352,
            schemeName: "LIC MF Equity Hybrid -G",
            schemeAUM: 0.19523942003053607,
            isManaged: false,
            risk: 8.04,
            return: 1.82,
            color: null
          },
          {
            schemeId: 1353,
            schemeName: "LIC MF Debt Hybrid -G",
            schemeAUM: 0.7694935140040606,
            isManaged: false,
            risk: 2.47,
            return: 5.86,
            color: null
          },
          {
            schemeId: 1354,
            schemeName: "Essel Reg Savings -Reg-G",
            schemeAUM: 0.9079766410720929,
            isManaged: false,
            risk: 2.31,
            return: 3.35,
            color: null
          },
          {
            schemeId: 1355,
            schemeName: "Principal Hybrid Equity -G",
            schemeAUM: 0.23033536527505682,
            isManaged: false,
            risk: 8.19,
            return: -9.07,
            color: null
          },
          {
            schemeId: 1356,
            schemeName: "Principal Equity Savings -G",
            schemeAUM: 0.6780075426648127,
            isManaged: false,
            risk: 3.18,
            return: 0.27,
            color: null
          },
          {
            schemeId: 1357,
            schemeName: "Principal Balanced Adv -G",
            schemeAUM: 0.5698946744713655,
            isManaged: false,
            risk: 3.65,
            return: -2.14,
            color: null
          },
          {
            schemeId: 1358,
            schemeName: "Reliance Arbi -G",
            schemeAUM: 0.40369955970843097,
            isManaged: false,
            risk: 0.93,
            return: 6.84,
            color: null
          },
          {
            schemeId: 1359,
            schemeName: "Reliance Hybrid Bond -G",
            schemeAUM: 0.7475942717254143,
            isManaged: false,
            risk: 2.08,
            return: 2.38,
            color: null
          },
          {
            schemeId: 1360,
            schemeName: "Reliance Balanced Adv -G",
            schemeAUM: 0.7852856000874495,
            isManaged: false,
            risk: 5.36,
            return: 0.7,
            color: null
          },
          {
            schemeId: 1361,
            schemeName: "Reliance Equity Hybrid -G",
            schemeAUM: 0.4375041753124955,
            isManaged: false,
            risk: 10.49,
            return: -12.32,
            color: null
          },
          {
            schemeId: 1362,
            schemeName: "Invesco India Arbi -G",
            schemeAUM: 0.582169434058293,
            isManaged: false,
            risk: 0.81,
            return: 6.2,
            color: null
          },
          {
            schemeId: 1363,
            schemeName: "Invesco India Dynamic Equity -G",
            schemeAUM: 0.4424834942031157,
            isManaged: false,
            risk: 6.45,
            return: -3.79,
            color: null
          },
          {
            schemeId: 1364,
            schemeName: "SBI Arbi Opp -Reg-G",
            schemeAUM: 0.17579517201929806,
            isManaged: false,
            risk: 0.93,
            return: 6.66,
            color: null
          },
          {
            schemeId: 1365,
            schemeName: "SBI Equity Hybrid -Reg-D",
            schemeAUM: 0.2637677340537057,
            isManaged: false,
            risk: 7.81,
            return: 0.95,
            color: null
          },
          {
            schemeId: 1366,
            schemeName: "SBI Debt Hybrid -G",
            schemeAUM: 0.49451792990689714,
            isManaged: false,
            risk: 3.28,
            return: 3.98,
            color: null
          },
          {
            schemeId: 1367,
            schemeName: "SBI Multi AAF-Reg-G",
            schemeAUM: 0.04925360601384132,
            isManaged: false,
            risk: 4.2,
            return: 5.13,
            color: null
          },
          {
            schemeId: 1368,
            schemeName: "Sundaram Equity Hybrid -App",
            schemeAUM: 0.8499631488599424,
            isManaged: false,
            risk: 7.69,
            return: -3.58,
            color: null
          },
          {
            schemeId: 1369,
            schemeName: "Sundaram Debt Oriented Hybrid -G",
            schemeAUM: 0.11551115318164351,
            isManaged: false,
            risk: 5.98,
            return: -4.03,
            color: null
          },
          {
            schemeId: 1370,
            schemeName: "Tata Hybrid Equity -G",
            schemeAUM: 0.8981104055128419,
            isManaged: false,
            risk: 8.5,
            return: -4.07,
            color: null
          },
          {
            schemeId: 1371,
            schemeName: "Tata Equity Savings -Reg-G",
            schemeAUM: 0.6360713665733142,
            isManaged: false,
            risk: 3.86,
            return: 1.95,
            color: null
          },
          {
            schemeId: 1372,
            schemeName: "UTI Hybrid Equity -Reg-G",
            schemeAUM: 0.03889278266389229,
            isManaged: false,
            risk: 8.95,
            return: -9.43,
            color: null
          },
          {
            schemeId: 1373,
            schemeName: "UTI Reg Savings -G",
            schemeAUM: 0.39396724848880726,
            isManaged: false,
            risk: 3.93,
            return: -1.73,
            color: null
          },
          {
            schemeId: 1374,
            schemeName: "UTI Arbi -Reg-G",
            schemeAUM: 0.34825053253949445,
            isManaged: false,
            risk: 0.84,
            return: 6.77,
            color: null
          },
          {
            schemeId: 1375,
            schemeName: "UTI ULIP",
            schemeAUM: 0.6241988699013798,
            isManaged: false,
            risk: 5.68,
            return: -9.76,
            color: null
          },
          {
            schemeId: 1376,
            schemeName: "Axis Triple Adv -G",
            schemeAUM: 0.4865098867558617,
            isManaged: false,
            risk: 8,
            return: -0.65,
            color: null
          },
          {
            schemeId: 1377,
            schemeName: "L&T Dynamic Equity -Reg-G",
            schemeAUM: 0.8934271372695797,
            isManaged: false,
            risk: 3.61,
            return: 1.26,
            color: null
          },
          {
            schemeId: 1378,
            schemeName: "L&T Hybrid Equity -Reg-G",
            schemeAUM: 0.702772518541501,
            isManaged: false,
            risk: 8.26,
            return: -6.61,
            color: null
          },
          {
            schemeId: 1379,
            schemeName: "Essel 3 in 1 -G",
            schemeAUM: 0.9816727247408501,
            isManaged: false,
            risk: 4.71,
            return: 0.54,
            color: null
          },
          {
            schemeId: 1380,
            schemeName: "UTI Multi Asset -Reg-G",
            schemeAUM: 0.004833732547794067,
            isManaged: false,
            risk: 5.29,
            return: -3.37,
            color: null
          },
          {
            schemeId: 1381,
            schemeName: "Axis Hybrid -5-Reg-G",
            schemeAUM: 0.989297154913906,
            isManaged: false,
            risk: 3.99,
            return: 2.65,
            color: null
          },
          {
            schemeId: 1382,
            schemeName: "Axis Hybrid -6-Reg-G",
            schemeAUM: 0.8362271983294163,
            isManaged: false,
            risk: 3.94,
            return: 2.73,
            color: null
          },
          {
            schemeId: 1383,
            schemeName: "Axis Hybrid -7-Reg-G",
            schemeAUM: 0.9658171964978697,
            isManaged: false,
            risk: 3.86,
            return: 2.78,
            color: null
          },
          {
            schemeId: 1384,
            schemeName: "Shriram Hybrid Equity -Reg-G",
            schemeAUM: 0.5364555904961894,
            isManaged: false,
            risk: 7.31,
            return: -4.84,
            color: null
          },
          {
            schemeId: 1385,
            schemeName: "DSP Dynamic AAF-Reg-G",
            schemeAUM: 0.13544837980303193,
            isManaged: false,
            risk: 2.38,
            return: 3.98,
            color: null
          },
          {
            schemeId: 1386,
            schemeName: "BOI AXA Equity Debt Rebalancer -Reg-G",
            schemeAUM: 0.2514105940458491,
            isManaged: false,
            risk: 6.27,
            return: -10.39,
            color: null
          },
          {
            schemeId: 1387,
            schemeName: "Edelweiss Arbi -Reg-G",
            schemeAUM: 0.9349156085634085,
            isManaged: false,
            risk: 0.89,
            return: 6.6,
            color: null
          },
          {
            schemeId: 1388,
            schemeName: "Edelweiss Multi-AAF-Reg-G",
            schemeAUM: 0.24220163423599894,
            isManaged: false,
            risk: 7.98,
            return: -4.21,
            color: null
          },
          {
            schemeId: 1389,
            schemeName: "HDFC Arbi -Wholesale-G",
            schemeAUM: 0.3218180552149732,
            isManaged: false,
            risk: 0.82,
            return: 6.27,
            color: null
          },
          {
            schemeId: 1390,
            schemeName: "L&T Arbi Opp -Reg-G",
            schemeAUM: 0.011066488323541845,
            isManaged: false,
            risk: 0.88,
            return: 6.4,
            color: null
          },
          {
            schemeId: 1391,
            schemeName: "DHFL Pramerica Arbi -Reg-G",
            schemeAUM: 0.20601205716041648,
            isManaged: false,
            risk: 0.98,
            return: 6.06,
            color: null
          },
          {
            schemeId: 1392,
            schemeName: "Axis Arbi -Reg-G",
            schemeAUM: 0.6671221985614726,
            isManaged: false,
            risk: 0.89,
            return: 6.38,
            color: null
          },
          {
            schemeId: 1393,
            schemeName: "ICICI Prudential Multiple Yield -7-C-Cum",
            schemeAUM: 0.19119711896875713,
            isManaged: false,
            risk: 2.55,
            return: 3.66,
            color: null
          },
          {
            schemeId: 1394,
            schemeName: "ICICI Prudential Multiple Yield -7-E-Cum",
            schemeAUM: 0.9047093976433553,
            isManaged: false,
            risk: 2.55,
            return: 4.2,
            color: null
          },
          {
            schemeId: 1395,
            schemeName: "IDFC Dynamic Equity -Reg-G",
            schemeAUM: 0.20172868892647866,
            isManaged: false,
            risk: 5.86,
            return: -2.4,
            color: null
          },
          {
            schemeId: 1396,
            schemeName: "Edelweiss Equity Savings -Reg-G",
            schemeAUM: 0.6013950471717189,
            isManaged: false,
            risk: 3.2,
            return: 1.3,
            color: null
          },
          {
            schemeId: 1397,
            schemeName: "Kotak Equity Savings -G",
            schemeAUM: 0.36430871070930726,
            isManaged: false,
            risk: 3.07,
            return: 1.8,
            color: null
          },
          {
            schemeId: 1398,
            schemeName: "ICICI Prudential Multiple Yield -8-A-Cum",
            schemeAUM: 0.2413973777911933,
            isManaged: false,
            risk: 2.5,
            return: 4.27,
            color: null
          },
          {
            schemeId: 1399,
            schemeName: "Indiabulls Arbi -Reg-G",
            schemeAUM: 0.3998231827260452,
            isManaged: false,
            risk: 0.94,
            return: 6.28,
            color: null
          },
          {
            schemeId: 1400,
            schemeName: "ICICI Prudential Equity Savings -Cum",
            schemeAUM: 0.5559441841354125,
            isManaged: false,
            risk: 3.07,
            return: 5.49,
            color: null
          },
          {
            schemeId: 1401,
            schemeName: "ICICI Prudential Multiple Yield -8-D-Cum",
            schemeAUM: 0.545833634072783,
            isManaged: false,
            risk: 2.69,
            return: 4.47,
            color: null
          },
          {
            schemeId: 1402,
            schemeName: "ICICI Prudential CPOF VII-D-1822 D-Cum",
            schemeAUM: 0.4727215156560707,
            isManaged: false,
            risk: 2.68,
            return: 3.66,
            color: null
          },
          {
            schemeId: 1403,
            schemeName: "SBI Dynamic AAF-Reg-G",
            schemeAUM: 0.2040037841187039,
            isManaged: false,
            risk: 4.13,
            return: -1.93,
            color: null
          },
          {
            schemeId: 1404,
            schemeName: "Reliance Equity Savings -G",
            schemeAUM: 0.9835631507289444,
            isManaged: false,
            risk: 5.36,
            return: -6.78,
            color: null
          },
          {
            schemeId: 1405,
            schemeName: "SBI Equity Savings -Reg-G",
            schemeAUM: 0.15325545183535594,
            isManaged: false,
            risk: 5.13,
            return: -0.45,
            color: null
          },
          {
            schemeId: 1406,
            schemeName: "ICICI Prudential CPOF IX-D-1378 D-Cum",
            schemeAUM: 0.8691619645987656,
            isManaged: false,
            risk: 1.97,
            return: 4.86,
            color: null
          },
          {
            schemeId: 1407,
            schemeName: "ICICI Prudential Multiple Yield -10-B-Cum",
            schemeAUM: 0.9128989055918388,
            isManaged: false,
            risk: 2.19,
            return: 6.98,
            color: null
          },
          {
            schemeId: 1408,
            schemeName: "Axis Hybrid -30-Reg-G",
            schemeAUM: 0.008162642429297096,
            isManaged: false,
            risk: 8.19,
            return: 2.68,
            color: null
          },
          {
            schemeId: 1409,
            schemeName: "DSP Equity Savings -Reg-G",
            schemeAUM: 0.4388415347545067,
            isManaged: false,
            risk: 4.93,
            return: -2.45,
            color: null
          },
          {
            schemeId: 1410,
            schemeName: "ICICI Prudential CPOF IX-E-1325 D-Cum",
            schemeAUM: 0.45950925717493196,
            isManaged: false,
            risk: 1.99,
            return: 4.93,
            color: null
          },
          {
            schemeId: 1411,
            schemeName: "ICICI Prudential CPOF X-A-1235 D-Cum",
            schemeAUM: 0.10888864010791988,
            isManaged: false,
            risk: 1.51,
            return: 4.91,
            color: null
          },
          {
            schemeId: 1412,
            schemeName: "Principal Arbi -G",
            schemeAUM: 0.6429534903052776,
            isManaged: false,
            risk: 3.13,
            return: -1.35,
            color: null
          },
          {
            schemeId: 1413,
            schemeName: "Reliance Dual Adv Fixed Tenure  IX-D-1292 D-G",
            schemeAUM: 0.06322463571197101,
            isManaged: false,
            risk: 3.26,
            return: 2.76,
            color: null
          },
          {
            schemeId: 1414,
            schemeName: "Sundaram CPOF-5 Y-7-G",
            schemeAUM: 0.26187181088193845,
            isManaged: false,
            risk: 2.92,
            return: 5.73,
            color: null
          },
          {
            schemeId: 1415,
            schemeName: "Sundaram CPOF-5 Y-8-G",
            schemeAUM: 0.8088110220477207,
            isManaged: false,
            risk: 2.98,
            return: 5.67,
            color: null
          },
          {
            schemeId: 1416,
            schemeName: "Sundaram Hybrid -- O-Reg-G",
            schemeAUM: 0.30781683455536335,
            isManaged: false,
            risk: 2.17,
            return: 5.38,
            color: null
          },
          {
            schemeId: 1417,
            schemeName: "Sundaram Hybrid -- P-Reg-G",
            schemeAUM: 0.6963480950811782,
            isManaged: false,
            risk: 2.19,
            return: 5.62,
            color: null
          },
          {
            schemeId: 1418,
            schemeName: "UTI Cap Protection Oriented -VII-II (1281 D)-G",
            schemeAUM: 0.31499787241960187,
            isManaged: false,
            risk: 1.94,
            return: 1.91,
            color: null
          },
          {
            schemeId: 1419,
            schemeName: "UTI Cap Protection Oriented -VII-III (1279 D)-G",
            schemeAUM: 0.9123466068114132,
            isManaged: false,
            risk: 1.74,
            return: 2.99,
            color: null
          },
          {
            schemeId: 1420,
            schemeName: "UTI Cap Protection Oriented -VII-IV (1278 D)-G",
            schemeAUM: 0.615684287944757,
            isManaged: false,
            risk: 1.38,
            return: 4.02,
            color: null
          },
          {
            schemeId: 1421,
            schemeName: "UTI Cap Protection Oriented -VII-V (1281 D)-G",
            schemeAUM: 0.29980030314888495,
            isManaged: false,
            risk: 1.47,
            return: 3.7,
            color: null
          },
          {
            schemeId: 1422,
            schemeName: "UTI Dual Adv FT -III-I-G",
            schemeAUM: 0.4626861397705109,
            isManaged: false,
            risk: 6.48,
            return: -7.47,
            color: null
          },
          {
            schemeId: 1423,
            schemeName: "UTI Dual Adv FT -II-V-G",
            schemeAUM: 0.912967184305713,
            isManaged: false,
            risk: 6.56,
            return: -8.1,
            color: null
          },
          {
            schemeId: 1424,
            schemeName: "ICICI Prudential CPOF X-B-1375 D-Cum",
            schemeAUM: 0.624676942883903,
            isManaged: false,
            risk: 1.68,
            return: 5.75,
            color: null
          },
          {
            schemeId: 1425,
            schemeName: "BOI AXA Mid & Small Cap Equity & Debt -Reg-G",
            schemeAUM: 0.05994182501035783,
            isManaged: false,
            risk: 10.4,
            return: -22.55,
            color: null
          },
          {
            schemeId: 1426,
            schemeName: "UTI Dual Adv FT -III-II-G",
            schemeAUM: 0.8802576595523155,
            isManaged: false,
            risk: 5.56,
            return: -4.34,
            color: null
          },
          {
            schemeId: 1427,
            schemeName: "Axis Hybrid -31-Reg-G",
            schemeAUM: 0.2708274923867042,
            isManaged: false,
            risk: 9.8,
            return: -10.82,
            color: null
          },
          {
            schemeId: 1428,
            schemeName: "Axis Hybrid -32-Reg-G",
            schemeAUM: 0.11107441428509057,
            isManaged: false,
            risk: 9.55,
            return: -10.19,
            color: null
          },
          {
            schemeId: 1429,
            schemeName: "ICICI Prudential Multiple Yield -11-A-Cum",
            schemeAUM: 0.1879791510962605,
            isManaged: false,
            risk: 1.94,
            return: 6.21,
            color: null
          },
          {
            schemeId: 1430,
            schemeName: "Reliance Dual Adv Fixed Tenure  IX-E-1151 D-G",
            schemeAUM: 0.03123368861044007,
            isManaged: false,
            risk: 8.92,
            return: 2.95,
            color: null
          },
          {
            schemeId: 1431,
            schemeName: "Reliance Dual Adv Fixed Tenure  IX-F-1150 D-G",
            schemeAUM: 0.2005608103761991,
            isManaged: false,
            risk: 3.07,
            return: 2.49,
            color: null
          },
          {
            schemeId: 1432,
            schemeName: "UTI Cap Protection Oriented -VIII-I (1278 D)-G",
            schemeAUM: 0.9296546994389252,
            isManaged: false,
            risk: 1.64,
            return: 4.02,
            color: null
          },
          {
            schemeId: 1433,
            schemeName: "Axis Hybrid -33-Reg-G",
            schemeAUM: 0.9721785962082137,
            isManaged: false,
            risk: 10.21,
            return: -10.44,
            color: null
          },
          {
            schemeId: 1434,
            schemeName: "Canara Robeco CPOF-7-Reg-G",
            schemeAUM: 0.8391807991027689,
            isManaged: false,
            risk: 1.2,
            return: 5.74,
            color: null
          },
          {
            schemeId: 1435,
            schemeName: "HDFC Dual Adv -III-1304 D-Aug 2016-Reg-G",
            schemeAUM: 0.2222802745299417,
            isManaged: false,
            risk: 1.4,
            return: 5.26,
            color: null
          },
          {
            schemeId: 1436,
            schemeName: "ICICI Prudential Multiple Yield -11-B-Cum",
            schemeAUM: 0.7886120266373164,
            isManaged: false,
            risk: 2.03,
            return: 5.15,
            color: null
          },
          {
            schemeId: 1437,
            schemeName: "ICICI Prudential Multiple Yield -11-C-Cum",
            schemeAUM: 0.48236161958143775,
            isManaged: false,
            risk: 1.82,
            return: 5.04,
            color: null
          },
          {
            schemeId: 1438,
            schemeName: "Motilal Oswal Dynamic -Reg-G",
            schemeAUM: 0.6858006851080929,
            isManaged: false,
            risk: 5.67,
            return: -1.13,
            color: null
          },
          {
            schemeId: 1439,
            schemeName: "SBI Dual Adv -XVII-Reg-G",
            schemeAUM: 0.8459216413950188,
            isManaged: false,
            risk: 1.34,
            return: 5.55,
            color: null
          },
          {
            schemeId: 1440,
            schemeName: "UTI Cap Protection Oriented -VIII-II (1831 D)-G",
            schemeAUM: 0.2695996994638674,
            isManaged: false,
            risk: 2.73,
            return: 4.22,
            color: null
          },
          {
            schemeId: 1441,
            schemeName: "UTI Cap Protection Oriented -VIII-III (1281 D)-G",
            schemeAUM: 0.33464655658648623,
            isManaged: false,
            risk: 1.38,
            return: 4.33,
            color: null
          },
          {
            schemeId: 1442,
            schemeName: "ICICI Prudential CPOF XI-A-2056 D-Cum",
            schemeAUM: 0.14052405363773213,
            isManaged: false,
            risk: 2.61,
            return: 7.23,
            color: null
          },
          {
            schemeId: 1443,
            schemeName: "ICICI Prudential Multiple Yield -11-D-Cum",
            schemeAUM: 0.6800701433297673,
            isManaged: false,
            risk: 1.76,
            return: 5.52,
            color: null
          },
          {
            schemeId: 1444,
            schemeName: "ICICI Prudential CPOF XI-B-1222 D-Cum",
            schemeAUM: 0.8711706785929725,
            isManaged: false,
            risk: 1.38,
            return: 5.79,
            color: null
          },
          {
            schemeId: 1445,
            schemeName: "Mahindra Dhan Sanchay Equity Savings Yojana-Reg-G",
            schemeAUM: 0.9816089320640395,
            isManaged: false,
            risk: 5.69,
            return: 0.02,
            color: null
          },
          {
            schemeId: 1446,
            schemeName: "Union CPOF-7-Reg-G",
            schemeAUM: 0.8973270365833639,
            isManaged: false,
            risk: 8.06,
            return: -2.62,
            color: null
          },
          {
            schemeId: 1447,
            schemeName: "SBI Dual Adv -XIX-Reg-G",
            schemeAUM: 0.22520615502903918,
            isManaged: false,
            risk: 2.07,
            return: 5.2,
            color: null
          },
          {
            schemeId: 1448,
            schemeName: "Reliance Dual Adv Fixed Tenure  X-A-1370 D-G",
            schemeAUM: 0.27566630882639465,
            isManaged: false,
            risk: 3.33,
            return: 3.16,
            color: null
          },
          {
            schemeId: 1449,
            schemeName: "UTI Cap Protection Oriented -VIII-IV (1996 D)-G",
            schemeAUM: 0.7091258516238055,
            isManaged: false,
            risk: 1.97,
            return: 5.3,
            color: null
          },
          {
            schemeId: 1450,
            schemeName: "Reliance Dual Adv Fixed Tenure  X-B-1339 D-G",
            schemeAUM: 0.9644417790669098,
            isManaged: false,
            risk: 3.26,
            return: 3.24,
            color: null
          },
          {
            schemeId: 1451,
            schemeName: "Reliance Dual Adv Fixed Tenure  X-F-1355 D-G",
            schemeAUM: 0.33371437620827904,
            isManaged: false,
            risk: 3.13,
            return: 3.69,
            color: null
          },
          {
            schemeId: 1452,
            schemeName: "UTI Dual Adv FT -IV-II-G",
            schemeAUM: 0.8005068820888479,
            isManaged: false,
            risk: 1.21,
            return: 5.24,
            color: null
          },
          {
            schemeId: 1453,
            schemeName: "UTI Dual Adv FT -IV-III-G",
            schemeAUM: 0.3837580661019184,
            isManaged: false,
            risk: 1.24,
            return: 5.78,
            color: null
          },
          {
            schemeId: 1454,
            schemeName: "BNP Paribas Arbi -Reg-G",
            schemeAUM: 0.5623673354946994,
            isManaged: false,
            risk: 1.01,
            return: 6.36,
            color: null
          },
          {
            schemeId: 1455,
            schemeName: "DSP Dual Adv -49-42M-Reg-G",
            schemeAUM: 0.19978915105399708,
            isManaged: false,
            risk: 2.41,
            return: 3.58,
            color: null
          },
          {
            schemeId: 1456,
            schemeName: "Axis Hybrid -35-Reg-G",
            schemeAUM: 0.2996559070385165,
            isManaged: false,
            risk: 8.96,
            return: -9.01,
            color: null
          },
          {
            schemeId: 1457,
            schemeName: "UTI Dual Adv FT -IV-I-G",
            schemeAUM: 0.9117340552402784,
            isManaged: false,
            risk: 1.56,
            return: 4.85,
            color: null
          },
          {
            schemeId: 1458,
            schemeName: "SBI Dual Adv -XVIII-Reg-G",
            schemeAUM: 0.3090807100795969,
            isManaged: false,
            risk: 3.79,
            return: -1.53,
            color: null
          },
          {
            schemeId: 1459,
            schemeName: "Reliance Dual Adv Fixed Tenure  X-C-1318 D-G",
            schemeAUM: 0.6067762659757652,
            isManaged: false,
            risk: 3.32,
            return: 3.25,
            color: null
          },
          {
            schemeId: 1460,
            schemeName: "Reliance Dual Adv Fixed Tenure  X-D-1311 D-G",
            schemeAUM: 0.7165127262257116,
            isManaged: false,
            risk: 3.23,
            return: 3.27,
            color: null
          },
          {
            schemeId: 1461,
            schemeName: "Reliance Dual Adv Fixed Tenure  X-E-1100 D-G",
            schemeAUM: 0.6910395160652008,
            isManaged: false,
            risk: 3.15,
            return: 2.83,
            color: null
          },
          {
            schemeId: 1462,
            schemeName: "HDFC Dual Adv -III-1267 D-Oct 2016-Reg-G",
            schemeAUM: 0.7504433130809047,
            isManaged: false,
            risk: 1.42,
            return: 5.34,
            color: null
          },
          {
            schemeId: 1463,
            schemeName: "HDFC Dual Adv -III-1224 D-Nov 2016-Reg-G",
            schemeAUM: 0.11503783341077445,
            isManaged: false,
            risk: 1.42,
            return: 5.34,
            color: null
          },
          {
            schemeId: 1464,
            schemeName: "IDBI Hybrid Equity -G",
            schemeAUM: 0.23660003758542225,
            isManaged: false,
            risk: 8.84,
            return: -13.06,
            color: null
          },
          {
            schemeId: 1465,
            schemeName: "IDFC Hybrid Equity -Reg-G",
            schemeAUM: 0.5353674483176918,
            isManaged: false,
            risk: 8.2,
            return: -9.05,
            color: null
          },
          {
            schemeId: 1466,
            schemeName: "ICICI Prudential CPOF XI-C-1255 D-Cum",
            schemeAUM: 0.5173424714827362,
            isManaged: false,
            risk: 1.47,
            return: 6.63,
            color: null
          },
          {
            schemeId: 1467,
            schemeName: "ICICI Prudential CPOF XI-D-1247 D-Cum",
            schemeAUM: 0.9757690377130093,
            isManaged: false,
            risk: 1.49,
            return: 5.94,
            color: null
          },
          {
            schemeId: 1468,
            schemeName: "UTI Dual Adv FT -IV-IV-G",
            schemeAUM: 0.12948374292790144,
            isManaged: false,
            risk: 1.56,
            return: 7.94,
            color: null
          },
          {
            schemeId: 1469,
            schemeName: "DHFL Pramerica Dual Adv -1-Reg-G",
            schemeAUM: 0.9109008544447141,
            isManaged: false,
            risk: 5.56,
            return: -2.03,
            color: null
          },
          {
            schemeId: 1470,
            schemeName: "HDFC Charity  for Cancer Cure-Arbi-Reg-50% DDO",
            schemeAUM: 0.4842340591780181,
            isManaged: false,
            risk: 1.61,
            return: 7.7,
            color: null
          },
          {
            schemeId: 1471,
            schemeName: "HDFC Charity  for Cancer Cure-Debt-Reg-50% DDO",
            schemeAUM: 0.7985489809288051,
            isManaged: false,
            risk: 1.4,
            return: 6.9,
            color: null
          },
          {
            schemeId: 1472,
            schemeName: "BNP Paribas Substantial Equity Hybrid -Reg-G",
            schemeAUM: 0.7866069668748341,
            isManaged: false,
            risk: 8.31,
            return: 0.68,
            color: null
          },
          {
            schemeId: 1473,
            schemeName: "ICICI Prudential CPOF XI-E-1222 D-Cum",
            schemeAUM: 0.16774656612657202,
            isManaged: false,
            risk: 1.35,
            return: 6.82,
            color: null
          },
          {
            schemeId: 1474,
            schemeName: "Reliance Dual Adv Fixed Tenure  XI-A-1167 D-G",
            schemeAUM: 0.594383774106259,
            isManaged: false,
            risk: 2.98,
            return: 3.7,
            color: null
          },
          {
            schemeId: 1475,
            schemeName: "Sundaram Hybrid -- U-Reg-G",
            schemeAUM: 0.03498312559536432,
            isManaged: false,
            risk: 2.69,
            return: 6.08,
            color: null
          },
          {
            schemeId: 1476,
            schemeName: "UTI Cap Protection Oriented -IX-I (1467 D)-G",
            schemeAUM: 0.39195382061451767,
            isManaged: false,
            risk: 1.31,
            return: 6.11,
            color: null
          },
          {
            schemeId: 1477,
            schemeName: "Axis Equity Adv -1-Reg-G",
            schemeAUM: 0.6394676934426349,
            isManaged: false,
            risk: 8.19,
            return: -3.2,
            color: null
          },
          {
            schemeId: 1478,
            schemeName: "UTI Cap Protection Oriented -IX-II (1462 D)-G",
            schemeAUM: 0.0011853909509094152,
            isManaged: false,
            risk: 1.42,
            return: 6.48,
            color: null
          },
          {
            schemeId: 1479,
            schemeName: "Canara Robeco CPOF-8-Reg-G",
            schemeAUM: 0.6607290556936787,
            isManaged: false,
            risk: 1.43,
            return: 5.96,
            color: null
          },
          {
            schemeId: 1480,
            schemeName: "ICICI Prudential CPOF XII-A-1168 D-Cum",
            schemeAUM: 0.9546802477227467,
            isManaged: false,
            risk: 1.49,
            return: 7.32,
            color: null
          },
          {
            schemeId: 1481,
            schemeName: "Reliance Dual Adv Fixed Tenure  XI-B-1128 D-G",
            schemeAUM: 0.9967722457008636,
            isManaged: false,
            risk: 2.89,
            return: 3.88,
            color: null
          },
          {
            schemeId: 1482,
            schemeName: "SBI Dual Adv -XXII-Reg-G",
            schemeAUM: 0.5680911066737431,
            isManaged: false,
            risk: 3.63,
            return: -1.36,
            color: null
          },
          {
            schemeId: 1483,
            schemeName: "UTI Cap Protection Oriented -IX-III (1389 D)-G",
            schemeAUM: 0.8095045841648285,
            isManaged: false,
            risk: 1.43,
            return: 6.5,
            color: null
          },
          {
            schemeId: 1484,
            schemeName: "UTI Dual Adv FT -V-I-G",
            schemeAUM: 0.7499880649461563,
            isManaged: false,
            risk: 1.08,
            return: 5.37,
            color: null
          },
          {
            schemeId: 1485,
            schemeName: "Axis Dynamic Equity -Reg-G",
            schemeAUM: 0.6554329204642313,
            isManaged: false,
            risk: 5.26,
            return: -2.52,
            color: null
          },
          {
            schemeId: 1486,
            schemeName: "Reliance Dual Adv Fixed Tenure  XI-D-1341 D-G",
            schemeAUM: 0.16182126912524253,
            isManaged: false,
            risk: 2.93,
            return: 4.06,
            color: null
          },
          {
            schemeId: 1487,
            schemeName: "Axis Equity Adv -2-Reg-G",
            schemeAUM: 0.128909550445526,
            isManaged: false,
            risk: 8.04,
            return: -1.68,
            color: null
          },
          {
            schemeId: 1488,
            schemeName: "Union CPOF-8-Reg-G",
            schemeAUM: 0.38401990110661055,
            isManaged: false,
            risk: 11.55,
            return: -1.34,
            color: null
          },
          {
            schemeId: 1489,
            schemeName: "Reliance Dual Adv Fixed Tenure  XI-C-1372 D-G",
            schemeAUM: 0.855297994676171,
            isManaged: false,
            risk: 2.83,
            return: 4.14,
            color: null
          },
          {
            schemeId: 1490,
            schemeName: "SBI Dual Adv -XXIII-Reg-G",
            schemeAUM: 0.43469987434910795,
            isManaged: false,
            risk: 3.13,
            return: -0.04,
            color: null
          },
          {
            schemeId: 1491,
            schemeName: "SBI Dual Adv -XXIV-Reg-G",
            schemeAUM: 0.9665645671997172,
            isManaged: false,
            risk: 2.12,
            return: 5.61,
            color: null
          },
          {
            schemeId: 1492,
            schemeName: "ICICI Prudential CPOF XII-C-1270 D-Cum",
            schemeAUM: 0.4415978087135588,
            isManaged: false,
            risk: 1.75,
            return: 5.61,
            color: null
          },
          {
            schemeId: 1493,
            schemeName: "Reliance Dual Adv Fixed Tenure  XI-E-1301 D-G",
            schemeAUM: 0.8358164222519862,
            isManaged: false,
            risk: 2.94,
            return: 3.94,
            color: null
          },
          {
            schemeId: 1494,
            schemeName: "SBI Dual Adv -XXV-Reg-G",
            schemeAUM: 0.4729748805406082,
            isManaged: false,
            risk: 2.14,
            return: 5.5,
            color: null
          },
          {
            schemeId: 1495,
            schemeName: "Union Balanced Adv -Reg-G",
            schemeAUM: 0.7475786300164438,
            isManaged: false,
            risk: 3.96,
            return: 3.31,
            color: null
          },
          {
            schemeId: 1496,
            schemeName: "Reliance Dual Adv Fixed Tenure  XII-A-1218 D-G",
            schemeAUM: 0.33049411463174505,
            isManaged: false,
            risk: 2.45,
            return: 3.82,
            color: null
          },
          {
            schemeId: 1497,
            schemeName: "DSP Arbi -Reg-G",
            schemeAUM: 0.5365344745227116,
            isManaged: false,
            risk: 0.97,
            return: 6.78,
            color: null
          },
          {
            schemeId: 1498,
            schemeName: "SBI Dual Adv -XXVI-Reg-G",
            schemeAUM: 0.9373297925151807,
            isManaged: false,
            risk: 2.14,
            return: 5.48,
            color: null
          },
          {
            schemeId: 1499,
            schemeName: "ICICI Prudential Multiple Yield -14-A-Cum",
            schemeAUM: 0.014488386505455253,
            isManaged: false,
            risk: 1.62,
            return: 7.59,
            color: null
          },
          {
            schemeId: 1500,
            schemeName: "Canara Robeco CPOF-9-Reg-G",
            schemeAUM: 0.3901884032571812,
            isManaged: false,
            risk: 1.61,
            return: 7.01,
            color: null
          },
          {
            schemeId: 1501,
            schemeName: "SBI Dual Adv -XXVII-Reg-G",
            schemeAUM: 0.21052078422941123,
            isManaged: false,
            risk: 2.12,
            return: 5.33,
            color: null
          },
          {
            schemeId: 1502,
            schemeName: "UTI Cap Protection Oriented -X-II (1134 D)-G",
            schemeAUM: 0.2312764437867143,
            isManaged: false,
            risk: 1.31,
            return: 6.47,
            color: null
          },
          {
            schemeId: 1503,
            schemeName: "Essel Equity Hybrid -Reg-G",
            schemeAUM: 0.009017354166069191,
            isManaged: false,
            risk: 8.49,
            return: -2.92,
            color: null
          },
          {
            schemeId: 1504,
            schemeName: "IIFL Cap Enhancer -1-Reg-G",
            schemeAUM: 0.038516782526529125,
            isManaged: false,
            risk: 8.34,
            return: -6.24,
            color: null
          },
          {
            schemeId: 1505,
            schemeName: "Canara Robeco Dual Adv -1-Reg-G",
            schemeAUM: 0.9400284268039929,
            isManaged: false,
            risk: 3.45,
            return: 3.93,
            color: null
          },
          {
            schemeId: 1506,
            schemeName: "SBI Dual Adv -XXVIII-Reg-G",
            schemeAUM: 0.6208346372422386,
            isManaged: false,
            risk: 2.16,
            return: 5.73,
            color: null
          },
          {
            schemeId: 1507,
            schemeName: "BOI AXA Arbi -Reg-G",
            schemeAUM: 0.5257133137777565,
            isManaged: false,
            risk: 0.94,
            return: 5.99,
            color: null
          },
          {
            schemeId: 1508,
            schemeName: "Invesco India Equity & Bond -Reg-G",
            schemeAUM: 0.5984017258942202,
            isManaged: false,
            risk: 8.11,
            return: -4.73,
            color: null
          },
          {
            schemeId: 1509,
            schemeName: "SBI Dual Adv -XXIX-Reg-G",
            schemeAUM: 0.22989560919723862,
            isManaged: false,
            risk: 2.09,
            return: 5.29,
            color: null
          },
          {
            schemeId: 1510,
            schemeName: "Union Equity Savings -Reg-G",
            schemeAUM: 0.23575110719108872,
            isManaged: false,
            risk: 2.35,
            return: 4.28,
            color: null
          },
          {
            schemeId: 1511,
            schemeName: "Axis Equity Hybrid -Reg-G",
            schemeAUM: 0.7976419677472653,
            isManaged: false,
            risk: 7.64,
            return: 0.5,
            color: null
          },
          {
            schemeId: 1512,
            schemeName: "Axis Equity Saver -Reg-G",
            schemeAUM: 0.18098436213933455,
            isManaged: false,
            risk: 4.96,
            return: 0.55,
            color: null
          },
          {
            schemeId: 1513,
            schemeName: "UTI Dual Adv FT -II-I-G",
            schemeAUM: 0.8276654712520712,
            isManaged: false,
            risk: 6.18,
            return: -8.75,
            color: null
          },
          {
            schemeId: 1514,
            schemeName: "UTI Dual Adv FT -II-II-G",
            schemeAUM: 0.3329289744428108,
            isManaged: false,
            risk: 7.46,
            return: -10.47,
            color: null
          },
          {
            schemeId: 1515,
            schemeName: "UTI Dual Adv FT -II-III-G",
            schemeAUM: 0.13837655154896567,
            isManaged: false,
            risk: 3.59,
            return: 0.63,
            color: null
          },
          {
            schemeId: 1516,
            schemeName: "Indiabulls Savings  Inc -Reg-G",
            schemeAUM: 0.2470314844599646,
            isManaged: false,
            risk: 2.39,
            return: 2.85,
            color: null
          },
          {
            schemeId: 1517,
            schemeName: "ICICI Prudential Multiple Yield -10-A-Cum",
            schemeAUM: 0.17368891097293893,
            isManaged: false,
            risk: 2.74,
            return: 5.47,
            color: null
          },
          {
            schemeId: 1518,
            schemeName: "UTI Dual Adv FT -II-IV-G",
            schemeAUM: 0.15941753774685563,
            isManaged: false,
            risk: 3.53,
            return: 1.59,
            color: null
          }
        ]
      },
      {
        assetId: 4,
        assetName: "Commodity",
        AUM: {
          minAUM: 10,
          maxAUM: 100
        },
        numberOfSchemesManaged: 0,
        color: "rgba(23, 83, 83, .5)",
        schemes: [
          {
            schemeId: 1519,
            schemeName: "Axis Gold Exchange Traded ",
            schemeAUM: 0.12526907243743346,
            isManaged: false,
            risk: 9.75,
            return: 29.67,
            color: null
          },
          {
            schemeId: 1520,
            schemeName: "Axis Gold -G",
            schemeAUM: 0.7254724136560016,
            isManaged: false,
            risk: 10.1,
            return: 24.38,
            color: null
          },
          {
            schemeId: 1521,
            schemeName: "Aditya Birla Sun Life Gold ETF",
            schemeAUM: 0.21455272253215107,
            isManaged: false,
            risk: 9.93,
            return: 30.06,
            color: null
          },
          {
            schemeId: 1522,
            schemeName: "Aditya Birla Sun Life Gold -G",
            schemeAUM: 0.18984493604063513,
            isManaged: false,
            risk: 15.49,
            return: 25.69,
            color: null
          },
          {
            schemeId: 1523,
            schemeName: "Canara Robeco Gold Exchange Traded ",
            schemeAUM: 0.614821863858567,
            isManaged: false,
            risk: 7.88,
            return: 26.45,
            color: null
          },
          {
            schemeId: 1524,
            schemeName: "Canara Robeco Gold Savings -Reg-G",
            schemeAUM: 0.971390406281033,
            isManaged: false,
            risk: 23.61,
            return: 22.13,
            color: null
          },
          {
            schemeId: 1525,
            schemeName: "DSP World Gold -Reg-G",
            schemeAUM: 0.656452990028831,
            isManaged: false,
            risk: 19.75,
            return: 46.37,
            color: null
          },
          {
            schemeId: 1526,
            schemeName: "Reliance ETF Gold BeES",
            schemeAUM: 0.23695473933457523,
            isManaged: false,
            risk: 9.51,
            return: 29.87,
            color: null
          },
          {
            schemeId: 1527,
            schemeName: "HDFC Gold Exchange Traded ",
            schemeAUM: 0.6909732630241023,
            isManaged: false,
            risk: 9.95,
            return: 29.85,
            color: null
          },
          {
            schemeId: 1528,
            schemeName: "HDFC Gold -G",
            schemeAUM: 0.15371492940350517,
            isManaged: false,
            risk: 9.26,
            return: 24.93,
            color: null
          },
          {
            schemeId: 1529,
            schemeName: "ICICI Prudential Gold ETF",
            schemeAUM: 0.2221272808517205,
            isManaged: false,
            risk: 9.94,
            return: 30.06,
            color: null
          },
          {
            schemeId: 1530,
            schemeName: "ICICI Prudential Reg Gold Savings -G",
            schemeAUM: 0.38606291884482125,
            isManaged: false,
            risk: 9.33,
            return: 23.93,
            color: null
          },
          {
            schemeId: 1531,
            schemeName: "IDBI Gold Exchange Traded ",
            schemeAUM: 0.9513462379164956,
            isManaged: false,
            risk: 9.56,
            return: 30.05,
            color: null
          },
          {
            schemeId: 1532,
            schemeName: "IDBI Gold -G",
            schemeAUM: 0.10567576174014559,
            isManaged: false,
            risk: 9.54,
            return: 28.27,
            color: null
          },
          {
            schemeId: 1533,
            schemeName: "Kotak Gold ETF",
            schemeAUM: 0.3694359912002725,
            isManaged: false,
            risk: 9.82,
            return: 30.18,
            color: null
          },
          {
            schemeId: 1534,
            schemeName: "Kotak Gold -G",
            schemeAUM: 0.033272302291835976,
            isManaged: false,
            risk: 10.42,
            return: 26.97,
            color: null
          },
          {
            schemeId: 1535,
            schemeName: "Kotak World Gold -G",
            schemeAUM: 0.9458068181840935,
            isManaged: false,
            risk: 20.97,
            return: 39.29,
            color: null
          },
          {
            schemeId: 1536,
            schemeName: "Quantum Gold  ETF",
            schemeAUM: 0.6483582702319239,
            isManaged: false,
            risk: 9.92,
            return: 29.99,
            color: null
          },
          {
            schemeId: 1537,
            schemeName: "Quantum Gold Saving -G-Dir",
            schemeAUM: 0.13341277371698967,
            isManaged: false,
            risk: 8.89,
            return: 25.43,
            color: null
          },
          {
            schemeId: 1538,
            schemeName: "Reliance Gold Savings -G",
            schemeAUM: 0.22278723066357586,
            isManaged: false,
            risk: 9.38,
            return: 24.6,
            color: null
          },
          {
            schemeId: 1539,
            schemeName: "Invesco India Gold Exchange Traded ",
            schemeAUM: 0.7432026441334276,
            isManaged: false,
            risk: 9.99,
            return: 30.23,
            color: null
          },
          {
            schemeId: 1540,
            schemeName: "Invesco India Gold -G",
            schemeAUM: 0.3197999999760559,
            isManaged: false,
            risk: 20.36,
            return: 23.86,
            color: null
          },
          {
            schemeId: 1541,
            schemeName: "SBI-ETF Gold",
            schemeAUM: 0.9704805723994459,
            isManaged: false,
            risk: 9.93,
            return: 30.03,
            color: null
          },
          {
            schemeId: 1542,
            schemeName: "SBI Gold -Reg-G",
            schemeAUM: 0.33994936880796844,
            isManaged: false,
            risk: 9.14,
            return: 25.51,
            color: null
          },
          {
            schemeId: 1543,
            schemeName: "UTI Gold Exchange Traded ",
            schemeAUM: 0.47146771465086923,
            isManaged: false,
            risk: 9.82,
            return: 30.24,
            color: null
          }
        ]
      },
      {
        assetId: 0,
        assetName: "Managed",
        AUM: {
          minAUM: 10,
          maxAUM: 100
        },
        numberOfSchemesManaged: 6,
        color: "rgba(255, 255, 255, 0.8)",
        schemes: [
          {
            schemeId: 861,
            schemeName: "Franklin India Opp -G",
            schemeAUM: 10,
            return: -12.21,
            isManaged: true,
            risk: 12.31,
            color: "#FFF"
          },
          {
            schemeId: 862,
            schemeName: "Franklin India Equity -G",
            schemeAUM: 100,
            return: -13.26,
            isManaged: true,
            risk: 11.47,
            color: null
          },
          {
            schemeId: 863,
            schemeName: "Franklin India Smaller Companies -G",
            schemeAUM: 340,
            return: -20.2,
            isManaged: true,
            risk: 10.52,
            color: null
          },
          {
            schemeId: 864,
            schemeName: "Franklin India Taxshield-G",
            schemeAUM: 560,
            return: -9.51,
            isManaged: true,
            risk: 10.99,
            color: null
          },
          {
            schemeId: 857,
            schemeName: "Franklin India Equity Adv -G",
            schemeAUM: 780,
            return: -12.69,
            isManaged: true,
            risk: 11.89,
            color: null
          },
          {
            schemeId: 2116,
            schemeName: "Franklin India Prima -G",
            schemeAUM: 1000,
            return: -12.37,
            isManaged: true,
            risk: 10.51,
            color: null
          }
        ]
      }
    ]
  };
}

export async function fetchFundManagerPerformanceOverTime(fundManagerId) {
  // return httpHelpers.get(`${apiEndpoint}/performance/${fundManagerId}`);
  return [
    {
      date: "31-Jul-2016",
      return: 5.16,
      color: "#90ED7D"
    },
    {
      date: "31-Dec-2016",
      return: 4.16,
      color: "#90ED7D"
    },
    {
      date: "31-Jul-2017",
      return: -1.18,
      color: "#F5BCDD"
    },
    {
      date: "31-Dec-2017",
      return: 3.16,
      color: "#90ED7D"
    },
    {
      date: "31-Jul-2018",
      return: 6.18,
      color: "#90ED7D"
    },
    {
      date: "31-Dec-2018",
      return: 5.16,
      color: "#90ED7D"
    }
  ];
}

export default {
  fetchAllFundManagers,
  fetchFundManagerOverview,
  fetchSchemesManaged,
  fetchRiskReturnStatistics,
  fetchFundManagerPerformanceOverTime
};
