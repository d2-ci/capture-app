(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[0,41,68,76],{176:function(n,e){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var e=[];for(var o in n)n.hasOwnProperty(o)&&e.push(o);var r=t.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")}},363:function(n,e){n.exports=function(){var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(e,t,o){var r;return o=o||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),o.addSuffix?o.comparison>0?"in "+r:r+" ago":r}}}},364:function(n,e,t){var o=t(176);n.exports=function(){var n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["AM","PM"],s=["am","pm"],c=["a.m.","p.m."],h={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){h[n+"o"]=function(e,t){return function(n){var e=n%100;if(e>20||e<10)switch(e%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"}(t[n](e))}})),{formatters:h,formattingTokensRegExp:o(h)}}},557:function(n,e,t){var o=t(363),r=t(364);n.exports={distanceInWords:o(),format:r()}}}]);