(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[57,68],{292:function(e,n){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(t);var i=r.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+i.join("|")+"|.)","g")}},568:function(e,n,r){var t=r(292);e.exports=function(){var e=["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],n=["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"],r=["nd","pn","wt","\u015br","cz","pt","sb"],i=["niedz.","pon.","wt.","\u015br.","czw.","pi\u0105t.","sob."],o=["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"],a=["w nocy","rano","po po\u0142udniu","wieczorem"],s={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return o[e.getDay()]},A:function(e){var n=e.getHours();return n>=17?a[3]:n>=12?a[2]:n>=4?a[1]:a[0]}};return s.a=s.A,s.aa=s.A,["M","D","DDD","d","Q","W"].forEach((function(e){s[e+"o"]=function(n,r){return r[e](n).toString()}})),{formatters:s,formattingTokensRegExp:t(s)}}}}]);