(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[63,68],{452:function(r,n){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];r.exports=function(r){var n=[];for(var e in r)r.hasOwnProperty(e)&&n.push(e);var a=t.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g")}},512:function(r,n,t){var e=t(452);r.exports=function(){var r=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],n=["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],t=["s\xf6","m\xe5","ti","on","to","fr","l\xf6"],a=["s\xf6n","m\xe5n","tis","ons","tor","fre","l\xf6r"],o=["s\xf6ndag","m\xe5ndag","tisdag","onsdag","torsdag","fredag","l\xf6rdag"],u=["f.m.","e.m."],s={MMM:function(n){return r[n.getMonth()]},MMMM:function(r){return n[r.getMonth()]},dd:function(r){return t[r.getDay()]},ddd:function(r){return a[r.getDay()]},dddd:function(r){return o[r.getDay()]},aa:function(r){return r.getHours()/12>=1?u[1]:u[0]}};return s.A=s.aa,s.a=s.aa,["M","D","DDD","d","Q","W"].forEach((function(r){s[r+"o"]=function(n,t){return function(r){var n=r%100;if(n>20||n<10)switch(n%10){case 1:case 2:return r+":a"}return r+":e"}(t[r](n))}})),{formatters:s,formattingTokensRegExp:e(s)}}}}]);