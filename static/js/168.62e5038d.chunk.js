(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[168,229,230],{1304:function(n,u){function i(n,u){if(void 0!==n.one&&1===u)return n.one;var i=u%10,t=u%100;return 1===i&&11!==t?n.singularNominative.replace("{{count}}",u):i>=2&&i<=4&&(t<10||t>20)?n.singularGenitive.replace("{{count}}",u):n.pluralGenitive.replace("{{count}}",u)}function t(n){return function(u,t){return t.addSuffix?t.comparison>0?n.future?i(n.future,u):"\u0447\u0435\u0440\u0435\u0437 "+i(n.regular,u):n.past?i(n.past,u):i(n.regular,u)+" \u043d\u0430\u0437\u0430\u0434":i(n.regular,u)}}n.exports=function(){var n={lessThanXSeconds:t({regular:{one:"\u043c\u0435\u043d\u044c\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434\u044b",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},future:{one:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),xSeconds:t({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u043d\u0430\u0437\u0430\u0434",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u043d\u0430\u0437\u0430\u0434",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u043d\u0430\u0437\u0430\u0434"},future:{singularNominative:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),halfAMinute:function(n,u){return u.addSuffix?u.comparison>0?"\u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u043b\u043c\u0438\u043d\u0443\u0442\u044b":"\u043f\u043e\u043b\u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434":"\u043f\u043e\u043b\u043c\u0438\u043d\u0443\u0442\u044b"},lessThanXMinutes:t({regular:{one:"\u043c\u0435\u043d\u044c\u0448\u0435 \u043c\u0438\u043d\u0443\u0442\u044b",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u043c\u0438\u043d\u0443\u0442\u044b",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u043c\u0438\u043d\u0443\u0442",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u043c\u0438\u043d\u0443\u0442"},future:{one:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u043c\u0438\u043d\u0443\u0442\u0443",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u0443",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u044b",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442"}}),xMinutes:t({regular:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0430",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u044b",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442"},past:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434"},future:{singularNominative:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u0443",singularGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u044b",pluralGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442"}}),aboutXHours:t({regular:{singularNominative:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u0430",singularGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u043e\u0432",pluralGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u043e\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u0430",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u043e\u0432"}}),xHours:t({regular:{singularNominative:"{{count}} \u0447\u0430\u0441",singularGenitive:"{{count}} \u0447\u0430\u0441\u0430",pluralGenitive:"{{count}} \u0447\u0430\u0441\u043e\u0432"}}),xDays:t({regular:{singularNominative:"{{count}} \u0434\u0435\u043d\u044c",singularGenitive:"{{count}} \u0434\u043d\u044f",pluralGenitive:"{{count}} \u0434\u043d\u0435\u0439"}}),aboutXMonths:t({regular:{singularNominative:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",singularGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432",pluralGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432"}}),xMonths:t({regular:{singularNominative:"{{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0430",pluralGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432"}}),aboutXYears:t({regular:{singularNominative:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0433\u043e\u0434\u0430",singularGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043b\u0435\u0442",pluralGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043b\u0435\u0442"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043b\u0435\u0442"}}),xYears:t({regular:{singularNominative:"{{count}} \u0433\u043e\u0434",singularGenitive:"{{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"{{count}} \u043b\u0435\u0442"}}),overXYears:t({regular:{singularNominative:"\u0431\u043e\u043b\u044c\u0448\u0435 {{count}} \u0433\u043e\u0434\u0430",singularGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435 {{count}} \u043b\u0435\u0442",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435 {{count}} \u043b\u0435\u0442"},future:{singularNominative:"\u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043b\u0435\u0442"}}),almostXYears:t({regular:{singularNominative:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u043b\u0435\u0442"},future:{singularNominative:"\u043f\u043e\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u043e\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u043f\u043e\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043b\u0435\u0442"}})};return{localize:function(u,i,t){return t=t||{},n[u](i,t)}}}},1305:function(n,u,i){var t=i(810);n.exports=function(){var n=["\u044f\u043d\u0432.","\u0444\u0435\u0432.","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440.","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433.","\u0441\u0435\u043d\u0442.","\u043e\u043a\u0442.","\u043d\u043e\u044f\u0431.","\u0434\u0435\u043a."],u=["\u044f\u043d\u0432\u0430\u0440\u044c","\u0444\u0435\u0432\u0440\u0430\u043b\u044c","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0435\u043b\u044c","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u043e\u043a\u0442\u044f\u0431\u0440\u044c","\u043d\u043e\u044f\u0431\u0440\u044c","\u0434\u0435\u043a\u0430\u0431\u0440\u044c"],i=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"],e=["\u0432\u0441","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],r=["\u0432\u0441\u043a","\u043f\u043d\u0434","\u0432\u0442\u0440","\u0441\u0440\u0434","\u0447\u0442\u0432","\u043f\u0442\u043d","\u0441\u0443\u0431"],o=["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043e\u0442\u0430"],a=["\u043d\u043e\u0447\u0438","\u0443\u0442\u0440\u0430","\u0434\u043d\u044f","\u0432\u0435\u0447\u0435\u0440\u0430"],l={MMM:function(u){return n[u.getMonth()]},MMMM:function(n){return u[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){var u=n.getHours();return u>=17?a[3]:u>=12?a[2]:u>=4?a[1]:a[0]},Do:function(n,u){return u.D(n)+"-\u0435"},Wo:function(n,u){return u.W(n)+"-\u044f"}};return l.a=l.A,l.aa=l.A,["M","DDD","d","Q"].forEach((function(n){l[n+"o"]=function(u,i){return i[n](u)+"-\u0439"}})),["D","Do","DD"].forEach((function(n){l[n+" MMMM"]=function(u,t){return(l[n]||t[n])(u,t)+" "+i[u.getMonth()]}})),{formatters:l,formattingTokensRegExp:t(l)}}},2415:function(n,u,i){var t=i(1304),e=i(1305);n.exports={distanceInWords:t(),format:e()}}}]);