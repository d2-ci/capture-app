(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{551:function(n,e,o){var t=o(293);n.exports=function(){var n=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],e=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],o=["do","lu","ma","me","gi","ve","sa"],r=["dom","lun","mar","mer","gio","ven","sab"],a=["domenica","luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato"],u=["AM","PM"],i=["am","pm"],g=["a.m.","p.m."],d={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?g[1]:g[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){d[n+"o"]=function(e,o){return o[n](e)+"\xba"}}),{formatters:d,formattingTokensRegExp:t(d)}}}}]);