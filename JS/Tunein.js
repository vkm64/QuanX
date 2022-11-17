var obj = JSON.parse($response.body);

obj =  

{
  "request_date_ms" : 1665030567160,
  "request_date" : "2022-10-06T04:29:27Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-07-31T02:15:52Z",
    "original_application_version" : "577",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_C" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2022-06-17T03:39:35Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2022-06-12T03:45:35Z",
        "original_purchase_date" : "2022-06-10T03:39:36Z",
        "original_transaction_id" : "300001137121918",
        "purchase_date" : "2022-06-10T03:39:35Z",
        "store" : "app_store"
      },
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_7_DAY_9.99_versionA" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2022-08-08T06:08:50Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2022-08-04T22:52:09Z",
        "original_purchase_date" : "2022-08-01T06:08:51Z",
        "original_transaction_id" : "300001181864960",
        "purchase_date" : "2022-08-01T06:08:50Z",
        "store" : "app_store"
      },
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_A" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "normal",
        "expires_date" : "2099-11-06T04:13:52Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2021-06-11T21:43:21Z",
        "original_transaction_id" : "300000854605304",
        "purchase_date" : "2022-10-06T04:13:52Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {

    },
    "original_purchase_date" : "2015-07-02T17:31:46Z",
    "original_app_user_id" : "D665A20B-722F-43F8-A5A7-BCE0A3F81A5E",
    "last_seen" : "2022-10-06T03:08:58Z"
  }
}
$done({body: JSON.stringify(obj)});
