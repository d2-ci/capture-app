(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[169,233,234],{1236:function(o,n){o.exports=function(){var o={lessThanXSeconds:{one:"manje od sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:"1 sekund",other:"{{count}} sekunde"},halfAMinute:"pola minuta",lessThanXMinutes:{one:"manje od minute",other:"manje od {{count}} minuta"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"oko 1 sat",other:"oko {{count}} sata"},xHours:{one:"1 sat",other:"{{count}} sati"},xDays:{one:"1 dan",other:"{{count}} dani"},aboutXMonths:{one:"oko 1 mesec",other:"oko {{count}} meseca"},xMonths:{one:"1 mesec",other:"{{count}} meseci"},aboutXYears:{one:"oko 1 godine",other:"oko {{count}} godina"},xYears:{one:"1 godina",other:"{{count}} godine"},overXYears:{one:"vi\u0161e od 1 godine",other:"vi\u0161e od {{count}} godina"},almostXYears:{one:"skoro 1 godinu",other:"skoro {{count}} godina"}};return{localize:function(n,e,t){var r;return t=t||{},r="string"===typeof o[n]?o[n]:1===e?o[n].one:o[n].other.replace("{{count}}",e),t.addSuffix?t.comparison>0?"za "+r:r+" pre":r}}}},1237:function(o,n,e){var t=e(734);o.exports=function(){var o=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],n=["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],e=["ne","po","ut","sr","\u010de","pe","su"],r=["ned","pon","uto","sre","\u010det","pet","sub"],a=["nedelja","ponedeljak","utorak","sreda","\u010detvrtak","petak","subota"],u=["AM","PM"],s=["am","pm"],i=["a.m.","p.m."],c={MMM:function(n){return o[n.getMonth()]},MMMM:function(o){return n[o.getMonth()]},dd:function(o){return e[o.getDay()]},ddd:function(o){return r[o.getDay()]},dddd:function(o){return a[o.getDay()]},A:function(o){return o.getHours()/12>=1?u[1]:u[0]},a:function(o){return o.getHours()/12>=1?s[1]:s[0]},aa:function(o){return o.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(o){c[o+"o"]=function(n,e){return e[o](n)+"."}})),{formatters:c,formattingTokensRegExp:t(c)}}},2346:function(o,n,e){var t=e(1236),r=e(1237);o.exports={distanceInWords:t(),format:r()}}}]);