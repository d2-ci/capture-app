(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[65,68],{197:function(n,r){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var r=[];for(var a in n)n.hasOwnProperty(a)&&r.push(a);var u=t.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}},499:function(n,r,t){var a=t(197);n.exports=function(){var n=["Oca","\u015eub","Mar","Nis","May","Haz","Tem","A\u011fu","Eyl","Eki","Kas","Ara"],r=["Ocak","\u015eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011fustos","Eyl\xfcl","Ekim","Kas\u0131m","Aral\u0131k"],t=["Pz","Pt","Sa","\xc7a","Pe","Cu","Ct"],u=["Paz","Pts","Sal","\xc7ar","Per","Cum","Cts"],i=["Pazar","Pazartesi","Sal\u0131","\xc7ar\u015famba","Per\u015fembe","Cuma","Cumartesi"],e=["\xd6\xd6","\xd6S"],c=["\xf6\xf6","\xf6s"],s=["\xf6.\xf6.","\xf6.s."],o={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return i[n.getDay()]},A:function(n){return n.getHours()/12>=1?e[1]:e[0]},a:function(n){return n.getHours()/12>=1?c[1]:c[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){o[n+"o"]=function(r,t){return function(n){var r={1:"'inci",2:"'inci",3:"'\xfcnc\xfc",4:"'\xfcnc\xfc",5:"'inci",6:"'\u0131nc\u0131",7:"'inci",8:"'inci",9:"'uncu",10:"'uncu",20:"'inci",30:"'uncu",50:"'inci",60:"'\u0131nc\u0131",70:"'inci",80:"'inci",90:"'\u0131nc\u0131",100:"'\xfcnc\xfc"};if(0===n)return"0'\u0131nc\u0131";var t=n%10,a=n%100-t,u=n>=100?100:null;return n+(r[t]||r[a]||r[u])}(t[n](r))}})),{formatters:o,formattingTokensRegExp:a(o)}}}}]);