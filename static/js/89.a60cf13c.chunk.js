webpackJsonp([89],{447:function(n,r,t){function e(){var n=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],r=["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],t=["s\xf8","ma","ti","on","to","fr","l\xf8"],e=["s\xf8n","man","tir","ons","tor","fre","l\xf8r"],u=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],f=["AM","PM"],i=["am","pm"],d=["a.m.","p.m."],g={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?f[1]:f[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){g[n+"o"]=function(r,t){return a(t[n](r))}}),{formatters:g,formattingTokensRegExp:o(g)}}function a(n){return n+"."}var o=t(230);n.exports=e}});
//# sourceMappingURL=89.a60cf13c.chunk.js.map