(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[167,229,230],{1212:function(t,u){function n(t,u,n){var o=function(t,u){return 1===u?t.one:u>=2&&u<=4?t.twoFour:t.other}(t,u);return(o[n]||o).replace("{{count}}",u)}function o(t){var u="";return"almost"===t&&(u="takmer"),"about"===t&&(u="pribli\u017ene"),u.length>0?u+" ":""}function r(t){var u="";return"lessThan"===t&&(u="menej ne\u017e"),"over"===t&&(u="viac ne\u017e"),u.length>0?u+" ":""}t.exports=function(){var t={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{regular:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{regular:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{regular:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{regular:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{regular:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{regular:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};return{localize:function(u,e,a){a=a||{};var i,c=function(t){return["lessThan","about","over","almost"].filter((function(u){return!!t.match(new RegExp("^"+u))}))[0]}(u)||"",s=(i=u.substring(c.length)).charAt(0).toLowerCase()+i.slice(1),m=t[s];return a.addSuffix?a.comparison>0?o(c)+"za "+r(c)+n(m,e,"future"):o(c)+"pred "+r(c)+n(m,e,"past"):o(c)+r(c)+n(m,e,"regular")}}}},1213:function(t,u,n){var o=n(642);t.exports=function(){var t=["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],u=["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"],n=["ne","po","ut","st","\u0161t","pi","so"],r=["ne\u010f","pon","uto","str","\u0161tv","pia","sob"],e=["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"],a=["AM","PM"],i=["am","pm"],c=["a.m.","p.m."],s={MMM:function(u){return t[u.getMonth()]},MMMM:function(t){return u[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return e[t.getDay()]},A:function(t){return t.getHours()/12>=1?a[1]:a[0]},a:function(t){return t.getHours()/12>=1?i[1]:i[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(t){s[t+"o"]=function(u,n){return n[t](u)+"."}})),{formatters:s,formattingTokensRegExp:o(s)}}},2963:function(t,u,n){var o=n(1212),r=n(1213);t.exports={distanceInWords:o(),format:r()}}}]);