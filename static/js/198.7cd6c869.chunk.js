(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[198],{1134:function(n,e,t){var r=t(710);n.exports=function(){var n=["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],e=["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],t=["Li","Lu","Ma","Mi","Hu","Bi","Sa"],u=["Lin","Lun","Mar","Miy","Huw","Biy","Sab"],o=["Linggo","Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado"],a=["NU","NT","NH","NG"],i=["nu","nt","nh","ng"],s=["ng umaga","ng tanghali","ng hapon","ng gabi"],g={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){return n.getHours()>12?n.getHours()%12<6?a[2]:a[3]:n.getHours()<12?a[0]:a[1]},a:function(n){return n.getHours()>12?n.getHours()%12<6?i[2]:i[3]:n.getHours()<12?i[0]:i[1]},aa:function(n){return n.getHours()>12?n.getHours()%12<6?s[2]:s[3]:n.getHours()<12?s[0]:s[1]}};return["M","D","DDD","d","Q","W"].forEach((function(n){g[n+"o"]=function(e,t){return"ika-"+t[n](e)}})),{formatters:g,formattingTokensRegExp:r(g)}}}}]);