(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[162,219,220],{1219:function(n,e){n.exports=function(){var n={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}};return{localize:function(e,o,r){var t;return r=r||{},t="string"===typeof n[e]?n[e]:1===o?n[e].one:n[e].other.replace("{{count}}",o),r.addSuffix?r.comparison>0?"over "+t:t+" geleden":t}}}},1220:function(n,e,o){var r=o(736);n.exports=function(){var n=["jan","feb","mar","apr","mei","jun","jul","aug","sep","okt","nov","dec"],e=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],o=["zo","ma","di","wo","do","vr","za"],t=["zon","maa","din","woe","don","vri","zat"],a=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],u=["AM","PM"],d=["am","pm"],i=["a.m.","p.m."],s={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?d[1]:d[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(e,o){return o[n](e)+"e"}})),{formatters:s,formattingTokensRegExp:r(s)}}},2342:function(n,e,o){var r=o(1219),t=o(1220);n.exports={distanceInWords:r(),format:t()}}}]);