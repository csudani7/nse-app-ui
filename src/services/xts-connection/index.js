const XtsMarketDataAPI = require("xts-marketdata-api").XtsMarketDataAPI;
const XtsMarketDataWS = require("xts-marketdata-api").WS;

const secretKey = process.env.REACT_APP_XTSSecretKey;
const appKey = process.env.REACT_APP_XTSAppKey;
const xtsServerUrl = process.env.REACT_APP_XTSUrl;

/* Xts API data feed object */
const xtsMarketDataAPI = new XtsMarketDataAPI(xtsServerUrl);

/* xts server login request */
const loginRequest = {
  secretKey,
  appKey,
};

/* XTS login request */
export const getXTSAPIToken = async () => {
  return await xtsMarketDataAPI.logIn(loginRequest);
};

/* xts WS deta feed object  */
const xtsMarketDataWS = new XtsMarketDataWS(xtsServerUrl);

var connectXtsSocekt = async () => {
  const login = await xtsMarketDataAPI.logIn(loginRequest);
  /* Socket connection config */
  const socketInitRequest = {
    userID: "XYZ",
    publishFormat: "JSON",
    broadcastMode: "Full",
    token: login?.result?.token, // Token Generated after successful LogIn
  };
  xtsMarketDataWS.init(socketInitRequest);
};
connectXtsSocekt();

var registerEvents = async function () {
  //instantiating the listeners for all event related data

  //"connect" event listener
  xtsMarketDataWS.onConnect((connectData) => {
    console.log(connectData, "connectData");
  });

  //"joined" event listener
  xtsMarketDataWS.onJoined((joinedData) => {
    console.log(joinedData, "joinedData");
  });

  //"error" event listener
  xtsMarketDataWS.onError((errorData) => {
    console.log(errorData, "errorData");
  });

  //"disconnect" event listener
  xtsMarketDataWS.onDisconnect((disconnectData) => {
    console.log(disconnectData, "disconnectData");
  });

  //"marketDepthEvent" event listener
  xtsMarketDataWS.onMarketDepthEvent((marketDepthData) => {
    console.log(marketDepthData, "marketDepthData");
  });

  //"openInterestEvent" event listener
  xtsMarketDataWS.onOpenInterestEvent((openInterestData) => {
    console.log(openInterestData, "marketDepthData");
  });

  //"indexDataEvent" event listener
  xtsMarketDataWS.onIndexDataEvent((indexData) => {
    console.log(indexData, "indexData");
  });

  //"marketDepth100Event" event listener
  xtsMarketDataWS.onMarketDepth100Event((marketDepth100Data) => {
    console.log(marketDepth100Data, "marketDepth100Data");
  });

  //"instrumentPropertyChangeEvent" event listener
  xtsMarketDataWS.onInstrumentPropertyChangeEvent((propertyChangeData) => {
    console.log(propertyChangeData, "propertyChangeData");
  });

  //"candleDataEvent" event listener
  xtsMarketDataWS.onCandleDataEvent((candleData) => {
    console.log(candleData, "candleData");
  });

  // //"logout" event listener
  xtsMarketDataWS.onLogout((logoutData) => {
    console.log(logoutData, "logoutData");
  });
};

registerEvents();

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

const getQuotes = async function (getQuotesRequest) {
  let response = await xtsMarketDataAPI.getQuotes(getQuotesRequest);
  let finalResponse = null;
  if (response && response.result && response.result.listQuotes) {
    for (var i = 0; i < response.result.listQuotes.length; ++i) {
      finalResponse = JSON.parse(response.result.listQuotes[i]);
    }
  }
  return finalResponse;
};
