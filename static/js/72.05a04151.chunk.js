(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[72],{531:function(t,u){function n(t,u,n){var r=function(t,u){return 1===u?t.one:u>=2&&u<=4?t.twoFour:t.other}(t,u);return(r[n]||r).replace("{{count}}",u)}function r(t){var u="";return"almost"===t&&(u="skoro"),"about"===t&&(u="p\u0159ibli\u017en\u011b"),u.length>0?u+" ":""}function o(t){var u="";return"lessThan"===t&&(u="m\xe9n\u011b ne\u017e"),"over"===t&&(u="v\xedce ne\u017e"),u.length>0?u+" ":""}t.exports=function(){var t={xSeconds:{one:{regular:"vte\u0159ina",past:"vte\u0159inou",future:"vte\u0159inu"},twoFour:{regular:"{{count}} vte\u0159iny",past:"{{count}} vte\u0159inami",future:"{{count}} vte\u0159iny"},other:{regular:"{{count}} vte\u0159in",past:"{{count}} vte\u0159inami",future:"{{count}} vte\u0159in"}},halfAMinute:{other:{regular:"p\u016fl minuty",past:"p\u016fl minutou",future:"p\u016fl minuty"}},xMinutes:{one:{regular:"minuta",past:"minutou",future:"minutu"},twoFour:{regular:"{{count}} minuty",past:"{{count}} minutami",future:"{{count}} minuty"},other:{regular:"{{count}} minut",past:"{{count}} minutami",future:"{{count}} minut"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hodin",past:"{{count}} hodinami",future:"{{count}} hodin"}},xDays:{one:{regular:"den",past:"dnem",future:"den"},twoFour:{regular:"{{count}} dni",past:"{{count}} dny",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} dny",future:"{{count}} dn\xed"}},xMonths:{one:{regular:"m\u011bs\xedc",past:"m\u011bs\xedcem",future:"m\u011bs\xedc"},twoFour:{regular:"{{count}} m\u011bs\xedce",past:"{{count}} m\u011bs\xedci",future:"{{count}} m\u011bs\xedce"},other:{regular:"{{count}} m\u011bs\xedc\u016f",past:"{{count}} m\u011bs\xedci",future:"{{count}} m\u011bs\xedc\u016f"}},xYears:{one:{regular:"rok",past:"rokem",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} roky",future:"{{count}} roky"},other:{regular:"{{count}} rok\u016f",past:"{{count}} roky",future:"{{count}} rok\u016f"}}};return{localize:function(u,e,a){a=a||{};var c,i=function(t){return["lessThan","about","over","almost"].filter((function(u){return!!t.match(new RegExp("^"+u))}))[0]}(u)||"",s=(c=u.substring(i.length)).charAt(0).toLowerCase()+c.slice(1),l=t[s];return a.addSuffix?a.comparison>0?r(i)+"za "+o(i)+n(l,e,"future"):r(i)+"p\u0159ed "+o(i)+n(l,e,"past"):r(i)+o(i)+n(l,e,"regular")}}}}}]);