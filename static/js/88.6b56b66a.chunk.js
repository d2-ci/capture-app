(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{636:function(e,n,t){var r=t(323);e.exports=function(){var e=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],n=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],t=["ne","po","to","sr","\u010de","pe","so"],o=["ned","pon","tor","sre","\u010det","pet","sob"],u=["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"],a=["AM","PM"],p=["am","pm"],c=["a.m.","p.m."],d={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return t[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?p[1]:p[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){d[e+"o"]=function(n,t){return t[e](n)+"."}}),{formatters:d,formattingTokensRegExp:r(d)}}}}]);