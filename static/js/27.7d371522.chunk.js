(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[27,61,68,96],{176:function(t,n){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];t.exports=function(t){var n=[];for(var u in t)t.hasOwnProperty(u)&&n.push(u);var o=r.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},410:function(t,n){function r(t,n,r){var u=function(t,n){return 1===n?t.one:n>=2&&n<=4?t.twoFour:t.other}(t,n);return(u[r]||u).replace("{{count}}",n)}function u(t){var n="";return"almost"===t&&(n="takmer"),"about"===t&&(n="pribli\u017ene"),n.length>0?n+" ":""}function o(t){var n="";return"lessThan"===t&&(n="menej ne\u017e"),"over"===t&&(n="viac ne\u017e"),n.length>0?n+" ":""}t.exports=function(){var t={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{regular:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{regular:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{regular:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{regular:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{regular:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{regular:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};return{localize:function(n,e,a){a=a||{};var s,i=function(t){return["lessThan","about","over","almost"].filter((function(n){return!!t.match(new RegExp("^"+n))}))[0]}(n)||"",c=(s=n.substring(i.length)).charAt(0).toLowerCase()+s.slice(1),m=t[c];return a.addSuffix?a.comparison>0?u(i)+"za "+o(i)+r(m,e,"future"):u(i)+"pred "+o(i)+r(m,e,"past"):u(i)+o(i)+r(m,e,"regular")}}}},411:function(t,n,r){var u=r(176);t.exports=function(){var t=["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],n=["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"],r=["ne","po","ut","st","\u0161t","pi","so"],o=["ne\u010f","pon","uto","str","\u0161tv","pia","sob"],e=["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"],a=["AM","PM"],s=["am","pm"],i=["a.m.","p.m."],c={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return r[t.getDay()]},ddd:function(t){return o[t.getDay()]},dddd:function(t){return e[t.getDay()]},A:function(t){return t.getHours()/12>=1?a[1]:a[0]},a:function(t){return t.getHours()/12>=1?s[1]:s[0]},aa:function(t){return t.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(t){c[t+"o"]=function(n,r){return r[t](n)+"."}})),{formatters:c,formattingTokensRegExp:u(c)}}},580:function(t,n,r){var u=r(410),o=r(411);t.exports={distanceInWords:u(),format:o()}}}]);