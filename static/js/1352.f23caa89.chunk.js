(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[1352,1566,8420,6345],{1566:function(u){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];u.exports=function(u){var t=[];for(var e in u)u.hasOwnProperty(e)&&t.push(e);var o=n.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},28420:function(u){u.exports=function(){function u(u){return u.replace(/sekuntia?/,"sekunnin")}function n(u){return u.replace(/minuuttia?/,"minuutin")}function t(u){return u.replace(/tuntia?/,"tunnin")}function e(u){return u.replace(/(kuukausi|kuukautta)/,"kuukauden")}function o(u){return u.replace(/(vuosi|vuotta)/,"vuoden")}var r={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:u},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:u},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(u){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:n},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:n},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:t},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:t},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:function(u){return u.replace(/p\xe4iv\xe4\xe4?/,"p\xe4iv\xe4n")}},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:e},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:e},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:o},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:o},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:o},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:o}};return{localize:function(u,n,t){t=t||{};var e=r[u],o=1===n?e.one:e.other.replace("{{count}}",n);return t.addSuffix?t.comparison>0?e.futureTense(o)+" kuluttua":o+" sitten":o}}}},68726:function(u,n,t){var e=t(1566);u.exports=function(){var u=["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],n=["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],t=["su","ma","ti","ke","to","pe","la"],o=["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"];function r(u){return u.getHours()<12?"AP":"IP"}var i={MMM:function(n){return u[n.getMonth()]},MMMM:function(u){return n[u.getMonth()]},dd:function(u){return t[u.getDay()]},ddd:function(u){return t[u.getDay()]},dddd:function(u){return o[u.getDay()]},A:r,a:r,aa:r};return["M","D","DDD","d","Q","W"].forEach((function(u){i[u+"o"]=function(n,t){return t[u](n).toString()+"."}})),{formatters:i,formattingTokensRegExp:e(i)}}},21352:function(u,n,t){var e=t(28420),o=t(68726);u.exports={distanceInWords:e(),format:o()}}}]);