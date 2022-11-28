var obj = JSON.parse($response.body);

obj = 

{
  "data": {
    "processAppleReceipt": {
      "__typename": "SubscriptionResult",
      "error": 0,
      "subscription": {
        "__typename": "AppStoreSubscription",
        "status": "active",
        "originalPurchaseDate": "2022-10-31T23:35:29.000Z",
        "originalTransactionId": "300001262346134",
        "expirationDate": "2099-12-31T23:35:25.000Z",
        "productId": "com.gingerlabs.Notability.premium_subscription",
        "tier": "premium",
        "refundedDate": null,
        "refundedReason": null,
        "isInBillingRetryPeriod": false,
        "gracePeriodExpiresAt": null,
        "expirationIntent": null,
        "overDeviceLimit": false,
        "user": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});
