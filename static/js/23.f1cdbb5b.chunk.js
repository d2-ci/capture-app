(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[23,57,68,92],{172:function(o,n){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];o.exports=function(o){var n=[];for(var e in o)o.hasOwnProperty(e)&&n.push(e);var r=t.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")}},402:function(o,n){function t(o,n,t){t=t||"regular";var e=function(o,n){if(1===n)return o.one;var t=n%100;if(t<=20&&t>10)return o.other;var e=t%10;return e>=2&&e<=4?o.twoFour:o.other}(o,n);return(e[t]||e).replace("{{count}}",n)}o.exports=function(){var o={lessThanXSeconds:{one:{regular:"mniej ni\u017c sekunda",past:"mniej ni\u017c sekund\u0119",future:"mniej ni\u017c sekund\u0119"},twoFour:"mniej ni\u017c {{count}} sekundy",other:"mniej ni\u017c {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekund\u0119",future:"sekund\u0119"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"p\xf3\u0142 minuty",twoFour:"p\xf3\u0142 minuty",other:"p\xf3\u0142 minuty"},lessThanXMinutes:{one:{regular:"mniej ni\u017c minuta",past:"mniej ni\u017c minut\u0119",future:"mniej ni\u017c minut\u0119"},twoFour:"mniej ni\u017c {{count}} minuty",other:"mniej ni\u017c {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minut\u0119",future:"minut\u0119"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"oko\u0142o godzina",past:"oko\u0142o godziny",future:"oko\u0142o godzin\u0119"},twoFour:"oko\u0142o {{count}} godziny",other:"oko\u0142o {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzin\u0119",future:"godzin\u0119"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzie\u0144",past:"dzie\u0144",future:"1 dzie\u0144"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"oko\u0142o miesi\u0105c",twoFour:"oko\u0142o {{count}} miesi\u0105ce",other:"oko\u0142o {{count}} miesi\u0119cy"},xMonths:{one:"miesi\u0105c",twoFour:"{{count}} miesi\u0105ce",other:"{{count}} miesi\u0119cy"},aboutXYears:{one:"oko\u0142o rok",twoFour:"oko\u0142o {{count}} lata",other:"oko\u0142o {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};return{localize:function(n,e,r){var u=o[n];return(r=r||{}).addSuffix?r.comparison>0?"za "+t(u,e,"future"):t(u,e,"past")+" temu":t(u,e)}}}},403:function(o,n,t){var e=t(172);o.exports=function(){var o=["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],n=["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"],t=["nd","pn","wt","\u015br","cz","pt","sb"],r=["niedz.","pon.","wt.","\u015br.","czw.","pi\u0105t.","sob."],u=["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"],i=["w nocy","rano","po po\u0142udniu","wieczorem"],a={MMM:function(n){return o[n.getMonth()]},MMMM:function(o){return n[o.getMonth()]},dd:function(o){return t[o.getDay()]},ddd:function(o){return r[o.getDay()]},dddd:function(o){return u[o.getDay()]},A:function(o){var n=o.getHours();return n>=17?i[3]:n>=12?i[2]:n>=4?i[1]:i[0]}};return a.a=a.A,a.aa=a.A,["M","D","DDD","d","Q","W"].forEach((function(o){a[o+"o"]=function(n,t){return t[o](n).toString()}})),{formatters:a,formattingTokensRegExp:e(a)}}},578:function(o,n,t){var e=t(402),r=t(403);o.exports={distanceInWords:e(),format:r()}}}]);