(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[43,68],{191:function(n,e){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var e=[];for(var o in n)n.hasOwnProperty(o)&&e.push(o);var t=r.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+t.join("|")+"|.)","g")}},424:function(n,e,r){var o=r(191);n.exports=function(){var n=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],e=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],r=["do","lu","ma","mi","ju","vi","sa"],t=["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],u=["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],a=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],c={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){c[n+"o"]=function(e,r){return r[n](e)+"\xba"}})),{formatters:c,formattingTokensRegExp:o(c)}}}}]);