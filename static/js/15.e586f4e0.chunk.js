(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[15,49,68,84],{211:function(n,t){var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var t=[];for(var r in n)n.hasOwnProperty(r)&&t.push(r);var a=e.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g")}},473:function(n,t){n.exports=function(){var n={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};return{localize:function(t,e,r){var a;return r=r||{},a="string"===typeof n[t]?n[t]:1===e?n[t].one:n[t].other.replace("{{count}}",e),r.addSuffix?r.comparison>0?"dalam waktu "+a:a+" yang lalu":a}}}},474:function(n,t,e){var r=e(211);n.exports=function(){var n=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],t=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],e=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],a=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],o=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],h={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){h[n+"o"]=function(t,e){return function(n){switch(n){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+n}}(e[n](t))}})),{formatters:h,formattingTokensRegExp:r(h)}}},686:function(n,t,e){var r=e(473),a=e(474);n.exports={distanceInWords:r(),format:a()}}}]);