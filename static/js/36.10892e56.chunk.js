(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[36,68],{449:function(r,e){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];r.exports=function(r){var e=[];for(var t in r)r.hasOwnProperty(t)&&e.push(t);var u=n.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}},457:function(r,e,n){var t=n(449);r.exports=function(){var r=["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],e=["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"],n=["dg","dl","dt","dc","dj","dv","ds"],u=["dge","dls","dts","dcs","djs","dvs","dss"],s=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],o=["AM","PM"],a=["am","pm"],d=["a.m.","p.m."],c={MMM:function(e){return r[e.getMonth()]},MMMM:function(r){return e[r.getMonth()]},dd:function(r){return n[r.getDay()]},ddd:function(r){return u[r.getDay()]},dddd:function(r){return s[r.getDay()]},A:function(r){return r.getHours()/12>=1?o[1]:o[0]},a:function(r){return r.getHours()/12>=1?a[1]:a[0]},aa:function(r){return r.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach((function(r){c[r+"o"]=function(e,n){return function(r){switch(r){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return r+"\xe8"}}(n[r](e))}})),{formatters:c,formattingTokensRegExp:t(c)}}}}]);