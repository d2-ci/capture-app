webpackJsonp([22,77,78],{509:function(n,o){function t(){function n(n,t,e){e=e||{};var a;return a="string"===typeof o[n]?o[n]:1===t?o[n].one:o[n].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?"sa loob ng "+a:a+" ang nakalipas":a}var o={lessThanXSeconds:{one:"mas maliit sa isang segundo",other:"mas maliit sa {{count}} segundo"},xSeconds:{one:"1 segundo",other:"{{count}} segundo"},halfAMinute:"kalahating minuto",lessThanXMinutes:{one:"mas maliit sa isang minuto",other:"mas maliit sa {{count}} minuto"},xMinutes:{one:"1 minuto",other:"{{count}} minuto"},aboutXHours:{one:"mga 1 oras",other:"mga {{count}} oras"},xHours:{one:"1 oras",other:"{{count}} oras"},xDays:{one:"1 araw",other:"{{count}} araw"},aboutXMonths:{one:"mga 1 buwan",other:"mga {{count}} buwan"},xMonths:{one:"1 buwan",other:"{{count}} buwan"},aboutXYears:{one:"mga 1 taon",other:"mga {{count}} taon"},xYears:{one:"1 taon",other:"{{count}} taon"},overXYears:{one:"higit sa 1 taon",other:"higit sa {{count}} taon"},almostXYears:{one:"halos 1 taon",other:"halos {{count}} taon"}};return{localize:n}}n.exports=t},510:function(n,o,t){function e(){var n=["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],o=["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],t=["Li","Lu","Ma","Mi","Hu","Bi","Sa"],e=["Lin","Lun","Mar","Miy","Huw","Biy","Sab"],u=["Linggo","Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado"],s=["NU","NT","NH","NG"],i=["nu","nt","nh","ng"],g=["ng umaga","ng tanghali","ng hapon","ng gabi"],c={MMM:function(o){return n[o.getMonth()]},MMMM:function(n){return o[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){if(n.getHours()>12){return n.getHours()%12<6?s[2]:s[3]}return n.getHours()<12?s[0]:s[1]},a:function(n){if(n.getHours()>12){return n.getHours()%12<6?i[2]:i[3]}return n.getHours()<12?i[0]:i[1]},aa:function(n){if(n.getHours()>12){return n.getHours()%12<6?g[2]:g[3]}return n.getHours()<12?g[0]:g[1]}};return["M","D","DDD","d","Q","W"].forEach(function(n){c[n+"o"]=function(o,t){return a(t[n](o))}}),{formatters:c,formattingTokensRegExp:r(c)}}function a(n){return"ika-"+n}var r=t(256);n.exports=e},565:function(n,o,t){var e=t(509),a=t(510);n.exports={distanceInWords:e(),format:a()}}});
//# sourceMappingURL=22.8338f693.chunk.js.map