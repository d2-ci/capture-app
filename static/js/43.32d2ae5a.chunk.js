webpackJsonp([43],{662:function(e,n,t){function r(){var e=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],n=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],t=["ne","po","to","sr","\u010de","pe","so"],r=["ned","pon","tor","sre","\u010det","pet","sob"],a=["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"],c=["AM","PM"],f=["am","pm"],i=["a.m.","p.m."],d={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return t[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?c[1]:c[0]},a:function(e){return e.getHours()/12>=1?f[1]:f[0]},aa:function(e){return e.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){d[e+"o"]=function(n,t){return o(t[e](n))}}),{formatters:d,formattingTokensRegExp:u(d)}}function o(e){return e+"."}var u=t(344);e.exports=r}});