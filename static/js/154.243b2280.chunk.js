(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[154,203,204],{1190:function(e,n){e.exports=function(){var e={lessThanXSeconds:{one:"kevesebb, mint egy m\xe1sodperce",other:"kevesebb, mint {{count}} m\xe1sodperce"},xSeconds:{one:"1 m\xe1sodperce",other:"{{count}} m\xe1sodperce"},halfAMinute:"f\xe9l perce",lessThanXMinutes:{one:"kevesebb, mint egy perce",other:"kevesebb, mint {{count}} perce"},xMinutes:{one:"1 perce",other:"{{count}} perce"},aboutXHours:{one:"k\xf6zel 1 \xf3r\xe1ja",other:"k\xf6zel {{count}} \xf3r\xe1ja"},xHours:{one:"1 \xf3r\xe1ja",other:"{{count}} \xf3r\xe1ja"},xDays:{one:"1 napja",other:"{{count}} napja"},aboutXMonths:{one:"k\xf6zel 1 h\xf3napja",other:"k\xf6zel {{count}} h\xf3napja"},xMonths:{one:"1 h\xf3napja",other:"{{count}} h\xf3napja"},aboutXYears:{one:"k\xf6zel 1 \xe9ve",other:"k\xf6zel {{count}} \xe9ve"},xYears:{one:"1 \xe9ve",other:"{{count}} \xe9ve"},overXYears:{one:"t\xf6bb, mint 1 \xe9ve",other:"t\xf6bb, mint {{count}} \xe9ve"},almostXYears:{one:"majdnem 1 \xe9ve",other:"majdnem {{count}} \xe9ve"}};return{localize:function(n,t,r){var o;return r=r||{},o="string"===typeof e[n]?e[n]:1===t?e[n].one:e[n].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?""+o:o+"":o}}}},1191:function(e,n,t){var r=t(646);e.exports=function(){var e=["Jan","Feb","M\xe1r","\xc1pr","M\xe1j","J\xfan","J\xfal","Aug","Sze","Okt","Nov","Dec"],n=["Janu\xe1r","Febru\xe1r","M\xe1rcius","\xc1prilis","M\xe1jus","J\xfanius","J\xfalius","Augusztus","Szeptember","Okt\xf3ber","November","December"],t=["Va","H\xe9","Ke","Sze","Cs","P\xe9","Szo"],o=["Vas","H\xe9t","Ked","Sze","Cs\xfc","P\xe9n","Szo"],u=["Vas\xe1rnap","H\xe9tf\u0151","Kedd","Szerda","Cs\xfct\xf6rt\xf6k","P\xe9ntek","Szombat"],a=["DE","DU"],s=["de","du"],c=["d\xe9lel\u0151tt","d\xe9lut\xe1n"],i={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return t[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?s[1]:s[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){i[e+"o"]=function(n,t){return function(e){var n=e%100;if(n>20||n<10)switch(n%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(t[e](n))}})),{formatters:i,formattingTokensRegExp:r(i)}}},2954:function(e,n,t){var r=t(1190),o=t(1191);e.exports={distanceInWords:r(),format:o()}}}]);