(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{467:function(e,n,r){var t=r(258);e.exports=function(){var e=["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],n=["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"],r=["dg","dl","dt","dc","dj","dv","ds"],u=["dge","dls","dts","dcs","djs","dvs","dss"],d=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],o=["AM","PM"],s=["am","pm"],a=["a.m.","p.m."],i={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return u[e.getDay()]},dddd:function(e){return d[e.getDay()]},A:function(e){return e.getHours()/12>=1?o[1]:o[0]},a:function(e){return e.getHours()/12>=1?s[1]:s[0]},aa:function(e){return e.getHours()/12>=1?a[1]:a[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){i[e+"o"]=function(n,r){return function(e){switch(e){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return e+"\xe8"}}(r[e](n))}}),{formatters:i,formattingTokensRegExp:t(i)}}}}]);