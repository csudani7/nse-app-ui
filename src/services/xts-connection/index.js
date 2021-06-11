var XtsMarketDataAPI = require("xts-marketdata-api").xtsMarketDataAPI;
var XtsMarketDataWS = require("xts-marketdata-api").WS;

let secretKey = process.env.XTSSecretKey;
let appKey = process.env.XTSAppKey;
let url = process.env.XTSUrl;
let isTradeSymbol = false;
var xtsMarketDataAPI = null;
var xtsMarketDataWS = null;

export const callMasterAPI = async (settingLiveData, eventCode) => {
  xtsMarketDataAPI = new XtsMarketDataAPI(url);
  var loginRequest = {
    secretKey,
    appKey,
  };

  let logIn = await xtsMarketDataAPI.logIn(loginRequest);

  if (logIn && logIn.type === xtsMarketDataAPI.responseTypes.success) {
    let userID = logIn.result.userID;
    xtsMarketDataWS = new XtsMarketDataWS(url);

    var socketInitRequest = {
      userID: userID,
      publishFormat: "JSON",
      broadcastMode: "Full",
      token: logIn.result.token, // Token Generated after successful LogIn
    };
    xtsMarketDataWS.init(socketInitRequest);
    await registerEvents(eventCode);
    fetch_live_data_based_on_token(settingLiveData, eventCode);
  } else {
    console.error(logIn);
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
      console.log("Sorry!");
    }
  }

  let subscriptionRequest = {
    instruments: instrumentsData,
    xtsMessageCode: eventCode, //1502
  };
  await subscription(subscriptionRequest);

  let getQuotesRequest = {
    isTradeSymbol: isTradeSymbol,
    instruments: instrumentsData,
    xtsMessageCode: eventCode,
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
    console.log(connectData);
  });

  xtsMarketDataWS.onJoined((joinedData) => {
    console.log(joinedData);
  });

  xtsMarketDataWS.onError((errorData) => {
    console.log(errorData);
  });

  xtsMarketDataWS.onDisconnect((disconnectData) => {
    console.log(disconnectData);
  });

  xtsMarketDataWS.onMarketDepthEvent((marketDepthData) => {
    console.log(marketDepthData, eventCode);
  });

  xtsMarketDataWS.onOpenInterestEvent((openInterestData) => {
    console.log(openInterestData, eventCode);
  });

  xtsMarketDataWS.onIndexDataEvent((indexData) => {
    console.log(indexData, eventCode);
  });

  xtsMarketDataWS.onMarketDepth100Event((marketDepth100Data) => {
    console.log(marketDepth100Data);
  });

  xtsMarketDataWS.onCandleDataEvent((candleData) => {
    console.log(candleData, eventCode);
  });

  xtsMarketDataWS.onLogout((logoutData) => {
    console.log(logoutData);
  });
};
