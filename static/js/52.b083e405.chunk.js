(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[52,68],{197:function(n,t){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);var o=r.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},470:function(n,t,r){var e=r(197);n.exports=function(){var n=["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],t=["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],r=["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"],o=["\u65e5\u66dc","\u6708\u66dc","\u706b\u66dc","\u6c34\u66dc","\u6728\u66dc","\u91d1\u66dc","\u571f\u66dc"],u=["\u65e5\u66dc\u65e5","\u6708\u66dc\u65e5","\u706b\u66dc\u65e5","\u6c34\u66dc\u65e5","\u6728\u66dc\u65e5","\u91d1\u66dc\u65e5","\u571f\u66dc\u65e5"],s=["\u5348\u524d","\u5348\u5f8c"],a=["\u5348\u524d","\u5348\u5f8c"],i=["\u5348\u524d","\u5348\u5f8c"],c={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?s[1]:s[0]},a:function(n){return n.getHours()/12>=1?a[1]:a[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){c[n+"o"]=function(t,r){return r[n](t)+"\u65e5"}})),{formatters:c,formattingTokensRegExp:e(c)}}}}]);