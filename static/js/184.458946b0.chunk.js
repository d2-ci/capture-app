(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[184],{1187:function(n,e,t){var o=t(735);n.exports=function(){var n=["led","\xfano","b\u0159e","dub","kv\u011b","\u010dvn","\u010dvc","srp","z\xe1\u0159","\u0159\xedj","lis","pro"],e=["leden","\xfanor","b\u0159ezen","duben","kv\u011bten","\u010derven","\u010dervenec","srpen","z\xe1\u0159\xed","\u0159\xedjen","listopad","prosinec"],t=["ne","po","\xfat","st","\u010dt","p\xe1","so"],r=["ned","pon","\xfate","st\u0159","\u010dtv","p\xe1t","sob"],u=["ned\u011ble","pond\u011bl\xed","\xfater\xfd","st\u0159eda","\u010dtvrtek","p\xe1tek","sobota"],d=["DOP.","ODP."],p=["dop.","odp."],s=["dopoledne","odpoledne"],i={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?d[1]:d[0]},a:function(n){return n.getHours()/12>=1?p[1]:p[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){i[n+"o"]=function(e,t){return t[n](e)+"."}})),{formatters:i,formattingTokensRegExp:o(i)}}}}]);