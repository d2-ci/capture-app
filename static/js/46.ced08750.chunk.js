(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[46,68],{197:function(r,n){var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];r.exports=function(r){var n=[];for(var t in r)r.hasOwnProperty(t)&&n.push(t);var u=e.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}},460:function(r,n,e){var t=e(197);r.exports=function(){var r=["janv.","f\xe9vr.","mars","avr.","mai","juin","juill.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],n=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"],e=["di","lu","ma","me","je","ve","sa"],u=["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],i=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],o=["AM","PM"],a=["am","pm"],s=["du matin","de l\u2019apr\xe8s-midi","du soir"],c={MMM:function(n){return r[n.getMonth()]},MMMM:function(r){return n[r.getMonth()]},dd:function(r){return e[r.getDay()]},ddd:function(r){return u[r.getDay()]},dddd:function(r){return i[r.getDay()]},A:function(r){return r.getHours()/12>=1?o[1]:o[0]},a:function(r){return r.getHours()/12>=1?a[1]:a[0]},aa:function(r){var n=r.getHours();return n<=12?s[0]:n<=16?s[1]:s[2]},Wo:function(r,n){return function(r){if(1===r)return"1re";return r+"e"}(n.W(r))}};return["M","D","DDD","d","Q"].forEach((function(r){c[r+"o"]=function(n,e){return function(r){if(1===r)return"1er";return r+"e"}(e[r](n))}})),["MMM","MMMM"].forEach((function(r){c["Do "+r]=function(n,e){var t=1===n.getDate()?"Do":"D";return(c[t]||e[t])(n,e)+" "+c[r](n)}})),{formatters:c,formattingTokensRegExp:t(c)}}}}]);