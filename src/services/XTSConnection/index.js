var XtsMarketDataAPI = require("xts-marketdata-api").XtsMarketDataAPI;
var XtsMarketDataWS = require("xts-marketdata-api").WS;

let xtsUrl = process.env.REACT_APP_XTS_URL;
let xtsSecretKey = process.env.REACT_APP_XTS_SECRETKEY;
let xtsAppKey = process.env.REACT_APP_XTS_APPKEY;
let xtsWebSource = process.env.REACT_APP_XTS_SOURCE;
var xtsMarketDataAPI = null;
var xtsMarketDataWS = null;

export default class DataFeed {
  async callMasterAPI(settingLiveData) {
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
      await this.fetch_live_data_based_on_token(settingLiveData, 1502);
      await this.registerEvents(1502);
    } else {
      console.error(logIn, "Error in XTS Login");
    }
  }

  async subscription(subscriptionRequest) {
    return await xtsMarketDataAPI.subscription(subscriptionRequest);
  }

  async fetch_live_data_based_on_token(settingLiveData) {
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
    await this.subscription(subscriptionRequest);
  }

  async registerEvents() {
    xtsMarketDataWS.onConnect((connectData) => {
      console.log(connectData, "connectData");
    });

    xtsMarketDataWS.onJoined((joinedData) => {
      console.log(joinedData, "joinedData");
    });

    xtsMarketDataWS.onMarketDepthEvent((marketDepthData) => {
      console.log(marketDepthData, "marketDepthData");
    });

    xtsMarketDataWS.onError((errorData) => {
      console.log(errorData, "errorData");
    });

    xtsMarketDataWS.onDisconnect((disconnectData) => {
      console.log(disconnectData, "disconnectData");
    });

    // xtsMarketDataWS.onLogout((logoutData) => {
    //   console.log(logoutData, "logoutData");
    // });
  }
}
