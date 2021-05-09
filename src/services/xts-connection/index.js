// var XtsMarketDataAPI = require('xts-marketdata-api').XtsMarketDataAPI;

//Accessing the XtsMarketDataAPI and XtsMarketDataWS from xts-marketdata-api library
// var XtsMarketDataAPI = require('xts-marketdata-api').xtsMarketDataAPI;
// var XtsMarketDataWS = require('xts-marketdata-api').WS;
import { XtsMarketDataAPI, XtsMarketDataWS } from 'xts-marketdata-api'

export const callMasterAPI = async (settingLiveData) => {
    let secretKey = process.env.REACT_APP_XTSSecretKey; 
    let appKey = process.env.REACT_APP_XTSAppKey; 
    // let source = process.env.REACT_APP_XTSSource; 
    let url = process.env.REACT_APP_XTSUrl; 
    // let userID = null;
    console.log('log', secretKey, appKey);
    //xtsInteractive for API calls and xtsMarketDataWS for events related functionality
    var xtsMarketDataAPI = null;
    var xtsMarketDataWS = null;
    //creating the instance of XTSRest
    xtsMarketDataAPI = new XtsMarketDataAPI(url);

    //calling the logIn API
    var loginRequest = {
        secretKey,
        appKey,
    };
    console.log('loginRequest', loginRequest);
    let logIn = await xtsMarketDataAPI.logIn(loginRequest);

    // checking for valid loginRequest
    if (logIn && logIn.type === xtsMarketDataAPI.responseTypes.success) {
        console.log('login success', logIn);
        //creating the instance of xtsMarketDataWS
        let userID = logIn.result.userID;
        xtsMarketDataWS = new XtsMarketDataWS(url);

        //Instantiating the socket instance
        var socketInitRequest = {
            userID: userID,
            //  userID: logIn.result.userID,
            publishFormat: 'JSON',
            broadcastMode: 'Full',
            token: logIn.result.token, // Token Generated after successful LogIn
        };
        xtsMarketDataWS.init(socketInitRequest);

        console.log('first finish');
        // return { data: "false" };
        //Registering the socket Events
        // await registerEvents();

        // fetch_live_data_based_on_token(settingLiveData);
    } else {
        console.error(logIn);
    }
};
// async function fetch_live_data_based_on_token(settingLiveData) {
//     // 1501: Touchline
//     // 1502: Market Data
//     // 1504: Index Data
//     // 1505: Candle Data
//     // 1510: OpenInterest

//     var instrumentsData = [];
//     for (var i = 0; i < settingLiveData.length; ++i) {
//         if (settingLiveData[i].ExchangeSegment === "NSECM") {
//             instrumentsData.push({ "exchangeSegment": 1, "exchangeInstrumentID": settingLiveData[i].ExchangeInstrumentID });
//         }
//         else if (settingLiveData[i].ExchangeSegment === "NSEFO") {
//             instrumentsData.push({ "exchangeSegment": 2, "exchangeInstrumentID": settingLiveData[i].ExchangeInstrumentID });
//         }
//         else if (settingLiveData[i].ExchangeSegment === "BSECM") {
//             instrumentsData.push({ "exchangeSegment": 11, "exchangeInstrumentID": settingLiveData[i].ExchangeInstrumentID });
//         }
//         else {
//             console.log("Sorry!");
//         }
//     }

//     let subscriptionRequest = {
//         instruments: instrumentsData,
//         xtsMessageCode: process.env.REACT_APP_EventCode,
//     };

//     // subscribe instrument to get market data
//     await subscription(subscriptionRequest);
//     let isTradeSymbol = false;

//     let getQuotesRequest = {
//         isTradeSymbol: isTradeSymbol,
//         instruments: instrumentsData,
//         xtsMessageCode: process.env.REACT_APP_EventCode,
//         publishFormat: 'JSON',
//     };

//     // get details of instrument
//     await getQuotes(getQuotesRequest);

// }


// var subscription = async function (subscriptionRequest) {
//     var xtsMarketDataAPI = null;
//     let url = process.env.REACT_APP_XTSUrl;//config.url;

//     xtsMarketDataAPI = XtsMarketDataAPI(url);

//     let response = await xtsMarketDataAPI.subscription(subscriptionRequest);
//     console.log(response);
//     return response;
// };

// var getQuotes = async function (getQuotesRequest) {
//     var xtsMarketDataAPI = null;
//     let url = process.env.REACT_APP_XTSUrl;//config.url;

//     xtsMarketDataAPI = XtsMarketDataAPI(url);

//     let response = await xtsMarketDataAPI.getQuotes(getQuotesRequest);
//     // console.log("FinalData");
//     // console.log(response.result.quotesList);
//     console.log(response.result.listQuotes);
//     for (var i = 0; i < response.result.listQuotes.length; ++i) {
//         console.log(JSON.parse(response.result.listQuotes[i]));
//         saveDataintoMongodb(JSON.parse(response.result.listQuotes[i]))
//     }
//     return response;
// };


// const saveDataintoMongodb = async (data) => {
//     // 1501: Touchline
//     // 1502: Market Data
//     // 1504: Index Data
//     // 1505: Candle Data
//     // 1510: OpenInterest
//     // if (process.env.EventCode == 1502) {
//     //     await new Mdp(data).save();
//     // }

//     // else if (process.env.EventCode == 1501) {
//     //     await new Tle(data).save();
//     // }

//     // else if (process.env.EventCode == 1504) {
//     //     await new Ide(data).save();
//     // }

//     // else if (process.env.EventCode == 1505) {
//     //     await new Cde(data).save();
//     // }

//     // else if (process.env.EventCode == 1510) {
//     //     await new Oie(data).save();
//     // }
//     // else {
//     console.log("sorry");
//     // }
// };


// const stopLiveAdminDataSaveIntoMongodb = async () => {
//     await logOut();
// }

// var logOut = async function () {
//     let response = await xtsMarketDataAPI.logOut();
//     console.log(response);
//     return response;
// };

// var registerEvents = async function () {
//     let url = process.env.REACT_APP_XTSUrl;//config.url;
//     let xtsMarketDataWS = XtsMarketDataWS(url);

//     //instantiating the listeners for all event related data
//     //"connect" event listener
//     xtsMarketDataWS.onConnect((connectData) => {
//         console.log(connectData);
//     });

//     //"joined" event listener
//     xtsMarketDataWS.onJoined((joinedData) => {
//         console.log(joinedData);
//     });

//     //"error" event listener
//     xtsMarketDataWS.onError((errorData) => {
//         console.log(errorData);
//     });

//     //"disconnect" event listener
//     xtsMarketDataWS.onDisconnect((disconnectData) => {
//         console.log(disconnectData);
//     });

//     //"marketDepthEvent" event listener
//     xtsMarketDataWS.onMarketDepthEvent((marketDepthData) => {
//         console.log(marketDepthData);
//     });

//     //"openInterestEvent" event listener
//     xtsMarketDataWS.onOpenInterestEvent((openInterestData) => {
//         console.log(openInterestData);
//     });

//     //"indexDataEvent" event listener
//     xtsMarketDataWS.onIndexDataEvent((indexData) => {
//         console.log(indexData);
//     });

//     //"marketDepth100Event" event listener
//     xtsMarketDataWS.onMarketDepth100Event((marketDepth100Data) => {
//         console.log(marketDepth100Data);
//     });

//     // //"instrumentPropertyChangeEvent" event listener
//     // xtsMarketDataWS.onInstrumentPropertyChangeEvent((propertyChangeData) => {
//     //   console.log(propertyChangeData);
//     // });

//     //"candleDataEvent" event listener
//     xtsMarketDataWS.onCandleDataEvent((candleData) => {
//         console.log(candleData);
//     });

//     // //"logout" event listener
//     xtsMarketDataWS.onLogout((logoutData) => {
//         console.log(logoutData);
//     });

//     xtsMarketDataWS.onLogout((logoutData) => {
//         console.log(logoutData);
//     });
// };
