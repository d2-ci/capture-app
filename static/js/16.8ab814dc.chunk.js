(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[16,50,68,85],{197:function(n,r){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var r=[];for(var e in n)n.hasOwnProperty(e)&&r.push(e);var u=t.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}},466:function(n,r){n.exports=function(){var n={lessThanXSeconds:{one:"minna en 1 sek\xfanda",other:"minna en {{count}} sek\xfandur"},xSeconds:{one:"1 sek\xfanda",other:"{{count}} sek\xfandur"},halfAMinute:"h\xe1lf m\xedn\xfata",lessThanXMinutes:{one:"minna en 1 m\xedn\xfata",other:"minna en {{count}} m\xedn\xfatur"},xMinutes:{one:"1 m\xedn\xfata",other:"{{count}} m\xedn\xfatur"},aboutXHours:{one:"u.\xfe.b. 1 klukkustund",other:"u.\xfe.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXMonths:{one:"u.\xfe.b. 1 m\xe1nu\xf0ur",other:"u.\xfe.b. {{count}} m\xe1nu\xf0ir"},xMonths:{one:"1 m\xe1nu\xf0ur",other:"{{count}} m\xe1nu\xf0ir"},aboutXYears:{one:"u.\xfe.b. 1 \xe1r",other:"u.\xfe.b. {{count}} \xe1r"},xYears:{one:"1 \xe1r",other:"{{count}} \xe1r"},overXYears:{one:"meira en 1 \xe1r",other:"meira en {{count}} \xe1r"},almostXYears:{one:"n\xe6stum 1 \xe1r",other:"n\xe6stum {{count}} \xe1r"}};return{localize:function(r,t,e){var u;return e=e||{},u="string"===typeof n[r]?n[r]:1===t?n[r].one:n[r].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?"\xed "+u:u+" s\xed\xf0an":u}}}},467:function(n,r,t){var e=t(197);n.exports=function(){var n=["jan","feb","mar","apr","ma\xed","j\xfan","j\xfal","\xe1g\xfa","sep","okt","n\xf3v","des"],r=["jan\xfaar","febr\xfaar","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","september","okt\xf3ber","n\xf3vember","desember"],t=["su","m\xe1","\xfer","mi","fi","f\xf6","la"],u=["sun","m\xe1n","\xferi","mi\xf0","fim","f\xf6s","lau"],o=["sunnudaginn","m\xe1nudaginn","\xferi\xf0judaginn","mi\xf0vikudaginn","fimmtudaginn","f\xf6studaginn","laugardaginn"],a=["AM","PM"],s=["am","pm"],i=["a.m.","p.m."],m={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){m[n+"o"]=function(r,t){return""+t[n](r)}})),{formatters:m,formattingTokensRegExp:e(m)}}},683:function(n,r,t){var e=t(466),u=t(467);n.exports={distanceInWords:e(),format:u()}}}]);