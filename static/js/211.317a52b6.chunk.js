(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[211],{1197:function(o,e){o.exports=function(){var o={lessThanXSeconds:{one:"1\u79d2\u4ee5\u4e0b",other:"{{count}}\u79d2\u4ee5\u4e0b"},xSeconds:{one:"1\u79d2",other:"{{count}}\u79d2"},halfAMinute:"30\u79d2\u3050\u3089\u3044",lessThanXMinutes:{one:"1\u5206\u4ee5\u4e0b",other:"{{count}}\u5206\u4ee5\u4e0b"},xMinutes:{one:"1\u5206",other:"{{count}}\u5206"},aboutXHours:{one:"1\u6642\u9593\u3050\u3089\u3044",other:"{{count}}\u6642\u9593\u3050\u3089\u3044"},xHours:{one:"1\u6642\u9593",other:"{{count}}\u6642\u9593"},xDays:{one:"1\u65e5",other:"{{count}}\u65e5"},aboutXMonths:{one:"1\u30f6\u6708\u3050\u3089\u3044",other:"{{count}}\u30f6\u6708\u3050\u3089\u3044"},xMonths:{one:"1\u30f6\u6708",other:"{{count}}\u30f6\u6708"},aboutXYears:{one:"1\u5e74\u3050\u3089\u3044",other:"{{count}}\u5e74\u3050\u3089\u3044"},xYears:{one:"1\u5e74",other:"{{count}}\u5e74"},overXYears:{one:"1\u5e74\u4ee5\u4e0a",other:"{{count}}\u5e74\u4ee5\u4e0a"},almostXYears:{one:"1\u5e74\u4ee5\u4e0b",other:"{{count}}\u5e74\u4ee5\u4e0b",oneWithSuffix:"1\u5e74\u3050\u3089\u3044",otherWithSuffix:"{{count}}\u5e74\u3050\u3089\u3044"}};return{localize:function(e,t,n){var u;return n=n||{},u="string"===typeof o[e]?o[e]:1===t?n.addSuffix&&o[e].oneWithSuffix?o[e].oneWithSuffix:o[e].one:n.addSuffix&&o[e].otherWithSuffix?o[e].otherWithSuffix.replace("{{count}}",t):o[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?u+"\u5f8c":u+"\u524d":u}}}}}]);