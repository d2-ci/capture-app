(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1163:function(e,n,s){!function(e){"use strict";var n="leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),s="led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");function t(e){return e>1&&e<5&&1!==~~(e/10)}function r(e,n,s,r){var a=e+" ";switch(s){case"s":return n||r?"p\xe1r sekund":"p\xe1r sekundami";case"ss":return n||r?a+(t(e)?"sekundy":"sekund"):a+"sekundami";case"m":return n?"minuta":r?"minutu":"minutou";case"mm":return n||r?a+(t(e)?"minuty":"minut"):a+"minutami";case"h":return n?"hodina":r?"hodinu":"hodinou";case"hh":return n||r?a+(t(e)?"hodiny":"hodin"):a+"hodinami";case"d":return n||r?"den":"dnem";case"dd":return n||r?a+(t(e)?"dny":"dn\xed"):a+"dny";case"M":return n||r?"m\u011bs\xedc":"m\u011bs\xedcem";case"MM":return n||r?a+(t(e)?"m\u011bs\xedce":"m\u011bs\xedc\u016f"):a+"m\u011bs\xedci";case"y":return n||r?"rok":"rokem";case"yy":return n||r?a+(t(e)?"roky":"let"):a+"lety"}}e.defineLocale("cs",{months:n,monthsShort:s,monthsParse:function(e,n){var s,t=[];for(s=0;s<12;s++)t[s]=new RegExp("^"+e[s]+"$|^"+n[s]+"$","i");return t}(n,s),shortMonthsParse:function(e){var n,s=[];for(n=0;n<12;n++)s[n]=new RegExp("^"+e[n]+"$","i");return s}(s),longMonthsParse:function(e){var n,s=[];for(n=0;n<12;n++)s[n]=new RegExp("^"+e[n]+"$","i");return s}(n),weekdays:"ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),weekdaysShort:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),weekdaysMin:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\xedtra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v ned\u011bli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010dtvrtek v] LT";case 5:return"[v p\xe1tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v\u010dera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou ned\u011bli v] LT";case 1:case 2:return"[minul\xe9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\xfd] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(s(68))}}]);