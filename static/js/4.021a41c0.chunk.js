webpackJsonp([4,41,42],{659:function(n,r){function e(){function n(n,t,a){a=a||{};var u,o=r[n];return u="string"===typeof o?o:0===t||t>1?o.plural.replace("{{count}}",t<13?e[t]:t):o.singular,a.addSuffix?a.comparison>0?"om "+u:u+" sedan":u}var r={lessThanXSeconds:{singular:"mindre \xe4n en sekund",plural:"mindre \xe4n {{count}} sekunder"},xSeconds:{singular:"en sekund",plural:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{singular:"mindre \xe4n en minut",plural:"mindre \xe4n {{count}} minuter"},xMinutes:{singular:"en minut",plural:"{{count}} minuter"},aboutXHours:{singular:"ungef\xe4r en timme",plural:"ungef\xe4r {{count}} timmar"},xHours:{singular:"en timme",plural:"{{count}} timmar"},xDays:{singular:"en dag",plural:"{{count}} dagar"},aboutXMonths:{singular:"ungef\xe4r en m\xe5nad",plural:"ungef\xe4r {{count}} m\xe5nader"},xMonths:{singular:"en m\xe5nad",plural:"{{count}} m\xe5nader"},aboutXYears:{singular:"ungef\xe4r ett \xe5r",plural:"ungef\xe4r {{count}} \xe5r"},xYears:{singular:"ett \xe5r",plural:"{{count}} \xe5r"},overXYears:{singular:"\xf6ver ett \xe5r",plural:"\xf6ver {{count}} \xe5r"},almostXYears:{singular:"n\xe4stan ett \xe5r",plural:"n\xe4stan {{count}} \xe5r"}},e=["noll","en","tv\xe5","tre","fyra","fem","sex","sju","\xe5tta","nio","tio","elva","tolv"];return{localize:n}}n.exports=e},660:function(n,r,e){function t(){var n=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],r=["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],e=["s\xf6","m\xe5","ti","on","to","fr","l\xf6"],t=["s\xf6n","m\xe5n","tis","ons","tor","fre","l\xf6r"],o=["s\xf6ndag","m\xe5ndag","tisdag","onsdag","torsdag","fredag","l\xf6rdag"],s=["f.m.","e.m."],i={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return o[n.getDay()]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return i.A=i.aa,i.a=i.aa,["M","D","DDD","d","Q","W"].forEach(function(n){i[n+"o"]=function(r,e){return a(e[n](r))}}),{formatters:i,formattingTokensRegExp:u(i)}}function a(n){var r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+":a"}return n+":e"}var u=e(342);n.exports=t},697:function(n,r,e){var t=e(659),a=e(660);n.exports={distanceInWords:t(),format:a()}}});