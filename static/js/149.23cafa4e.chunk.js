(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[149,193,194],{8100:function(e,o,n){var t=n(830),r=n(831);e.exports={distanceInWords:t(),format:r()}},830:function(e,o){e.exports=function(){var e={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 a\xf1o",other:"alrededor de {{count}} a\xf1os"},xYears:{one:"1 a\xf1o",other:"{{count}} a\xf1os"},overXYears:{one:"m\xe1s de 1 a\xf1o",other:"m\xe1s de {{count}} a\xf1os"},almostXYears:{one:"casi 1 a\xf1o",other:"casi {{count}} a\xf1os"}};return{localize:function(o,n,t){var r;return t=t||{},r="string"===typeof e[o]?e[o]:1===n?e[o].one:e[o].other.replace("{{count}}",n),t.addSuffix?t.comparison>0?"en "+r:"hace "+r:r}}}},831:function(e,o,n){var t=n(219);e.exports=function(){var e=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],o=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],n=["do","lu","ma","mi","ju","vi","sa"],r=["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],s=["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],u=["AM","PM"],a=["am","pm"],d=["a.m.","p.m."],i={MMM:function(o){return e[o.getMonth()]},MMMM:function(e){return o[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return s[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?a[1]:a[0]},aa:function(e){return e.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){i[e+"o"]=function(o,n){return n[e](o)+"\xba"}})),{formatters:i,formattingTokensRegExp:t(i)}}}}]);