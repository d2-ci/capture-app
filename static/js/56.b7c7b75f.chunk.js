(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{481:function(n,r,e){var t=e(256);n.exports=function(){var n=["janv.","f\xe9vr.","mars","avr.","mai","juin","juill.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],r=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"],e=["di","lu","ma","me","je","ve","sa"],o=["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],u=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],i=["AM","PM"],a=["am","pm"],d=["du matin","de l\u2019apr\xe8s-midi","du soir"],c={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?a[1]:a[0]},aa:function(n){var r=n.getHours();return r<=12?d[0]:r<=16?d[1]:d[2]},Wo:function(n,r){return 1===(e=r.W(n))?"1re":e+"e";var e}};return["M","D","DDD","d","Q"].forEach(function(n){c[n+"o"]=function(r,e){return 1===(t=e[n](r))?"1er":t+"e";var t}}),["MMM","MMMM"].forEach(function(n){c["Do "+n]=function(r,e){var t=1===r.getDate()?"Do":"D";return(c[t]||e[t])(r,e)+" "+c[n](r)}}),{formatters:c,formattingTokensRegExp:t(c)}}}}]);