(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[165,225,226],{1211:function(n,e){n.exports=function(){var n={lessThanXSeconds:{one:"mai pu\u021bin de o secund\u0103",other:"mai pu\u021bin de {{count}} secunde"},xSeconds:{one:"1 secund\u0103",other:"{{count}} secunde"},halfAMinute:"jum\u0103tate de minut",lessThanXMinutes:{one:"mai pu\u021bin de un minut",other:"mai pu\u021bin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 or\u0103",other:"circa {{count}} ore"},xHours:{one:"1 or\u0103",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXMonths:{one:"circa 1 lun\u0103",other:"circa {{count}} luni"},xMonths:{one:"1 lun\u0103",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};return{localize:function(e,o,t){var r;return t=t||{},r="string"===typeof n[e]?n[e]:1===o?n[e].one:n[e].other.replace("{{count}}",o),t.addSuffix?t.comparison>0?"\xeen "+r:r+" \xeen urm\u0103":r}}}},1212:function(n,e,o){var t=o(646);n.exports=function(){var n=["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],e=["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],o=["du","lu","ma","mi","jo","vi","s\xe2"],r=["dum","lun","mar","mie","joi","vin","s\xe2m"],i=["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\xe2mb\u0103ta"],u=["AM","PM"],a=["am","pm"],c=["a.m.","p.m."],s={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return i[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?a[1]:a[0]},aa:function(n){return n.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(e,o){return o[n](e).toString()}})),{formatters:s,formattingTokensRegExp:t(s)}}},2953:function(n,e,o){var t=o(1211),r=o(1212);n.exports={distanceInWords:t(),format:r()}}}]);