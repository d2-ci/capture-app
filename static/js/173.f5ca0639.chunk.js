(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[173,241,242],{1238:function(o,n){o.exports=function(){var o={lessThanXSeconds:{one:"\u4e0d\u5230 1 \u79d2",other:"\u4e0d\u5230 {{count}} \u79d2"},xSeconds:{one:"1 \u79d2",other:"{{count}} \u79d2"},halfAMinute:"\u534a\u5206\u949f",lessThanXMinutes:{one:"\u4e0d\u5230 1 \u5206\u949f",other:"\u4e0d\u5230 {{count}} \u5206\u949f"},xMinutes:{one:"1 \u5206\u949f",other:"{{count}} \u5206\u949f"},xHours:{one:"1 \u5c0f\u65f6",other:"{{count}} \u5c0f\u65f6"},aboutXHours:{one:"\u5927\u7ea6 1 \u5c0f\u65f6",other:"\u5927\u7ea6 {{count}} \u5c0f\u65f6"},xDays:{one:"1 \u5929",other:"{{count}} \u5929"},aboutXMonths:{one:"\u5927\u7ea6 1 \u4e2a\u6708",other:"\u5927\u7ea6 {{count}} \u4e2a\u6708"},xMonths:{one:"1 \u4e2a\u6708",other:"{{count}} \u4e2a\u6708"},aboutXYears:{one:"\u5927\u7ea6 1 \u5e74",other:"\u5927\u7ea6 {{count}} \u5e74"},xYears:{one:"1 \u5e74",other:"{{count}} \u5e74"},overXYears:{one:"\u8d85\u8fc7 1 \u5e74",other:"\u8d85\u8fc7 {{count}} \u5e74"},almostXYears:{one:"\u5c06\u8fd1 1 \u5e74",other:"\u5c06\u8fd1 {{count}} \u5e74"}};return{localize:function(n,t,e){var r;return e=e||{},r="string"===typeof o[n]?o[n]:1===t?o[n].one:o[n].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?r+"\u5185":r+"\u524d":r}}}},1239:function(o,n,t){var e=t(719);o.exports=function(){var o=["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],n=["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],t=["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],r=["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"],u=["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],c=["\u4e0a\u5348","\u4e0b\u5348"],s={MMM:function(n){return o[n.getMonth()]},MMMM:function(o){return n[o.getMonth()]},dd:function(o){return t[o.getDay()]},ddd:function(o){return r[o.getDay()]},dddd:function(o){return u[o.getDay()]}};return s.a=s.aa=s.A=function(o){return o.getHours()/12>=1?c[1]:c[0]},["M","D","DDD","d","Q","W"].forEach((function(o){s[o+"o"]=function(n,t){return t[o](n).toString()}})),{formatters:s,formattingTokensRegExp:e(s)}}},2333:function(o,n,t){var e=t(1238),r=t(1239);o.exports={distanceInWords:e(),format:r()}}}]);