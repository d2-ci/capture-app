(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[41,68],{191:function(r,n){var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];r.exports=function(r){var n=[];for(var t in r)r.hasOwnProperty(t)&&n.push(t);var u=e.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}},406:function(r,n,e){var t=e(191);r.exports=function(){var r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],e=["Su","Mo","Tu","We","Th","Fr","Sa"],u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=["AM","PM"],s=["am","pm"],c=["a.m.","p.m."],i={MMM:function(n){return r[n.getMonth()]},MMMM:function(r){return n[r.getMonth()]},dd:function(r){return e[r.getDay()]},ddd:function(r){return u[r.getDay()]},dddd:function(r){return a[r.getDay()]},A:function(r){return r.getHours()/12>=1?o[1]:o[0]},a:function(r){return r.getHours()/12>=1?s[1]:s[0]},aa:function(r){return r.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(r){i[r+"o"]=function(n,e){return function(r){var n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"}(e[r](n))}})),{formatters:i,formattingTokensRegExp:t(i)}}}}]);