webpackJsonp([87],{365:function(n,t,r){function e(){var n=["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],t=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],r=["So","Mo","Di","Mi","Do","Fr","Sa"],e=["Son","Mon","Die","Mit","Don","Fre","Sam"],a=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],i=["AM","PM"],M=["am","pm"],g=["a.m.","p.m."],c={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?M[1]:M[0]},aa:function(n){return n.getHours()/12>=1?g[1]:g[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){c[n+"o"]=function(t,r){return o(r[n](t))}}),{formatters:c,formattingTokensRegExp:u(c)}}function o(n){return n+"."}var u=r(196);n.exports=e}});
//# sourceMappingURL=87.bee795f4.chunk.js.map