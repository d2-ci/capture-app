(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[92],{516:function(o,n){function t(o,n,t){t=t||"regular";var u=function(o,n){if(1===n)return o.one;var t=n%100;if(t<=20&&t>10)return o.other;var u=t%10;return u>=2&&u<=4?o.twoFour:o.other}(o,n);return(u[t]||u).replace("{{count}}",n)}o.exports=function(){var o={lessThanXSeconds:{one:{regular:"mniej ni\u017c sekunda",past:"mniej ni\u017c sekund\u0119",future:"mniej ni\u017c sekund\u0119"},twoFour:"mniej ni\u017c {{count}} sekundy",other:"mniej ni\u017c {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekund\u0119",future:"sekund\u0119"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"p\xf3\u0142 minuty",twoFour:"p\xf3\u0142 minuty",other:"p\xf3\u0142 minuty"},lessThanXMinutes:{one:{regular:"mniej ni\u017c minuta",past:"mniej ni\u017c minut\u0119",future:"mniej ni\u017c minut\u0119"},twoFour:"mniej ni\u017c {{count}} minuty",other:"mniej ni\u017c {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minut\u0119",future:"minut\u0119"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"oko\u0142o godzina",past:"oko\u0142o godziny",future:"oko\u0142o godzin\u0119"},twoFour:"oko\u0142o {{count}} godziny",other:"oko\u0142o {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzin\u0119",future:"godzin\u0119"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzie\u0144",past:"dzie\u0144",future:"1 dzie\u0144"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"oko\u0142o miesi\u0105c",twoFour:"oko\u0142o {{count}} miesi\u0105ce",other:"oko\u0142o {{count}} miesi\u0119cy"},xMonths:{one:"miesi\u0105c",twoFour:"{{count}} miesi\u0105ce",other:"{{count}} miesi\u0119cy"},aboutXYears:{one:"oko\u0142o rok",twoFour:"oko\u0142o {{count}} lata",other:"oko\u0142o {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};return{localize:function(n,u,e){var r=o[n];return(e=e||{}).addSuffix?e.comparison>0?"za "+t(r,u,"future"):t(r,u,"past")+" temu":t(r,u)}}}}}]);