(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[88],{508:function(e,t,n){var r=n(253);e.exports=function(){var e=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],t=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],n=["ne","po","to","sr","\u010de","pe","so"],o=["ned","pon","tor","sre","\u010det","pet","sob"],u=["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"],a=["AM","PM"],p=["am","pm"],c=["a.m.","p.m."],s={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?p[1]:p[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){s[e+"o"]=function(t,n){return n[e](t)+"."}})),{formatters:s,formattingTokensRegExp:r(s)}}}}]);