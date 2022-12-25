var objc = JSON.parse($response.body);

    objc = 
{
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 951704333,
    "receipt_creation_date" : "2022-10-21 11:08:33 Etc/GMT",
    "bundle_id" : "com.filterra.editor",
    "original_purchase_date" : "2019-05-15 02:02:30 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1639925490000",
        "transaction_id" : "20000961765202",
        "is_trial_period" : "false",
        "original_transaction_id" : "20000961765202",
        "purchase_date" : "2021-12-19 14:51:30 Etc/GMT",
        "product_id" : "filterra.clubvipmembership"",
        "original_purchase_date_pst" : "2019-05-14 19:02:30 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1639925490000",
        "purchase_date_pst" : "2021-12-19 06:51:30 America/Los_Angeles",
        "original_purchase_date" : "2021-12-19 14:51:30 Etc/GMT"
      }
    ],
    "adam_id" : 951704333,
    "receipt_creation_date_pst" : "2022-12-25 15:23:49 America/Los_Angeles",
    "request_date" : "2022-10-21 11:09:08 Etc/GMT",
    "request_date_pst" : "2022-10-21 04:09:08 America/Los_Angeles",
    "version_external_identifier" : 852701403,
    "request_date_ms" : "1666350548068",
    "original_purchase_date_pst" : "2019-05-15 02:02:30 America/Los_Angeles",
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
      "purchase_date" : "2022-12-25 15:23:49 Etc/GMT",
      "product_id" : "filterra.clubvipmembership",
      "original_purchase_date_pst" : "2019-05-14 19:02:30 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1639925490000",
      "purchase_date_pst" : "2019-05-15 02:02:30 America/Los_Angeles",
      "original_purchase_date" : "2019-05-15 02:02:30 Etc/GMT"
    }
  ],
  "latest_receipt" : 
"""
}

$done({body : JSON.stringify(objc)});
