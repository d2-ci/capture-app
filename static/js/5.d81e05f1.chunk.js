(window.webpackJsonp=window.webpackJsonp||[]).push([[5,38,68,73],{438:function(n,e){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var e=[];for(var t in n)n.hasOwnProperty(t)&&e.push(t);var o=r.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},449:function(n,e){n.exports=function(){var n={lessThanXSeconds:{one:"mindre end et sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minut",lessThanXMinutes:{one:"mindre end et minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXMonths:{one:"cirka 1 m\xe5ned",other:"cirka {{count}} m\xe5neder"},xMonths:{one:"1 m\xe5ned",other:"{{count}} m\xe5neder"},aboutXYears:{one:"cirka 1 \xe5r",other:"cirka {{count}} \xe5r"},xYears:{one:"1 \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over 1 \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"n\xe6sten 1 \xe5r",other:"n\xe6sten {{count}} \xe5r"}};return{localize:function(e,r,t){var o;return t=t||{},o="string"===typeof n[e]?n[e]:1===r?n[e].one:n[e].other.replace("{{count}}",r),t.addSuffix?t.comparison>0?"om "+o:o+" siden":o}}}},450:function(n,e,r){var t=r(438);n.exports=function(){var n=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],e=["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],r=["s\xf8","ma","ti","on","to","fr","l\xf8"],o=["s\xf8n","man","tir","ons","tor","fre","l\xf8r"],u=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],a=["AM","PM"],s=["am","pm"],i=["a.m.","p.m."],c={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){c[n+"o"]=function(e,r){return r[n](e)+"."}}),{formatters:c,formattingTokensRegExp:t(c)}}},512:function(n,e,r){var t=r(449),o=r(450);n.exports={distanceInWords:t(),format:o()}}}]);