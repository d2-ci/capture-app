(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[218],{856:function(n,t,r){var e=r(219);n.exports=function(){var n=["jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],t=["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],r=["s\xf8","ma","ti","on","to","fr","l\xf8"],a=["s\xf8.","ma.","ti.","on.","to.","fr.","l\xf8."],o=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],d={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){d[n+"o"]=function(t,r){return r[n](t)+"."}})),{formatters:d,formattingTokensRegExp:e(d)}}}}]);