(()=>{"use strict";var t={43:(t,e,n)=>{n.d(e,{$L:()=>At,mW:()=>Gt});class r{constructor(t,e){this.title=t,this.description=e,this.todos=[],this.id=r.generateId()}static generateId(){return this.latestId?this.latestId++:this.latestId=1,this.latestId}addTodo(t){const e=new a(t);this.todos.push(e)}updateProject(t,e){this.title=t,this.description=e}getTodo(t){for(let e=0;e<this.todos.length;e++)if(this.todos[e].id===parseInt(t))return this.todos[e];return!1}}class a{constructor(t){console.log(t),this.title=t.title,this.description=t.description,this.priority=t.priority,this.dueDate=new Date(t.dueDate),this.active=!0,this.id=a.generateId()}static generateId(){return this.latestId?this.latestId++:this.latestId=1,this.latestId}updateTodo(t){this.title=t.title,this.description=t.description,this.priority=t.priority,this.dueDate=new Date(t.dueDate)}toggleActive(){this.active=!this.active}}function o(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){o(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function u(t){o(1,arguments);var e=i(t);return!isNaN(e)}var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var s,l={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},m={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function h(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function f(t){return function(e,n){var r=String(e),a=n||{},o=a.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=r.match(i);if(!u)return null;var c,d=u[0],s=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(d))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(d))return n}(s),c=t.valueCallback?t.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(d.length)}}}const g={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof c[t]?c[t]:1===e?c[t].one:c[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:l,formatRelative:function(t,e,n,r){return m[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:h({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:h({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:h({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:h({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:h({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(s={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(s.matchPattern);if(!a)return null;var o=a[0],i=n.match(s.parsePattern);if(!i)return null;var u=s.valueCallback?s.valueCallback(i[0]):i[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(o.length)}}),era:f({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:f({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:f({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:f({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:f({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function w(t,e){o(2,arguments);var n=i(t).getTime(),r=p(e);return new Date(n+r)}function v(t,e){o(2,arguments);var n=p(e);return w(t,-n)}function y(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const b=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return y("yy"===e?r%100:r,e.length)},T=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):y(n+1,2)},C=function(t,e){return y(t.getUTCDate(),e.length)},D=function(t,e){return y(t.getUTCHours()%12||12,e.length)},x=function(t,e){return y(t.getUTCHours(),e.length)},S=function(t,e){return y(t.getUTCMinutes(),e.length)},M=function(t,e){return y(t.getUTCSeconds(),e.length)},k=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return y(Math.floor(r*Math.pow(10,n-3)),e.length)};var P=864e5;function q(t){o(1,arguments);var e=1,n=i(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function U(t){o(1,arguments);var e=i(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=q(r),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var c=q(u);return e.getTime()>=a.getTime()?n+1:e.getTime()>=c.getTime()?n:n-1}function E(t){o(1,arguments);var e=U(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=q(n);return r}var N=6048e5;function L(t,e){o(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,u=null==a?0:p(a),c=null==n.weekStartsOn?u:p(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=i(t),s=d.getUTCDay(),l=(s<c?7:0)+s-c;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function j(t,e){o(1,arguments);var n=i(t,e),r=n.getUTCFullYear(),a=e||{},u=a.locale,c=u&&u.options&&u.options.firstWeekContainsDate,d=null==c?1:p(c),s=null==a.firstWeekContainsDate?d:p(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,s),l.setUTCHours(0,0,0,0);var m=L(l,e),h=new Date(0);h.setUTCFullYear(r,0,s),h.setUTCHours(0,0,0,0);var f=L(h,e);return n.getTime()>=m.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function W(t,e){o(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:p(a),u=null==n.firstWeekContainsDate?i:p(n.firstWeekContainsDate),c=j(t,e),d=new Date(0);d.setUTCFullYear(c,0,u),d.setUTCHours(0,0,0,0);var s=L(d,e);return s}var Y=6048e5;function O(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+y(o,2)}function z(t,e){return t%60==0?(t>0?"-":"+")+y(Math.abs(t)/60,2):I(t,e)}function I(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+y(Math.floor(a/60),2)+n+y(a%60,2)}const F={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b(t,e)},Y:function(t,e,n,r){var a=j(t,r),o=a>0?a:1-a;return"YY"===e?y(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):y(o,e.length)},R:function(t,e){return y(U(t),e.length)},u:function(t,e){return y(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return T(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){o(1,arguments);var n=i(t),r=L(n,e).getTime()-W(n,e).getTime();return Math.round(r/Y)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):y(a,e.length)},I:function(t,e,n){var r=function(t){o(1,arguments);var e=i(t),n=q(e).getTime()-E(e).getTime();return Math.round(n/N)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):y(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):C(t,e)},D:function(t,e,n){var r=function(t){o(1,arguments);var e=i(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/P)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):y(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return y(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return y(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return y(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return D(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):x(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):y(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):y(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):S(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):M(t,e)},S:function(t,e){return k(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return z(a);case"XXXX":case"XX":return I(a);case"XXXXX":case"XXX":default:return I(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return z(a);case"xxxx":case"xx":return I(a);case"xxxxx":case"xxx":default:return I(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+O(a,":");case"OOOO":default:return"GMT"+I(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+O(a,":");case"zzzz":default:return"GMT"+I(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return y(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return y((r._originalDate||t).getTime(),e.length)}};function H(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function B(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const X={p:B,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return H(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",H(a,e)).replace("{{time}}",B(o,e))}};var Q=6e4;function G(t){return t.getTime()%Q}function A(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(Q+G(e))%Q:G(e);return n*Q+r}var R=["D","DD"],$=["YY","YYYY"];function J(t){return-1!==R.indexOf(t)}function Z(t){return-1!==$.indexOf(t)}function _(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tt=/^'([^]*?)'?$/,et=/''/g,nt=/[a-zA-Z]/;function rt(t,e,n){o(2,arguments);var r=String(e),a=n||{},c=a.locale||g,d=c.options&&c.options.firstWeekContainsDate,s=null==d?1:p(d),l=null==a.firstWeekContainsDate?s:p(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=c.options&&c.options.weekStartsOn,h=null==m?0:p(m),f=null==a.weekStartsOn?h:p(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var w=i(t);if(!u(w))throw new RangeError("Invalid time value");var y=A(w),b=v(w,y),T={firstWeekContainsDate:l,weekStartsOn:f,locale:c,_originalDate:w},C=r.match(K).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,X[e])(t,c.formatLong,T):t})).join("").match(V).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return at(n);var o=F[r];if(o)return!a.useAdditionalWeekYearTokens&&Z(n)&&_(n,e,t),!a.useAdditionalDayOfYearTokens&&J(n)&&_(n,e,t),o(b,n,c.localize,T);if(r.match(nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return C}function at(t){return t.match(tt)[1].replace(et,"'")}var ot=36e5,it={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ut=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ct=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,dt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function st(t,e){o(1,arguments);var n=e||{},r=null==n.additionalDigits?2:p(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,i=lt(t);if(i.date){var u=mt(i.date,r);a=ht(u.restDateString,u.year)}if(isNaN(a)||!a)return new Date(NaN);var c,d=a.getTime(),s=0;if(i.time&&(s=gt(i.time),isNaN(s)||null===s))return new Date(NaN);if(!i.timezone){var l=new Date(d+s),m=new Date(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate(),l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds());return m.setFullYear(l.getUTCFullYear()),m}return c=wt(i.timezone),isNaN(c)?new Date(NaN):new Date(d+s+c)}function lt(t){var e,n={},r=t.split(it.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],it.timeZoneDelimiter.test(n.date)&&(n.date=t.split(it.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=it.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function mt(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),o=r[2]&&parseInt(r[2]);return{year:null==o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}function ht(t,e){if(null===e)return null;var n=t.match(ut);if(!n)return null;var r=!!n[4],a=ft(n[1]),o=ft(n[2])-1,i=ft(n[3]),u=ft(n[4]),c=ft(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,c)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,u,c):new Date(NaN);var d=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(vt[e]||(yt(t)?29:28))}(e,o,i)&&function(t,e){return e>=1&&e<=(yt(t)?366:365)}(e,a)?(d.setUTCFullYear(e,o,Math.max(a,i)),d):new Date(NaN)}function ft(t){return t?parseInt(t):1}function gt(t){var e=t.match(ct);if(!e)return null;var n=pt(e[1]),r=pt(e[2]),a=pt(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*ot+6e4*r+1e3*a:NaN}function pt(t){return t&&parseFloat(t.replace(",","."))||0}function wt(t){if("Z"===t)return 0;var e=t.match(dt);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*ot+6e4*a):NaN}var vt=[31,null,31,30,31,30,31,31,30,31,30,31];function yt(t){return t%400==0||t%4==0&&t%100}function bt(){return Gt(document.querySelector(".project-active").dataset.projectId)}function Tt(){Ut(),qt(),jt("New Project","Description");const t=document.querySelector("#todo-wrapper"),e=Dt();t.appendChild(e)}function Ct(){const t=document.querySelector("#todo-wrapper"),e=bt();Ut(),jt(e.title,e.description);const n=Dt(e.title,e.description,!0);t.appendChild(n)}function Dt(t="New Project",e="Description",n=!1){const r=document.createElement("div"),a=document.createElement("input"),o=document.createElement("input"),i=document.createElement("label"),u=document.createElement("label"),c=document.createElement("button");return a.type="text",o.type="text",a.id="title-input",o.id="desc-input",i.htmlFor="title-input",u.htmlFor="desc-input",i.textContent="Project Title",u.textContent="Project Description",r.classList.add("mt-2"),a.classList.add("form-control"),o.classList.add("form-control"),i.classList.add("form-label","mt-3"),u.classList.add("form-label","mt-3"),c.classList.add("btn","btn-success","mt-3"),n?(a.value=t,o.value=e):(a.placeholder="New Project",o.placeholder="Description"),n?(c.onclick=St,c.textContent="Edit Project"):(c.onclick=xt,c.textContent="Create Project"),r.appendChild(i),r.appendChild(a),r.appendChild(u),r.appendChild(o),r.appendChild(c),r}function xt(){const t=document.querySelector("#title-input").value,e=document.querySelector("#desc-input").value;if(Mt(t)){const n=At(t,e);Et(),Pt(n)}}function St(){const t=bt(),e=document.querySelector("#title-input").value,n=document.querySelector("#desc-input").value;(Mt(e)||t.title===e)&&(t.updateProject(e,n),Et(),Pt(t))}function Mt(t){const e=Gt();for(let n=0;n<e.length;n++)if(e[n].title===t)return!1;return!0}function kt(t){Pt(Gt(t.target.dataset.projectId))}function Pt(t){Ut(),qt(t.id),jt(t.title,t.description),zt(t.todos)}function qt(t=null){const e=document.querySelector(".project-active");null!=e&&e.classList.remove("project-active"),null!==t&&document.querySelector(`[data-project-id="${t}"]`).classList.add("project-active")}function Ut(){!function(){const t=document.querySelector("#project-title"),e=document.querySelector("#project-desc");t.innerHTML="",e.innerHTML=""}(),Lt()}function Et(){const t=document.querySelector("#nav-wrapper"),e=Gt();t.textContent="";for(let t=0;t<e.length;t++)Nt(e[t])}function Nt(t){const e=document.querySelector("#nav-wrapper"),n=document.createElement("div");n.classList.add("nav-link","project"),n.dataset.projectId=t.id,n.textContent=t.title,n.addEventListener("click",kt),e.appendChild(n)}function Lt(){document.querySelector("#todo-wrapper").innerHTML=""}function jt(t,e){const n=document.querySelector("#project-title"),r=document.querySelector("#project-desc");n.textContent=t,r.textContent=e}function Wt(t){let e={checkBox:document.createElement("input"),title:document.createElement("span"),description:document.createElement("span"),dueDate:document.createElement("span")};const n=document.createElement("div"),r=document.createElement("div");r.id=t.id,t.active||(r.classList.add("todo-inactive"),e.checkBox.checked="true"),n.classList.add("row"),r.classList.add("col-11","d-flex","justify-content-center","align-items-center","flex-row","todo"),e.checkBox.classList.add("todo-check"),e.title.classList.add("todo-title"),e.description.classList.add("flex-grow-1"),e.dueDate.classList.add("todo-date"),e.checkBox.type="checkbox",e.checkBox.name="todo-check",e.checkBox.addEventListener("click",Ot),e.title.textContent=t.title,e.description.textContent=t.description,e.dueDate.textContent=rt(t.dueDate,"dd-MM-yyyy");for(const t in e)Yt(e[t]),r.appendChild(e[t]);return n.appendChild(r),n}function Yt(t){"INPUT"!==t.tagName&&(t.dataset.bsToggle="modal",t.dataset.bsTarget="#todo-modal",t.addEventListener("click",Ht))}function Ot(t){const e=bt(),n=t.target.parentElement.id;e.getTodo(n).toggleActive(),Lt(),zt(e.todos)}function zt(t){const e=document.querySelector("#todo-wrapper");for(let n=0;n<t.length;n++){const r=Wt(t[n]);e.appendChild(r)}e.appendChild(function(){const t=document.createElement("div"),e=document.createElement("button");return t.classList.add("row"),e.classList.add("btn","btn-new-todo","col-3"),e.textContent="Add Todo",e.dataset.bsToggle="modal",e.dataset.bsTarget="#todo-modal",e.addEventListener("click",Bt),t.appendChild(e),t}())}function It(){const t=Xt(),e=bt();e.addTodo(t),Lt(),zt(e.todos)}function Ft(){const t=Xt(),e=bt(),n=document.querySelector("#btn-edit-todo").dataset.todoId;e.getTodo(n).updateTodo(t),Lt(),zt(e.todos)}function Ht(t){const e=bt(),n=t.target.parentElement.id,r=e.getTodo(n);document.querySelector("#btn-edit-todo").dataset.todoId=r.id,function(t){const e=document.querySelector("#modal-title"),n=document.querySelector("#todo-title"),r=document.querySelector("#todo-description"),a=document.querySelector("#todo-priority"),o=document.querySelector("#todo-date"),i=document.querySelector("#btn-edit-todo"),u=document.querySelector("#btn-submit-todo"),c=rt(t.dueDate,"yyyy-MM-dd");e.textContent="Edit Todo",i.classList.remove("hidden"),u.classList.add("hidden"),n.value=t.title,r.value=t.description,a.value=parseInt(t.priority),o.value=c}(r)}function Bt(){const t=document.querySelector("#modal-title"),e=document.querySelector("#todo-title"),n=document.querySelector("#todo-description"),r=document.querySelector("#todo-priority"),a=document.querySelector("#todo-date"),o=document.querySelector("#btn-edit-todo"),i=document.querySelector("#btn-submit-todo");t.textContent="New Todo",o.classList.add("hidden"),i.classList.remove("hidden"),e.value=null,n.value=null,r.value=null,a.value=null}function Xt(){return{title:document.querySelector("#todo-title").value,description:document.querySelector("#todo-description").value,priority:document.querySelector("#todo-priority").value,dueDate:st(document.querySelector("#todo-date").value)}}const Qt=[];function Gt(t){return void 0===t?Qt:Qt[t-1]}function At(t,e){const n=new r(t,e);return Qt.push(n),n}At("one","test project ONE!"),At("two","test project TWO!"),Qt[0].addTodo({title:"example1",description:"example desc",priority:1,dueDate:"12-12-2020",active:!1}),Qt[0].addTodo({title:"example2",description:"example 2 desc",priority:2,dueDate:"03-20-1995",active:!0}),function(){const t=Gt();!function(){const t=document.querySelector("#btn-new-project"),e=document.querySelector("#btn-edit-project"),n=document.querySelector("#btn-submit-todo"),r=document.querySelector("#btn-edit-todo");t.addEventListener("click",Tt),e.addEventListener("click",Ct),n.addEventListener("click",It),r.addEventListener("click",Ft)}(),Et(),Pt(t[0])}()}},e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(43)})();