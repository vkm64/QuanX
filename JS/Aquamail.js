var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-29T22:14:14Z",
  "request_date_ms": 1667081654430,
  "subscriber": {
    "entitlements": {
      "premium": {
        "expires_date": "2099-02-18T21:43:09Z",
        "grace_period_expires_date": null,
        "product_identifier": "2fa_0499_1y",
        "purchase_date": "2022-02-18T21:43:09Z"
      }
    },
    "first_seen": "2021-02-18T09:36:23Z",
    "last_seen": "2022-10-29T22:14:13Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:bbd6cb70772149d1988788429a0d147d",
    "original_application_version": "955",
    "original_purchase_date": "2021-02-18T09:36:16Z",
    "other_purchases": {},
    "subscriptions": {
      "2fa_0499_1y": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-02-18T21:43:09Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2021-02-18T09:44:51Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-02-18T21:43:09Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});