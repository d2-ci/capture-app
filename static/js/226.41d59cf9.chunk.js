(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[226],{1224:function(i,n,e){var r=e(726);i.exports=function(){var i=["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],n=["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],e=["du","lu","ma","mi","jo","vi","s\xe2"],t=["dum","lun","mar","mie","joi","vin","s\xe2m"],u=["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\xe2mb\u0103ta"],o=["AM","PM"],a=["am","pm"],m=["a.m.","p.m."],c={MMM:function(n){return i[n.getMonth()]},MMMM:function(i){return n[i.getMonth()]},dd:function(i){return e[i.getDay()]},ddd:function(i){return t[i.getDay()]},dddd:function(i){return u[i.getDay()]},A:function(i){return i.getHours()/12>=1?o[1]:o[0]},a:function(i){return i.getHours()/12>=1?a[1]:a[0]},aa:function(i){return i.getHours()/12>=1?m[1]:m[0]}};return["M","D","DDD","d","Q","W"].forEach((function(i){c[i+"o"]=function(n,e){return e[i](n).toString()}})),{formatters:c,formattingTokensRegExp:r(c)}}}}]);