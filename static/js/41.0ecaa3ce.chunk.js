(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[41,68],{452:function(r,n){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];r.exports=function(r){var n=[];for(var e in r)r.hasOwnProperty(e)&&n.push(e);var u=t.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}},454:function(r,n,t){var e=t(452);r.exports=function(){var r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],t=["Su","Mo","Tu","We","Th","Fr","Sa"],u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=["AM","PM"],c=["am","pm"],s=["a.m.","p.m."],i={MMM:function(n){return r[n.getMonth()]},MMMM:function(r){return n[r.getMonth()]},dd:function(r){return t[r.getDay()]},ddd:function(r){return u[r.getDay()]},dddd:function(r){return a[r.getDay()]},A:function(r){return r.getHours()/12>=1?o[1]:o[0]},a:function(r){return r.getHours()/12>=1?c[1]:c[0]},aa:function(r){return r.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(r){i[r+"o"]=function(n,t){return function(r){var n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"}(t[r](n))}})),{formatters:i,formattingTokensRegExp:e(i)}}}}]);