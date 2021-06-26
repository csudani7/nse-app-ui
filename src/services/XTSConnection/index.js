var XtsMarketDataAPI = require("xts-marketdata-api").XtsMarketDataAPI;
var XtsMarketDataWS = require("xts-marketdata-api").WS;

let xtsUrl = process.env.REACT_APP_XTS_URL;
let xtsSecretKey = process.env.REACT_APP_XTS_SECRETKEY;
let xtsAppKey = process.env.REACT_APP_XTS_APPKEY;
let xtsWebSource = process.env.REACT_APP_XTS_SOURCE;
var xtsMarketDataAPI = null;
var xtsMarketDataWS = null;

export const callMasterAPI = async (settingLiveData, eventCode) => {
  xtsMarketDataAPI = new XtsMarketDataAPI(xtsUrl);
  var loginRequest = {
    secretKey: xtsSecretKey,
    appKey: xtsAppKey,
    source: xtsWebSource,
  };

  let logIn = await xtsMarketDataAPI.logIn(loginRequest);

  if (logIn && logIn.type === xtsMarketDataAPI.responseTypes.success) {
    let userID = logIn?.result?.userID;
    xtsMarketDataWS = new XtsMarketDataWS(xtsUrl);

    var socketInitRequest = {
      userID: userID,
      publishFormat: "JSON",
      broadcastMode: "Full",
      token: logIn?.result?.token, // Token Generated after successful LogIn
    };
    xtsMarketDataWS.init(socketInitRequest);
    await registerEvents(eventCode);
    fetch_live_data_based_on_token(settingLiveData, eventCode);
  } else {
    console.error(logIn, "Error in XTS Login");
  }
};

async function fetch_live_data_based_on_token(settingLiveData, eventCode) {
  var instrumentsData = [];
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
      console.log("Sorry! Something went wrong!!!");
    }
  }

  let subscriptionRequest = {
    instruments: instrumentsData,
    xtsMessageCode: 1502, //1502: Market Data
  };
  await subscription(subscriptionRequest);

  let getQuotesRequest = {
    instruments: instrumentsData,
    xtsMessageCode: 1502, //1502: Market Data
    publishFormat: "JSON",
  };
  await getQuotes(getQuotesRequest);
}

var subscription = async function (subscriptionRequest) {
  return await xtsMarketDataAPI.subscription(subscriptionRequest);
};

var getQuotes = async function (getQuotesRequest) {
  return await xtsMarketDataAPI.getQuotes(getQuotesRequest);
};

var registerEvents = async function (eventCode) {
  xtsMarketDataWS.onConnect((connectData) => {
    console.log(connectData, "connectData");
  });

  xtsMarketDataWS.onJoined((joinedData) => {
    console.log(joinedData, "joinedData");
  });

  xtsMarketDataWS.onError((errorData) => {
    console.log(errorData, "errorData");
  });

  xtsMarketDataWS.onDisconnect((disconnectData) => {
    console.log(disconnectData, "disconnectData");
  });

  xtsMarketDataWS.onMarketDepthEvent((marketDepthData) => {
    console.log(marketDepthData, "marketDepthData", eventCode, "eventCode");
  });

  xtsMarketDataWS.onOpenInterestEvent((openInterestData) => {
    console.log(openInterestData, "openInterestData", eventCode, "eventCode");
  });

  xtsMarketDataWS.onIndexDataEvent((indexData) => {
    console.log(indexData, "indexData", eventCode, "eventCode");
  });

  xtsMarketDataWS.onMarketDepth100Event((marketDepth100Data) => {
    console.log(marketDepth100Data, "marketDepth100Data");
  });

  xtsMarketDataWS.onCandleDataEvent((candleData) => {
    console.log(candleData, "candleData", eventCode, "eventCode");
  });

  xtsMarketDataWS.onLogout((logoutData) => {
    console.log(logoutData, "logoutData");
  });
};
