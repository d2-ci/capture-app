(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[62,68],{174:function(e,n){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(t);var o=r.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},416:function(e,n,r){var t=r(174);e.exports=function(){var e=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],n=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],r=["ne","po","to","sr","\u010de","pe","so"],o=["ned","pon","tor","sre","\u010det","pet","sob"],a=["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"],u=["AM","PM"],s=["am","pm"],p=["a.m.","p.m."],i={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?s[1]:s[0]},aa:function(e){return e.getHours()/12>=1?p[1]:p[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){i[e+"o"]=function(n,r){return r[e](n)+"."}})),{formatters:i,formattingTokensRegExp:t(i)}}}}]);