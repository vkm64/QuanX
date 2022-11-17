var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-05T03:14:21Z",
  "request_date_ms": 1664939661009,
  "subscriber": {
    "entitlements": {
      "pp.uaf.premiumaccess": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "com.nlokireddy.pdfphotos.unlockAllFeatures",
        "purchase_date": "2022-10-05T03:13:07Z"
      }
    },
    "first_seen": "2022-10-02T12:35:38Z",
    "last_seen": "2022-10-04T23:04:43Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {
      "com.nlokireddy.pdfphotos.unlockAllFeatures": [{
        "id": "882b8a62b2",
        "is_sandbox": false,
        "original_purchase_date": "2022-10-05T03:13:07Z",
        "purchase_date": "2022-10-05T03:13:07Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "$RCAnonymousID:dd6d20d5146a4873b9c578e6d9e91a5e",
    "original_application_version": "5",
    "original_purchase_date": "2022-02-15T23:07:25Z",
    "other_purchases": {
      "com.nlokireddy.pdfphotos.unlockAllFeatures": {
        "purchase_date": "2022-10-05T03:13:07Z"
      }
    },
    "subscriptions": {
      "pp_uaf_1_month_3t": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-10-06T01:09:41Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-10-03T01:09:42Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-10-03T01:09:41Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-10-03T05:03:29Z"
      }
    }
  }
}
$done({body: JSON.stringify(obj)});
