webpackJsonp([51],{654:function(n,r,e){function t(){var n=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],r=["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],e=["do","se","te","qa","qi","se","sa"],t=["dom","seg","ter","qua","qui","sex","s\xe1b"],u=["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"],i=["AM","PM"],f=["am","pm"],s=["a.m.","p.m."],d={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?f[1]:f[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){d[n+"o"]=function(r,e){return o(e[n](r))}}),{formatters:d,formattingTokensRegExp:a(d)}}function o(n){return n+"\xba"}var a=e(345);n.exports=t}});