(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[220],{1141:function(n,e,r){var t=r(708);n.exports=function(){var n=["jan","feb","mar","apr","mei","jun","jul","aug","sep","okt","nov","dec"],e=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],r=["zo","ma","di","wo","do","vr","za"],a=["zon","maa","din","woe","don","vri","zat"],o=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],u=["AM","PM"],i=["am","pm"],d=["a.m.","p.m."],s={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(e,r){return r[n](e)+"e"}})),{formatters:s,formattingTokensRegExp:t(s)}}}}]);