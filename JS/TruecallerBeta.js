var obj = JSON.parse($response.body);
obj =

{
  "expire" : "2029-10-29T22:20:45Z",
  "subscriptionStatus" : "RenewalStatusOff",
  "start" : "2022-10-29T21:20:45Z",
  "product" : {
    "productType" : "GoldYearly",
    "id" : "renewable.premiumgold.annual",
    "isFreeTrial" : false,
    "contentType" : "subscription",
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
        "id" : "call_assistant",
        "status" : "Excluded",
        "rank" : 2
      },
      {
        "id" : "extended_spam_blocking",
        "status" : "Included",
        "rank" : 3
      },
      {
        "id" : "who_viewed_my_profile",
        "status" : "Included",
        "rank" : 4
      },
      {
        "id" : "incognito_mode",
        "status" : "Included",
        "rank" : 6
      },
      {
        "id" : "premium_badge",
        "status" : "Included",
        "rank" : 10
      },
      {
        "id" : "premium_support",
        "status" : "Included",
        "rank" : 11
      },
      {
        "id" : "family_sharing",
        "status" : "Excluded",
        "rank" : 13
      },
      {
        "id" : "gold_caller_id",
        "status" : "Included",
        "rank" : 14
      }
    ]
  },
  "paymentProvider" : "Apple"
}
$done({body: JSON.stringify(obj)});
