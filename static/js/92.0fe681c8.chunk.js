webpackJsonp([92],{617:function(u,t){function n(u,t){return 1===t?u.one:t>=2&&t<=4?u.twoFour:u.other}function r(u,t,r){var o=n(u,t);return(o[r]||o).replace("{{count}}",t)}function o(u){return["lessThan","about","over","almost"].filter(function(t){return!!u.match(new RegExp("^"+t))})[0]}function e(u){var t="";return"almost"===u&&(t="skoro"),"about"===u&&(t="p\u0159ibli\u017en\u011b"),t.length>0?t+" ":""}function a(u){var t="";return"lessThan"===u&&(t="m\xe9n\u011b ne\u017e"),"over"===u&&(t="v\xedce ne\u017e"),t.length>0?t+" ":""}function c(u){return u.charAt(0).toLowerCase()+u.slice(1)}function i(){function u(u,n,i){i=i||{};var s=o(u)||"",l=c(u.substring(s.length)),m=t[l];return i.addSuffix?i.comparison>0?e(s)+"za "+a(s)+r(m,n,"future"):e(s)+"p\u0159ed "+a(s)+r(m,n,"past"):e(s)+a(s)+r(m,n,"regular")}var t={xSeconds:{one:{regular:"vte\u0159ina",past:"vte\u0159inou",future:"vte\u0159inu"},twoFour:{regular:"{{count}} vte\u0159iny",past:"{{count}} vte\u0159inami",future:"{{count}} vte\u0159iny"},other:{regular:"{{count}} vte\u0159in",past:"{{count}} vte\u0159inami",future:"{{count}} vte\u0159in"}},halfAMinute:{other:{regular:"p\u016fl minuty",past:"p\u016fl minutou",future:"p\u016fl minuty"}},xMinutes:{one:{regular:"minuta",past:"minutou",future:"minutu"},twoFour:{regular:"{{count}} minuty",past:"{{count}} minutami",future:"{{count}} minuty"},other:{regular:"{{count}} minut",past:"{{count}} minutami",future:"{{count}} minut"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hodin",past:"{{count}} hodinami",future:"{{count}} hodin"}},xDays:{one:{regular:"den",past:"dnem",future:"den"},twoFour:{regular:"{{count}} dni",past:"{{count}} dny",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} dny",future:"{{count}} dn\xed"}},xMonths:{one:{regular:"m\u011bs\xedc",past:"m\u011bs\xedcem",future:"m\u011bs\xedc"},twoFour:{regular:"{{count}} m\u011bs\xedce",past:"{{count}} m\u011bs\xedci",future:"{{count}} m\u011bs\xedce"},other:{regular:"{{count}} m\u011bs\xedc\u016f",past:"{{count}} m\u011bs\xedci",future:"{{count}} m\u011bs\xedc\u016f"}},xYears:{one:{regular:"rok",past:"rokem",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} roky",future:"{{count}} roky"},other:{regular:"{{count}} rok\u016f",past:"{{count}} roky",future:"{{count}} rok\u016f"}}};return{localize:u}}u.exports=i}});