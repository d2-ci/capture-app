(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[61,68],{179:function(t,n){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];t.exports=function(t){var n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(e);var o=r.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},445:function(t,n,r){var e=r(179);t.exports=function(){var t=["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],n=["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"],r=["ne","po","ut","st","\u0161t","pi","so"],o=["ne\u010f","pon","uto","str","\u0161tv","pia","sob"],u=["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"],a=["AM","PM"],s=["am","pm"],p=["a.m.","p.m."],i={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return r[t.getDay()]},ddd:function(t){return o[t.getDay()]},dddd:function(t){return u[t.getDay()]},A:function(t){return t.getHours()/12>=1?a[1]:a[0]},a:function(t){return t.getHours()/12>=1?s[1]:s[0]},aa:function(t){return t.getHours()/12>=1?p[1]:p[0]}};return["M","D","DDD","d","Q","W"].forEach((function(t){i[t+"o"]=function(n,r){return r[t](n)+"."}})),{formatters:i,formattingTokensRegExp:e(i)}}}}]);