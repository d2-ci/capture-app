(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[151,197,198],{1184:function(n,o){n.exports=function(){var n={lessThanXSeconds:{one:"mas maliit sa isang segundo",other:"mas maliit sa {{count}} segundo"},xSeconds:{one:"1 segundo",other:"{{count}} segundo"},halfAMinute:"kalahating minuto",lessThanXMinutes:{one:"mas maliit sa isang minuto",other:"mas maliit sa {{count}} minuto"},xMinutes:{one:"1 minuto",other:"{{count}} minuto"},aboutXHours:{one:"mga 1 oras",other:"mga {{count}} oras"},xHours:{one:"1 oras",other:"{{count}} oras"},xDays:{one:"1 araw",other:"{{count}} araw"},aboutXMonths:{one:"mga 1 buwan",other:"mga {{count}} buwan"},xMonths:{one:"1 buwan",other:"{{count}} buwan"},aboutXYears:{one:"mga 1 taon",other:"mga {{count}} taon"},xYears:{one:"1 taon",other:"{{count}} taon"},overXYears:{one:"higit sa 1 taon",other:"higit sa {{count}} taon"},almostXYears:{one:"halos 1 taon",other:"halos {{count}} taon"}};return{localize:function(o,t,e){var a;return e=e||{},a="string"===typeof n[o]?n[o]:1===t?n[o].one:n[o].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?"sa loob ng "+a:a+" ang nakalipas":a}}}},1185:function(n,o,t){var e=t(646);n.exports=function(){var n=["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],o=["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],t=["Li","Lu","Ma","Mi","Hu","Bi","Sa"],a=["Lin","Lun","Mar","Miy","Huw","Biy","Sab"],r=["Linggo","Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado"],u=["NU","NT","NH","NG"],s=["nu","nt","nh","ng"],i=["ng umaga","ng tanghali","ng hapon","ng gabi"],g={MMM:function(o){return n[o.getMonth()]},MMMM:function(n){return o[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return r[n.getDay()]},A:function(n){return n.getHours()>12?n.getHours()%12<6?u[2]:u[3]:n.getHours()<12?u[0]:u[1]},a:function(n){return n.getHours()>12?n.getHours()%12<6?s[2]:s[3]:n.getHours()<12?s[0]:s[1]},aa:function(n){return n.getHours()>12?n.getHours()%12<6?i[2]:i[3]:n.getHours()<12?i[0]:i[1]}};return["M","D","DDD","d","Q","W"].forEach((function(n){g[n+"o"]=function(o,t){return"ika-"+t[n](o)}})),{formatters:g,formattingTokensRegExp:e(g)}}},2951:function(n,o,t){var e=t(1184),a=t(1185);n.exports={distanceInWords:e(),format:a()}}}]);