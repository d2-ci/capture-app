webpackJsonp([6,45,46],{602:function(t,n){function u(t,n){return 1===n?t.one:n>=2&&n<=4?t.twoFour:t.other}function r(t,n,r){var o=u(t,n);return(o[r]||o).replace("{{count}}",n)}function o(t){return["lessThan","about","over","almost"].filter(function(n){return!!t.match(new RegExp("^"+n))})[0]}function e(t){var n="";return"almost"===t&&(n="takmer"),"about"===t&&(n="pribli\u017ene"),n.length>0?n+" ":""}function a(t){var n="";return"lessThan"===t&&(n="menej ne\u017e"),"over"===t&&(n="viac ne\u017e"),n.length>0?n+" ":""}function c(t){return t.charAt(0).toLowerCase()+t.slice(1)}function i(){function t(t,u,i){i=i||{};var s=o(t)||"",m=c(t.substring(s.length)),f=n[m];return i.addSuffix?i.comparison>0?e(s)+"za "+a(s)+r(f,u,"future"):e(s)+"pred "+a(s)+r(f,u,"past"):e(s)+a(s)+r(f,u,"regular")}var n={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{regular:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{regular:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{regular:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{regular:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{regular:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{regular:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};return{localize:t}}t.exports=i},603:function(t,n,u){function r(){var t=["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],n=["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"],u=["ne","po","ut","st","\u0161t","pi","so"],r=["ne\u010f","pon","uto","str","\u0161tv","pia","sob"],a=["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"],c=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],m={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return u[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return a[t.getDay()]},A:function(t){return t.getHours()/12>=1?c[1]:c[0]},a:function(t){return t.getHours()/12>=1?i[1]:i[0]},aa:function(t){return t.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(t){m[t+"o"]=function(n,u){return o(u[t](n))}}),{formatters:m,formattingTokensRegExp:e(m)}}function o(t){return t+"."}var e=u(301);t.exports=r},642:function(t,n,u){var r=u(602),o=u(603);t.exports={distanceInWords:r(),format:o()}}});