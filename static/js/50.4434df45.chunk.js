(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{494:function(n,e,o){var r=o(277);n.exports=function(){var n=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],e=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],o=["do","lu","ma","mi","ju","vi","sa"],t=["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],u=["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],i=["AM","PM"],a=["am","pm"],m=["a.m.","p.m."],c={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?a[1]:a[0]},aa:function(n){return n.getHours()/12>=1?m[1]:m[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){c[n+"o"]=function(e,o){return o[n](e)+"\xba"}}),{formatters:c,formattingTokensRegExp:r(c)}}}}]);