(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[24,58,68,93],{179:function(o,e){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];o.exports=function(o){var e=[];for(var t in o)o.hasOwnProperty(t)&&e.push(t);var a=n.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g")}},428:function(o,e){o.exports=function(){var o={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXMonths:{one:"aproximadamente 1 m\xeas",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};return{localize:function(e,n,t){var a;return t=t||{},a="string"===typeof o[e]?o[e]:1===n?o[e].one:o[e].other.replace("{{count}}",n),t.addSuffix?t.comparison>0?"daqui a "+a:"h\xe1 "+a:a}}}},429:function(o,e,n){var t=n(179);o.exports=function(){var o=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],e=["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],n=["do","se","te","qa","qi","se","sa"],a=["dom","seg","ter","qua","qui","sex","s\xe1b"],r=["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"],s=["AM","PM"],u=["am","pm"],i=["a.m.","p.m."],m={MMM:function(e){return o[e.getMonth()]},MMMM:function(o){return e[o.getMonth()]},dd:function(o){return n[o.getDay()]},ddd:function(o){return a[o.getDay()]},dddd:function(o){return r[o.getDay()]},A:function(o){return o.getHours()/12>=1?s[1]:s[0]},a:function(o){return o.getHours()/12>=1?u[1]:u[0]},aa:function(o){return o.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(o){m[o+"o"]=function(e,n){return n[o](e)+"\xba"}})),{formatters:m,formattingTokensRegExp:t(m)}}},609:function(o,e,n){var t=n(428),a=n(429);o.exports={distanceInWords:t(),format:a()}}}]);