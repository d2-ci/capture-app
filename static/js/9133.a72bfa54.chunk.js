(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[9133],{9133:function(u,t,n){var a=n(12519);u.exports=function(){var u=["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],t=["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],n=["su","ma","ti","ke","to","pe","la"],e=["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"];function i(u){return u.getHours()<12?"AP":"IP"}var o={MMM:function(t){return u[t.getMonth()]},MMMM:function(u){return t[u.getMonth()]},dd:function(u){return n[u.getDay()]},ddd:function(u){return n[u.getDay()]},dddd:function(u){return e[u.getDay()]},A:i,a:i,aa:i};return["M","D","DDD","d","Q","W"].forEach((function(u){o[u+"o"]=function(t,n){return n[u](t).toString()+"."}})),{formatters:o,formattingTokensRegExp:a(o)}}}}]);