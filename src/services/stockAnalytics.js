import httpHelpers from "./utils/httpHelpers";
import config from "../config.json";

const apiEndpoint = `${config.apiUrl}/stocks`;

export async function fetchAllStocks() {
  // return httpHelpers.get(apiEndpoint);
  return [
    {
      instrumentId: "0",
      instrumentName: "3M India Ltd."
    },
    {
      instrumentId: "1",
      instrumentName: "Aarti Drugs Ltd."
    },
    {
      instrumentId: "2",
      instrumentName: "Aarti Industries Ltd."
    },
    {
      instrumentId: "3",
      instrumentName: "Aavas Financiers Ltd."
    },
    {
      instrumentId: "4",
      instrumentName: "ABB India Ltd."
    },
    {
      instrumentId: "5",
      instrumentName: "Abbott India Ltd."
    },
    {
      instrumentId: "6",
      instrumentName: "ACC Ltd."
    },
    {
      instrumentId: "7",
      instrumentName: "Accelya Solutions India Ltd."
    },
    {
      instrumentId: "8",
      instrumentName: "Action Construction Equipment Ltd."
    },
    {
      instrumentId: "9",
      instrumentName: "Adani Enterprises Ltd."
    },
    {
      instrumentId: "10",
      instrumentName: "Adani Gas Ltd."
    },
    {
      instrumentId: "11",
      instrumentName: "Adani Green Energy Ltd."
    },
    {
      instrumentId: "12",
      instrumentName: "Adani Ports and Special Economic Zone Ltd."
    },
    {
      instrumentId: "13",
      instrumentName: "Adani Power Ltd."
    },
    {
      instrumentId: "14",
      instrumentName: "Adani Transmission Ltd."
    },
    {
      instrumentId: "15",
      instrumentName: "Aditya Birla Capital Ltd."
    },
    {
      instrumentId: "16",
      instrumentName: "Aditya Birla Fashion and Retail Ltd."
    },
    {
      instrumentId: "17",
      instrumentName: "Adlabs Entertainment Ltd."
    },
    {
      instrumentId: "18",
      instrumentName: "Ador Welding Ltd."
    },
    {
      instrumentId: "19",
      instrumentName: "Advanced Enzyme Technologies Ltd."
    },
    {
      instrumentId: "20",
      instrumentName: "Aegis Logistics Ltd."
    },
    {
      instrumentId: "21",
      instrumentName: "Agro Tech Foods Ltd."
    },
    {
      instrumentId: "22",
      instrumentName: "Ahluwalia Contracts (India) Ltd."
    },
    {
      instrumentId: "23",
      instrumentName: "AIA Engineering Ltd."
    },
    {
      instrumentId: "24",
      instrumentName: "Ajanta Pharma Ltd."
    },
    {
      instrumentId: "25",
      instrumentName: "Aksharchem (India) Ltd."
    },
    {
      instrumentId: "26",
      instrumentName: "Akzo Nobel India Ltd."
    },
    {
      instrumentId: "27",
      instrumentName: "Alembic Ltd."
    },
    {
      instrumentId: "28",
      instrumentName: "Alembic Pharmaceuticals Ltd."
    },
    {
      instrumentId: "29",
      instrumentName: "Alkem Laboratories Ltd."
    },
    {
      instrumentId: "30",
      instrumentName: "Alkyl Amines Chemicals Ltd."
    },
    {
      instrumentId: "31",
      instrumentName: "Allahabad Bank"
    },
    {
      instrumentId: "32",
      instrumentName: "Allcargo Logistics Ltd."
    },
    {
      instrumentId: "33",
      instrumentName: "Amara Raja Batteries Ltd."
    },
    {
      instrumentId: "34",
      instrumentName: "Amber Enterprises India Ltd."
    },
    {
      instrumentId: "35",
      instrumentName: "Ambuja Cements Ltd."
    },
    {
      instrumentId: "36",
      instrumentName: "Amex Carb. & Chem."
    },
    {
      instrumentId: "37",
      instrumentName: "Amrutanjan Health Care Ltd."
    },
    {
      instrumentId: "38",
      instrumentName: "Andhra Bank"
    },
    {
      instrumentId: "39",
      instrumentName: "Andhra Sugars Ltd."
    },
    {
      instrumentId: "40",
      instrumentName: "Apar Industries Ltd."
    },
    {
      instrumentId: "41",
      instrumentName: "Apcotex Industries Ltd."
    },
    {
      instrumentId: "42",
      instrumentName: "Apex Frozen Foods Ltd."
    },
    {
      instrumentId: "43",
      instrumentName: "APL Apollo Tubes Ltd."
    },
    {
      instrumentId: "44",
      instrumentName: "Apollo Hospitals Enterprise Ltd."
    },
    {
      instrumentId: "45",
      instrumentName: "Apollo Micro Systems Ltd."
    },
    {
      instrumentId: "46",
      instrumentName: "Apollo Pipes Ltd."
    },
    {
      instrumentId: "47",
      instrumentName: "Apollo Tyres Ltd."
    },
    {
      instrumentId: "48",
      instrumentName: "Arihant Superstructures Ltd."
    },
    {
      instrumentId: "49",
      instrumentName: "Arvind Fashions Ltd."
    },
    {
      instrumentId: "50",
      instrumentName: "Arvind Ltd."
    },
    {
      instrumentId: "51",
      instrumentName: "Asahi India Glass Ltd."
    },
    {
      instrumentId: "52",
      instrumentName: "Ashiana Housing Ltd."
    },
    {
      instrumentId: "53",
      instrumentName: "Ashok Leyland Ltd."
    },
    {
      instrumentId: "54",
      instrumentName: "Ashoka Buildcon Ltd."
    },
    {
      instrumentId: "55",
      instrumentName: "Asian Granito India Ltd."
    },
    {
      instrumentId: "56",
      instrumentName: "Asian Paints Ltd."
    },
    {
      instrumentId: "57",
      instrumentName: "Astec Lifesciences Ltd."
    },
    {
      instrumentId: "58",
      instrumentName: "Aster DM Healthcare Ltd."
    },
    {
      instrumentId: "59",
      instrumentName: "Astra Microwave Products Ltd."
    },
    {
      instrumentId: "60",
      instrumentName: "Astral Poly Technik Ltd."
    },
    {
      instrumentId: "61",
      instrumentName: "Astrazeneca Pharma India Ltd."
    },
    {
      instrumentId: "62",
      instrumentName: "Atul Auto Ltd."
    },
    {
      instrumentId: "63",
      instrumentName: "Atul Ltd."
    },
    {
      instrumentId: "64",
      instrumentName: "AU Small Finance Bank Ltd."
    },
    {
      instrumentId: "65",
      instrumentName: "Aurobindo Pharma Ltd."
    },
    {
      instrumentId: "66",
      instrumentName: "Automotive Axles Ltd."
    },
    {
      instrumentId: "67",
      instrumentName: "Avanti Feeds Ltd."
    },
    {
      instrumentId: "68",
      instrumentName: "Avenue Supermarts Ltd."
    },
    {
      instrumentId: "69",
      instrumentName: "Axis Bank Ltd."
    },
    {
      instrumentId: "70",
      instrumentName: "Bajaj Auto Ltd."
    },
    {
      instrumentId: "71",
      instrumentName: "Bajaj Consumer Care Ltd."
    },
    {
      instrumentId: "72",
      instrumentName: "Bajaj Electricals Ltd."
    },
    {
      instrumentId: "73",
      instrumentName: "Bajaj Finance Ltd."
    },
    {
      instrumentId: "74",
      instrumentName: "Bajaj Finserv Ltd."
    },
    {
      instrumentId: "75",
      instrumentName: "Bajaj Holdings & Investment Ltd."
    },
    {
      instrumentId: "76",
      instrumentName: "Balaji Amines Ltd."
    },
    {
      instrumentId: "77",
      instrumentName: "Balaji Telefilms Ltd."
    },
    {
      instrumentId: "78",
      instrumentName: "Balkrishna Industries Ltd."
    },
    {
      instrumentId: "79",
      instrumentName: "Balmer Lawrie & Company Ltd."
    },
    {
      instrumentId: "80",
      instrumentName: "Balrampur Chini Mills Ltd."
    },
    {
      instrumentId: "81",
      instrumentName: "Banco Products (India) Ltd."
    },
    {
      instrumentId: "82",
      instrumentName: "Bandhan Bank Ltd."
    },
    {
      instrumentId: "83",
      instrumentName: "Bank Of Baroda"
    },
    {
      instrumentId: "84",
      instrumentName: "Bank Of India"
    },
    {
      instrumentId: "85",
      instrumentName: "Bank Of Maharashtra"
    },
    {
      instrumentId: "86",
      instrumentName: "Bannari Amman Sugars Ltd."
    },
    {
      instrumentId: "87",
      instrumentName: "BASF India Ltd."
    },
    {
      instrumentId: "88",
      instrumentName: "Bata India Ltd."
    },
    {
      instrumentId: "89",
      instrumentName: "Bayer CropScience Ltd."
    },
    {
      instrumentId: "90",
      instrumentName: "BEML Ltd."
    },
    {
      instrumentId: "91",
      instrumentName: "Berger Paints India Ltd."
    },
    {
      instrumentId: "92",
      instrumentName: "BGR Energy Systems Ltd."
    },
    {
      instrumentId: "93",
      instrumentName: "Bhansali Engineering Polymers Ltd."
    },
    {
      instrumentId: "94",
      instrumentName: "Bharat Bijlee Ltd."
    },
    {
      instrumentId: "95",
      instrumentName: "Bharat Dynamics Ltd."
    },
    {
      instrumentId: "96",
      instrumentName: "Bharat Electronics Ltd."
    },
    {
      instrumentId: "97",
      instrumentName: "Bharat Financial Inclusion Ltd."
    },
    {
      instrumentId: "98",
      instrumentName: "Bharat Forge Ltd."
    },
    {
      instrumentId: "99",
      instrumentName: "Bharat Heavy Electricals Ltd."
    },
    {
      instrumentId: "100",
      instrumentName: "Bharat Petroleum Corporation Ltd."
    },
    {
      instrumentId: "101",
      instrumentName: "Bharti Airtel Ltd."
    },
    {
      instrumentId: "102",
      instrumentName: "Bharti Infratel Ltd."
    },
    {
      instrumentId: "103",
      instrumentName: "Biocon Ltd."
    },
    {
      instrumentId: "104",
      instrumentName: "Birla Corporation Ltd."
    },
    {
      instrumentId: "105",
      instrumentName: "Birlasoft Ltd."
    },
    {
      instrumentId: "106",
      instrumentName: "BL Kashyap & Sons Ltd."
    },
    {
      instrumentId: "107",
      instrumentName: "Bliss GVS Pharma Ltd."
    },
    {
      instrumentId: "108",
      instrumentName: "Blue Dart Express Ltd."
    },
    {
      instrumentId: "109",
      instrumentName: "Blue Star Ltd."
    },
    {
      instrumentId: "110",
      instrumentName: "Bodal Chemicals Ltd."
    },
    {
      instrumentId: "111",
      instrumentName: "Bombay Burmah Trading Corporation Ltd."
    },
    {
      instrumentId: "112",
      instrumentName: "Bombay Dyeing & Manufacturing Company Ltd."
    },
    {
      instrumentId: "113",
      instrumentName: "Bosch Ltd."
    },
    {
      instrumentId: "114",
      instrumentName: "Brigade Enterprises Ltd."
    },
    {
      instrumentId: "115",
      instrumentName: "Brillio Technologies Pvt Ltd."
    },
    {
      instrumentId: "116",
      instrumentName: "Britannia Industries Ltd."
    },
    {
      instrumentId: "117",
      instrumentName: "BSE Ltd."
    },
    {
      instrumentId: "118",
      instrumentName: "Butterfly Gandhimathi Appliances Ltd."
    },
    {
      instrumentId: "119",
      instrumentName: "Cadila Healthcare Ltd."
    },
    {
      instrumentId: "120",
      instrumentName: "Camlin Fine Sciences Ltd."
    },
    {
      instrumentId: "121",
      instrumentName: "Can Fin Homes Ltd."
    },
    {
      instrumentId: "122",
      instrumentName: "Canara Bank"
    },
    {
      instrumentId: "123",
      instrumentName: "Capacite Infraprojects Ltd."
    },
    {
      instrumentId: "124",
      instrumentName: "Caplin Point Laboratories Ltd."
    },
    {
      instrumentId: "125",
      instrumentName: "Carborundum Universal Ltd."
    },
    {
      instrumentId: "126",
      instrumentName: "Care Ratings Ltd."
    },
    {
      instrumentId: "127",
      instrumentName: "Career Point Ltd."
    },
    {
      instrumentId: "128",
      instrumentName: "Castrol India Ltd."
    },
    {
      instrumentId: "129",
      instrumentName: "CCL Products (India) Ltd."
    },
    {
      instrumentId: "130",
      instrumentName: "Ceat Ltd."
    },
    {
      instrumentId: "131",
      instrumentName: "Central Bank Of India"
    },
    {
      instrumentId: "132",
      instrumentName: "Central Depository Services (India) Ltd."
    },
    {
      instrumentId: "133",
      instrumentName: "Centrum Capital Ltd."
    },
    {
      instrumentId: "134",
      instrumentName: "Centum Electronics Ltd."
    },
    {
      instrumentId: "135",
      instrumentName: "Century Plyboards (India) Ltd."
    },
    {
      instrumentId: "136",
      instrumentName: "Century Textiles & Industries Ltd."
    },
    {
      instrumentId: "137",
      instrumentName: "Cera Sanitaryware Ltd."
    },
    {
      instrumentId: "138",
      instrumentName: "CESC Ltd."
    },
    {
      instrumentId: "139",
      instrumentName: "CESC Ventures Ltd."
    },
    {
      instrumentId: "140",
      instrumentName: "CG Power & Industrial Solutions Ltd."
    },
    {
      instrumentId: "141",
      instrumentName: "Chalet Hotels Ltd."
    },
    {
      instrumentId: "142",
      instrumentName: "Chambal Fertilisers & Chemicals Ltd."
    },
    {
      instrumentId: "143",
      instrumentName: "Chennai Interactive Business Services"
    },
    {
      instrumentId: "144",
      instrumentName: "Chennai Petroleum Corporation Ltd."
    },
    {
      instrumentId: "145",
      instrumentName: "Chennai Super Kings Ltd."
    },
    {
      instrumentId: "146",
      instrumentName: "Cholamandalam Financial Holdings Ltd."
    },
    {
      instrumentId: "147",
      instrumentName: "Cholamandalam Investment & Finance Company Ltd."
    },
    {
      instrumentId: "148",
      instrumentName: "Cigniti Technologies Ltd."
    },
    {
      instrumentId: "149",
      instrumentName: "Cipla Ltd."
    },
    {
      instrumentId: "150",
      instrumentName: "City Online Services Ltd."
    },
    {
      instrumentId: "151",
      instrumentName: "City Union Bank Ltd."
    },
    {
      instrumentId: "152",
      instrumentName: "CL Educate Ltd."
    },
    {
      instrumentId: "153",
      instrumentName: "Clariant Chemicals (India) Ltd."
    },
    {
      instrumentId: "154",
      instrumentName: "CMI FPE Ltd."
    },
    {
      instrumentId: "155",
      instrumentName: "CMI Ltd."
    },
    {
      instrumentId: "156",
      instrumentName: "Coal India Ltd."
    },
    {
      instrumentId: "157",
      instrumentName: "Cochin Shipyard Ltd."
    },
    {
      instrumentId: "158",
      instrumentName: "Coffee Day Enterprises Ltd."
    },
    {
      instrumentId: "159",
      instrumentName: "Colgate-Palmolive (India) Ltd."
    },
    {
      instrumentId: "160",
      instrumentName: "Consolidated Construction Consortium Ltd."
    },
    {
      instrumentId: "161",
      instrumentName: "Container Corporation Of India Ltd."
    },
    {
      instrumentId: "162",
      instrumentName: "Control Print Ltd."
    },
    {
      instrumentId: "163",
      instrumentName: "Coromandel International Ltd."
    },
    {
      instrumentId: "164",
      instrumentName: "Corporation Bank"
    },
    {
      instrumentId: "165",
      instrumentName: "Cosmo Films Ltd."
    },
    {
      instrumentId: "166",
      instrumentName: "CreditAccess Grameen Ltd."
    },
    {
      instrumentId: "167",
      instrumentName: "Crescent Finstock Ltd."
    },
    {
      instrumentId: "168",
      instrumentName: "CRISIL Ltd."
    },
    {
      instrumentId: "169",
      instrumentName: "Crompton Greaves Consumer Electricals Ltd."
    },
    {
      instrumentId: "170",
      instrumentName: "Cummins India Ltd."
    },
    {
      instrumentId: "171",
      instrumentName: "Cyient Ltd."
    },
    {
      instrumentId: "172",
      instrumentName: "Dabur India Ltd."
    },
    {
      instrumentId: "173",
      instrumentName: "Dalmia Bharat Ltd."
    },
    {
      instrumentId: "174",
      instrumentName: "DB Corp Ltd."
    },
    {
      instrumentId: "175",
      instrumentName: "DCB Bank Ltd."
    },
    {
      instrumentId: "176",
      instrumentName: "DCM Shriram Ltd."
    },
    {
      instrumentId: "177",
      instrumentName: "Deccan Cements Ltd."
    },
    {
      instrumentId: "178",
      instrumentName: "Deepak Fertilisers & Petrochemicals Corporation Ltd."
    },
    {
      instrumentId: "179",
      instrumentName: "Deepak Nitrite Ltd."
    },
    {
      instrumentId: "180",
      instrumentName: "Delta Corp Ltd."
    },
    {
      instrumentId: "181",
      instrumentName: "Dewan Housing Finance Corporation Ltd."
    },
    {
      instrumentId: "182",
      instrumentName: "DFM Foods Ltd."
    },
    {
      instrumentId: "183",
      instrumentName: "Dhanuka Agritech Ltd."
    },
    {
      instrumentId: "184",
      instrumentName: "Digicontent Ltd."
    },
    {
      instrumentId: "185",
      instrumentName: "Dilip Buildcon Ltd."
    },
    {
      instrumentId: "186",
      instrumentName: "Disa India Ltd."
    },
    {
      instrumentId: "187",
      instrumentName: "Dish TV India Ltd."
    },
    {
      instrumentId: "188",
      instrumentName: "Dishman Carbogen Amcis Ltd."
    },
    {
      instrumentId: "189",
      instrumentName: "Divis Laboratories Ltd."
    },
    {
      instrumentId: "190",
      instrumentName: "Dixon Technologies (India) Ltd."
    },
    {
      instrumentId: "191",
      instrumentName: "DLF Ltd."
    },
    {
      instrumentId: "192",
      instrumentName: "Dollar Industries Ltd."
    },
    {
      instrumentId: "193",
      instrumentName: "Dr. Lal Pathlabs Ltd."
    },
    {
      instrumentId: "194",
      instrumentName: "Dr. Reddys Laboratories Ltd."
    },
    {
      instrumentId: "195",
      instrumentName: "Dwarikesh Sugar Industries Ltd."
    },
    {
      instrumentId: "196",
      instrumentName: "Dynamatic Technologies Ltd."
    },
    {
      instrumentId: "197",
      instrumentName: "E.I.D. Parry (India) Ltd."
    },
    {
      instrumentId: "198",
      instrumentName: "Easun Reyrolle Ltd."
    },
    {
      instrumentId: "199",
      instrumentName: "eClerx Services Ltd."
    },
    {
      instrumentId: "200",
      instrumentName: "Edelweiss Financial Services Ltd."
    },
    {
      instrumentId: "201",
      instrumentName: "Eicher Motors Ltd."
    },
    {
      instrumentId: "202",
      instrumentName: "EIH Ltd."
    },
    {
      instrumentId: "203",
      instrumentName: "Elantas Beck India Ltd."
    },
    {
      instrumentId: "204",
      instrumentName: "Elecon Engineering Company Ltd."
    },
    {
      instrumentId: "205",
      instrumentName: "Elgi Equipments Ltd."
    },
    {
      instrumentId: "206",
      instrumentName: "Emami Ltd."
    },
    {
      instrumentId: "207",
      instrumentName: "Emami Paper Mills Ltd."
    },
    {
      instrumentId: "208",
      instrumentName: "Endurance Technologies Ltd."
    },
    {
      instrumentId: "209",
      instrumentName: "Engineers India Ltd."
    },
    {
      instrumentId: "210",
      instrumentName: "Entertainment Network (India) Ltd."
    },
    {
      instrumentId: "211",
      instrumentName: "Equitas Holdings Ltd."
    },
    {
      instrumentId: "212",
      instrumentName: "Eris Lifesciences Ltd."
    },
    {
      instrumentId: "213",
      instrumentName: "Esab India Ltd."
    },
    {
      instrumentId: "214",
      instrumentName: "Escorts Ltd."
    },
    {
      instrumentId: "215",
      instrumentName: "Essel Propack Ltd."
    },
    {
      instrumentId: "216",
      instrumentName: "Eveready Industries (India) Ltd."
    },
    {
      instrumentId: "217",
      instrumentName: "Everest Industries Ltd."
    },
    {
      instrumentId: "218",
      instrumentName: "Excel Crop Care Ltd."
    },
    {
      instrumentId: "219",
      instrumentName: "Exide Industries Ltd."
    },
    {
      instrumentId: "220",
      instrumentName: "Fairchem Speciality Ltd."
    },
    {
      instrumentId: "221",
      instrumentName: "FDC Ltd."
    },
    {
      instrumentId: "222",
      instrumentName: "Federal-Mogul Goetze (India) Ltd."
    },
    {
      instrumentId: "223",
      instrumentName: "Fiem Industries Ltd."
    },
    {
      instrumentId: "224",
      instrumentName: "Fine Organic Industries Ltd."
    },
    {
      instrumentId: "225",
      instrumentName: "Finolex Cables Ltd."
    },
    {
      instrumentId: "226",
      instrumentName: "Finolex Industries Ltd."
    },
    {
      instrumentId: "227",
      instrumentName: "Firstsource Solutions Ltd."
    },
    {
      instrumentId: "228",
      instrumentName: "Force Motors Ltd."
    },
    {
      instrumentId: "229",
      instrumentName: "Fortis Healthcare Ltd."
    },
    {
      instrumentId: "230",
      instrumentName: "Future Consumer Ltd."
    },
    {
      instrumentId: "231",
      instrumentName: "Future Lifestyle Fashions Ltd."
    },
    {
      instrumentId: "232",
      instrumentName: "Future Retail Ltd."
    },
    {
      instrumentId: "233",
      instrumentName: "Future Supply Chain Solutions Ltd."
    },
    {
      instrumentId: "234",
      instrumentName: "Gabriel India Ltd."
    },
    {
      instrumentId: "235",
      instrumentName: "GAIL (India) Ltd."
    },
    {
      instrumentId: "236",
      instrumentName: "Galaxy Surfactants Ltd."
    },
    {
      instrumentId: "237",
      instrumentName: "Gammon Infrastructure Projects Ltd."
    },
    {
      instrumentId: "238",
      instrumentName: "Ganesha Ecosphere Ltd."
    },
    {
      instrumentId: "239",
      instrumentName: "Garden Reach Shipbuilders & Engineers Ltd."
    },
    {
      instrumentId: "240",
      instrumentName: "Garware Technical Fibres Ltd."
    },
    {
      instrumentId: "241",
      instrumentName: "Gateway Distriparks Ltd."
    },
    {
      instrumentId: "242",
      instrumentName: "Gayatri Projects Ltd."
    },
    {
      instrumentId: "243",
      instrumentName: "GE Power India Ltd."
    },
    {
      instrumentId: "244",
      instrumentName: "GE T&D India Ltd."
    },
    {
      instrumentId: "245",
      instrumentName: "General Insurance Corporation of India Ltd."
    },
    {
      instrumentId: "246",
      instrumentName: "Genus Power Infrastructures Ltd."
    },
    {
      instrumentId: "247",
      instrumentName: "GHCL Ltd."
    },
    {
      instrumentId: "248",
      instrumentName: "GIC Housing Finance Ltd."
    },
    {
      instrumentId: "249",
      instrumentName: "Gillette India Ltd."
    },
    {
      instrumentId: "250",
      instrumentName: "GKW Ltd."
    },
    {
      instrumentId: "251",
      instrumentName: "Glaxosmithkline Consumer Healthcare Ltd."
    },
    {
      instrumentId: "252",
      instrumentName: "Glaxosmithkline Pharmaceuticals Ltd."
    },
    {
      instrumentId: "253",
      instrumentName: "Glenmark Pharmaceuticals Ltd."
    },
    {
      instrumentId: "254",
      instrumentName: "Globsyn Technologies Limited"
    },
    {
      instrumentId: "255",
      instrumentName: "GMM Pfaudler Ltd."
    },
    {
      instrumentId: "256",
      instrumentName: "GMR Infrastructure Ltd."
    },
    {
      instrumentId: "257",
      instrumentName: "GNA Axles Ltd."
    },
    {
      instrumentId: "258",
      instrumentName: "GOCL Corporation Ltd."
    },
    {
      instrumentId: "259",
      instrumentName: "Godfrey Phillips India Ltd."
    },
    {
      instrumentId: "260",
      instrumentName: "Godrej Agrovet Ltd."
    },
    {
      instrumentId: "261",
      instrumentName: "Godrej Consumer Products Ltd."
    },
    {
      instrumentId: "262",
      instrumentName: "Godrej Industries Ltd."
    },
    {
      instrumentId: "263",
      instrumentName: "Godrej Properties Ltd."
    },
    {
      instrumentId: "264",
      instrumentName: "Gokaldas Exports Ltd."
    },
    {
      instrumentId: "265",
      instrumentName: "Goodyear India Ltd."
    },
    {
      instrumentId: "266",
      instrumentName: "GPT Infraprojects Ltd."
    },
    {
      instrumentId: "267",
      instrumentName: "Granules India Ltd."
    },
    {
      instrumentId: "268",
      instrumentName: "Graphite India Ltd."
    },
    {
      instrumentId: "269",
      instrumentName: "Grasim Industries Ltd."
    },
    {
      instrumentId: "270",
      instrumentName: "Gravita India Ltd."
    },
    {
      instrumentId: "271",
      instrumentName: "Greaves Cotton Ltd."
    },
    {
      instrumentId: "272",
      instrumentName: "Greenlam Industries Ltd."
    },
    {
      instrumentId: "273",
      instrumentName: "Greenply Industries Ltd."
    },
    {
      instrumentId: "274",
      instrumentName: "Grindwell Norton Ltd."
    },
    {
      instrumentId: "275",
      instrumentName: "Gruh Finance Ltd."
    },
    {
      instrumentId: "276",
      instrumentName: "GTPL Hathway Ltd."
    },
    {
      instrumentId: "277",
      instrumentName: "Gufic Biosciences Ltd."
    },
    {
      instrumentId: "278",
      instrumentName: "Gujarat Alkalies & Chemicals Ltd."
    },
    {
      instrumentId: "279",
      instrumentName: "Gujarat Ambuja Exports Ltd."
    },
    {
      instrumentId: "280",
      instrumentName: "Gujarat Fluorochemicals Ltd."
    },
    {
      instrumentId: "281",
      instrumentName: "Gujarat Gas Ltd."
    },
    {
      instrumentId: "282",
      instrumentName: "Gujarat Industries Power Company Ltd."
    },
    {
      instrumentId: "283",
      instrumentName: "Gujarat Mineral Development  Corporation Ltd."
    },
    {
      instrumentId: "284",
      instrumentName: "Gujarat Narmada Valley Fertilizers & Chemicals Ltd."
    },
    {
      instrumentId: "285",
      instrumentName: "Gujarat Pipavav Port Ltd."
    },
    {
      instrumentId: "286",
      instrumentName: "Gujarat State Fertilizers & Chemicals Ltd."
    },
    {
      instrumentId: "287",
      instrumentName: "Gujarat State Petronet Ltd."
    },
    {
      instrumentId: "288",
      instrumentName: "Gulf Oil Lubricants India Ltd."
    },
    {
      instrumentId: "289",
      instrumentName: "Harita Seating Systems Ltd."
    },
    {
      instrumentId: "290",
      instrumentName: "Hathway Cable & Datacom Ltd."
    },
    {
      instrumentId: "291",
      instrumentName: "Hatsun Agro Products Ltd."
    },
    {
      instrumentId: "292",
      instrumentName: "Havells India Ltd."
    },
    {
      instrumentId: "293",
      instrumentName: "Hawkins Cookers Ltd."
    },
    {
      instrumentId: "294",
      instrumentName: "HBL Power Systems Ltd."
    },
    {
      instrumentId: "295",
      instrumentName: "HCL Technologies Ltd."
    },
    {
      instrumentId: "296",
      instrumentName: "HDFC Asset Management Company Ltd."
    },
    {
      instrumentId: "297",
      instrumentName: "HDFC Bank Ltd."
    },
    {
      instrumentId: "298",
      instrumentName: "HDFC Life Insurance Co Ltd"
    },
    {
      instrumentId: "299",
      instrumentName: "Healthcare Global Enterprises Ltd."
    },
    {
      instrumentId: "300",
      instrumentName: "HEG Ltd."
    },
    {
      instrumentId: "301",
      instrumentName: "Heidelberg Cement India Ltd."
    },
    {
      instrumentId: "302",
      instrumentName: "Heritage Foods Ltd."
    },
    {
      instrumentId: "303",
      instrumentName: "Hero MotoCorp Ltd."
    },
    {
      instrumentId: "304",
      instrumentName: "Hester Biosciences Ltd."
    },
    {
      instrumentId: "305",
      instrumentName: "Hexaware Technologies Ltd."
    },
    {
      instrumentId: "306",
      instrumentName: "HG Infra Engineering Ltd."
    },
    {
      instrumentId: "307",
      instrumentName: "Hikal Ltd."
    },
    {
      instrumentId: "308",
      instrumentName: "HIL Ltd."
    },
    {
      instrumentId: "309",
      instrumentName: "Himachal Futuristic Communications Ltd."
    },
    {
      instrumentId: "310",
      instrumentName: "Himadri Speciality Chemical Ltd."
    },
    {
      instrumentId: "311",
      instrumentName: "Himatsingka Seide Ltd."
    },
    {
      instrumentId: "312",
      instrumentName: "Hindalco Industries Ltd."
    },
    {
      instrumentId: "313",
      instrumentName: "Hindustan Aeronautics Ltd."
    },
    {
      instrumentId: "314",
      instrumentName: "Hindustan Construction Company Ltd."
    },
    {
      instrumentId: "315",
      instrumentName: "Hindustan Copper Ltd."
    },
    {
      instrumentId: "316",
      instrumentName: "Hindustan Dorr-Oliver Ltd."
    },
    {
      instrumentId: "317",
      instrumentName: "Hindustan Media Ventures Ltd."
    },
    {
      instrumentId: "318",
      instrumentName: "Hindustan Oil Exploration Company Ltd."
    },
    {
      instrumentId: "319",
      instrumentName: "Hindustan Petroleum Corporation Ltd."
    },
    {
      instrumentId: "320",
      instrumentName: "Hindustan Unilever Ltd."
    },
    {
      instrumentId: "321",
      instrumentName: "Hindustan Zinc Ltd."
    },
    {
      instrumentId: "322",
      instrumentName: "Honda Siel Power Products Ltd."
    },
    {
      instrumentId: "323",
      instrumentName: "Honeywell Automation India Ltd."
    },
    {
      instrumentId: "324",
      instrumentName: "Housing & Urban Development Corporation Ltd."
    },
    {
      instrumentId: "325",
      instrumentName: "Housing Development Finance Corporation Ltd."
    },
    {
      instrumentId: "326",
      instrumentName: "HPL Electric & Power Ltd."
    },
    {
      instrumentId: "327",
      instrumentName: "HSIL Ltd."
    },
    {
      instrumentId: "328",
      instrumentName: "HT Media Ltd."
    },
    {
      instrumentId: "329",
      instrumentName: "Huhtamaki PPL Ltd."
    },
    {
      instrumentId: "330",
      instrumentName: "ICICI Bank Ltd."
    },
    {
      instrumentId: "331",
      instrumentName: "ICICI Lombard General Insurance Co Ltd."
    },
    {
      instrumentId: "332",
      instrumentName: "ICICI Prudential Life Insurance Company Ltd."
    },
    {
      instrumentId: "333",
      instrumentName: "ICICI Securities Ltd."
    },
    {
      instrumentId: "334",
      instrumentName: "ICRA Ltd."
    },
    {
      instrumentId: "335",
      instrumentName: "IDBI Bank Ltd."
    },
    {
      instrumentId: "336",
      instrumentName: "IDFC First Bank Ltd."
    },
    {
      instrumentId: "337",
      instrumentName: "IDFC Ltd."
    },
    {
      instrumentId: "338",
      instrumentName: "IFB Industries Ltd."
    },
    {
      instrumentId: "339",
      instrumentName: "IFCI Ltd."
    },
    {
      instrumentId: "340",
      instrumentName: "IFGL Refractories Ltd."
    },
    {
      instrumentId: "341",
      instrumentName: "IG Petrochemicals Ltd."
    },
    {
      instrumentId: "342",
      instrumentName: "Igarashi Motors India Ltd."
    },
    {
      instrumentId: "343",
      instrumentName: "IIFL Finance Ltd."
    },
    {
      instrumentId: "344",
      instrumentName: "IIFL Securities Ltd."
    },
    {
      instrumentId: "345",
      instrumentName: "IIFL Wealth Management Ltd."
    },
    {
      instrumentId: "346",
      instrumentName: "India Nippon Electricals Ltd."
    },
    {
      instrumentId: "347",
      instrumentName: "India Tourism Development Corporation Ltd."
    },
    {
      instrumentId: "348",
      instrumentName: "Indiabulls Housing Finance Ltd."
    },
    {
      instrumentId: "349",
      instrumentName: "Indiabulls Integrated Services Ltd."
    },
    {
      instrumentId: "350",
      instrumentName: "Indiabulls Real Estate Ltd."
    },
    {
      instrumentId: "351",
      instrumentName: "Indiabulls Ventures Ltd."
    },
    {
      instrumentId: "352",
      instrumentName: "Indiamart Intermesh Ltd."
    },
    {
      instrumentId: "353",
      instrumentName: "Indian Bank"
    },
    {
      instrumentId: "354",
      instrumentName: "Indian Energy Exchange Ltd."
    },
    {
      instrumentId: "355",
      instrumentName: "Indian Hume Pipe Company Ltd."
    },
    {
      instrumentId: "356",
      instrumentName: "Indian Oil Corporation Ltd."
    },
    {
      instrumentId: "357",
      instrumentName: "Indian Overseas Bank"
    },
    {
      instrumentId: "358",
      instrumentName: "Indian Terrain Fashions Ltd."
    },
    {
      instrumentId: "359",
      instrumentName: "Indo Count Industries Ltd."
    },
    {
      instrumentId: "360",
      instrumentName: "Indoco Remedies Ltd."
    },
    {
      instrumentId: "361",
      instrumentName: "Indostar Capital Finance Ltd."
    },
    {
      instrumentId: "362",
      instrumentName: "Indraprastha Gas Ltd."
    },
    {
      instrumentId: "363",
      instrumentName: "IndusInd Bank Ltd."
    },
    {
      instrumentId: "364",
      instrumentName: "INEOS Styrolution India Ltd."
    },
    {
      instrumentId: "365",
      instrumentName: "Infibeam Avenues Ltd."
    },
    {
      instrumentId: "366",
      instrumentName: "Info Edge (India) Ltd."
    },
    {
      instrumentId: "367",
      instrumentName: "Infosys Ltd."
    },
    {
      instrumentId: "368",
      instrumentName: "Ingersoll-Rand (India) Ltd."
    },
    {
      instrumentId: "369",
      instrumentName: "Inox Leisure Ltd."
    },
    {
      instrumentId: "370",
      instrumentName: "Inox Wind Ltd."
    },
    {
      instrumentId: "371",
      instrumentName: "Insecticides (India) Ltd."
    },
    {
      instrumentId: "372",
      instrumentName: "Intellect Design Arena Ltd."
    },
    {
      instrumentId: "373",
      instrumentName: "Interglobe Aviation Ltd."
    },
    {
      instrumentId: "374",
      instrumentName: "International Paper APPM Ltd."
    },
    {
      instrumentId: "375",
      instrumentName: "Ion Exchange (India) Ltd."
    },
    {
      instrumentId: "376",
      instrumentName: "Ipca Laboratories Ltd."
    },
    {
      instrumentId: "377",
      instrumentName: "IRB Infrastructure Developers Ltd."
    },
    {
      instrumentId: "378",
      instrumentName: "Ircon International Ltd."
    },
    {
      instrumentId: "379",
      instrumentName: "ISGEC Heavy Engineering Ltd."
    },
    {
      instrumentId: "380",
      instrumentName: "ITC Ltd."
    },
    {
      instrumentId: "381",
      instrumentName: "ITD Cementation India Ltd."
    },
    {
      instrumentId: "382",
      instrumentName: "ITI Ltd."
    },
    {
      instrumentId: "383",
      instrumentName: "J Kumar Infraproject Ltd."
    },
    {
      instrumentId: "384",
      instrumentName: "Jagran Prakashan Ltd."
    },
    {
      instrumentId: "385",
      instrumentName: "Jai Corp Ltd."
    },
    {
      instrumentId: "386",
      instrumentName: "Jain Irrigation Systems Ltd."
    },
    {
      instrumentId: "387",
      instrumentName: "Jaiprakash Associates Ltd."
    },
    {
      instrumentId: "388",
      instrumentName: "Jamna Auto Industries Ltd."
    },
    {
      instrumentId: "389",
      instrumentName: "JB Chemicals & Pharmaceuticals Ltd."
    },
    {
      instrumentId: "390",
      instrumentName: "Jet Airways (India) Ltd."
    },
    {
      instrumentId: "391",
      instrumentName: "Jindal Drilling & Industries Ltd."
    },
    {
      instrumentId: "392",
      instrumentName: "Jindal Saw Ltd."
    },
    {
      instrumentId: "393",
      instrumentName: "Jindal Stainless (Hisar) Ltd."
    },
    {
      instrumentId: "394",
      instrumentName: "Jindal Stainless Ltd."
    },
    {
      instrumentId: "395",
      instrumentName: "Jindal Steel & Power Ltd."
    },
    {
      instrumentId: "396",
      instrumentName: "JK Cement Ltd."
    },
    {
      instrumentId: "397",
      instrumentName: "JK Lakshmi Cement Ltd."
    },
    {
      instrumentId: "398",
      instrumentName: "JK Paper Ltd."
    },
    {
      instrumentId: "399",
      instrumentName: "JK Tyre & Industries Ltd."
    },
    {
      instrumentId: "400",
      instrumentName: "JM Financial Ltd."
    },
    {
      instrumentId: "401",
      instrumentName: "JMC Projects (India) Ltd."
    },
    {
      instrumentId: "402",
      instrumentName: "Johnson Controls - Hitachi Air Conditioning India Ltd."
    },
    {
      instrumentId: "403",
      instrumentName: "JSW Energy Ltd."
    },
    {
      instrumentId: "404",
      instrumentName: "JSW Steel Ltd."
    },
    {
      instrumentId: "405",
      instrumentName: "JTEKT India Ltd."
    },
    {
      instrumentId: "406",
      instrumentName: "Jubilant FoodWorks Ltd."
    },
    {
      instrumentId: "407",
      instrumentName: "Jubilant Life Sciences Ltd."
    },
    {
      instrumentId: "408",
      instrumentName: "Just Dial Ltd."
    },
    {
      instrumentId: "409",
      instrumentName: "Jyothy Labs Ltd."
    },
    {
      instrumentId: "410",
      instrumentName: "Jyoti Structures Ltd."
    },
    {
      instrumentId: "411",
      instrumentName: "Kajaria Ceramics Ltd."
    },
    {
      instrumentId: "412",
      instrumentName: "Kalpataru Power Transmission Ltd."
    },
    {
      instrumentId: "413",
      instrumentName: "Kalyani Investment Company Ltd."
    },
    {
      instrumentId: "414",
      instrumentName: "Kalyani Steels Ltd."
    },
    {
      instrumentId: "415",
      instrumentName: "Kamdhenu Ltd."
    },
    {
      instrumentId: "416",
      instrumentName: "Kansai Nerolac Paints Ltd."
    },
    {
      instrumentId: "417",
      instrumentName: "Kansal Fibres Ltd."
    },
    {
      instrumentId: "418",
      instrumentName: "Karur Vysya Bank Ltd."
    },
    {
      instrumentId: "419",
      instrumentName: "KCP Ltd."
    },
    {
      instrumentId: "420",
      instrumentName: "KEC International Ltd."
    },
    {
      instrumentId: "421",
      instrumentName: "KEI Industries Ltd."
    },
    {
      instrumentId: "422",
      instrumentName: "Kennametal India Ltd."
    },
    {
      instrumentId: "423",
      instrumentName: "Kewal Kiran Clothing Ltd."
    },
    {
      instrumentId: "424",
      instrumentName: "Khadim India Ltd."
    },
    {
      instrumentId: "425",
      instrumentName: "KIOCL Ltd"
    },
    {
      instrumentId: "426",
      instrumentName: "Kirloskar Brothers Ltd."
    },
    {
      instrumentId: "427",
      instrumentName: "Kirloskar Ferrous Industries Ltd."
    },
    {
      instrumentId: "428",
      instrumentName: "Kirloskar Oil Engines Ltd."
    },
    {
      instrumentId: "429",
      instrumentName: "Kirloskar Pneumatic Company Ltd."
    },
    {
      instrumentId: "430",
      instrumentName: "KNR Construction Ltd."
    },
    {
      instrumentId: "431",
      instrumentName: "Kotak Mahindra Bank Ltd."
    },
    {
      instrumentId: "432",
      instrumentName: "Kothari Industrial Corporation Ltd."
    },
    {
      instrumentId: "433",
      instrumentName: "KPIT Technologies Ltd."
    },
    {
      instrumentId: "434",
      instrumentName: "KPR Mill Ltd."
    },
    {
      instrumentId: "435",
      instrumentName: "KRBL Ltd."
    },
    {
      instrumentId: "436",
      instrumentName: "Kridhan Infra Ltd."
    },
    {
      instrumentId: "437",
      instrumentName: "KSB Ltd."
    },
    {
      instrumentId: "438",
      instrumentName: "KSK Energy Ventures Ltd."
    },
    {
      instrumentId: "439",
      instrumentName: "L&T Finance Holdings Ltd."
    },
    {
      instrumentId: "440",
      instrumentName: "L&T Technology Services Ltd."
    },
    {
      instrumentId: "441",
      instrumentName: "La Opala RG Ltd."
    },
    {
      instrumentId: "442",
      instrumentName: "Lakshmi Machine Works Ltd."
    },
    {
      instrumentId: "443",
      instrumentName: "Larsen & Toubro Infotech Ltd."
    },
    {
      instrumentId: "444",
      instrumentName: "Larsen & Toubro Ltd."
    },
    {
      instrumentId: "445",
      instrumentName: "Laurus Labs Ltd."
    },
    {
      instrumentId: "446",
      instrumentName: "Lemon Tree Hotels Ltd."
    },
    {
      instrumentId: "447",
      instrumentName: "LG Balakrishnan & Brothers Ltd."
    },
    {
      instrumentId: "448",
      instrumentName: "LIC Housing Finance Ltd."
    },
    {
      instrumentId: "449",
      instrumentName: "Linde India Ltd."
    },
    {
      instrumentId: "450",
      instrumentName: "LT Foods Ltd."
    },
    {
      instrumentId: "451",
      instrumentName: "Lumax Auto Technologies Ltd."
    },
    {
      instrumentId: "452",
      instrumentName: "Lumax Industries Ltd."
    },
    {
      instrumentId: "453",
      instrumentName: "Lupin Ltd."
    },
    {
      instrumentId: "454",
      instrumentName: "Lux Industries Ltd."
    },
    {
      instrumentId: "455",
      instrumentName: "Macpower CNC Machines Ltd"
    },
    {
      instrumentId: "456",
      instrumentName: "Magma Fincorp Ltd."
    },
    {
      instrumentId: "457",
      instrumentName: "Mahanagar Gas Ltd."
    },
    {
      instrumentId: "458",
      instrumentName: "Maharashtra Scooters Ltd."
    },
    {
      instrumentId: "459",
      instrumentName: "Maharashtra Seamless Ltd."
    },
    {
      instrumentId: "460",
      instrumentName: "Mahindra & Mahindra Financial Services Ltd."
    },
    {
      instrumentId: "461",
      instrumentName: "Mahindra & Mahindra Ltd."
    },
    {
      instrumentId: "462",
      instrumentName: "Mahindra CIE Automotive Ltd."
    },
    {
      instrumentId: "463",
      instrumentName: "Mahindra Holidays & Resorts India Ltd."
    },
    {
      instrumentId: "464",
      instrumentName: "Mahindra Lifespace Developers Ltd."
    },
    {
      instrumentId: "465",
      instrumentName: "Mahindra Logistics Ltd."
    },
    {
      instrumentId: "466",
      instrumentName: "Majesco Ltd."
    },
    {
      instrumentId: "467",
      instrumentName: "Manappuram Finance Ltd."
    },
    {
      instrumentId: "468",
      instrumentName: "Mangalam Cement Ltd."
    },
    {
      instrumentId: "469",
      instrumentName: "Mangalore Refinery & Petrochemicals Ltd."
    },
    {
      instrumentId: "470",
      instrumentName: "Manpasand Beverages Ltd."
    },
    {
      instrumentId: "471",
      instrumentName: "Marico Ltd."
    },
    {
      instrumentId: "472",
      instrumentName: "Maruti Suzuki India Ltd."
    },
    {
      instrumentId: "473",
      instrumentName: "MAS Financial Services Ltd."
    },
    {
      instrumentId: "474",
      instrumentName: "Mastek Ltd."
    },
    {
      instrumentId: "475",
      instrumentName: "Matrimony.Com Ltd."
    },
    {
      instrumentId: "476",
      instrumentName: "Max Financial Services Ltd."
    },
    {
      instrumentId: "477",
      instrumentName: "Max India Ltd."
    },
    {
      instrumentId: "478",
      instrumentName: "Mayur Uniquoters Ltd."
    },
    {
      instrumentId: "479",
      instrumentName: "Mcleod Russel India Ltd."
    },
    {
      instrumentId: "480",
      instrumentName: "Meghmani Organics Ltd."
    },
    {
      instrumentId: "481",
      instrumentName: "Menon Bearings Ltd."
    },
    {
      instrumentId: "482",
      instrumentName: "MEP Infrastructure Developers Ltd."
    },
    {
      instrumentId: "483",
      instrumentName: "Metropolis Healthcare Ltd."
    },
    {
      instrumentId: "484",
      instrumentName: "Milestone Global Ltd."
    },
    {
      instrumentId: "485",
      instrumentName: "Minda Corporation Ltd."
    },
    {
      instrumentId: "486",
      instrumentName: "Minda Industries Ltd."
    },
    {
      instrumentId: "487",
      instrumentName: "Mindtree Ltd."
    },
    {
      instrumentId: "488",
      instrumentName: "Mishra Dhatu Nigam Ltd."
    },
    {
      instrumentId: "489",
      instrumentName: "MM Forgings Ltd."
    },
    {
      instrumentId: "490",
      instrumentName: "MMTC Ltd."
    },
    {
      instrumentId: "491",
      instrumentName: "Modern Insulators Ltd."
    },
    {
      instrumentId: "492",
      instrumentName: "MOIL Ltd."
    },
    {
      instrumentId: "493",
      instrumentName: "Mold-Tek Packaging Ltd."
    },
    {
      instrumentId: "494",
      instrumentName: "Monsanto India Ltd."
    },
    {
      instrumentId: "495",
      instrumentName: "Monte Carlo Fashions Ltd."
    },
    {
      instrumentId: "496",
      instrumentName: "Motherson Sumi Systems Ltd."
    },
    {
      instrumentId: "497",
      instrumentName: "Motilal Oswal Financial Services Ltd."
    },
    {
      instrumentId: "498",
      instrumentName: "Mphasis Ltd."
    },
    {
      instrumentId: "499",
      instrumentName: "MPS Ltd."
    },
    {
      instrumentId: "500",
      instrumentName: "MRF Ltd."
    },
    {
      instrumentId: "501",
      instrumentName: "Multi Commodity Exchange Of India Ltd."
    },
    {
      instrumentId: "502",
      instrumentName: "Music Broadcast Ltd."
    },
    {
      instrumentId: "503",
      instrumentName: "Muthoot Capital Services Ltd."
    },
    {
      instrumentId: "504",
      instrumentName: "Muthoot Finance Ltd."
    },
    {
      instrumentId: "505",
      instrumentName: "Narayana Hrudayalaya Ltd."
    },
    {
      instrumentId: "506",
      instrumentName: "Natco Pharma Ltd."
    },
    {
      instrumentId: "507",
      instrumentName: "Nath Bio-Genes (India) Ltd."
    },
    {
      instrumentId: "508",
      instrumentName: "National Aluminium Company Ltd."
    },
    {
      instrumentId: "509",
      instrumentName: "Nava Bharat Ventures Ltd."
    },
    {
      instrumentId: "510",
      instrumentName: "Navin Fluorine International Ltd."
    },
    {
      instrumentId: "511",
      instrumentName: "Navkar Corporation Ltd."
    },
    {
      instrumentId: "512",
      instrumentName: "Navneet Education Ltd."
    },
    {
      instrumentId: "513",
      instrumentName: "NBCC (India) Ltd."
    },
    {
      instrumentId: "514",
      instrumentName: "NCC Ltd."
    },
    {
      instrumentId: "515",
      instrumentName: "NCL Industries Ltd."
    },
    {
      instrumentId: "516",
      instrumentName: "Neogen Chemicals Ltd."
    },
    {
      instrumentId: "517",
      instrumentName: "Nesco Ltd."
    },
    {
      instrumentId: "518",
      instrumentName: "Nestle India Ltd."
    },
    {
      instrumentId: "519",
      instrumentName: "Network 18 Media & Investment Ltd."
    },
    {
      instrumentId: "520",
      instrumentName: "Neuland Laboratories Ltd."
    },
    {
      instrumentId: "521",
      instrumentName: "Newgen Software Technologies Ltd."
    },
    {
      instrumentId: "522",
      instrumentName: "NHPC Ltd."
    },
    {
      instrumentId: "523",
      instrumentName: "NIIT Ltd."
    },
    {
      instrumentId: "524",
      instrumentName: "NIIT Technologies Ltd."
    },
    {
      instrumentId: "525",
      instrumentName: "Nila Infrastructures Ltd."
    },
    {
      instrumentId: "526",
      instrumentName: "Nilkamal Ltd."
    },
    {
      instrumentId: "527",
      instrumentName: "Nitin Spinners Ltd."
    },
    {
      instrumentId: "528",
      instrumentName: "NLC India Ltd."
    },
    {
      instrumentId: "529",
      instrumentName: "NMDC Ltd."
    },
    {
      instrumentId: "530",
      instrumentName: "Nocil Ltd."
    },
    {
      instrumentId: "531",
      instrumentName: "NR Agarwal Industries Ltd."
    },
    {
      instrumentId: "532",
      instrumentName: "NRB Bearings Ltd."
    },
    {
      instrumentId: "533",
      instrumentName: "NTPC Ltd."
    },
    {
      instrumentId: "534",
      instrumentName: "Nucleus Software Exports Ltd."
    },
    {
      instrumentId: "535",
      instrumentName: "Numero Uno International Ltd."
    },
    {
      instrumentId: "536",
      instrumentName: "Oberoi Realty Ltd."
    },
    {
      instrumentId: "537",
      instrumentName: "Oil & Natural Gas Corporation Ltd."
    },
    {
      instrumentId: "538",
      instrumentName: "Oil India Ltd."
    },
    {
      instrumentId: "539",
      instrumentName: "Omax Autos Ltd."
    },
    {
      instrumentId: "540",
      instrumentName: "Omaxe Ltd."
    },
    {
      instrumentId: "541",
      instrumentName: "One Point One Solutions Ltd."
    },
    {
      instrumentId: "542",
      instrumentName: "Oracle Financial Services Software Ltd."
    },
    {
      instrumentId: "543",
      instrumentName: "Orient Cement Ltd."
    },
    {
      instrumentId: "544",
      instrumentName: "Orient Electric Ltd."
    },
    {
      instrumentId: "545",
      instrumentName: "Orient Paper & Industries Ltd."
    },
    {
      instrumentId: "546",
      instrumentName: "Orient Refractories Ltd."
    },
    {
      instrumentId: "547",
      instrumentName: "Oriental Bank Of Commerce"
    },
    {
      instrumentId: "548",
      instrumentName: "Oriental Carbon & Chemicals Ltd."
    },
    {
      instrumentId: "549",
      instrumentName: "Oriental Hotels Ltd."
    },
    {
      instrumentId: "550",
      instrumentName: "Page Industries Ltd."
    },
    {
      instrumentId: "551",
      instrumentName: "Panacea Biotec Ltd."
    },
    {
      instrumentId: "552",
      instrumentName: "Parag Milk Foods Ltd."
    },
    {
      instrumentId: "553",
      instrumentName: "PC Jeweller Ltd."
    },
    {
      instrumentId: "554",
      instrumentName: "Pennar Industries Ltd."
    },
    {
      instrumentId: "555",
      instrumentName: "Persistent Systems Ltd."
    },
    {
      instrumentId: "556",
      instrumentName: "Petronet LNG Ltd."
    },
    {
      instrumentId: "557",
      instrumentName: "Pfizer Ltd."
    },
    {
      instrumentId: "558",
      instrumentName: "Phillips Carbon Black Ltd."
    },
    {
      instrumentId: "559",
      instrumentName: "Phoenix Mills Ltd."
    },
    {
      instrumentId: "560",
      instrumentName: "PI Industries Ltd."
    },
    {
      instrumentId: "561",
      instrumentName: "Pidilite Industries Ltd."
    },
    {
      instrumentId: "562",
      instrumentName: "Pilani Investment & Industries Corporation Ltd."
    },
    {
      instrumentId: "563",
      instrumentName: "Piramal Enterprises Ltd."
    },
    {
      instrumentId: "564",
      instrumentName: "Plastiblends India Ltd."
    },
    {
      instrumentId: "565",
      instrumentName: "PNB Housing Finance Ltd."
    },
    {
      instrumentId: "566",
      instrumentName: "PNC Infratech Ltd."
    },
    {
      instrumentId: "567",
      instrumentName: "Poddar Housing and Development Ltd."
    },
    {
      instrumentId: "568",
      instrumentName: "Poddar Pigments Ltd."
    },
    {
      instrumentId: "569",
      instrumentName: "Pokarna Ltd."
    },
    {
      instrumentId: "570",
      instrumentName: "Polycab India Ltd."
    },
    {
      instrumentId: "571",
      instrumentName: "Polyplex Corporation Ltd."
    },
    {
      instrumentId: "572",
      instrumentName: "Power Finance Corporation Ltd."
    },
    {
      instrumentId: "573",
      instrumentName: "Power Grid Corporation Of India Ltd."
    },
    {
      instrumentId: "574",
      instrumentName: "Power Mech Projects Ltd."
    },
    {
      instrumentId: "575",
      instrumentName: "Prabhat Dairy Ltd."
    },
    {
      instrumentId: "576",
      instrumentName: "Praj Industries Ltd."
    },
    {
      instrumentId: "577",
      instrumentName: "Prakash Pipes Ltd."
    },
    {
      instrumentId: "578",
      instrumentName: "Prataap Snacks Ltd."
    },
    {
      instrumentId: "579",
      instrumentName: "Praxis Home Retail Ltd."
    },
    {
      instrumentId: "580",
      instrumentName: "Precision Camshafts Ltd."
    },
    {
      instrumentId: "581",
      instrumentName: "Premier Explosives Ltd."
    },
    {
      instrumentId: "582",
      instrumentName: "Prestige Estate Projects Ltd."
    },
    {
      instrumentId: "583",
      instrumentName: "Pricol Ltd."
    },
    {
      instrumentId: "584",
      instrumentName: "Prism Johnson Ltd."
    },
    {
      instrumentId: "585",
      instrumentName: "Procter & Gamble Health Ltd."
    },
    {
      instrumentId: "586",
      instrumentName: "Procter & Gamble Hygiene & Health Care Ltd."
    },
    {
      instrumentId: "587",
      instrumentName: "PSP Projects Ltd."
    },
    {
      instrumentId: "588",
      instrumentName: "PTC India Ltd."
    },
    {
      instrumentId: "589",
      instrumentName: "Punjab National Bank"
    },
    {
      instrumentId: "590",
      instrumentName: "Puravankara Ltd."
    },
    {
      instrumentId: "591",
      instrumentName: "PVR Ltd."
    },
    {
      instrumentId: "592",
      instrumentName: "Quantum Information Services"
    },
    {
      instrumentId: "593",
      instrumentName: "Quess Corp Ltd."
    },
    {
      instrumentId: "594",
      instrumentName: "Radico Khaitan Ltd."
    },
    {
      instrumentId: "595",
      instrumentName: "Rail Vikas Nigam Ltd."
    },
    {
      instrumentId: "596",
      instrumentName: "Rain Industries Ltd."
    },
    {
      instrumentId: "597",
      instrumentName: "Rajapalayam Mills Ltd."
    },
    {
      instrumentId: "598",
      instrumentName: "Rajesh Exports Ltd."
    },
    {
      instrumentId: "599",
      instrumentName: "Rajratan Global Wire Ltd."
    },
    {
      instrumentId: "600",
      instrumentName: "Rallis India Ltd."
    },
    {
      instrumentId: "601",
      instrumentName: "Ramco Industries Ltd."
    },
    {
      instrumentId: "602",
      instrumentName: "Ramco Systems Ltd."
    },
    {
      instrumentId: "603",
      instrumentName: "Ramkrishna Forgings Ltd."
    },
    {
      instrumentId: "604",
      instrumentName: "Rane Holdings Ltd."
    },
    {
      instrumentId: "605",
      instrumentName: "Rashtriya Chemicals & Fertilizers Ltd."
    },
    {
      instrumentId: "606",
      instrumentName: "Ratnamani Metals & Tubes Ltd."
    },
    {
      instrumentId: "607",
      instrumentName: "Raymond Ltd."
    },
    {
      instrumentId: "608",
      instrumentName: "RBL Bank Ltd."
    },
    {
      instrumentId: "609",
      instrumentName: "REC Ltd."
    },
    {
      instrumentId: "610",
      instrumentName: "Redington (India) Ltd."
    },
    {
      instrumentId: "611",
      instrumentName: "Relaxo Footwears Ltd."
    },
    {
      instrumentId: "612",
      instrumentName: "Reliance Capital Ltd."
    },
    {
      instrumentId: "613",
      instrumentName: "Reliance Communications Ltd."
    },
    {
      instrumentId: "614",
      instrumentName: "Reliance Home Finance Ltd."
    },
    {
      instrumentId: "615",
      instrumentName: "Reliance Industries Ltd."
    },
    {
      instrumentId: "616",
      instrumentName: "Reliance Infrastructure Ltd."
    },
    {
      instrumentId: "617",
      instrumentName: "Reliance Nippon Life Asset Management Ltd."
    },
    {
      instrumentId: "618",
      instrumentName: "Reliance Power Ltd."
    },
    {
      instrumentId: "619",
      instrumentName: "Repco Home Finance Ltd."
    },
    {
      instrumentId: "620",
      instrumentName: "Rico Auto Industries Ltd."
    },
    {
      instrumentId: "621",
      instrumentName: "Rites Ltd."
    },
    {
      instrumentId: "622",
      instrumentName: "Royal Orchid Hotels Ltd."
    },
    {
      instrumentId: "623",
      instrumentName: "RPP Infra Projects Ltd."
    },
    {
      instrumentId: "624",
      instrumentName: "RSWM Ltd."
    },
    {
      instrumentId: "625",
      instrumentName: "S Chand And Co Ltd."
    },
    {
      instrumentId: "626",
      instrumentName: "Sadbhav Engineering Ltd."
    },
    {
      instrumentId: "627",
      instrumentName: "Sadbhav Infrastructure Project Ltd."
    },
    {
      instrumentId: "628",
      instrumentName: "Sagar Cements Ltd."
    },
    {
      instrumentId: "629",
      instrumentName: "Salzer Electronics Ltd."
    },
    {
      instrumentId: "630",
      instrumentName: "Sandhar Technologies Ltd."
    },
    {
      instrumentId: "631",
      instrumentName: "Sanghi Industries Ltd."
    },
    {
      instrumentId: "632",
      instrumentName: "Sanghvi Movers Ltd."
    },
    {
      instrumentId: "633",
      instrumentName: "Sanofi India Ltd."
    },
    {
      instrumentId: "634",
      instrumentName: "Saregama India Ltd."
    },
    {
      instrumentId: "635",
      instrumentName: "Sarla Performance Fibres Ltd."
    },
    {
      instrumentId: "636",
      instrumentName: "Sasken Technologies Ltd."
    },
    {
      instrumentId: "637",
      instrumentName: "Satin Creditcare Network Ltd."
    },
    {
      instrumentId: "638",
      instrumentName: "Savita Oil Technologies Ltd."
    },
    {
      instrumentId: "639",
      instrumentName: "SBI Life Insurance Company Ltd."
    },
    {
      instrumentId: "640",
      instrumentName: "Schaeffler India Ltd."
    },
    {
      instrumentId: "641",
      instrumentName: "Schneider Electric Infrastructure Ltd."
    },
    {
      instrumentId: "642",
      instrumentName: "Security And Intelligence Services India Ltd."
    },
    {
      instrumentId: "643",
      instrumentName: "Sequent Scientific Ltd."
    },
    {
      instrumentId: "644",
      instrumentName: "Seya Industries Ltd."
    },
    {
      instrumentId: "645",
      instrumentName: "SH Kelkar & Co Ltd."
    },
    {
      instrumentId: "646",
      instrumentName: "Shaily Engineering Plastics Ltd."
    },
    {
      instrumentId: "647",
      instrumentName: "Shalby Ltd."
    },
    {
      instrumentId: "648",
      instrumentName: "Shankara Building Products Ltd."
    },
    {
      instrumentId: "649",
      instrumentName: "Shanthi Gears Ltd."
    },
    {
      instrumentId: "650",
      instrumentName: "Sharda Cropchem Ltd."
    },
    {
      instrumentId: "651",
      instrumentName: "Sharda Motor Industries Ltd."
    },
    {
      instrumentId: "652",
      instrumentName: "Sheela Foam Ltd."
    },
    {
      instrumentId: "653",
      instrumentName: "Shilpa Medicare Ltd."
    },
    {
      instrumentId: "654",
      instrumentName: "Shipping Corporation Of India Ltd."
    },
    {
      instrumentId: "655",
      instrumentName: "Shoppers Stop Ltd."
    },
    {
      instrumentId: "656",
      instrumentName: "Shree Cement Ltd."
    },
    {
      instrumentId: "657",
      instrumentName: "Shree Pushkar Chemicals & Fertilisers Ltd."
    },
    {
      instrumentId: "658",
      instrumentName: "Shriram City Union Finance Ltd."
    },
    {
      instrumentId: "659",
      instrumentName: "Shriram Transport Finance Company Ltd."
    },
    {
      instrumentId: "660",
      instrumentName: "Shukra Jewellery Ltd."
    },
    {
      instrumentId: "661",
      instrumentName: "Siemens Ltd."
    },
    {
      instrumentId: "662",
      instrumentName: "Simplex Infrastructures Ltd."
    },
    {
      instrumentId: "663",
      instrumentName: "Siti Networks Ltd."
    },
    {
      instrumentId: "664",
      instrumentName: "Siyaram Silk Mills Ltd."
    },
    {
      instrumentId: "665",
      instrumentName: "SJVN Ltd."
    },
    {
      instrumentId: "666",
      instrumentName: "SKF India Ltd."
    },
    {
      instrumentId: "667",
      instrumentName: "Skipper Ltd."
    },
    {
      instrumentId: "668",
      instrumentName: "SML Isuzu Ltd."
    },
    {
      instrumentId: "669",
      instrumentName: "Sobha Ltd."
    },
    {
      instrumentId: "670",
      instrumentName: "Solar Industries (India) Ltd."
    },
    {
      instrumentId: "671",
      instrumentName: "Solara Active Pharma Science Ltd."
    },
    {
      instrumentId: "672",
      instrumentName: "Somany Ceramics Ltd."
    },
    {
      instrumentId: "673",
      instrumentName: "Sonata Software Ltd."
    },
    {
      instrumentId: "674",
      instrumentName: "South West Pinnacle Exploration Ltd."
    },
    {
      instrumentId: "675",
      instrumentName: "SP Apparels Ltd."
    },
    {
      instrumentId: "676",
      instrumentName: "SpencerS Retail Ltd."
    },
    {
      instrumentId: "677",
      instrumentName: "Spicejet Ltd."
    },
    {
      instrumentId: "678",
      instrumentName: "SREI Infrastructure Finance Ltd."
    },
    {
      instrumentId: "679",
      instrumentName: "SRF Ltd."
    },
    {
      instrumentId: "680",
      instrumentName: "Srikalahasthi Pipes Ltd."
    },
    {
      instrumentId: "681",
      instrumentName: "SS Infrastructure Development Consultants Ltd."
    },
    {
      instrumentId: "682",
      instrumentName: "Star Cement Ltd."
    },
    {
      instrumentId: "683",
      instrumentName: "Starlog Enterprises Ltd."
    },
    {
      instrumentId: "684",
      instrumentName: "State Bank Of India"
    },
    {
      instrumentId: "685",
      instrumentName: "Steel Authority Of India Ltd."
    },
    {
      instrumentId: "686",
      instrumentName: "Sterling Tools Ltd."
    },
    {
      instrumentId: "687",
      instrumentName: "Sterlite Technologies Ltd."
    },
    {
      instrumentId: "688",
      instrumentName: "Strides Pharma Science Ltd."
    },
    {
      instrumentId: "689",
      instrumentName: "Stylam Industries Ltd."
    },
    {
      instrumentId: "690",
      instrumentName: "Subros Ltd."
    },
    {
      instrumentId: "691",
      instrumentName: "Sudarshan Chemical Industries Ltd."
    },
    {
      instrumentId: "692",
      instrumentName: "Summit Securities Ltd."
    },
    {
      instrumentId: "693",
      instrumentName: "Sun Pharma Advanced Research Company Ltd."
    },
    {
      instrumentId: "694",
      instrumentName: "Sun Pharmaceutical Industries Ltd."
    },
    {
      instrumentId: "695",
      instrumentName: "Sun TV Network Ltd."
    },
    {
      instrumentId: "696",
      instrumentName: "Sundaram Finance Holdings Ltd."
    },
    {
      instrumentId: "697",
      instrumentName: "Sundaram Finance Ltd."
    },
    {
      instrumentId: "698",
      instrumentName: "Sundaram-Clayton Ltd."
    },
    {
      instrumentId: "699",
      instrumentName: "Sundram Fasteners Ltd."
    },
    {
      instrumentId: "700",
      instrumentName: "Sunteck Realty Ltd."
    },
    {
      instrumentId: "701",
      instrumentName: "Suprajit Engineering Ltd."
    },
    {
      instrumentId: "702",
      instrumentName: "Supreme Industries Ltd."
    },
    {
      instrumentId: "703",
      instrumentName: "Supreme Petrochem Ltd."
    },
    {
      instrumentId: "704",
      instrumentName: "Suven Life Sciences Ltd."
    },
    {
      instrumentId: "705",
      instrumentName: "Suzlon Energy Ltd."
    },
    {
      instrumentId: "706",
      instrumentName: "Swan Energy Ltd."
    },
    {
      instrumentId: "707",
      instrumentName: "Swaraj Engines Ltd."
    },
    {
      instrumentId: "708",
      instrumentName: "Symphony Ltd."
    },
    {
      instrumentId: "709",
      instrumentName: "Syndicate Bank"
    },
    {
      instrumentId: "710",
      instrumentName: "Syngene International Ltd."
    },
    {
      instrumentId: "711",
      instrumentName: "Taj GVK Hotels & Resorts Ltd."
    },
    {
      instrumentId: "712",
      instrumentName: "Take Solutions Ltd."
    },
    {
      instrumentId: "713",
      instrumentName: "Tamil Nadu Newsprint & Papers Ltd."
    },
    {
      instrumentId: "714",
      instrumentName: "Tata Chemicals Ltd."
    },
    {
      instrumentId: "715",
      instrumentName: "Tata Coffee Ltd."
    },
    {
      instrumentId: "716",
      instrumentName: "Tata Communications Ltd."
    },
    {
      instrumentId: "717",
      instrumentName: "Tata Consultancy Services Ltd."
    },
    {
      instrumentId: "718",
      instrumentName: "Tata Elxsi Ltd."
    },
    {
      instrumentId: "719",
      instrumentName: "Tata Global Beverages Ltd."
    },
    {
      instrumentId: "720",
      instrumentName: "Tata Investment Corporation Ltd."
    },
    {
      instrumentId: "721",
      instrumentName: "Tata Metaliks Ltd."
    },
    {
      instrumentId: "722",
      instrumentName: "Tata Motors Ltd."
    },
    {
      instrumentId: "723",
      instrumentName: "Tata Power Company Ltd."
    },
    {
      instrumentId: "724",
      instrumentName: "Tata Sponge Iron Ltd."
    },
    {
      instrumentId: "725",
      instrumentName: "Tata Steel Ltd."
    },
    {
      instrumentId: "726",
      instrumentName: "TCI Express Ltd."
    },
    {
      instrumentId: "727",
      instrumentName: "TCNS Clothing Co Ltd."
    },
    {
      instrumentId: "728",
      instrumentName: "TD Power Systems Ltd."
    },
    {
      instrumentId: "729",
      instrumentName: "TeamLease Services Ltd."
    },
    {
      instrumentId: "730",
      instrumentName: "Tech Mahindra Ltd."
    },
    {
      instrumentId: "731",
      instrumentName: "Techno Electric & Engineering Company Ltd."
    },
    {
      instrumentId: "732",
      instrumentName: "Tejas Networks Ltd."
    },
    {
      instrumentId: "733",
      instrumentName: "Texmaco Rail & Engineering Ltd."
    },
    {
      instrumentId: "734",
      instrumentName: "Thangamayil Jewellery Ltd."
    },
    {
      instrumentId: "735",
      instrumentName: "The Anup Engineering Ltd."
    },
    {
      instrumentId: "736",
      instrumentName: "The Federal Bank Ltd."
    },
    {
      instrumentId: "737",
      instrumentName: "The Great Eastern Shipping Company Ltd."
    },
    {
      instrumentId: "738",
      instrumentName: "The India Cements Ltd."
    },
    {
      instrumentId: "739",
      instrumentName: "The Indian Hotels Company Ltd."
    },
    {
      instrumentId: "740",
      instrumentName: "The Jammu & Kashmir Bank Ltd."
    },
    {
      instrumentId: "741",
      instrumentName: "The Karnataka Bank Ltd."
    },
    {
      instrumentId: "742",
      instrumentName: "The Lakshmi Vilas Bank Ltd."
    },
    {
      instrumentId: "743",
      instrumentName: "The New India Assurance Co. Ltd."
    },
    {
      instrumentId: "744",
      instrumentName: "The Ramco Cements Ltd."
    },
    {
      instrumentId: "745",
      instrumentName: "The South Indian Bank Ltd."
    },
    {
      instrumentId: "746",
      instrumentName: "Thermax Ltd."
    },
    {
      instrumentId: "747",
      instrumentName: "Thomas Cook (India) Ltd."
    },
    {
      instrumentId: "748",
      instrumentName: "Thyrocare Technologies Ltd."
    },
    {
      instrumentId: "749",
      instrumentName: "TIL Ltd."
    },
    {
      instrumentId: "750",
      instrumentName: "Time Technoplast Ltd."
    },
    {
      instrumentId: "751",
      instrumentName: "Timken India Ltd."
    },
    {
      instrumentId: "752",
      instrumentName: "Titagarh Wagons Ltd."
    },
    {
      instrumentId: "753",
      instrumentName: "Titan Company Ltd."
    },
    {
      instrumentId: "754",
      instrumentName: "Torrent Pharmaceuticals Ltd."
    },
    {
      instrumentId: "755",
      instrumentName: "Torrent Power Ltd."
    },
    {
      instrumentId: "756",
      instrumentName: "Transformers & Rectifiers (India) Ltd."
    },
    {
      instrumentId: "757",
      instrumentName: "Transport Corporation Of India Ltd."
    },
    {
      instrumentId: "758",
      instrumentName: "Trent Ltd."
    },
    {
      instrumentId: "759",
      instrumentName: "Trident Ltd."
    },
    {
      instrumentId: "760",
      instrumentName: "Triton Valves Ltd."
    },
    {
      instrumentId: "761",
      instrumentName: "Triveni Engineering & Industries Ltd."
    },
    {
      instrumentId: "762",
      instrumentName: "Triveni Turbine Ltd."
    },
    {
      instrumentId: "763",
      instrumentName: "TTK Healthcare Ltd."
    },
    {
      instrumentId: "764",
      instrumentName: "TTK Prestige Ltd."
    },
    {
      instrumentId: "765",
      instrumentName: "Tube Investments of India Ltd."
    },
    {
      instrumentId: "766",
      instrumentName: "TV Today Network Ltd."
    },
    {
      instrumentId: "767",
      instrumentName: "TV18 Broadcast Ltd."
    },
    {
      instrumentId: "768",
      instrumentName: "TVS Motor Company Ltd."
    },
    {
      instrumentId: "769",
      instrumentName: "TVS Srichakra Ltd."
    },
    {
      instrumentId: "770",
      instrumentName: "UCO Bank"
    },
    {
      instrumentId: "771",
      instrumentName: "Uflex Ltd."
    },
    {
      instrumentId: "772",
      instrumentName: "UFO Moviez India Ltd."
    },
    {
      instrumentId: "773",
      instrumentName: "Ujjivan Financial Services Ltd."
    },
    {
      instrumentId: "774",
      instrumentName: "Ultramarine & Pigments Ltd."
    },
    {
      instrumentId: "775",
      instrumentName: "Ultratech Cement Ltd."
    },
    {
      instrumentId: "776",
      instrumentName: "Unichem Laboratories Ltd."
    },
    {
      instrumentId: "777",
      instrumentName: "Union Bank Of India"
    },
    {
      instrumentId: "778",
      instrumentName: "United Bank of India"
    },
    {
      instrumentId: "779",
      instrumentName: "United Breweries Ltd."
    },
    {
      instrumentId: "780",
      instrumentName: "United Spirits Ltd."
    },
    {
      instrumentId: "781",
      instrumentName: "UPL Ltd."
    },
    {
      instrumentId: "782",
      instrumentName: "USG Tech Solutions Ltd."
    },
    {
      instrumentId: "783",
      instrumentName: "V2 Retail Ltd."
    },
    {
      instrumentId: "784",
      instrumentName: "VA Tech Wabag Ltd."
    },
    {
      instrumentId: "785",
      instrumentName: "Vaibhav Global Ltd."
    },
    {
      instrumentId: "786",
      instrumentName: "Valiant Organics Ltd."
    },
    {
      instrumentId: "787",
      instrumentName: "Vardhman Special Steels Ltd."
    },
    {
      instrumentId: "788",
      instrumentName: "Vardhman Textiles Ltd."
    },
    {
      instrumentId: "789",
      instrumentName: "Varroc Engineering Ltd."
    },
    {
      instrumentId: "790",
      instrumentName: "Varun Beverages Ltd."
    },
    {
      instrumentId: "791",
      instrumentName: "Vedanta Ltd."
    },
    {
      instrumentId: "792",
      instrumentName: "VenkyS (India) Ltd."
    },
    {
      instrumentId: "793",
      instrumentName: "Vesuvius India Ltd."
    },
    {
      instrumentId: "794",
      instrumentName: "V-Guard Industries Ltd."
    },
    {
      instrumentId: "795",
      instrumentName: "Vinati Organics Ltd."
    },
    {
      instrumentId: "796",
      instrumentName: "Vindhya Telelinks Ltd."
    },
    {
      instrumentId: "797",
      instrumentName: "VIP Industries Ltd."
    },
    {
      instrumentId: "798",
      instrumentName: "V-Mart Retail Ltd."
    },
    {
      instrumentId: "799",
      instrumentName: "Vodafone Idea Ltd."
    },
    {
      instrumentId: "800",
      instrumentName: "Voltamp Transformers Ltd."
    },
    {
      instrumentId: "801",
      instrumentName: "Voltas Ltd."
    },
    {
      instrumentId: "802",
      instrumentName: "VRL Logistics Ltd."
    },
    {
      instrumentId: "803",
      instrumentName: "VST Industries Ltd."
    },
    {
      instrumentId: "804",
      instrumentName: "VST Tillers Tractors Ltd."
    },
    {
      instrumentId: "805",
      instrumentName: "Wabco India Ltd."
    },
    {
      instrumentId: "806",
      instrumentName: "Welspun Corp Ltd."
    },
    {
      instrumentId: "807",
      instrumentName: "Welspun Enterprises Ltd."
    },
    {
      instrumentId: "808",
      instrumentName: "Welspun India Ltd."
    },
    {
      instrumentId: "809",
      instrumentName: "West Coast Paper Mills Ltd."
    },
    {
      instrumentId: "810",
      instrumentName: "Westlife Development Ltd."
    },
    {
      instrumentId: "811",
      instrumentName: "Wheels India Ltd."
    },
    {
      instrumentId: "812",
      instrumentName: "Whirlpool Of India Ltd."
    },
    {
      instrumentId: "813",
      instrumentName: "Wim Plast Ltd."
    },
    {
      instrumentId: "814",
      instrumentName: "Wipro Ltd."
    },
    {
      instrumentId: "815",
      instrumentName: "Wockhardt Ltd."
    },
    {
      instrumentId: "816",
      instrumentName: "Wonderla Holidays Ltd."
    },
    {
      instrumentId: "817",
      instrumentName: "WPIL Ltd."
    },
    {
      instrumentId: "818",
      instrumentName: "Yes Bank Ltd."
    },
    {
      instrumentId: "819",
      instrumentName: "Zee Entertainment Enterprises Ltd."
    },
    {
      instrumentId: "820",
      instrumentName: "Zensar Technologies Ltd."
    },
    {
      instrumentId: "821",
      instrumentName: "Zuari Agro Chemicals Ltd."
    },
    {
      instrumentId: "822",
      instrumentName: "Zuari Global Ltd."
    },
    {
      instrumentId: "823",
      instrumentName: "Zydus Wellness Ltd."
    }
  ];
}

export function filterStocks(state, value) {
  if (!value) return null;
  return (
    state.instrumentName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.instrumentId.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

export async function fetchStockOverview(instrumentId) {
  // return httpHelpers.get(`${apiEndpoint}/overview/${instrumentId}`);
  return {
    instrumentDetails: {
      instrumentId: "1234",
      instrumentName: "HDFC Bank Ltd.",
      sector: {
        sectorId: "123",
        sectorName: "Financials"
      }
    },
    instrumentData: {
      schemesCount: 523,
      aum: "74840",
      aumDenomination: "(Cr.)",
      topInvestor: {
        id: "",
        name: "SBI ETF Nifty 50",
        investedAmount: 6116,
        denomination: "(Cr.)"
      },
      maximumDependant: {
        id: "",
        name: "Edelweiss ETF-Nifty Bank",
        weightage: 31.62
      }
    }
  };
}

export async function fetchAMCWiseHoldings(instrumentId) {
  // return httpHelpers.get(`${apiEndpoint}/amcholding/${instrumentId}`);
  return {
    AMCs: [
      {
        amcId: "1",
        amcName: "Others",
        weightage: "0.07"
      },
      {
        amcId: "2",
        amcName: "Axis",
        weightage: "5.33"
      },
      {
        amcId: "3",
        amcName: "Baroda Pioneer",
        weightage: "0.22"
      },
      {
        amcId: "4",
        amcName: "Birla Sunlife",
        weightage: "8.35"
      },
      {
        amcId: "5",
        amcName: "BNP Paribas",
        weightage: "0.39"
      },
      {
        amcId: "6",
        amcName: "BOI AXA",
        weightage: "0.04"
      },
      {
        amcId: "7",
        amcName: "Canara Robeco",
        weightage: "0.93"
      },
      {
        amcId: "8",
        amcName: "DHFL",
        weightage: "0.13"
      },
      {
        amcId: "9",
        amcName: "DSP BlackRock",
        weightage: "3.33"
      },
      {
        amcId: "10",
        amcName: "Edelweiss",
        weightage: "0.53"
      },
      {
        amcId: "11",
        amcName: "Franklin Templeton",
        weightage: "4.89"
      },
      {
        amcId: "12",
        amcName: "HDFC",
        weightage: "9.3"
      },
      {
        amcId: "13",
        amcName: "HSBC Global",
        weightage: "0.31"
      },
      {
        amcId: "14",
        amcName: "ICICI Prudential",
        weightage: "7.28"
      },
      {
        amcId: "15",
        amcName: "IDBI",
        weightage: "0.21"
      },
      {
        amcId: "16",
        amcName: "IDFC",
        weightage: "1.38"
      },
      {
        amcId: "17",
        amcName: "India Infoline",
        weightage: "0.06"
      },
      {
        amcId: "18",
        amcName: "Indiabulls",
        weightage: "0.05"
      },
      {
        amcId: "19",
        amcName: "JM Financial",
        weightage: "0.47"
      },
      {
        amcId: "20",
        amcName: "Kotak Mahindra",
        weightage: "7.55"
      },
      {
        amcId: "21",
        amcName: "L&T",
        weightage: "2.11"
      },
      {
        amcId: "22",
        amcName: "LIC Nomura",
        weightage: "0.44"
      },
      {
        amcId: "23",
        amcName: "Mahindra",
        weightage: "0.09"
      },
      {
        amcId: "24",
        amcName: "Mirae Global",
        weightage: "2.8"
      },
      {
        amcId: "25",
        amcName: "Motilal Oswal",
        weightage: "2.35"
      },
      {
        amcId: "26",
        amcName: "Peerless",
        weightage: "0.03"
      },
      {
        amcId: "27",
        amcName: "PPFAS",
        weightage: "0.23"
      },
      {
        amcId: "28",
        amcName: "Principal Pnb",
        weightage: "0.43"
      },
      {
        amcId: "29",
        amcName: "Quantum",
        weightage: "0"
      },
      {
        amcId: "30",
        amcName: "Reliance",
        weightage: "8.18"
      },
      {
        amcId: "31",
        amcName: "Religare",
        weightage: "1.1"
      },
      {
        amcId: "32",
        amcName: "Sahara",
        weightage: "0"
      },
      {
        amcId: "33",
        amcName: "SBI",
        weightage: "21.7"
      },
      {
        amcId: "34",
        amcName: "Shriram",
        weightage: "0.01"
      },
      {
        amcId: "35",
        amcName: "Sundaram",
        weightage: "0.9"
      },
      {
        amcId: "36",
        amcName: "Tata",
        weightage: "2.23"
      },
      {
        amcId: "37",
        amcName: "Taurus",
        weightage: "0.03"
      },
      {
        amcId: "38",
        amcName: "Union KBC",
        weightage: "0.17"
      },
      {
        amcId: "39",
        amcName: "UTI",
        weightage: "6.36"
      }
    ],
    Schemes: [
      {
        schemeId: "482",
        schemeName: "Axis Bluechip -G",
        schemeMTM: "601.2",
        percentageInScheme: "9.50%",
        percentageOfStock: "0.80%",
        amcId: "2"
      },
      {
        schemeId: "483",
        schemeName: "Axis Focused 25 -G",
        schemeMTM: "708.6",
        percentageInScheme: "8.80%",
        percentageOfStock: "0.95%",
        amcId: "2"
      },
      {
        schemeId: "496",
        schemeName: "Axis Reg Saver -G",
        schemeMTM: "4.1",
        percentageInScheme: "1.70%",
        percentageOfStock: "0.01%",
        amcId: "2"
      },
      {
        schemeId: "498",
        schemeName: "Axis LT Equity -G",
        schemeMTM: "1586.7",
        percentageInScheme: "8%",
        percentageOfStock: "2.12%",
        amcId: "2"
      },
      {
        schemeId: "499",
        schemeName: "Axis Midcap -G",
        schemeMTM: "91.4",
        percentageInScheme: "3.40%",
        percentageOfStock: "0.12%",
        amcId: "2"
      },
      {
        schemeId: "504",
        schemeName: "Baroda Hybrid Equity -G",
        schemeMTM: "48.9",
        percentageInScheme: "7.90%",
        percentageOfStock: "0.07%",
        amcId: "3"
      },
      {
        schemeId: "505",
        schemeName: "Baroda Banking and Financial Services -G",
        schemeMTM: "12.5",
        percentageInScheme: "27.50%",
        percentageOfStock: "0.02%",
        amcId: "3"
      },
      {
        schemeId: "507",
        schemeName: "Baroda Equity Linked Saving 96-D",
        schemeMTM: "14.7",
        percentageInScheme: "9.30%",
        percentageOfStock: "0.02%",
        amcId: "3"
      },
      {
        schemeId: "510",
        schemeName: "Baroda Multi Cap -G",
        schemeMTM: "77",
        percentageInScheme: "9.50%",
        percentageOfStock: "0.10%",
        amcId: "3"
      },
      {
        schemeId: "512",
        schemeName: "Baroda Large Cap -G",
        schemeMTM: "3.2",
        percentageInScheme: "9.80%",
        percentageOfStock: "0%",
        amcId: "3"
      },
      {
        schemeId: "514",
        schemeName: "Baroda Cons Hybrid -G",
        schemeMTM: "0.6",
        percentageInScheme: "4%",
        percentageOfStock: "0%",
        amcId: "3"
      },
      {
        schemeId: "519",
        schemeName: "Aditya Birla Sun Life Equity Hybrid 95 -G",
        schemeMTM: "1054.9",
        percentageInScheme: "8.30%",
        percentageOfStock: "1.41%",
        amcId: "4"
      },
      {
        schemeId: "520",
        schemeName: "Aditya Birla Sun Life Equity Adv -D",
        schemeMTM: "478.9",
        percentageInScheme: "9.10%",
        percentageOfStock: "0.64%",
        amcId: "4"
      },
      {
        schemeId: "542",
        schemeName: "Aditya Birla Sun Life D Yield -G",
        schemeMTM: "24.4",
        percentageInScheme: "3.10%",
        percentageOfStock: "0.03%",
        amcId: "4"
      },
      {
        schemeId: "544",
        schemeName: "Aditya Birla Sun Life Arbi -G",
        schemeMTM: "66.8",
        percentageInScheme: "1.70%",
        percentageOfStock: "0.09%",
        amcId: "4"
      },
      {
        schemeId: "545",
        schemeName: "Aditya Birla Sun Life Equity -G",
        schemeMTM: "1058",
        percentageInScheme: "9.40%",
        percentageOfStock: "1.41%",
        amcId: "4"
      },
      {
        schemeId: "548",
        schemeName: "Aditya Birla Sun Life Frontline Equity -G",
        schemeMTM: "2169.1",
        percentageInScheme: "10%",
        percentageOfStock: "2.90%",
        amcId: "4"
      },
      {
        schemeId: "612",
        schemeName: "Aditya Birla Sun Life Index -Reg-G",
        schemeMTM: "14",
        percentageInScheme: "9.70%",
        percentageOfStock: "0.02%",
        amcId: "4"
      },
      {
        schemeId: "613",
        schemeName: "Aditya Birla Sun Life India GenNext -G",
        schemeMTM: "80.6",
        percentageInScheme: "7.40%",
        percentageOfStock: "0.11%",
        amcId: "4"
      },
      {
        schemeId: "616",
        schemeName: "Aditya Birla Sun Life Infrastructure -G",
        schemeMTM: "15.9",
        percentageInScheme: "2.70%",
        percentageOfStock: "0.02%",
        amcId: "4"
      },
      {
        schemeId: "624",
        schemeName: "Aditya Birla Sun Life Reg Savings -G",
        schemeMTM: "31.3",
        percentageInScheme: "1.50%",
        percentageOfStock: "0.04%",
        amcId: "4"
      },
      {
        schemeId: "628",
        schemeName: "Aditya Birla Sun Life Nifty Exchange Traded ",
        schemeMTM: "17.3",
        percentageInScheme: "11%",
        percentageOfStock: "0.02%",
        amcId: "4"
      },
      {
        schemeId: "636",
        schemeName: "Aditya Birla Sun Life Tax-D",
        schemeMTM: "16.5",
        percentageInScheme: "2.70%",
        percentageOfStock: "0.02%",
        amcId: "4"
      },
      {
        schemeId: "638",
        schemeName: "Aditya Birla Sun Life Focused Equity -G",
        schemeMTM: "427.4",
        percentageInScheme: "9.90%",
        percentageOfStock: "0.57%",
        amcId: "4"
      },
      {
        schemeId: "656",
        schemeName: "BNP Paribas Multi Cap -G",
        schemeMTM: "74.2",
        percentageInScheme: "10%",
        percentageOfStock: "0.10%",
        amcId: "5"
      },
      {
        schemeId: "657",
        schemeName: "BNP Paribas Large Cap -G",
        schemeMTM: "75.3",
        percentageInScheme: "9.80%",
        percentageOfStock: "0.10%",
        amcId: "5"
      },
      {
        schemeId: "662",
        schemeName: "BNP Paribas Cons Hybrid -Reg-G",
        schemeMTM: "10",
        percentageInScheme: "2.50%",
        percentageOfStock: "0.01%",
        amcId: "5"
      },
      {
        schemeId: "666",
        schemeName: "BNP Paribas LT Equity -G",
        schemeMTM: "46.4",
        percentageInScheme: "9.90%",
        percentageOfStock: "0.06%",
        amcId: "5"
      },
      {
        schemeId: "673",
        schemeName: "BOI AXA Large & Mid Cap Equity -Reg-G",
        schemeMTM: "7.3",
        percentageInScheme: "4.50%",
        percentageOfStock: "0.01%",
        amcId: "6"
      },
      {
        schemeId: "677",
        schemeName: "BOI AXA Cons Hybrid -Reg-G",
        schemeMTM: "4.4",
        percentageInScheme: "2.70%",
        percentageOfStock: "0.01%",
        amcId: "6"
      },
      {
        schemeId: "679",
        schemeName: "BOI AXA Tax Adv -Reg-G",
        schemeMTM: "13.4",
        percentageInScheme: "5.70%",
        percentageOfStock: "0.02%",
        amcId: "6"
      },
      {
        schemeId: "682",
        schemeName: "Canara Robeco Equity Hybrid -Reg-G",
        schemeMTM: "129.6",
        percentageInScheme: "5.60%",
        percentageOfStock: "0.17%",
        amcId: "7"
      },
      {
        schemeId: "684",
        schemeName: "Canara Robeco Emerging Equities-Reg-G",
        schemeMTM: "290.6",
        percentageInScheme: "5.90%",
        percentageOfStock: "0.39%",
        amcId: "7"
      },
      {
        schemeId: "685",
        schemeName: "Canara Robeco Equity Diversified -Reg-G",
        schemeMTM: "110.1",
        percentageInScheme: "8.40%",
        percentageOfStock: "0.15%",
        amcId: "7"
      },
      {
        schemeId: "686",
        schemeName: "Canara Robeco Equity Tax Saver -Reg-D",
        schemeMTM: "74.9",
        percentageInScheme: "7.60%",
        percentageOfStock: "0.10%",
        amcId: "7"
      },
      {
        schemeId: "687",
        schemeName: "Canara Robeco Consumer Trends -Reg-G",
        schemeMTM: "24.7",
        percentageInScheme: "7.30%",
        percentageOfStock: "0.03%",
        amcId: "7"
      },
      {
        schemeId: "697",
        schemeName: "Canara Robeco Bluechip Equity -Reg-G",
        schemeMTM: "19.3",
        percentageInScheme: "9.10%",
        percentageOfStock: "0.03%",
        amcId: "7"
      },
      {
        schemeId: "699",
        schemeName: "Canara Robeco Cons Hybrid -Reg-G",
        schemeMTM: "5.4",
        percentageInScheme: "2.70%",
        percentageOfStock: "0.01%",
        amcId: "7"
      },
      {
        schemeId: "705",
        schemeName: "SBI Small Cap -Reg-G",
        schemeMTM: "75.8",
        percentageInScheme: "3.40%",
        percentageOfStock: "0.10%",
        amcId: "33"
      },
      {
        schemeId: "708",
        schemeName: "DSP Equity & Bond -Reg-G",
        schemeMTM: "332.8",
        percentageInScheme: "5.30%",
        percentageOfStock: "0.44%",
        amcId: "9"
      },
      {
        schemeId: "717",
        schemeName: "DSP Equity -Reg-D",
        schemeMTM: "190.9",
        percentageInScheme: "7.20%",
        percentageOfStock: "0.26%",
        amcId: "9"
      },
      {
        schemeId: "750",
        schemeName: "DSP Focus -Reg-G",
        schemeMTM: "274.4",
        percentageInScheme: "13.40%",
        percentageOfStock: "0.37%",
        amcId: "9"
      },
      {
        schemeId: "765",
        schemeName: "DSP India T.I.G.E.R. -Reg-G",
        schemeMTM: "58.4",
        percentageInScheme: "4.90%",
        percentageOfStock: "0.08%",
        amcId: "9"
      },
      {
        schemeId: "768",
        schemeName: "DSP Reg Savings -Reg-G",
        schemeMTM: "8.1",
        percentageInScheme: "2.90%",
        percentageOfStock: "0.01%",
        amcId: "9"
      },
      {
        schemeId: "770",
        schemeName: "DSP Equity Opp -Reg-G",
        schemeMTM: "421.4",
        percentageInScheme: "7.60%",
        percentageOfStock: "0.56%",
        amcId: "9"
      },
      {
        schemeId: "773",
        schemeName: "DSP Midcap -Reg-G",
        schemeMTM: "235.4",
        percentageInScheme: "3.70%",
        percentageOfStock: "0.31%",
        amcId: "9"
      },
      {
        schemeId: "775",
        schemeName: "DSP Tax Saver -Reg-G",
        schemeMTM: "470.7",
        percentageInScheme: "8.30%",
        percentageOfStock: "0.63%",
        amcId: "9"
      },
      {
        schemeId: "777",
        schemeName: "DSP Top 100 Equity -Reg-G",
        schemeMTM: "394.2",
        percentageInScheme: "14.10%",
        percentageOfStock: "0.53%",
        amcId: "9"
      },
      {
        schemeId: "783",
        schemeName: "DHFL Pramerica Large Cap -G",
        schemeMTM: "33.9",
        percentageInScheme: "10%",
        percentageOfStock: "0.05%",
        amcId: "8"
      },
      {
        schemeId: "816",
        schemeName: "DHFL Pramerica Hybrid FT -11-Reg-G",
        schemeMTM: "0.1",
        percentageInScheme: "7.50%",
        percentageOfStock: "0%",
        amcId: "8"
      },
      {
        schemeId: "817",
        schemeName: "DHFL Pramerica Hybrid FT -12-Reg-G",
        schemeMTM: "0.1",
        percentageInScheme: "4.50%",
        percentageOfStock: "0%",
        amcId: "8"
      },
      {
        schemeId: "822",
        schemeName: "DHFL Pramerica Hybrid Equity -G",
        schemeMTM: "15.9",
        percentageInScheme: "9.80%",
        percentageOfStock: "0.02%",
        amcId: "8"
      },
      {
        schemeId: "829",
        schemeName: "DHFL Pramerica Equity Savings -G",
        schemeMTM: "2.1",
        percentageInScheme: "9.90%",
        percentageOfStock: "0%",
        amcId: "8"
      },
      {
        schemeId: "831",
        schemeName: "Edelweiss Balanced Adv -Reg-G",
        schemeMTM: "69",
        percentageInScheme: "4.80%",
        percentageOfStock: "0.09%",
        amcId: "10"
      },
      {
        schemeId: "832",
        schemeName: "Edelweiss Large Cap -G",
        schemeMTM: "13.9",
        percentageInScheme: "8.40%",
        percentageOfStock: "0.02%",
        amcId: "10"
      },
      {
        schemeId: "833",
        schemeName: "Edelweiss LT Equity (Tax Savings)-Reg-G",
        schemeMTM: "9.3",
        percentageInScheme: "8.80%",
        percentageOfStock: "0.01%",
        amcId: "10"
      },
      {
        schemeId: "854",
        schemeName: "Franklin Asian Equity -G",
        schemeMTM: "6",
        percentageInScheme: "4.90%",
        percentageOfStock: "0.01%",
        amcId: "11"
      },
      {
        schemeId: "855",
        schemeName: "Franklin Build India -G",
        schemeMTM: "67.2",
        percentageInScheme: "5.20%",
        percentageOfStock: "0.09%",
        amcId: "11"
      },
      {
        schemeId: "856",
        schemeName: "Franklin India Bluechip -G",
        schemeMTM: "610.9",
        percentageInScheme: "8.60%",
        percentageOfStock: "0.82%",
        amcId: "11"
      },
      {
        schemeId: "857",
        schemeName: "Franklin India Equity Adv -G",
        schemeMTM: "151.3",
        percentageInScheme: "5.60%",
        percentageOfStock: "0.20%",
        amcId: "11"
      },
      {
        schemeId: "858",
        schemeName: "Franklin India Focused Equity -G",
        schemeMTM: "464.3",
        percentageInScheme: "5.40%",
        percentageOfStock: "0.62%",
        amcId: "11"
      },
      {
        schemeId: "860",
        schemeName: "Franklin India Index -NSE Nifty-G",
        schemeMTM: "29.6",
        percentageInScheme: "10.90%",
        percentageOfStock: "0.04%",
        amcId: "11"
      },
      {
        schemeId: "861",
        schemeName: "Franklin India Opp -G",
        schemeMTM: "73.7",
        percentageInScheme: "12.20%",
        percentageOfStock: "0.10%",
        amcId: "11"
      },
      {
        schemeId: "862",
        schemeName: "Franklin India Equity -G",
        schemeMTM: "1050.8",
        percentageInScheme: "9.30%",
        percentageOfStock: "1.40%",
        amcId: "11"
      },
      {
        schemeId: "863",
        schemeName: "Franklin India Smaller Companies -G",
        schemeMTM: "338.1",
        percentageInScheme: "4.60%",
        percentageOfStock: "0.45%",
        amcId: "11"
      },
      {
        schemeId: "864",
        schemeName: "Franklin India Taxshield-G",
        schemeMTM: "345.8",
        percentageInScheme: "8.50%",
        percentageOfStock: "0.46%",
        amcId: "11"
      },
      {
        schemeId: "866",
        schemeName: "Franklin India Equity Hybrid -G",
        schemeMTM: "120.8",
        percentageInScheme: "6.30%",
        percentageOfStock: "0.16%",
        amcId: "11"
      },
      {
        schemeId: "868",
        schemeName: "Franklin India Debt Hybrid -G",
        schemeMTM: "7.3",
        percentageInScheme: "2.30%",
        percentageOfStock: "0.01%",
        amcId: "11"
      },
      {
        schemeId: "869",
        schemeName: "Reliance ETF Bank BeES",
        schemeMTM: "2226.5",
        percentageInScheme: "31.50%",
        percentageOfStock: "2.97%",
        amcId: "30"
      },
      {
        schemeId: "877",
        schemeName: "Reliance ETF Nifty BeES",
        schemeMTM: "138.1",
        percentageInScheme: "11%",
        percentageOfStock: "0.18%",
        amcId: "30"
      },
      {
        schemeId: "884",
        schemeName: "HDFC Cap Builder Value -G",
        schemeMTM: "441.6",
        percentageInScheme: "9.60%",
        percentageOfStock: "0.59%",
        amcId: "12"
      },
      {
        schemeId: "888",
        schemeName: "HDFC Childrens Gift ",
        schemeMTM: "186.7",
        percentageInScheme: "6.60%",
        percentageOfStock: "0.25%",
        amcId: "12"
      },
      {
        schemeId: "890",
        schemeName: "HDFC Focused 30 -G",
        schemeMTM: "34.2",
        percentageInScheme: "6.90%",
        percentageOfStock: "0.05%",
        amcId: "12"
      },
      {
        schemeId: "892",
        schemeName: "HDFC Equity -G",
        schemeMTM: "1024.3",
        percentageInScheme: "4.30%",
        percentageOfStock: "1.37%",
        amcId: "12"
      },
      {
        schemeId: "960",
        schemeName: "HDFC Balanced Adv -G",
        schemeMTM: "717.4",
        percentageInScheme: "1.70%",
        percentageOfStock: "0.96%",
        amcId: "12"
      },
      {
        schemeId: "964",
        schemeName: "HDFC Index -NIFTY 50-G",
        schemeMTM: "88.1",
        percentageInScheme: "10.90%",
        percentageOfStock: "0.12%",
        amcId: "12"
      },
      {
        schemeId: "966",
        schemeName: "HDFC Index -Sensex-G",
        schemeMTM: "56.4",
        percentageInScheme: "13%",
        percentageOfStock: "0.08%",
        amcId: "12"
      },
      {
        schemeId: "969",
        schemeName: "HDFC LT Adv -G",
        schemeMTM: "141.7",
        percentageInScheme: "9.80%",
        percentageOfStock: "0.19%",
        amcId: "12"
      },
      {
        schemeId: "973",
        schemeName: "HDFC Hybrid Debt -G",
        schemeMTM: "34.2",
        percentageInScheme: "1.10%",
        percentageOfStock: "0.05%",
        amcId: "12"
      },
      {
        schemeId: "975",
        schemeName: "HDFC Multi-Asset -G",
        schemeMTM: "13.2",
        percentageInScheme: "8.20%",
        percentageOfStock: "0.02%",
        amcId: "12"
      },
      {
        schemeId: "976",
        schemeName: "HDFC Equity Savings -G",
        schemeMTM: "137.9",
        percentageInScheme: "2.50%",
        percentageOfStock: "0.18%",
        amcId: "12"
      },
      {
        schemeId: "977",
        schemeName: "HDFC Hybrid Equity -G",
        schemeMTM: "1814.5",
        percentageInScheme: "8.20%",
        percentageOfStock: "2.42%",
        amcId: "12"
      },
      {
        schemeId: "985",
        schemeName: "HDFC Tax Saver-G",
        schemeMTM: "520.6",
        percentageInScheme: "6.90%",
        percentageOfStock: "0.70%",
        amcId: "12"
      },
      {
        schemeId: "986",
        schemeName: "HDFC Top 100 -G",
        schemeMTM: "1187.1",
        percentageInScheme: "6.60%",
        percentageOfStock: "1.59%",
        amcId: "12"
      },
      {
        schemeId: "990",
        schemeName: "HSBC Large Cap Equity -G",
        schemeMTM: "67.2",
        percentageInScheme: "9.80%",
        percentageOfStock: "0.09%",
        amcId: "13"
      },
      {
        schemeId: "997",
        schemeName: "HSBC Multi Cap Equity -G",
        schemeMTM: "47.7",
        percentageInScheme: "9.80%",
        percentageOfStock: "0.06%",
        amcId: "13"
      },
      {
        schemeId: "1000",
        schemeName: "HSBC Reg Savings -G",
        schemeMTM: "3",
        percentageInScheme: "2.70%",
        percentageOfStock: "0%",
        amcId: "13"
      },
      {
        schemeId: "1003",
        schemeName: "HSBC Tax Saver Equity -G",
        schemeMTM: "15.2",
        percentageInScheme: "9.60%",
        percentageOfStock: "0.02%",
        amcId: "13"
      },
      {
        schemeId: "1009",
        schemeName: "ICICI Prudential Equity & Debt -G",
        schemeMTM: "6",
        percentageInScheme: "0%",
        percentageOfStock: "0.01%",
        amcId: "14"
      },
      {
        schemeId: "1010",
        schemeName: "ICICI Prudential Banking & Financial Services -G",
        schemeMTM: "290.7",
        percentageInScheme: "8.70%",
        percentageOfStock: "0.39%",
        amcId: "14"
      },
      {
        schemeId: "1035",
        schemeName: "ICICI Prudential Value Discovery -G",
        schemeMTM: "732",
        percentageInScheme: "4.50%",
        percentageOfStock: "0.98%",
        amcId: "14"
      },
      {
        schemeId: "1038",
        schemeName: "ICICI Prudential Balanced Adv -G",
        schemeMTM: "1135.8",
        percentageInScheme: "4%",
        percentageOfStock: "1.52%",
        amcId: "14"
      },
      {
        schemeId: "1039",
        schemeName: "ICICI Prudential Equity-Arbi-G",
        schemeMTM: "285.8",
        percentageInScheme: "2.80%",
        percentageOfStock: "0.38%",
        amcId: "14"
      },
      {
        schemeId: "1110",
        schemeName: "ICICI Prudential Bluechip -G",
        schemeMTM: "2111.8",
        percentageInScheme: "9.50%",
        percentageOfStock: "2.82%",
        amcId: "14"
      },
      {
        schemeId: "1120",
        schemeName: "ICICI Prudential Nifty Index -Cum",
        schemeMTM: "41.1",
        percentageInScheme: "11%",
        percentageOfStock: "0.05%",
        amcId: "14"
      },
      {
        schemeId: "1130",
        schemeName: "ICICI Prudential Reg Savings -Cum",
        schemeMTM: "24.8",
        percentageInScheme: "1.50%",
        percentageOfStock: "0.03%",
        amcId: "14"
      },
      {
        schemeId: "1157",
        schemeName: "ICICI Prudential R.I.G.H.T. -G",
        schemeMTM: "6",
        percentageInScheme: "13.10%",
        percentageOfStock: "0.01%",
        amcId: "14"
      },
      {
        schemeId: "1163",
        schemeName: "ICICI Prudential LT Equity (Tax Saving)-G",
        schemeMTM: "171.1",
        percentageInScheme: "2.70%",
        percentageOfStock: "0.23%",
        amcId: "14"
      },
      {
        schemeId: "1165",
        schemeName: "ICICI Prudential Large & Mid Cap -G",
        schemeMTM: "97.8",
        percentageInScheme: "3%",
        percentageOfStock: "0.13%",
        amcId: "14"
      },
      {
        schemeId: "1166",
        schemeName: "ICICI Prudential Multicap -G",
        schemeMTM: "70.6",
        percentageInScheme: "1.80%",
        percentageOfStock: "0.09%",
        amcId: "14"
      },
      {
        schemeId: "1168",
        schemeName: "ICICI Prudential Nifty ETF",
        schemeMTM: "127",
        percentageInScheme: "10.90%",
        percentageOfStock: "0.17%",
        amcId: "14"
      },
      {
        schemeId: "1184",
        schemeName: "IDBI India Top 100 Equity -G",
        schemeMTM: "31.5",
        percentageInScheme: "8.50%",
        percentageOfStock: "0.04%",
        amcId: "15"
      },
      {
        schemeId: "1186",
        schemeName: "IDBI Equity Savings -G",
        schemeMTM: "1.3",
        percentageInScheme: "6.60%",
        percentageOfStock: "0%",
        amcId: "15"
      },
      {
        schemeId: "1187",
        schemeName: "IDBI Nifty Index -G",
        schemeMTM: "24.5",
        percentageInScheme: "10.90%",
        percentageOfStock: "0.03%",
        amcId: "15"
      },
      {
        schemeId: "1193",
        schemeName: "IDFC Arbi -Reg-G",
        schemeMTM: "204.5",
        percentageInScheme: "3.70%",
        percentageOfStock: "0.27%",
        amcId: "16"
      },
      {
        schemeId: "1194",
        schemeName: "IDFC Equity Savings -Reg-G",
        schemeMTM: "2.8",
        percentageInScheme: "3.70%",
        percentageOfStock: "0%",
        amcId: "16"
      },
      {
        schemeId: "1200",
        schemeName: "IDFC Core Equity -Reg- G",
        schemeMTM: "183.5",
        percentageInScheme: "6.20%",
        percentageOfStock: "0.25%",
        amcId: "16"
      },
      {
        schemeId: "1205",
        schemeName: "IDFC Large Cap -Reg-G",
        schemeMTM: "30.5",
        percentageInScheme: "7%",
        percentageOfStock: "0.04%",
        amcId: "16"
      },
      {
        schemeId: "1253",
        schemeName: "IDFC Reg Savings -Reg-G",
        schemeMTM: "3.4",
        percentageInScheme: "1.70%",
        percentageOfStock: "0%",
        amcId: "16"
      },
      {
        schemeId: "1256",
        schemeName: "IDFC Nifty -Reg-G",
        schemeMTM: "18.3",
        percentageInScheme: "10.80%",
        percentageOfStock: "0.02%",
        amcId: "16"
      },
      {
        schemeId: "1257",
        schemeName: "IDFC Multi Cap -Reg-G",
        schemeMTM: "377.4",
        percentageInScheme: "6.80%",
        percentageOfStock: "0.50%",
        amcId: "16"
      },
      {
        schemeId: "1264",
        schemeName: "IDFC Tax Adv (ELSS) -Reg-G",
        schemeMTM: "85.5",
        percentageInScheme: "4.20%",
        percentageOfStock: "0.11%",
        amcId: "16"
      },
      {
        schemeId: "1275",
        schemeName: "Indiabulls Blue Chip -G",
        schemeMTM: "24",
        percentageInScheme: "10.10%",
        percentageOfStock: "0.03%",
        amcId: "18"
      },
      {
        schemeId: "1288",
        schemeName: "Aditya Birla Sun Life Balanced Adv -G",
        schemeMTM: "195.6",
        percentageInScheme: "7.10%",
        percentageOfStock: "0.26%",
        amcId: "4"
      },
      {
        schemeId: "1304",
        schemeName: "JM Arbi -G",
        schemeMTM: "1.9",
        percentageInScheme: "2.60%",
        percentageOfStock: "0%",
        amcId: "19"
      },
      {
        schemeId: "1305",
        schemeName: "JM Equity Hybrid -G",
        schemeMTM: "1.6",
        percentageInScheme: "13.10%",
        percentageOfStock: "0%",
        amcId: "19"
      },
      {
        schemeId: "1306",
        schemeName: "JM Value -G",
        schemeMTM: "10.9",
        percentageInScheme: "8.60%",
        percentageOfStock: "0.01%",
        amcId: "19"
      },
      {
        schemeId: "1307",
        schemeName: "JM Core 11 -G",
        schemeMTM: "4.6",
        percentageInScheme: "9%",
        percentageOfStock: "0.01%",
        amcId: "19"
      },
      {
        schemeId: "1308",
        schemeName: "JM Large Cap -G",
        schemeMTM: "132.7",
        percentageInScheme: "6.10%",
        percentageOfStock: "0.18%",
        amcId: "19"
      },
      {
        schemeId: "1320",
        schemeName: "JM Multicap -G",
        schemeMTM: "193.4",
        percentageInScheme: "9.60%",
        percentageOfStock: "0.26%",
        amcId: "19"
      },
      {
        schemeId: "1322",
        schemeName: "JM Tax Gain -G",
        schemeMTM: "3.2",
        percentageInScheme: "10%",
        percentageOfStock: "0%",
        amcId: "19"
      },
      {
        schemeId: "1325",
        schemeName: "Edelweiss Large & Mid Cap -Reg-G",
        schemeMTM: "41.2",
        percentageInScheme: "9.30%",
        percentageOfStock: "0.06%",
        amcId: "10"
      },
      {
        schemeId: "1340",
        schemeName: "Edelweiss Tax Adv -Reg-G",
        schemeMTM: "0.9",
        percentageInScheme: "9.60%",
        percentageOfStock: "0%",
        amcId: "10"
      },
      {
        schemeId: "1345",
        schemeName: "Kotak Equity Hybrid -D",
        schemeMTM: "99.6",
        percentageInScheme: "6.50%",
        percentageOfStock: "0.13%",
        amcId: "20"
      },
      {
        schemeId: "1348",
        schemeName: "Kotak India EQ Contra -G",
        schemeMTM: "75.6",
        percentageInScheme: "8.70%",
        percentageOfStock: "0.10%",
        amcId: "20"
      },
      {
        schemeId: "1350",
        schemeName: "Kotak Equity Arbi -G",
        schemeMTM: "413.5",
        percentageInScheme: "3%",
        percentageOfStock: "0.55%",
        amcId: "20"
      },
      {
        schemeId: "1398",
        schemeName: "Kotak Debt Hybrid -G",
        schemeMTM: "3.7",
        percentageInScheme: "1.40%",
        percentageOfStock: "0%",
        amcId: "20"
      },
      {
        schemeId: "1399",
        schemeName: "Kotak Nifty Exchange Traded ",
        schemeMTM: "82.9",
        percentageInScheme: "11%",
        percentageOfStock: "0.11%",
        amcId: "20"
      },
      {
        schemeId: "1400",
        schemeName: "Kotak Equity Opp -G",
        schemeMTM: "183.3",
        percentageInScheme: "7.10%",
        percentageOfStock: "0.24%",
        amcId: "20"
      },
      {
        schemeId: "1412",
        schemeName: "Kotak Standard Multicap -G",
        schemeMTM: "1787.6",
        percentageInScheme: "6.90%",
        percentageOfStock: "2.39%",
        amcId: "20"
      },
      {
        schemeId: "1413",
        schemeName: "Kotak Sensex ETF",
        schemeMTM: "1.7",
        percentageInScheme: "13%",
        percentageOfStock: "0%",
        amcId: "20"
      },
      {
        schemeId: "1414",
        schemeName: "Kotak Tax Saver -G",
        schemeMTM: "58.6",
        percentageInScheme: "6.20%",
        percentageOfStock: "0.08%",
        amcId: "20"
      },
      {
        schemeId: "1416",
        schemeName: "L&T Equity -Reg-G",
        schemeMTM: "189",
        percentageInScheme: "6.90%",
        percentageOfStock: "0.25%",
        amcId: "21"
      },
      {
        schemeId: "1437",
        schemeName: "L&T India Large Cap -Reg-G",
        schemeMTM: "44.5",
        percentageInScheme: "9%",
        percentageOfStock: "0.06%",
        amcId: "21"
      },
      {
        schemeId: "1438",
        schemeName: "L&T Large and Midcap -Reg-G",
        schemeMTM: "74",
        percentageInScheme: "5.30%",
        percentageOfStock: "0.10%",
        amcId: "21"
      },
      {
        schemeId: "1439",
        schemeName: "L&T India Value -Reg-G",
        schemeMTM: "283.9",
        percentageInScheme: "3.40%",
        percentageOfStock: "0.38%",
        amcId: "21"
      },
      {
        schemeId: "1445",
        schemeName: "L&T Equity Savings -Reg-G",
        schemeMTM: "7.5",
        percentageInScheme: "4.80%",
        percentageOfStock: "0.01%",
        amcId: "21"
      },
      {
        schemeId: "1446",
        schemeName: "L&T Cons Hybrid -Reg-G",
        schemeMTM: "0.5",
        percentageInScheme: "1.20%",
        percentageOfStock: "0%",
        amcId: "21"
      },
      {
        schemeId: "1449",
        schemeName: "L&T Tax Adv -Reg-G",
        schemeMTM: "219.3",
        percentageInScheme: "6.50%",
        percentageOfStock: "0.29%",
        amcId: "21"
      },
      {
        schemeId: "1454",
        schemeName: "LIC MF Equity Hybrid -G",
        schemeMTM: "28.4",
        percentageInScheme: "7.90%",
        percentageOfStock: "0.04%",
        amcId: "22"
      },
      {
        schemeId: "1456",
        schemeName: "LIC MF Childrens Gift -G",
        schemeMTM: "1.2",
        percentageInScheme: "9.10%",
        percentageOfStock: "0%",
        amcId: "22"
      },
      {
        schemeId: "1457",
        schemeName: "LIC MF Multi Cap -G",
        schemeMTM: "24.8",
        percentageInScheme: "8.70%",
        percentageOfStock: "0.03%",
        amcId: "22"
      },
      {
        schemeId: "1460",
        schemeName: "LIC MF Large Cap -G",
        schemeMTM: "27.2",
        percentageInScheme: "9.30%",
        percentageOfStock: "0.04%",
        amcId: "22"
      },
      {
        schemeId: "1463",
        schemeName: "LIC MF Index -Nifty-G",
        schemeMTM: "3.1",
        percentageInScheme: "11%",
        percentageOfStock: "0%",
        amcId: "22"
      },
      {
        schemeId: "1465",
        schemeName: "LIC MF Index -Sensex-G",
        schemeMTM: "2.6",
        percentageInScheme: "13%",
        percentageOfStock: "0%",
        amcId: "22"
      },
      {
        schemeId: "1467",
        schemeName: "LIC MF Infrastructure -G",
        schemeMTM: "5.5",
        percentageInScheme: "9.70%",
        percentageOfStock: "0.01%",
        amcId: "22"
      },
      {
        schemeId: "1469",
        schemeName: "LIC MF Debt Hybrid -G",
        schemeMTM: "1",
        percentageInScheme: "1.40%",
        percentageOfStock: "0%",
        amcId: "22"
      },
      {
        schemeId: "1477",
        schemeName: "LIC MF Tax-G",
        schemeMTM: "19.1",
        percentageInScheme: "8.30%",
        percentageOfStock: "0.03%",
        amcId: "22"
      },
      {
        schemeId: "1486",
        schemeName: "LIC MF ULI ",
        schemeMTM: "27.6",
        percentageInScheme: "9.60%",
        percentageOfStock: "0.04%",
        amcId: "22"
      },
      {
        schemeId: "1489",
        schemeName: "Mirae Asset Emerging Bluechip -Reg G",
        schemeMTM: "459.6",
        percentageInScheme: "5.90%",
        percentageOfStock: "0.61%",
        amcId: "24"
      },
      {
        schemeId: "1490",
        schemeName: "Mirae Asset Large Cap -Reg-G",
        schemeMTM: "1174.4",
        percentageInScheme: "8.60%",
        percentageOfStock: "1.57%",
        amcId: "24"
      },
      {
        schemeId: "1497",
        schemeName: "HDFC G Opp -Reg-G",
        schemeMTM: "57.4",
        percentageInScheme: "4.30%",
        percentageOfStock: "0.08%",
        amcId: "12"
      },
      {
        schemeId: "1504",
        schemeName: "Essel Large Cap Equity -G",
        schemeMTM: "10.9",
        percentageInScheme: "9.80%",
        percentageOfStock: "0.01%",
        amcId: "26"
      },
      {
        schemeId: "1506",
        schemeName: "Essel Reg Savings -Reg-G",
        schemeMTM: "0.8",
        percentageInScheme: "1.90%",
        percentageOfStock: "0%",
        amcId: "26"
      },
      {
        schemeId: "1527",
        schemeName: "Principal Hybrid Equity -G",
        schemeMTM: "74.3",
        percentageInScheme: "4.40%",
        percentageOfStock: "0.10%",
        amcId: "28"
      },
      {
        schemeId: "1533",
        schemeName: "Principal Equity Savings -G",
        schemeMTM: "1.6",
        percentageInScheme: "2.90%",
        percentageOfStock: "0%",
        amcId: "28"
      },
      {
        schemeId: "1534",
        schemeName: "Principal D Yield -G",
        schemeMTM: "6.6",
        percentageInScheme: "3.20%",
        percentageOfStock: "0.01%",
        amcId: "28"
      },
      {
        schemeId: "1535",
        schemeName: "Principal Emerging Bluechip -G",
        schemeMTM: "119",
        percentageInScheme: "5.40%",
        percentageOfStock: "0.16%",
        amcId: "28"
      },
      {
        schemeId: "1538",
        schemeName: "Principal Multi Cap G -G",
        schemeMTM: "49.2",
        percentageInScheme: "5.50%",
        percentageOfStock: "0.07%",
        amcId: "28"
      },
      {
        schemeId: "1541",
        schemeName: "Principal Nifty 100 Equal Weight -G",
        schemeMTM: "0.2",
        percentageInScheme: "1.10%",
        percentageOfStock: "0%",
        amcId: "28"
      },
      {
        schemeId: "1542",
        schemeName: "Principal Focused Multicap -G",
        schemeMTM: "29.6",
        percentageInScheme: "9%",
        percentageOfStock: "0.04%",
        amcId: "28"
      },
      {
        schemeId: "1543",
        schemeName: "Principal Personal Tax Saver ",
        schemeMTM: "15.2",
        percentageInScheme: "5.70%",
        percentageOfStock: "0.02%",
        amcId: "28"
      },
      {
        schemeId: "1550",
        schemeName: "Principal Balanced Adv -G",
        schemeMTM: "4.1",
        percentageInScheme: "1.90%",
        percentageOfStock: "0.01%",
        amcId: "28"
      },
      {
        schemeId: "1551",
        schemeName: "Principal Tax Savings ",
        schemeMTM: "22.3",
        percentageInScheme: "5.50%",
        percentageOfStock: "0.03%",
        amcId: "28"
      },
      {
        schemeId: "1555",
        schemeName: "Quantum Nifty ETF",
        schemeMTM: "0.6",
        percentageInScheme: "11%",
        percentageOfStock: "0%",
        amcId: "29"
      },
      {
        schemeId: "1561",
        schemeName: "Reliance ETF Nifty 100",
        schemeMTM: "0.7",
        percentageInScheme: "9.50%",
        percentageOfStock: "0%",
        amcId: "30"
      },
      {
        schemeId: "1562",
        schemeName: "Reliance Arbi -G",
        schemeMTM: "349.5",
        percentageInScheme: "4%",
        percentageOfStock: "0.47%",
        amcId: "30"
      },
      {
        schemeId: "1563",
        schemeName: "Reliance Banking -G Opt",
        schemeMTM: "360.5",
        percentageInScheme: "11.30%",
        percentageOfStock: "0.48%",
        amcId: "30"
      },
      {
        schemeId: "1582",
        schemeName: "Reliance Multi Cap -G Opt",
        schemeMTM: "342.2",
        percentageInScheme: "3.20%",
        percentageOfStock: "0.46%",
        amcId: "30"
      },
      {
        schemeId: "1647",
        schemeName: "Reliance Index -Nifty-G",
        schemeMTM: "16.1",
        percentageInScheme: "10.90%",
        percentageOfStock: "0.02%",
        amcId: "30"
      },
      {
        schemeId: "1648",
        schemeName: "Reliance Index -Sensex-G",
        schemeMTM: "3.1",
        percentageInScheme: "12.90%",
        percentageOfStock: "0%",
        amcId: "30"
      },
      {
        schemeId: "1659",
        schemeName: "Reliance Focused Equity -G",
        schemeMTM: "319.2",
        percentageInScheme: "7.20%",
        percentageOfStock: "0.43%",
        amcId: "30"
      },
      {
        schemeId: "1660",
        schemeName: "Reliance Consumption -G",
        schemeMTM: "1.1",
        percentageInScheme: "1.40%",
        percentageOfStock: "0%",
        amcId: "30"
      },
      {
        schemeId: "1662",
        schemeName: "Reliance Hybrid Bond -G",
        schemeMTM: "25.6",
        percentageInScheme: "1.40%",
        percentageOfStock: "0.03%",
        amcId: "30"
      },
      {
        schemeId: "1664",
        schemeName: "Reliance Balanced Adv -G",
        schemeMTM: "126",
        percentageInScheme: "6.20%",
        percentageOfStock: "0.17%",
        amcId: "30"
      },
      {
        schemeId: "1666",
        schemeName: "Reliance Quant -G",
        schemeMTM: "1.7",
        percentageInScheme: "6.50%",
        percentageOfStock: "0%",
        amcId: "30"
      },
      {
        schemeId: "1667",
        schemeName: "Reliance Equity Hybrid -G",
        schemeMTM: "782",
        percentageInScheme: "7.20%",
        percentageOfStock: "1.04%",
        amcId: "30"
      },
      {
        schemeId: "1669",
        schemeName: "Reliance Value -G",
        schemeMTM: "257.1",
        percentageInScheme: "8%",
        percentageOfStock: "0.34%",
        amcId: "30"
      },
      {
        schemeId: "1670",
        schemeName: "Reliance Small Cap -G",
        schemeMTM: "91.5",
        percentageInScheme: "1.10%",
        percentageOfStock: "0.12%",
        amcId: "30"
      },
      {
        schemeId: "1672",
        schemeName: "Reliance Tax Saver (ELSS) -G",
        schemeMTM: "369.5",
        percentageInScheme: "3.40%",
        percentageOfStock: "0.49%",
        amcId: "30"
      },
      {
        schemeId: "1673",
        schemeName: "Reliance Large Cap -G",
        schemeMTM: "366.7",
        percentageInScheme: "2.80%",
        percentageOfStock: "0.49%",
        amcId: "30"
      },
      {
        schemeId: "1674",
        schemeName: "Reliance Vision -G",
        schemeMTM: "113.4",
        percentageInScheme: "3.80%",
        percentageOfStock: "0.15%",
        amcId: "30"
      },
      {
        schemeId: "1682",
        schemeName: "Invesco India Arbi -G",
        schemeMTM: "2.2",
        percentageInScheme: "0.90%",
        percentageOfStock: "0%",
        amcId: "31"
      },
      {
        schemeId: "1684",
        schemeName: "Invesco India Financial Services -G",
        schemeMTM: "39.7",
        percentageInScheme: "25.60%",
        percentageOfStock: "0.05%",
        amcId: "31"
      },
      {
        schemeId: "1685",
        schemeName: "Invesco India Largecap -G",
        schemeMTM: "19.5",
        percentageInScheme: "10%",
        percentageOfStock: "0.03%",
        amcId: "31"
      },
      {
        schemeId: "1686",
        schemeName: "Invesco India Contra -G",
        schemeMTM: "351.5",
        percentageInScheme: "8.70%",
        percentageOfStock: "0.47%",
        amcId: "31"
      },
      {
        schemeId: "1689",
        schemeName: "Invesco India Dynamic Equity -G",
        schemeMTM: "94.6",
        percentageInScheme: "9.80%",
        percentageOfStock: "0.13%",
        amcId: "31"
      },
      {
        schemeId: "1724",
        schemeName: "Invesco India G Opp -G",
        schemeMTM: "125.5",
        percentageInScheme: "8.20%",
        percentageOfStock: "0.17%",
        amcId: "31"
      },
      {
        schemeId: "1729",
        schemeName: "Invesco India Multicap -G",
        schemeMTM: "76.6",
        percentageInScheme: "9%",
        percentageOfStock: "0.10%",
        amcId: "31"
      },
      {
        schemeId: "1731",
        schemeName: "Invesco India Nifty Exchange Traded ",
        schemeMTM: "0.2",
        percentageInScheme: "11%",
        percentageOfStock: "0%",
        amcId: "31"
      },
      {
        schemeId: "1735",
        schemeName: "Invesco India Tax-G",
        schemeMTM: "81.9",
        percentageInScheme: "9.30%",
        percentageOfStock: "0.11%",
        amcId: "31"
      },
      {
        schemeId: "1737",
        schemeName: "Sahara Banking & Financial Services -G",
        schemeMTM: "1.1",
        percentageInScheme: "22.60%",
        percentageOfStock: "0%",
        amcId: "32"
      },
      {
        schemeId: "1740",
        schemeName: "Sahara G -G",
        schemeMTM: "0.3",
        percentageInScheme: "6.30%",
        percentageOfStock: "0%",
        amcId: "32"
      },
      {
        schemeId: "1750",
        schemeName: "Sahara Super 20 -G",
        schemeMTM: "0",
        percentageInScheme: "12%",
        percentageOfStock: "0%",
        amcId: "32"
      },
      {
        schemeId: "1751",
        schemeName: "Sahara Tax Gain -G",
        schemeMTM: "0.4",
        percentageInScheme: "7.10%",
        percentageOfStock: "0%",
        amcId: "32"
      },
      {
        schemeId: "1753",
        schemeName: "SBI Arbi Opp -Reg-G",
        schemeMTM: "35.4",
        percentageInScheme: "1.20%",
        percentageOfStock: "0.05%",
        amcId: "33"
      },
      {
        schemeId: "1754",
        schemeName: "SBI Blue Chip -Reg-G",
        schemeMTM: "2091.9",
        percentageInScheme: "9.20%",
        percentageOfStock: "2.80%",
        amcId: "33"
      },
      {
        schemeId: "1755",
        schemeName: "SBI Contra -Reg-D",
        schemeMTM: "38.2",
        percentageInScheme: "2.60%",
        percentageOfStock: "0.05%",
        amcId: "33"
      },
      {
        schemeId: "1805",
        schemeName: "SBI Focused Equity -Reg-G",
        schemeMTM: "432.5",
        percentageInScheme: "8.90%",
        percentageOfStock: "0.58%",
        amcId: "33"
      },
      {
        schemeId: "1811",
        schemeName: "SBI Equity Hybrid -Reg-D",
        schemeMTM: "2199.4",
        percentageInScheme: "7.40%",
        percentageOfStock: "2.94%",
        amcId: "33"
      },
      {
        schemeId: "1814",
        schemeName: "SBI Magnum Equity ESG -Reg-D",
        schemeMTM: "234.6",
        percentageInScheme: "9.70%",
        percentageOfStock: "0.31%",
        amcId: "33"
      },
      {
        schemeId: "1821",
        schemeName: "SBI Nifty Index -Reg-G",
        schemeMTM: "46.7",
        percentageInScheme: "10.80%",
        percentageOfStock: "0.06%",
        amcId: "33"
      },
      {
        schemeId: "1825",
        schemeName: "SBI Debt Hybrid -G",
        schemeMTM: "14.7",
        percentageInScheme: "1.30%",
        percentageOfStock: "0.02%",
        amcId: "33"
      },
      {
        schemeId: "1827",
        schemeName: "SBI Magnum Multicap -Reg-G",
        schemeMTM: "656.1",
        percentageInScheme: "8.60%",
        percentageOfStock: "0.88%",
        amcId: "33"
      },
      {
        schemeId: "1828",
        schemeName: "SBI Large & Midcap -Reg-D",
        schemeMTM: "146.6",
        percentageInScheme: "5.60%",
        percentageOfStock: "0.20%",
        amcId: "33"
      },
      {
        schemeId: "1829",
        schemeName: "SBI Magnum TaxGain 1993-Reg-D",
        schemeMTM: "348.4",
        percentageInScheme: "4.90%",
        percentageOfStock: "0.47%",
        amcId: "33"
      },
      {
        schemeId: "1834",
        schemeName: "SBI-ETF Sensex",
        schemeMTM: "2341.5",
        percentageInScheme: "13%",
        percentageOfStock: "3.13%",
        amcId: "33"
      },
      {
        schemeId: "1837",
        schemeName: "SBI Tax Adv -II-G",
        schemeMTM: "1.9",
        percentageInScheme: "7.40%",
        percentageOfStock: "0%",
        amcId: "33"
      },
      {
        schemeId: "1839",
        schemeName: "ICICI Prudential Sensex ETF",
        schemeMTM: "2.7",
        percentageInScheme: "12.90%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "1842",
        schemeName: "Sundaram Equity Hybrid -App",
        schemeMTM: "147.3",
        percentageInScheme: "8.60%",
        percentageOfStock: "0.20%",
        amcId: "35"
      },
      {
        schemeId: "1856",
        schemeName: "Sundaram Large and Mid Cap -G",
        schemeMTM: "30.1",
        percentageInScheme: "4.20%",
        percentageOfStock: "0.04%",
        amcId: "35"
      },
      {
        schemeId: "1893",
        schemeName: "Sundaram Debt Oriented Hybrid -G",
        schemeMTM: "1.8",
        percentageInScheme: "3.10%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "1899",
        schemeName: "Sundaram Select Focus-App",
        schemeMTM: "97.2",
        percentageInScheme: "9.60%",
        percentageOfStock: "0.13%",
        amcId: "35"
      },
      {
        schemeId: "1901",
        schemeName: "Sundaram Diversified Equity-D",
        schemeMTM: "152.9",
        percentageInScheme: "5.70%",
        percentageOfStock: "0.20%",
        amcId: "35"
      },
      {
        schemeId: "1904",
        schemeName: "Sundaram Infrastructure Adv -G",
        schemeMTM: "20.1",
        percentageInScheme: "3.30%",
        percentageOfStock: "0.03%",
        amcId: "35"
      },
      {
        schemeId: "1907",
        schemeName: "Sundaram Financial Services Opp -G",
        schemeMTM: "47.1",
        percentageInScheme: "25.70%",
        percentageOfStock: "0.06%",
        amcId: "35"
      },
      {
        schemeId: "1909",
        schemeName: "Sundaram Rural and Consumption -App",
        schemeMTM: "31.8",
        percentageInScheme: "1.40%",
        percentageOfStock: "0.04%",
        amcId: "35"
      },
      {
        schemeId: "1910",
        schemeName: "Tata Hybrid Equity -G",
        schemeMTM: "430.1",
        percentageInScheme: "9.40%",
        percentageOfStock: "0.57%",
        amcId: "36"
      },
      {
        schemeId: "1915",
        schemeName: "Tata Large & Mid Cap -G",
        schemeMTM: "136.5",
        percentageInScheme: "9.50%",
        percentageOfStock: "0.18%",
        amcId: "36"
      },
      {
        schemeId: "1916",
        schemeName: "Tata Equity P/E -G",
        schemeMTM: "325",
        percentageInScheme: "5.90%",
        percentageOfStock: "0.43%",
        amcId: "36"
      },
      {
        schemeId: "1955",
        schemeName: "Tata Index -Nifty-G",
        schemeMTM: "1.8",
        percentageInScheme: "11.10%",
        percentageOfStock: "0%",
        amcId: "36"
      },
      {
        schemeId: "1956",
        schemeName: "Tata Index -Sensex-G",
        schemeMTM: "1.6",
        percentageInScheme: "13%",
        percentageOfStock: "0%",
        amcId: "36"
      },
      {
        schemeId: "1962",
        schemeName: "Tata Equity Savings -Reg-G",
        schemeMTM: "11.7",
        percentageInScheme: "8.20%",
        percentageOfStock: "0.02%",
        amcId: "36"
      },
      {
        schemeId: "1965",
        schemeName: "Tata Large Cap -App",
        schemeMTM: "71.2",
        percentageInScheme: "8.70%",
        percentageOfStock: "0.10%",
        amcId: "36"
      },
      {
        schemeId: "1966",
        schemeName: "Tata Retirement Savings Cons-G",
        schemeMTM: "3.9",
        percentageInScheme: "2.90%",
        percentageOfStock: "0.01%",
        amcId: "36"
      },
      {
        schemeId: "1967",
        schemeName: "Tata Retirement Savings Moderate-G",
        schemeMTM: "91.4",
        percentageInScheme: "8.40%",
        percentageOfStock: "0.12%",
        amcId: "36"
      },
      {
        schemeId: "1968",
        schemeName: "Tata Retirement Savings Progressive-G",
        schemeMTM: "61.8",
        percentageInScheme: "9.50%",
        percentageOfStock: "0.08%",
        amcId: "36"
      },
      {
        schemeId: "1971",
        schemeName: "Tata India Tax Savings -Reg-D Pay",
        schemeMTM: "136.8",
        percentageInScheme: "7.20%",
        percentageOfStock: "0.18%",
        amcId: "36"
      },
      {
        schemeId: "1973",
        schemeName: "Tata Young Citizen ",
        schemeMTM: "18.9",
        percentageInScheme: "10%",
        percentageOfStock: "0.03%",
        amcId: "36"
      },
      {
        schemeId: "1974",
        schemeName: "Taurus Banking & Financial Services -Reg-G",
        schemeMTM: "1.2",
        percentageInScheme: "17.90%",
        percentageOfStock: "0%",
        amcId: "37"
      },
      {
        schemeId: "1975",
        schemeName: "Taurus Largecap Equity -Reg-G",
        schemeMTM: "2.1",
        percentageInScheme: "7.10%",
        percentageOfStock: "0%",
        amcId: "37"
      },
      {
        schemeId: "1989",
        schemeName: "Taurus Nifty Index -Reg-G",
        schemeMTM: "0.1",
        percentageInScheme: "7.60%",
        percentageOfStock: "0%",
        amcId: "37"
      },
      {
        schemeId: "1991",
        schemeName: "Taurus Starshare (Multi Cap) -Reg-G",
        schemeMTM: "13.3",
        percentageInScheme: "6.10%",
        percentageOfStock: "0.02%",
        amcId: "37"
      },
      {
        schemeId: "1992",
        schemeName: "Taurus Tax Shield-Reg-G",
        schemeMTM: "3.5",
        percentageInScheme: "5.30%",
        percentageOfStock: "0%",
        amcId: "37"
      },
      {
        schemeId: "1999",
        schemeName: "Templeton India Equity Inc -G",
        schemeMTM: "69.2",
        percentageInScheme: "7.30%",
        percentageOfStock: "0.09%",
        amcId: "11"
      },
      {
        schemeId: "2013",
        schemeName: "Union Multi Cap -G",
        schemeMTM: "26.8",
        percentageInScheme: "9.40%",
        percentageOfStock: "0.04%",
        amcId: "38"
      },
      {
        schemeId: "2016",
        schemeName: "Union Tax Saver -G",
        schemeMTM: "21.9",
        percentageInScheme: "8.60%",
        percentageOfStock: "0.03%",
        amcId: "38"
      },
      {
        schemeId: "2019",
        schemeName: "UTI Banking and Financial Services -Reg- Inc",
        schemeMTM: "128.3",
        percentageInScheme: "19.20%",
        percentageOfStock: "0.17%",
        amcId: "39"
      },
      {
        schemeId: "2021",
        schemeName: "UTI Children’s Career -Savings Plan",
        schemeMTM: "122.2",
        percentageInScheme: "3.40%",
        percentageOfStock: "0.16%",
        amcId: "39"
      },
      {
        schemeId: "2023",
        schemeName: "UTI Children’s Career -Investment-G",
        schemeMTM: "22.7",
        percentageInScheme: "7.90%",
        percentageOfStock: "0.03%",
        amcId: "39"
      },
      {
        schemeId: "2027",
        schemeName: "UTI D Yield -Reg-G",
        schemeMTM: "30.8",
        percentageInScheme: "1.30%",
        percentageOfStock: "0.04%",
        amcId: "39"
      },
      {
        schemeId: "2030",
        schemeName: "UTI Equity -Reg-D",
        schemeMTM: "613.1",
        percentageInScheme: "6.50%",
        percentageOfStock: "0.82%",
        amcId: "39"
      },
      {
        schemeId: "2031",
        schemeName: "UTI LT Equity (Tax Saving)-Reg-D",
        schemeMTM: "86.1",
        percentageInScheme: "7.20%",
        percentageOfStock: "0.12%",
        amcId: "39"
      },
      {
        schemeId: "2081",
        schemeName: "UTI India Consumer -Reg-G",
        schemeMTM: "9",
        percentageInScheme: "3.60%",
        percentageOfStock: "0.01%",
        amcId: "39"
      },
      {
        schemeId: "2090",
        schemeName: "UTI Mastershare Unit -Reg- Inc",
        schemeMTM: "567.4",
        percentageInScheme: "9.40%",
        percentageOfStock: "0.76%",
        amcId: "39"
      },
      {
        schemeId: "2091",
        schemeName: "UTI Master Equity Unit ",
        schemeMTM: "167.4",
        percentageInScheme: "9.10%",
        percentageOfStock: "0.22%",
        amcId: "39"
      },
      {
        schemeId: "2093",
        schemeName: "UTI Reg Savings -G",
        schemeMTM: "40.8",
        percentageInScheme: "1.70%",
        percentageOfStock: "0.05%",
        amcId: "39"
      },
      {
        schemeId: "2097",
        schemeName: "UTI Nifty Index -Reg- Inc",
        schemeMTM: "154.7",
        percentageInScheme: "11%",
        percentageOfStock: "0.21%",
        amcId: "39"
      },
      {
        schemeId: "2098",
        schemeName: "UTI Value Opp -Reg-G",
        schemeMTM: "423",
        percentageInScheme: "9.40%",
        percentageOfStock: "0.57%",
        amcId: "39"
      },
      {
        schemeId: "2100",
        schemeName: "UTI Retirement Benefit Pension ",
        schemeMTM: "13.6",
        percentageInScheme: "0.50%",
        percentageOfStock: "0.02%",
        amcId: "39"
      },
      {
        schemeId: "2103",
        schemeName: "UTI Arbi -Reg-G",
        schemeMTM: "42.1",
        percentageInScheme: "2.20%",
        percentageOfStock: "0.06%",
        amcId: "39"
      },
      {
        schemeId: "2108",
        schemeName: "UTI ULIP",
        schemeMTM: "109",
        percentageInScheme: "2.60%",
        percentageOfStock: "0.15%",
        amcId: "39"
      },
      {
        schemeId: "2109",
        schemeName: "Axis Triple Adv -G",
        schemeMTM: "18.1",
        percentageInScheme: "6.60%",
        percentageOfStock: "0.02%",
        amcId: "2"
      },
      {
        schemeId: "2111",
        schemeName: "Aditya Birla Sun Life International Equity -B-G",
        schemeMTM: "7.4",
        percentageInScheme: "9.10%",
        percentageOfStock: "0.01%",
        amcId: "4"
      },
      {
        schemeId: "2116",
        schemeName: "Franklin India Prima -G",
        schemeMTM: "256.4",
        percentageInScheme: "3.60%",
        percentageOfStock: "0.34%",
        amcId: "11"
      },
      {
        schemeId: "2136",
        schemeName: "ICICI Prudential Child Care -Gift Plan",
        schemeMTM: "35.8",
        percentageInScheme: "5.50%",
        percentageOfStock: "0.05%",
        amcId: "14"
      },
      {
        schemeId: "2155",
        schemeName: "L&T Dynamic Equity -Reg-G",
        schemeMTM: "36.9",
        percentageInScheme: "6.80%",
        percentageOfStock: "0.05%",
        amcId: "21"
      },
      {
        schemeId: "2156",
        schemeName: "L&T Hybrid Equity -Reg-G",
        schemeMTM: "586.1",
        percentageInScheme: "6.50%",
        percentageOfStock: "0.78%",
        amcId: "21"
      },
      {
        schemeId: "2159",
        schemeName: "Mirae Asset Great Consumer -Reg-G",
        schemeMTM: "55.5",
        percentageInScheme: "6.90%",
        percentageOfStock: "0.07%",
        amcId: "24"
      },
      {
        schemeId: "2162",
        schemeName: "Motilal Oswal M50 ETF",
        schemeMTM: "2.3",
        percentageInScheme: "10.90%",
        percentageOfStock: "0%",
        amcId: "25"
      },
      {
        schemeId: "2163",
        schemeName: "Essel 3 in 1 -G",
        schemeMTM: "1",
        percentageInScheme: "4.80%",
        percentageOfStock: "0%",
        amcId: "26"
      },
      {
        schemeId: "2175",
        schemeName: "Templeton India Value -D",
        schemeMTM: "41.5",
        percentageInScheme: "7.70%",
        percentageOfStock: "0.06%",
        amcId: "11"
      },
      {
        schemeId: "2176",
        schemeName: "Franklin India Pension-G",
        schemeMTM: "19.3",
        percentageInScheme: "4.40%",
        percentageOfStock: "0.03%",
        amcId: "11"
      },
      {
        schemeId: "2179",
        schemeName: "UTI Multi Asset -Reg-G",
        schemeMTM: "50.8",
        percentageInScheme: "6.50%",
        percentageOfStock: "0.07%",
        amcId: "39"
      },
      {
        schemeId: "2194",
        schemeName: "Motilal Oswal Focused 25 -Reg-G",
        schemeMTM: "120.2",
        percentageInScheme: "10.80%",
        percentageOfStock: "0.16%",
        amcId: "25"
      },
      {
        schemeId: "2197",
        schemeName: "Parag Parikh LT Equity -Reg-G",
        schemeMTM: "169.3",
        percentageInScheme: "8.60%",
        percentageOfStock: "0.23%",
        amcId: "27"
      },
      {
        schemeId: "2225",
        schemeName: "ICICI Prudential Nifty 100 ETF",
        schemeMTM: "0.5",
        percentageInScheme: "9.50%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "2273",
        schemeName: "Shriram Hybrid Equity -Reg-G",
        schemeMTM: "3.2",
        percentageInScheme: "5.50%",
        percentageOfStock: "0%",
        amcId: "34"
      },
      {
        schemeId: "2275",
        schemeName:
          "Aditya Birla Sun Life Banking And Financial Services -Reg-G",
        schemeMTM: "310.6",
        percentageInScheme: "16.70%",
        percentageOfStock: "0.42%",
        amcId: "4"
      },
      {
        schemeId: "2300",
        schemeName: "DSP Dynamic AAF-Reg-G",
        schemeMTM: "16.4",
        percentageInScheme: "1.90%",
        percentageOfStock: "0.02%",
        amcId: "9"
      },
      {
        schemeId: "2447",
        schemeName: "BOI AXA Equity Debt Rebalancer -Reg-G",
        schemeMTM: "6.1",
        percentageInScheme: "3.90%",
        percentageOfStock: "0.01%",
        amcId: "6"
      },
      {
        schemeId: "2775",
        schemeName: "IDBI Diversified Equity -G",
        schemeMTM: "17.2",
        percentageInScheme: "5.30%",
        percentageOfStock: "0.02%",
        amcId: "15"
      },
      {
        schemeId: "2942",
        schemeName: "Kotak Bluechip -D",
        schemeMTM: "134.6",
        percentageInScheme: "9.80%",
        percentageOfStock: "0.18%",
        amcId: "20"
      },
      {
        schemeId: "3201",
        schemeName: "SBI Tax Adv -III-Reg-G",
        schemeMTM: "1.9",
        percentageInScheme: "9.10%",
        percentageOfStock: "0%",
        amcId: "33"
      },
      {
        schemeId: "3384",
        schemeName: "Motilal Oswal Multicap 35 -Reg-G",
        schemeMTM: "1404",
        percentageInScheme: "10.40%",
        percentageOfStock: "1.88%",
        amcId: "25"
      },
      {
        schemeId: "4512",
        schemeName: "Aditya Birla Sun Life Tax Relief 96-D",
        schemeMTM: "233.6",
        percentageInScheme: "2.60%",
        percentageOfStock: "0.31%",
        amcId: "4"
      },
      {
        schemeId: "5805",
        schemeName: "Edelweiss Arbi -Reg-G",
        schemeMTM: "220.8",
        percentageInScheme: "6.40%",
        percentageOfStock: "0.30%",
        amcId: "10"
      },
      {
        schemeId: "5823",
        schemeName: "Edelweiss Multi-AAF-Reg-G",
        schemeMTM: "0.4",
        percentageInScheme: "6%",
        percentageOfStock: "0%",
        amcId: "10"
      },
      {
        schemeId: "6033",
        schemeName: "HDFC Arbi -Wholesale-G",
        schemeMTM: "53.3",
        percentageInScheme: "1.40%",
        percentageOfStock: "0.07%",
        amcId: "12"
      },
      {
        schemeId: "7641",
        schemeName: "ICICI Prudential G -1-DP",
        schemeMTM: "8.7",
        percentageInScheme: "7.90%",
        percentageOfStock: "0.01%",
        amcId: "14"
      },
      {
        schemeId: "13650",
        schemeName: "L&T Arbi Opp -Reg-G",
        schemeMTM: "37.9",
        percentageInScheme: "5.40%",
        percentageOfStock: "0.05%",
        amcId: "21"
      },
      {
        schemeId: "13773",
        schemeName: "DHFL Pramerica Arbi -Reg-G",
        schemeMTM: "3.4",
        percentageInScheme: "1.80%",
        percentageOfStock: "0%",
        amcId: "8"
      },
      {
        schemeId: "13787",
        schemeName: "Axis Arbi -Reg-G",
        schemeMTM: "19.2",
        percentageInScheme: "0.80%",
        percentageOfStock: "0.03%",
        amcId: "2"
      },
      {
        schemeId: "13925",
        schemeName: "ICICI Prudential Multiple Yield -7-C-Cum",
        schemeMTM: "1.3",
        percentageInScheme: "2.40%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "13937",
        schemeName: "L&T Business Cycle -Reg-G",
        schemeMTM: "53.6",
        percentageInScheme: "6.90%",
        percentageOfStock: "0.07%",
        amcId: "21"
      },
      {
        schemeId: "13942",
        schemeName: "Reliance ETF Sensex",
        schemeMTM: "2.6",
        percentageInScheme: "13%",
        percentageOfStock: "0%",
        amcId: "30"
      },
      {
        schemeId: "14016",
        schemeName: "ICICI Prudential G -3-DP",
        schemeMTM: "4.4",
        percentageInScheme: "10%",
        percentageOfStock: "0.01%",
        amcId: "14"
      },
      {
        schemeId: "14018",
        schemeName: "ICICI Prudential Multiple Yield -7-E-Cum",
        schemeMTM: "1.2",
        percentageInScheme: "3.10%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "14022",
        schemeName: "IDFC Dynamic Equity -Reg-G",
        schemeMTM: "64",
        percentageInScheme: "6%",
        percentageOfStock: "0.09%",
        amcId: "16"
      },
      {
        schemeId: "14024",
        schemeName: "IIFL Focused Equity -Reg-G",
        schemeMTM: "19.2",
        percentageInScheme: "10.30%",
        percentageOfStock: "0.03%",
        amcId: "17"
      },
      {
        schemeId: "14027",
        schemeName: "Edelweiss Equity Savings -Reg-G",
        schemeMTM: "2.9",
        percentageInScheme: "2.40%",
        percentageOfStock: "0%",
        amcId: "10"
      },
      {
        schemeId: "14028",
        schemeName: "Kotak Equity Savings -G",
        schemeMTM: "86.3",
        percentageInScheme: "4.10%",
        percentageOfStock: "0.12%",
        amcId: "20"
      },
      {
        schemeId: "14053",
        schemeName: "SBI Equity Opp -I-Reg-G",
        schemeMTM: "3.2",
        percentageInScheme: "9.70%",
        percentageOfStock: "0%",
        amcId: "33"
      },
      {
        schemeId: "14558",
        schemeName: "DSP 3 Y Close Ended Equity -Reg-G",
        schemeMTM: "1.4",
        percentageInScheme: "4.40%",
        percentageOfStock: "0%",
        amcId: "9"
      },
      {
        schemeId: "14564",
        schemeName: "ICICI Prudential Multiple Yield -8-A-Cum",
        schemeMTM: "1.5",
        percentageInScheme: "3.50%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "14667",
        schemeName: "Reliance Retirement -Wealth Creation -G",
        schemeMTM: "157.2",
        percentageInScheme: "9.70%",
        percentageOfStock: "0.21%",
        amcId: "30"
      },
      {
        schemeId: "14673",
        schemeName: "Reliance Retirement - Inc Generation -G",
        schemeMTM: "6.5",
        percentageInScheme: "2.60%",
        percentageOfStock: "0.01%",
        amcId: "30"
      },
      {
        schemeId: "14689",
        schemeName: "LIC MF Banking & Financial Services -Reg-G",
        schemeMTM: "14",
        percentageInScheme: "23%",
        percentageOfStock: "0.02%",
        amcId: "22"
      },
      {
        schemeId: "14725",
        schemeName: "Kotak Banking ETF",
        schemeMTM: "2563.2",
        percentageInScheme: "31.50%",
        percentageOfStock: "3.42%",
        amcId: "20"
      },
      {
        schemeId: "14734",
        schemeName: "SBI-ETF BSE 100",
        schemeMTM: "0.4",
        percentageInScheme: "9.60%",
        percentageOfStock: "0%",
        amcId: "33"
      },
      {
        schemeId: "14735",
        schemeName: "SBI-ETF Nifty Bank",
        schemeMTM: "831.6",
        percentageInScheme: "31.60%",
        percentageOfStock: "1.11%",
        amcId: "33"
      },
      {
        schemeId: "14740",
        schemeName: "SBI Banking & Financial Services -Reg-G",
        schemeMTM: "206",
        percentageInScheme: "21.40%",
        percentageOfStock: "0.28%",
        amcId: "33"
      },
      {
        schemeId: "14754",
        schemeName: "Sundaram LT Tax Adv -I-Reg-G",
        schemeMTM: "1.1",
        percentageInScheme: "5.60%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "14780",
        schemeName: "Indiabulls Arbi -Reg-G",
        schemeMTM: "2.1",
        percentageInScheme: "5.60%",
        percentageOfStock: "0%",
        amcId: "18"
      },
      {
        schemeId: "14784",
        schemeName: "SBI LT Adv -I-Reg-G",
        schemeMTM: "2.1",
        percentageInScheme: "6.20%",
        percentageOfStock: "0%",
        amcId: "33"
      },
      {
        schemeId: "14788",
        schemeName: "SBI LT Adv -II-Reg-G",
        schemeMTM: "1.7",
        percentageInScheme: "5.80%",
        percentageOfStock: "0%",
        amcId: "33"
      },
      {
        schemeId: "14796",
        schemeName: "Aditya Birla Sun Life Equity Savings -Reg-G",
        schemeMTM: "34.2",
        percentageInScheme: "3.60%",
        percentageOfStock: "0.05%",
        amcId: "4"
      },
      {
        schemeId: "14843",
        schemeName: "Motilal Oswal LT Equity -Reg-G",
        schemeMTM: "132",
        percentageInScheme: "9.40%",
        percentageOfStock: "0.18%",
        amcId: "25"
      },
      {
        schemeId: "14847",
        schemeName: "ICICI Prudential Equity Savings -Cum",
        schemeMTM: "36.7",
        percentageInScheme: "2.20%",
        percentageOfStock: "0.05%",
        amcId: "14"
      },
      {
        schemeId: "14879",
        schemeName: "ICICI Prudential Multiple Yield -8-D-Cum",
        schemeMTM: "1.1",
        percentageInScheme: "2.70%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "14992",
        schemeName: "ICICI Prudential CPOF VII-D-1822 D-Cum",
        schemeMTM: "1",
        percentageInScheme: "2.90%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "15004",
        schemeName: "DHFL Pramerica Diversified Equity -Reg-G",
        schemeMTM: "7.3",
        percentageInScheme: "6.20%",
        percentageOfStock: "0.01%",
        amcId: "8"
      },
      {
        schemeId: "15071",
        schemeName: "Edelweiss Multi-Cap -Reg-G",
        schemeMTM: "35.9",
        percentageInScheme: "9.20%",
        percentageOfStock: "0.05%",
        amcId: "10"
      },
      {
        schemeId: "15102",
        schemeName: "Sundaram Value -II-Reg-G",
        schemeMTM: "1.8",
        percentageInScheme: "5.40%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "15149",
        schemeName: "LIC MF Large & Midcap -Reg-G",
        schemeMTM: "29.6",
        percentageInScheme: "5.90%",
        percentageOfStock: "0.04%",
        amcId: "22"
      },
      {
        schemeId: "15350",
        schemeName: "SBI Dynamic AAF-Reg-G",
        schemeMTM: "38",
        percentageInScheme: "5.50%",
        percentageOfStock: "0.05%",
        amcId: "33"
      },
      {
        schemeId: "15368",
        schemeName: "Reliance Equity Savings -G",
        schemeMTM: "55",
        percentageInScheme: "4%",
        percentageOfStock: "0.07%",
        amcId: "30"
      },
      {
        schemeId: "15406",
        schemeName: "DHFL Pramerica Large Cap -2-Reg-G",
        schemeMTM: "6.2",
        percentageInScheme: "10.10%",
        percentageOfStock: "0.01%",
        amcId: "8"
      },
      {
        schemeId: "15439",
        schemeName: "Edelweiss ETF-Nifty 50",
        schemeMTM: "0.2",
        percentageInScheme: "11%",
        percentageOfStock: "0%",
        amcId: "10"
      },
      {
        schemeId: "15558",
        schemeName: "SBI Equity Savings -Reg-G",
        schemeMTM: "86.3",
        percentageInScheme: "4.40%",
        percentageOfStock: "0.12%",
        amcId: "33"
      },
      {
        schemeId: "15678",
        schemeName: "Mirae Asset Hybrid-Equity -Reg-G",
        schemeMTM: "136.9",
        percentageInScheme: "6.20%",
        percentageOfStock: "0.18%",
        amcId: "24"
      },
      {
        schemeId: "15704",
        schemeName: "SBI-ETF Nifty 50",
        schemeMTM: "6116.2",
        percentageInScheme: "11%",
        percentageOfStock: "8.17%",
        amcId: "33"
      },
      {
        schemeId: "15793",
        schemeName: "Axis Equity Saver -Reg-G",
        schemeMTM: "36.3",
        percentageInScheme: "4.70%",
        percentageOfStock: "0.05%",
        amcId: "2"
      },
      {
        schemeId: "15865",
        schemeName: "ICICI Prudential Value -8-D",
        schemeMTM: "0.4",
        percentageInScheme: "3%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "15925",
        schemeName: "UTI Dual Adv FT -II-I-G",
        schemeMTM: "4.6",
        percentageInScheme: "2.70%",
        percentageOfStock: "0.01%",
        amcId: "39"
      },
      {
        schemeId: "15929",
        schemeName: "UTI Dual Adv FT -II-II-G",
        schemeMTM: "0.9",
        percentageInScheme: "3.70%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "15962",
        schemeName: "UTI-Nifty Exchange Traded ",
        schemeMTM: "1530.6",
        percentageInScheme: "11%",
        percentageOfStock: "2.05%",
        amcId: "39"
      },
      {
        schemeId: "15963",
        schemeName: "UTI-Sensex Exchange Traded ",
        schemeMTM: "614.4",
        percentageInScheme: "13.10%",
        percentageOfStock: "0.82%",
        amcId: "39"
      },
      {
        schemeId: "16041",
        schemeName: "SBI Equity Opp -IV-Reg-G",
        schemeMTM: "1.7",
        percentageInScheme: "9.80%",
        percentageOfStock: "0%",
        amcId: "33"
      },
      {
        schemeId: "16055",
        schemeName: "UTI Dual Adv FT -II-III-G",
        schemeMTM: "1",
        percentageInScheme: "3.60%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "16086",
        schemeName: "Indiabulls Savings Inc -Reg-G",
        schemeMTM: "1.2",
        percentageInScheme: "5.90%",
        percentageOfStock: "0%",
        amcId: "18"
      },
      {
        schemeId: "16091",
        schemeName: "Essel Large & Midcap -Reg-G",
        schemeMTM: "7",
        percentageInScheme: "6.50%",
        percentageOfStock: "0.01%",
        amcId: "26"
      },
      {
        schemeId: "16095",
        schemeName: "ICICI Prudential Multiple Yield -10-A-Cum",
        schemeMTM: "3.5",
        percentageInScheme: "2.30%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "16098",
        schemeName: "HDFC Nifty 50 ETF",
        schemeMTM: "35.1",
        percentageInScheme: "11%",
        percentageOfStock: "0.05%",
        amcId: "12"
      },
      {
        schemeId: "16099",
        schemeName: "HDFC Sensex ETF",
        schemeMTM: "6.6",
        percentageInScheme: "13%",
        percentageOfStock: "0.01%",
        amcId: "12"
      },
      {
        schemeId: "16104",
        schemeName: "DHFL Pramerica LT Equity -Reg-G",
        schemeMTM: "30.1",
        percentageInScheme: "9.10%",
        percentageOfStock: "0.04%",
        amcId: "8"
      },
      {
        schemeId: "16105",
        schemeName: "Principal Retirement Savings -Progressive-G",
        schemeMTM: "0.1",
        percentageInScheme: "4.20%",
        percentageOfStock: "0%",
        amcId: "28"
      },
      {
        schemeId: "16106",
        schemeName: "Principal Retirement Savings -Cons-G",
        schemeMTM: "0",
        percentageInScheme: "1.80%",
        percentageOfStock: "0%",
        amcId: "28"
      },
      {
        schemeId: "16107",
        schemeName: "Principal Retirement Savings -Moderate-G",
        schemeMTM: "0",
        percentageInScheme: "3.20%",
        percentageOfStock: "0%",
        amcId: "28"
      },
      {
        schemeId: "16108",
        schemeName: "Edelweiss ETF-Nifty Bank",
        schemeMTM: "0.4",
        percentageInScheme: "31.60%",
        percentageOfStock: "0%",
        amcId: "10"
      },
      {
        schemeId: "16111",
        schemeName: "UTI Dual Adv FT -II-IV-G",
        schemeMTM: "5.9",
        percentageInScheme: "3.50%",
        percentageOfStock: "0.01%",
        amcId: "39"
      },
      {
        schemeId: "16117",
        schemeName: "Mirae Asset Tax Saver -Reg-G",
        schemeMTM: "190.4",
        percentageInScheme: "8.60%",
        percentageOfStock: "0.25%",
        amcId: "24"
      },
      {
        schemeId: "16121",
        schemeName: "Essel LT Adv -Reg-G",
        schemeMTM: "5.7",
        percentageInScheme: "9.60%",
        percentageOfStock: "0.01%",
        amcId: "26"
      },
      {
        schemeId: "16129",
        schemeName: "ICICI Prudential CPOF IX-D-1378 D-Cum",
        schemeMTM: "1.6",
        percentageInScheme: "1.40%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "16132",
        schemeName: "ICICI Prudential Multiple Yield -10-B-Cum",
        schemeMTM: "0.5",
        percentageInScheme: "0.60%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "16141",
        schemeName: "Tata Banking & Financial Services -Reg-G",
        schemeMTM: "74",
        percentageInScheme: "22.50%",
        percentageOfStock: "0.10%",
        amcId: "36"
      },
      {
        schemeId: "16160",
        schemeName: "DSP Equity Savings -Reg-G",
        schemeMTM: "44.3",
        percentageInScheme: "3.60%",
        percentageOfStock: "0.06%",
        amcId: "9"
      },
      {
        schemeId: "16162",
        schemeName: "Edelweiss ETF-Nifty 100 Quality 30",
        schemeMTM: "0.6",
        percentageInScheme: "5.10%",
        percentageOfStock: "0%",
        amcId: "10"
      },
      {
        schemeId: "16185",
        schemeName: "HDFC Retirement Savings -Equity-Reg-G",
        schemeMTM: "60.1",
        percentageInScheme: "8.20%",
        percentageOfStock: "0.08%",
        amcId: "12"
      },
      {
        schemeId: "16186",
        schemeName: "HDFC Retirement Savings -Hybrid-Debt-Reg-G",
        schemeMTM: "0.8",
        percentageInScheme: "1.20%",
        percentageOfStock: "0%",
        amcId: "12"
      },
      {
        schemeId: "16187",
        schemeName: "HDFC Retirement Savings -Hybrid-Equity-Reg-G",
        schemeMTM: "19.2",
        percentageInScheme: "6.30%",
        percentageOfStock: "0.03%",
        amcId: "12"
      },
      {
        schemeId: "16190",
        schemeName: "ICICI Prudential CPOF IX-E-1325 D-Cum",
        schemeMTM: "1.8",
        percentageInScheme: "2.30%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "16192",
        schemeName: "ICICI Prudential CPOF X-A-1235 D-Cum",
        schemeMTM: "3",
        percentageInScheme: "2.30%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "16224",
        schemeName: "LIC MF Exchange Traded -Nifty 100",
        schemeMTM: "31.5",
        percentageInScheme: "9.60%",
        percentageOfStock: "0.04%",
        amcId: "22"
      },
      {
        schemeId: "16257",
        schemeName: "SBI LT Adv -III-Reg-G",
        schemeMTM: "3.3",
        percentageInScheme: "6.20%",
        percentageOfStock: "0%",
        amcId: "33"
      },
      {
        schemeId: "16258",
        schemeName: "Sundaram CPOF-5 Y-7-G",
        schemeMTM: "3.8",
        percentageInScheme: "3.90%",
        percentageOfStock: "0.01%",
        amcId: "35"
      },
      {
        schemeId: "16259",
        schemeName: "Sundaram CPOF-5 Y-8-G",
        schemeMTM: "3.5",
        percentageInScheme: "4.10%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "16264",
        schemeName: "Sundaram LT Tax Adv -II-Reg-G",
        schemeMTM: "1",
        percentageInScheme: "6.10%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "16265",
        schemeName: "Sundaram Value -III-Reg-G",
        schemeMTM: "1.9",
        percentageInScheme: "5.40%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "16266",
        schemeName: "UTI Cap Protection Oriented -VII-II (1281 D)-G",
        schemeMTM: "0.8",
        percentageInScheme: "2.10%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "16267",
        schemeName: "UTI Cap Protection Oriented -VII-III (1279 D)-G",
        schemeMTM: "0.6",
        percentageInScheme: "1.90%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "16268",
        schemeName: "UTI Cap Protection Oriented -VII-IV (1278 D)-G",
        schemeMTM: "2.4",
        percentageInScheme: "1.70%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "16269",
        schemeName: "UTI Cap Protection Oriented -VII-V (1281 D)-G",
        schemeMTM: "1.5",
        percentageInScheme: "1.40%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "16270",
        schemeName: "UTI Dual Adv FT -III-I-G",
        schemeMTM: "1",
        percentageInScheme: "3.80%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "16271",
        schemeName: "UTI Dual Adv FT -II-V-G",
        schemeMTM: "1.8",
        percentageInScheme: "4%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "16289",
        schemeName: "ICICI Prudential CPOF X-B-1375 D-Cum",
        schemeMTM: "4.9",
        percentageInScheme: "2.10%",
        percentageOfStock: "0.01%",
        amcId: "14"
      },
      {
        schemeId: "16290",
        schemeName: "Aditya Birla Sun Life Sensex ETF",
        schemeMTM: "1.5",
        percentageInScheme: "13%",
        percentageOfStock: "0%",
        amcId: "4"
      },
      {
        schemeId: "16296",
        schemeName: "UTI Dual Adv FT -III-II-G",
        schemeMTM: "1.2",
        percentageInScheme: "1.90%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "16319",
        schemeName: "ICICI Prudential Multiple Yield -11-A-Cum",
        schemeMTM: "3.2",
        percentageInScheme: "2.20%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "16322",
        schemeName: "LIC MF Exchange Traded -Nifty 50",
        schemeMTM: "57.9",
        percentageInScheme: "11%",
        percentageOfStock: "0.08%",
        amcId: "22"
      },
      {
        schemeId: "16323",
        schemeName: "LIC MF Exchange Traded -Sensex",
        schemeMTM: "51.7",
        percentageInScheme: "13%",
        percentageOfStock: "0.07%",
        amcId: "22"
      },
      {
        schemeId: "16337",
        schemeName: "UTI Cap Protection Oriented -VIII-I (1278 D)-G",
        schemeMTM: "1.9",
        percentageInScheme: "2%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "16347",
        schemeName: "Axis Childrens Gift -Compulsory Lock-in-Reg-G",
        schemeMTM: "26.5",
        percentageInScheme: "6.20%",
        percentageOfStock: "0.04%",
        amcId: "2"
      },
      {
        schemeId: "16497",
        schemeName: "Aditya Birla Sun Life Resurgent India -1-Reg-G",
        schemeMTM: "6.4",
        percentageInScheme: "5.20%",
        percentageOfStock: "0.01%",
        amcId: "4"
      },
      {
        schemeId: "16525",
        schemeName: "Canara Robeco CPOF-7-Reg-G",
        schemeMTM: "6.4",
        percentageInScheme: "1%",
        percentageOfStock: "0.01%",
        amcId: "7"
      },
      {
        schemeId: "16669",
        schemeName: "HDFC Dual Adv -III-1304 D-Aug 2016-Reg-G",
        schemeMTM: "2.4",
        percentageInScheme: "1.60%",
        percentageOfStock: "0%",
        amcId: "12"
      },
      {
        schemeId: "17100",
        schemeName: "ICICI Prudential Multiple Yield -11-B-Cum",
        schemeMTM: "1.7",
        percentageInScheme: "1.50%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "17104",
        schemeName: "ICICI Prudential Multiple Yield -11-C-Cum",
        schemeMTM: "0.7",
        percentageInScheme: "1.60%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "17179",
        schemeName: "IDFC Nifty ETF",
        schemeMTM: "0.1",
        percentageInScheme: "10.80%",
        percentageOfStock: "0%",
        amcId: "16"
      },
      {
        schemeId: "17181",
        schemeName: "IDFC Sensex ETF",
        schemeMTM: "0.1",
        percentageInScheme: "12.90%",
        percentageOfStock: "0%",
        amcId: "16"
      },
      {
        schemeId: "17421",
        schemeName: "Mahindra Mutual Kar Bachat Yojana-Reg-G",
        schemeMTM: "24.4",
        percentageInScheme: "7.10%",
        percentageOfStock: "0.03%",
        amcId: "23"
      },
      {
        schemeId: "17430",
        schemeName: "Motilal Oswal Dynamic -Reg-G",
        schemeMTM: "79.9",
        percentageInScheme: "5.70%",
        percentageOfStock: "0.11%",
        amcId: "25"
      },
      {
        schemeId: "17947",
        schemeName: "UTI Cap Protection Oriented -VIII-II (1831 D)-G",
        schemeMTM: "1.9",
        percentageInScheme: "2.30%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "17951",
        schemeName: "UTI Cap Protection Oriented -VIII-III (1281 D)-G",
        schemeMTM: "1.8",
        percentageInScheme: "1.50%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "18332",
        schemeName: "IDBI Midcap -G",
        schemeMTM: "3.2",
        percentageInScheme: "1.50%",
        percentageOfStock: "0%",
        amcId: "15"
      },
      {
        schemeId: "18336",
        schemeName: "ICICI Prudential CPOF XI-A-2056 D-Cum",
        schemeMTM: "0.7",
        percentageInScheme: "2.30%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "18344",
        schemeName: "ICICI Prudential Multiple Yield -11-D-Cum",
        schemeMTM: "0.4",
        percentageInScheme: "1.10%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "18364",
        schemeName: "ICICI Prudential CPOF XI-B-1222 D-Cum",
        schemeMTM: "0.2",
        percentageInScheme: "0.70%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "18372",
        schemeName: "Mahindra Dhan Sanchay Equity Savings Yojana-Reg-G",
        schemeMTM: "14.5",
        percentageInScheme: "5.60%",
        percentageOfStock: "0.02%",
        amcId: "23"
      },
      {
        schemeId: "18383",
        schemeName: "ICICI Prudential Value -10-Cum",
        schemeMTM: "6.9",
        percentageInScheme: "4.80%",
        percentageOfStock: "0.01%",
        amcId: "14"
      },
      {
        schemeId: "18392",
        schemeName: "ICICI Prudential Value -11-Cum",
        schemeMTM: "9.1",
        percentageInScheme: "6.30%",
        percentageOfStock: "0.01%",
        amcId: "14"
      },
      {
        schemeId: "18839",
        schemeName: "SBI Dual Adv -XIX-Reg-G",
        schemeMTM: "17.8",
        percentageInScheme: "1.30%",
        percentageOfStock: "0.02%",
        amcId: "33"
      },
      {
        schemeId: "18842",
        schemeName: "Sundaram Smart NIFTY 100 Equal Weight -Reg-G",
        schemeMTM: "0.2",
        percentageInScheme: "1%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "18944",
        schemeName: "Sundaram TOP 100-VI-Reg-G",
        schemeMTM: "2.2",
        percentageInScheme: "7.80%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "18979",
        schemeName: "SBI LT Adv -IV-Reg-G",
        schemeMTM: "10.8",
        percentageInScheme: "7.10%",
        percentageOfStock: "0.01%",
        amcId: "33"
      },
      {
        schemeId: "18996",
        schemeName: "UTI Dual Adv FT -IV-II-G",
        schemeMTM: "0.5",
        percentageInScheme: "0.90%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "19019",
        schemeName: "UTI Dual Adv FT -IV-III-G",
        schemeMTM: "0.8",
        percentageInScheme: "1.50%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "19584",
        schemeName: "DSP Dual Adv -49-42M-Reg-G",
        schemeMTM: "1.3",
        percentageInScheme: "2.50%",
        percentageOfStock: "0%",
        amcId: "9"
      },
      {
        schemeId: "20165",
        schemeName: "UTI Dual Adv FT -IV-I-G",
        schemeMTM: "0.5",
        percentageInScheme: "1.10%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "20181",
        schemeName: "SBI Dual Adv -XVIII-Reg-G",
        schemeMTM: "13.2",
        percentageInScheme: "1.40%",
        percentageOfStock: "0.02%",
        amcId: "33"
      },
      {
        schemeId: "20378",
        schemeName: "HDFC Dual Adv -III-1267 D-Oct 2016-Reg-G",
        schemeMTM: "1.5",
        percentageInScheme: "1.60%",
        percentageOfStock: "0%",
        amcId: "12"
      },
      {
        schemeId: "20397",
        schemeName: "HDFC Dual Adv -III-1224 D-Nov 2016-Reg-G",
        schemeMTM: "1.3",
        percentageInScheme: "1.60%",
        percentageOfStock: "0%",
        amcId: "12"
      },
      {
        schemeId: "20695",
        schemeName: "IDBI Hybrid Equity -G",
        schemeMTM: "18.3",
        percentageInScheme: "5.80%",
        percentageOfStock: "0.02%",
        amcId: "15"
      },
      {
        schemeId: "20727",
        schemeName: "IDFC Hybrid Equity -Reg-G",
        schemeMTM: "53.8",
        percentageInScheme: "6.40%",
        percentageOfStock: "0.07%",
        amcId: "16"
      },
      {
        schemeId: "20847",
        schemeName: "ICICI Prudential CPOF XI-C-1255 D-Cum",
        schemeMTM: "1.8",
        percentageInScheme: "3.50%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "20851",
        schemeName: "ICICI Prudential CPOF XI-D-1247 D-Cum",
        schemeMTM: "0.9",
        percentageInScheme: "1.10%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "20904",
        schemeName: "UTI Dual Adv FT -IV-IV-G",
        schemeMTM: "0.5",
        percentageInScheme: "2.30%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "20938",
        schemeName: "DHFL Pramerica Dual Adv -1-Reg-G",
        schemeMTM: "1.5",
        percentageInScheme: "6%",
        percentageOfStock: "0%",
        amcId: "8"
      },
      {
        schemeId: "21075",
        schemeName: "BNP Paribas Substantial Equity Hybrid -Reg-G",
        schemeMTM: "25.7",
        percentageInScheme: "8.60%",
        percentageOfStock: "0.03%",
        amcId: "5"
      },
      {
        schemeId: "21168",
        schemeName: "ICICI Prudential CPOF XI-E-1222 D-Cum",
        schemeMTM: "0.7",
        percentageInScheme: "1.30%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "21205",
        schemeName: "ICICI Prudential Value -12-D",
        schemeMTM: "36.9",
        percentageInScheme: "5%",
        percentageOfStock: "0.05%",
        amcId: "14"
      },
      {
        schemeId: "21260",
        schemeName: "Sundaram Hybrid -- U-Reg-G",
        schemeMTM: "1.8",
        percentageInScheme: "3.50%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "21269",
        schemeName: "Sundaram TOP 100-VII-Reg-G",
        schemeMTM: "1.6",
        percentageInScheme: "7.80%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "21273",
        schemeName: "UTI Cap Protection Oriented -IX-I (1467 D)-G",
        schemeMTM: "0.7",
        percentageInScheme: "1.20%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "21331",
        schemeName: "Axis Equity Adv -1-Reg-G",
        schemeMTM: "68.4",
        percentageInScheme: "6.80%",
        percentageOfStock: "0.09%",
        amcId: "2"
      },
      {
        schemeId: "21342",
        schemeName: "UTI Cap Protection Oriented -IX-II (1462 D)-G",
        schemeMTM: "0.5",
        percentageInScheme: "1.20%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "21347",
        schemeName: "Canara Robeco CPOF-8-Reg-G",
        schemeMTM: "13.3",
        percentageInScheme: "1.50%",
        percentageOfStock: "0.02%",
        amcId: "7"
      },
      {
        schemeId: "21379",
        schemeName: "Union Largecap -Reg-G",
        schemeMTM: "22.1",
        percentageInScheme: "9.80%",
        percentageOfStock: "0.03%",
        amcId: "38"
      },
      {
        schemeId: "21390",
        schemeName: "HDFC Equity Opp -2-1126 D-May 2017 (1)-Reg-G",
        schemeMTM: "81.7",
        percentageInScheme: "6.60%",
        percentageOfStock: "0.11%",
        amcId: "12"
      },
      {
        schemeId: "21403",
        schemeName: "ICICI Prudential CPOF XII-A-1168 D-Cum",
        schemeMTM: "0.3",
        percentageInScheme: "1%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "21424",
        schemeName: "ICICI Prudential Value -13-D",
        schemeMTM: "36.7",
        percentageInScheme: "5%",
        percentageOfStock: "0.05%",
        amcId: "14"
      },
      {
        schemeId: "21428",
        schemeName: "ICICI Prudential Value -14-Cum",
        schemeMTM: "46.6",
        percentageInScheme: "8.50%",
        percentageOfStock: "0.06%",
        amcId: "14"
      },
      {
        schemeId: "21440",
        schemeName: "Mahindra Mutual Badhat Yojana-Reg-G",
        schemeMTM: "26.8",
        percentageInScheme: "9.10%",
        percentageOfStock: "0.04%",
        amcId: "23"
      },
      {
        schemeId: "21465",
        schemeName: "SBI Dual Adv -XXII-Reg-G",
        schemeMTM: "31.8",
        percentageInScheme: "1.20%",
        percentageOfStock: "0.04%",
        amcId: "33"
      },
      {
        schemeId: "21477",
        schemeName: "ICICI Prudential Value -17-Cum",
        schemeMTM: "11.5",
        percentageInScheme: "5.70%",
        percentageOfStock: "0.02%",
        amcId: "14"
      },
      {
        schemeId: "21492",
        schemeName: "UTI Cap Protection Oriented -IX-III (1389 D)-G",
        schemeMTM: "0.9",
        percentageInScheme: "1.20%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "21503",
        schemeName: "UTI Dual Adv FT -V-I-G",
        schemeMTM: "0.5",
        percentageInScheme: "1.20%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "21517",
        schemeName: "Axis Dynamic Equity -Reg-G",
        schemeMTM: "127.3",
        percentageInScheme: "5.60%",
        percentageOfStock: "0.17%",
        amcId: "2"
      },
      {
        schemeId: "21588",
        schemeName: "ICICI Prudential Value -16-Cum",
        schemeMTM: "37.3",
        percentageInScheme: "5.80%",
        percentageOfStock: "0.05%",
        amcId: "14"
      },
      {
        schemeId: "21618",
        schemeName: "Axis Equity Adv -2-Reg-G",
        schemeMTM: "8.1",
        percentageInScheme: "8.30%",
        percentageOfStock: "0.01%",
        amcId: "2"
      },
      {
        schemeId: "21632",
        schemeName: "HDFC Equity Opp -2-1100 D-Jun 2017 (1)-Reg-G",
        schemeMTM: "53.8",
        percentageInScheme: "7.10%",
        percentageOfStock: "0.07%",
        amcId: "12"
      },
      {
        schemeId: "21679",
        schemeName: "Axis Nifty ETF",
        schemeMTM: "0.8",
        percentageInScheme: "11%",
        percentageOfStock: "0%",
        amcId: "2"
      },
      {
        schemeId: "21680",
        schemeName: "ICICI Prudential Nifty Low Vol 30 ETF",
        schemeMTM: "1.7",
        percentageInScheme: "5.20%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "21691",
        schemeName: "SBI Dual Adv -XXIII-Reg-G",
        schemeMTM: "28.8",
        percentageInScheme: "1.20%",
        percentageOfStock: "0.04%",
        amcId: "33"
      },
      {
        schemeId: "21720",
        schemeName: "BNP Paribas Focused 25 Equity -Reg-G",
        schemeMTM: "24.2",
        percentageInScheme: "9.90%",
        percentageOfStock: "0.03%",
        amcId: "5"
      },
      {
        schemeId: "21721",
        schemeName: "ICICI Prudential Sensex Index -G",
        schemeMTM: "2.8",
        percentageInScheme: "13%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "21726",
        schemeName: "SBI Dual Adv -XXIV-Reg-G",
        schemeMTM: "28.8",
        percentageInScheme: "1.20%",
        percentageOfStock: "0.04%",
        amcId: "33"
      },
      {
        schemeId: "21742",
        schemeName: "IDBI Focused 30 Equity -Reg-G",
        schemeMTM: "19.7",
        percentageInScheme: "8.10%",
        percentageOfStock: "0.03%",
        amcId: "15"
      },
      {
        schemeId: "21749",
        schemeName: "DSP Equal Nifty 50 -Reg-G",
        schemeMTM: "2.3",
        percentageInScheme: "2%",
        percentageOfStock: "0%",
        amcId: "9"
      },
      {
        schemeId: "21751",
        schemeName: "Axis Multicap -Reg-G",
        schemeMTM: "386.6",
        percentageInScheme: "9.70%",
        percentageOfStock: "0.52%",
        amcId: "2"
      },
      {
        schemeId: "21808",
        schemeName: "Reliance Cap Builder -IV-A-G",
        schemeMTM: "13.3",
        percentageInScheme: "8.80%",
        percentageOfStock: "0.02%",
        amcId: "30"
      },
      {
        schemeId: "21832",
        schemeName: "ICICI Prudential Value -18-Cum",
        schemeMTM: "8",
        percentageInScheme: "5.90%",
        percentageOfStock: "0.01%",
        amcId: "14"
      },
      {
        schemeId: "21870",
        schemeName: "HDFC Housing Opp -1-1140 D-Nov 2017 (1)-Reg-G",
        schemeMTM: "190.6",
        percentageInScheme: "5.70%",
        percentageOfStock: "0.25%",
        amcId: "12"
      },
      {
        schemeId: "21874",
        schemeName: "DSP A.C.E. (Analysts Conviction Equalized)-1-Reg-G",
        schemeMTM: "25",
        percentageInScheme: "4.30%",
        percentageOfStock: "0.03%",
        amcId: "9"
      },
      {
        schemeId: "21906",
        schemeName: "SBI Dual Adv -XXV-Reg-G",
        schemeMTM: "30.3",
        percentageInScheme: "1.20%",
        percentageOfStock: "0.04%",
        amcId: "33"
      },
      {
        schemeId: "21978",
        schemeName: "Indiabulls Tax Savings -Reg-G",
        schemeMTM: "7.8",
        percentageInScheme: "9.40%",
        percentageOfStock: "0.01%",
        amcId: "18"
      },
      {
        schemeId: "21990",
        schemeName: "Union Balanced Adv -Reg-G",
        schemeMTM: "33.5",
        percentageInScheme: "6.10%",
        percentageOfStock: "0.04%",
        amcId: "38"
      },
      {
        schemeId: "22041",
        schemeName: "Reliance Dual Adv Fixed Tenure XII-A-1218 D-G",
        schemeMTM: "0.7",
        percentageInScheme: "1.90%",
        percentageOfStock: "0%",
        amcId: "30"
      },
      {
        schemeId: "22203",
        schemeName: "DSP Arbi -Reg-G",
        schemeMTM: "10.6",
        percentageInScheme: "2.40%",
        percentageOfStock: "0.01%",
        amcId: "9"
      },
      {
        schemeId: "22268",
        schemeName: "SBI Dual Adv -XXVI-Reg-G",
        schemeMTM: "24.7",
        percentageInScheme: "1.20%",
        percentageOfStock: "0.03%",
        amcId: "33"
      },
      {
        schemeId: "22316",
        schemeName: "ICICI Prudential Multiple Yield -14-A-Cum",
        schemeMTM: "0.8",
        percentageInScheme: "1.90%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "22340",
        schemeName: "Kotak India G -4-G",
        schemeMTM: "9.8",
        percentageInScheme: "2.40%",
        percentageOfStock: "0.01%",
        amcId: "20"
      },
      {
        schemeId: "22396",
        schemeName: "Canara Robeco CPOF-9-Reg-G",
        schemeMTM: "8.5",
        percentageInScheme: "1.60%",
        percentageOfStock: "0.01%",
        amcId: "7"
      },
      {
        schemeId: "22399",
        schemeName: "DSP A.C.E. (Analysts Conviction Equalized)-2-Reg-G",
        schemeMTM: "3.4",
        percentageInScheme: "4.30%",
        percentageOfStock: "0%",
        amcId: "9"
      },
      {
        schemeId: "22477",
        schemeName: "Axis Cap Builder -1-Reg-G",
        schemeMTM: "36.7",
        percentageInScheme: "8%",
        percentageOfStock: "0.05%",
        amcId: "2"
      },
      {
        schemeId: "22585",
        schemeName: "ICICI Prudential LT Wealth Enhancement -G",
        schemeMTM: "4",
        percentageInScheme: "9.40%",
        percentageOfStock: "0.01%",
        amcId: "14"
      },
      {
        schemeId: "22755",
        schemeName: "SBI LT Adv -V-Reg-G",
        schemeMTM: "32.7",
        percentageInScheme: "10.50%",
        percentageOfStock: "0.04%",
        amcId: "33"
      },
      {
        schemeId: "22770",
        schemeName: "SBI Dual Adv -XXVII-Reg-G",
        schemeMTM: "12.7",
        percentageInScheme: "1.20%",
        percentageOfStock: "0.02%",
        amcId: "33"
      },
      {
        schemeId: "22862",
        schemeName: "Essel Equity Hybrid -Reg-G",
        schemeMTM: "21.1",
        percentageInScheme: "7.70%",
        percentageOfStock: "0.03%"
      },
      {
        schemeId: "22899",
        schemeName: "ICICI Prudential S&P BSE 500 ETF",
        schemeMTM: "1.4",
        percentageInScheme: "7.90%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "22933",
        schemeName: "IIFL Cap Enhancer -1-Reg-G",
        schemeMTM: "27.9",
        percentageInScheme: "10.70%",
        percentageOfStock: "0.04%",
        amcId: "17"
      },
      {
        schemeId: "22979",
        schemeName: "Kotak India G -5-G",
        schemeMTM: "38.7",
        percentageInScheme: "10.90%",
        percentageOfStock: "0.05%",
        amcId: "20"
      },
      {
        schemeId: "23096",
        schemeName: "IDBI Banking & Financial Services -Reg-G",
        schemeMTM: "32.9",
        percentageInScheme: "21.20%",
        percentageOfStock: "0.04%",
        amcId: "15"
      },
      {
        schemeId: "23133",
        schemeName: "Canara Robeco Dual Adv -1-Reg-G",
        schemeMTM: "8.7",
        percentageInScheme: "2.10%",
        percentageOfStock: "0.01%",
        amcId: "7"
      },
      {
        schemeId: "23182",
        schemeName: "SBI Dual Adv -XXVIII-Reg-G",
        schemeMTM: "11",
        percentageInScheme: "1.30%",
        percentageOfStock: "0.01%",
        amcId: "33"
      },
      {
        schemeId: "23441",
        schemeName: "Sundaram Multi Cap -I-Reg-G",
        schemeMTM: "4.3",
        percentageInScheme: "5%",
        percentageOfStock: "0.01%",
        amcId: "35"
      },
      {
        schemeId: "23451",
        schemeName: "Invesco India Equity & Bond -Reg-G",
        schemeMTM: "27.1",
        percentageInScheme: "6.10%",
        percentageOfStock: "0.04%",
        amcId: "31"
      },
      {
        schemeId: "23505",
        schemeName: "Essel Multi Cap -Reg-G",
        schemeMTM: "19.9",
        percentageInScheme: "9.50%",
        percentageOfStock: "0.03%"
      },
      {
        schemeId: "23581",
        schemeName: "Tata Value -1-Reg-G",
        schemeMTM: "73.8",
        percentageInScheme: "9.70%",
        percentageOfStock: "0.10%",
        amcId: "36"
      },
      {
        schemeId: "23655",
        schemeName: "SBI LT Adv -VI-Reg-G",
        schemeMTM: "22.4",
        percentageInScheme: "9.70%",
        percentageOfStock: "0.03%",
        amcId: "33"
      },
      {
        schemeId: "23664",
        schemeName: "SBI Dual Adv -XXIX-Reg-G",
        schemeMTM: "11.2",
        percentageInScheme: "1.20%",
        percentageOfStock: "0.02%",
        amcId: "33"
      },
      {
        schemeId: "23669",
        schemeName: "IDFC Equity Opportunity-6-Reg-G",
        schemeMTM: "11.3",
        percentageInScheme: "7.60%",
        percentageOfStock: "0.02%",
        amcId: "16"
      },
      {
        schemeId: "23684",
        schemeName: "Sundaram Multi Cap -II-Reg-G",
        schemeMTM: "2.6",
        percentageInScheme: "5%",
        percentageOfStock: "0%",
        amcId: "35"
      },
      {
        schemeId: "23723",
        schemeName: "Kotak Balanced Adv -Reg-G",
        schemeMTM: "106",
        percentageInScheme: "3.70%",
        percentageOfStock: "0.14%",
        amcId: "20"
      },
      {
        schemeId: "23733",
        schemeName: "Tata Value -2-Reg-G",
        schemeMTM: "26.4",
        percentageInScheme: "10%",
        percentageOfStock: "0.04%",
        amcId: "36"
      },
      {
        schemeId: "23775",
        schemeName: "Union Equity Savings -Reg-G",
        schemeMTM: "14.1",
        percentageInScheme: "5.40%",
        percentageOfStock: "0.02%",
        amcId: "38"
      },
      {
        schemeId: "23794",
        schemeName: "Axis Equity Hybrid -Reg-G",
        schemeMTM: "145.8",
        percentageInScheme: "6.80%",
        percentageOfStock: "0.19%",
        amcId: "2"
      },
      {
        schemeId: "23867",
        schemeName: "Franklin India Equity Savings -G",
        schemeMTM: "8.7",
        percentageInScheme: "2.90%",
        percentageOfStock: "0.01%",
        amcId: "11"
      },
      {
        schemeId: "23902",
        schemeName: "IDBI LT Value -Reg-G",
        schemeMTM: "7.3",
        percentageInScheme: "4.60%",
        percentageOfStock: "0.01%",
        amcId: "15"
      },
      {
        schemeId: "23953",
        schemeName: "UTI Equity Savings -Reg-G",
        schemeMTM: "2.7",
        percentageInScheme: "0.80%",
        percentageOfStock: "0%",
        amcId: "39"
      },
      {
        schemeId: "24025",
        schemeName: "Kotak India G -7-G",
        schemeMTM: "3.1",
        percentageInScheme: "9.20%",
        percentageOfStock: "0%",
        amcId: "20"
      },
      {
        schemeId: "24039",
        schemeName: "Tata Multicap -Reg-G",
        schemeMTM: "155.4",
        percentageInScheme: "9.50%",
        percentageOfStock: "0.21%",
        amcId: "36"
      },
      {
        schemeId: "24041",
        schemeName: "BNP Paribas India Consumption -Reg-G",
        schemeMTM: "34.6",
        percentageInScheme: "8.80%",
        percentageOfStock: "0.05%",
        amcId: "5"
      },
      {
        schemeId: "24118",
        schemeName: "Motilal Oswal Equity Hybrid -Reg-G",
        schemeMTM: "18",
        percentageInScheme: "6.90%",
        percentageOfStock: "0.02%",
        amcId: "25"
      },
      {
        schemeId: "24180",
        schemeName: "Sundaram Services -Reg-G",
        schemeMTM: "114.4",
        percentageInScheme: "9.40%",
        percentageOfStock: "0.15%",
        amcId: "35"
      },
      {
        schemeId: "24288",
        schemeName: "Shriram Multicap -Reg-G",
        schemeMTM: "2.3",
        percentageInScheme: "4.10%",
        percentageOfStock: "0%",
        amcId: "34"
      },
      {
        schemeId: "24395",
        schemeName: "SBI Dual Adv -XXX-Reg-G",
        schemeMTM: "5.9",
        percentageInScheme: "1.40%",
        percentageOfStock: "0.01%",
        amcId: "33"
      },
      {
        schemeId: "24404",
        schemeName: "BOI AXA Midcap Tax -2-Reg-G",
        schemeMTM: "0.8",
        percentageInScheme: "1.70%",
        percentageOfStock: "0%",
        amcId: "6"
      },
      {
        schemeId: "24412",
        schemeName: "Axis G Opp -Reg-G",
        schemeMTM: "29.1",
        percentageInScheme: "3.80%",
        percentageOfStock: "0.04%",
        amcId: "2"
      },
      {
        schemeId: "24418",
        schemeName: "HSBC Equity Hybrid -Reg-G",
        schemeMTM: "48.9",
        percentageInScheme: "7.50%",
        percentageOfStock: "0.07%",
        amcId: "13"
      },
      {
        schemeId: "24507",
        schemeName: "L&T Focused Equity -Reg-G",
        schemeMTM: "42.8",
        percentageInScheme: "6.80%",
        percentageOfStock: "0.06%",
        amcId: "21"
      },
      {
        schemeId: "24541",
        schemeName: "Baroda Dynamic Equity -Reg-G",
        schemeMTM: "8.9",
        percentageInScheme: "2.20%",
        percentageOfStock: "0.01%",
        amcId: "3"
      },
      {
        schemeId: "24543",
        schemeName: "Mirae Asset Nifty 50 ETF",
        schemeMTM: "2.2",
        percentageInScheme: "11%",
        percentageOfStock: "0%",
        amcId: "24"
      },
      {
        schemeId: "24626",
        schemeName: "ICICI Prudential CPOF XIV-A-1275 D-Cum",
        schemeMTM: "13.9",
        percentageInScheme: "3.30%",
        percentageOfStock: "0.02%",
        amcId: "14"
      },
      {
        schemeId: "24665",
        schemeName: "Union Value Discovery -Reg-G",
        schemeMTM: "8.6",
        percentageInScheme: "5.70%",
        percentageOfStock: "0.01%",
        amcId: "38"
      },
      {
        schemeId: "24672",
        schemeName: "Sundaram Equity Savings -Reg-G",
        schemeMTM: "5",
        percentageInScheme: "3.70%",
        percentageOfStock: "0.01%",
        amcId: "35"
      },
      {
        schemeId: "24689",
        schemeName: "Indiabulls Equity Hybrid -Reg-G",
        schemeMTM: "1.1",
        percentageInScheme: "2.80%",
        percentageOfStock: "0%",
        amcId: "18"
      },
      {
        schemeId: "24728",
        schemeName: "Mirae Asset Equity Savings -Reg-G",
        schemeMTM: "1.7",
        percentageInScheme: "3.20%",
        percentageOfStock: "0%",
        amcId: "24"
      },
      {
        schemeId: "24732",
        schemeName: "Tata Arbi -Reg-G",
        schemeMTM: "3.6",
        percentageInScheme: "1.90%",
        percentageOfStock: "0%",
        amcId: "36"
      },
      {
        schemeId: "24777",
        schemeName: "Axis Cap Builder -4-Reg-G",
        schemeMTM: "95.1",
        percentageInScheme: "10.30%",
        percentageOfStock: "0.13%",
        amcId: "2"
      },
      {
        schemeId: "24798",
        schemeName: "BOI AXA Small Cap -Reg-G",
        schemeMTM: "0.6",
        percentageInScheme: "1.20%",
        percentageOfStock: "0%",
        amcId: "6"
      },
      {
        schemeId: "24840",
        schemeName: "Tata Nifty Exchange Traded ",
        schemeMTM: "8.5",
        percentageInScheme: "11%",
        percentageOfStock: "0.01%",
        amcId: "36"
      },
      {
        schemeId: "45540",
        schemeName: "Tata Balanced Adv -Reg-G",
        schemeMTM: "36.4",
        percentageInScheme: "4.10%",
        percentageOfStock: "0.05%",
        amcId: "36"
      },
      {
        schemeId: "48043",
        schemeName: "Aditya Birla Sun Life Bal Bhavishya Yojna-Wealth-Reg-G",
        schemeMTM: "3.7",
        percentageInScheme: "2.40%",
        percentageOfStock: "0%",
        amcId: "4"
      },
      {
        schemeId: "50487",
        schemeName: "DSP NIFTY 50 Index -Reg-G",
        schemeMTM: "2",
        percentageInScheme: "10.80%",
        percentageOfStock: "0%"
      },
      {
        schemeId: "52131",
        schemeName: "Aditya Birla Sun Life Retirement -The 30s-Reg-G",
        schemeMTM: "2.3",
        percentageInScheme: "2.40%",
        percentageOfStock: "0%",
        amcId: "4"
      },
      {
        schemeId: "52281",
        schemeName: "LIC MF Arbi -Reg-G",
        schemeMTM: "4.3",
        percentageInScheme: "4.10%",
        percentageOfStock: "0.01%",
        amcId: "22"
      },
      {
        schemeId: "52332",
        schemeName: "Invesco India Equity Savings -Reg-G",
        schemeMTM: "7.9",
        percentageInScheme: "2.70%",
        percentageOfStock: "0.01%",
        amcId: "31"
      },
      {
        schemeId: "52360",
        schemeName: "DSP Quant -Reg-G",
        schemeMTM: "6.4",
        percentageInScheme: "6.70%",
        percentageOfStock: "0.01%"
      },
      {
        schemeId: "52361",
        schemeName: "BNP Paribas Dynamic Equity -Reg-G",
        schemeMTM: "3.8",
        percentageInScheme: "4.80%",
        percentageOfStock: "0.01%",
        amcId: "5"
      },
      {
        schemeId: "54616",
        schemeName: "Mahindra Pragati Bluechip Yojana-Reg-G",
        schemeMTM: "3.2",
        percentageInScheme: "4.20%",
        percentageOfStock: "0%",
        amcId: "23"
      },
      {
        schemeId: "54739",
        schemeName: "Indiabulls NIFTY 50 Exchange Traded ",
        schemeMTM: "1.4",
        percentageInScheme: "11%",
        percentageOfStock: "0%",
        amcId: "18"
      },
      {
        schemeId: "57137",
        schemeName: "SBI Equity Minimum Variance -Reg-G",
        schemeMTM: "1.4",
        percentageInScheme: "3%",
        percentageOfStock: "0%",
        amcId: "33"
      },
      {
        schemeId: "57220",
        schemeName: "Canara Robeco CPOF-10-Reg-G",
        schemeMTM: "2.2",
        percentageInScheme: "1.30%",
        percentageOfStock: "0%",
        amcId: "7"
      },
      {
        schemeId: "59291",
        schemeName: "ICICI Prudential Retirement -Pure Equity-G",
        schemeMTM: "3.5",
        percentageInScheme: "6.60%",
        percentageOfStock: "0%",
        amcId: "14"
      },
      {
        schemeId: "59292",
        schemeName: "ICICI Prudential Retirement -Hybrid Aggr-G",
        schemeMTM: "4.3",
        percentageInScheme: "6.30%",
        percentageOfStock: "0.01%",
        amcId: "14"
      },
      {
        schemeId: "61625",
        schemeName: "Aditya Birla Sun Life Dual Adv -II-Reg-G",
        schemeMTM: "0.8",
        percentageInScheme: "1.60%",
        percentageOfStock: "0%",
        amcId: "4"
      },
      {
        schemeId: "61776",
        schemeName: "Shriram LT Equity -Reg-G",
        schemeMTM: "1.1",
        percentageInScheme: "5%",
        percentageOfStock: "0%",
        amcId: "34"
      },
      {
        schemeId: "61967",
        schemeName: "Union Arbi -Reg-G",
        schemeMTM: "0.9",
        percentageInScheme: "0.80%",
        percentageOfStock: "0%",
        amcId: "38"
      },
      {
        schemeId: "62142",
        schemeName: "HSBC Large & Mid Cap Equity -Reg-G",
        schemeMTM: "48.9",
        percentageInScheme: "7.60%",
        percentageOfStock: "0.07%",
        amcId: "13"
      },
      {
        schemeId: "62218",
        schemeName: "Aditya Birla Sun Life Retirement -The 40s-Reg-G",
        schemeMTM: "1",
        percentageInScheme: "1.80%",
        percentageOfStock: "0%",
        amcId: "4"
      },
      {
        schemeId: "62329",
        schemeName: "Mirae Asset Focused -Reg-G",
        schemeMTM: "78.3",
        percentageInScheme: "6.80%",
        percentageOfStock: "0.10%",
        amcId: "24"
      },
      {
        schemeId: "62847",
        schemeName: "ITI Multi-Cap -Reg-G",
        schemeMTM: "1.7",
        percentageInScheme: "7%",
        percentageOfStock: "0%"
      }
    ]
  };
}

export default {
  fetchAllStocks,
  fetchStockOverview,
  filterStocks,
  fetchAMCWiseHoldings
};
