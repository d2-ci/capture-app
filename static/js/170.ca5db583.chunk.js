(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[170,235,236],{1221:function(n,r){n.exports=function(){var n={lessThanXSeconds:{singular:"mindre \xe4n en sekund",plural:"mindre \xe4n {{count}} sekunder"},xSeconds:{singular:"en sekund",plural:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{singular:"mindre \xe4n en minut",plural:"mindre \xe4n {{count}} minuter"},xMinutes:{singular:"en minut",plural:"{{count}} minuter"},aboutXHours:{singular:"ungef\xe4r en timme",plural:"ungef\xe4r {{count}} timmar"},xHours:{singular:"en timme",plural:"{{count}} timmar"},xDays:{singular:"en dag",plural:"{{count}} dagar"},aboutXMonths:{singular:"ungef\xe4r en m\xe5nad",plural:"ungef\xe4r {{count}} m\xe5nader"},xMonths:{singular:"en m\xe5nad",plural:"{{count}} m\xe5nader"},aboutXYears:{singular:"ungef\xe4r ett \xe5r",plural:"ungef\xe4r {{count}} \xe5r"},xYears:{singular:"ett \xe5r",plural:"{{count}} \xe5r"},overXYears:{singular:"\xf6ver ett \xe5r",plural:"\xf6ver {{count}} \xe5r"},almostXYears:{singular:"n\xe4stan ett \xe5r",plural:"n\xe4stan {{count}} \xe5r"}},r=["noll","en","tv\xe5","tre","fyra","fem","sex","sju","\xe5tta","nio","tio","elva","tolv"];return{localize:function(e,a,t){t=t||{};var u,o=n[e];return u="string"===typeof o?o:0===a||a>1?o.plural.replace("{{count}}",a<13?r[a]:a):o.singular,t.addSuffix?t.comparison>0?"om "+u:u+" sedan":u}}}},1222:function(n,r,e){var a=e(646);n.exports=function(){var n=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],r=["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],e=["s\xf6","m\xe5","ti","on","to","fr","l\xf6"],t=["s\xf6n","m\xe5n","tis","ons","tor","fre","l\xf6r"],u=["s\xf6ndag","m\xe5ndag","tisdag","onsdag","torsdag","fredag","l\xf6rdag"],o=["f.m.","e.m."],s={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return u[n.getDay()]},aa:function(n){return n.getHours()/12>=1?o[1]:o[0]}};return s.A=s.aa,s.a=s.aa,["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(r,e){return function(n){var r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+":a"}return n+":e"}(e[n](r))}})),{formatters:s,formattingTokensRegExp:a(s)}}},2960:function(n,r,e){var a=e(1221),t=e(1222);n.exports={distanceInWords:a(),format:t()}}}]);