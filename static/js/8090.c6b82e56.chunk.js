(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[8090],{48240:function(n,r,t){var e=t(12519);n.exports=function(){var n=["jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],r=["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],t=["s\xf8","ma","ti","on","to","fr","l\xf8"],a=["s\xf8.","ma.","ti.","on.","to.","fr.","l\xf8."],u=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],o=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],f={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?o[1]:o[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){f[n+"o"]=function(r,t){return t[n](r)+"."}})),{formatters:f,formattingTokensRegExp:e(f)}}}}]);