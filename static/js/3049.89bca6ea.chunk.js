(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[3049],{83049:function(e){e.exports=function(){var e={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yar\u0131m dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yakla\u015f\u0131k 1 saat",other:"yakla\u015f\u0131k {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 g\xfcn",other:"{{count}} g\xfcn"},aboutXMonths:{one:"yakla\u015f\u0131k 1 ay",other:"yakla\u015f\u0131k {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yakla\u015f\u0131k 1 y\u0131l",other:"yakla\u015f\u0131k {{count}} y\u0131l"},xYears:{one:"1 y\u0131l",other:"{{count}} y\u0131l"},overXYears:{one:"1 y\u0131ldan fazla",other:"{{count}} y\u0131ldan fazla"},almostXYears:{one:"neredeyse 1 y\u0131l",other:"neredeyse {{count}} y\u0131l"}},a=["lessThanXSeconds","lessThanXMinutes","overXYears"];return{localize:function(n,o,t){var s;if(t=t||{},s="string"===typeof e[n]?e[n]:1===o?e[n].one:e[n].other.replace("{{count}}",o),t.addSuffix){var r="";return a.indexOf(n)>-1&&(r=" bir s\xfcre"),t.comparison>0?s+r+" i\xe7inde":s+r+" \xf6nce"}return s}}}}}]);