(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[44],{468:function(t,n,r){var e=r(254);t.exports=function(){var t=["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],n=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],r=["So","Mo","Di","Mi","Do","Fr","Sa"],o=["Son","Mon","Die","Mit","Don","Fre","Sam"],u=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],a=["AM","PM"],i=["am","pm"],M=["a.m.","p.m."],p={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return r[t.getDay()]},ddd:function(t){return o[t.getDay()]},dddd:function(t){return u[t.getDay()]},A:function(t){return t.getHours()/12>=1?a[1]:a[0]},a:function(t){return t.getHours()/12>=1?i[1]:i[0]},aa:function(t){return t.getHours()/12>=1?M[1]:M[0]}};return["M","D","DDD","d","Q","W"].forEach((function(t){p[t+"o"]=function(n,r){return r[t](n)+"."}})),{formatters:p,formattingTokensRegExp:e(p)}}}}]);