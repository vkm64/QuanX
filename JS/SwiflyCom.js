var obj = JSON.parse($response.body);

obj = 

{
  "success": true,
  "data": {
    "timestamp": 1663995981,
    "uid": "QON_24b6f42f00b9408dbf98a3639242df7c",
    "products": [{
      "id": "premium.1month",
      "store_id": "com.hassantaleb.SwiftCompiler.premium.1month",
      "type": 0,
      "duration": 1
    }, {
      "id": "premium.1year",
      "store_id": "com.hassantaleb.SwiftCompiler.premium.1year",
      "type": 1,
      "duration": 4
    }, {
      "id": "premium.forever",
      "store_id": "com.hassantaleb.SwiftCompiler.premium.forever",
      "type": 2,
      "duration": null
    }],
    "user_products": [{
      "id": "premium.forever",
      "store_id": "com.hassantaleb.SwiftCompiler.premium.forever",
      "type": 2,
      "duration": null
    }],
    "permissions": [{
      "id": "premium",
      "active": 1,
      "renew_state": 2,
      "associated_product": "premium.forever",
      "started_timestamp": 1661394811,
      "expiration_timestamp": 4093911028,
      "current_period_type": "regular",
      "source": "appstore"
    }],
    "offerings": [],
    "apple_extra": {
      "original_application_version": "3"
    },
    "products_permissions": {
      "premium.1month": ["premium"],
      "premium.1year": ["premium"],
      "premium.forever": ["premium"]
    }
  }
}
$done({body: JSON.stringify(obj)});