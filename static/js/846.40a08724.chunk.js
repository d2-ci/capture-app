(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[846,1566],{1566:function(n){var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var r=[];for(var t in n)n.hasOwnProperty(t)&&r.push(t);var a=e.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g")}},60846:function(n,e,r){var t=r(1566);n.exports=function(){var n=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],e=["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],r=["ne","po","ut","sr","\u010de","pe","su"],a=["ned","pon","uto","sre","\u010det","pet","sub"],u=["nedelja","ponedeljak","utorak","sreda","\u010detvrtak","petak","subota"],o=["AM","PM"],s=["am","pm"],p=["a.m.","p.m."],f={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?o[1]:o[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?p[1]:p[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){f[n+"o"]=function(e,r){return r[n](e)+"."}})),{formatters:f,formattingTokensRegExp:t(f)}}}}]);