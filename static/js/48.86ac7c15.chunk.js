(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[48,68],{179:function(r,t){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];r.exports=function(r){var t=[];for(var e in r)r.hasOwnProperty(e)&&t.push(e);var u=n.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}},421:function(r,t,n){var e=n(179);r.exports=function(){var r=["Jan","Feb","M\xe1r","\xc1pr","M\xe1j","J\xfan","J\xfal","Aug","Sze","Okt","Nov","Dec"],t=["Janu\xe1r","Febru\xe1r","M\xe1rcius","\xc1prilis","M\xe1jus","J\xfanius","J\xfalius","Augusztus","Szeptember","Okt\xf3ber","November","December"],n=["Va","H\xe9","Ke","Sze","Cs","P\xe9","Szo"],u=["Vas","H\xe9t","Ked","Sze","Cs\xfc","P\xe9n","Szo"],s=["Vas\xe1rnap","H\xe9tf\u0151","Kedd","Szerda","Cs\xfct\xf6rt\xf6k","P\xe9ntek","Szombat"],o=["DE","DU"],a=["de","du"],i=["d\xe9lel\u0151tt","d\xe9lut\xe1n"],c={MMM:function(t){return r[t.getMonth()]},MMMM:function(r){return t[r.getMonth()]},dd:function(r){return n[r.getDay()]},ddd:function(r){return u[r.getDay()]},dddd:function(r){return s[r.getDay()]},A:function(r){return r.getHours()/12>=1?o[1]:o[0]},a:function(r){return r.getHours()/12>=1?a[1]:a[0]},aa:function(r){return r.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(r){c[r+"o"]=function(t,n){return function(r){var t=r%100;if(t>20||t<10)switch(t%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"}(n[r](t))}})),{formatters:c,formattingTokensRegExp:e(c)}}}}]);