var obj = JSON.parse($response.body);
obj =

{
  "expire" : "2029-11-29T22:20:45Z",
  "subscriptionStatus" : "RenewalStatusOff",
  "start" : "2022-11-29T21:20:45Z",
  "product" : {
    "productType" : "GoldYearly",
    "id" : "renewable.premiumgold.annual",
    "isFreeTrial" : false,
    "contentType" : "subscription",
    "rank" : 6,
    "sku" : "renewable.premiumgold.annual"
  },
  "isGracePeriodExpired" : false,
  "isExpired" : false,
  "inAppPurchaseAllowed" : true,
  "tier" : {
    "id" : "gold",
    "feature" : [
      {
        "id" : "spam_blocking",
        "status" : "Included",
        "rank" : -2147483648
      },
      {
        "id" : "caller_id",
        "status" : "Included",
        "rank" : -2147483648
      },
      {
        "id" : "no_ads",
        "status" : "Included",
        "rank" : 1
      },
      {
        "id" : "extended_spam_blocking",
        "status" : "Included",
        "rank" : 3
      },
      {
        "id" : "who_viewed_my_profile",
        "status" : "Included",
        "rank" : 5
      },
      {
        "id" : "incognito_mode",
        "status" : "Included",
        "rank" : 7
      },
      {
        "id" : "premium_badge",
        "status" : "Included",
        "rank" : 11
      },
      {
        "id" : "premium_support",
        "status" : "Included",
        "rank" : 12
      },
      {
        "id" : "gold_caller_id",
        "status" : "Included",
        "rank" : 15
      }
    ]
  },
  "paymentProvider" : "Apple"
}
$done({body: JSON.stringify(obj)});
