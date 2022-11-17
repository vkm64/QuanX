let obj = JSON.parse($response.body);

obj = 

{
  "profile" : {
    "is_premium" : true,
    "id" : 2783908,
    "email_verified" : true,
    "_end_of_premium" : 4095873016,
    "end_of_premium" : "2099-10-16  22:30:16",
    "email" : "wdnsk89t2n@privaterelay.appleid.com",
    "token" : "3434d06d99e164710d526136d7783702",
    "can_mint" : true
  },
  "error" : null
}
$done({body: JSON.stringify(obj)});
