webpackJsonp([18,69,70],{637:function(n,t){function e(){function n(n,e,r){r=r||{};var a;return a="string"===typeof t[n]?t[n]:1===e?t[n].one:t[n].other.replace("{{count}}",e),r.addSuffix?r.comparison>0?"dalam waktu "+a:a+" yang lalu":a}var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};return{localize:n}}n.exports=e},638:function(n,t,e){function r(){var n=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],t=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],e=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],o=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],i=["AM","PM"],s=["am","pm"],c=["a.m.","p.m."],h={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){h[n+"o"]=function(t,e){return a(e[n](t))}}),{formatters:h,formattingTokensRegExp:u(h)}}function a(n){switch(n){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+n}}var u=e(345);n.exports=r},689:function(n,t,e){var r=e(637),a=e(638);n.exports={distanceInWords:r(),format:a()}}});