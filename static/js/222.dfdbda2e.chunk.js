(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[222],{1208:function(t,e,n){var r=n(642);t.exports=function(){var t=["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],e=["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"],n=["nd","pn","wt","\u015br","cz","pt","sb"],i=["niedz.","pon.","wt.","\u015br.","czw.","pi\u0105t.","sob."],o=["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"],a=["w nocy","rano","po po\u0142udniu","wieczorem"],u={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return i[t.getDay()]},dddd:function(t){return o[t.getDay()]},A:function(t){var e=t.getHours();return e>=17?a[3]:e>=12?a[2]:e>=4?a[1]:a[0]}};return u.a=u.A,u.aa=u.A,["M","D","DDD","d","Q","W"].forEach((function(t){u[t+"o"]=function(e,n){return n[t](e).toString()}})),{formatters:u,formattingTokensRegExp:r(u)}}}}]);