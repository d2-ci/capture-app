(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[2],{2:function(n,e,r){var t=r(1566);n.exports=function(){var n=["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],e=["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],r=["Li","Lu","Ma","Mi","Hu","Bi","Sa"],u=["Lin","Lun","Mar","Miy","Huw","Biy","Sab"],o=["Linggo","Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado"],a=["NU","NT","NH","NG"],i=["nu","nt","nh","ng"],g=["ng umaga","ng tanghali","ng hapon","ng gabi"],s={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){return n.getHours()>12?n.getHours()%12<6?a[2]:a[3]:n.getHours()<12?a[0]:a[1]},a:function(n){return n.getHours()>12?n.getHours()%12<6?i[2]:i[3]:n.getHours()<12?i[0]:i[1]},aa:function(n){return n.getHours()>12?n.getHours()%12<6?g[2]:g[3]:n.getHours()<12?g[0]:g[1]}};return["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(e,r){return"ika-"+r[n](e)}})),{formatters:s,formattingTokensRegExp:t(s)}}}}]);