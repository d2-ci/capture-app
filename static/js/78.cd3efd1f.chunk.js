(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{494:function(n,t,e){var r=e(259);n.exports=function(){var n=["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],t=["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"],e=["nd","pn","wt","\u015br","cz","pt","sb"],i=["niedz.","pon.","wt.","\u015br.","czw.","pi\u0105t.","sob."],o=["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"],a=["w nocy","rano","po po\u0142udniu","wieczorem"],u={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return i[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){var t=n.getHours();return t>=17?a[3]:t>=12?a[2]:t>=4?a[1]:a[0]}};return u.a=u.A,u.aa=u.A,["M","D","DDD","d","Q","W"].forEach(function(n){u[n+"o"]=function(t,e){return e[n](t).toString()}}),{formatters:u,formattingTokensRegExp:r(u)}}}}]);