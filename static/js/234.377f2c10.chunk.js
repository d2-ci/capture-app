(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[234],{1234:function(t,n,e){var r=e(736);t.exports=function(){var t=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],n=["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],e=["ne","po","ut","sr","\u010de","pe","su"],a=["ned","pon","uto","sre","\u010det","pet","sub"],u=["nedelja","ponedeljak","utorak","sreda","\u010detvrtak","petak","subota"],o=["AM","PM"],s=["am","pm"],p=["a.m.","p.m."],d={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return e[t.getDay()]},ddd:function(t){return a[t.getDay()]},dddd:function(t){return u[t.getDay()]},A:function(t){return t.getHours()/12>=1?o[1]:o[0]},a:function(t){return t.getHours()/12>=1?s[1]:s[0]},aa:function(t){return t.getHours()/12>=1?p[1]:p[0]}};return["M","D","DDD","d","Q","W"].forEach((function(t){d[t+"o"]=function(n,e){return e[t](n)+"."}})),{formatters:d,formattingTokensRegExp:r(d)}}}}]);