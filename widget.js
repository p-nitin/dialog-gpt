const _0x3250cb=_0x1438;function _0x1438(_0x109419,_0x47eb0e){const _0xa6b87=_0xa6b8();return _0x1438=function(_0x14381b,_0x58b74b){_0x14381b=_0x14381b-0x142;let _0x5a74c8=_0xa6b87[_0x14381b];return _0x5a74c8;},_0x1438(_0x109419,_0x47eb0e);}(function(_0x1c2420,_0x244251){const _0x57e9bc=_0x1438,_0x284da3=_0x1c2420();while(!![]){try{const _0x347e29=-parseInt(_0x57e9bc(0x18a))/0x1*(-parseInt(_0x57e9bc(0x1b7))/0x2)+-parseInt(_0x57e9bc(0x161))/0x3*(parseInt(_0x57e9bc(0x1bb))/0x4)+parseInt(_0x57e9bc(0x1a6))/0x5*(parseInt(_0x57e9bc(0x14a))/0x6)+-parseInt(_0x57e9bc(0x1b8))/0x7+parseInt(_0x57e9bc(0x1a1))/0x8*(parseInt(_0x57e9bc(0x163))/0x9)+-parseInt(_0x57e9bc(0x1a9))/0xa+parseInt(_0x57e9bc(0x147))/0xb;if(_0x347e29===_0x244251)break;else _0x284da3['push'](_0x284da3['shift']());}catch(_0x1ade73){_0x284da3['push'](_0x284da3['shift']());}}}(_0xa6b8,0x3f1ad));let name=_0x3250cb(0x197),model='',persona='',openAPIKey='',botinitmessage='',logoImage='images/users/user-5.png';async function startChat(_0x3e12ee){const _0x280801=_0x3250cb;let _0x4744f6=document['createElement'](_0x280801(0x1ab));_0x4744f6[_0x280801(0x1c3)]=_0x280801(0x149),_0x4744f6[_0x280801(0x18b)]='<div\x20class=\x22bounce1\x22></div>'+_0x280801(0x196)+_0x280801(0x173),$(_0x280801(0x164))['append'](_0x4744f6);let _0x39bc7f='';persona==_0x280801(0x1aa)&&(_0x39bc7f=_0x280801(0x186));persona==_0x280801(0x158)&&(_0x39bc7f=_0x280801(0x170));persona=='Life\x20Coach'&&(_0x39bc7f=_0x280801(0x146));persona==_0x280801(0x1b4)&&(_0x39bc7f=_0x280801(0x1c7));console[_0x280801(0x1b9)](_0x39bc7f);let _0xa5e3c6=sessionStorage[_0x280801(0x184)](_0x280801(0x1b3));_0xa5e3c6==null?_0xa5e3c6=[{'role':_0x280801(0x17c),'content':_0x39bc7f}]:_0xa5e3c6=JSON[_0x280801(0x179)](_0xa5e3c6);_0xa5e3c6[_0x280801(0x183)]({'role':_0x280801(0x165),'content':_0x3e12ee});var _0x3da38c=await fetch(_0x280801(0x19a),{'headers':{'Content-Type':_0x280801(0x185),'Authorization':_0x280801(0x14b)+openAPIKey},'method':_0x280801(0x188),'body':JSON[_0x280801(0x1bc)]({'model':model[_0x280801(0x1ae)](),'messages':_0xa5e3c6,'stop':['\x0a\x0a']})});const _0x4cea3e=await _0x3da38c[_0x280801(0x155)]();let _0x13b68e=()=>{let _0x10a6a8=()=>{const _0x18ae25=_0x1438;return Math[_0x18ae25(0x193)]((0x1+Math[_0x18ae25(0x162)]())*0x10000)[_0x18ae25(0x1c4)](0x10)[_0x18ae25(0x1a2)](0x1);};return _0x10a6a8()+_0x10a6a8()+'-'+_0x10a6a8()+'-'+_0x10a6a8()+'-'+_0x10a6a8()+'-'+_0x10a6a8()+_0x10a6a8()+_0x10a6a8();},_0x578ab8=_0x13b68e(),_0x58a7c0=new Date(),_0x5281cb=_0x58a7c0[_0x280801(0x15b)]()+':'+_0x58a7c0[_0x280801(0x1b6)](),_0x5a8ca1=_0x280801(0x1a7)+_0x280801(0x176)+_0x280801(0x195)+logoImage+_0x280801(0x143)+_0x280801(0x1a4)+_0x5281cb+_0x280801(0x157)+'</div>'+_0x280801(0x1c5)+_0x280801(0x156)+_0x280801(0x1a4)+name+'</i>'+'<p\x20id=\x22assistant'+_0x578ab8+'\x22>'+_0x280801(0x192)+'</div>'+_0x280801(0x19b)+_0x280801(0x144);$(_0x280801(0x164))['append'](_0x5a8ca1);let _0x58dc08=_0x4cea3e[_0x280801(0x17e)][0x0][_0x280801(0x1b1)]['content'];document[_0x280801(0x1a3)]('assistant'+_0x578ab8)[_0x280801(0x18b)]=_0x58dc08,_0xa5e3c6[_0x280801(0x183)]({'role':'assistant','content':_0x58dc08}),sessionStorage[_0x280801(0x15e)](_0x280801(0x1b3),JSON['stringify'](_0xa5e3c6)),$(_0x280801(0x152))[_0x280801(0x174)](),scrollToBottom();}function printUserPrompt(_0x30986a){const _0x392269=_0x3250cb;let _0x4559f5=new Date(),_0x38d5d3=_0x4559f5[_0x392269(0x15b)]()+':'+_0x4559f5[_0x392269(0x1b6)](),_0x52d054='user-1.jpg',_0x1376c4=_0x392269(0x16c)+_0x392269(0x176)+_0x392269(0x17f)+_0x52d054+'\x22'+_0x392269(0x166)+_0x392269(0x1a4)+_0x38d5d3+_0x392269(0x157)+'</div>'+'<div\x20class=\x22conversation-text\x22>'+_0x392269(0x156)+'<i>You</i>'+_0x392269(0x14e)+_0x30986a;_0x392269(0x192)+_0x392269(0x19b)+'</div>'+_0x392269(0x14c)+_0x392269(0x1bd)+_0x392269(0x19b)+_0x392269(0x144),$(_0x392269(0x164))[_0x392269(0x148)](_0x1376c4);}function printChatbotPrompt(_0x2c81b4){const _0x51fd17=_0x3250cb;let _0x17c0cf=new Date(),_0x104d46=_0x17c0cf['getHours']()+':'+_0x17c0cf[_0x51fd17(0x1b6)](),_0x89cbc9='<li\x20class=\x22clearfix\x22>'+_0x51fd17(0x176)+_0x51fd17(0x195)+logoImage+_0x51fd17(0x143)+_0x51fd17(0x1a4)+_0x104d46+_0x51fd17(0x157)+_0x51fd17(0x19b)+'<div\x20class=\x22conversation-text\x22>'+'<div\x20class=\x22ctext-wrap\x22>'+_0x51fd17(0x1a4)+name+_0x51fd17(0x157)+_0x51fd17(0x178)+id+'\x22>'+'</p>'+_0x51fd17(0x19b)+_0x51fd17(0x19b)+_0x51fd17(0x144);$(_0x51fd17(0x164))[_0x51fd17(0x148)](_0x89cbc9);}function scrollToBottom(){const _0x22d8fb=_0x3250cb;$(_0x22d8fb(0x172))[_0x22d8fb(0x177)]($(_0x22d8fb(0x172))[0x0]['scrollHeight']);}let isChatbotMinimized=![];function _0xa6b8(){const _0x1722e5=['logoImage:\x20','choices','<img\x20src=\x22images/users/','none','chatContainer','src','push','getItem','application/json','You\x20are\x20a\x20nutritionist,\x20you\x20help\x20the\x20user\x20with\x20their\x20nutritional\x20needs\x20by\x20providing\x20advice\x20on\x20healthy\x20eating\x20habits,\x20recipes,\x20dietary\x20restrictions\x20and\x20recommendations','closebuttoncolor','POST','display','24789QtEYkR','innerHTML','#chat-message','location','images/users/user-5.png','submit','maximizeChatbot','#botIcon','</p>','floor','hide','<img\x20src=\x22','<div\x20class=\x22bounce2\x22></div>','Dialog\x20GPT','postMessage','botinitmessage','https://api.openai.com/v1/chat/completions','</div>','prompt','text','prompt3value:\x20','botinitmessage:\x20','#btnPrompt1','660392MlhsCb','substring','getElementById','<i>','headertextcolor:\x20','44210EhcTIC','<li\x20class=\x22clearfix\x22>','style','4921470weQTKT','Nutritionist','div','btnPrompt2','#bot-avatar','trim','undefined','prompt3displayname','message','ready','bot-message','Travel\x20Advisor','prompt2displayname:\x20','getMinutes','4PIIxgx','831761rWohAd','log','attr','4348JfHJyP','stringify','<button\x20class=\x22btn\x20btn-sm\x20btn-link\x22\x20data-toggle=\x22dropdown\x22\x20aria-expanded=\x22false\x22><i\x20class=\x22mdi\x20mdi-dots-vertical\x20font-16\x22></i></button>','prompt3value','#btnPrompt2','persona','color','#bot-avatar-min','className','toString','<div\x20class=\x22conversation-text\x22>','logo','You\x20are\x20a\x20travel\x20guide,\x20you\x20provide\x20information\x20about\x20tourist\x20attractions,\x20historical\x20sites,\x20culture,\x20and\x20customs\x20of\x20various\x20travel\x20destinations.','null','\x22\x20class=\x22rounded\x22\x20alt=\x22James\x20Z\x22\x20/>','</li>','preventDefault','You\x20are\x20a\x20life\x20coach,\x20you\x20help\x20the\x20user\x20identify\x20and\x20achieve\x20their\x20goals,\x20motivate\x20them,\x20and\x20provide\x20support\x20and\x20encouragement.','10494429xqcxqp','append','chat-spinner','162tJExvx','Bearer\x20','<div\x20class=\x22conversation-actions\x20dropdown\x22>','#bot-header','<p\x20id=\x22user\x22>','prompt1value','botIcon','#botinitmessage','.chat-spinner','background-color','headerColor:\x20','json','<div\x20class=\x22ctext-wrap\x22>','</i>','Career\x20Counsellor','prompt2displayname','#btnPrompt3','getHours','addEventListener','css','setItem','btnPrompt1','#bot-init-image','1257wEEPDY','random','9SZzYHu','.conversation-list','user','\x20class=\x22rounded\x22\x20alt=\x22You\x22\x20/>','#bot-name','block','.mdi-window-close','split','click','<li\x20class=\x22clearfix\x20odd\x22>','<span\x20class=\x22text-danger\x22>Oops!\x20Please\x20set\x20your\x20Open\x20API\x20key.</span>','#343a40','val','You\x20are\x20a\x20career\x20counselor,\x20you\x20help\x20the\x20user\x20with\x20their\x20career-related\x20concerns,\x20such\x20as\x20job\x20searching,\x20resume\x20writing,\x20interview\x20preparation,\x20networking,\x20and\x20career\x20planning.','btnPrompt3','.chat-body','<div\x20class=\x22bounce3\x22></div>','remove','data','<div\x20class=\x22chat-avatar\x22>','scrollTop','<p\x20id=\x22assistant','parse','minimizeChatbot','length','system'];_0xa6b8=function(){return _0x1722e5;};return _0xa6b8();}function minimizeChatbot(){const _0x9402ea=_0x3250cb;let _0x547f4d=document[_0x9402ea(0x1a3)](_0x9402ea(0x181));_0x547f4d[_0x9402ea(0x1a8)][_0x9402ea(0x189)]=_0x9402ea(0x180),botIcon[_0x9402ea(0x1a8)][_0x9402ea(0x189)]=_0x9402ea(0x168),isChatbotMinimized=!![],parent[_0x9402ea(0x198)]({'action':_0x9402ea(0x17a)},'*');}function maximizeChatbot(){const _0x45a290=_0x3250cb;let _0x4e1f44=document[_0x45a290(0x1a3)](_0x45a290(0x181));_0x4e1f44[_0x45a290(0x1a8)][_0x45a290(0x189)]=_0x45a290(0x168),botIcon[_0x45a290(0x1a8)][_0x45a290(0x189)]=_0x45a290(0x180),isChatbotMinimized=![],parent[_0x45a290(0x198)]({'action':_0x45a290(0x190)},'*');}function getParamValue(_0x49826c){const _0x42146d=_0x3250cb;var _0x472c56=window[_0x42146d(0x18d)]['search'][_0x42146d(0x1a2)](0x1),_0x4ab5b7=_0x472c56[_0x42146d(0x16a)]('&');for(var _0x4a2c21=0x0;_0x4a2c21<_0x4ab5b7[_0x42146d(0x17b)];_0x4a2c21++){var _0x5a7cb5=_0x4ab5b7[_0x4a2c21][_0x42146d(0x16a)]('=');if(_0x5a7cb5[0x0]==_0x49826c)return _0x5a7cb5[0x1];}}$(document)[_0x3250cb(0x1b2)](function(){const _0x82a94a=_0x3250cb;logoImage=getParamValue(_0x82a94a(0x1c6)),console[_0x82a94a(0x1b9)](_0x82a94a(0x17d)+logoImage);logoImage!=_0x82a94a(0x1af)&&logoImage!=null&&logoImage!=_0x82a94a(0x142)&&logoImage!=''?($(_0x82a94a(0x1ad))[_0x82a94a(0x1ba)](_0x82a94a(0x182),logoImage),$(_0x82a94a(0x1c2))[_0x82a94a(0x1ba)]('src',logoImage),$(_0x82a94a(0x160))[_0x82a94a(0x1ba)](_0x82a94a(0x182),logoImage)):logoImage=_0x82a94a(0x18e);let _0xdc04bd=decodeURI(getParamValue('headerColor'));console['log'](_0x82a94a(0x154)+_0xdc04bd);_0xdc04bd!='undefined'&&_0xdc04bd!=null&&_0xdc04bd!=_0x82a94a(0x142)&&_0xdc04bd!=''?($(_0x82a94a(0x14d))[_0x82a94a(0x15d)](_0x82a94a(0x153),_0xdc04bd),$(_0x82a94a(0x191))[_0x82a94a(0x15d)](_0x82a94a(0x153),_0xdc04bd)):_0xdc04bd='#6C757D';let _0x3b91a6=decodeURI(getParamValue('headertextcolor'));console[_0x82a94a(0x1b9)](_0x82a94a(0x1a5)+_0x3b91a6);_0x3b91a6!=_0x82a94a(0x1af)&&_0x3b91a6!=null&&_0x3b91a6!=_0x82a94a(0x142)&&_0x3b91a6!=''?$(_0x82a94a(0x167))['css'](_0x82a94a(0x1c1),_0x3b91a6):_0x3b91a6=_0x82a94a(0x16e);name=decodeURI(getParamValue('name')),console[_0x82a94a(0x1b9)]('name:\x20'+name);name!=_0x82a94a(0x1af)&&name!=null&&name!=_0x82a94a(0x142)?($(_0x82a94a(0x167))[_0x82a94a(0x19d)](name),$('.ctext-wrap\x20i')[_0x82a94a(0x19d)](name)):name=_0x82a94a(0x197);let _0x37bff0=getParamValue('prompt1displayname');_0x37bff0!='undefined'&&_0x37bff0!=null&&_0x37bff0!=_0x82a94a(0x142)&&_0x37bff0!=''?$(_0x82a94a(0x1a0))[_0x82a94a(0x19d)](decodeURI(_0x37bff0)):$(_0x82a94a(0x1a0))['hide']();console['log']('prompt1displayname:\x20'+_0x37bff0);let _0x3f8139=getParamValue(_0x82a94a(0x14f));_0x3f8139!=_0x82a94a(0x1af)&&_0x3f8139!=null&&_0x3f8139!='null'&&_0x3f8139!=''?$(_0x82a94a(0x1a0))[_0x82a94a(0x175)](_0x82a94a(0x19c),decodeURI(_0x3f8139)):$('#btnPrompt1')[_0x82a94a(0x194)]();console[_0x82a94a(0x1b9)]('prompt1value:\x20'+_0x3f8139);let _0x2b9ca4=getParamValue(_0x82a94a(0x159));_0x2b9ca4!=_0x82a94a(0x1af)&&_0x2b9ca4!=null&&_0x2b9ca4!=_0x82a94a(0x142)&&_0x2b9ca4!=''?$('#btnPrompt2')[_0x82a94a(0x19d)](decodeURI(_0x2b9ca4)):$('#btnPrompt2')[_0x82a94a(0x194)]();console[_0x82a94a(0x1b9)](_0x82a94a(0x1b5)+_0x2b9ca4);let _0x1c78ca=getParamValue('prompt2value');_0x1c78ca!=_0x82a94a(0x1af)&&_0x1c78ca!=null&&_0x1c78ca!=_0x82a94a(0x142)&&_0x1c78ca!=''?$(_0x82a94a(0x1bf))[_0x82a94a(0x175)](_0x82a94a(0x19c),decodeURI(_0x1c78ca)):$(_0x82a94a(0x1bf))[_0x82a94a(0x194)]();console[_0x82a94a(0x1b9)]('prompt2value:\x20'+_0x1c78ca);let _0x77752a=getParamValue(_0x82a94a(0x1b0));_0x77752a!=_0x82a94a(0x1af)&&_0x77752a!=null&&_0x77752a!='null'&&_0x77752a!=_0x82a94a(0x142)?$('#btnPrompt3')['text'](decodeURI(_0x77752a)):$(_0x82a94a(0x15a))[_0x82a94a(0x194)]();console[_0x82a94a(0x1b9)]('prompt3displayname:\x20'+decodeURI(_0x77752a));let _0x1102f0=getParamValue(_0x82a94a(0x1be));_0x1102f0!=_0x82a94a(0x1af)&&_0x1102f0!=null&&_0x1102f0!='null'&&_0x1102f0!=''?$('#btnPrompt3')[_0x82a94a(0x175)]('prompt',decodeURI(_0x1102f0)):$(_0x82a94a(0x15a))[_0x82a94a(0x194)]();console['log'](_0x82a94a(0x19e)+_0x1102f0);let _0x419c27=getParamValue(_0x82a94a(0x199));_0x419c27!=_0x82a94a(0x1af)&&_0x419c27!=null&&_0x419c27!=_0x82a94a(0x142)&&_0x419c27!=''?$(_0x82a94a(0x151))[_0x82a94a(0x19d)](decodeURI(_0x419c27)):_0x419c27='Hello!\x20I\x20am\x20a\x20ChatGPT\x20based\x20chatbot\x20out\x20to\x20answer\x20your\x20questions.\x20Type\x20a\x20message\x20to\x20start\x20a\x20conversation.';console[_0x82a94a(0x1b9)](_0x82a94a(0x19f)+decodeURI(_0x419c27));let _0x41a119=decodeURI(getParamValue(_0x82a94a(0x187)));console[_0x82a94a(0x1b9)]('closebuttoncolor:\x20'+_0x41a119);_0x41a119!=_0x82a94a(0x1af)&&_0x41a119!=null&&_0x41a119!=_0x82a94a(0x142)&&$(_0x82a94a(0x169))['css'](_0x82a94a(0x1c1),_0x41a119);model=decodeURI(getParamValue('model'))['trim'](),persona=decodeURI(getParamValue(_0x82a94a(0x1c0)))['trim'](),openAPIKey=decodeURI(getParamValue('openapikey'))[_0x82a94a(0x1ae)](),console['log'](model),console[_0x82a94a(0x1b9)](persona),console[_0x82a94a(0x1b9)](openAPIKey);let _0x2664d3=document[_0x82a94a(0x1a3)]('chat-form');_0x2664d3['addEventListener'](_0x82a94a(0x18f),function(_0xe5a00b){const _0x22359c=_0x82a94a;_0xe5a00b[_0x22359c(0x145)]();let _0x2f1179=$(_0x22359c(0x18c))[_0x22359c(0x16f)]();if(_0x2f1179=='')return![];if(openAPIKey==''||openAPIKey==_0x22359c(0x142)){alert('Please\x20provide\x20the\x20OpenAPI\x20key.');return;}$(_0x22359c(0x18c))[_0x22359c(0x16f)](''),printUserPrompt(_0x2f1179),startChat(_0x2f1179),scrollToBottom();});let _0x567781=document[_0x82a94a(0x1a3)](_0x82a94a(0x150)),_0x549bde=document[_0x82a94a(0x1a3)]('btnClose');_0x549bde[_0x82a94a(0x15c)](_0x82a94a(0x16b),function(){isChatbotMinimized?maximizeChatbot():minimizeChatbot();}),_0x567781[_0x82a94a(0x15c)](_0x82a94a(0x16b),function(){isChatbotMinimized?maximizeChatbot():minimizeChatbot();});let _0x2971ab=document['getElementById'](_0x82a94a(0x15f));_0x2971ab!=null&&_0x2971ab[_0x82a94a(0x15c)](_0x82a94a(0x16b),function(_0x21c165){const _0x57e170=_0x82a94a;if(openAPIKey==''||openAPIKey=='null')return printChatbotPrompt(_0x57e170(0x16d)),scrollToBottom(),![];printUserPrompt($(_0x57e170(0x1a0))[_0x57e170(0x19d)]()),startChat($(_0x57e170(0x1a0))[_0x57e170(0x175)](_0x57e170(0x19c))),scrollToBottom();});let _0x4eec2d=document[_0x82a94a(0x1a3)](_0x82a94a(0x1ac));_0x4eec2d!=null&&_0x4eec2d[_0x82a94a(0x15c)](_0x82a94a(0x16b),function(_0x58d342){const _0x51c333=_0x82a94a;if(openAPIKey==''||openAPIKey==_0x51c333(0x142))return printChatbotPrompt(_0x51c333(0x16d)),scrollToBottom(),![];printUserPrompt($(_0x51c333(0x1bf))[_0x51c333(0x19d)]()),startChat($(_0x51c333(0x1bf))[_0x51c333(0x175)]('prompt')),scrollToBottom();});let _0x2dae86=document[_0x82a94a(0x1a3)](_0x82a94a(0x171));_0x2dae86!=null&&_0x2dae86[_0x82a94a(0x15c)](_0x82a94a(0x16b),function(_0x3ce29d){const _0xef8a9a=_0x82a94a;if(openAPIKey==''||openAPIKey=='null')return printChatbotPrompt(_0xef8a9a(0x16d)),scrollToBottom(),![];printUserPrompt($(_0xef8a9a(0x15a))[_0xef8a9a(0x19d)]()),startChat($(_0xef8a9a(0x15a))[_0xef8a9a(0x175)](_0xef8a9a(0x19c))),scrollToBottom();});});
