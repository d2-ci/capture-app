webpackJsonp([16,65,66],{620:function(n,o){function e(){function n(n,e,t){t=t||{};var r;return r="string"===typeof o[n]?o[n]:1===e?o[n].one:o[n].other.replace("{{count}}",e),t.addSuffix?t.comparison>0?"tra "+r:r+" fa":r}var o={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"pi\xf9 di un anno",other:"pi\xf9 di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}};return{localize:n}}n.exports=e},621:function(n,o,e){function t(){var n=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],o=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],e=["do","lu","ma","me","gi","ve","sa"],t=["dom","lun","mar","mer","gio","ven","sab"],a=["domenica","luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato"],i=["AM","PM"],c=["am","pm"],s=["a.m.","p.m."],d={MMM:function(o){return n[o.getMonth()]},MMMM:function(n){return o[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?c[1]:c[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){d[n+"o"]=function(o,e){return r(e[n](o))}}),{formatters:d,formattingTokensRegExp:u(d)}}function r(n){return n+"\xba"}var u=e(323);n.exports=t},670:function(n,o,e){var t=e(620),r=e(621);n.exports={distanceInWords:t(),format:r()}}});