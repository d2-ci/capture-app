webpackJsonp([20,73,74],{581:function(o,n){function t(){function o(o,t,e){e=e||{};var i;return i="string"===typeof n[o]?n[o]:1===t?e.addSuffix?e.comparison>0?n[o].one.withPrepositionIn:n[o].one.withPrepositionAgo:n[o].one.standalone:t%10>1&&t%10<5&&"1"!==String(t).substr(-2,1)?n[o].dual.replace("{{count}}",t):n[o].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?"za "+i:"prije "+i:i}var n={lessThanXSeconds:{one:{standalone:"manje od 1 sekunde",withPrepositionAgo:"manje od 1 sekunde",withPrepositionIn:"manje od 1 sekundu"},dual:"manje od {{count}} sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:{standalone:"1 sekunda",withPrepositionAgo:"1 sekunde",withPrepositionIn:"1 sekundu"},dual:"{{count}} sekunde",other:"{{count}} sekundi"},halfAMinute:"pola minute",lessThanXMinutes:{one:{standalone:"manje od 1 minute",withPrepositionAgo:"manje od 1 minute",withPrepositionIn:"manje od 1 minutu"},dual:"manje od {{count}} minute",other:"manje od {{count}} minuta"},xMinutes:{one:{standalone:"1 minuta",withPrepositionAgo:"1 minute",withPrepositionIn:"1 minutu"},dual:"{{count}} minute",other:"{{count}} minuta"},aboutXHours:{one:{standalone:"oko 1 sat",withPrepositionAgo:"oko 1 sat",withPrepositionIn:"oko 1 sat"},dual:"oko {{count}} sata",other:"oko {{count}} sati"},xHours:{one:{standalone:"1 sat",withPrepositionAgo:"1 sat",withPrepositionIn:"1 sat"},dual:"{{count}} sata",other:"{{count}} sati"},xDays:{one:{standalone:"1 dan",withPrepositionAgo:"1 dan",withPrepositionIn:"1 dan"},dual:"{{count}} dana",other:"{{count}} dana"},aboutXMonths:{one:{standalone:"oko 1 mjesec",withPrepositionAgo:"oko 1 mjesec",withPrepositionIn:"oko 1 mjesec"},dual:"oko {{count}} mjeseca",other:"oko {{count}} mjeseci"},xMonths:{one:{standalone:"1 mjesec",withPrepositionAgo:"1 mjesec",withPrepositionIn:"1 mjesec"},dual:"{{count}} mjeseca",other:"{{count}} mjeseci"},aboutXYears:{one:{standalone:"oko 1 godinu",withPrepositionAgo:"oko 1 godinu",withPrepositionIn:"oko 1 godinu"},dual:"oko {{count}} godine",other:"oko {{count}} godina"},xYears:{one:{standalone:"1 godina",withPrepositionAgo:"1 godine",withPrepositionIn:"1 godinu"},dual:"{{count}} godine",other:"{{count}} godina"},overXYears:{one:{standalone:"preko 1 godinu",withPrepositionAgo:"preko 1 godinu",withPrepositionIn:"preko 1 godinu"},dual:"preko {{count}} godine",other:"preko {{count}} godina"},almostXYears:{one:{standalone:"gotovo 1 godinu",withPrepositionAgo:"gotovo 1 godinu",withPrepositionIn:"gotovo 1 godinu"},dual:"gotovo {{count}} godine",other:"gotovo {{count}} godina"}};return{localize:o}}o.exports=t},582:function(o,n,t){function e(){var o=["sij","velj","o\u017eu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],n=["sije\u010danj","velja\u010da","o\u017eujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"],t=["sije\u010dnja","velja\u010de","o\u017eujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"],e=["ne","po","ut","sr","\u010de","pe","su"],u=["ned","pon","uto","sri","\u010det","pet","sub"],s=["nedjelja","ponedjeljak","utorak","srijeda","\u010detvrtak","petak","subota"],r=["ujutro","popodne"],d=["ujutro","popodne"],c=["ujutro","popodne"],p={MMM:function(n){return o[n.getMonth()]},MMMM:function(o){return n[o.getMonth()]},dd:function(o){return e[o.getDay()]},ddd:function(o){return u[o.getDay()]},dddd:function(o){return s[o.getDay()]},A:function(o){return o.getHours()/12>=1?r[1]:r[0]},a:function(o){return o.getHours()/12>=1?d[1]:d[0]},aa:function(o){return o.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(o){p[o+"o"]=function(n,t){return i(t[o](n))}}),["D","Do","DD"].forEach(function(o){p[o+" MMM"]=function(n,e){return(p[o]||e[o])(n,e)+" "+t[n.getMonth()]}}),{formatters:p,formattingTokensRegExp:a(p)}}function i(o){return o+"."}var a=t(306);o.exports=e},635:function(o,n,t){var e=t(581),i=t(582);o.exports={distanceInWords:e(),format:i()}}});