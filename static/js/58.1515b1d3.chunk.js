(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{475:function(n,o,t){var r=t(258);n.exports=function(){var n=["sij","velj","o\u017eu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],o=["sije\u010danj","velja\u010da","o\u017eujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"],t=["sije\u010dnja","velja\u010de","o\u017eujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"],e=["ne","po","ut","sr","\u010de","pe","su"],u=["ned","pon","uto","sri","\u010det","pet","sub"],a=["nedjelja","ponedjeljak","utorak","srijeda","\u010detvrtak","petak","subota"],i=["ujutro","popodne"],s=["ujutro","popodne"],p=["ujutro","popodne"],j={MMM:function(o){return n[o.getMonth()]},MMMM:function(n){return o[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?p[1]:p[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){j[n+"o"]=function(o,t){return t[n](o)+"."}}),["D","Do","DD"].forEach(function(n){j[n+" MMM"]=function(o,r){return(j[n]||r[n])(o,r)+" "+t[o.getMonth()]}}),{formatters:j,formattingTokensRegExp:r(j)}}}}]);