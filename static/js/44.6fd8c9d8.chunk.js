(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[44,68],{189:function(u,t){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];u.exports=function(u){var t=[];for(var a in u)u.hasOwnProperty(a)&&t.push(a);var r=n.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")}},406:function(u,t,n){var a=n(189);u.exports=function(){var u=["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],t=["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],n=["su","ma","ti","ke","to","pe","la"],r=["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"];function o(u){return u.getHours()<12?"AP":"IP"}var e={MMM:function(t){return u[t.getMonth()]},MMMM:function(u){return t[u.getMonth()]},dd:function(u){return n[u.getDay()]},ddd:function(u){return n[u.getDay()]},dddd:function(u){return r[u.getDay()]},A:o,a:o,aa:o};return["M","D","DDD","d","Q","W"].forEach((function(u){e[u+"o"]=function(t,n){return n[u](t).toString()+"."}})),{formatters:e,formattingTokensRegExp:a(e)}}}}]);