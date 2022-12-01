let obj = JSON.parse($response.body);

obj = 

{
  "app_id" : "de74abc4-e524-44ff-a161-37e2f8de4384",
  "net_type" : 1,
  "ios_bundle" : "com.abbyy.bcrfree",
  "timezone_id" : "Europe/Madrid",
  "tags" : {
    "bcr.ItemsInCardHolder" : 0,
    "com.abbyy.bcrfree" : "1",
    "IsPermitAds" : "0",
    "com.abbyy.finescanner-pro" : "0",
    "com.abbyy.finescanner" : "0",
    "bcr.MyCardAdded" : "1",
    "bcr.IsPromocodeActive" : "0",
    "bcr.ABBYYCloudSyncOn" : "",
    "bcr.IsPremium" : "1",
    "DeviceID" : "5918a4d9-6371-4544-b25d-4b8aa22916e2",
    "IsTestVersion" : "0",
    "com.abbyy.textgrabber" : "1",
    "com.abbyy.bcr2" : "1",
    "AnalyticsEnabled" : "1"
  },
  "device_type" : 0,
  "sdk_type" : "030700",
  "sdk" : "030700",
  "identifier" : "8c9a9c09e36d6c494856d2b8321883e8617ec71d592b08b8b1ec3ec99774d98a",
  "language" : "es-ES",
  "device_os" : "16.1.1",
  "game_version" : "9.8.4",
  "timezone" : 3600,
  "notification_types" : 0,
  "device_model" : "iPhone13,4",
  "carrier" : "Vodafone"
}
$done({body: JSON.stringify(obj)});
