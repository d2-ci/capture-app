(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[227],{1208:function(n,i){function u(n,i){if(void 0!==n.one&&1===i)return n.one;var u=i%10,t=i%100;return 1===u&&11!==t?n.singularNominative.replace("{{count}}",i):u>=2&&u<=4&&(t<10||t>20)?n.singularGenitive.replace("{{count}}",i):n.pluralGenitive.replace("{{count}}",i)}function t(n){return function(i,t){return t.addSuffix?t.comparison>0?n.future?u(n.future,i):"\u0447\u0435\u0440\u0435\u0437 "+u(n.regular,i):n.past?u(n.past,i):u(n.regular,i)+" \u043d\u0430\u0437\u0430\u0434":u(n.regular,i)}}n.exports=function(){var n={lessThanXSeconds:t({regular:{one:"\u043c\u0435\u043d\u044c\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434\u044b",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},future:{one:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),xSeconds:t({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u043d\u0430\u0437\u0430\u0434",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u043d\u0430\u0437\u0430\u0434",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u043d\u0430\u0437\u0430\u0434"},future:{singularNominative:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),halfAMinute:function(n,i){return i.addSuffix?i.comparison>0?"\u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u043b\u043c\u0438\u043d\u0443\u0442\u044b":"\u043f\u043e\u043b\u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434":"\u043f\u043e\u043b\u043c\u0438\u043d\u0443\u0442\u044b"},lessThanXMinutes:t({regular:{one:"\u043c\u0435\u043d\u044c\u0448\u0435 \u043c\u0438\u043d\u0443\u0442\u044b",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u043c\u0438\u043d\u0443\u0442\u044b",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u043c\u0438\u043d\u0443\u0442",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u043c\u0438\u043d\u0443\u0442"},future:{one:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u043c\u0438\u043d\u0443\u0442\u0443",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u0443",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u044b",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442"}}),xMinutes:t({regular:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0430",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u044b",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442"},past:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434"},future:{singularNominative:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u0443",singularGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u044b",pluralGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442"}}),aboutXHours:t({regular:{singularNominative:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u0430",singularGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u043e\u0432",pluralGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u043e\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u0430",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u043e\u0432"}}),xHours:t({regular:{singularNominative:"{{count}} \u0447\u0430\u0441",singularGenitive:"{{count}} \u0447\u0430\u0441\u0430",pluralGenitive:"{{count}} \u0447\u0430\u0441\u043e\u0432"}}),xDays:t({regular:{singularNominative:"{{count}} \u0434\u0435\u043d\u044c",singularGenitive:"{{count}} \u0434\u043d\u044f",pluralGenitive:"{{count}} \u0434\u043d\u0435\u0439"}}),aboutXMonths:t({regular:{singularNominative:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",singularGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432",pluralGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432"}}),xMonths:t({regular:{singularNominative:"{{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0430",pluralGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432"}}),aboutXYears:t({regular:{singularNominative:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0433\u043e\u0434\u0430",singularGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043b\u0435\u0442",pluralGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043b\u0435\u0442"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043b\u0435\u0442"}}),xYears:t({regular:{singularNominative:"{{count}} \u0433\u043e\u0434",singularGenitive:"{{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"{{count}} \u043b\u0435\u0442"}}),overXYears:t({regular:{singularNominative:"\u0431\u043e\u043b\u044c\u0448\u0435 {{count}} \u0433\u043e\u0434\u0430",singularGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435 {{count}} \u043b\u0435\u0442",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435 {{count}} \u043b\u0435\u0442"},future:{singularNominative:"\u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043b\u0435\u0442"}}),almostXYears:t({regular:{singularNominative:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u043b\u0435\u0442"},future:{singularNominative:"\u043f\u043e\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u043e\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u043f\u043e\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043b\u0435\u0442"}})};return{localize:function(i,u,t){return t=t||{},n[i](u,t)}}}}}]);