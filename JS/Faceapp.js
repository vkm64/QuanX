var obj = JSON.parse($response.body);

obj = 

{
  "subscription_apple" : {
  "subscription_exp" : 2550721193,
    "product_id" : "m"
}
$done({body: JSON.stringify(obj)});