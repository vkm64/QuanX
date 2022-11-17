var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-08-06T01:33:52Z",
  "request_date_ms": 1659749632082,
  "subscriber": {
    "entitlements": {
      "Airmail Premium": {
        "expires_date": "2099-01-21T02:58:03Z",
        "grace_period_expires_date": null,
        "product_identifier": "Airmail_iOS_Yearly",
        "purchase_date": "2021-01-18T02:58:03Z"
      }
    },
    "first_seen": "2021-01-18T02:56:50Z",
    "last_seen": "2022-08-06T01:29:58Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "DED4E3ED-D165-458F-9AA7-73496A151259",
    "original_application_version": "632",
    "original_purchase_date": "2021-01-18T02:56:34Z",
    "other_purchases": {},
    "subscriptions": {
      "Airmail_iOS_Yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-01-21T02:58:03Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2021-01-18T02:58:04Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2021-01-18T02:58:03Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2021-01-19T00:21:07Z"
      }
    }
  }
}
$done({body: JSON.stringify(obj)});
