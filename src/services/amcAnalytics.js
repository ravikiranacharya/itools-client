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

export async function fetchAssetWiseAMCPerformance(assetId) {
  return [
    {
      amcId: 101,
      amcShortName: "Axis",
      amcFullName: "Axis Asset Management Company Ltd.",
      aum: 105.0218685,
      schemesCount: 50,
      return1y: 12.92983221,
      return3y: 27.9659217,
      sharpeRatio: 0.4328624407382278
    },
    {
      amcId: 103,
      amcShortName: "Birla Sunlife",
      amcFullName: "Aditya Birla Sun Life AMC Limited",
      aum: 251.5969204,
      schemesCount: 151,
      return1y: 7.134846606,
      return3y: 23.84050395,
      sharpeRatio: -0.050868500990282825
    },
    {
      amcId: 104,
      amcShortName: "BNP Paribas",
      amcFullName: "BNP Paribas Asset Management India Pvt. Ltd.",
      aum: 7.5886653,
      schemesCount: 17,
      return1y: 9.230894566,
      return3y: 21.76743054,
      sharpeRatio: -0.0971693576109984
    },
    {
      amcId: 105,
      amcShortName: "BOI AXA",
      amcFullName: "BOI AXA Investment Managers Private Limited",
      aum: 2.4695946,
      schemesCount: 14,
      return1y: -7.327520184,
      return3y: 2.081620777,
      sharpeRatio: -0.5406393448035935
    },
    {
      amcId: 106,
      amcShortName: "Canara Robeco",
      amcFullName: "Canara Robeco Asset Management Company Limited",
      aum: 16.1497814,
      schemesCount: 25,
      return1y: 8.672991679,
      return3y: 20.44402844,
      sharpeRatio: -0.12194070982192572
    },
    {
      amcId: 110,
      amcShortName: "Edelweiss",
      amcFullName: "Edelweiss Asset Management Limited",
      aum: 11.7648517,
      schemesCount: 31,
      return1y: 6.021715208,
      return3y: -77.55641926,
      sharpeRatio: -0.01266022587120413
    },
    {
      amcId: 111,
      amcShortName: "Escorts",
      amcFullName: "Escorts Asset Management Limited",
      aum: 0.220077873,
      schemesCount: 13,
      return1y: 3.640049163,
      return3y: 19.6127068,
      sharpeRatio: -0.06689473142372375
    },
    {
      amcId: 112,
      amcShortName: "Franklin Templeton",
      amcFullName:
        "Franklin Templeton Asset Management (India) Private Limited",
      aum: 125.3904352,
      schemesCount: 64,
      return1y: 11.0855168,
      return3y: 24.229766,
      sharpeRatio: -0.03000277247810628
    },
    {
      amcId: 114,
      amcShortName: "HDFC",
      amcFullName: "HDFC Asset Management Company Limited",
      aum: 374.5638745,
      schemesCount: 122,
      return1y: 8.476972228,
      return3y: 18.82333113,
      sharpeRatio: -0.03912876316337089
    },
    {
      amcId: 115,
      amcShortName: "HSBC Global",
      amcFullName: "HSBC Global Asset Management (India) Private Limited",
      aum: 12.1874472,
      schemesCount: 33,
      return1y: 5.930720018,
      return3y: 18.62415263,
      sharpeRatio: -0.06646293221884618
    },
    {
      amcId: 116,
      amcShortName: "ICICI Prudential",
      amcFullName: "ICICI Prudential Asset Management Company Limited",
      aum: 348.0814434,
      schemesCount: 222,
      return1y: 6.121787984,
      return3y: 24.74097476,
      sharpeRatio: 0.23882385743739165
    },
    {
      amcId: 117,
      amcShortName: "IDBI",
      amcFullName: "IDBI Asset Management Ltd.",
      aum: 5.0782492,
      schemesCount: 22,
      return1y: 7.350965119,
      return3y: 18.31908483,
      sharpeRatio: -0.06019202561574868
    },
    {
      amcId: 118,
      amcShortName: "IDFC",
      amcFullName: "IDFC Asset Management Company Limited",
      aum: 96.86553375,
      schemesCount: 56,
      return1y: 8.875605552,
      return3y: 19.9020737,
      sharpeRatio: -0.03844882892755348
    },
    {
      amcId: 120,
      amcShortName: "IL&FS Infra",
      amcFullName: "IL&FS Infra Asset Management Limited",
      aum: 1.241395909,
      schemesCount: 4,
      return1y: "#VALUE!",
      return3y: "#VALUE!",
      sharpeRatio: null
    },
    {
      amcId: 121,
      amcShortName: "India Infoline",
      amcFullName: "IIFL Asset Management Co. Ltd.",
      aum: 1.368259,
      schemesCount: 4,
      return1y: 10.4394861,
      return3y: 21.60507379,
      sharpeRatio: 0.05593030636958439
    },
    {
      amcId: 122,
      amcShortName: "Indiabulls",
      amcFullName: "Indiabulls Asset Management Company Limited",
      aum: 3.010891437,
      schemesCount: 15,
      return1y: 7.898405881,
      return3y: 26.72779437,
      sharpeRatio: 0.5229956328831279
    },
    {
      amcId: 124,
      amcShortName: "JM Financial",
      amcFullName: "JM Financial Asset Management Private Limited",
      aum: 6.525124192,
      schemesCount: 14,
      return1y: 6.521880978,
      return3y: 16.51465765,
      sharpeRatio: -0.05600230986507881
    },
    {
      amcId: 126,
      amcShortName: "Kotak Mahindra",
      amcFullName: "Kotak Mahindra Asset Management Company Limited",
      aum: 169.7028082,
      schemesCount: 90,
      return1y: 8.962377187,
      return3y: 22.509808,
      sharpeRatio: 0.08462946549640997
    },
    {
      amcId: 127,
      amcShortName: "L&T",
      amcFullName: "L&T Investment Management Limited",
      aum: 67.62562147,
      schemesCount: 38,
      return1y: 3.451751224,
      return3y: 17.4023425,
      sharpeRatio: -0.2719032688202513
    },
    {
      amcId: 128,
      amcShortName: "LIC Nomura",
      amcFullName: "LIC Mutual Fund Asset Management Limited",
      aum: 16.250785,
      schemesCount: 24,
      return1y: 9.399705172,
      return3y: 23.09237863,
      sharpeRatio: 0.6585534200415176
    },
    {
      amcId: 129,
      amcShortName: "Mirae Global",
      amcFullName:
        "Mirae Asset Global Investment Management (India) Private Limited",
      aum: 34.69448748,
      schemesCount: 15,
      return1y: 13.35950738,
      return3y: 37.46292974,
      sharpeRatio: 0.059556121696874666
    },
    {
      amcId: 131,
      amcShortName: "Motilal Oswal",
      amcFullName: "Motilal Oswal Asset Management Company Limited",
      aum: 18.92432362,
      schemesCount: 16,
      return1y: 16.9056263,
      return3y: 24.36919754,
      sharpeRatio: -0.39808772570605144
    },
    {
      amcId: 134,
      amcShortName: "PPFAS",
      amcFullName: "PPFAS Asset Management Pvt. Ltd.",
      aum: 2.383505,
      schemesCount: 3,
      return1y: 5.368818777,
      return3y: 35.9136443,
      sharpeRatio: 0.1527230878268276
    },
    {
      amcId: 135,
      amcShortName: "DHFL",
      amcFullName: "DHFL Pramerica Asset Managers Private Limited",
      aum: 4.2433413,
      schemesCount: 39,
      return1y: 3.728017388,
      return3y: 18.42747678,
      sharpeRatio: -0.03476131946315473
    },
    {
      amcId: 137,
      amcShortName: "Quantum",
      amcFullName: "Quantum Asset Management Company Private Limited",
      aum: 1.515440826,
      schemesCount: 10,
      return1y: 2.469920644,
      return3y: 13.59557666,
      sharpeRatio: -0.3033920992528863
    },
    {
      amcId: 138,
      amcShortName: "Reliance",
      amcFullName: "Reliance Nippon Life Asset Management Limited",
      aum: 195.2548962,
      schemesCount: 185,
      return1y: 4.777521768,
      return3y: 19.77024142,
      sharpeRatio: -0.1632465739097215
    },
    {
      amcId: 139,
      amcShortName: "Religare",
      amcFullName: "Invesco Asset Management Company Pvt Ltd.",
      aum: 23.4417592,
      schemesCount: 42,
      return1y: 8.877803712,
      return3y: 22.97533359,
      sharpeRatio: 0.0962656052622125
    },
    {
      amcId: 140,
      amcShortName: "Sahara",
      amcFullName: "Sahara Asset Management Company Private Limited",
      aum: 0.047581493,
      schemesCount: 11,
      return1y: 6.506339296,
      return3y: 12.48904553,
      sharpeRatio: -0.659229419659622
    },
    {
      amcId: 141,
      amcShortName: "SBI",
      amcFullName: "SBI Funds Management Private Limited",
      aum: 320.9384058,
      schemesCount: 136,
      return1y: 12.77092196,
      return3y: 24.53985236,
      sharpeRatio: 0.18223125203366983
    },
    {
      amcId: 142,
      amcShortName: "Shriram",
      amcFullName: "Shriram Asset Management Company Limited",
      aum: 0.1716617,
      schemesCount: 4,
      return1y: 6.320671765,
      return3y: 16.14548931,
      sharpeRatio: -0.24300702897492535
    },
    {
      amcId: 143,
      amcShortName: "Sundaram",
      amcFullName: "Sundaram Asset Management Company Limited",
      aum: 30.45239176,
      schemesCount: 74,
      return1y: 3.759644594,
      return3y: 9.753891559,
      sharpeRatio: -0.5339888007757155
    },
    {
      amcId: 145,
      amcShortName: "Taurus",
      amcFullName: "Taurus Asset Management Company Limited",
      aum: 0.401086,
      schemesCount: 10,
      return1y: 5.903707049,
      return3y: 7.384739448,
      sharpeRatio: -0.596800263585662
    },
    {
      amcId: 146,
      amcShortName: "Union KBC",
      amcFullName: "Union Asset Management Company Pvt. Ltd.",
      aum: 4.20193604,
      schemesCount: 15,
      return1y: 6.697156039,
      return3y: 17.88566331,
      sharpeRatio: -0.09633339723497822
    },
    {
      amcId: 147,
      amcShortName: "UTI",
      amcFullName: "UTI Asset Management Company Private Limited",
      aum: 148.4535385,
      schemesCount: 178,
      return1y: 6.262656218,
      return3y: 18.4390699,
      sharpeRatio: -0.05010826414241591
    },
    {
      amcId: 148,
      amcShortName: "Mahindra",
      amcFullName: "Mahindra Asset Management Company Private Limited",
      aum: 5.3152534,
      schemesCount: 11,
      return1y: 7.124546191,
      return3y: 14.54653031,
      sharpeRatio: -0.03593260846213942
    },
    {
      amcId: 149,
      amcShortName: "Tata",
      amcFullName: "Tata Asset Management Limited",
      aum: 48.50911299,
      schemesCount: 57,
      return1y: 6.97379188,
      return3y: 14.51538825,
      sharpeRatio: -0.10674785595069926
    }
  ];
}
