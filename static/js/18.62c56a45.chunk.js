webpackJsonp([18,51,85,102],{608:function(n,r){function t(n){var r=[];for(var t in n)n.hasOwnProperty(t)&&r.push(t);var u=e.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=t},641:function(n,r){function t(){function n(n,t,e){e=e||{};var u;return u="string"===typeof r[n]?r[n]:1===t?r[n].one:r[n].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?"\xed "+u:u+" s\xed\xf0an":u}var r={lessThanXSeconds:{one:"minna en 1 sek\xfanda",other:"minna en {{count}} sek\xfandur"},xSeconds:{one:"1 sek\xfanda",other:"{{count}} sek\xfandur"},halfAMinute:"h\xe1lf m\xedn\xfata",lessThanXMinutes:{one:"minna en 1 m\xedn\xfata",other:"minna en {{count}} m\xedn\xfatur"},xMinutes:{one:"1 m\xedn\xfata",other:"{{count}} m\xedn\xfatur"},aboutXHours:{one:"u.\xfe.b. 1 klukkustund",other:"u.\xfe.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXMonths:{one:"u.\xfe.b. 1 m\xe1nu\xf0ur",other:"u.\xfe.b. {{count}} m\xe1nu\xf0ir"},xMonths:{one:"1 m\xe1nu\xf0ur",other:"{{count}} m\xe1nu\xf0ir"},aboutXYears:{one:"u.\xfe.b. 1 \xe1r",other:"u.\xfe.b. {{count}} \xe1r"},xYears:{one:"1 \xe1r",other:"{{count}} \xe1r"},overXYears:{one:"meira en 1 \xe1r",other:"meira en {{count}} \xe1r"},almostXYears:{one:"n\xe6stum 1 \xe1r",other:"n\xe6stum {{count}} \xe1r"}};return{localize:n}}n.exports=t},642:function(n,r,t){function e(){var n=["jan","feb","mar","apr","ma\xed","j\xfan","j\xfal","\xe1g\xfa","sep","okt","n\xf3v","des"],r=["jan\xfaar","febr\xfaar","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","september","okt\xf3ber","n\xf3vember","desember"],t=["su","m\xe1","\xfer","mi","fi","f\xf6","la"],e=["sun","m\xe1n","\xferi","mi\xf0","fim","f\xf6s","lau"],a=["sunnudaginn","m\xe1nudaginn","\xferi\xf0judaginn","mi\xf0vikudaginn","fimmtudaginn","f\xf6studaginn","laugardaginn"],s=["AM","PM"],i=["am","pm"],m=["a.m.","p.m."],c={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?s[1]:s[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?m[1]:m[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){c[n+"o"]=function(r,t){return u(t[n](r))}}),{formatters:c,formattingTokensRegExp:o(c)}}function u(n){return""+n}var o=t(608);n.exports=e},692:function(n,r,t){var e=t(641),u=t(642);n.exports={distanceInWords:e(),format:u()}}});