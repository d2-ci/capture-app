(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[42,68],{176:function(n,r){var o=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var r=[];for(var t in n)n.hasOwnProperty(t)&&r.push(t);var e=o.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+e.join("|")+"|.)","g")}},373:function(n,r,o){var t=o(176);n.exports=function(){var n=["jan","feb","mar","apr","maj","jun","jul","a\u016dg","sep","okt","nov","dec"],r=["januaro","februaro","marto","aprilo","majo","junio","julio","a\u016dgusto","septembro","oktobro","novembro","decembro"],o=["di","lu","ma","me","\u0135a","ve","sa"],e=["dim","lun","mar","mer","\u0135a\u016d","ven","sab"],a=["diman\u0109o","lundo","mardo","merkredo","\u0135a\u016ddo","vendredo","sabato"],u=["A.T.M.","P.T.M."],s=["a.t.m.","p.t.m."],i=["anta\u016dtagmeze","posttagmeze"],d={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){d[n+"o"]=function(r,o){return o[n](r)+"-a"}})),{formatters:d,formattingTokensRegExp:t(d)}}}}]);