var obj = JSON.parse($response.body);

obj =  

{
  "code" : 0,
  "data" : {
    "inApp" : [

    ],
    "latestReceiptInfo" : [
      {
        "productId" : "com.commsource.vcus.subscription.1month.newuser",
        "quantity" : 1,
        "promotionalOfferId" : "",
        "purchaseDateMs" : "1662594991000",
        "autoRenewStatus" : true,
        "productType" : "",
        "originalTransactionId" : "300001215228769",
        "expiresDateMs" : "4102444775000",
        "transactionId" : "300001215228769",
        "offerCodeRefName" : "",
        "isTrialPeriod" : true,
        "gracePeriodExpiresDateMs" : "",
        "isInIntroOfferPeriod" : false,
        "originalPurchaseDateMs" : "1662594992000",
        "inAppOwnershipType" : "PURCHASED",
        "status" : 1
      },
      {
        "productId" : "com.commsource.vcus.subscription.1year.fullprice",
        "quantity" : 1,
        "promotionalOfferId" : "",
        "purchaseDateMs" : "1661049690000",
        "autoRenewStatus" : false,
        "productType" : "",
        "originalTransactionId" : "300001199550964",
        "expiresDateMs" : "1661654490000",
        "transactionId" : "300001199550964",
        "offerCodeRefName" : "",
        "isTrialPeriod" : true,
        "gracePeriodExpiresDateMs" : "",
        "isInIntroOfferPeriod" : false,
        "originalPurchaseDateMs" : "1661049691000",
        "inAppOwnershipType" : "PURCHASED",
        "status" : 2
      },
      {
        "productId" : "com.commsource.vcus.subscription.1year.full2105",
        "quantity" : 1,
        "promotionalOfferId" : "",
        "purchaseDateMs" : "1659265659000",
        "autoRenewStatus" : true,
        "productType" : "",
        "originalTransactionId" : "300001181126523",
        "expiresDateMs" : "4102444775000",
        "transactionId" : "300001181126523",
        "offerCodeRefName" : "",
        "isTrialPeriod" : true,
        "gracePeriodExpiresDateMs" : "",
        "isInIntroOfferPeriod" : false,
        "originalPurchaseDateMs" : "1659265660000",
        "inAppOwnershipType" : "PURCHASED",
        "status" : 1
      },
      {
        "productId" : "com.commsource.vcus.subscription.1month.new2105",
        "quantity" : 1,
        "promotionalOfferId" : "",
        "purchaseDateMs" : "1659143216000",
        "autoRenewStatus" : true,
        "productType" : "",
        "originalTransactionId" : "300001179893357",
        "expiresDateMs" : "4102444775000",
        "transactionId" : "300001179893357",
        "offerCodeRefName" : "",
        "isTrialPeriod" : true,
        "gracePeriodExpiresDateMs" : "",
        "isInIntroOfferPeriod" : false,
        "originalPurchaseDateMs" : "1659143217000",
        "inAppOwnershipType" : "PURCHASED",
        "status" : 1
      },
      {
        "productId" : "com.commsource.vcus.subscription.yearly.newuser",
        "quantity" : 1,
        "promotionalOfferId" : "",
        "purchaseDateMs" : "1657588014000",
        "autoRenewStatus" : false,
        "productType" : "",
        "originalTransactionId" : "300001164134597",
        "expiresDateMs" : "4102444775000",
        "transactionId" : "300001164134597",
        "offerCodeRefName" : "",
        "isTrialPeriod" : true,
        "gracePeriodExpiresDateMs" : "",
        "isInIntroOfferPeriod" : false,
        "originalPurchaseDateMs" : "1657588015000",
        "inAppOwnershipType" : "PURCHASED",
        "status" : 1
      },
      {
        "productId" : "vcus.subs.month1.func00.lev00.ver1",
        "quantity" : 1,
        "promotionalOfferId" : "",
        "purchaseDateMs" : "1657252220000",
        "autoRenewStatus" : true,
        "productType" : "",
        "originalTransactionId" : "300001160826317",
        "expiresDateMs" : "4102444775000",
        "transactionId" : "300001160826317",
        "offerCodeRefName" : "",
        "isTrialPeriod" : true,
        "gracePeriodExpiresDateMs" : "",
        "isInIntroOfferPeriod" : false,
        "originalPurchaseDateMs" : "1657252221000",
        "inAppOwnershipType" : "PURCHASED",
        "status" : 1
      }
    ]
  },
  "message" : "success",
  "update" : ""
}
$done({body: JSON.stringify(obj)});
