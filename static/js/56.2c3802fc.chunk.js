(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[56,68],{447:function(n,r){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var r=[];for(var e in n)n.hasOwnProperty(e)&&r.push(e);var a=t.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g")}},493:function(n,r,t){var e=t(447);n.exports=function(){var n=["jan","feb","mar","apr","mei","jun","jul","aug","sep","okt","nov","dec"],r=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],t=["zo","ma","di","wo","do","vr","za"],a=["zon","maa","din","woe","don","vri","zat"],o=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],u=["AM","PM"],i=["am","pm"],d=["a.m.","p.m."],s={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(r,t){return t[n](r)+"e"}})),{formatters:s,formattingTokensRegExp:e(s)}}}}]);