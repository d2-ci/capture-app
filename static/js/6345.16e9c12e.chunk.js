(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[6345,1566],{1566:function(u){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];u.exports=function(u){var n=[];for(var a in u)u.hasOwnProperty(a)&&n.push(a);var r=t.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")}},68726:function(u,t,n){var a=n(1566);u.exports=function(){var u=["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],t=["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],n=["su","ma","ti","ke","to","pe","la"],r=["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"];function e(u){return u.getHours()<12?"AP":"IP"}var o={MMM:function(t){return u[t.getMonth()]},MMMM:function(u){return t[u.getMonth()]},dd:function(u){return n[u.getDay()]},ddd:function(u){return n[u.getDay()]},dddd:function(u){return r[u.getDay()]},A:e,a:e,aa:e};return["M","D","DDD","d","Q","W"].forEach((function(u){o[u+"o"]=function(t,n){return n[u](t).toString()+"."}})),{formatters:o,formattingTokensRegExp:a(o)}}}}]);