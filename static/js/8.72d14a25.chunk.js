(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[8,42,68,77],{211:function(o,n){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];o.exports=function(o){var n=[];for(var e in o)o.hasOwnProperty(e)&&n.push(e);var r=t.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")}},459:function(o,n){o.exports=function(){var o={lessThanXSeconds:{one:"malpli ol sekundo",other:"malpli ol {{count}} sekundoj"},xSeconds:{one:"1 sekundo",other:"{{count}} sekundoj"},halfAMinute:"duonminuto",lessThanXMinutes:{one:"malpli ol minuto",other:"malpli ol {{count}} minutoj"},xMinutes:{one:"1 minuto",other:"{{count}} minutoj"},aboutXHours:{one:"proksimume 1 horo",other:"proksimume {{count}} horoj"},xHours:{one:"1 horo",other:"{{count}} horoj"},xDays:{one:"1 tago",other:"{{count}} tagoj"},aboutXMonths:{one:"proksimume 1 monato",other:"proksimume {{count}} monatoj"},xMonths:{one:"1 monato",other:"{{count}} monatoj"},aboutXYears:{one:"proksimume 1 jaro",other:"proksimume {{count}} jaroj"},xYears:{one:"1 jaro",other:"{{count}} jaroj"},overXYears:{one:"pli ol 1 jaro",other:"pli ol {{count}} jaroj"},almostXYears:{one:"preska\u016d 1 jaro",other:"preska\u016d {{count}} jaroj"}};return{localize:function(n,t,e){var r;return e=e||{},r="string"===typeof o[n]?o[n]:1===t?o[n].one:o[n].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?"post "+r:"anta\u016d "+r:r}}}},460:function(o,n,t){var e=t(211);o.exports=function(){var o=["jan","feb","mar","apr","maj","jun","jul","a\u016dg","sep","okt","nov","dec"],n=["januaro","februaro","marto","aprilo","majo","junio","julio","a\u016dgusto","septembro","oktobro","novembro","decembro"],t=["di","lu","ma","me","\u0135a","ve","sa"],r=["dim","lun","mar","mer","\u0135a\u016d","ven","sab"],a=["diman\u0109o","lundo","mardo","merkredo","\u0135a\u016ddo","vendredo","sabato"],u=["A.T.M.","P.T.M."],s=["a.t.m.","p.t.m."],i=["anta\u016dtagmeze","posttagmeze"],m={MMM:function(n){return o[n.getMonth()]},MMMM:function(o){return n[o.getMonth()]},dd:function(o){return t[o.getDay()]},ddd:function(o){return r[o.getDay()]},dddd:function(o){return a[o.getDay()]},A:function(o){return o.getHours()/12>=1?u[1]:u[0]},a:function(o){return o.getHours()/12>=1?s[1]:s[0]},aa:function(o){return o.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(o){m[o+"o"]=function(n,t){return t[o](n)+"-a"}})),{formatters:m,formattingTokensRegExp:e(m)}}},679:function(o,n,t){var e=t(459),r=t(460);o.exports={distanceInWords:e(),format:r()}}}]);