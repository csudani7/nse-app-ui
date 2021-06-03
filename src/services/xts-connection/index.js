import { XtsMarketDataAPI } from "xts-marketdata-api";
const secretKey = process.env.REACT_APP_XTSSecretKey;
const appKey = process.env.REACT_APP_XTSAppKey;
const url = process.env.REACT_APP_XTSUrl;

const xtsMarketDataAPI = new XtsMarketDataAPI(url);

const loginRequest = {
  secretKey,
  appKey,
};

export const getXTSAPIToken = async () => {
  const logIn = await xtsMarketDataAPI.logIn(loginRequest);
  return logIn;
};

export const callMasterAPI = async (settingLiveData) => {
  let logIn = await getXTSAPIToken();
  if (logIn && logIn.type === xtsMarketDataAPI.responseTypes.success) {
    let finalResponse = fetch_live_data_based_on_token(settingLiveData);
    return finalResponse;
  } else {
    console.error(logIn);
  }
};
async function fetch_live_data_based_on_token(settingLiveData) {
  // 1501: Touchline
  // 1502: Market Data
  // 1504: Index Data
  // 1505: Candle Data
  // 1510: OpenInterest

  var instrumentsData = [];
  if (settingLiveData && settingLiveData.length) {
    for (var i = 0; i < settingLiveData.length; ++i) {
      if (settingLiveData[i].ExchangeSegment === "NSECM") {
        instrumentsData.push({
          exchangeSegment: 1,
          exchangeInstrumentID: settingLiveData[i].ExchangeInstrumentID,
        });
      } else if (settingLiveData[i].ExchangeSegment === "NSEFO") {
        instrumentsData.push({
          exchangeSegment: 2,
          exchangeInstrumentID: settingLiveData[i].ExchangeInstrumentID,
        });
      } else if (settingLiveData[i].ExchangeSegment === "BSECM") {
        instrumentsData.push({
          exchangeSegment: 11,
          exchangeInstrumentID: settingLiveData[i].ExchangeInstrumentID,
        });
      } else {
        console.log("Sorry!");
      }
    }
  }
  if (instrumentsData && instrumentsData.length) {
    let isTradeSymbol = false;
    let getQuotesRequest = {
      isTradeSymbol: isTradeSymbol,
      instruments: instrumentsData,
      xtsMessageCode: process.env.REACT_APP_EventCode,
      publishFormat: "JSON",
    };
    let finalGetQuotes = await getQuotes(getQuotesRequest);
    return finalGetQuotes;
  } else {
    return null;
  }
}

var getQuotes = async function (getQuotesRequest) {
  let response = await xtsMarketDataAPI.getQuotes(getQuotesRequest);
  let finalResponse = null;
  if (response && response.result && response.result.listQuotes) {
    for (var i = 0; i < response.result.listQuotes.length; ++i) {
      finalResponse = JSON.parse(response.result.listQuotes[i]);
    }
  }
  return finalResponse;
};
