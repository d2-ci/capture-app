webpackJsonp([55],{593:function(n,r,t){function e(){var n=["jan","feb","mar","apr","mei","jun","jul","aug","sep","okt","nov","dec"],r=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],t=["zo","ma","di","wo","do","vr","za"],e=["zon","maa","din","woe","don","vri","zat"],u=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],d=["AM","PM"],i=["am","pm"],g=["a.m.","p.m."],f={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?d[1]:d[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?g[1]:g[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){f[n+"o"]=function(r,t){return a(t[n](r))}}),{formatters:f,formattingTokensRegExp:o(f)}}function a(n){return n+"e"}var o=t(299);n.exports=e}});