(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[210],{1196:function(e,n,t){var o=t(646);e.exports=function(){var e=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],n=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],t=["do","lu","ma","me","gi","ve","sa"],r=["dom","lun","mar","mer","gio","ven","sab"],a=["domenica","luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato"],u=["AM","PM"],i=["am","pm"],g=["a.m.","p.m."],d={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return t[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?g[1]:g[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){d[e+"o"]=function(n,t){return t[e](n)+"\xba"}})),{formatters:d,formattingTokensRegExp:o(d)}}}}]);