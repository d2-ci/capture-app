(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[143,181,182],{1167:function(n,e){n.exports=function(){var n={lessThanXSeconds:{one:"menys d'un segon",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"m\xe9s d'un any",other:"m\xe9s de {{count}} anys"},almostXYears:{one:"gaireb\xe9 un any",other:"gaireb\xe9 {{count}} anys"}};return{localize:function(e,t,o){var r;return o=o||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),o.addSuffix?o.comparison>0?"en "+r:"fa "+r:r}}}},1168:function(n,e,t){var o=t(642);n.exports=function(){var n=["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],e=["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"],t=["dg","dl","dt","dc","dj","dv","ds"],r=["dge","dls","dts","dcs","djs","dvs","dss"],s=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],a=["AM","PM"],u=["am","pm"],i=["a.m.","p.m."],d={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return s[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?u[1]:u[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){d[n+"o"]=function(e,t){return function(n){switch(n){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return n+"\xe8"}}(t[n](e))}})),{formatters:d,formattingTokensRegExp:o(d)}}},2935:function(n,e,t){var o=t(1167),r=t(1168);n.exports={distanceInWords:o(),format:r()}}}]);