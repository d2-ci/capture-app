(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[206],{1189:function(e,n,t){var r=t(640);e.exports=function(){var e=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],n=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],t=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],u=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],a=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],i=["AM","PM"],o=["am","pm"],s=["a.m.","p.m."],c={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return t[e.getDay()]},ddd:function(e){return u[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?i[1]:i[0]},a:function(e){return e.getHours()/12>=1?o[1]:o[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){c[e+"o"]=function(n,t){return function(e){switch(e){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+e}}(t[e](n))}})),{formatters:c,formattingTokensRegExp:r(c)}}}}]);