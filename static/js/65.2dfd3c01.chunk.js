(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{509:function(n,o){n.exports=function(){var n={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"pi\xf9 di un anno",other:"pi\xf9 di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}};return{localize:function(o,e,t){var u;return t=t||{},u="string"===typeof n[o]?n[o]:1===e?n[o].one:n[o].other.replace("{{count}}",e),t.addSuffix?t.comparison>0?"tra "+u:u+" fa":u}}}}}]);