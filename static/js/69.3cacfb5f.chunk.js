webpackJsonp([69],{638:function(e,n,t){function r(){var e=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],n=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],t=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],i=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],o=["AM","PM"],c=["am","pm"],M=["a.m.","p.m."],f={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return t[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return i[e.getDay()]},A:function(e){return e.getHours()/12>=1?o[1]:o[0]},a:function(e){return e.getHours()/12>=1?c[1]:c[0]},aa:function(e){return e.getHours()/12>=1?M[1]:M[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){f[e+"o"]=function(n,t){return u(t[e](n))}}),{formatters:f,formattingTokensRegExp:a(f)}}function u(e){switch(e){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+e}}var a=t(348);e.exports=r}});