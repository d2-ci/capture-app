(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[192],{1191:function(n,t,o){var e=o(726);n.exports=function(){var n=["jan","feb","mar","apr","maj","jun","jul","a\u016dg","sep","okt","nov","dec"],t=["januaro","februaro","marto","aprilo","majo","junio","julio","a\u016dgusto","septembro","oktobro","novembro","decembro"],o=["di","lu","ma","me","\u0135a","ve","sa"],r=["dim","lun","mar","mer","\u0135a\u016d","ven","sab"],a=["diman\u0109o","lundo","mardo","merkredo","\u0135a\u016ddo","vendredo","sabato"],u=["A.T.M.","P.T.M."],d=["a.t.m.","p.t.m."],i=["anta\u016dtagmeze","posttagmeze"],s={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?d[1]:d[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(t,o){return o[n](t)+"-a"}})),{formatters:s,formattingTokensRegExp:e(s)}}}}]);