webpackJsonp([41],{609:function(n,r,t){function e(){var n=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],r=["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],t=["s\xf6","m\xe5","ti","on","to","fr","l\xf6"],e=["s\xf6n","m\xe5n","tis","ons","tor","fre","l\xf6r"],u=["s\xf6ndag","m\xe5ndag","tisdag","onsdag","torsdag","fredag","l\xf6rdag"],i=["f.m.","e.m."],f={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return u[n.getDay()]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return f.A=f.aa,f.a=f.aa,["M","D","DDD","d","Q","W"].forEach(function(n){f[n+"o"]=function(r,t){return a(t[n](r))}}),{formatters:f,formattingTokensRegExp:o(f)}}function a(n){var r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+":a"}return n+":e"}var o=t(301);n.exports=e}});