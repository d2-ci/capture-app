(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[182],{1168:function(e,n,t){var r=t(645);e.exports=function(){var e=["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],n=["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"],t=["dg","dl","dt","dc","dj","dv","ds"],s=["dge","dls","dts","dcs","djs","dvs","dss"],u=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],d=["AM","PM"],o=["am","pm"],a=["a.m.","p.m."],i={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return t[e.getDay()]},ddd:function(e){return s[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?d[1]:d[0]},a:function(e){return e.getHours()/12>=1?o[1]:o[0]},aa:function(e){return e.getHours()/12>=1?a[1]:a[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){i[e+"o"]=function(n,t){return function(e){switch(e){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return e+"\xe8"}}(t[e](n))}})),{formatters:i,formattingTokensRegExp:r(i)}}}}]);