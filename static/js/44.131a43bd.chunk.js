(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{460:function(n,t,r){var e=r(260);n.exports=function(){var n=["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],t=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],r=["So","Mo","Di","Mi","Do","Fr","Sa"],o=["Son","Mon","Die","Mit","Don","Fre","Sam"],u=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],a=["AM","PM"],i=["am","pm"],M=["a.m.","p.m."],g={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?M[1]:M[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){g[n+"o"]=function(t,r){return r[n](t)+"."}}),{formatters:g,formattingTokensRegExp:e(g)}}}}]);