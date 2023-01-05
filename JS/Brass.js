var obj = JSON.parse($response.body);

obj = 
{
  "request_date_ms" : 1672746605724,
  "request_date" : "2023-01-03T11:50:05Z",
  "subscriber" : {
    "last_seen" : "2023-01-02T21:29:46Z"
    "first_seen" : "2023-01-02T21:29:46Z",
    "original_application_version" : "123",
    "other_purchases" : {},
    "management_url" : null,
    "subscriptions" : {
        "brass.pro.annual": {
    "unsubscribe_detected_at": null,               "expires_date":"2099-09-28T09:00:00Z",
    "is_sandbox": false,
    "refunded_at": null,
    "auto_resume_date": null,                      "grace_period_expires_date": null,
    "period_type":"premium",                       "purchase_date":"2023-01-03T11:50:05Z",        "billing_issues_detected_at": null,            "ownership_type":"PURCHASED",
    "store": "app_store",                    "original_purchase_date":"2021-01-31T18:15:46Z",
         }
    },
    "entitlements" : {
         "pro"
        {  
         "expires_date":"2999-09-28T09:00:00Z"                  "purchase_date":"2023-01-03T11:50:05Z",
                    "product_identifier"Brass_Premium
                    "grace_period_expires_date": null
         }
    },
     "original_purchase_date" : "2021-01-31T18:15:46Z",
     "original_app_user_id" : "$RCAnonymousID:3qyjMHTctLWkIH6NCMwO3prhfts1",
     "non_subscriptions": {}

      }
    }
  }
};

$done({body : JSON.stringify(objc)});