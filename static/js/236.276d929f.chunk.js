(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[236],{863:function(n,r,t){var e=t(219);n.exports=function(){var n=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],r=["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],t=["s\xf6","m\xe5","ti","on","to","fr","l\xf6"],a=["s\xf6n","m\xe5n","tis","ons","tor","fre","l\xf6r"],o=["s\xf6ndag","m\xe5ndag","tisdag","onsdag","torsdag","fredag","l\xf6rdag"],u=["f.m.","e.m."],s={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return o[n.getDay()]},aa:function(n){return n.getHours()/12>=1?u[1]:u[0]}};return s.A=s.aa,s.a=s.aa,["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(r,t){return function(n){var r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+":a"}return n+":e"}(t[n](r))}})),{formatters:s,formattingTokensRegExp:e(s)}}}}]);