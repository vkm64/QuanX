var obj = JSON.parse($response.body);

obj = 

{
  "success":true,
  "data":{
    "timestamp":1665355521,
    "uid":"QON_63627ff0de5a46be8b8e463f1ca8c26a",
    "products":[{
    "id":"weekly",
    "store_id":"com.tlabs.mobiledoctor.weekly",
    "type":1,
    "duration":0
   },{
    "id":"monthly",
    "store_id":"com.tlabs.mobiledoctor.monthly",
    "type":1,
    "duration":1
   },{
    "id":"lifetime",
    "store_id":"com.tlabs.mobiledoctor.lifetime",
    "type":2,
    "duration":null
   }],
    "user_products":[{
    "id":"lifetime",
    "store_id":"com.tlabs.mobiledoctor.lifetime", 
    "type":2,
    "duration":null
  }],
   "permissions": [{
      "id": "premium",
      "active": 1,
      "renew_state": 2,
      "associated_product": "lifetime",
      "started_timestamp": 1661394811,
      "expiration_timestamp": 4093911028,
      "current_period_type": "regular",
      "source": "appstore"
  }],
   "offerings": [],
   "apple_extra": {
   "original_application_version":"5"
 }, 
  "products_permissions": {
     "weekly":["premium"],
     "monthly":["premium"],
     "lifetime":["premium"]
    }
  }
}
$done({body: JSON.stringify(obj)});