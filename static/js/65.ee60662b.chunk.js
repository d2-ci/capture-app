webpackJsonp([65],{471:function(n,e,t){function o(){var n=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],e=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],t=["do","lu","ma","me","gi","ve","sa"],o=["dom","lun","mar","mer","gio","ven","sab"],a=["domenica","luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato"],i=["AM","PM"],g=["am","pm"],m=["a.m.","p.m."],d={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?g[1]:g[0]},aa:function(n){return n.getHours()/12>=1?m[1]:m[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){d[n+"o"]=function(e,t){return r(t[n](e))}}),{formatters:d,formattingTokensRegExp:u(d)}}function r(n){return n+"\xba"}var u=t(230);n.exports=o}});
//# sourceMappingURL=65.ee60662b.chunk.js.map