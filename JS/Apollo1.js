// var hcsavn = JSON.parse($response.body);

const hcsavn = {
  "status_message": "Receipt valid, subscription active, and set to auto-renew.",
  "subscription_type": "lifetime",
  "status_code": 0
}

$done({body: JSON.stringify(hcsavn)});