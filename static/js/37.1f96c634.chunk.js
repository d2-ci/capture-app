(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[37,68],{197:function(n,e){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var e=[];for(var r in n)n.hasOwnProperty(r)&&e.push(r);var o=t.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},420:function(n,e,t){var r=t(197);n.exports=function(){var n=["led","\xfano","b\u0159e","dub","kv\u011b","\u010dvn","\u010dvc","srp","z\xe1\u0159","\u0159\xedj","lis","pro"],e=["leden","\xfanor","b\u0159ezen","duben","kv\u011bten","\u010derven","\u010dervenec","srpen","z\xe1\u0159\xed","\u0159\xedjen","listopad","prosinec"],t=["ne","po","\xfat","st","\u010dt","p\xe1","so"],o=["ned","pon","\xfate","st\u0159","\u010dtv","p\xe1t","sob"],s=["ned\u011ble","pond\u011bl\xed","\xfater\xfd","st\u0159eda","\u010dtvrtek","p\xe1tek","sobota"],u=["DOP.","ODP."],p=["dop.","odp."],d=["dopoledne","odpoledne"],a={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return s[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?p[1]:p[0]},aa:function(n){return n.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){a[n+"o"]=function(e,t){return t[n](e)+"."}})),{formatters:a,formattingTokensRegExp:r(a)}}}}]);