(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[55,68],{449:function(r,n){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];r.exports=function(r){var n=[];for(var e in r)r.hasOwnProperty(e)&&n.push(e);var a=t.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g")}},493:function(r,n,t){var e=t(449);r.exports=function(){var r=["jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],n=["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],t=["s\xf8","ma","ti","on","to","fr","l\xf8"],a=["s\xf8.","ma.","ti.","on.","to.","fr.","l\xf8."],o=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],u=["AM","PM"],s=["am","pm"],i=["a.m.","p.m."],f={MMM:function(n){return r[n.getMonth()]},MMMM:function(r){return n[r.getMonth()]},dd:function(r){return t[r.getDay()]},ddd:function(r){return a[r.getDay()]},dddd:function(r){return o[r.getDay()]},A:function(r){return r.getHours()/12>=1?u[1]:u[0]},a:function(r){return r.getHours()/12>=1?s[1]:s[0]},aa:function(r){return r.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(r){f[r+"o"]=function(n,t){return t[r](n)+"."}})),{formatters:f,formattingTokensRegExp:e(f)}}}}]);