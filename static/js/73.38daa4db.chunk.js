webpackJsonp([73],{529:function(n,t,o){function r(){var n=["sij","velj","o\u017eu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],t=["sije\u010danj","velja\u010da","o\u017eujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"],o=["sije\u010dnja","velja\u010de","o\u017eujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"],r=["ne","po","ut","sr","\u010de","pe","su"],a=["ned","pon","uto","sri","\u010det","pet","sub"],i=["nedjelja","ponedjeljak","utorak","srijeda","\u010detvrtak","petak","subota"],s=["ujutro","popodne"],j=["ujutro","popodne"],p=["ujutro","popodne"],d={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return i[n.getDay()]},A:function(n){return n.getHours()/12>=1?s[1]:s[0]},a:function(n){return n.getHours()/12>=1?j[1]:j[0]},aa:function(n){return n.getHours()/12>=1?p[1]:p[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){d[n+"o"]=function(t,o){return u(o[n](t))}}),["D","Do","DD"].forEach(function(n){d[n+" MMM"]=function(t,r){return(d[n]||r[n])(t,r)+" "+o[t.getMonth()]}}),{formatters:d,formattingTokensRegExp:e(d)}}function u(n){return n+"."}var e=o(268);n.exports=r}});
//# sourceMappingURL=73.38daa4db.chunk.js.map