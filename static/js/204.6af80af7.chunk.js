webpackJsonp([204],{1154:function(e,n,t){!function(e,n){n(t(115))}(0,function(e){"use strict";function n(e){return e>1&&e<5&&1!==~~(e/10)}function t(e,t,r,s){var a=e+" ";switch(r){case"s":return t||s?"p\xe1r sekund":"p\xe1r sekundami";case"ss":return t||s?a+(n(e)?"sekundy":"sekund"):a+"sekundami";case"m":return t?"minuta":s?"minutu":"minutou";case"mm":return t||s?a+(n(e)?"minuty":"minut"):a+"minutami";case"h":return t?"hodina":s?"hodinu":"hodinou";case"hh":return t||s?a+(n(e)?"hodiny":"hodin"):a+"hodinami";case"d":return t||s?"den":"dnem";case"dd":return t||s?a+(n(e)?"dny":"dn\xed"):a+"dny";case"M":return t||s?"m\u011bs\xedc":"m\u011bs\xedcem";case"MM":return t||s?a+(n(e)?"m\u011bs\xedce":"m\u011bs\xedc\u016f"):a+"m\u011bs\xedci";case"y":return t||s?"rok":"rokem";case"yy":return t||s?a+(n(e)?"roky":"let"):a+"lety"}}var r="leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),s="led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");return e.defineLocale("cs",{months:r,monthsShort:s,monthsParse:function(e,n){var t,r=[];for(t=0;t<12;t++)r[t]=new RegExp("^"+e[t]+"$|^"+n[t]+"$","i");return r}(r,s),shortMonthsParse:function(e){var n,t=[];for(n=0;n<12;n++)t[n]=new RegExp("^"+e[n]+"$","i");return t}(s),longMonthsParse:function(e){var n,t=[];for(n=0;n<12;n++)t[n]=new RegExp("^"+e[n]+"$","i");return t}(r),weekdays:"ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),weekdaysShort:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),weekdaysMin:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\xedtra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v ned\u011bli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010dtvrtek v] LT";case 5:return"[v p\xe1tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v\u010dera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou ned\u011bli v] LT";case 1:case 2:return"[minul\xe9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\xfd] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})}});
//# sourceMappingURL=204.6af80af7.chunk.js.map