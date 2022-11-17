var obj = JSON.parse($response.body);

obj =  {
  "subscription_apple" : {
    "subscription_exp" : 1660513268,
    "product_id" : "yt"
  },
  "subscription_google" : null,
  "user_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkZXZpY2VfaWQiOiJCM0IyNjgyQy1BMkUwLTRBQzUtQkJDMy1ERkUzRERFOUJFRTkiLCJleHAiOjE2NjAzNDA0NzYsInN1YnNjcmlwdGlvbiI6eyJzdWJzY3JpcHRpb25fZXhwIjoxNjYwNTEzMjY4LCJjdXN0b21lcl9pZCI6ImlzNzcyMzMxNyIsImluX2FwcF9pZCI6InByb195ZWFyX3Byb21vX2FwcHN0b3JlIiwicHJvZHVjdF9pZCI6Inl0In19.lk0mvMLx18dFFC9JiZ24Rsf51oezx_RnAe-xNUqPvQ3q8ZCoiUes7xKpz-iL_KNSCi-ziFYQfGaWuSHAD20Eeg",
  "user_token_lifetime" : 86400,
  "user" : null
}
$done({body: JSON.stringify(obj)});
