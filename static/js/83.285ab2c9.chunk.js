webpackJsonp([83],{624:function(n,o,t){function r(){var n=["jan","feb","mar","apr","maj","jun","jul","a\u016dg","sep","okt","nov","dec"],o=["januaro","februaro","marto","aprilo","majo","junio","julio","a\u016dgusto","septembro","oktobro","novembro","decembro"],t=["di","lu","ma","me","\u0135a","ve","sa"],r=["dim","lun","mar","mer","\u0135a\u016d","ven","sab"],a=["diman\u0109o","lundo","mardo","merkredo","\u0135a\u016ddo","vendredo","sabato"],u=["A.T.M.","P.T.M."],d=["a.t.m.","p.t.m."],m=["anta\u016dtagmeze","posttagmeze"],i={MMM:function(o){return n[o.getMonth()]},MMMM:function(n){return o[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?d[1]:d[0]},aa:function(n){return n.getHours()/12>=1?m[1]:m[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){i[n+"o"]=function(o,t){return t[n](o)+"-a"}}),{formatters:i,formattingTokensRegExp:e(i)}}var e=t(344);n.exports=r}});