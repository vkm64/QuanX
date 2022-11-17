var obj = JSON.parse($response.body);

obj = 

{
  "result": {
    "activated": true,
    "products": [{
      "productId": "com.campmobile.snow.subscribe.oneyear",
      "startDate":  1665465731000,
      "expireDate": 4092787996000,
      "managed": true,
      "status": "ACTIVE"
    }]
  }
}
$done({body: JSON.stringify(obj)});