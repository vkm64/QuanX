let obj = JSON.parse($response.body);
obj= {
  "request_date_ms" : 1665523482816,
  "request_date" : "2022-10-11T21:24:42Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-10-11T21:19:21Z",
    "original_application_version" : "19",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "LifeTime_Deal" : {
        "is_sandbox" : false,
        "period_type" : "active",
        "billing_issues_detected_at" : null,
        "unsubscribe_detected_at" : null,
        "expires_date" : "2099-12-01T03:51:32Z",
        "original_purchase_date" : "2022-10-11T21:18:59Z",
        "purchase_date" : "2022-10-11T21:18:59Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "expires_date" : "2099-12-01T03:51:32Z",
        "product_identifier" : "LifeTime_Deal",
        "purchase_date" : "2022-10-11T21:18:59Z"
      }
    },
   "original_purchase_date" : null,
    "original_app_user_id" : "XAMefyrah5UmeDQiHBUU5oPbbdT2",
    "last_seen" : "2022-10-11T21:19:21Z"
  }
};
$done({body: JSON.stringify(obj)});
