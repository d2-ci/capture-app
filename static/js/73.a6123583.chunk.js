(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{517:function(e,n){e.exports=function(){var e={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"rundt en time",other:"rundt {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXMonths:{one:"rundt en m\xe5ned",other:"rundt {{count}} m\xe5neder"},xMonths:{one:"en m\xe5ned",other:"{{count}} m\xe5neder"},aboutXYears:{one:"rundt ett \xe5r",other:"rundt {{count}} \xe5r"},xYears:{one:"ett \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over ett \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"nesten ett \xe5r",other:"nesten {{count}} \xe5r"}};return{localize:function(n,t,o){var r;return o=o||{},r="string"===typeof e[n]?e[n]:1===t?e[n].one:e[n].other.replace("{{count}}",t),o.addSuffix?o.comparison>0?"om "+r:r+" siden":r}}}}}]);