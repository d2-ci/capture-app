(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[62,68],{449:function(e,r){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var r=[];for(var t in e)e.hasOwnProperty(t)&&r.push(t);var o=n.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},507:function(e,r,n){var t=n(449);e.exports=function(){var e=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],r=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],n=["ne","po","to","sr","\u010de","pe","so"],o=["ned","pon","tor","sre","\u010det","pet","sob"],a=["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"],u=["AM","PM"],p=["am","pm"],s=["a.m.","p.m."],c={MMM:function(r){return e[r.getMonth()]},MMMM:function(e){return r[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?p[1]:p[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){c[e+"o"]=function(r,n){return n[e](r)+"."}})),{formatters:c,formattingTokensRegExp:t(c)}}}}]);