(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[168,231,232],{1218:function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"manj kot sekunda",two:"manj kot 2 sekundi",three:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},xSeconds:{one:"1 sekunda",two:"2 sekundi",three:"{{count}} sekunde",other:"{{count}} sekund"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot minuta",two:"manj kot 2 minuti",three:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},xMinutes:{one:"1 minuta",two:"2 minuti",three:"{{count}} minute",other:"{{count}} minut"},aboutXHours:{one:"pribli\u017eno 1 ura",two:"pribli\u017eno 2 uri",three:"pribli\u017eno {{count}} ure",other:"pribli\u017eno {{count}} ur"},xHours:{one:"1 ura",two:"2 uri",three:"{{count}} ure",other:"{{count}} ur"},xDays:{one:"1 dan",two:"2 dni",three:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"pribli\u017eno 1 mesec",two:"pribli\u017eno 2 meseca",three:"pribli\u017eno {{count}} mesece",other:"pribli\u017eno {{count}} mesecev"},xMonths:{one:"1 mesec",two:"2 meseca",three:"{{count}} meseci",other:"{{count}} mesecev"},aboutXYears:{one:"pribli\u017eno 1 leto",two:"pribli\u017eno 2 leti",three:"pribli\u017eno {{count}} leta",other:"pribli\u017eno {{count}} let"},xYears:{one:"1 leto",two:"2 leti",three:"{{count}} leta",other:"{{count}} let"},overXYears:{one:"ve\u010d kot 1 leto",two:"ve\u010d kot 2 leti",three:"ve\u010d kot {{count}} leta",other:"ve\u010d kot {{count}} let"},almostXYears:{one:"skoraj 1 leto",two:"skoraj 2 leti",three:"skoraj {{count}} leta",other:"skoraj {{count}} let"}};return{localize:function(t,o,n){var r;return n=n||{},r="string"===typeof e[t]?e[t]:1===o?e[t].one:2===o?e[t].two:3===o||4===o?e[t].three.replace("{{count}}",o):e[t].other.replace("{{count}}",o),n.addSuffix?(r=r.replace(/(minut|sekund|ur)(a)/,"$1o"),"xMonths"===t&&(r=r.replace(/(mesec)(i)/,"$1e")),n.comparison>0?"\u010dez "+r:r+" nazaj"):r}}}},1219:function(e,t,o){var n=o(647);e.exports=function(){var e=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],t=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],o=["ne","po","to","sr","\u010de","pe","so"],r=["ned","pon","tor","sre","\u010det","pet","sob"],u=["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"],a=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],c={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){c[e+"o"]=function(t,o){return o[e](t)+"."}})),{formatters:c,formattingTokensRegExp:n(c)}}},2968:function(e,t,o){var n=o(1218),r=o(1219);e.exports={distanceInWords:n(),format:r()}}}]);