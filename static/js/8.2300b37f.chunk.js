(window.webpackJsonp=window.webpackJsonp||[]).push([[8,49,50],{468:function(o,e){o.exports=function(){var o={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 a\xf1o",other:"alrededor de {{count}} a\xf1os"},xYears:{one:"1 a\xf1o",other:"{{count}} a\xf1os"},overXYears:{one:"m\xe1s de 1 a\xf1o",other:"m\xe1s de {{count}} a\xf1os"},almostXYears:{one:"casi 1 a\xf1o",other:"casi {{count}} a\xf1os"}};return{localize:function(e,n,r){var t;return r=r||{},t="string"===typeof o[e]?o[e]:1===n?o[e].one:o[e].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"en "+t:"hace "+t:t}}}},469:function(o,e,n){var r=n(258);o.exports=function(){var o=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],e=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],n=["do","lu","ma","mi","ju","vi","sa"],t=["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],u=["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],s=["AM","PM"],a=["am","pm"],d=["a.m.","p.m."],i={MMM:function(e){return o[e.getMonth()]},MMMM:function(o){return e[o.getMonth()]},dd:function(o){return n[o.getDay()]},ddd:function(o){return t[o.getDay()]},dddd:function(o){return u[o.getDay()]},A:function(o){return o.getHours()/12>=1?s[1]:s[0]},a:function(o){return o.getHours()/12>=1?a[1]:a[0]},aa:function(o){return o.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach(function(o){i[o+"o"]=function(e,n){return n[o](e)+"\xba"}}),{formatters:i,formattingTokensRegExp:r(i)}}},526:function(o,e,n){var r=n(468),t=n(469);o.exports={distanceInWords:r(),format:t()}}}]);