(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[206],{1281:function(t,e,n){var r=n(810);t.exports=function(){var t=["Jan","Feb","M\xe1r","\xc1pr","M\xe1j","J\xfan","J\xfal","Aug","Sze","Okt","Nov","Dec"],e=["Janu\xe1r","Febru\xe1r","M\xe1rcius","\xc1prilis","M\xe1jus","J\xfanius","J\xfalius","Augusztus","Szeptember","Okt\xf3ber","November","December"],n=["Va","H\xe9","Ke","Sze","Cs","P\xe9","Szo"],u=["Vas","H\xe9t","Ked","Sze","Cs\xfc","P\xe9n","Szo"],s=["Vas\xe1rnap","H\xe9tf\u0151","Kedd","Szerda","Cs\xfct\xf6rt\xf6k","P\xe9ntek","Szombat"],o=["DE","DU"],a=["de","du"],i=["d\xe9lel\u0151tt","d\xe9lut\xe1n"],c={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return u[t.getDay()]},dddd:function(t){return s[t.getDay()]},A:function(t){return t.getHours()/12>=1?o[1]:o[0]},a:function(t){return t.getHours()/12>=1?a[1]:a[0]},aa:function(t){return t.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(t){c[t+"o"]=function(e,n){return function(t){var e=t%100;if(e>20||e<10)switch(e%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"}(n[t](e))}})),{formatters:c,formattingTokensRegExp:r(c)}}}}]);