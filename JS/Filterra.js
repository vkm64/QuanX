var objc = JSON.parse($response.body);

    objc = 
{
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 951704333,
    "receipt_creation_date" : "2022-10-21 11:08:33 Etc/GMT",
    "bundle_id" : "com.filterra.editor",
    "original_purchase_date" : "2021-12-19 14:47:24 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1639925490000",
        "transaction_id" : "20000961765202",
        "is_trial_period" : "false",
        "original_transaction_id" : "20000961765202",
        "purchase_date" : "2021-12-19 14:51:30 Etc/GMT",
        "product_id" : "com.filterra.ssonetimepurchase",
        "original_purchase_date_pst" : "2021-12-19 06:51:30 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1639925490000",
        "purchase_date_pst" : "2021-12-19 06:51:30 America/Los_Angeles",
        "original_purchase_date" : "2021-12-19 14:51:30 Etc/GMT"
      }
    ],
    "adam_id" : 951704333,
    "receipt_creation_date_pst" : "2022-10-21 04:08:33 America/Los_Angeles",
    "request_date" : "2022-10-21 11:09:08 Etc/GMT",
    "request_date_pst" : "2022-10-21 04:09:08 America/Los_Angeles",
    "version_external_identifier" : 852701403,
    "request_date_ms" : "1666350548068",
    "original_purchase_date_pst" : "2021-12-19 06:47:24 America/Los_Angeles",
    "application_version" : "3.14.103",
    "original_purchase_date_ms" : "1639925244000",
    "receipt_creation_date_ms" : "1666350513000",
    "original_application_version" : "3.0.107",
    "download_id" : 95042525156520
  },
  "environment" : "Production",
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1639925490000",
      "transaction_id" : "20000961765202",
      "is_trial_period" : "false",
      "original_transaction_id" : "20000961765202",
      "purchase_date" : "2021-12-19 14:51:30 Etc/GMT",
      "product_id" : "com.filterra.ssonetimepurchase",
      "original_purchase_date_pst" : "2021-12-19 06:51:30 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1639925490000",
      "purchase_date_pst" : "2021-12-19 06:51:30 America/Los_Angeles",
      "original_purchase_date" : "2021-12-19 14:51:30 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}

$done({body : JSON.stringify(objc)});
