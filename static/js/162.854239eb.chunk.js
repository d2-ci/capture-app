webpackJsonp([162],{1918:function(r,u,e){!function(r,u){u(e(89))}(0,function(r){"use strict";function u(r){return r%100===11||r%10!==1}function e(r,e,n,a){var s=r+" ";switch(n){case"s":return e||a?"nokkrar sek\xfandur":"nokkrum sek\xfandum";case"ss":return u(r)?s+(e||a?"sek\xfandur":"sek\xfandum"):s+"sek\xfanda";case"m":return e?"m\xedn\xfata":"m\xedn\xfatu";case"mm":return u(r)?s+(e||a?"m\xedn\xfatur":"m\xedn\xfatum"):e?s+"m\xedn\xfata":s+"m\xedn\xfatu";case"hh":return u(r)?s+(e||a?"klukkustundir":"klukkustundum"):s+"klukkustund";case"d":return e?"dagur":a?"dag":"degi";case"dd":return u(r)?e?s+"dagar":s+(a?"daga":"d\xf6gum"):e?s+"dagur":s+(a?"dag":"degi");case"M":return e?"m\xe1nu\xf0ur":a?"m\xe1nu\xf0":"m\xe1nu\xf0i";case"MM":return u(r)?e?s+"m\xe1nu\xf0ir":s+(a?"m\xe1nu\xf0i":"m\xe1nu\xf0um"):e?s+"m\xe1nu\xf0ur":s+(a?"m\xe1nu\xf0":"m\xe1nu\xf0i");case"y":return e||a?"\xe1r":"\xe1ri";case"yy":return u(r)?s+(e||a?"\xe1r":"\xe1rum"):s+(e||a?"\xe1r":"\xe1ri")}}return r.defineLocale("is",{months:"jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),monthsShort:"jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),weekdays:"sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),weekdaysShort:"sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),weekdaysMin:"Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[\xed dag kl.] LT",nextDay:"[\xe1 morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xed g\xe6r kl.] LT",lastWeek:"[s\xed\xf0asta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s s\xed\xf0an",s:e,ss:e,m:e,mm:e,h:"klukkustund",hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})}});