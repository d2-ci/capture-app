(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[57,68],{451:function(r,t){var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];r.exports=function(r){var t=[];for(var n in r)r.hasOwnProperty(n)&&t.push(n);var i=e.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+i.join("|")+"|.)","g")}},499:function(r,t,e){var n=e(451);r.exports=function(){var r=["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],t=["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"],e=["nd","pn","wt","\u015br","cz","pt","sb"],i=["niedz.","pon.","wt.","\u015br.","czw.","pi\u0105t.","sob."],o=["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"],a=["w nocy","rano","po po\u0142udniu","wieczorem"],u={MMM:function(t){return r[t.getMonth()]},MMMM:function(r){return t[r.getMonth()]},dd:function(r){return e[r.getDay()]},ddd:function(r){return i[r.getDay()]},dddd:function(r){return o[r.getDay()]},A:function(r){var t=r.getHours();return t>=17?a[3]:t>=12?a[2]:t>=4?a[1]:a[0]}};return u.a=u.A,u.aa=u.A,["M","D","DDD","d","Q","W"].forEach((function(r){u[r+"o"]=function(t,e){return e[r](t).toString()}})),{formatters:u,formattingTokensRegExp:n(u)}}}}]);