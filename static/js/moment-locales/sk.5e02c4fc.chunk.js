/*! For license information please see sk.5e02c4fc.chunk.js.LICENSE.txt */
(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[103],{334:function(e,s,t){!function(e){"use strict";var s="janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),t="jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");function r(e){return e>1&&e<5}function a(e,s,t,a){var n=e+" ";switch(t){case"s":return s||a?"p\xe1r sek\xfand":"p\xe1r sekundami";case"ss":return s||a?n+(r(e)?"sekundy":"sek\xfand"):n+"sekundami";case"m":return s?"min\xfata":a?"min\xfatu":"min\xfatou";case"mm":return s||a?n+(r(e)?"min\xfaty":"min\xfat"):n+"min\xfatami";case"h":return s?"hodina":a?"hodinu":"hodinou";case"hh":return s||a?n+(r(e)?"hodiny":"hod\xedn"):n+"hodinami";case"d":return s||a?"de\u0148":"d\u0148om";case"dd":return s||a?n+(r(e)?"dni":"dn\xed"):n+"d\u0148ami";case"M":return s||a?"mesiac":"mesiacom";case"MM":return s||a?n+(r(e)?"mesiace":"mesiacov"):n+"mesiacmi";case"y":return s||a?"rok":"rokom";case"yy":return s||a?n+(r(e)?"roky":"rokov"):n+"rokmi"}}e.defineLocale("sk",{months:s,monthsShort:t,weekdays:"nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nede\u013eu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo \u0161tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[v\u010dera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minul\xfa nede\u013eu o] LT";case 1:case 2:case 4:case 5:return"[minul\xfd] dddd [o] LT";case 3:return"[minul\xfa stredu o] LT";case 6:return"[minul\xfa sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t(38))}}]);