(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[7122,1566,5626,8348],{1566:function(n){var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var o=[];for(var t in n)n.hasOwnProperty(t)&&o.push(t);var r=e.concat(o).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")}},85626:function(n){n.exports=function(){var n={lessThanXSeconds:{one:"mai pu\u021bin de o secund\u0103",other:"mai pu\u021bin de {{count}} secunde"},xSeconds:{one:"1 secund\u0103",other:"{{count}} secunde"},halfAMinute:"jum\u0103tate de minut",lessThanXMinutes:{one:"mai pu\u021bin de un minut",other:"mai pu\u021bin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 or\u0103",other:"circa {{count}} ore"},xHours:{one:"1 or\u0103",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXMonths:{one:"circa 1 lun\u0103",other:"circa {{count}} luni"},xMonths:{one:"1 lun\u0103",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};return{localize:function(e,o,t){var r;return t=t||{},r="string"===typeof n[e]?n[e]:1===o?n[e].one:n[e].other.replace("{{count}}",o),t.addSuffix?t.comparison>0?"\xeen "+r:r+" \xeen urm\u0103":r}}}},58348:function(n,e,o){var t=o(1566);n.exports=function(){var n=["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],e=["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],o=["du","lu","ma","mi","jo","vi","s\xe2"],r=["dum","lun","mar","mie","joi","vin","s\xe2m"],u=["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\xe2mb\u0103ta"],i=["AM","PM"],a=["am","pm"],c=["a.m.","p.m."],s={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?a[1]:a[0]},aa:function(n){return n.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(e,o){return o[n](e).toString()}})),{formatters:s,formattingTokensRegExp:t(s)}}},87122:function(n,e,o){var t=o(85626),r=o(58348);n.exports={distanceInWords:t(),format:r()}}}]);