(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{547:function(n,e,t){var r=t(293);n.exports=function(){var n=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],e=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],t=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],u=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],a=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],o=["AM","PM"],i=["am","pm"],c=["a.m.","p.m."],s={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?o[1]:o[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){s[n+"o"]=function(e,t){return function(n){switch(n){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+n}}(t[n](e))}}),{formatters:s,formattingTokensRegExp:r(s)}}}}]);