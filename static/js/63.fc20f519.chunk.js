(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[63,68],{179:function(n,r){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var r=[];for(var e in n)n.hasOwnProperty(e)&&r.push(e);var a=t.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g")}},449:function(n,r,t){var e=t(179);n.exports=function(){var n=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],r=["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],t=["s\xf6","m\xe5","ti","on","to","fr","l\xf6"],a=["s\xf6n","m\xe5n","tis","ons","tor","fre","l\xf6r"],o=["s\xf6ndag","m\xe5ndag","tisdag","onsdag","torsdag","fredag","l\xf6rdag"],s=["f.m.","e.m."],u={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return o[n.getDay()]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return u.A=u.aa,u.a=u.aa,["M","D","DDD","d","Q","W"].forEach((function(n){u[n+"o"]=function(r,t){return function(n){var r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+":a"}return n+":e"}(t[n](r))}})),{formatters:u,formattingTokensRegExp:e(u)}}}}]);