(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[194],{1178:function(e,n,r){var o=r(643);e.exports=function(){var e=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],n=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],r=["do","lu","ma","mi","ju","vi","sa"],t=["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],u=["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],i=["AM","PM"],a=["am","pm"],s=["a.m.","p.m."],m={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return t[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?i[1]:i[0]},a:function(e){return e.getHours()/12>=1?a[1]:a[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){m[e+"o"]=function(n,r){return r[e](n)+"\xba"}})),{formatters:m,formattingTokensRegExp:o(m)}}}}]);