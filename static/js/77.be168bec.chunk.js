webpackJsonp([77],{624:function(n,r,t){function e(){var n=["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],r=["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],t=["Li","Lu","Ma","Mi","Hu","Bi","Sa"],e=["Lin","Lun","Mar","Miy","Huw","Biy","Sab"],i=["Linggo","Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado"],a=["NU","NT","NH","NG"],g=["nu","nt","nh","ng"],s=["ng umaga","ng tanghali","ng hapon","ng gabi"],M={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return i[n.getDay()]},A:function(n){if(n.getHours()>12){return n.getHours()%12<6?a[2]:a[3]}return n.getHours()<12?a[0]:a[1]},a:function(n){if(n.getHours()>12){return n.getHours()%12<6?g[2]:g[3]}return n.getHours()<12?g[0]:g[1]},aa:function(n){if(n.getHours()>12){return n.getHours()%12<6?s[2]:s[3]}return n.getHours()<12?s[0]:s[1]}};return["M","D","DDD","d","Q","W"].forEach(function(n){M[n+"o"]=function(r,t){return u(t[n](r))}}),{formatters:M,formattingTokensRegExp:o(M)}}function u(n){return"ika-"+n}var o=t(342);n.exports=e}});