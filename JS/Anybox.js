/******************************

脚本功能：AAnybox -跨平台书签管理+解锁订阅
下载地址：https://is.gd/DylUak
软件版本：1.11.1
脚本作者：彭于晏💞
更新时间：2022-10-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/AAnybox.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0x1f35=['\x66\x4d\x4f\x33\x77\x36\x4d\x68\x77\x70\x77\x57\x77\x35\x52\x45\x77\x35\x58\x43\x71\x38\x4f\x5a\x44\x38\x4f\x66\x77\x6f\x35\x6b\x44\x4d\x4b\x77\x4e\x38\x4f\x76\x53\x77\x4c\x43\x6f\x4d\x4b\x63','\x50\x4d\x4f\x57\x77\x71\x31\x49\x64\x38\x4f\x4b\x77\x71\x31\x69\x77\x71\x7a\x43\x72\x77\x48\x43\x76\x42\x38\x30\x5a\x6a\x46\x48\x77\x37\x35\x56\x54\x51\x3d\x3d','\x66\x63\x4b\x53\x77\x36\x30\x54\x4e\x4d\x4b\x63\x77\x37\x51\x70\x77\x36\x51\x3d','\x42\x38\x4f\x50\x53\x33\x33\x43\x73\x4d\x4f\x56\x77\x70\x76\x43\x71\x6a\x63\x61\x56\x69\x35\x6d\x44\x77\x7a\x43\x6e\x73\x4f\x4c\x58\x4d\x4f\x4c\x77\x71\x30\x3d','\x77\x71\x50\x44\x6d\x6d\x5a\x50\x65\x4d\x4f\x78\x77\x35\x51\x61\x77\x35\x44\x44\x69\x63\x4f\x74\x77\x70\x35\x78\x77\x72\x6e\x44\x76\x47\x49\x79\x4d\x4d\x4b\x59\x58\x67\x3d\x3d','\x77\x37\x2f\x44\x72\x55\x73\x43\x45\x77\x3d\x3d','\x48\x45\x50\x43\x68\x6a\x41\x77\x77\x35\x4d\x6a\x77\x37\x6a\x43\x69\x58\x6a\x44\x71\x63\x4b\x4a\x48\x73\x4b\x4f\x77\x72\x2f\x44\x6d\x73\x4b\x4c\x65\x6a\x7a\x43\x76\x77\x3d\x3d','\x77\x70\x6b\x6a\x77\x36\x56\x33\x77\x70\x7a\x43\x6c\x43\x4e\x51\x77\x34\x6f\x41\x77\x34\x34\x3d','\x58\x42\x62\x44\x67\x48\x64\x76\x77\x6f\x77\x7a\x77\x37\x72\x43\x6d\x6d\x7a\x43\x6c\x73\x4b\x5a\x58\x63\x4f\x63\x77\x36\x4c\x43\x6e\x4d\x4b\x52\x59\x69\x72\x44\x68\x38\x4f\x46','\x77\x35\x31\x7a\x77\x71\x48\x44\x6a\x38\x4b\x37\x77\x6f\x46\x65\x77\x71\x41\x59\x42\x4d\x4b\x39\x77\x72\x34\x4f\x77\x35\x58\x43\x70\x4d\x4b\x65\x77\x35\x67\x73\x47\x38\x4b\x72','\x77\x37\x30\x42\x4b\x38\x4f\x67\x77\x70\x4a\x35\x55\x46\x54\x44\x67\x67\x3d\x3d','\x66\x44\x68\x57\x77\x72\x44\x43\x6e\x4d\x4b\x79\x49\x63\x4b\x2b\x64\x38\x4b\x69\x5a\x77\x58\x43\x6c\x54\x6c\x6f\x77\x35\x48\x43\x73\x67\x58\x43\x76\x4d\x4f\x35','\x77\x37\x48\x43\x71\x4d\x4f\x36\x46\x67\x3d\x3d','\x77\x70\x73\x69\x77\x36\x56\x78\x77\x6f\x6e\x43\x69\x67\x3d\x3d','\x4b\x48\x6f\x52\x63\x55\x41\x78\x77\x37\x76\x43\x76\x4d\x4f\x77\x77\x71\x58\x43\x6e\x38\x4f\x6f\x4a\x33\x44\x44\x73\x63\x4b\x70\x62\x33\x66\x43\x6d\x6e\x59\x3d','\x77\x72\x58\x44\x73\x6c\x39\x76\x43\x30\x58\x44\x74\x47\x62\x44\x72\x51\x3d\x3d','\x77\x71\x62\x44\x71\x4d\x4b\x44\x4e\x63\x4f\x32\x43\x4d\x4f\x30\x77\x71\x41\x7a\x52\x73\x4b\x58\x77\x70\x66\x43\x74\x38\x4f\x4e\x43\x6c\x64\x72\x77\x71\x44\x44\x76\x67\x6a\x43\x72\x6e\x76\x43\x73\x6c\x51\x3d','\x77\x71\x64\x74\x46\x4d\x4b\x36\x64\x51\x3d\x3d','\x77\x34\x37\x44\x68\x38\x4f\x74\x77\x71\x51\x3d','\x77\x70\x37\x44\x73\x4d\x4f\x64\x77\x70\x45\x51\x63\x38\x4b\x6b\x77\x72\x63\x4d\x53\x73\x4f\x45\x77\x70\x44\x44\x71\x63\x4b\x4b\x77\x34\x50\x44\x6b\x69\x39\x64\x59\x41\x3d\x3d','\x4c\x57\x63\x4a\x77\x37\x4c\x44\x6d\x4d\x4f\x76\x64\x41\x3d\x3d','\x5a\x73\x4b\x53\x77\x36\x73\x4b\x4b\x63\x4f\x42\x77\x72\x4a\x67\x77\x37\x7a\x44\x71\x79\x58\x44\x76\x77\x5a\x76\x4a\x48\x63\x52\x77\x71\x70\x49\x64\x4d\x4b\x65\x77\x36\x50\x44\x70\x7a\x48\x44\x74\x73\x4f\x74\x77\x72\x58\x43\x67\x58\x66\x43\x67\x56\x62\x43\x6c\x6e\x6a\x43\x74\x30\x30\x35\x77\x6f\x62\x43\x75\x73\x4b\x54\x77\x37\x67\x66\x77\x37\x4c\x44\x6b\x41\x55\x3d'];(function(_0x215b4c,_0x1f3576){var _0x5391b0=function(_0x4277ce){while(--_0x4277ce){_0x215b4c['push'](_0x215b4c['shift']());}};var _0x3f2e34=function(){var _0x1ebef8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x457d6a,_0x16caa1,_0x17ee1c,_0x5c077e){_0x5c077e=_0x5c077e||{};var _0x1eaca8=_0x16caa1+'='+_0x17ee1c;var _0x353230=0x0;for(var _0x4f7639=0x0,_0x1b7b59=_0x457d6a['length'];_0x4f7639<_0x1b7b59;_0x4f7639++){var _0x48ae8d=_0x457d6a[_0x4f7639];_0x1eaca8+=';\x20'+_0x48ae8d;var _0xe2ae09=_0x457d6a[_0x48ae8d];_0x457d6a['push'](_0xe2ae09);_0x1b7b59=_0x457d6a['length'];if(_0xe2ae09!==!![]){_0x1eaca8+='='+_0xe2ae09;}}_0x5c077e['cookie']=_0x1eaca8;},'removeCookie':function(){return'dev';},'getCookie':function(_0x655ef9,_0x1edc4c){_0x655ef9=_0x655ef9||function(_0x336025){return _0x336025;};var _0x302955=_0x655ef9(new RegExp('(?:^|;\x20)'+_0x1edc4c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x278754=function(_0x1cbfa3,_0x17ec80){_0x1cbfa3(++_0x17ec80);};_0x278754(_0x5391b0,_0x1f3576);return _0x302955?decodeURIComponent(_0x302955[0x1]):undefined;}};var _0x2588f7=function(){var _0x375df7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x375df7['test'](_0x1ebef8['removeCookie']['toString']());};_0x1ebef8['updateCookie']=_0x2588f7;var _0x48585d='';var _0x4705a2=_0x1ebef8['updateCookie']();if(!_0x4705a2){_0x1ebef8['setCookie'](['*'],'counter',0x1);}else if(_0x4705a2){_0x48585d=_0x1ebef8['getCookie'](null,'counter');}else{_0x1ebef8['removeCookie']();}};_0x3f2e34();}(_0x1f35,0xf0));var _0x5391=function(_0x215b4c,_0x1f3576){_0x215b4c=_0x215b4c-0x0;var _0x5391b0=_0x1f35[_0x215b4c];if(_0x5391['VCsECA']===undefined){(function(){var _0x1ebef8=function(){var _0x4705a2;try{_0x4705a2=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x457d6a){_0x4705a2=window;}return _0x4705a2;};var _0x2588f7=_0x1ebef8();var _0x48585d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2588f7['atob']||(_0x2588f7['atob']=function(_0x16caa1){var _0x17ee1c=String(_0x16caa1)['replace'](/=+$/,'');var _0x5c077e='';for(var _0x1eaca8=0x0,_0x353230,_0x4f7639,_0x1b7b59=0x0;_0x4f7639=_0x17ee1c['charAt'](_0x1b7b59++);~_0x4f7639&&(_0x353230=_0x1eaca8%0x4?_0x353230*0x40+_0x4f7639:_0x4f7639,_0x1eaca8++%0x4)?_0x5c077e+=String['fromCharCode'](0xff&_0x353230>>(-0x2*_0x1eaca8&0x6)):0x0){_0x4f7639=_0x48585d['indexOf'](_0x4f7639);}return _0x5c077e;});}());var _0x4277ce=function(_0x48ae8d,_0xe2ae09){var _0x655ef9=[],_0x1edc4c=0x0,_0x302955,_0x278754='',_0x336025='';_0x48ae8d=atob(_0x48ae8d);for(var _0x17ec80=0x0,_0x375df7=_0x48ae8d['length'];_0x17ec80<_0x375df7;_0x17ec80++){_0x336025+='%'+('00'+_0x48ae8d['charCodeAt'](_0x17ec80)['toString'](0x10))['slice'](-0x2);}_0x48ae8d=decodeURIComponent(_0x336025);var _0x1cbfa3;for(_0x1cbfa3=0x0;_0x1cbfa3<0x100;_0x1cbfa3++){_0x655ef9[_0x1cbfa3]=_0x1cbfa3;}for(_0x1cbfa3=0x0;_0x1cbfa3<0x100;_0x1cbfa3++){_0x1edc4c=(_0x1edc4c+_0x655ef9[_0x1cbfa3]+_0xe2ae09['charCodeAt'](_0x1cbfa3%_0xe2ae09['length']))%0x100;_0x302955=_0x655ef9[_0x1cbfa3];_0x655ef9[_0x1cbfa3]=_0x655ef9[_0x1edc4c];_0x655ef9[_0x1edc4c]=_0x302955;}_0x1cbfa3=0x0;_0x1edc4c=0x0;for(var _0x5ee9e1=0x0;_0x5ee9e1<_0x48ae8d['length'];_0x5ee9e1++){_0x1cbfa3=(_0x1cbfa3+0x1)%0x100;_0x1edc4c=(_0x1edc4c+_0x655ef9[_0x1cbfa3])%0x100;_0x302955=_0x655ef9[_0x1cbfa3];_0x655ef9[_0x1cbfa3]=_0x655ef9[_0x1edc4c];_0x655ef9[_0x1edc4c]=_0x302955;_0x278754+=String['fromCharCode'](_0x48ae8d['charCodeAt'](_0x5ee9e1)^_0x655ef9[(_0x655ef9[_0x1cbfa3]+_0x655ef9[_0x1edc4c])%0x100]);}return _0x278754;};_0x5391['SoVbKl']=_0x4277ce;_0x5391['BNDJmy']={};_0x5391['VCsECA']=!![];}var _0x3f2e34=_0x5391['BNDJmy'][_0x215b4c];if(_0x3f2e34===undefined){if(_0x5391['JsjbCy']===undefined){var _0x3f6d63=function(_0x14791a){this['qnAqhc']=_0x14791a;this['VEZUoU']=[0x1,0x0,0x0];this['kItwmO']=function(){return'newState';};this['wfxWFk']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['EiAWiQ']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3f6d63['prototype']['KBLSLC']=function(){var _0x3ded38=new RegExp(this['wfxWFk']+this['EiAWiQ']);var _0x45bdf6=_0x3ded38['test'](this['kItwmO']['toString']())?--this['VEZUoU'][0x1]:--this['VEZUoU'][0x0];return this['PXrBFu'](_0x45bdf6);};_0x3f6d63['prototype']['PXrBFu']=function(_0x45b280){if(!Boolean(~_0x45b280)){return _0x45b280;}return this['txRdvO'](this['qnAqhc']);};_0x3f6d63['prototype']['txRdvO']=function(_0x1aa301){for(var _0x574e2c=0x0,_0x3b1c7e=this['VEZUoU']['length'];_0x574e2c<_0x3b1c7e;_0x574e2c++){this['VEZUoU']['push'](Math['round'](Math['random']()));_0x3b1c7e=this['VEZUoU']['length'];}return _0x1aa301(this['VEZUoU'][0x0]);};new _0x3f6d63(_0x5391)['KBLSLC']();_0x5391['JsjbCy']=!![];}_0x5391b0=_0x5391['SoVbKl'](_0x5391b0,_0x1f3576);_0x5391['BNDJmy'][_0x215b4c]=_0x5391b0;}else{_0x5391b0=_0x3f2e34;}return _0x5391b0;};var _0x1a4d0f=function(){var _0x146c0c=!![];return function(_0x137c2c,_0x5e0226){var _0x183c20=_0x146c0c?function(){if(_0x5e0226){var _0x4d8148=_0x5e0226[_0x5391('\x30\x78\x31\x33','\x70\x54\x51\x40')](_0x137c2c,arguments);_0x5e0226=null;return _0x4d8148;}}:function(){};_0x146c0c=![];return _0x183c20;};}();var _0x22eab6=_0x1a4d0f(this,function(){var _0x595edb=function(){var _0x180176=_0x595edb[_0x5391('\x30\x78\x39','\x78\x37\x70\x40')](_0x5391('\x30\x78\x61','\x33\x68\x44\x33'))()[_0x5391('\x30\x78\x30','\x31\x52\x49\x35')](_0x5391('\x30\x78\x31\x32','\x75\x61\x73\x2a'));return!_0x180176[_0x5391('\x30\x78\x31\x34','\x52\x78\x62\x52')](_0x22eab6);};return _0x595edb();});_0x22eab6();var _0x43d2fe=JSON[_0x5391('\x30\x78\x37','\x66\x4b\x65\x44')]($response[_0x5391('\x30\x78\x65','\x6a\x41\x56\x32')]);_0x43d2fe={'\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65\x5f\x6d\x73':0x183d578b5ae,'\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65':_0x5391('\x30\x78\x64','\x31\x52\x49\x35'),'\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72':{'\x6e\x6f\x6e\x5f\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':{},'\x66\x69\x72\x73\x74\x5f\x73\x65\x65\x6e':_0x5391('\x30\x78\x38','\x33\x68\x44\x33'),'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x5f\x76\x65\x72\x73\x69\x6f\x6e':'\x34\x37','\x6f\x74\x68\x65\x72\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x73':{},'\x6d\x61\x6e\x61\x67\x65\x6d\x65\x6e\x74\x5f\x75\x72\x6c':_0x5391('\x30\x78\x31','\x7a\x55\x6f\x39'),'\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':{'\x63\x63\x2e\x61\x6e\x79\x62\x6f\x78\x2e\x41\x6e\x79\x62\x6f\x78\x2e\x61\x6e\x6e\x75\x61\x6c':{'\x69\x73\x5f\x73\x61\x6e\x64\x62\x6f\x78':![],'\x6f\x77\x6e\x65\x72\x73\x68\x69\x70\x5f\x74\x79\x70\x65':_0x5391('\x30\x78\x63','\x57\x48\x36\x76'),'\x62\x69\x6c\x6c\x69\x6e\x67\x5f\x69\x73\x73\x75\x65\x73\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null,'\x70\x65\x72\x69\x6f\x64\x5f\x74\x79\x70\x65':_0x5391('\x30\x78\x66','\x78\x37\x70\x40'),'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':_0x5391('\x30\x78\x31\x30','\x23\x37\x26\x5b'),'\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x75\x6e\x73\x75\x62\x73\x63\x72\x69\x62\x65\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null,'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':'\x32\x30\x32\x32\x2d\x31\x30\x2d\x31\x34\x54\x30\x37\x3a\x34\x39\x3a\x34\x35\x5a','\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x5391('\x30\x78\x36','\x68\x26\x51\x5d'),'\x73\x74\x6f\x72\x65':_0x5391('\x30\x78\x31\x31','\x61\x61\x36\x21')}},'\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x73':{'\x70\x72\x6f':{'\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x5391('\x30\x78\x62','\x77\x38\x41\x76'),'\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72':_0x5391('\x30\x78\x32','\x6c\x71\x79\x70'),'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':_0x5391('\x30\x78\x35','\x73\x34\x28\x33')}},'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x5391('\x30\x78\x33','\x7a\x55\x6f\x39'),'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x5f\x75\x73\x65\x72\x5f\x69\x64':_0x5391('\x30\x78\x31\x35','\x52\x78\x62\x52'),'\x6c\x61\x73\x74\x5f\x73\x65\x65\x6e':'\x32\x30\x32\x32\x2d\x31\x30\x2d\x31\x34\x54\x30\x37\x3a\x34\x35\x3a\x33\x36\x5a'}};$done({'\x62\x6f\x64\x79':JSON[_0x5391('\x30\x78\x34','\x7a\x55\x6f\x39')](_0x43d2fe)});