webpackJsonp([28,89,90],{446:function(n,e){function t(){function n(n,t,r){r=r||{};var o;return o="string"===typeof e[n]?e[n]:1===t?e[n].one:e[n].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"om "+o:o+" siden":o}var e={lessThanXSeconds:{one:"mindre end et sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minut",lessThanXMinutes:{one:"mindre end et minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXMonths:{one:"cirka 1 m\xe5ned",other:"cirka {{count}} m\xe5neder"},xMonths:{one:"1 m\xe5ned",other:"{{count}} m\xe5neder"},aboutXYears:{one:"cirka 1 \xe5r",other:"cirka {{count}} \xe5r"},xYears:{one:"1 \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over 1 \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"n\xe6sten 1 \xe5r",other:"n\xe6sten {{count}} \xe5r"}};return{localize:n}}n.exports=t},447:function(n,e,t){function r(){var n=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],e=["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],t=["s\xf8","ma","ti","on","to","fr","l\xf8"],r=["s\xf8n","man","tir","ons","tor","fre","l\xf8r"],a=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],i=["AM","PM"],s=["am","pm"],c=["a.m.","p.m."],d={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){d[n+"o"]=function(e,t){return o(t[n](e))}}),{formatters:d,formattingTokensRegExp:u(d)}}function o(n){return n+"."}var u=t(231);n.exports=r},508:function(n,e,t){var r=t(446),o=t(447);n.exports={distanceInWords:r(),format:o()}}});
//# sourceMappingURL=28.be6d43c2.chunk.js.map