(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{492:function(n,i,r){var e=r(255);n.exports=function(){var n=["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],i=["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],r=["du","lu","ma","mi","jo","vi","s\xe2"],t=["dum","lun","mar","mie","joi","vin","s\xe2m"],u=["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\xe2mb\u0103ta"],o=["AM","PM"],a=["am","pm"],m=["a.m.","p.m."],c={MMM:function(i){return n[i.getMonth()]},MMMM:function(n){return i[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?o[1]:o[0]},a:function(n){return n.getHours()/12>=1?a[1]:a[0]},aa:function(n){return n.getHours()/12>=1?m[1]:m[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){c[n+"o"]=function(i,r){return r[n](i).toString()}}),{formatters:c,formattingTokensRegExp:e(c)}}}}]);