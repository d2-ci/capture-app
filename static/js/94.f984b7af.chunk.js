(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{579:function(n,t,r){var a=r(293);n.exports=function(){var n=["Oca","\u015eub","Mar","Nis","May","Haz","Tem","A\u011fu","Eyl","Eki","Kas","Ara"],t=["Ocak","\u015eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011fustos","Eyl\xfcl","Ekim","Kas\u0131m","Aral\u0131k"],r=["Pz","Pt","Sa","\xc7a","Pe","Cu","Ct"],u=["Paz","Pts","Sal","\xc7ar","Per","Cum","Cts"],i=["Pazar","Pazartesi","Sal\u0131","\xc7ar\u015famba","Per\u015fembe","Cuma","Cumartesi"],c=["\xd6\xd6","\xd6S"],e=["\xf6\xf6","\xf6s"],o=["\xf6.\xf6.","\xf6.s."],s={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return i[n.getDay()]},A:function(n){return n.getHours()/12>=1?c[1]:c[0]},a:function(n){return n.getHours()/12>=1?e[1]:e[0]},aa:function(n){return n.getHours()/12>=1?o[1]:o[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){s[n+"o"]=function(t,r){return function(n){var t={1:"'inci",2:"'inci",3:"'\xfcnc\xfc",4:"'\xfcnc\xfc",5:"'inci",6:"'\u0131nc\u0131",7:"'inci",8:"'inci",9:"'uncu",10:"'uncu",20:"'inci",30:"'uncu",50:"'inci",60:"'\u0131nc\u0131",70:"'inci",80:"'inci",90:"'\u0131nc\u0131",100:"'\xfcnc\xfc"};if(0===n)return"0'\u0131nc\u0131";var r=n%10,a=n%100-r,u=n>=100?100:null;return n+(t[r]||t[a]||t[u])}(r[n](t))}}),{formatters:s,formattingTokensRegExp:a(s)}}}}]);