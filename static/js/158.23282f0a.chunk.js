(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[158,211,212],{1214:function(t,o){t.exports=function(){var t={lessThanXSeconds:{one:"1\u79d2\u4ee5\u4e0b",other:"{{count}}\u79d2\u4ee5\u4e0b"},xSeconds:{one:"1\u79d2",other:"{{count}}\u79d2"},halfAMinute:"30\u79d2\u3050\u3089\u3044",lessThanXMinutes:{one:"1\u5206\u4ee5\u4e0b",other:"{{count}}\u5206\u4ee5\u4e0b"},xMinutes:{one:"1\u5206",other:"{{count}}\u5206"},aboutXHours:{one:"1\u6642\u9593\u3050\u3089\u3044",other:"{{count}}\u6642\u9593\u3050\u3089\u3044"},xHours:{one:"1\u6642\u9593",other:"{{count}}\u6642\u9593"},xDays:{one:"1\u65e5",other:"{{count}}\u65e5"},aboutXMonths:{one:"1\u30f6\u6708\u3050\u3089\u3044",other:"{{count}}\u30f6\u6708\u3050\u3089\u3044"},xMonths:{one:"1\u30f6\u6708",other:"{{count}}\u30f6\u6708"},aboutXYears:{one:"1\u5e74\u3050\u3089\u3044",other:"{{count}}\u5e74\u3050\u3089\u3044"},xYears:{one:"1\u5e74",other:"{{count}}\u5e74"},overXYears:{one:"1\u5e74\u4ee5\u4e0a",other:"{{count}}\u5e74\u4ee5\u4e0a"},almostXYears:{one:"1\u5e74\u4ee5\u4e0b",other:"{{count}}\u5e74\u4ee5\u4e0b",oneWithSuffix:"1\u5e74\u3050\u3089\u3044",otherWithSuffix:"{{count}}\u5e74\u3050\u3089\u3044"}};return{localize:function(o,n,e){var r;return e=e||{},r="string"===typeof t[o]?t[o]:1===n?e.addSuffix&&t[o].oneWithSuffix?t[o].oneWithSuffix:t[o].one:e.addSuffix&&t[o].otherWithSuffix?t[o].otherWithSuffix.replace("{{count}}",n):t[o].other.replace("{{count}}",n),e.addSuffix?e.comparison>0?r+"\u5f8c":r+"\u524d":r}}}},1215:function(t,o,n){var e=n(734);t.exports=function(){var t=["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],o=["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],n=["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"],r=["\u65e5\u66dc","\u6708\u66dc","\u706b\u66dc","\u6c34\u66dc","\u6728\u66dc","\u91d1\u66dc","\u571f\u66dc"],u=["\u65e5\u66dc\u65e5","\u6708\u66dc\u65e5","\u706b\u66dc\u65e5","\u6c34\u66dc\u65e5","\u6728\u66dc\u65e5","\u91d1\u66dc\u65e5","\u571f\u66dc\u65e5"],i=["\u5348\u524d","\u5348\u5f8c"],c=["\u5348\u524d","\u5348\u5f8c"],f=["\u5348\u524d","\u5348\u5f8c"],a={MMM:function(o){return t[o.getMonth()]},MMMM:function(t){return o[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return u[t.getDay()]},A:function(t){return t.getHours()/12>=1?i[1]:i[0]},a:function(t){return t.getHours()/12>=1?c[1]:c[0]},aa:function(t){return t.getHours()/12>=1?f[1]:f[0]}};return["M","D","DDD","d","Q","W"].forEach((function(t){a[t+"o"]=function(o,n){return n[t](o)+"\u65e5"}})),{formatters:a,formattingTokensRegExp:e(a)}}},2335:function(t,o,n){var e=n(1214),r=n(1215);t.exports={distanceInWords:e(),format:r()}}}]);