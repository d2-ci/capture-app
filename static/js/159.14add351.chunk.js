(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[159,213,214],{1199:function(n,o){n.exports=function(){var n={lessThanXSeconds:{one:"1\ucd08 \ubbf8\ub9cc",other:"{{count}}\ucd08 \ubbf8\ub9cc"},xSeconds:{one:"1\ucd08",other:"{{count}}\ucd08"},halfAMinute:"30\ucd08",lessThanXMinutes:{one:"1\ubd84 \ubbf8\ub9cc",other:"{{count}}\ubd84 \ubbf8\ub9cc"},xMinutes:{one:"1\ubd84",other:"{{count}}\ubd84"},aboutXHours:{one:"\uc57d 1\uc2dc\uac04",other:"\uc57d {{count}}\uc2dc\uac04"},xHours:{one:"1\uc2dc\uac04",other:"{{count}}\uc2dc\uac04"},xDays:{one:"1\uc77c",other:"{{count}}\uc77c"},aboutXMonths:{one:"\uc57d 1\uac1c\uc6d4",other:"\uc57d {{count}}\uac1c\uc6d4"},xMonths:{one:"1\uac1c\uc6d4",other:"{{count}}\uac1c\uc6d4"},aboutXYears:{one:"\uc57d 1\ub144",other:"\uc57d {{count}}\ub144"},xYears:{one:"1\ub144",other:"{{count}}\ub144"},overXYears:{one:"1\ub144 \uc774\uc0c1",other:"{{count}}\ub144 \uc774\uc0c1"},almostXYears:{one:"\uac70\uc758 1\ub144",other:"\uac70\uc758 {{count}}\ub144"}};return{localize:function(o,t,e){var r;return e=e||{},r="string"===typeof n[o]?n[o]:1===t?n[o].one:n[o].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?r+" \ud6c4":r+" \uc804":r}}}},1200:function(n,o,t){var e=t(646);n.exports=function(){var n=["1\uc6d4","2\uc6d4","3\uc6d4","4\uc6d4","5\uc6d4","6\uc6d4","7\uc6d4","8\uc6d4","9\uc6d4","10\uc6d4","11\uc6d4","12\uc6d4"],o=["1\uc6d4","2\uc6d4","3\uc6d4","4\uc6d4","5\uc6d4","6\uc6d4","7\uc6d4","8\uc6d4","9\uc6d4","10\uc6d4","11\uc6d4","12\uc6d4"],t=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],r=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],u=["\uc77c\uc694\uc77c","\uc6d4\uc694\uc77c","\ud654\uc694\uc77c","\uc218\uc694\uc77c","\ubaa9\uc694\uc77c","\uae08\uc694\uc77c","\ud1a0\uc694\uc77c"],c=["\uc624\uc804","\uc624\ud6c4"],s=["\uc624\uc804","\uc624\ud6c4"],a=["\uc624\uc804","\uc624\ud6c4"],h={MMM:function(o){return n[o.getMonth()]},MMMM:function(n){return o[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?c[1]:c[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?a[1]:a[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){h[n+"o"]=function(o,t){return t[n](o)+"\uc77c"}})),{formatters:h,formattingTokensRegExp:e(h)}}},2949:function(n,o,t){var e=t(1199),r=t(1200);n.exports={distanceInWords:e(),format:r()}}}]);