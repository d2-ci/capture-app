(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{1245:function(e,n,s){!function(e){"use strict";var n="janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),s="jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");function r(e){return e>1&&e<5}function t(e,n,s,t){var a=e+" ";switch(s){case"s":return n||t?"p\xe1r sek\xfand":"p\xe1r sekundami";case"ss":return n||t?a+(r(e)?"sekundy":"sek\xfand"):a+"sekundami";case"m":return n?"min\xfata":t?"min\xfatu":"min\xfatou";case"mm":return n||t?a+(r(e)?"min\xfaty":"min\xfat"):a+"min\xfatami";case"h":return n?"hodina":t?"hodinu":"hodinou";case"hh":return n||t?a+(r(e)?"hodiny":"hod\xedn"):a+"hodinami";case"d":return n||t?"de\u0148":"d\u0148om";case"dd":return n||t?a+(r(e)?"dni":"dn\xed"):a+"d\u0148ami";case"M":return n||t?"mesiac":"mesiacom";case"MM":return n||t?a+(r(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return n||t?"rok":"rokom";case"yy":return n||t?a+(r(e)?"roky":"rokov"):a+"rokmi"}}e.defineLocale("sk",{months:n,monthsShort:s,weekdays:"nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nede\u013eu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo \u0161tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[v\u010dera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minul\xfa nede\u013eu o] LT";case 1:case 2:return"[minul\xfd] dddd [o] LT";case 3:return"[minul\xfa stredu o] LT";case 4:case 5:return"[minul\xfd] dddd [o] LT";case 6:return"[minul\xfa sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(s(79))}}]);