(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[232],{1155:function(e,t,n){var r=n(708);e.exports=function(){var e=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],t=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],n=["ne","po","to","sr","\u010de","pe","so"],o=["ned","pon","tor","sre","\u010det","pet","sob"],u=["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"],a=["AM","PM"],s=["am","pm"],p=["a.m.","p.m."],i={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?s[1]:s[0]},aa:function(e){return e.getHours()/12>=1?p[1]:p[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){i[e+"o"]=function(t,n){return n[e](t)+"."}})),{formatters:i,formattingTokensRegExp:r(i)}}}}]);