(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[231],{1228:function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"manj kot sekunda",two:"manj kot 2 sekundi",three:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},xSeconds:{one:"1 sekunda",two:"2 sekundi",three:"{{count}} sekunde",other:"{{count}} sekund"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot minuta",two:"manj kot 2 minuti",three:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},xMinutes:{one:"1 minuta",two:"2 minuti",three:"{{count}} minute",other:"{{count}} minut"},aboutXHours:{one:"pribli\u017eno 1 ura",two:"pribli\u017eno 2 uri",three:"pribli\u017eno {{count}} ure",other:"pribli\u017eno {{count}} ur"},xHours:{one:"1 ura",two:"2 uri",three:"{{count}} ure",other:"{{count}} ur"},xDays:{one:"1 dan",two:"2 dni",three:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"pribli\u017eno 1 mesec",two:"pribli\u017eno 2 meseca",three:"pribli\u017eno {{count}} mesece",other:"pribli\u017eno {{count}} mesecev"},xMonths:{one:"1 mesec",two:"2 meseca",three:"{{count}} meseci",other:"{{count}} mesecev"},aboutXYears:{one:"pribli\u017eno 1 leto",two:"pribli\u017eno 2 leti",three:"pribli\u017eno {{count}} leta",other:"pribli\u017eno {{count}} let"},xYears:{one:"1 leto",two:"2 leti",three:"{{count}} leta",other:"{{count}} let"},overXYears:{one:"ve\u010d kot 1 leto",two:"ve\u010d kot 2 leti",three:"ve\u010d kot {{count}} leta",other:"ve\u010d kot {{count}} let"},almostXYears:{one:"skoraj 1 leto",two:"skoraj 2 leti",three:"skoraj {{count}} leta",other:"skoraj {{count}} let"}};return{localize:function(t,o,n){var r;return n=n||{},r="string"===typeof e[t]?e[t]:1===o?e[t].one:2===o?e[t].two:3===o||4===o?e[t].three.replace("{{count}}",o):e[t].other.replace("{{count}}",o),n.addSuffix?(r=r.replace(/(minut|sekund|ur)(a)/,"$1o"),"xMonths"===t&&(r=r.replace(/(mesec)(i)/,"$1e")),n.comparison>0?"\u010dez "+r:r+" nazaj"):r}}}}}]);