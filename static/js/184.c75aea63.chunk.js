(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1296:function(e,r,n){!function(e){"use strict";var r="vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");function n(e,r,n,s){var a=e;switch(n){case"s":return s||r?"n\xe9h\xe1ny m\xe1sodperc":"n\xe9h\xe1ny m\xe1sodperce";case"ss":return a+(s||r)?" m\xe1sodperc":" m\xe1sodperce";case"m":return"egy"+(s||r?" perc":" perce");case"mm":return a+(s||r?" perc":" perce");case"h":return"egy"+(s||r?" \xf3ra":" \xf3r\xe1ja");case"hh":return a+(s||r?" \xf3ra":" \xf3r\xe1ja");case"d":return"egy"+(s||r?" nap":" napja");case"dd":return a+(s||r?" nap":" napja");case"M":return"egy"+(s||r?" h\xf3nap":" h\xf3napja");case"MM":return a+(s||r?" h\xf3nap":" h\xf3napja");case"y":return"egy"+(s||r?" \xe9v":" \xe9ve");case"yy":return a+(s||r?" \xe9v":" \xe9ve")}return""}function s(e){return(e?"":"[m\xfalt] ")+"["+r[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),monthsShort:"jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),weekdays:"vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),weekdaysShort:"vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,r,n){return e<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return s.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return s.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s m\xfalva",past:"%s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(69))}}]);