(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[10,44,68,79],{179:function(u,t){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];u.exports=function(u){var t=[];for(var e in u)u.hasOwnProperty(e)&&t.push(e);var o=n.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},396:function(u,t){u.exports=function(){function u(u){return u.replace(/sekuntia?/,"sekunnin")}function t(u){return u.replace(/minuuttia?/,"minuutin")}function n(u){return u.replace(/tuntia?/,"tunnin")}function e(u){return u.replace(/(kuukausi|kuukautta)/,"kuukauden")}function o(u){return u.replace(/(vuosi|vuotta)/,"vuoden")}var r={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:u},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:u},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(u){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:t},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:t},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:n},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:n},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:function(u){return u.replace(/p\xe4iv\xe4\xe4?/,"p\xe4iv\xe4n")}},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:e},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:e},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:o},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:o},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:o},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:o}};return{localize:function(u,t,n){n=n||{};var e=r[u],o=1===t?e.one:e.other.replace("{{count}}",t);return n.addSuffix?n.comparison>0?e.futureTense(o)+" kuluttua":o+" sitten":o}}}},397:function(u,t,n){var e=n(179);u.exports=function(){var u=["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],t=["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],n=["su","ma","ti","ke","to","pe","la"],o=["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"];function r(u){return u.getHours()<12?"AP":"IP"}var i={MMM:function(t){return u[t.getMonth()]},MMMM:function(u){return t[u.getMonth()]},dd:function(u){return n[u.getDay()]},ddd:function(u){return n[u.getDay()]},dddd:function(u){return o[u.getDay()]},A:r,a:r,aa:r};return["M","D","DDD","d","Q","W"].forEach((function(u){i[u+"o"]=function(t,n){return n[u](t).toString()+"."}})),{formatters:i,formattingTokensRegExp:e(i)}}},588:function(u,t,n){var e=n(396),o=n(397);u.exports={distanceInWords:e(),format:o()}}}]);