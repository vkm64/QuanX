var obj = JSON.parse($response.body);

obj = 

{
  "status": 21007
}

$done({body: JSON.stringify(obj)});
