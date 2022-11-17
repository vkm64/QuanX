var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-08-03T18:36:41Z",
  "request_date_ms": 1659551801145,
  "subscriber": {
    "entitlements": {
      "pro001": {
        "expires_date": "2024-07-30T09:30:16Z",
        "grace_period_expires_date": null,
        "product_identifier": "yearly001",
        "purchase_date": "2022-07-27T09:30:16Z"
      }
    },
    "first_seen": "2022-07-27T09:22:33Z",
    "last_seen": "2022-08-03T16:36:36Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:3928e5e1702547bba509e87fb16ef21a",
    "original_application_version": "135",
    "original_purchase_date": "2022-07-27T07:30:07Z",
    "other_purchases": {},
    "subscriptions": {
      "yearly001": {
        "billing_issues_detected_at": null,
        "expires_date": "2024-07-30T09:30:16Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-07-27T09:30:17Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-07-27T09:30:16Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-07-28T03:37:02Z"
      }
    }
  }
}
$done({body: JSON.stringify(obj)});
