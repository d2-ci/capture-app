(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[56,68],{176:function(n,r){var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var r=[];for(var t in n)n.hasOwnProperty(t)&&r.push(t);var a=e.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g")}},407:function(n,r,e){var t=e(176);n.exports=function(){var n=["jan","feb","mar","apr","mei","jun","jul","aug","sep","okt","nov","dec"],r=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],e=["zo","ma","di","wo","do","vr","za"],a=["zon","maa","din","woe","don","vri","zat"],o=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],u=["AM","PM"],i=["am","pm"],d=["a.m.","p.m."],s={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(r,e){return e[n](r)+"e"}})),{formatters:s,formattingTokensRegExp:t(s)}}}}]);