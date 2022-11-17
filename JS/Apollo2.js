// var hcsavn = JSON.parse($response.body);

const hcsavn = {
  "products":[
    {"name":"ultra","status":"ACTIVE_AUTORENEW_ON","subscription_type":"LIFETIME"},
    {"name":"pro","status":"ACTIVE_AUTORENEW_ON","subscription_type":"LIFETIME"},
    {"name":"community_icons","status":"ACTIVE_AUTORENEW_ON","subscription_type":"LIFETIME"},
    {"name":"spca","status":"ACTIVE_AUTORENEW_ON","subscription_type":"LIFETIME"}
  ]
}

$done({
  response: {
    status: 200,
    body: JSON.stringify(hcsavn),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
  },
});
// $done({body: JSON.stringify(hcsavn)});