var obj = JSON.parse($response.body);
obj =

{
  "purchaseStatus": "Successful",
  "subscriptionStatus": {
    "expire": "2099-09-22T21:59:39Z",
    "start": "2022-09-19T21:59:39Z",
    "paymentProvider": "Apple",
    "isExpired": false,
    "isGracePeriodExpired": false,
    "subscriptionStatus": "RenewalStatusOff",
    "inAppPurchaseAllowed": true,
    "product": {
      "id": "renewable.premiumgold.annual",
      "sku": "renewable.premiumgold.annual",
      "contentType": "subscription",
      "productType": "GoldYearly",
      "isFreeTrial": true
    },
    "tier": {
      "id": "gold",
      "feature": [{
        "id": "spam_blocking",
        "rank": -2147483648,
        "status": "Included"
      }, {
        "id": "caller_id",
        "rank": -2147483648,
        "status": "Included"
      }, {
        "id": "no_ads",
        "rank": 1,
        "status": "Included"
      }, {
        "id": "call_assistant",
        "rank": 2,
        "status": "Included"
      }, {
        "id": "extended_spam_blocking",
        "rank": 3,
        "status": "Included"
      }, {
        "id": "who_viewed_my_profile",
        "rank": 4,
        "status": "Included"
      }, {
        "id": "incognito_mode",
        "rank": 6,
        "status": "Included"
      }, {
        "id": "premium_badge",
        "rank": 10,
        "status": "Included"
      }, {
        "id": "premium_support",
        "rank": 11,
        "status": "Included"
      }, {
        "id": "gold_caller_id",
        "rank": 13,
        "status": "Included"
      }]
    }
  }
}
$done({body: JSON.stringify(obj)});