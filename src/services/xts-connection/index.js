import { XtsMarketDataAPI } from 'xts-marketdata-api'
// , WS 
const secretKey = process.env.REACT_APP_XTSSecretKey;
const appKey = process.env.REACT_APP_XTSAppKey;
const url = process.env.REACT_APP_XTSUrl;

const xtsMarketDataAPI = new XtsMarketDataAPI(url);
// let xtsMarketDataWS = null

//calling the logIn API
const loginRequest = {
    secretKey,
    appKey,
};

export const getXTSAPIToken = async () => {
    const logIn = await xtsMarketDataAPI.logIn(loginRequest);
    return logIn
}

export const callMasterAPI = async (settingLiveData) => {
    let logIn = await getXTSAPIToken()
    // checking for valid loginRequest
    if (logIn && logIn.type === xtsMarketDataAPI.responseTypes.success) {
        // let userID = logIn.result.userID;
        // xtsMarketDataWS = new WS(url);

        // //Instantiating the socket instance
        // var socketInitRequest = {
        //     userID: userID,
        //     publishFormat: 'JSON',
        //     broadcastMode: 'Full',
        //     token: logIn.result.token, // Token Generated after successful LogIn
        // };
        // xtsMarketDataWS.init(socketInitRequest);

        //Registering the socket Events
        // let liveRes = 
        // await registerEvents();

        let finalResponse = fetch_live_data_based_on_token(settingLiveData);
        return finalResponse
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
                instrumentsData.push({ "exchangeSegment": 1, "exchangeInstrumentID": settingLiveData[i].ExchangeInstrumentID });
            }
            else if (settingLiveData[i].ExchangeSegment === "NSEFO") {
                instrumentsData.push({ "exchangeSegment": 2, "exchangeInstrumentID": settingLiveData[i].ExchangeInstrumentID });
            }
            else if (settingLiveData[i].ExchangeSegment === "BSECM") {
                instrumentsData.push({ "exchangeSegment": 11, "exchangeInstrumentID": settingLiveData[i].ExchangeInstrumentID });
            }
            else {
                console.log("Sorry!");
            }
        }
    }

    // let subscriptionRequest = {
    //     instruments: instrumentsData,
    //     xtsMessageCode: process.env.REACT_APP_EventCode,
    // };

    // subscribe instrument to get market data
    // let subscriptionResponse = await subscription(subscriptionRequest);


    if (instrumentsData && instrumentsData.length) {
        let isTradeSymbol = false;
        let getQuotesRequest = {
            isTradeSymbol: isTradeSymbol,
            instruments: instrumentsData,
            xtsMessageCode: process.env.REACT_APP_EventCode,
            publishFormat: 'JSON',
        };

        // get details of instrument
        let finalGetQuotes = await getQuotes(getQuotesRequest);
        return finalGetQuotes;
    } else {
        return null
    }

}

// var subscription = async function (subscriptionRequest) {
//     let response = await xtsMarketDataAPI.subscription(subscriptionRequest);
//     return response;
// };

var getQuotes = async function (getQuotesRequest) {
    const logIn = await xtsMarketDataAPI.logIn(loginRequest);

    let response = await xtsMarketDataAPI.getQuotes(getQuotesRequest);
    let finalResponse = null;
    if (response && response.result && response.result.listQuotes) {
        for (var i = 0; i < response.result.listQuotes.length; ++i) {
            // console.log(JSON.parse(response.result.listQuotes[i]));
            finalResponse = JSON.parse(response.result.listQuotes[i])
            // saveDataintoMongodb(JSON.parse(response.result.listQuotes[i]))
        }
    }

    return finalResponse;
};

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

//     //instantiating the listeners for all event related data
//     //"connect" event listener
//     xtsMarketDataWS.onConnect((connectData) => {
//         console.log('onConnect', connectData);
//     });

//     //"joined" event listener
//     xtsMarketDataWS.onJoined((joinedData) => {
//         console.log('onJoined', joinedData);
//     });

//     //"error" event listener
//     xtsMarketDataWS.onError((errorData) => {
//         console.log('onError', errorData);
//     });

//     //"disconnect" event listener
//     xtsMarketDataWS.onDisconnect((disconnectData) => {
//         console.log('onDisconnect', disconnectData);
//     });

//     //"marketDepthEvent" event listener
//     xtsMarketDataWS.onMarketDepthEvent((marketDepthData) => {
//         console.log('marketDepthData', marketDepthData);
//     });

//     //"openInterestEvent" event listener
//     xtsMarketDataWS.onOpenInterestEvent((openInterestData) => {
//         console.log('onOpenInterestEvent ', openInterestData);
//     });

//     //"indexDataEvent" event listener
//     xtsMarketDataWS.onIndexDataEvent((indexData) => {
//         console.log('onIndexDataEvent ', indexData);
//     });

//     //"marketDepth100Event" event listener
//     xtsMarketDataWS.onMarketDepth100Event((marketDepth100Data) => {
//         console.log('onMarketDepth100Event ', marketDepth100Data);
//     });

//     // //"instrumentPropertyChangeEvent" event listener
//     xtsMarketDataWS.onInstrumentPropertyChangeEvent((propertyChangeData) => {
//         console.log(propertyChangeData);
//     });

//     //"candleDataEvent" event listener
//     xtsMarketDataWS.onCandleDataEvent((candleData) => {
//         console.log(candleData);
//     });

//     // //"logout" event listener
//     xtsMarketDataWS.onLogout((logoutData) => {
//         console.log(logoutData);
//     });
// };
