(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[49,68],{211:function(e,n){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(t);var u=r.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}},472:function(e,n,r){var t=r(211);e.exports=function(){var e=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],n=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],r=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],u=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],a=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],o=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],c={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return u[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?o[1]:o[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){c[e+"o"]=function(n,r){return function(e){switch(e){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+e}}(r[e](n))}})),{formatters:c,formattingTokensRegExp:t(c)}}}}]);