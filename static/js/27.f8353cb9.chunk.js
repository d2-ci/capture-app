webpackJsonp([27,87,88],{364:function(e,n){function t(){function e(e,t,o){o=o||{};var r,a=o.addSuffix?n[e].withPreposition:n[e].standalone;return r="string"===typeof a?a:1===t?a.one:a.other.replace("{{count}}",t),o.addSuffix?o.comparison>0?"in "+r:"vor "+r:r}var n={lessThanXSeconds:{standalone:{one:"weniger als eine Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als einer Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"eine Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"einer Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als eine Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als einer Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"eine Minute",other:"{{count}} Minuten"},withPreposition:{one:"einer Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa eine Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa einer Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"eine Stunde",other:"{{count}} Stunden"},withPreposition:{one:"einer Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"ein Tag",other:"{{count}} Tage"},withPreposition:{one:"einem Tag",other:"{{count}} Tagen"}},aboutXMonths:{standalone:{one:"etwa ein Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa einem Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"ein Monat",other:"{{count}} Monate"},withPreposition:{one:"einem Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa ein Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa einem Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"ein Jahr",other:"{{count}} Jahre"},withPreposition:{one:"einem Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als ein Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als einem Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast ein Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast einem Jahr",other:"fast {{count}} Jahren"}}};return{localize:e}}e.exports=t},365:function(e,n,t){function o(){var e=["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],n=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],t=["So","Mo","Di","Mi","Do","Fr","Sa"],o=["Son","Mon","Die","Mit","Don","Fre","Sam"],i=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],u=["AM","PM"],s=["am","pm"],h=["a.m.","p.m."],c={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return t[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return i[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?s[1]:s[0]},aa:function(e){return e.getHours()/12>=1?h[1]:h[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){c[e+"o"]=function(n,t){return r(t[e](n))}}),{formatters:c,formattingTokensRegExp:a(c)}}function r(e){return e+"."}var a=t(196);e.exports=o},425:function(e,n,t){var o=t(364),r=t(365);e.exports={distanceInWords:o(),format:r()}}});
//# sourceMappingURL=27.f8353cb9.chunk.js.map