(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[180],{1162:function(n,t,r){var e=r(641);n.exports=function(){var n=["\u044f\u043d\u0443","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u044e\u043d\u0438","\u044e\u043b\u0438","\u0430\u0432\u0433","\u0441\u0435\u043f","\u043e\u043a\u0442","\u043d\u043e\u0435","\u0434\u0435\u043a"],t=["\u044f\u043d\u0443\u0430\u0440\u0438","\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0439","\u044e\u043d\u0438","\u044e\u043b\u0438","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438","\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438","\u043d\u043e\u0435\u043c\u0432\u0440\u0438","\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438"],r=["\u043d\u0434","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],u=["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0432\u0442\u043e","\u0441\u0440\u044f","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u044a\u0431"],o=["\u043d\u0435\u0434\u0435\u043b\u044f","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u044f\u0434\u0430","\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a","\u043f\u0435\u0442\u044a\u043a","\u0441\u044a\u0431\u043e\u0442\u0430"],a=["\u0441\u0443\u0442\u0440\u0438\u043d\u0442\u0430","\u043d\u0430 \u043e\u0431\u044f\u0434","\u0441\u043b\u0435\u0434\u043e\u0431\u0435\u0434","\u0432\u0435\u0447\u0435\u0440\u0442\u0430"],i=function(n){var t=n.getHours();return t>=4&&t<12?a[0]:t>=12&&t<14?a[1]:t>=14&&t<17?a[2]:a[3]},c={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:i,a:i,aa:i};return["M","D","DDD","d","Q","W"].forEach((function(n){c[n+"o"]=function(t,r){return function(n){var t=n%100;if(t>20||t<10)switch(t%10){case 1:return n+"-\u0432\u0438";case 2:return n+"-\u0440\u0438"}return n+"-\u0438"}(r[n](t))}})),{formatters:c,formattingTokensRegExp:e(c)}}}}]);