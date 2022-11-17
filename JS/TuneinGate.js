var obj = JSON.parse($response.body);

obj =  

{
  "data" : {
    "user" : {
      "userId" : "u143025943",
      "userName" : "elzari",
      "firstName" : "Federico",
      "subscriptions" : {
        "edges" : [
          {
            "node" : {
              "expiresOn" : "2099-11-06T04:13:52Z"
            }
          }
        ]
      },
      "isOnboarded" : true,
      "email" : "el_zari@hotmail.com",
      "isRegistered" : true,
      "lastName" : "Fernandez"
    }
  }
}
$done({body: JSON.stringify(obj)});
