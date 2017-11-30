
; /* Start:"a:4:{s:4:"full";s:59:"https://www.humdes.com/local/templates/hd/js/jquery-1.12.3.min.js?150944903897180";s:6:"source";s:43:"/local/templates/hd/js/jquery-1.12.3.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v1.12.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0;
})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:47:"/local/templates/hd/js/libs.js?1500158720205918";s:6:"source";s:30:"/local/templates/hd/js/libs.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function onYouTubeIframeAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}function uncamel(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function setUnit(e,t){return"string"!=typeof e||e.match(/^[\-0-9\.]+jQuery/)?""+e+t:e}function setFilter(e,t,i){var o=uncamel(t),n=jQuery.browser.mozilla?"":jQuery.CSS.sfx;e[n+"filter"]=e[n+"filter"]||"",i=setUnit(i>jQuery.CSS.filters[t].max?jQuery.CSS.filters[t].max:i,jQuery.CSS.filters[t].unit),e[n+"filter"]+=o+"("+i+") ",delete e[t]}function initHeader(){width=$headerSizer.width(),height=$headerSizer.height(),canvas=document.getElementById("particles"),canvas.width=width,canvas.height=height,ctx=canvas.getContext("2d"),circles=[];for(var e=0;e<.5*width;e++){var t=new Circle;circles.push(t)}animate()}function addListeners(){window.addEventListener("scroll",scrollCheck),window.addEventListener("resize",resize)}function scrollCheck(){animateHeader=!(document.body.scrollTop>height)}function resize(){width=$headerSizer.width(),height=$headerSizer.height(),canvas.width=width,canvas.height=height}function animate(){if(animateHeader){ctx.clearRect(0,0,width,height);for(var e in circles)circles[e].draw()}requestAnimationFrame(animate)}function Circle(){function e(){t.pos.x=Math.random()*width,t.pos.y=height+100*Math.random(),t.alpha=.1+.3*Math.random(),t.scale=.1+.3*Math.random(),t.velocity=Math.random()}var t=this;!function(){t.pos={},e()}(),this.draw=function(){t.alpha<=0&&e(),t.pos.y-=t.velocity,t.alpha-=4e-4,ctx.beginPath(),ctx.arc(t.pos.x,t.pos.y,10*t.scale,0,2*Math.PI,!1),ctx.fillStyle="rgba(255,255,255,"+t.alpha+")",ctx.fill()}}(function(){var e,t,i,o,n,r,s,a,l,d,c,u,p,f,h,y,g,m,v,T,w,b,P,k,S,x,Y,C,j,Q,O,A,I,_,L,E,$,M,z,B,D,F,H,W,R,q,U,V,N,X=[].slice,G={}.hasOwnProperty,K=function(e,t){function i(){this.constructor=e}for(var o in t)G.call(t,o)&&(e[o]=t[o]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},Z=[].indexOf||function(e){for(var t=0,i=this.length;i>t;t++)if(t in this&&this[t]===e)return t;return-1};for(w={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},j=function(){var e;return null!=(e="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?e:+new Date},O=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,T=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==O&&(O=function(e){return setTimeout(e,50)},T=function(e){return clearTimeout(e)}),I=function(e){var t,i;return t=j(),(i=function(){var o;return o=j()-t,o>=33?(t=j(),e(o,function(){return O(i)})):setTimeout(i,33-o)})()},A=function(){var e,t,i;return i=arguments[0],t=arguments[1],e=3<=arguments.length?X.call(arguments,2):[],"function"==typeof i[t]?i[t].apply(i,e):i[t]},b=function(){var e,t,i,o,n,r,s;for(t=arguments[0],o=2<=arguments.length?X.call(arguments,1):[],r=0,s=o.length;s>r;r++)if(i=o[r])for(e in i)G.call(i,e)&&(n=i[e],null!=t[e]&&"object"==typeof t[e]&&null!=n&&"object"==typeof n?b(t[e],n):t[e]=n);return t},g=function(e){var t,i,o,n,r;for(i=t=0,n=0,r=e.length;r>n;n++)o=e[n],i+=Math.abs(o),t++;return i/t},k=function(e,t){var i,o,n;if(null==e&&(e="options"),null==t&&(t=!0),n=document.querySelector("[data-pace-"+e+"]")){if(i=n.getAttribute("data-pace-"+e),!t)return i;try{return JSON.parse(i)}catch(e){return o=e,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",o):void 0}}},s=function(){function e(){}return e.prototype.on=function(e,t,i,o){var n;return null==o&&(o=!1),null==this.bindings&&(this.bindings={}),null==(n=this.bindings)[e]&&(n[e]=[]),this.bindings[e].push({handler:t,ctx:i,once:o})},e.prototype.once=function(e,t,i){return this.on(e,t,i,!0)},e.prototype.off=function(e,t){var i,o,n;if(null!=(null!=(o=this.bindings)?o[e]:void 0)){if(null==t)return delete this.bindings[e];for(i=0,n=[];i<this.bindings[e].length;)n.push(this.bindings[e][i].handler===t?this.bindings[e].splice(i,1):i++);return n}},e.prototype.trigger=function(){var e,t,i,o,n,r,s,a,l;if(i=arguments[0],e=2<=arguments.length?X.call(arguments,1):[],null!=(s=this.bindings)?s[i]:void 0){for(n=0,l=[];n<this.bindings[i].length;)a=this.bindings[i][n],o=a.handler,t=a.ctx,r=a.once,o.apply(null!=t?t:this,e),l.push(r?this.bindings[i].splice(n,1):n++);return l}},e}(),d=window.Pace||{},window.Pace=d,b(d,s.prototype),Q=d.options=b({},w,window.paceOptions,k()),U=["ajax","document","eventLag","elements"],H=0,R=U.length;R>H;H++)$=U[H],Q[$]===!0&&(Q[$]=w[$]);l=function(e){function t(){return V=t.__super__.constructor.apply(this,arguments)}return K(t,e),t}(Error),t=function(){function e(){this.progress=0}return e.prototype.getElement=function(){var e;if(null==this.el){if(e=document.querySelector(Q.target),!e)throw new l;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=e.firstChild?e.insertBefore(this.el,e.firstChild):e.appendChild(this.el)}return this.el},e.prototype.finish=function(){var e;return e=this.getElement(),e.className=e.className.replace("pace-active",""),e.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},e.prototype.update=function(e){return this.progress=e,this.render()},e.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(e){l=e}return this.el=void 0},e.prototype.render=function(){var e,t,i,o,n,r,s;if(null==document.querySelector(Q.target))return!1;for(e=this.getElement(),o="translate3d("+this.progress+"%, 0, 0)",s=["webkitTransform","msTransform","transform"],n=0,r=s.length;r>n;n++)t=s[n],e.children[0].style[t]=o;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(e.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?i="99":(i=this.progress<10?"0":"",i+=0|this.progress),e.children[0].setAttribute("data-progress",""+i)),this.lastRenderedProgress=this.progress},e.prototype.done=function(){return this.progress>=100},e}(),a=function(){function e(){this.bindings={}}return e.prototype.trigger=function(e,t){var i,o,n,r,s;if(null!=this.bindings[e]){for(r=this.bindings[e],s=[],o=0,n=r.length;n>o;o++)i=r[o],s.push(i.call(this,t));return s}},e.prototype.on=function(e,t){var i;return null==(i=this.bindings)[e]&&(i[e]=[]),this.bindings[e].push(t)},e}(),F=window.XMLHttpRequest,D=window.XDomainRequest,B=window.WebSocket,P=function(e,t){var i,o,n,r;r=[];for(o in t.prototype)try{n=t.prototype[o],r.push(null==e[o]&&"function"!=typeof n?e[o]=n:void 0)}catch(e){i=e}return r},Y=[],d.ignore=function(){var e,t,i;return t=arguments[0],e=2<=arguments.length?X.call(arguments,1):[],Y.unshift("ignore"),i=t.apply(null,e),Y.shift(),i},d.track=function(){var e,t,i;return t=arguments[0],e=2<=arguments.length?X.call(arguments,1):[],Y.unshift("track"),i=t.apply(null,e),Y.shift(),i},E=function(e){var t;if(null==e&&(e="GET"),"track"===Y[0])return"force";if(!Y.length&&Q.ajax){if("socket"===e&&Q.ajax.trackWebSockets)return!0;if(t=e.toUpperCase(),Z.call(Q.ajax.trackMethods,t)>=0)return!0}return!1},c=function(e){function t(){var e,i=this;t.__super__.constructor.apply(this,arguments),e=function(e){var t;return t=e.open,e.open=function(o,n){return E(o)&&i.trigger("request",{type:o,url:n,request:e}),t.apply(e,arguments)}},window.XMLHttpRequest=function(t){var i;return i=new F(t),e(i),i};try{P(window.XMLHttpRequest,F)}catch(e){}if(null!=D){window.XDomainRequest=function(){var t;return t=new D,e(t),t};try{P(window.XDomainRequest,D)}catch(e){}}if(null!=B&&Q.ajax.trackWebSockets){window.WebSocket=function(e,t){var o;return o=null!=t?new B(e,t):new B(e),E("socket")&&i.trigger("request",{type:"socket",url:e,protocols:t,request:o}),o};try{P(window.WebSocket,B)}catch(e){}}}return K(t,e),t}(a),W=null,S=function(){return null==W&&(W=new c),W},L=function(e){var t,i,o,n;for(n=Q.ajax.ignoreURLs,i=0,o=n.length;o>i;i++)if(t=n[i],"string"==typeof t){if(-1!==e.indexOf(t))return!0}else if(t.test(e))return!0;return!1},S().on("request",function(t){var i,o,n,r,s;return r=t.type,n=t.request,s=t.url,L(s)?void 0:d.running||Q.restartOnRequestAfter===!1&&"force"!==E(r)?void 0:(o=arguments,i=Q.restartOnRequestAfter||0,"boolean"==typeof i&&(i=0),setTimeout(function(){var t,i,s,a,l,c;if(t="socket"===r?n.readyState<2:0<(a=n.readyState)&&4>a){for(d.restart(),l=d.sources,c=[],i=0,s=l.length;s>i;i++){if($=l[i],$ instanceof e){$.watch.apply($,o);break}c.push(void 0)}return c}},i))}),e=function(){function e(){var e=this;this.elements=[],S().on("request",function(){return e.watch.apply(e,arguments)})}return e.prototype.watch=function(e){var t,i,o,n;return o=e.type,t=e.request,n=e.url,L(n)?void 0:(i="socket"===o?new f(t):new h(t),this.elements.push(i))},e}(),h=function(){function e(e){var t,i,o,n,r,s,a=this;if(this.progress=0,null!=window.ProgressEvent)for(i=null,e.addEventListener("progress",function(e){return a.progress=e.lengthComputable?100*e.loaded/e.total:a.progress+(100-a.progress)/2},!1),s=["load","abort","timeout","error"],o=0,n=s.length;n>o;o++)t=s[o],e.addEventListener(t,function(){return a.progress=100},!1);else r=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?a.progress=100:3===e.readyState&&(a.progress=50),"function"==typeof r?r.apply(null,arguments):void 0}}return e}(),f=function(){function e(e){var t,i,o,n,r=this;for(this.progress=0,n=["error","open"],i=0,o=n.length;o>i;i++)t=n[i],e.addEventListener(t,function(){return r.progress=100},!1)}return e}(),o=function(){function e(e){var t,i,o,r;for(null==e&&(e={}),this.elements=[],null==e.selectors&&(e.selectors=[]),r=e.selectors,i=0,o=r.length;o>i;i++)t=r[i],this.elements.push(new n(t))}return e}(),n=function(){function e(e){this.selector=e,this.progress=0,this.check()}return e.prototype.check=function(){var e=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return e.check()},Q.elements.checkInterval)},e.prototype.done=function(){return this.progress=100},e}(),i=function(){function e(){var e,t,i=this;this.progress=null!=(t=this.states[document.readyState])?t:100,e=document.onreadystatechange,document.onreadystatechange=function(){return null!=i.states[document.readyState]&&(i.progress=i.states[document.readyState]),"function"==typeof e?e.apply(null,arguments):void 0}}return e.prototype.states={loading:0,interactive:50,complete:100},e}(),r=function(){function e(){var e,t,i,o,n,r=this;this.progress=0,e=0,n=[],o=0,i=j(),t=setInterval(function(){var s;return s=j()-i-50,i=j(),n.push(s),n.length>Q.eventLag.sampleCount&&n.shift(),e=g(n),++o>=Q.eventLag.minSamples&&e<Q.eventLag.lagThreshold?(r.progress=100,clearInterval(t)):r.progress=100*(3/(e+3))},50)}return e}(),p=function(){function e(e){this.source=e,this.last=this.sinceLastUpdate=0,this.rate=Q.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=A(this.source,"progress"))}return e.prototype.tick=function(e,t){var i;return null==t&&(t=A(this.source,"progress")),t>=100&&(this.done=!0),t===this.last?this.sinceLastUpdate+=e:(this.sinceLastUpdate&&(this.rate=(t-this.last)/this.sinceLastUpdate),this.catchup=(t-this.progress)/Q.catchupTime,this.sinceLastUpdate=0,this.last=t),t>this.progress&&(this.progress+=this.catchup*e),i=1-Math.pow(this.progress/100,Q.easeFactor),this.progress+=i*this.rate*e,this.progress=Math.min(this.lastProgress+Q.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},e}(),M=null,_=null,m=null,z=null,y=null,v=null,d.running=!1,x=function(){return Q.restartOnPushState?d.restart():void 0},null!=window.history.pushState&&(q=window.history.pushState,window.history.pushState=function(){return x(),q.apply(window.history,arguments)}),null!=window.history.replaceState&&(N=window.history.replaceState,window.history.replaceState=function(){return x(),N.apply(window.history,arguments)}),u={ajax:e,elements:o,document:i,eventLag:r},(C=function(){var e,i,o,n,r,s,a,l;for(d.sources=M=[],s=["ajax","elements","document","eventLag"],i=0,n=s.length;n>i;i++)e=s[i],Q[e]!==!1&&M.push(new u[e](Q[e]));for(l=null!=(a=Q.extraSources)?a:[],o=0,r=l.length;r>o;o++)$=l[o],M.push(new $(Q));return d.bar=m=new t,_=[],z=new p})(),d.stop=function(){return d.trigger("stop"),d.running=!1,m.destroy(),v=!0,null!=y&&("function"==typeof T&&T(y),y=null),C()},d.restart=function(){return d.trigger("restart"),d.stop(),d.start()},d.go=function(){var e;return d.running=!0,m.render(),e=j(),v=!1,y=I(function(t,i){var o,n,r,s,a,l,c,u,f,h,y,g,T,w,b,P;for(u=100-m.progress,n=y=0,r=!0,l=g=0,w=M.length;w>g;l=++g)for($=M[l],h=null!=_[l]?_[l]:_[l]=[],a=null!=(P=$.elements)?P:[$],c=T=0,b=a.length;b>T;c=++T)s=a[c],f=null!=h[c]?h[c]:h[c]=new p(s),r&=f.done,f.done||(n++,y+=f.tick(t));return o=y/n,m.update(z.tick(t,o)),m.done()||r||v?(m.update(100),d.trigger("done"),setTimeout(function(){return m.finish(),d.running=!1,d.trigger("hide")},Math.max(Q.ghostTime,Math.max(Q.minTime-(j()-e),0)))):i()})},d.start=function(e){b(Q,e),d.running=!0;try{m.render()}catch(e){l=e}return document.querySelector(".pace")?(d.trigger("start"),d.go()):setTimeout(d.start,50)},"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof exports?module.exports=d:Q.startOnPageLoad&&d.start()}).call(this),!function(e,t){"use strict";var i=function(){var i={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},o=function(){var t=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);return t&&e("html").css("cursor","pointer").on("click",e.noop),t}(),n=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),r=function(){return!!t.PointerEvent}(),s=function(e,t,o){var n,r=i.menuClass;t.cssArrows&&(r+=" "+i.menuArrowClass),n=o?"addClass":"removeClass",e[n](r)},a=function(t,o){return t.find("li."+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+" "+i.bcClass).filter(function(){return e(this).children(o.popUpSelector).hide().show().length}).removeClass(o.pathClass)},l=function(e,t){var o=t?"addClass":"removeClass";e.children("a")[o](i.anchorClass)},d=function(e){var t=e.css("ms-touch-action"),i=e.css("touch-action");i=i||t,i="pan-y"===i?"auto":"pan-y",e.css({"ms-touch-action":i,"touch-action":i})},c=function(e){return e.closest("."+i.menuClass)},u=function(e){return c(e).data("sfOptions")},p=function(){var t=e(this),i=u(t);clearTimeout(i.sfTimer),t.siblings().superfish("hide").end().superfish("show")},f=function(t){t.retainPath=e.inArray(this[0],t.$path)>-1,this.superfish("hide"),this.parents("."+t.hoverClass).length||(t.onIdle.call(c(this)),t.$path.length&&e.proxy(p,t.$path)())},h=function(){var t=e(this),i=u(t);o?e.proxy(f,t,i)():(clearTimeout(i.sfTimer),i.sfTimer=setTimeout(e.proxy(f,t,i),i.delay))},y=function(t){var i=e(this),o=u(i),n=i.siblings(t.data.popUpSelector);return o.onHandleTouch.call(n)===!1?this:void(n.length>0&&n.is(":hidden")&&(i.one("click.superfish",!1),"MSPointerDown"===t.type||"pointerdown"===t.type?i.trigger("focus"):e.proxy(p,i.parent("li"))()))},g=function(t,i){var s="li:has("+i.popUpSelector+")";e.fn.hoverIntent&&!i.disableHI?t.hoverIntent(p,h,s):t.on("mouseenter.superfish",s,p).on("mouseleave.superfish",s,h);var a="MSPointerDown.superfish";r&&(a="pointerdown.superfish"),o||(a+=" touchend.superfish"),n&&(a+=" mousedown.superfish"),t.on("focusin.superfish","li",p).on("focusout.superfish","li",h).on(a,"a",i,y)};return{hide:function(t){if(this.length){var i=this,o=u(i);if(!o)return this;var n=o.retainPath===!0?o.$path:"",r=i.find("li."+o.hoverClass).add(this).not(n).removeClass(o.hoverClass).children(o.popUpSelector),s=o.speedOut;if(t&&(r.show(),s=0),o.retainPath=!1,o.onBeforeHide.call(r)===!1)return this;r.stop(!0,!0).animate(o.animationOut,s,function(){var t=e(this);o.onHide.call(t)})}return this},show:function(){var e=u(this);if(!e)return this;var t=this.addClass(e.hoverClass),i=t.children(e.popUpSelector);return e.onBeforeShow.call(i)===!1?this:(i.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(i)}),this)},destroy:function(){return this.each(function(){var t,o=e(this),n=o.data("sfOptions");return!!n&&(t=o.find(n.popUpSelector).parent("li"),clearTimeout(n.sfTimer),s(o,n),l(t),d(o),o.off(".superfish").off(".hoverIntent"),t.children(n.popUpSelector).attr("style",function(e,t){return t.replace(/display[^;]+;?/g,"")}),n.$path.removeClass(n.hoverClass+" "+i.bcClass).addClass(n.pathClass),o.find("."+n.hoverClass).removeClass(n.hoverClass),n.onDestroy.call(o),void o.removeData("sfOptions"))})},init:function(t){return this.each(function(){var o=e(this);if(o.data("sfOptions"))return!1;var n=e.extend({},e.fn.superfish.defaults,t),r=o.find(n.popUpSelector).parent("li");n.$path=a(o,n),o.data("sfOptions",n),s(o,n,!0),l(r,!0),d(o),g(o,n),r.not("."+i.bcClass).superfish("hide",!0),n.onInit.call(this)})}}}();e.fn.superfish=function(t,o){return i[t]?i[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?e.error("Method "+t+" does not exist on jQuery.fn.superfish"):i.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop,onHandleTouch:e.noop}}(jQuery,window),!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=window.Slick||{};t=function(){function t(t,o){var n,r=this;r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,i){return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=e(t),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,n=e(t).data("slick")||{},r.options=e.extend({},r.defaults,o,n),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,"undefined"!=typeof document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=e.proxy(r.autoPlay,r),r.autoPlayClear=e.proxy(r.autoPlayClear,r),r.autoPlayIterator=e.proxy(r.autoPlayIterator,r),r.changeSlide=e.proxy(r.changeSlide,r),r.clickHandler=e.proxy(r.clickHandler,r),r.selectHandler=e.proxy(r.selectHandler,r),r.setPosition=e.proxy(r.setPosition,r),r.swipeHandler=e.proxy(r.swipeHandler,r),r.dragHandler=e.proxy(r.dragHandler,r),r.keyHandler=e.proxy(r.keyHandler,r),r.instanceUid=i++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.registerBreakpoints(),r.init(!0)}var i=0;return t}(),t.prototype.activateADA=function(){var e=this;e.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,i,o){var n=this;if("boolean"==typeof i)o=i,i=null;else if(0>i||i>=n.slideCount)return!1;n.unload(),"number"==typeof i?0===i&&0===n.$slides.length?e(t).appendTo(n.$slideTrack):o?e(t).insertBefore(n.$slides.eq(i)):e(t).insertAfter(n.$slides.eq(i)):o===!0?e(t).prependTo(n.$slideTrack):e(t).appendTo(n.$slideTrack),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slides.each(function(t,i){e(i).attr("data-slick-index",t)}),n.$slidesCache=n.$slides,n.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,i){var o={},n=this;n.animateHeight(),n.options.rtl===!0&&n.options.vertical===!1&&(t=-t),n.transformsEnabled===!1?n.options.vertical===!1?n.$slideTrack.animate({left:t},n.options.speed,n.options.easing,i):n.$slideTrack.animate({top:t},n.options.speed,n.options.easing,i):n.cssTransitions===!1?(n.options.rtl===!0&&(n.currentLeft=-n.currentLeft),e({animStart:n.currentLeft}).animate({animStart:t},{duration:n.options.speed,easing:n.options.easing,step:function(e){e=Math.ceil(e),n.options.vertical===!1?(o[n.animType]="translate("+e+"px, 0px)",n.$slideTrack.css(o)):(o[n.animType]="translate(0px,"+e+"px)",n.$slideTrack.css(o))},complete:function(){i&&i.call()}})):(n.applyTransition(),t=Math.ceil(t),n.options.vertical===!1?o[n.animType]="translate3d("+t+"px, 0px, 0px)":o[n.animType]="translate3d(0px,"+t+"px, 0px)",n.$slideTrack.css(o),i&&setTimeout(function(){n.disableTransition(),i.call()},n.options.speed))},t.prototype.getNavTarget=function(){var t=this,i=t.options.asNavFor;return i&&null!==i&&(i=e(i).not(t.$slider)),i},t.prototype.asNavFor=function(t){var i=this,o=i.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var i=e(this).slick("getSlick");i.unslicked||i.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,i={};t.options.fade===!1?i[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:i[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,t.options.fade===!1?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(e.options.infinite===!1&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1===0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,i,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),i=e("<ul />").addClass(o.options.dotsClass),t=0;t<=o.getDotCount();t+=1)i.append(e("<li />").append(o.options.customPaging.call(this,o,t)));o.$dots=i.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,i){e(i).attr("data-slick-index",t).data("originalStyling",e(i).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),(t.options.centerMode===!0||t.options.swipeToSlide===!0)&&(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.options.draggable===!0&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,i,o,n,r,s,a=this;if(o=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>1){for(s=a.options.slidesPerRow*a.options.rows,n=Math.ceil(r.length/s),e=0;n>e;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var d=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var c=e*s+(t*a.options.slidesPerRow+i);r.get(c)&&d.appendChild(r.get(c))}l.appendChild(d)}o.appendChild(l)}a.$slider.empty().append(o),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,i){var o,n,r,s=this,a=!1,l=s.$slider.width(),d=window.innerWidth||e(window).width();if("window"===s.respondTo?r=d:"slider"===s.respondTo?r=l:"min"===s.respondTo&&(r=Math.min(d,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){n=null;for(o in s.breakpoints)s.breakpoints.hasOwnProperty(o)&&(s.originalSettings.mobileFirst===!1?r<s.breakpoints[o]&&(n=s.breakpoints[o]):r>s.breakpoints[o]&&(n=s.breakpoints[o]));null!==n?null!==s.activeBreakpoint?(n!==s.activeBreakpoint||i)&&(s.activeBreakpoint=n,"unslick"===s.breakpointSettings[n]?s.unslick(n):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[n]),t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=n):(s.activeBreakpoint=n,"unslick"===s.breakpointSettings[n]?s.unslick(n):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[n]),t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=n):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t),a=n),t||a===!1||s.$slider.trigger("breakpoint",[s,a])}},t.prototype.changeSlide=function(t,i){var o,n,r,s=this,a=e(t.currentTarget);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),r=s.slideCount%s.options.slidesToScroll!==0,o=r?0:(s.slideCount-s.currentSlide)%s.options.slidesToScroll,t.data.message){case"previous":n=0===o?s.options.slidesToScroll:s.options.slidesToShow-o,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide-n,!1,i);break;case"next":n=0===o?s.options.slidesToScroll:o,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide+n,!1,i);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*s.options.slidesToScroll;s.slideHandler(s.checkNavigable(l),!1,i),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,i,o=this;if(t=o.getNavigableIndexes(),i=0,e>t[t.length-1])e=t[t.length-1];else for(var n in t){if(e<t[n]){e=i;break}i=t[n]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),t.$slider.off("focus.slick blur.slick"),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide)),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).off("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>1&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){var t=this;t.shouldClick===!1&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),e(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.$slider.removeClass("slick-dotted"),i.unslicked=!0,t||i.$slider.trigger("destroy",[i]);
},t.prototype.disableTransition=function(e){var t=this,i={};i[t.transitionType]="",t.options.fade===!1?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.fadeSlide=function(e,t){var i=this;i.cssTransitions===!1?(i.$slides.eq(e).css({zIndex:i.options.zIndex}),i.$slides.eq(e).animate({opacity:1},i.options.speed,i.options.easing,t)):(i.applyTransition(e),i.$slides.eq(e).css({opacity:1,zIndex:i.options.zIndex}),t&&setTimeout(function(){i.disableTransition(e),t.call()},i.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;t.cssTransitions===!1?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(i){i.stopImmediatePropagation();var o=e(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=o.is(":focus"),t.autoPlay())},0)})},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){var e=this;return e.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,i=0,o=0;if(e.options.infinite===!0)for(;t<e.slideCount;)++o,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(e.options.centerMode===!0)o=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++o,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else o=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return o-1},t.prototype.getLeft=function(e){var t,i,o,n=this,r=0;return n.slideOffset=0,i=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,r=i*n.options.slidesToShow*-1),n.slideCount%n.options.slidesToScroll!==0&&e+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(e>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(e-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(e-n.slideCount))*i*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*i*-1))):e+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(e+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(e+n.options.slidesToShow-n.slideCount)*i),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),t=n.options.vertical===!1?e*n.slideWidth*-1+n.slideOffset:e*i*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(e):n.$slideTrack.children(".slick-slide").eq(e+n.options.slidesToShow),t=n.options.rtl===!0?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(e):n.$slideTrack.children(".slick-slide").eq(e+n.options.slidesToShow+1),t=n.options.rtl===!0?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,t+=(n.$list.width()-o.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){var t=this;return t.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,i=0,o=0,n=[];for(t.options.infinite===!1?e=t.slideCount:(i=-1*t.options.slidesToScroll,o=-1*t.options.slidesToScroll,e=2*t.slideCount);e>i;)n.push(i),i=o+t.options.slidesToScroll,o+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return n},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,i,o,n=this;return o=n.options.centerMode===!0?n.slideWidth*Math.floor(n.options.slidesToShow/2):0,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(t,r){return r.offsetLeft-o+e(r).outerWidth()/2>-1*n.swipeLeft?(i=r,!1):void 0}),t=Math.abs(e(i).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){var i=this;i.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var i=this;e(i.$slider).hasClass("slick-initialized")||(e(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots(),i.checkResponsive(!0),i.focusHandler()),t&&i.$slider.trigger("init",[i]),i.options.accessibility===!0&&i.initADA(),i.options.autoplay&&(i.paused=!1,i.autoPlay())},t.prototype.initADA=function(){var t=this;t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),t.$slideTrack.attr("role","listbox"),t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i){e(this).attr({role:"option","aria-describedby":"slick-slide"+t.instanceUid+i})}),null!==t.$dots&&t.$dots.attr("role","tablist").find("li").each(function(i){e(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+t.instanceUid+i,id:"slick-slide"+t.instanceUid+i})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide))},t.prototype.initDotEvents=function(){var t=this;t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),t.options.dots===!0&&t.options.pauseOnDotsHover===!0&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),t.options.accessibility===!0&&t.$list.on("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).on("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.initUI=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&t.options.accessibility===!0?t.changeSlide({data:{message:t.options.rtl===!0?"next":"previous"}}):39===e.keyCode&&t.options.accessibility===!0&&t.changeSlide({data:{message:t.options.rtl===!0?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),i=e(this).attr("data-lazy"),o=document.createElement("img");o.onload=function(){t.animate({opacity:0},100,function(){t.attr("src",i).animate({opacity:1},200,function(){t.removeAttr("data-lazy").removeClass("slick-loading")}),s.$slider.trigger("lazyLoaded",[s,t,i])})},o.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,t,i])},o.src=i})}var i,o,n,r,s=this;s.options.centerMode===!0?s.options.infinite===!0?(n=s.currentSlide+(s.options.slidesToShow/2+1),r=n+s.options.slidesToShow+2):(n=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),r=2+(s.options.slidesToShow/2+1)+s.currentSlide):(n=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide,r=Math.ceil(n+s.options.slidesToShow),s.options.fade===!0&&(n>0&&n--,r<=s.slideCount&&r++)),i=s.$slider.find(".slick-slide").slice(n,r),t(i),s.slideCount<=s.options.slidesToShow?(o=s.$slider.find(".slick-slide"),t(o)):s.currentSlide>=s.slideCount-s.options.slidesToShow?(o=s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow),t(o)):0===s.currentSlide&&(o=s.$slider.find(".slick-cloned").slice(-1*s.options.slidesToShow),t(o))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){var e=this;e.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&t.initADA())},t.prototype.prev=t.prototype.slickPrev=function(){var e=this;e.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var i,o,n,r=this,s=e("img[data-lazy]",r.$slider);s.length?(i=s.first(),o=i.attr("data-lazy"),n=document.createElement("img"),n.onload=function(){i.attr("src",o).removeAttr("data-lazy").removeClass("slick-loading"),r.options.adaptiveHeight===!0&&r.setPosition(),r.$slider.trigger("lazyLoaded",[r,i,o]),r.progressiveLazyLoad()},n.onerror=function(){3>t?setTimeout(function(){r.progressiveLazyLoad(t+1)},500):(i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,i,o]),r.progressiveLazyLoad())},n.src=o):r.$slider.trigger("allImagesLoaded",[r])},t.prototype.refresh=function(t){var i,o,n=this;o=n.slideCount-n.options.slidesToShow,!n.options.infinite&&n.currentSlide>o&&(n.currentSlide=o),n.slideCount<=n.options.slidesToShow&&(n.currentSlide=0),i=n.currentSlide,n.destroy(!0),e.extend(n,n.initials,{currentSlide:i}),n.init(),t||n.changeSlide({data:{message:"index",index:i}},!1)},t.prototype.registerBreakpoints=function(){var t,i,o,n=this,r=n.options.responsive||null;if("array"===e.type(r)&&r.length){n.respondTo=n.options.respondTo||"window";for(t in r)if(o=n.breakpoints.length-1,i=r[t].breakpoint,r.hasOwnProperty(t)){for(;o>=0;)n.breakpoints[o]&&n.breakpoints[o]===i&&n.breakpoints.splice(o,1),o--;n.breakpoints.push(i),n.breakpointSettings[i]=r[t].settings}n.breakpoints.sort(function(e,t){return n.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,i){var o=this;return"boolean"==typeof e?(t=e,e=t===!0?0:o.slideCount-1):e=t===!0?--e:e,!(o.slideCount<1||0>e||e>o.slideCount-1)&&(o.unload(),i===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(e).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},t.prototype.setCSS=function(e){var t,i,o=this,n={};o.options.rtl===!0&&(e=-e),t="left"==o.positionProp?Math.ceil(e)+"px":"0px",i="top"==o.positionProp?Math.ceil(e)+"px":"0px",n[o.positionProp]=e,o.transformsEnabled===!1?o.$slideTrack.css(n):(n={},o.cssTransitions===!1?(n[o.animType]="translate("+t+", "+i+")",o.$slideTrack.css(n)):(n[o.animType]="translate3d("+t+", "+i+", 0px)",o.$slideTrack.css(n)))},t.prototype.setDimensions=function(){var e=this;e.options.vertical===!1?e.options.centerMode===!0&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),e.options.centerMode===!0&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),e.options.vertical===!1&&e.options.variableWidth===!1?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):e.options.variableWidth===!0?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();e.options.variableWidth===!1&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,i=this;i.$slides.each(function(o,n){t=i.slideWidth*o*-1,i.options.rtl===!0?e(n).css({position:"relative",right:t,top:0,zIndex:i.options.zIndex-2,opacity:0}):e(n).css({position:"relative",left:t,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,i,o,n,r,s=this,a=!1;if("object"===e.type(arguments[0])?(o=arguments[0],a=arguments[1],r="multiple"):"string"===e.type(arguments[0])&&(o=arguments[0],n=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?r="responsive":"undefined"!=typeof arguments[1]&&(r="single")),"single"===r)s.options[o]=n;else if("multiple"===r)e.each(o,function(e,t){s.options[e]=t});else if("responsive"===r)for(i in n)if("array"!==e.type(s.options.responsive))s.options.responsive=[n[i]];else{for(t=s.options.responsive.length-1;t>=0;)s.options.responsive[t].breakpoint===n[i].breakpoint&&s.options.responsive.splice(t,1),t--;s.options.responsive.push(n[i])}a&&(s.unload(),s.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),e.options.fade===!1?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=e.options.vertical===!0?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),(void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.msTransition)&&e.options.useCSS===!0&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&e.animType!==!1&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&e.animType!==!1},t.prototype.setSlideClasses=function(e){var t,i,o,n,r=this;i=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(e).addClass("slick-current"),r.options.centerMode===!0?(t=Math.floor(r.options.slidesToShow/2),r.options.infinite===!0&&(e>=t&&e<=r.slideCount-1-t?r.$slides.slice(e-t,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(o=r.options.slidesToShow+e,i.slice(o-t+1,o+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?i.eq(i.length-1-r.options.slidesToShow).addClass("slick-center"):e===r.slideCount-1&&i.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(e).addClass("slick-center")):e>=0&&e<=r.slideCount-r.options.slidesToShow?r.$slides.slice(e,e+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=r.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(n=r.slideCount%r.options.slidesToShow,o=r.options.infinite===!0?r.options.slidesToShow+e:e,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-e<r.options.slidesToShow?i.slice(o-(r.options.slidesToShow-n),o+n).addClass("slick-active").attr("aria-hidden","false"):i.slice(o,o+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===r.options.lazyLoad&&r.lazyLoad()},t.prototype.setupInfinite=function(){var t,i,o,n=this;if(n.options.fade===!0&&(n.options.centerMode=!1),n.options.infinite===!0&&n.options.fade===!1&&(i=null,n.slideCount>n.options.slidesToShow)){for(o=n.options.centerMode===!0?n.options.slidesToShow+1:n.options.slidesToShow,t=n.slideCount;t>n.slideCount-o;t-=1)i=t-1,e(n.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");for(t=0;o>t;t+=1)i=t,e(n.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");n.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var i=this,o=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),n=parseInt(o.attr("data-slick-index"));return n||(n=0),i.slideCount<=i.options.slidesToShow?(i.setSlideClasses(n),void i.asNavFor(n)):void i.slideHandler(n)},t.prototype.slideHandler=function(e,t,i){var o,n,r,s,a,l=null,d=this;return t=t||!1,d.animating===!0&&d.options.waitForAnimate===!0||d.options.fade===!0&&d.currentSlide===e||d.slideCount<=d.options.slidesToShow?void 0:(t===!1&&d.asNavFor(e),o=e,l=d.getLeft(o),s=d.getLeft(d.currentSlide),d.currentLeft=null===d.swipeLeft?s:d.swipeLeft,d.options.infinite===!1&&d.options.centerMode===!1&&(0>e||e>d.getDotCount()*d.options.slidesToScroll)?void(d.options.fade===!1&&(o=d.currentSlide,i!==!0?d.animateSlide(s,function(){d.postSlide(o)}):d.postSlide(o))):d.options.infinite===!1&&d.options.centerMode===!0&&(0>e||e>d.slideCount-d.options.slidesToScroll)?void(d.options.fade===!1&&(o=d.currentSlide,i!==!0?d.animateSlide(s,function(){d.postSlide(o)}):d.postSlide(o))):(d.options.autoplay&&clearInterval(d.autoPlayTimer),n=0>o?d.slideCount%d.options.slidesToScroll!==0?d.slideCount-d.slideCount%d.options.slidesToScroll:d.slideCount+o:o>=d.slideCount?d.slideCount%d.options.slidesToScroll!==0?0:o-d.slideCount:o,d.animating=!0,d.$slider.trigger("beforeChange",[d,d.currentSlide,n]),r=d.currentSlide,d.currentSlide=n,d.setSlideClasses(d.currentSlide),d.options.asNavFor&&(a=d.getNavTarget(),a=a.slick("getSlick"),a.slideCount<=a.options.slidesToShow&&a.setSlideClasses(d.currentSlide)),d.updateDots(),d.updateArrows(),d.options.fade===!0?(i!==!0?(d.fadeSlideOut(r),d.fadeSlide(n,function(){d.postSlide(n)})):d.postSlide(n),void d.animateHeight()):void(i!==!0?d.animateSlide(l,function(){d.postSlide(n)}):d.postSlide(n))))},t.prototype.startLoad=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,i,o,n=this;return e=n.touchObject.startX-n.touchObject.curX,t=n.touchObject.startY-n.touchObject.curY,i=Math.atan2(t,e),o=Math.round(180*i/Math.PI),0>o&&(o=360-Math.abs(o)),45>=o&&o>=0?n.options.rtl===!1?"left":"right":360>=o&&o>=315?n.options.rtl===!1?"left":"right":o>=135&&225>=o?n.options.rtl===!1?"right":"left":n.options.verticalSwiping===!0?o>=35&&135>=o?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,i,o=this;if(o.dragging=!1,o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(i=o.swipeDirection()){case"left":case"down":t=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":t=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=i&&(o.slideHandler(t),o.touchObject={},o.$slider.trigger("swipe",[o,i]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(t.options.swipe===!1||"ontouchend"in document&&t.options.swipe===!1||t.options.draggable===!1&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,t.options.verticalSwiping===!0&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,i,o,n,r,s=this;return r=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!s.dragging||r&&1!==r.length)&&(t=s.getLeft(s.currentSlide),s.touchObject.curX=void 0!==r?r[0].pageX:e.clientX,s.touchObject.curY=void 0!==r?r[0].pageY:e.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),s.options.verticalSwiping===!0&&(s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2)))),i=s.swipeDirection(),"vertical"!==i?(void 0!==e.originalEvent&&s.touchObject.swipeLength>4&&e.preventDefault(),n=(s.options.rtl===!1?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),s.options.verticalSwiping===!0&&(n=s.touchObject.curY>s.touchObject.startY?1:-1),o=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,s.options.infinite===!1&&(0===s.currentSlide&&"right"===i||s.currentSlide>=s.getDotCount()&&"left"===i)&&(o=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),s.options.vertical===!1?s.swipeLeft=t+o*n:s.swipeLeft=t+o*(s.$list.height()/s.listWidth)*n,s.options.verticalSwiping===!0&&(s.swipeLeft=t+o*n),s.options.fade!==!0&&s.options.touchMove!==!1&&(s.animating===!0?(s.swipeLeft=null,!1):void s.setCSS(s.swipeLeft))):void 0)},t.prototype.swipeStart=function(e){var t,i=this;return i.interrupted=!0,1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow?(i.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==t?t.pageX:e.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(i.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e,t=this;e=Math.floor(t.options.slidesToShow/2),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&t.options.centerMode===!1?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&t.options.centerMode===!0&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,i,o=this,n=arguments[0],r=Array.prototype.slice.call(arguments,1),s=o.length;for(e=0;s>e;e++)if("object"==typeof n||"undefined"==typeof n?o[e].slick=new t(o[e],n):i=o[e].slick[n].apply(o[e].slick,r),"undefined"!=typeof i)return i;return o}}),!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t=Array.prototype.slice,i=Array.prototype.splice,o={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"auto"},n=e(window),r=e(document),s=[],a=n.height(),l=function(){for(var t=n.scrollTop(),i=r.height(),o=i-a,l=t>o?o-t:0,d=0,c=s.length;d<c;d++){var u=s[d],p=u.stickyWrapper.offset().top,f=p-u.topSpacing-l;if(u.stickyWrapper.css("height",u.stickyElement.outerHeight()),t<=f)null!==u.currentTop&&(u.stickyElement.css({width:"",position:"",top:"","z-index":""}),u.stickyElement.parent().removeClass(u.className),u.stickyElement.trigger("sticky-end",[u]),u.currentTop=null);else{var h=i-u.stickyElement.outerHeight()-u.topSpacing-u.bottomSpacing-t-l;if(h<0?h+=u.topSpacing:h=u.topSpacing,u.currentTop!==h){var y;u.getWidthFrom?y=e(u.getWidthFrom).width()||null:u.widthFromWrapper&&(y=u.stickyWrapper.width()),null==y&&(y=u.stickyElement.width()),u.stickyElement.css("width",y).css("position","fixed").css("top",h).css("z-index",u.zIndex),u.stickyElement.parent().addClass(u.className),null===u.currentTop?u.stickyElement.trigger("sticky-start",[u]):u.stickyElement.trigger("sticky-update",[u]),u.currentTop===u.topSpacing&&u.currentTop>h||null===u.currentTop&&h<u.topSpacing?u.stickyElement.trigger("sticky-bottom-reached",[u]):null!==u.currentTop&&h===u.topSpacing&&u.currentTop<h&&u.stickyElement.trigger("sticky-bottom-unreached",[u]),u.currentTop=h}var g=u.stickyWrapper.parent(),m=u.stickyElement.offset().top+u.stickyElement.outerHeight()>=g.offset().top+g.outerHeight()&&u.stickyElement.offset().top<=u.topSpacing;m?u.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):u.stickyElement.css("position","fixed").css("top",h).css("bottom","").css("z-index",u.zIndex)}}},d=function(){a=n.height();for(var t=0,i=s.length;t<i;t++){var o=s[t],r=null;o.getWidthFrom?o.responsiveWidth&&(r=e(o.getWidthFrom).width()):o.widthFromWrapper&&(r=o.stickyWrapper.width()),null!=r&&o.stickyElement.css("width",r)}},c={init:function(t){var i=e.extend({},o,t);return this.each(function(){var t=e(this),n=t.attr("id"),r=n?n+"-"+o.wrapperClassName:o.wrapperClassName,a=e("<div></div>").attr("id",r).addClass(i.wrapperClassName);t.wrapAll(function(){if(0==e(this).parent("#"+r).length)return a});var l=t.parent();i.center&&l.css({width:t.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===t.css("float")&&t.css({float:"none"}).parent().css({float:"right"}),i.stickyElement=t,i.stickyWrapper=l,i.currentTop=null,s.push(i),c.setWrapperHeight(this),c.setupChangeListeners(this)})},setWrapperHeight:function(t){var i=e(t),o=i.parent();o&&o.css("height",i.outerHeight())},setupChangeListeners:function(e){if(window.MutationObserver){var t=new window.MutationObserver(function(t){(t[0].addedNodes.length||t[0].removedNodes.length)&&c.setWrapperHeight(e)});t.observe(e,{subtree:!0,childList:!0})}else window.addEventListener?(e.addEventListener("DOMNodeInserted",function(){c.setWrapperHeight(e)},!1),e.addEventListener("DOMNodeRemoved",function(){c.setWrapperHeight(e)},!1)):window.attachEvent&&(e.attachEvent("onDOMNodeInserted",function(){c.setWrapperHeight(e)}),e.attachEvent("onDOMNodeRemoved",function(){c.setWrapperHeight(e)}))},update:l,unstick:function(t){return this.each(function(){for(var t=this,o=e(t),n=-1,r=s.length;r-- >0;)s[r].stickyElement.get(0)===t&&(i.call(s,r,1),n=r);n!==-1&&(o.unwrap(),o.css({width:"",position:"",top:"",float:"","z-index":""}))})}};window.addEventListener?(window.addEventListener("scroll",l,!1),window.addEventListener("resize",d,!1)):window.attachEvent&&(window.attachEvent("onscroll",l),window.attachEvent("onresize",d)),e.fn.sticky=function(i){return c[i]?c[i].apply(this,t.call(arguments,1)):"object"!=typeof i&&i?void e.error("Method "+i+" does not exist on jQuery.sticky"):c.init.apply(this,arguments)},e.fn.unstick=function(i){return c[i]?c[i].apply(this,t.call(arguments,1)):"object"!=typeof i&&i?void e.error("Method "+i+" does not exist on jQuery.sticky"):c.unstick.apply(this,arguments);
},e(function(){setTimeout(l,0)})}),!function(){"use strict";function e(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+t,this.options=e.Adapter.extend({},e.defaults,o),this.element=this.options.element,this.adapter=new e.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=e.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=e.Context.findOrCreateByElement(this.options.context),e.offsetAliases[this.options.offset]&&(this.options.offset=e.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,t+=1}var t=0,i={};e.prototype.queueTrigger=function(e){this.group.queueTrigger(this,e)},e.prototype.trigger=function(e){this.enabled&&this.callback&&this.callback.apply(this,e)},e.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},e.prototype.disable=function(){return this.enabled=!1,this},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},e.prototype.next=function(){return this.group.next(this)},e.prototype.previous=function(){return this.group.previous(this)},e.invokeAll=function(e){var t=[];for(var o in i)t.push(i[o]);for(var n=0,r=t.length;r>n;n++)t[n][e]()},e.destroyAll=function(){e.invokeAll("destroy")},e.disableAll=function(){e.invokeAll("disable")},e.enableAll=function(){e.invokeAll("enable")},e.refreshAll=function(){e.Context.refreshAll()},e.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},e.viewportWidth=function(){return document.documentElement.clientWidth},e.adapters=[],e.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},e.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=e}(),function(){"use strict";function e(e){window.setTimeout(e,1e3/60)}function t(e){this.element=e,this.Adapter=n.Adapter,this.adapter=new this.Adapter(e),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},e.waypointContextKey=this.key,o[e.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;t.prototype.add=function(e){var t=e.options.horizontal?"horizontal":"vertical";this.waypoints[t][e.key]=e,this.refresh()},t.prototype.checkEmpty=function(){var e=this.Adapter.isEmptyObject(this.waypoints.horizontal),t=this.Adapter.isEmptyObject(this.waypoints.vertical);e&&t&&(this.adapter.off(".waypoints"),delete o[this.key])},t.prototype.createThrottledResizeHandler=function(){function e(){t.handleResize(),t.didResize=!1}var t=this;this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,n.requestAnimationFrame(e))})},t.prototype.createThrottledScrollHandler=function(){function e(){t.handleScroll(),t.didScroll=!1}var t=this;this.adapter.on("scroll.waypoints",function(){(!t.didScroll||n.isTouch)&&(t.didScroll=!0,n.requestAnimationFrame(e))})},t.prototype.handleResize=function(){n.Context.refreshAll()},t.prototype.handleScroll=function(){var e={},t={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in t){var o=t[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,d=o.newScroll>=a.triggerPoint,c=l&&d,u=!l&&!d;(c||u)&&(a.queueTrigger(r),e[a.group.id]=a.group)}}for(var p in e)e[p].flushTriggers();this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},t.prototype.remove=function(e){delete this.waypoints[e.axis][e.key],this.checkEmpty()},t.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},t.prototype.destroy=function(){var e=[];for(var t in this.waypoints)for(var i in this.waypoints[t])e.push(this.waypoints[t][i]);for(var o=0,n=e.length;n>o;o++)e[o].destroy()},t.prototype.refresh=function(){var e,t=this.element==this.element.window,i=t?void 0:this.adapter.offset(),o={};this.handleScroll(),e={horizontal:{contextOffset:t?0:i.left,contextScroll:t?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:t?0:i.top,contextScroll:t?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in e){var s=e[r];for(var a in this.waypoints[r]){var l,d,c,u,p,f=this.waypoints[r][a],h=f.options.offset,y=f.triggerPoint,g=0,m=null==y;f.element!==f.element.window&&(g=f.adapter.offset()[s.offsetProp]),"function"==typeof h?h=h.apply(f):"string"==typeof h&&(h=parseFloat(h),f.options.offset.indexOf("%")>-1&&(h=Math.ceil(s.contextDimension*h/100))),l=s.contextScroll-s.contextOffset,f.triggerPoint=g+l-h,d=y<s.oldScroll,c=f.triggerPoint>=s.oldScroll,u=d&&c,p=!d&&!c,!m&&u?(f.queueTrigger(s.backward),o[f.group.id]=f.group):!m&&p?(f.queueTrigger(s.forward),o[f.group.id]=f.group):m&&s.oldScroll>=f.triggerPoint&&(f.queueTrigger(s.forward),o[f.group.id]=f.group)}}return n.requestAnimationFrame(function(){for(var e in o)o[e].flushTriggers()}),this},t.findOrCreateByElement=function(e){return t.findByElement(e)||new t(e)},t.refreshAll=function(){for(var e in o)o[e].refresh()},t.findByElement=function(e){return o[e.waypointContextKey]},window.onload=function(){r&&r(),t.refreshAll()},n.requestAnimationFrame=function(t){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e;i.call(window,t)},n.Context=t}(),function(){"use strict";function e(e,t){return e.triggerPoint-t.triggerPoint}function t(e,t){return t.triggerPoint-e.triggerPoint}function i(e){this.name=e.name,this.axis=e.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(e){this.waypoints.push(e)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?t:e);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(t){this.waypoints.sort(e);var i=n.Adapter.inArray(t,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(t){this.waypoints.sort(e);var i=n.Adapter.inArray(t,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(e,t){this.triggerQueues[t].push(e)},i.prototype.remove=function(e){var t=n.Adapter.inArray(e,this.waypoints);t>-1&&this.waypoints.splice(t,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(e){return o[e.axis][e.name]||new i(e)},n.Group=i}(),function(){"use strict";function e(e){this.$element=t(e)}var t=window.jQuery,i=window.Waypoint;t.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,i){e.prototype[i]=function(){var e=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,e)}}),t.each(["extend","inArray","isEmptyObject"],function(i,o){e[o]=t[o]}),i.adapters.push({name:"jquery",Adapter:e}),i.Adapter=e}(),function(){"use strict";function e(e){return function(){var i=[],o=arguments[0];return e.isFunction(arguments[0])&&(o=e.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=e.extend({},o,{element:this});"string"==typeof n.context&&(n.context=e(this).closest(n.context)[0]),i.push(new t(n))}),i}}var t=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=e(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=e(window.Zepto))}(),function(e){$.fn.animated=function(e){$(this).each(function(){var t=$(this);t.css("opacity","0").addClass("animated").waypoint(function(i){"down"===i&&t.addClass(e).css("opacity","1")},{offset:"80%"})})}}(jQuery),!function(e,t,i,o){function n(t,i){this.element=t,this.options=e.extend({},s,i),this._defaults=s,this._name=r,this.init()}var r="stellar",s={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(e){e.hide()},showElement:function(e){e.show()}},a={scroll:{getLeft:function(e){return e.scrollLeft()},setLeft:function(e,t){e.scrollLeft(t)},getTop:function(e){return e.scrollTop()},setTop:function(e,t){e.scrollTop(t)}},position:{getLeft:function(e){return-1*parseInt(e.css("left"),10)},getTop:function(e){return-1*parseInt(e.css("top"),10)}},margin:{getLeft:function(e){return-1*parseInt(e.css("margin-left"),10)},getTop:function(e){return-1*parseInt(e.css("margin-top"),10)}},transform:{getLeft:function(e){var t=getComputedStyle(e[0])[c];return"none"!==t?-1*parseInt(t.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(e){var t=getComputedStyle(e[0])[c];return"none"!==t?-1*parseInt(t.match(/(-?[0-9]+)/g)[5],10):0}}},l={position:{setLeft:function(e,t){e.css("left",t)},setTop:function(e,t){e.css("top",t)}},transform:{setPosition:function(e,t,i,o,n){e[0].style[c]="translate3d("+(t-i)+"px, "+(o-n)+"px, 0)"}}},d=function(){var t,i=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,o=e("script")[0].style,n="";for(t in o)if(i.test(t)){n=t.match(i)[0];break}return"WebkitOpacity"in o&&(n="Webkit"),"KhtmlOpacity"in o&&(n="Khtml"),function(e){return n+(n.length>0?e.charAt(0).toUpperCase()+e.slice(1):e)}}(),c=d("transform"),u=e("<div />",{style:"background:#fff"}).css("background-position-x")!==o,p=u?function(e,t,i){e.css({"background-position-x":t,"background-position-y":i})}:function(e,t,i){e.css("background-position",t+" "+i)},f=u?function(e){return[e.css("background-position-x"),e.css("background-position-y")]}:function(e){return e.css("background-position").split(" ")},h=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};n.prototype={init:function(){this.options.name=r+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===i.body&&(this.element=t),this.$scrollElement=e(this.element),this.$element=this.element===t?e("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==o?e(this.options.viewportElement):this.$scrollElement[0]===t||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var e=this,t=a[e.options.scrollProperty];this._getScrollLeft=function(){return t.getLeft(e.$scrollElement)},this._getScrollTop=function(){return t.getTop(e.$scrollElement)}},_defineSetters:function(){var t=this,i=a[t.options.scrollProperty],o=l[t.options.positionProperty],n=i.setLeft,r=i.setTop;this._setScrollLeft="function"==typeof n?function(e){n(t.$scrollElement,e)}:e.noop,this._setScrollTop="function"==typeof r?function(e){r(t.$scrollElement,e)}:e.noop,this._setPosition=o.setPosition||function(e,i,n,r,s){t.options.horizontalScrolling&&o.setLeft(e,i,n),t.options.verticalScrolling&&o.setTop(e,r,s)}},_handleWindowLoadAndResize:function(){var i=this,o=e(t);i.options.responsive&&o.bind("load."+this.name,function(){i.refresh()}),o.bind("resize."+this.name,function(){i._detectViewport(),i.options.responsive&&i.refresh()})},refresh:function(i){var o=this,n=o._getScrollLeft(),r=o._getScrollTop();i&&i.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),i&&i.firstLoad&&/WebKit/.test(navigator.userAgent)&&e(t).load(function(){var e=o._getScrollLeft(),t=o._getScrollTop();o._setScrollLeft(e+1),o._setScrollTop(t+1),o._setScrollLeft(e),o._setScrollTop(t)}),this._setScrollLeft(n),this._setScrollTop(r)},_detectViewport:function(){var e=this.$viewportElement.offset(),t=null!==e&&e!==o;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=t?e.top:0,this.viewportOffsetLeft=t?e.left:0},_findParticles:function(){var t=this;if(this._getScrollLeft(),this._getScrollTop(),this.particles!==o)for(var i=this.particles.length-1;i>=0;i--)this.particles[i].$element.data("stellar-elementIsActive",o);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var i,n,r,s,a,l,d,c,u,p=e(this),f=0,h=0,y=0,g=0;if(p.data("stellar-elementIsActive")){if(p.data("stellar-elementIsActive")!==this)return}else p.data("stellar-elementIsActive",this);t.options.showElement(p),p.data("stellar-startingLeft")?(p.css("left",p.data("stellar-startingLeft")),p.css("top",p.data("stellar-startingTop"))):(p.data("stellar-startingLeft",p.css("left")),p.data("stellar-startingTop",p.css("top"))),r=p.position().left,s=p.position().top,a="auto"===p.css("margin-left")?0:parseInt(p.css("margin-left"),10),l="auto"===p.css("margin-top")?0:parseInt(p.css("margin-top"),10),c=p.offset().left-a,u=p.offset().top-l,p.parents().each(function(){var t=e(this);return t.data("stellar-offset-parent")===!0?(f=y,h=g,d=t,!1):(y+=t.position().left,void(g+=t.position().top))}),i=p.data("stellar-horizontal-offset")!==o?p.data("stellar-horizontal-offset"):d!==o&&d.data("stellar-horizontal-offset")!==o?d.data("stellar-horizontal-offset"):t.horizontalOffset,n=p.data("stellar-vertical-offset")!==o?p.data("stellar-vertical-offset"):d!==o&&d.data("stellar-vertical-offset")!==o?d.data("stellar-vertical-offset"):t.verticalOffset,t.particles.push({$element:p,$offsetParent:d,isFixed:"fixed"===p.css("position"),horizontalOffset:i,verticalOffset:n,startingPositionLeft:r,startingPositionTop:s,startingOffsetLeft:c,startingOffsetTop:u,parentOffsetLeft:f,parentOffsetTop:h,stellarRatio:p.data("stellar-ratio")!==o?p.data("stellar-ratio"):1,width:p.outerWidth(!0),height:p.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var t,i=this,n=this._getScrollLeft(),r=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(t=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(t=t.add(this.$element)),t.each(function(){var t,s,a,l,d,c,u,h=e(this),y=f(h),g=0,m=0,v=0,T=0;if(h.data("stellar-backgroundIsActive")){if(h.data("stellar-backgroundIsActive")!==this)return}else h.data("stellar-backgroundIsActive",this);h.data("stellar-backgroundStartingLeft")?p(h,h.data("stellar-backgroundStartingLeft"),h.data("stellar-backgroundStartingTop")):(h.data("stellar-backgroundStartingLeft",y[0]),h.data("stellar-backgroundStartingTop",y[1])),a="auto"===h.css("margin-left")?0:parseInt(h.css("margin-left"),10),l="auto"===h.css("margin-top")?0:parseInt(h.css("margin-top"),10),d=h.offset().left-a-n,c=h.offset().top-l-r,h.parents().each(function(){var t=e(this);return t.data("stellar-offset-parent")===!0?(g=v,m=T,u=t,!1):(v+=t.position().left,void(T+=t.position().top))}),t=h.data("stellar-horizontal-offset")!==o?h.data("stellar-horizontal-offset"):u!==o&&u.data("stellar-horizontal-offset")!==o?u.data("stellar-horizontal-offset"):i.horizontalOffset,s=h.data("stellar-vertical-offset")!==o?h.data("stellar-vertical-offset"):u!==o&&u.data("stellar-vertical-offset")!==o?u.data("stellar-vertical-offset"):i.verticalOffset,i.backgrounds.push({$element:h,$offsetParent:u,isFixed:"fixed"===h.css("background-attachment"),horizontalOffset:t,verticalOffset:s,startingValueLeft:y[0],startingValueTop:y[1],startingBackgroundPositionLeft:isNaN(parseInt(y[0],10))?0:parseInt(y[0],10),startingBackgroundPositionTop:isNaN(parseInt(y[1],10))?0:parseInt(y[1],10),startingPositionLeft:h.position().left,startingPositionTop:h.position().top,startingOffsetLeft:d,startingOffsetTop:c,parentOffsetLeft:g,parentOffsetTop:m,stellarRatio:h.data("stellar-background-ratio")===o?1:h.data("stellar-background-ratio")})}))},_reset:function(){var e,t,i,o,n;for(n=this.particles.length-1;n>=0;n--)e=this.particles[n],t=e.$element.data("stellar-startingLeft"),i=e.$element.data("stellar-startingTop"),this._setPosition(e.$element,t,t,i,i),this.options.showElement(e.$element),e.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(n=this.backgrounds.length-1;n>=0;n--)o=this.backgrounds[n],o.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),p(o.$element,o.startingValueLeft,o.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=e.noop,e(t).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var i=this,o=e(t);o.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),o.bind("resize.horizontal-"+this.name,function(){i.horizontalOffset=i.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),o.bind("resize.vertical-"+this.name,function(){i.verticalOffset=i.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var e,t,i,o,n,r,s,a,l,d,c=this._getScrollLeft(),u=this._getScrollTop(),f=!0,h=!0;if(this.currentScrollLeft!==c||this.currentScrollTop!==u||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=c,this.currentScrollTop=u,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,d=this.particles.length-1;d>=0;d--)e=this.particles[d],t=e.isFixed?1:0,this.options.horizontalScrolling?(r=(c+e.horizontalOffset+this.viewportOffsetLeft+e.startingPositionLeft-e.startingOffsetLeft+e.parentOffsetLeft)*-(e.stellarRatio+t-1)+e.startingPositionLeft,a=r-e.startingPositionLeft+e.startingOffsetLeft):(r=e.startingPositionLeft,a=e.startingOffsetLeft),this.options.verticalScrolling?(s=(u+e.verticalOffset+this.viewportOffsetTop+e.startingPositionTop-e.startingOffsetTop+e.parentOffsetTop)*-(e.stellarRatio+t-1)+e.startingPositionTop,l=s-e.startingPositionTop+e.startingOffsetTop):(s=e.startingPositionTop,l=e.startingOffsetTop),this.options.hideDistantElements&&(h=!this.options.horizontalScrolling||a+e.width>(e.isFixed?0:c)&&a<(e.isFixed?0:c)+this.viewportWidth+this.viewportOffsetLeft,f=!this.options.verticalScrolling||l+e.height>(e.isFixed?0:u)&&l<(e.isFixed?0:u)+this.viewportHeight+this.viewportOffsetTop),h&&f?(e.isHidden&&(this.options.showElement(e.$element),e.isHidden=!1),this._setPosition(e.$element,r,e.startingPositionLeft,s,e.startingPositionTop)):e.isHidden||(this.options.hideElement(e.$element),e.isHidden=!0);for(d=this.backgrounds.length-1;d>=0;d--)i=this.backgrounds[d],t=i.isFixed?0:1,o=this.options.horizontalScrolling?(c+i.horizontalOffset-this.viewportOffsetLeft-i.startingOffsetLeft+i.parentOffsetLeft-i.startingBackgroundPositionLeft)*(t-i.stellarRatio)+"px":i.startingValueLeft,n=this.options.verticalScrolling?(u+i.verticalOffset-this.viewportOffsetTop-i.startingOffsetTop+i.parentOffsetTop-i.startingBackgroundPositionTop)*(t-i.stellarRatio)+"px":i.startingValueTop,p(i.$element,o,n)}},_handleScrollEvent:function(){var e=this,t=!1,i=function(){e._repositionElements(),t=!1},o=function(){t||(h(i),t=!0)};this.$scrollElement.bind("scroll."+this.name,o),o()},_startAnimationLoop:function(){var e=this;this._animationLoop=function(){h(e._animationLoop),e._repositionElements()},this._animationLoop()}},e.fn[r]=function(t){var i=arguments;return t===o||"object"==typeof t?this.each(function(){e.data(this,"plugin_"+r)||e.data(this,"plugin_"+r,new n(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var o=e.data(this,"plugin_"+r);o instanceof n&&"function"==typeof o[t]&&o[t].apply(o,Array.prototype.slice.call(i,1)),"destroy"===t&&e.data(this,"plugin_"+r,null)}):void 0},e[r]=function(){var i=e(t);return i.stellar.apply(i,Array.prototype.slice.call(arguments,0))},e[r].scrollProperty=a,e[r].positionProperty=l,t.Stellar=n}(jQuery,this,document),!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,i,o,n,r,s,a="Close",l="BeforeClose",d="AfterClose",c="BeforeAppend",u="MarkupParse",p="Open",f="Change",h="mfp",y="."+h,g="mfp-ready",m="mfp-removing",v="mfp-prevent-close",T=function(){},w=!!window.jQuery,b=e(window),P=function(e,i){t.ev.on(h+e+y,i)},k=function(t,i,o,n){var r=document.createElement("div");return r.className="mfp-"+t,o&&(r.innerHTML=o),n?i&&i.appendChild(r):(r=e(r),i&&r.appendTo(i)),r},S=function(i,o){t.ev.triggerHandler(h+i,o),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(o)?o:[o]))},x=function(i){return i===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=i),t.currTemplate.closeBtn},Y=function(){e.magnificPopup.instance||(t=new T,t.init(),e.magnificPopup.instance=t)},C=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};T.prototype={constructor:T,init:function(){var i=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.supportsTransition=C(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(i){var n;if(i.isObj===!1){t.items=i.items.toArray(),t.index=0;var s,a=i.items;for(n=0;n<a.length;n++)if(s=a[n],s.parsed&&(s=s.el[0]),s===i.el[0]){t.index=n;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],r="",i.mainEl&&i.mainEl.length?t.ev=i.mainEl.eq(0):t.ev=o,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+y,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+y,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(n=0;n<l.length;n++){var d=l[n];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}S("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(P(u,function(e,t,i,o){i.close_replaceWith=x(o.type)}),r+=" mfp-close-btn-in"):t.wrap.append(x())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:b.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+y,function(e){27===e.keyCode&&t.close()}),b.on("resize"+y,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var c=t.wH=b.height(),f={};if(t.fixedContentPos&&t._hasScrollBar(c)){var h=t._getScrollbarSize();h&&(f.marginRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):f.overflow="hidden");var m=t.st.mainClass;return t.isIE7&&(m+=" mfp-ie7"),m&&t._addClassToMFP(m),t.updateItemHTML(),S("BuildControls"),e("html").css(f),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(g),t._setFocus()):t.bgOverlay.addClass(g),o.on("focusin"+y,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(c),S(p),i},close:function(){t.isOpen&&(S(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(m),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){S(a);var i=m+" "+g+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var n={marginRight:""};t.isIE7?e("body, html").css("overflow",""):n.overflow="",e("html").css(n)}o.off("keyup"+y+" focusin"+y),t.ev.off(y),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,S(d)},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,o=window.innerHeight*i;t.wrap.css("height",o),t.wH=o}else t.wH=e||b.height();t.fixedContentPos||t.wrap.css("height",t.wH),S("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var o=i.type;if(S("BeforeChange",[t.currItem?t.currItem.type:"",o]),t.currItem=i,!t.currTemplate[o]){var r=!!t.st[o]&&t.st[o].markup;S("FirstMarkupParse",r),r?t.currTemplate[o]=e(r):t.currTemplate[o]=!0}n&&n!==i.type&&t.container.removeClass("mfp-"+n+"-holder");var s=t["get"+o.charAt(0).toUpperCase()+o.slice(1)](i,t.currTemplate[o]);t.appendContent(s,o),i.preloaded=!0,S(f,i),n=i.type,t.container.prepend(t.contentContainer),S("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[i]===!0?t.content.find(".mfp-close").length||t.content.append(x()):t.content=e:t.content="",S(c),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var o,n=t.items[i];if(n.tagName?n={el:e(n)}:(o=n.type,n={data:n,src:n.src}),n.el){for(var r=t.types,s=0;s<r.length;s++)if(n.el.hasClass("mfp-"+r[s])){o=r[s];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=o||t.st.type||"inline",n.index=i,n.parsed=!0,t.items[i]=n,S("ElementParse",n),t.items[i]},addGroup:function(e,i){var o=function(o){o.mfpEl=this,t._openClick(o,e,i)};i||(i={});var n="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(n).on(n,o)):(i.isObj=!1,i.delegate?e.off(n).on(n,i.delegate,o):(i.items=e,e.off(n).on(n,o)))},_openClick:function(i,o,n){var r=void 0!==n.midClick?n.midClick:e.magnificPopup.defaults.midClick;if(r||!(2===i.which||i.ctrlKey||i.metaKey||i.altKey||i.shiftKey)){var s=void 0!==n.disableOn?n.disableOn:e.magnificPopup.defaults.disableOn;if(s)if(e.isFunction(s)){if(!s.call(t))return!0}else if(b.width()<s)return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),n.el=e(i.mfpEl),n.delegate&&(n.items=o.find(n.delegate)),t.open(n)}},updateStatus:function(e,o){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),o||"loading"!==e||(o=t.st.tLoading);var n={status:e,text:o};S("UpdateStatus",n),e=n.status,o=n.text,t.preloader.html(o),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(i){if(!e(i).hasClass(v)){var o=t.st.closeOnContentClick,n=t.st.closeOnBgClick;if(o&&n)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(o)return!0}else if(n&&e.contains(document,i))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||b.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(i){return i.target===t.wrap[0]||e.contains(t.wrap[0],i.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,i,o){var n;o.data&&(i=e.extend(o.data,i)),S(u,[t,i,o]),e.each(i,function(i,o){if(void 0===o||o===!1)return!0;if(n=i.split("_"),n.length>1){var r=t.find(y+"-"+n[0]);if(r.length>0){var s=n[1];"replaceWith"===s?r[0]!==o[0]&&r.replaceWith(o):"img"===s?r.is("img")?r.attr("src",o):r.replaceWith(e("<img>").attr("src",o).attr("class",r.attr("class"))):r.attr(n[1],o)}}else t.find(y+"-"+i).html(o)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:T.prototype,modules:[],open:function(t,i){return Y(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=i||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(i){Y();var o=e(this);if("string"==typeof i)if("open"===i){var n,r=w?o.data("magnificPopup"):o[0].magnificPopup,s=parseInt(arguments[1],10)||0;r.items?n=r.items[s]:(n=o,r.delegate&&(n=n.find(r.delegate)),n=n.eq(s)),t._openClick({mfpEl:n},o,r)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else i=e.extend(!0,{},i),w?o.data("magnificPopup",i):o[0].magnificPopup=i,t.addGroup(o,i);return o};var j,Q,O,A="inline",I=function(){O&&(Q.after(O.addClass(j)).detach(),O=null)};e.magnificPopup.registerModule(A,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(A),P(a+"."+A,function(){I()})},getInline:function(i,o){if(I(),i.src){var n=t.st.inline,r=e(i.src);if(r.length){var s=r[0].parentNode;s&&s.tagName&&(Q||(j=n.hiddenClass,Q=k(j),j="mfp-"+j),O=r.after(Q).detach().removeClass(j)),t.updateStatus("ready")}else t.updateStatus("error",n.tNotFound),r=e("<div>");return i.inlineElement=r,
r}return t.updateStatus("ready"),t._parseMarkup(o,{},i),o}}});var _,L="ajax",E=function(){_&&e(document.body).removeClass(_)},$=function(){E(),t.req&&t.req.abort()};e.magnificPopup.registerModule(L,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(L),_=t.st.ajax.cursor,P(a+"."+L,$),P("BeforeChange."+L,$)},getAjax:function(i){_&&e(document.body).addClass(_),t.updateStatus("loading");var o=e.extend({url:i.src,success:function(o,n,r){var s={data:o,xhr:r};S("ParseAjax",s),t.appendContent(e(s.data),L),i.finished=!0,E(),t._setFocus(),setTimeout(function(){t.wrap.addClass(g)},16),t.updateStatus("ready"),S("AjaxContentAdded")},error:function(){E(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var M,z=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var o=t.st.image.titleSrc;if(o){if(e.isFunction(o))return o.call(t,i);if(i.el)return i.el.attr(o)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var i=t.st.image,o=".image";t.types.push("image"),P(p+o,function(){"image"===t.currItem.type&&i.cursor&&e(document.body).addClass(i.cursor)}),P(a+o,function(){i.cursor&&e(document.body).removeClass(i.cursor),b.off("resize"+y)}),P("Resize"+o,t.resizeImage),t.isLowIE&&P("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,M&&clearInterval(M),e.isCheckingImgSize=!1,S("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,o=e.img[0],n=function(r){M&&clearInterval(M),M=setInterval(function(){return o.naturalWidth>0?void t._onImageHasSize(e):(i>200&&clearInterval(M),i++,void(3===i?n(10):40===i?n(50):100===i&&n(500)))},r)};n(1)},getImage:function(i,o){var n=0,r=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,S("ImageLoadComplete")):(n++,200>n?setTimeout(r,100):s()))},s=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",a.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},a=t.st.image,l=o.find(".mfp-img");if(l.length){var d=document.createElement("img");d.className="mfp-img",i.el&&i.el.find("img").length&&(d.alt=i.el.find("img").attr("alt")),i.img=e(d).on("load.mfploader",r).on("error.mfploader",s),d.src=i.src,l.is("img")&&(i.img=i.img.clone()),d=i.img[0],d.naturalWidth>0?i.hasSize=!0:d.width||(i.hasSize=!1)}return t._parseMarkup(o,{title:z(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(M&&clearInterval(M),i.loadError?(o.addClass("mfp-loading"),t.updateStatus("error",a.tError.replace("%url%",i.src))):(o.removeClass("mfp-loading"),t.updateStatus("ready")),o):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,o.addClass("mfp-loading"),t.findImageSize(i)),o)}}});var B,D=function(){return void 0===B&&(B=void 0!==document.createElement("p").style.MozTransform),B};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,i=t.st.zoom,o=".zoom";if(i.enabled&&t.supportsTransition){var n,r,s=i.duration,d=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),o="all "+i.duration/1e3+"s "+i.easing,n={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return n["-webkit-"+r]=n["-moz-"+r]=n["-o-"+r]=n[r]=o,t.css(n),t},c=function(){t.content.css("visibility","visible")};P("BuildControls"+o,function(){if(t._allowZoom()){if(clearTimeout(n),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void c();r=d(e),r.css(t._getOffset()),t.wrap.append(r),n=setTimeout(function(){r.css(t._getOffset(!0)),n=setTimeout(function(){c(),setTimeout(function(){r.remove(),e=r=null,S("ZoomAnimationEnded")},16)},s)},16)}}),P(l+o,function(){if(t._allowZoom()){if(clearTimeout(n),t.st.removalDelay=s,!e){if(e=t._getItemToZoom(),!e)return;r=d(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),P(a+o,function(){t._allowZoom()&&(c(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(i){var o;o=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var n=o.offset(),r=parseInt(o.css("padding-top"),10),s=parseInt(o.css("padding-bottom"),10);n.top-=e(window).scrollTop()-r;var a={width:o.width(),height:(w?o.innerHeight():o[0].offsetHeight)-s-r};return D()?a["-moz-transform"]=a.transform="translate("+n.left+"px,"+n.top+"px)":(a.left=n.left,a.top=n.top),a}}});var F="iframe",H="//about:blank",W=function(e){if(t.currTemplate[F]){var i=t.currTemplate[F].find("iframe");i.length&&(e||(i[0].src=H),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(F),P("BeforeChange",function(e,t,i){t!==i&&(t===F?W():i===F&&W(!0))}),P(a+"."+F,function(){W()})},getIframe:function(i,o){var n=i.src,r=t.st.iframe;e.each(r.patterns,function(){return n.indexOf(this.index)>-1?(this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1):void 0});var s={};return r.srcAction&&(s[r.srcAction]=n),t._parseMarkup(o,s,i),t.updateStatus("ready"),o}}});var R=function(e){var i=t.items.length;return e>i-1?e-i:0>e?i+e:e},q=function(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,n=".mfp-gallery";return t.direction=!0,!(!i||!i.enabled)&&(r+=" mfp-gallery",P(p+n,function(){i.navigateByImgClick&&t.wrap.on("click"+n,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+n,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),P("UpdateStatus"+n,function(e,i){i.text&&(i.text=q(i.text,t.currItem.index,t.items.length))}),P(u+n,function(e,o,n,r){var s=t.items.length;n.counter=s>1?q(i.tCounter,r.index,s):""}),P("BuildControls"+n,function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var o=i.arrowMarkup,n=t.arrowLeft=e(o.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass(v),r=t.arrowRight=e(o.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass(v);n.click(function(){t.prev()}),r.click(function(){t.next()}),t.container.append(n.add(r))}}),P(f+n,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void P(a+n,function(){o.off(n),t.wrap.off("click"+n),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=R(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=R(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,o=Math.min(i[0],t.items.length),n=Math.min(i[1],t.items.length);for(e=1;e<=(t.direction?n:o);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?o:n);e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=R(i),!t.items[i].preloaded){var o=t.items[i];o.parsed||(o=t.parseEl(i)),S("LazyLoad",o),"image"===o.type&&(o.img=e('<img class="mfp-img" />').on("load.mfploader",function(){o.hasSize=!0}).on("error.mfploader",function(){o.hasSize=!0,o.loadError=!0,S("LazyLoadError",o)}).attr("src",o.src)),o.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;i=isNaN(i)?i():i,i>1&&(P("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),P("ElementParse."+U,function(t,o){o.src=e.replaceSrc(o,i)}))}}}}),Y()}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){e.ui=e.ui||{},e.ui.version="1.12.0";var t=0,i=Array.prototype.slice;e.cleanData=function(t){return function(i){var o,n,r;for(r=0;null!=(n=i[r]);r++)try{o=e._data(n,"events"),o&&o.remove&&e(n).triggerHandler("remove")}catch(e){}t(i)}}(e.cleanData),e.widget=function(t,i,o){var n,r,s,a={},l=t.split(".")[0];t=t.split(".")[1];var d=l+"-"+t;return o||(o=i,i=e.Widget),e.isArray(o)&&(o=e.extend.apply(null,[{}].concat(o))),e.expr[":"][d.toLowerCase()]=function(t){return!!e.data(t,d)},e[l]=e[l]||{},n=e[l][t],r=e[l][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new r(e,t)},e.extend(r,n,{version:o.version,_proto:e.extend({},o),_childConstructors:[]}),s=new i,s.options=e.widget.extend({},s.options),e.each(o,function(t,o){return e.isFunction(o)?void(a[t]=function(){function e(){return i.prototype[t].apply(this,arguments)}function n(e){return i.prototype[t].apply(this,e)}return function(){var t,i=this._super,r=this._superApply;return this._super=e,this._superApply=n,t=o.apply(this,arguments),this._super=i,this._superApply=r,t}}()):void(a[t]=o)}),r.prototype=e.widget.extend(s,{widgetEventPrefix:n?s.widgetEventPrefix||t:t},a,{constructor:r,namespace:l,widgetName:t,widgetFullName:d}),n?(e.each(n._childConstructors,function(t,i){var o=i.prototype;e.widget(o.namespace+"."+o.widgetName,r,i._proto)}),delete n._childConstructors):i._childConstructors.push(r),e.widget.bridge(t,r),r},e.widget.extend=function(t){for(var o,n,r=i.call(arguments,1),s=0,a=r.length;a>s;s++)for(o in r[s])n=r[s][o],r[s].hasOwnProperty(o)&&void 0!==n&&(t[o]=e.isPlainObject(n)?e.isPlainObject(t[o])?e.widget.extend({},t[o],n):e.widget.extend({},n):n);return t},e.widget.bridge=function(t,o){var n=o.prototype.widgetFullName||t;e.fn[t]=function(r){var s="string"==typeof r,a=i.call(arguments,1),l=this;return s?this.each(function(){var i,o=e.data(this,n);return"instance"===r?(l=o,!1):o?e.isFunction(o[r])&&"_"!==r.charAt(0)?(i=o[r].apply(o,a),i!==o&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+r+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+r+"'")}):(a.length&&(r=e.widget.extend.apply(null,[r].concat(a))),this.each(function(){var t=e.data(this,n);t?(t.option(r||{}),t._init&&t._init()):e.data(this,n,new o(r,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,o){o=e(o||this.defaultElement||this)[0],this.element=e(o),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),this.classesElementLookup={},o!==this&&(e.data(o,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===o&&this.destroy()}}),this.document=e(o.style?o.ownerDocument:o.document||o),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){var t=this;this._destroy(),e.each(this.classesElementLookup,function(e,i){t._removeClass(i,e)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var o,n,r,s=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(s={},o=t.split("."),t=o.shift(),o.length){for(n=s[t]=e.widget.extend({},this.options[t]),r=0;o.length-1>r;r++)n[o[r]]=n[o[r]]||{},n=n[o[r]];if(t=o.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=i}return this._setOptions(s),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return"classes"===e&&this._setOptionClasses(t),this.options[e]=t,"disabled"===e&&this._setOptionDisabled(t),this},_setOptionClasses:function(t){var i,o,n;for(i in t)n=this.classesElementLookup[i],t[i]!==this.options.classes[i]&&n&&n.length&&(o=e(n.get()),this._removeClass(n,i),o.addClass(this._classes({element:o,keys:i,classes:t,add:!0})))},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(t){function i(i,r){var s,a;for(a=0;i.length>a;a++)s=n.classesElementLookup[i[a]]||e(),s=e(t.add?e.unique(s.get().concat(t.element.get())):s.not(t.element).get()),n.classesElementLookup[i[a]]=s,o.push(i[a]),r&&t.classes[i[a]]&&o.push(t.classes[i[a]])}var o=[],n=this;return t=e.extend({element:this.element,classes:this.options.classes||{}},t),t.keys&&i(t.keys.match(/\S+/g)||[],!0),t.extra&&i(t.extra.match(/\S+/g)||[]),o.join(" ")},_removeClass:function(e,t,i){return this._toggleClass(e,t,i,!1)},_addClass:function(e,t,i){return this._toggleClass(e,t,i,!0)},_toggleClass:function(e,t,i,o){o="boolean"==typeof o?o:i;var n="string"==typeof e||null===e,r={extra:n?t:i,keys:n?e:t,element:n?this.element:e,add:o};return r.element.toggleClass(this._classes(r),o),this},_on:function(t,i,o){var n,r=this;"boolean"!=typeof t&&(o=i,i=t,t=!1),o?(i=n=e(i),this.bindings=this.bindings.add(i)):(o=i,i=this.element,n=this.widget()),e.each(o,function(o,s){function a(){return t||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof s?r[s]:s).apply(r,arguments):void 0}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||e.guid++);var l=o.match(/^([\w:-]*)\s*(.*)$/),d=l[1]+r.eventNamespace,c=l[2];c?n.on(d,c,a):i.on(d,a)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(i).off(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?o[e]:e).apply(o,arguments)}var o=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(e(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(e(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,i,o){var n,r,s=this.options[t];if(o=o||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],r=i.originalEvent)for(n in r)n in i||(i[n]=r[n]);return this.element.trigger(i,o),!(e.isFunction(s)&&s.apply(this.element[0],[i].concat(o))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(o,n,r){"string"==typeof n&&(n={effect:n});var s,a=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),s=!e.isEmptyObject(n),n.complete=r,n.delay&&o.delay(n.delay),s&&e.effects&&e.effects.effect[a]?o[t](n):a!==t&&o[a]?o[a](n.duration,n.easing,r):o.queue(function(i){e(this)[t](),r&&r.call(o[0]),i()})}}),e.widget,e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},e.fn.extend({uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.widget("ui.accordion",{version:"1.12.0",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t,i,o=this.options.icons;o&&(t=e("<span>"),this._addClass(t,"ui-accordion-header-icon","ui-icon "+o.header),t.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,o.header)._addClass(i,null,o.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?void this._activate(t):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),void("icons"===e&&(this._destroyIcons(),t&&this._createIcons())))},_setOptionDisabled:function(e){this._super(e),this.element.attr("aria-disabled",e),this._toggleClass(null,"ui-state-disabled",!!e),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!e)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,o=this.headers.length,n=this.headers.index(t.target),r=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:r=this.headers[(n+1)%o];break;case i.LEFT:case i.UP:r=this.headers[(n-1+o)%o];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:r=this.headers[0];break;case i.END:r=this.headers[o-1]}r&&(e(t.target).attr("tabIndex",-1),e(r).attr("tabIndex",0),e(r).trigger("focus"),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().trigger("focus")},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,o=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),o=t.next(),n=o.uniqueId().attr("id");t.attr("aria-controls",n),o.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===o?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),o=i.css("position");"absolute"!==o&&"fixed"!==o&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===o&&(t=0,this.headers.next().each(function(){var i=e(this).is(":visible");i||e(this).show(),t=Math.max(t,e(this).css("height","").height()),i||e(this).hide()}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i,o,n=this.options,r=this.active,s=e(t.currentTarget),a=s[0]===r[0],l=a&&n.collapsible,d=l?e():s.next(),c=r.next(),u={oldHeader:r,oldPanel:c,newHeader:l?e():s,newPanel:d};t.preventDefault(),a&&!n.collapsible||this._trigger("beforeActivate",t,u)===!1||(n.active=!l&&this.headers.index(s),this.active=a?e():s,this._toggle(u),this._removeClass(r,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=r.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),a||(this._removeClass(s,"ui-accordion-header-collapsed")._addClass(s,"ui-accordion-header-active","ui-state-active"),n.icons&&(o=s.children(".ui-accordion-header-icon"),this._removeClass(o,null,n.icons.header)._addClass(o,null,n.icons.activeHeader)),this._addClass(s.next(),"ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,o=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=o,this.options.animate?this._animate(i,o,t):(o.hide(),i.show(),this._toggleComplete(t)),o.attr({"aria-hidden":"true"}),o.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&o.length?o.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var o,n,r,s=this,a=0,l=e.css("box-sizing"),d=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},u=d&&c.down||c,p=function(){s._toggleComplete(i)};return"number"==typeof u&&(r=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,r=r||u.duration||c.duration,t.length?e.length?(o=e.show().outerHeight(),t.animate(this.hideProps,{duration:r,easing:n,step:function(e,t){t.now=Math.round(e)}}),void e.hide().animate(this.showProps,{duration:r,easing:n,complete:p,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===l&&(a+=i.now):"content"!==s.options.heightStyle&&(i.now=Math.round(o-t.outerHeight()-a),a=0)}})):t.animate(this.hideProps,r,n,p):e.animate(this.showProps,r,n,p)},_toggleComplete:function(e){var t=e.oldPanel,i=t.prev();this._removeClass(t,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})});var ytp=ytp||{},getYTPVideoID=function(e){var t,i;return e.indexOf("youtu.be")>0?(t=e.substr(e.lastIndexOf("/")+1,e.length),i=t.indexOf("?list=")>0?t.substr(t.lastIndexOf("="),t.length):null,t=i?t.substr(0,t.lastIndexOf("?")):t):e.indexOf("http")>-1?(t=e.match(/[\\?&]v=([^&#]*)/)[1],i=e.indexOf("list=")>0?e.match(/[\\?&]list=([^&#]*)/)[1]:null):(t=e.length>15?null:e,i=t?null:e),{videoID:t,playlistID:i}};!function(jQuery,ytp){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"3.0.8",build:"5878",author:"Matteo Bicocchi",apiKey:"",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:50,addRaster:!1,mask:!1,opacity:1,quality:"default",mute:!1,loop:!0,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnBlur:!0,realfullscreen:!0,mobileFallbackImage:null,gaTrack:!0,optimizeDisplay:!0,align:"center,center",onReady:function(e){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},controlBar:null,loading:null,locationProtocol:"https:",filters:{grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},YTPlayer.state={},YTPlayer.filters=jQuery.mbYTPlayer.filters,YTPlayer.filtersEnabled=!0,YTPlayer.id=YTPlayer.id||"YTP_"+(new Date).getTime(),$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"undefined"!=typeof property&&"undefined"!=typeof property.vol&&(property.vol=0===property.vol?property.vol=1:property.vol),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property),YTPlayer.hasChanged||(YTPlayer.defaultOpt={},jQuery.extend(YTPlayer.defaultOpt,jQuery.mbYTPlayer.defaults,options)),"true"==YTPlayer.opt.loop&&(YTPlayer.opt.loop=9999),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1;var isIframe=function(){var e=!1;try{self.location.href!=top.location.href&&(e=!0)}catch(t){e=!0}return e};YTPlayer.canGoFullScreen=!(jQuery.browser.msie||jQuery.browser.opera||isIframe()),YTPlayer.canGoFullScreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","video_"+(new Date).getTime());var playerID="mbYTP_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0;var videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:!!$YTPlayer.attr("href")&&getYTPVideoID($YTPlayer.attr("href")).videoID,playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:!!$YTPlayer.attr("href")&&getYTPVideoID($YTPlayer.attr("href")).playlistID;YTPlayer.videoID=videoID,YTPlayer.playlistID=playlistID,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={modestbranding:1,autoplay:0,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations};if(document.createElement("video").canPlayType&&jQuery.extend(playerVars,{html5:1}),jQuery.browser.msie&&jQuery.browser.version<9&&(this.opt.opacity=1),YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.defaultOpt.containment=YTPlayer.opt.containment=jQuery("self"==YTPlayer.opt.containment?this:YTPlayer.opt.containment),YTPlayer.isBackground=YTPlayer.opt.containment.is("body"),!YTPlayer.isBackground||!ytp.backgroundIsInited){var isPlayer=YTPlayer.opt.containment.is(jQuery(this));YTPlayer.canPlayOnMobile=isPlayer&&0===jQuery(this).children().length,YTPlayer.isPlayer=!1,isPlayer?YTPlayer.isPlayer=!0:$YTPlayer.hide();var overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");YTPlayer.isPlayer&&overlay.on("click",function(){$YTPlayer.YTPTogglePlay()});var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0});var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox");if(playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),wrapper.append(playerBox),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),jQuery.browser.mobile||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){YTPlayer.controlBar.length&&YTPlayer.controlBar.addClass("visible")}).on("mouseleave",function(){YTPlayer.controlBar.length&&YTPlayer.controlBar.removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head").prepend(tag)}if(jQuery.browser.mobile&&!YTPlayer.canPlayOnMobile)return YTPlayer.opt.mobileFallbackImage&&YTPlayer.opt.containment.css({backgroundImage:"url("+YTPlayer.opt.mobileFallbackImage+")",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}),$YTPlayer.remove(),void jQuery(document).trigger("YTPUnavailable");
jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?!!YTPlayer.isBackground:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){if(!YTPlayer.isInit){if(YTPlayer.isInit=!0,jQuery.browser.mobile&&YTPlayer.canPlayOnMobile){if(YTPlayer.opt.containment.outerWidth()>jQuery(window).width()){YTPlayer.opt.containment.css({maxWidth:"100%"});var h=.563*YTPlayer.opt.containment.outerWidth();YTPlayer.opt.containment.css({maxHeight:h})}return void new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),width:"100%",height:h,playerVars:playerVars,events:{onReady:function(e){YTPlayer.player=e.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:1})}}})}new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(e){YTPlayer.player=e.target,YTPlayer.isReady||(YTPlayer.isReady=!(YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay),YTPlayer.playerEl=YTPlayer.player.getIframe(),jQuery(YTPlayer.playerEl).unselectable(),$YTPlayer.optimizeDisplay(),YTPlayer.videoID=videoID,jQuery(window).off("resize.YTP_"+YTPlayer.id).on("resize.YTP_"+YTPlayer.id,function(){$YTPlayer.optimizeDisplay()}),jQuery.mbYTPlayer.checkForState(YTPlayer))},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.preventTrigger)return void(YTPlayer.preventTrigger=!1);YTPlayer.state=state;var eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPEnd";break;case 1:eventType="YTPPlay",YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),eventType="YTPBuffering",YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:eventType="YTPCued"}var YTPEvent=jQuery.Event(eventType);YTPEvent.time=YTPlayer.currentTime,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(YTPEvent)}},onPlaybackQualityChange:function(e){var t=e.target.getPlaybackQuality(),i=jQuery.Event("YTPQualityChange");i.quality=t,jQuery(YTPlayer).trigger(i)},onError:function(e){150==e.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==e.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,e)}}})}}))}),$YTPlayer.off("YTPTime.mask"),jQuery.mbYTPlayer.applyMask(YTPlayer)}})},getDataFromAPI:function(e){if(e.videoData=jQuery.mbStorage.get("YTPlayer_data_"+e.videoID),jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer",function(){if(e.hasData&&e.isPlayer&&!e.opt.autoPlay){var t=e.videoData.thumb_max||e.videoData.thumb_high||e.videoData.thumb_medium;e.opt.containment.css({background:"rgba(0,0,0,0.5) url("+t+") center center",backgroundSize:"cover"}),e.opt.backgroundUrl=t}}),e.videoData)setTimeout(function(){e.opt.ratio="auto"==e.opt.ratio?"16/9":e.opt.ratio,e.dataReceived=!0,jQuery(e).trigger("YTPChanged");var t=jQuery.Event("YTPData");t.prop={};for(var i in e.videoData)t.prop[i]=e.videoData[i];jQuery(e).trigger(t)},500),e.hasData=!0;else if(jQuery.mbYTPlayer.apiKey)jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//www.googleapis.com/youtube/v3/videos?id="+e.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(t){function i(t){e.videoData={},e.videoData.id=e.videoID,e.videoData.channelTitle=t.channelTitle,e.videoData.title=t.title,e.videoData.description=t.description.length<400?t.description:t.description.substring(0,400)+" ...",e.videoData.aspectratio="auto"==e.opt.ratio?"16/9":e.opt.ratio,e.opt.ratio=e.videoData.aspectratio,e.videoData.thumb_max=t.thumbnails.maxres?t.thumbnails.maxres.url:null,e.videoData.thumb_high=t.thumbnails.high?t.thumbnails.high.url:null,e.videoData.thumb_medium=t.thumbnails.medium?t.thumbnails.medium.url:null,jQuery.mbStorage.set("YTPlayer_data_"+e.videoID,e.videoData)}e.dataReceived=!0,jQuery(e).trigger("YTPChanged"),i(t.items[0].snippet),e.hasData=!0;var o=jQuery.Event("YTPData");o.prop={};for(var n in e.videoData)o.prop[n]=e.videoData[n];jQuery(e).trigger(o)});else{if(setTimeout(function(){jQuery(e).trigger("YTPChanged")},50),e.isPlayer&&!e.opt.autoPlay){var t=jQuery.mbYTPlayer.locationProtocol+"//i.ytimg.com/vi/"+e.videoID+"/hqdefault.jpg";e.opt.containment.css({background:"rgba(0,0,0,0.5) url("+t+") center center",backgroundSize:"cover"}),e.opt.backgroundUrl=t}e.videoData=null,e.opt.ratio="auto"==e.opt.ratio?"16/9":e.opt.ratio}!e.isPlayer||e.opt.autoPlay||jQuery.browser.mobile||(e.loading=jQuery("<div/>").addClass("loading").html("Loading").hide(),jQuery(e).append(e.loading),e.loading.fadeIn())},removeStoredData:function(){jQuery.mbStorage.remove()},getVideoData:function(){var e=this.get(0);return e.videoData},getVideoID:function(){var e=this.get(0);return e.videoID||!1},setVideoQuality:function(e){var t=this.get(0);t.player.setPlaybackQuality(e)},playlist:function(e,t,i,o){var n=this,r=n.get(0);return r.isPlayList=!0,t&&(e=jQuery.shuffle(e)),r.videoID||(r.videos=e,r.videoCounter=0,r.videoLength=e.length,jQuery(r).data("property",e[0]),jQuery(r).mb_YTPlayer()),"function"==typeof i&&jQuery(r).one("YTPChanged",function(){i(r)}),jQuery(r).on("YTPEnd",function(){o="undefined"==typeof o||o,jQuery(r).playNext(o)}),n},playNext:function(e){var t=this.get(0);return t.checkForStartAt&&(clearTimeout(t.checkForStartAt),clearInterval(t.getState)),t.videoCounter++,t.videoCounter>=t.videoLength&&e&&(t.videoCounter=0),t.videoCounter<t.videoLength?jQuery(t).changeMovie(t.videos[t.videoCounter]):t.videoCounter--,this},playPrev:function(){var e=this.get(0);return e.checkForStartAt&&(clearInterval(e.checkForStartAt),clearInterval(e.getState)),e.videoCounter--,e.videoCounter<0&&(e.videoCounter=e.videoLength-1),jQuery(e).changeMovie(e.videos[e.videoCounter]),this},playIndex:function(e){var t=this.get(0);return e-=1,t.checkForStartAt&&(clearInterval(t.checkForStartAt),clearInterval(t.getState)),t.videoCounter=e,t.videoCounter>=t.videoLength-1&&(t.videoCounter=t.videoLength-1),jQuery(t).changeMovie(t.videos[t.videoCounter]),this},changeMovie:function(e){var t=this,i=t.get(0);i.opt.startAt=0,i.opt.stopAt=0,i.opt.mask=!1,i.opt.mute=!0,i.hasData=!1,i.hasChanged=!0,i.player.loopTime=void 0,e&&jQuery.extend(i.opt,e),i.videoID=getYTPVideoID(i.opt.videoURL).videoID,"true"==i.opt.loop&&(i.opt.loop=9999),jQuery(i.playerEl).CSSAnimate({opacity:0},200,function(){var e=jQuery.Event("YTPChangeMovie");e.time=i.currentTime,e.videoId=i.videoID,jQuery(i).trigger(e),jQuery(i).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+i.videoID),1,i.opt.quality),jQuery(i).optimizeDisplay(),jQuery.mbYTPlayer.checkForState(i),jQuery.mbYTPlayer.getDataFromAPI(i)}),jQuery.mbYTPlayer.applyMask(i)},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var e=this.get(0);ytp.YTAPIReady=!0,ytp.backgroundIsInited=!1,e.isInit=!1,e.videoID=null;var t=e.wrapper;return t.remove(),jQuery("#controlBar_"+e.id).remove(),clearInterval(e.checkForStartAt),clearInterval(e.getState),this},fullscreen:function(real){function hideMouse(){YTPlayer.overlay.css({cursor:"none"})}function RunPrefixMethod(e,t){for(var i,o,n=["webkit","moz","ms","o",""],r=0;r<n.length&&!e[i];){if(i=t,""==n[r]&&(i=i.substr(0,1).toLowerCase()+i.substr(1)),i=n[r]+i,o=typeof e[i],"undefined"!=o)return n=[n[r]],"function"==o?e[i]():e[i];r++}}function launchFullscreen(e){RunPrefixMethod(e,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var e=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");e?(jQuery(YTPlayer).YTPSetVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("YTPFullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}return YTPlayer.isAlone?(jQuery(document).off("mousemove.YTPlayer"),clearTimeout(YTPlayer.hideCursor),YTPlayer.overlay.css({cursor:"auto"}),real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(jQuery(document).on("mousemove.YTPlayer",function(e){YTPlayer.overlay.css({cursor:"auto"}),clearTimeout(YTPlayer.hideCursor),jQuery(e.target).parents().is(".mb_YTPBar")||(YTPlayer.hideCursor=setTimeout(hideMouse,3e3))}),hideMouse(),real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("YTPFullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1e3),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},500)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},1e3),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0),this},toggleLoops:function(){var e=this.get(0),t=e.opt;return 1==t.loop?t.loop=0:(t.startAt?e.player.seekTo(t.startAt):e.player.playVideo(),t.loop=1),this},play:function(){var e=this.get(0);if(!e.isReady)return this;e.player.playVideo(),e.wrapper.CSSAnimate({opacity:e.isAlone?1:e.opt.opacity},2e3),jQuery(e.playerEl).CSSAnimate({opacity:1},1e3);var t=jQuery("#controlBar_"+e.id),i=t.find(".mb_YTPPlaypause");return i.html(jQuery.mbYTPlayer.controls.pause),e.state=1,jQuery(e).css("background-image","none"),this},togglePlay:function(e){var t=this.get(0);return 1==t.state?this.YTPPause():this.YTPPlay(),"function"==typeof e&&e(t.state),this},stop:function(){var e=this.get(0),t=jQuery("#controlBar_"+e.id),i=t.find(".mb_YTPPlaypause");return i.html(jQuery.mbYTPlayer.controls.play),e.player.stopVideo(),this},pause:function(){var e=this.get(0);return e.player.pauseVideo(),e.state=2,this},seekTo:function(e){var t=this.get(0);return t.player.seekTo(e,!0),this},setVolume:function(e){var t=this.get(0);return e||t.opt.vol||0!=t.player.getVolume()?!e&&t.player.getVolume()>0||e&&t.opt.vol==e?t.isMute?jQuery(t).YTPUnmute():jQuery(t).YTPMute():(t.opt.vol=e,t.player.setVolume(t.opt.vol),t.volumeBar&&t.volumeBar.length&&t.volumeBar.updateSliderVal(e)):jQuery(t).YTPUnmute(),this},toggleVolume:function(){var e=this.get(0);if(e)return e.player.isMuted()?(jQuery(e).YTPUnmute(),!0):(jQuery(e).YTPMute(),!1)},mute:function(){var e=this.get(0);if(!e.isMute){e.player.mute(),e.isMute=!0,e.player.setVolume(0),e.volumeBar&&e.volumeBar.length&&e.volumeBar.width()>10&&e.volumeBar.updateSliderVal(0);var t=jQuery("#controlBar_"+e.id),i=t.find(".mb_YTPMuteUnmute");i.html(jQuery.mbYTPlayer.controls.unmute),jQuery(e).addClass("isMuted"),e.volumeBar&&e.volumeBar.length&&e.volumeBar.addClass("muted");var o=jQuery.Event("YTPMuted");return o.time=e.currentTime,e.canTrigger&&jQuery(e).trigger(o),this}},unmute:function(){var e=this.get(0);if(e.isMute){e.player.unMute(),e.isMute=!1,e.player.setVolume(e.opt.vol),e.volumeBar&&e.volumeBar.length&&e.volumeBar.updateSliderVal(e.opt.vol>10?e.opt.vol:10);var t=jQuery("#controlBar_"+e.id),i=t.find(".mb_YTPMuteUnmute");i.html(jQuery.mbYTPlayer.controls.mute),jQuery(e).removeClass("isMuted"),e.volumeBar&&e.volumeBar.length&&e.volumeBar.removeClass("muted");var o=jQuery.Event("YTPUnmuted");return o.time=e.currentTime,e.canTrigger&&jQuery(e).trigger(o),this}},applyFilter:function(e,t){return this.each(function(){var i=this;i.filters[e].value=t,i.filtersEnabled&&jQuery(i).YTPEnableFilters()})},applyFilters:function(e){return this.each(function(){var t=this;if(!t.isReady)return void jQuery(t).on("YTPReady",function(){jQuery(t).YTPApplyFilters(e)});for(var i in e)jQuery(t).YTPApplyFilter(i,e[i]);jQuery(t).trigger("YTPFiltersApplied")})},toggleFilter:function(e,t){return this.each(function(){var i=this;i.filters[e].value?i.filters[e].value=0:i.filters[e].value=t,i.filtersEnabled&&jQuery(this).YTPEnableFilters()})},toggleFilters:function(e){return this.each(function(){var t=this;t.filtersEnabled?(jQuery(t).trigger("YTPDisableFilters"),jQuery(t).YTPDisableFilters()):(jQuery(t).YTPEnableFilters(),jQuery(t).trigger("YTPEnableFilters")),"function"==typeof e&&e(t.filtersEnabled)})},disableFilters:function(){return this.each(function(){var e=this,t=jQuery(e.playerEl);t.css("-webkit-filter",""),t.css("filter",""),e.filtersEnabled=!1})},enableFilters:function(){return this.each(function(){var e=this,t=jQuery(e.playerEl),i="";for(var o in e.filters)e.filters[o].value&&(i+=o.replace("_","-")+"("+e.filters[o].value+e.filters[o].unit+") ");t.css("-webkit-filter",i),t.css("filter",i),e.filtersEnabled=!0})},removeFilter:function(e,t){return this.each(function(){var i=this;if("function"==typeof e&&(t=e,e=null),e)jQuery(this).YTPApplyFilter(e,0),"function"==typeof t&&t(e);else for(var o in i.filters)jQuery(this).YTPApplyFilter(o,0),"function"==typeof t&&t(o)})},getFilters:function(){var e=this.get(0);return e.filters},addMask:function(e){var t=this.get(0),i=t.overlay;e||(e=t.actualMask);var o=jQuery("<img/>").attr("src",e).on("load",function(){i.CSSAnimate({opacity:0},500,function(){t.hasMask=!0,o.remove(),i.css({backgroundImage:"url("+e+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"}),i.CSSAnimate({opacity:1},500)})});return this},removeMask:function(){var e=this.get(0),t=e.overlay;return t.CSSAnimate({opacity:0},500,function(){e.hasMask=!1,t.css({backgroundImage:"",backgroundRepeat:"",backgroundPosition:"",backgroundSize:""}),t.CSSAnimate({opacity:1},500)}),this},applyMask:function(e){var t=jQuery(e);if(t.off("YTPTime.mask"),e.opt.mask)if("string"==typeof e.opt.mask)t.YTPAddMask(e.opt.mask),e.actualMask=e.opt.mask;else if("object"==typeof e.opt.mask){for(var i in e.opt.mask)e.opt.mask[i]&&jQuery("<img/>").attr("src",e.opt.mask[i]);e.opt.mask[0]&&t.YTPAddMask(e.opt.mask[0]),t.on("YTPTime.mask",function(i){for(var o in e.opt.mask)i.time==o&&(e.opt.mask[o]?(t.YTPAddMask(e.opt.mask[o]),e.actualMask=e.opt.mask[o]):t.YTPRemoveMask())})}},toggleMask:function(){var e=this.get(0),t=$(e);return e.hasMask?t.YTPRemoveMask():t.YTPAddMask(),this},manageProgress:function(){var e=this.get(0),t=jQuery("#controlBar_"+e.id),i=t.find(".mb_YTPProgress"),o=t.find(".mb_YTPLoaded"),n=t.find(".mb_YTPseekbar"),r=i.outerWidth(),s=Math.floor(e.player.getCurrentTime()),a=Math.floor(e.player.getDuration()),l=s*r/a,d=0,c=100*e.player.getVideoLoadedFraction();return o.css({left:d,width:c+"%"}),n.css({left:0,width:l}),{totalTime:a,currentTime:s}},buildControls:function(YTPlayer){var data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){YTPlayer.controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).YTPPause():jQuery(YTPlayer).YTPPlay()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).YTPUnmute():jQuery(YTPlayer).YTPMute()}),volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});YTPlayer.volumeBar=volumeBar;var idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(e){timeBar.css({width:e.clientX-timeBar.offset().left}),YTPlayer.timeW=e.clientX-timeBar.offset().left,YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});var t=Math.floor(YTPlayer.player.getDuration());YTPlayer.goto=timeBar.outerWidth()*t/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer.goto),!0),YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),YTPlayer.controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(YTPlayer.controlBar):(YTPlayer.controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(YTPlayer.controlBar)),volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(e){0==e.value?jQuery(YTPlayer).YTPMute():jQuery(YTPlayer).YTPUnmute(),YTPlayer.player.setVolume(e.value),YTPlayer.isMute||(YTPlayer.opt.vol=e.value)}})}},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?100:400;return clearInterval(YTPlayer.getState),jQuery.contains(document,YTPlayer)?(jQuery.mbYTPlayer.checkForStart(YTPlayer),void(YTPlayer.getState=setInterval(function(){var prog=jQuery(YTPlayer).YTPManageProgress(),$YTPlayer=jQuery(YTPlayer),data=YTPlayer.opt,startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1,stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.currentTime!=prog.currentTime){var YTPEvent=jQuery.Event("YTPTime");YTPEvent.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(YTPEvent)}if(YTPlayer.currentTime=prog.currentTime,YTPlayer.totalTime=YTPlayer.player.getDuration(),0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,$YTPlayer.YTPPlay()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.YTPPause())),YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact?(YTPlayer.controlBar.addClass("compact"),YTPlayer.isCompact=!0,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)):YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact&&(YTPlayer.controlBar.removeClass("compact"),YTPlayer.isCompact=!1,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),1==YTPlayer.player.getPlayerState()&&(parseFloat(YTPlayer.player.getDuration()-1.5)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},1e3),YTPlayer.isPlayList){if(!data.loop||data.loop>0&&YTPlayer.player.loopTime===data.loop-1){YTPlayer.player.loopTime=void 0,clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.currentTime,void jQuery(YTPlayer).trigger(YTPEnd)}}else if(!data.loop||data.loop>0&&YTPlayer.player.loopTime===data.loop-1)return YTPlayer.player.loopTime=void 0,YTPlayer.preventTrigger=!0,YTPlayer.state=2,jQuery(YTPlayer).YTPPause(),void YTPlayer.wrapper.CSSAnimate({opacity:0},500,function(){YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);var e=jQuery.Event("YTPEnd");e.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(e),YTPlayer.player.seekTo(startAt,!0),YTPlayer.isBackground||YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+YTPlayer.opt.backgroundUrl+") center center",backgroundSize:"cover"})});YTPlayer.player.loopTime=YTPlayer.player.loopTime?++YTPlayer.player.loopTime:1,startAt=startAt||1,YTPlayer.preventTrigger=!0,YTPlayer.state=2,jQuery(YTPlayer).YTPPause(),YTPlayer.player.seekTo(startAt,!0),$YTPlayer.YTPPlay()}},interval))):(jQuery(YTPlayer).YTPPlayerDestroy(),clearInterval(YTPlayer.getState),void clearInterval(YTPlayer.checkForStartAt))},getTime:function(){var e=this.get(0);return jQuery.mbYTPlayer.formatTime(e.currentTime)},getTotalTime:function(){var e=this.get(0);return jQuery.mbYTPlayer.formatTime(e.totalTime)},checkForStart:function(e){var t=jQuery(e);if(!jQuery.contains(document,e))return void jQuery(e).YTPPlayerDestroy();if(e.preventTrigger=!0,e.state=2,jQuery(e).YTPPause(),jQuery(e).muteYTPVolume(),jQuery("#controlBar_"+e.id).remove(),e.controlBar=!1,e.opt.showControls&&jQuery.mbYTPlayer.buildControls(e),e.opt.addRaster){var i="dot"==e.opt.addRaster?"raster-dot":"raster";e.overlay.addClass(e.isRetina?i+" retina":i)}else e.overlay.removeClass(function(e,t){var i=t.split(" "),o=[];return jQuery.each(i,function(e,t){/raster.*/.test(t)&&o.push(t)}),o.push("retina"),o.join(" ")});var o=e.opt.startAt?e.opt.startAt:1;e.player.playVideo(),e.player.seekTo(o,!0),e.checkForStartAt=setInterval(function(){jQuery(e).YTPMute();var i=e.player.getVideoLoadedFraction()>=o/e.player.getDuration();if(e.player.getDuration()>0&&e.player.getCurrentTime()>=o&&i){clearInterval(e.checkForStartAt),"function"==typeof e.opt.onReady&&e.opt.onReady(e),e.isReady=!0;var n=jQuery.Event("YTPReady");if(n.time=e.currentTime,jQuery(e).trigger(n),e.preventTrigger=!0,e.state=2,jQuery(e).YTPPause(),e.opt.mute||jQuery(e).YTPUnmute(),e.canTrigger=!0,e.opt.autoPlay){var r=jQuery.Event("YTPStart");r.time=e.currentTime,jQuery(e).trigger(r),t.css("background-image","none"),jQuery(e.playerEl).CSSAnimate({opacity:1},1e3),t.YTPPlay(),e.wrapper.CSSAnimate({opacity:e.isAlone?1:e.opt.opacity},1e3),jQuery.browser.safari&&(e.safariPlay=setInterval(function(){1!=e.state?t.YTPPlay():clearInterval(e.safariPlay)},10)),t.on("YTPReady",function(){t.YTPPlay()})}else e.player.pauseVideo(),e.isPlayer||(jQuery(e.playerEl).CSSAnimate({opacity:1},500),e.wrapper.CSSAnimate({opacity:e.isAlone?1:e.opt.opacity},500)),e.controlBar.length&&e.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);e.isPlayer&&!e.opt.autoPlay&&e.loading&&e.loading.length&&(e.loading.html("Ready"),setTimeout(function(){e.loading.fadeOut()},100)),e.controlBar&&e.controlBar.length&&e.controlBar.slideDown(1e3)}else jQuery.browser.safari&&(e.player.playVideo(),o>=0&&e.player.seekTo(o,!0))},1)},setAlign:function(e){var t=this;t.optimizeDisplay(e)},getAlign:function(){var e=this.get(0);return e.opt.align},formatTime:function(e){var t=Math.floor(e/60),i=Math.floor(e-60*t);return(9>=t?"0"+t:t)+" : "+(9>=i?"0"+i:i)}},jQuery.fn.optimizeDisplay=function(e){var t=this.get(0),i=jQuery(t.playerEl),o={};t.opt.align=e||t.opt.align,t.opt.align="undefined "!=typeof t.opt.align?t.opt.align:"center,center";var n=t.opt.align.split(",");if(t.opt.optimizeDisplay){var r={},s=t.wrapper;r.width=s.outerWidth(),r.height=s.outerHeight(),o.width=r.width,o.height="16/9"==t.opt.ratio?Math.ceil(r.width*(9/16)):Math.ceil(.75*r.width),o.width=r.width,o.height="16/9"==t.opt.ratio?Math.ceil(r.width*(9/16)):Math.ceil(.75*r.width),o.marginTop=-((o.height-r.height)/2),o.marginLeft=0;var a=o.height<r.height;a&&(o.height=r.height,o.width="16/9"==t.opt.ratio?Math.floor(r.height*(16/9)):Math.floor(r.height*(4/3)),o.marginTop=0,o.marginLeft=-((o.width-r.width)/2));for(var l in n){var d=n[l].trim();switch(d){case"top":o.marginTop=a?-((o.height-r.height)/2):0;break;case"bottom":o.marginTop=a?0:-(o.height-r.height);break;case"left":o.marginLeft=0;break;case"right":o.marginLeft=a?-(o.width-r.width):0}}}else o.width="100%",o.height="100%",o.marginTop=0,o.marginLeft=0;i.css({width:o.width,height:o.height,marginTop:o.marginTop,marginLeft:o.marginLeft})},jQuery.shuffle=function(e){for(var t=e.slice(),i=t.length,o=i;o--;){var n=parseInt(Math.random()*i),r=t[o];t[o]=t[n],t[n]=r}return t},jQuery.fn.unselectable=function(){return this.each(function(){jQuery(this).css({"-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).attr("unselectable","on")})},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play,jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay,jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop,jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause,jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist,jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext,jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.YTPPlayIndex=jQuery.mbYTPlayer.playIndex,jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute,jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute,jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume,jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData,jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter,jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters,jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter,jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters,jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter,jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters,jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters,jQuery.fn.YTPGetFilters=jQuery.mbYTPlayer.getFilters,jQuery.fn.YTPGetTime=jQuery.mbYTPlayer.getTime,jQuery.fn.YTPGetTotalTime=jQuery.mbYTPlayer.getTotalTime,jQuery.fn.YTPAddMask=jQuery.mbYTPlayer.addMask,jQuery.fn.YTPRemoveMask=jQuery.mbYTPlayer.removeMask,jQuery.fn.YTPToggleMask=jQuery.mbYTPlayer.toggleMask,jQuery.fn.YTPSetAlign=jQuery.mbYTPlayer.setAlign,jQuery.fn.YTPGetAlign=jQuery.mbYTPlayer.getAlign,jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.play,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stop,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pause,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekTo,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.mute,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmute,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPGetDataFromFeed=jQuery.mbYTPlayer.getVideoData}(jQuery,ytp),jQuery.support.CSStransition=function(){var e=document.body||document.documentElement,t=e.style;return void 0!==t.transition||void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.MsTransition||void 0!==t.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(e){var t=jQuery.extend(!0,{},e);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");for(var i in t){"transform"===i&&(t[jQuery.CSS.sfx+"transform"]=t[i],delete t[i]),"transform-origin"===i&&(t[jQuery.CSS.sfx+"transform-origin"]=e[i],delete t[i]),"filter"!==i||jQuery.browser.mozilla||(t[jQuery.CSS.sfx+"filter"]=e[i],delete t[i]),"blur"===i&&setFilter(t,"blur",e[i]),"brightness"===i&&setFilter(t,"brightness",e[i]),"contrast"===i&&setFilter(t,"contrast",e[i]),"grayscale"===i&&setFilter(t,"grayscale",e[i]),"hueRotate"===i&&setFilter(t,"hueRotate",e[i]),"invert"===i&&setFilter(t,"invert",e[i]),"saturate"===i&&setFilter(t,"saturate",e[i]),"sepia"===i&&setFilter(t,"sepia",e[i]);var o="";"x"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" translateX("+setUnit(e[i],"px")+")",delete t[i]),"y"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" translateY("+setUnit(e[i],"px")+")",delete t[i]),"z"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" translateZ("+setUnit(e[i],"px")+")",delete t[i]),"rotate"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" rotate("+setUnit(e[i],"deg")+")",delete t[i]),"rotateX"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" rotateX("+setUnit(e[i],"deg")+")",delete t[i]),"rotateY"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" rotateY("+setUnit(e[i],"deg")+")",delete t[i]),"rotateZ"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" rotateZ("+setUnit(e[i],"deg")+")",delete t[i]),"scale"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" scale("+setUnit(e[i],"")+")",delete t[i]),"scaleX"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" scaleX("+setUnit(e[i],"")+")",delete t[i]),"scaleY"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" scaleY("+setUnit(e[i],"")+")",delete t[i]),"scaleZ"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" scaleZ("+setUnit(e[i],"")+")",delete t[i]),"skew"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" skew("+setUnit(e[i],"deg")+")",
delete t[i]),"skewX"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" skewX("+setUnit(e[i],"deg")+")",delete t[i]),"skewY"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" skewY("+setUnit(e[i],"deg")+")",delete t[i]),"perspective"===i&&(o=jQuery.CSS.sfx+"transform",t[o]=t[o]||"",t[o]+=" perspective("+setUnit(e[i],"px")+")",delete t[i])}return t},getProp:function(e){var t=[];for(var i in e)t.indexOf(i)<0&&t.push(uncamel(i));return t.join(",")},animate:function(e,t,i,o,n){return this.each(function(){function r(){s.called=!0,s.CSSAIsRunning=!1,a.off(jQuery.CSS.transitionEnd+"."+s.id),clearTimeout(s.timeout),a.css(jQuery.CSS.sfx+"transition",""),"function"==typeof n&&n.apply(s),"function"==typeof s.CSSqueue&&(s.CSSqueue(),s.CSSqueue=null)}var s=this,a=jQuery(this);s.id=s.id||"CSSA_"+(new Date).getTime();var l=l||{type:"noEvent"};if(s.CSSAIsRunning&&s.eventType==l.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return void(s.CSSqueue=function(){a.CSSAnimate(e,t,i,o,n)});if(s.CSSqueue=null,s.eventType=l.type,0!==a.length&&e){if(e=jQuery.normalizeCss(e),s.CSSAIsRunning=!0,"function"==typeof t&&(n=t,t=jQuery.fx.speeds._default),"function"==typeof i&&(o=i,i=0),"string"==typeof i&&(n=i,i=0),"function"==typeof o&&(n=o,o="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof t)for(var d in jQuery.fx.speeds){if(t==d){t=jQuery.fx.speeds[d];break}t=jQuery.fx.speeds._default}if(t||(t=jQuery.fx.speeds._default),"string"==typeof n&&(o=n,n=null),!jQuery.support.CSStransition){for(var c in e){if("transform"===c&&delete e[c],"filter"===c&&delete e[c],"transform-origin"===c&&delete e[c],"auto"===e[c]&&delete e[c],"x"===c){var u=e[c],p="left";e[p]=u,delete e[c]}if("y"===c){var u=e[c],p="top";e[p]=u,delete e[c]}("-ms-transform"===c||"-ms-filter"===c)&&delete e[c]}return void a.delay(i).animate(e,t,n)}var f={default:"ease",in:"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};f[o]&&(o=f[o]),a.off(jQuery.CSS.transitionEnd+"."+s.id);var h=jQuery.CSS.getProp(e),y={};jQuery.extend(y,e),y[jQuery.CSS.sfx+"transition-property"]=h,y[jQuery.CSS.sfx+"transition-duration"]=t+"ms",y[jQuery.CSS.sfx+"transition-delay"]=i+"ms",y[jQuery.CSS.sfx+"transition-timing-function"]=o,setTimeout(function(){a.one(jQuery.CSS.transitionEnd+"."+s.id,r),a.css(y)},1),s.timeout=setTimeout(function(){return s.called||!n?(s.called=!1,void(s.CSSAIsRunning=!1)):(a.css(jQuery.CSS.sfx+"transition",""),n.apply(s),s.CSSAIsRunning=!1,void("function"==typeof s.CSSqueue&&(s.CSSqueue(),s.CSSqueue=null)))},t+i+10)}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(e){return this.each(function(){var t=jQuery(this),i=jQuery.normalizeCss(e);t.css(i)})};var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")||-1!=nAgt.indexOf("Edge")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):nAgt.indexOf("mozilla/5.0")>-1&&nAgt.indexOf("android ")>-1&&nAgt.indexOf("applewebkit")>-1&&!(nAgt.indexOf("chrome")>-1)?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt),!function(e){var t=(/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()),"ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch||!1);e.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:t?"touchstart":"mousedown",end:t?"touchend":"mouseup",move:t?"touchmove":"mousemove"},init:function(i){return this.each(function(){var o=this,n=e(o);n.addClass("simpleSlider"),o.opt={},e.extend(o.opt,e.simpleSlider.defaults,i),e.extend(o.opt,n.data());var r="h"==o.opt.orientation?"horizontal":"vertical",s=e("<div/>").addClass("level").addClass(r);n.prepend(s),o.level=s,n.css({cursor:"default"}),"auto"==o.opt.scale&&(o.opt.scale=e(o).outerWidth()),n.updateSliderVal(),o.opt.readonly||(n.on(e.simpleSlider.events.start,function(e){t&&(e=e.changedTouches[0]),o.canSlide=!0,n.updateSliderVal(e),n.css({cursor:"col-resize"}),e.preventDefault(),e.stopPropagation()}),e(document).on(e.simpleSlider.events.move,function(i){t&&(i=i.changedTouches[0]),o.canSlide&&(e(document).css({cursor:"default"}),n.updateSliderVal(i),i.preventDefault(),i.stopPropagation())}).on(e.simpleSlider.events.end,function(){e(document).css({cursor:"auto"}),o.canSlide=!1,n.css({cursor:"auto"})}))})},updateSliderVal:function(t){function i(e,t){return Math.floor(100*e/t)}var o=this,n=o.get(0);if(n.opt){n.opt.initialval="number"==typeof n.opt.initialval?n.opt.initialval:n.opt.initialval(n);var r=e(n).outerWidth(),s=e(n).outerHeight();n.x="object"==typeof t?t.clientX+document.body.scrollLeft-o.offset().left:"number"==typeof t?t*r/n.opt.scale:n.opt.initialval*r/n.opt.scale,n.y="object"==typeof t?t.clientY+document.body.scrollTop-o.offset().top:"number"==typeof t?(n.opt.scale-n.opt.initialval-t)*s/n.opt.scale:n.opt.initialval*s/n.opt.scale,n.y=o.outerHeight()-n.y,n.scaleX=n.x*n.opt.scale/r,n.scaleY=n.y*n.opt.scale/s,n.outOfRangeX=n.scaleX>n.opt.scale?n.scaleX-n.opt.scale:n.scaleX<0?n.scaleX:0,n.outOfRangeY=n.scaleY>n.opt.scale?n.scaleY-n.opt.scale:n.scaleY<0?n.scaleY:0,n.outOfRange="h"==n.opt.orientation?n.outOfRangeX:n.outOfRangeY,"undefined"!=typeof t?n.value="h"==n.opt.orientation?n.x>=o.outerWidth()?n.opt.scale:n.x<=0?0:n.scaleX:n.y>=o.outerHeight()?n.opt.scale:n.y<=0?0:n.scaleY:n.value="h"==n.opt.orientation?n.scaleX:n.scaleY,"h"==n.opt.orientation?n.level.width(i(n.x,r)+"%"):n.level.height(i(n.y,s)),"function"==typeof n.opt.callback&&n.opt.callback(n)}}},e.fn.simpleSlider=e.simpleSlider.init,e.fn.updateSliderVal=e.simpleSlider.updateSliderVal}(jQuery),!function(e){e.mbCookie={set:function(e,t,i,o){t=JSON.stringify(t),i||(i=7),o=o?"; domain="+o:"";var n,r=new Date;r.setTime(r.getTime()+864e5*i),n="; expires="+r.toGMTString(),document.cookie=e+"="+t+n+"; path=/"+o},get:function(e){for(var t=e+"=",i=document.cookie.split(";"),o=0;o<i.length;o++){for(var n=i[o];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return JSON.parse(n.substring(t.length,n.length))}return null},remove:function(t){e.mbCookie.set(t,"",-1)}},e.mbStorage={set:function(e,t){t=JSON.stringify(t),localStorage.setItem(e,t)},get:function(e){return localStorage[e]?JSON.parse(localStorage[e]):null},remove:function(e){e?localStorage.removeItem(e):localStorage.clear()}}}(jQuery),!function(e,t){function i(e){return"object"==typeof e}function o(e){return"string"==typeof e}function n(e){return"number"==typeof e}function r(e){return e===t}function s(){z=google.maps,M||(M={verbose:!1,queryLimit:{attempt:5,delay:250,random:250},classes:function(){var t={};return e.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer TransitLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "),function(e,i){t[i]=z[i]}),t}(),map:{mapTypeId:z.MapTypeId.ROADMAP,center:[46.578498,2.457275],zoom:2},overlay:{pane:"floatPane",content:"",offset:{x:0,y:0}},geoloc:{getCurrentPosition:{maximumAge:6e4,timeout:5e3}}})}function a(e,t){return r(e)?"gmap3_"+(t?B+1:++B):e}function l(e){var t,i=z.version.split(".");for(e=e.split("."),t=0;t<i.length;t++)i[t]=parseInt(i[t],10);for(t=0;t<e.length;t++){if(e[t]=parseInt(e[t],10),!i.hasOwnProperty(t))return!1;if(i[t]<e[t])return!1}return!0}function d(t,i,o,n,r){function s(i,n){i&&e.each(i,function(e,i){var s=t,a=i;F(i)&&(s=i[0],a=i[1]),n(o,e,function(e){a.apply(s,[r||o,e,l])})})}var a=i.td||{},l={id:n,data:a.data,tag:a.tag};s(a.events,z.event.addListener),s(a.onces,z.event.addListenerOnce)}function c(e){var t,i=[];for(t in e)e.hasOwnProperty(t)&&i.push(t);return i}function u(e,t){var i,o=arguments;for(i=2;i<o.length;i++)if(t in o[i]&&o[i].hasOwnProperty(t))return void(e[t]=o[i][t])}function p(t,i){var o,n,r=["data","tag","id","events","onces"],s={};if(t.td)for(o in t.td)t.td.hasOwnProperty(o)&&"options"!==o&&"values"!==o&&(s[o]=t.td[o]);for(n=0;n<r.length;n++)u(s,r[n],i,t.td);return s.options=e.extend({},t.opts||{},i.options||{}),s}function f(){if(M.verbose){var e,t=[];if(window.console&&D(console.error)){for(e=0;e<arguments.length;e++)t.push(arguments[e]);console.error.apply(console,t)}else{for(t="",e=0;e<arguments.length;e++)t+=arguments[e].toString()+" ";alert(t)}}}function h(e){return(n(e)||o(e))&&""!==e&&!isNaN(e)}function y(e){var t,o=[];if(!r(e))if(i(e))if(n(e.length))o=e;else for(t in e)o.push(e[t]);else o.push(e);return o}function g(t){return t?D(t)?t:(t=y(t),function(o){var n;if(r(o))return!1;if(i(o)){for(n=0;n<o.length;n++)if(e.inArray(o[n],t)>=0)return!0;return!1}return e.inArray(o,t)>=0}):void 0}function m(e,t,i){var n=t?e:null;return!e||o(e)?n:e.latLng?m(e.latLng):e instanceof z.LatLng?e:h(e.lat)?new z.LatLng(e.lat,e.lng):!i&&F(e)&&h(e[0])&&h(e[1])?new z.LatLng(e[0],e[1]):n}function v(e){var t,i;return!e||e instanceof z.LatLngBounds?e||null:(F(e)?2===e.length?(t=m(e[0]),i=m(e[1])):4===e.length&&(t=m([e[0],e[1]]),i=m([e[2],e[3]])):"ne"in e&&"sw"in e?(t=m(e.ne),i=m(e.sw)):"n"in e&&"e"in e&&"s"in e&&"w"in e&&(t=m([e.n,e.e]),i=m([e.s,e.w])),t&&i?new z.LatLngBounds(i,t):null)}function T(e,t,i,n,r){var s=!!i&&m(n.td,!1,!0),a=s?{latLng:s}:!!n.td.address&&(o(n.td.address)?{address:n.td.address}:n.td.address),l=!!a&&W.get(a),d=this;a?(r=r||0,l?(n.latLng=l.results[0].geometry.location,n.results=l.results,n.status=l.status,t.apply(e,[n])):(a.location&&(a.location=m(a.location)),a.bounds&&(a.bounds=v(a.bounds)),k().geocode(a,function(o,s){s===z.GeocoderStatus.OK?(W.store(a,{results:o,status:s}),n.latLng=o[0].geometry.location,n.results=o,n.status=s,t.apply(e,[n])):s===z.GeocoderStatus.OVER_QUERY_LIMIT&&r<M.queryLimit.attempt?setTimeout(function(){T.apply(d,[e,t,i,n,r+1])},M.queryLimit.delay+Math.floor(Math.random()*M.queryLimit.random)):(f("geocode failed",s,a),n.latLng=n.results=!1,n.status=s,t.apply(e,[n]))}))):(n.latLng=m(n.td,!1,!0),t.apply(e,[n]))}function w(t,i,o,n){function r(){do a++;while(a<t.length&&!("address"in t[a]));return a>=t.length?void o.apply(i,[n]):void T(s,function(i){delete i.td,e.extend(t[a],i),r.apply(s,[])},!0,{td:t[a]})}var s=this,a=-1;r()}function b(e,t,i){var o=!1;navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(n){o||(o=!0,i.latLng=new z.LatLng(n.coords.latitude,n.coords.longitude),t.apply(e,[i]))},function(){o||(o=!0,i.latLng=!1,t.apply(e,[i]))},i.opts.getCurrentPosition):(i.latLng=!1,t.apply(e,[i]))}function P(e){var t,o=!1;if(i(e)&&e.hasOwnProperty("get")){for(t in e)if("get"!==t)return!1;o=!e.get.hasOwnProperty("callback")}return o}function k(){return H.geocoder||(H.geocoder=new z.Geocoder),H.geocoder}function S(){var e=[];this.get=function(t){if(e.length){var o,n,r,s,a,l=c(t);for(o=0;o<e.length;o++){for(s=e[o],a=l.length===s.keys.length,n=0;n<l.length&&a;n++)r=l[n],a=r in s.request,a&&(a=i(t[r])&&"equals"in t[r]&&D(t[r])?t[r].equals(s.request[r]):t[r]===s.request[r]);if(a)return s.results}}},this.store=function(t,i){e.push({request:t,keys:c(t),results:i})}}function x(){var e=[],t=this;t.empty=function(){return!e.length},t.add=function(t){e.push(t)},t.get=function(){return!!e.length&&e[0]},t.ack=function(){e.shift()}}function Y(){function t(e){return{id:e.id,name:e.name,object:e.obj,tag:e.tag,data:e.data}}function i(e){D(e.setMap)&&e.setMap(null),D(e.remove)&&e.remove(),D(e.free)&&e.free(),e=null}var o={},n={},s=this;s.add=function(e,t,i,r){var l=e.td||{},d=a(l.id);return o[t]||(o[t]=[]),d in n&&s.clearById(d),n[d]={obj:i,sub:r,name:t,id:d,tag:l.tag,data:l.data},o[t].push(d),d},s.getById=function(e,i,o){var r=!1;return e in n&&(r=i?n[e].sub:o?t(n[e]):n[e].obj),r},s.get=function(e,i,r,s){var a,l,d=g(r);if(!o[e]||!o[e].length)return null;for(a=o[e].length;a;)if(a--,l=o[e][i?a:o[e].length-a-1],l&&n[l]){if(d&&!d(n[l].tag))continue;return s?t(n[l]):n[l].obj}return null},s.all=function(e,i,s){var a=[],l=g(i),d=function(e){var i,r;for(i=0;i<o[e].length;i++)if(r=o[e][i],r&&n[r]){if(l&&!l(n[r].tag))continue;a.push(s?t(n[r]):n[r].obj)}};if(e in o)d(e);else if(r(e))for(e in o)d(e);return a},s.rm=function(e,t,i){var r,a;if(!o[e])return!1;if(t)if(i)for(r=o[e].length-1;r>=0&&(a=o[e][r],!t(n[a].tag));r--);else for(r=0;r<o[e].length&&(a=o[e][r],!t(n[a].tag));r++);else r=i?o[e].length-1:0;return r in o[e]&&s.clearById(o[e][r],r)},s.clearById=function(e,t){if(e in n){var s,a=n[e].name;for(s=0;r(t)&&s<o[a].length;s++)e===o[a][s]&&(t=s);return i(n[e].obj),n[e].sub&&i(n[e].sub),delete n[e],o[a].splice(t,1),!0}return!1},s.objGetById=function(e){var t,i;if(o.clusterer)for(i in o.clusterer)if((t=n[o.clusterer[i]].obj.getById(e))!==!1)return t;return!1},s.objClearById=function(e){var t;if(o.clusterer)for(t in o.clusterer)if(n[o.clusterer[t]].obj.clearById(e))return!0;return null},s.clear=function(e,t,i,n){var r,a,l,d=g(n);if(e&&e.length)e=y(e);else{e=[];for(r in o)e.push(r)}for(a=0;a<e.length;a++)if(l=e[a],t)s.rm(l,d,!0);else if(i)s.rm(l,d,!1);else for(;s.rm(l,d,!1););},s.objClear=function(t,i,r,s){var a;if(o.clusterer&&(e.inArray("marker",t)>=0||!t.length))for(a in o.clusterer)n[o.clusterer[a]].obj.clear(i,r,s)}}function C(t,i,n){function r(e){var t={};return t[e]={},t}function s(){var e;for(e in n)if(n.hasOwnProperty(e)&&!l.hasOwnProperty(e))return e}var a,l={},d=this,c={latLng:{map:!1,marker:!1,infowindow:!1,circle:!1,overlay:!1,getlatlng:!1,getmaxzoom:!1,getelevation:!1,streetviewpanorama:!1,getaddress:!0},geoloc:{getgeoloc:!0}};o(n)&&(n=r(n)),d.run=function(){for(var o,r;o=s();){if(D(t[o]))return a=o,r=e.extend(!0,{},M[o]||{},n[o].options||{}),void(o in c.latLng?n[o].values?w(n[o].values,t,t[o],{td:n[o],opts:r,session:l}):T(t,t[o],c.latLng[o],{td:n[o],opts:r,session:l}):o in c.geoloc?b(t,t[o],{td:n[o],opts:r,session:l}):t[o].apply(t,[{td:n[o],opts:r,session:l}]));l[o]=null}i.apply(t,[n,l])},d.ack=function(e){l[a]=e,d.run.apply(d,[])}}function j(){return H.ds||(H.ds=new z.DirectionsService),H.ds}function Q(){return H.dms||(H.dms=new z.DistanceMatrixService),H.dms}function O(){return H.mzs||(H.mzs=new z.MaxZoomService),H.mzs}function A(){return H.es||(H.es=new z.ElevationService),H.es}function I(e,t){function i(){var e=this;return e.onAdd=function(){},e.onRemove=function(){},e.draw=function(){},M.classes.OverlayView.apply(e,[])}i.prototype=M.classes.OverlayView.prototype;var o=new i;return o.setMap(e),o}function _(t,o,n){function r(e){_[e]||(delete L[e].options.map,_[e]=new M.classes.Marker(L[e].options),d(t,{td:L[e]},_[e],L[e].id))}function s(){return(v=$.getProjection())?(x=!0,j.push(z.event.addListener(o,"zoom_changed",f)),j.push(z.event.addListener(o,"bounds_changed",f)),void y()):void setTimeout(function(){s.apply(C,[])},25)}function l(e){i(Q[e])?(D(Q[e].obj.setMap)&&Q[e].obj.setMap(null),D(Q[e].obj.remove)&&Q[e].obj.remove(),D(Q[e].shadow.remove)&&Q[e].obj.remove(),D(Q[e].shadow.setMap)&&Q[e].shadow.setMap(null),delete Q[e].obj,delete Q[e].shadow):_[e]&&_[e].setMap(null),delete Q[e]}function c(){var e,t,i,o,n,r,s,a,l=Math.cos,d=Math.sin,c=arguments;return c[0]instanceof z.LatLng?(e=c[0].lat(),i=c[0].lng(),c[1]instanceof z.LatLng?(t=c[1].lat(),o=c[1].lng()):(t=c[1],o=c[2])):(e=c[0],i=c[1],c[2]instanceof z.LatLng?(t=c[2].lat(),o=c[2].lng()):(t=c[2],o=c[3])),n=Math.PI*e/180,r=Math.PI*i/180,s=Math.PI*t/180,a=Math.PI*o/180,6371e3*Math.acos(Math.min(l(n)*l(s)*l(r)*l(a)+l(n)*d(r)*l(s)*d(a)+d(n)*d(s),1))}function u(){var e=c(o.getCenter(),o.getBounds().getNorthEast()),t=new z.Circle({center:o.getCenter(),radius:1.25*e});return t.getBounds()}function p(){var e,t={};for(e in Q)t[e]=!0;return t}function f(){clearTimeout(m),m=setTimeout(y,25)}function h(e){var t=v.fromLatLngToDivPixel(e),i=v.fromDivPixelToLatLng(new z.Point(t.x+n.radius,t.y-n.radius)),o=v.fromDivPixelToLatLng(new z.Point(t.x-n.radius,t.y+n.radius));return new z.LatLngBounds(o,i)}function y(){if(!P&&!S&&x){var t,i,r,s,a,d,c,f,y,g,m,v=!1,b=[],C={},j=o.getZoom(),O="maxZoom"in n&&j>n.maxZoom,A=p();for(k=!1,j>3&&(a=u(),v=a.getSouthWest().lng()<a.getNorthEast().lng()),t=0;t<L.length;t++)!L[t]||v&&!a.contains(L[t].options.position)||T&&!T(E[t])||b.push(t);for(;;){for(t=0;C[t]&&t<b.length;)t++;if(t===b.length)break;if(s=[],Y&&!O){m=10;do for(f=s,s=[],m--,c=f.length?a.getCenter():L[b[t]].options.position,a=h(c),i=t;i<b.length;i++)C[i]||a.contains(L[b[i]].options.position)&&s.push(i);while(f.length<s.length&&s.length>1&&m)}else for(i=t;i<b.length;i++)if(!C[i]){s.push(i);break}for(d={indexes:[],ref:[]},y=g=0,r=0;r<s.length;r++)C[s[r]]=!0,d.indexes.push(b[s[r]]),d.ref.push(b[s[r]]),y+=L[b[s[r]]].options.position.lat(),g+=L[b[s[r]]].options.position.lng();y/=s.length,g/=s.length,d.latLng=new z.LatLng(y,g),d.ref=d.ref.join("-"),d.ref in A?delete A[d.ref]:(1===s.length&&(Q[d.ref]=!0),w(d))}e.each(A,function(e){l(e)}),S=!1}}var m,v,T,w,b,P=!1,k=!1,S=!1,x=!1,Y=!0,C=this,j=[],Q={},O={},A={},_=[],L=[],E=[],$=I(o,n.radius);s(),C.getById=function(e){return e in O&&(r(O[e]),_[O[e]])},C.rm=function(e){var t=O[e];_[t]&&_[t].setMap(null),delete _[t],_[t]=!1,delete L[t],L[t]=!1,delete E[t],E[t]=!1,delete O[e],delete A[t],k=!0},C.clearById=function(e){return e in O?(C.rm(e),!0):void 0},C.clear=function(e,t,i){var o,n,r,s,a,l=[],d=g(i);for(e?(o=L.length-1,n=-1,r=-1):(o=0,n=L.length,r=1),s=o;s!==n&&(!L[s]||d&&!d(L[s].tag)||(l.push(A[s]),!t&&!e));s+=r);for(a=0;a<l.length;a++)C.rm(l[a])},C.add=function(e,t){e.id=a(e.id),C.clearById(e.id),O[e.id]=_.length,A[_.length]=e.id,_.push(null),L.push(e),E.push(t),k=!0},C.addMarker=function(e,i){i=i||{},i.id=a(i.id),C.clearById(i.id),i.options||(i.options={}),i.options.position=e.getPosition(),d(t,{td:i},e,i.id),O[i.id]=_.length,A[_.length]=i.id,_.push(e),L.push(i),E.push(i.data||{}),k=!0},C.td=function(e){return L[e]},C.value=function(e){return E[e]},C.marker=function(e){return e in _&&(r(e),_[e])},C.markerIsSet=function(e){return Boolean(_[e])},C.setMarker=function(e,t){_[e]=t},C.store=function(e,t,i){Q[e.ref]={obj:t,shadow:i}},C.free=function(){var t;for(t=0;t<j.length;t++)z.event.removeListener(j[t]);j=[],e.each(Q,function(e){l(e)}),Q={},e.each(L,function(e){L[e]=null}),L=[],e.each(_,function(e){_[e]&&(_[e].setMap(null),delete _[e])}),_=[],e.each(E,function(e){delete E[e]}),E=[],O={},A={}},C.filter=function(e){T=e,y()},C.enable=function(e){Y!==e&&(Y=e,y())},C.display=function(e){w=e},C.error=function(e){b=e},C.beginUpdate=function(){P=!0},C.endUpdate=function(){P=!1,k&&y()},C.autofit=function(e){var t;for(t=0;t<L.length;t++)L[t]&&e.extend(L[t].options.position)}}function L(e,t){var i=this;i.id=function(){return e},i.filter=function(e){t.filter(e)},i.enable=function(){t.enable(!0)},i.disable=function(){t.enable(!1)},i.add=function(e,i,o){o||t.beginUpdate(),t.addMarker(e,i),o||t.endUpdate()},i.getById=function(e){return t.getById(e)},i.clearById=function(e,i){var o;return i||t.beginUpdate(),o=t.clearById(e),i||t.endUpdate(),o},i.clear=function(e,i,o,n){n||t.beginUpdate(),t.clear(e,i,o),n||t.endUpdate()}}function E(t,i,o,n){var r=this,s=[];M.classes.OverlayView.call(r),r.setMap(t),r.onAdd=function(){var t=r.getPanes();i.pane in t&&e(t[i.pane]).append(n),e.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "),function(t,i){s.push(z.event.addDomListener(n[0],i,function(t){e.Event(t).stopPropagation(),z.event.trigger(r,i,[t]),r.draw()}))}),s.push(z.event.addDomListener(n[0],"contextmenu",function(t){e.Event(t).stopPropagation(),z.event.trigger(r,"rightclick",[t]),r.draw()}))},r.getPosition=function(){return o},r.setPosition=function(e){o=e,r.draw()},r.draw=function(){var e=r.getProjection().fromLatLngToDivPixel(o);n.css("left",e.x+i.offset.x+"px").css("top",e.y+i.offset.y+"px")},r.onRemove=function(){var e;for(e=0;e<s.length;e++)z.event.removeListener(s[e]);n.remove()},r.hide=function(){n.hide()},r.show=function(){n.show()},r.toggle=function(){n&&(n.is(":visible")?r.show():r.hide())},r.toggleDOM=function(){r.setMap(r.getMap()?null:t)},r.getDOMElement=function(){return n[0]}}function $(n){function s(){!b&&(b=k.get())&&b.run()}function c(){b=null,k.ack(),s.call(P)}function u(e){var t,i=e.td.callback;i&&(t=Array.prototype.slice.call(arguments,1),D(i)?i.apply(n,t):F(i)&&D(i[1])&&i[1].apply(i[0],t))}function h(e,t,i){i&&d(n,e,t,i),u(e,t),b.ack(t)}function g(t,i){i=i||{};var o=i.td&&i.td.options?i.td.options:0;I?o&&(o.center&&(o.center=m(o.center)),I.setOptions(o)):(o=i.opts||e.extend(!0,{},M.map,o||{}),o.center=t||m(o.center),I=new M.classes.Map(n.get(0),o))}function T(i){var o,r,s=new _(n,I,i),a={},l={},c=[],u=/^[0-9]+$/;for(r in i)u.test(r)?(c.push(1*r),l[r]=i[r],l[r].width=l[r].width||0,l[r].height=l[r].height||0):a[r]=i[r];return c.sort(function(e,t){return e>t}),o=a.calculator?function(t){var i=[];return e.each(t,function(e,t){i.push(s.value(t))}),a.calculator.apply(n,[i])}:function(e){return e.length},s.error(function(){f.apply(P,arguments)}),s.display(function(r){var u,p,f,h,y,g,v=o(r.indexes);if(i.force||v>1)for(u=0;u<c.length;u++)c[u]<=v&&(p=l[c[u]]);p?(y=p.offset||[-p.width/2,-p.height/2],f=e.extend({},a),f.options=e.extend({pane:"overlayLayer",content:p.content?p.content.replace("CLUSTER_COUNT",v):"",offset:{x:("x"in y?y.x:y[0])||0,y:("y"in y?y.y:y[1])||0}},a.options||{}),h=P.overlay({td:f,opts:f.options,latLng:m(r)},!0),f.options.pane="floatShadow",f.options.content=e(document.createElement("div")).width(p.width+"px").height(p.height+"px").css({cursor:"pointer"}),g=P.overlay({td:f,opts:f.options,latLng:m(r)},!0),a.data={latLng:m(r),markers:[]},e.each(r.indexes,function(e,t){a.data.markers.push(s.value(t)),s.markerIsSet(t)&&s.marker(t).setMap(null)}),d(n,{td:a},g,t,{main:h,shadow:g}),s.store(r,h,g)):e.each(r.indexes,function(e,t){s.marker(t).setMap(I)})}),s}function w(t,i,o){var r=[],s="values"in t.td;return s||(t.td.values=[{options:t.opts}]),t.td.values.length?(g(),e.each(t.td.values,function(e,s){var a,l,c,u,f=p(t,s);if(f.options[o])if(f.options[o][0][0]&&F(f.options[o][0][0]))for(l=0;l<f.options[o].length;l++)for(c=0;c<f.options[o][l].length;c++)f.options[o][l][c]=m(f.options[o][l][c]);else for(l=0;l<f.options[o].length;l++)f.options[o][l]=m(f.options[o][l]);f.options.map=I,u=new z[i](f.options),r.push(u),a=S.add({td:f},i.toLowerCase(),u),d(n,{td:f},u,a)}),void h(t,s?r:r[0])):void h(t,!1)}var b,P=this,k=new x,S=new Y,I=null;P._plan=function(e){var t;for(t=0;t<e.length;t++)k.add(new C(P,c,e[t]));s()},P.map=function(e){g(e.latLng,e),d(n,e,I),h(e,I)},P.destroy=function(e){S.clear(),n.empty(),I&&(I=null),h(e,!0)},P.overlay=function(t,i){var o=[],r="values"in t.td;return r||(t.td.values=[{latLng:t.latLng,options:t.opts}]),t.td.values.length?(E.__initialised||(E.prototype=new M.classes.OverlayView,E.__initialised=!0),e.each(t.td.values,function(r,s){var a,l,c=p(t,s),u=e(document.createElement("div")).css({border:"none",borderWidth:0,position:"absolute"});u.append(c.options.content),l=new E(I,c.options,m(c)||m(s),u),o.push(l),u=null,i||(a=S.add(t,"overlay",l),d(n,{td:c},l,a))}),i?o[0]:void h(t,r?o:o[0])):void h(t,!1)},P.marker=function(t){var i,o,r,s="values"in t.td,l=!I;return s||(t.opts.position=t.latLng||m(t.opts.position),t.td.values=[{options:t.opts}]),t.td.values.length?(l&&g(),t.td.cluster&&!I.getBounds()?void z.event.addListenerOnce(I,"bounds_changed",function(){P.marker.apply(P,[t])}):void(t.td.cluster?(t.td.cluster instanceof L?(o=t.td.cluster,r=S.getById(o.id(),!0)):(r=T(t.td.cluster),o=new L(a(t.td.id,!0),r),S.add(t,"clusterer",o,r)),r.beginUpdate(),e.each(t.td.values,function(e,i){var o=p(t,i);o.options.position=m(o.options.position?o.options.position:i),o.options.position&&(o.options.map=I,l&&(I.setCenter(o.options.position),l=!1),r.add(o,i))}),r.endUpdate(),h(t,o)):(i=[],e.each(t.td.values,function(e,o){var r,s,a=p(t,o);a.options.position=m(a.options.position?a.options.position:o),a.options.position&&(a.options.map=I,l&&(I.setCenter(a.options.position),l=!1),s=new M.classes.Marker(a.options),i.push(s),r=S.add({td:a},"marker",s),d(n,{td:a},s,r))}),h(t,s?i:i[0])))):void h(t,!1)},P.getroute=function(e){e.opts.origin=m(e.opts.origin,!0),e.opts.destination=m(e.opts.destination,!0),j().route(e.opts,function(t,i){u(e,i===z.DirectionsStatus.OK&&t,i),b.ack()})},P.getdistance=function(e){var t;for(e.opts.origins=y(e.opts.origins),t=0;t<e.opts.origins.length;t++)e.opts.origins[t]=m(e.opts.origins[t],!0);for(e.opts.destinations=y(e.opts.destinations),t=0;t<e.opts.destinations.length;t++)e.opts.destinations[t]=m(e.opts.destinations[t],!0);Q().getDistanceMatrix(e.opts,function(t,i){u(e,i===z.DistanceMatrixStatus.OK&&t,i),b.ack()})},P.infowindow=function(i){var o=[],s="values"in i.td;s||(i.latLng&&(i.opts.position=i.latLng),i.td.values=[{options:i.opts}]),e.each(i.td.values,function(e,a){var l,c,u=p(i,a);u.options.position=m(u.options.position?u.options.position:a.latLng),I||g(u.options.position),c=new M.classes.InfoWindow(u.options),c&&(r(u.open)||u.open)&&(s?c.open(I,u.anchor||t):c.open(I,u.anchor||(i.latLng?t:i.session.marker?i.session.marker:t))),o.push(c),l=S.add({td:u},"infowindow",c),d(n,{td:u},c,l)}),h(i,s?o:o[0])},P.circle=function(t){var i=[],o="values"in t.td;return o||(t.opts.center=t.latLng||m(t.opts.center),t.td.values=[{options:t.opts}]),t.td.values.length?(e.each(t.td.values,function(e,o){var r,s,a=p(t,o);a.options.center=m(a.options.center?a.options.center:o),I||g(a.options.center),a.options.map=I,s=new M.classes.Circle(a.options),i.push(s),r=S.add({td:a},"circle",s),d(n,{td:a},s,r)}),void h(t,o?i:i[0])):void h(t,!1)},P.getaddress=function(e){u(e,e.results,e.status),b.ack()},P.getlatlng=function(e){u(e,e.results,e.status),b.ack()},P.getmaxzoom=function(e){O().getMaxZoomAtLatLng(e.latLng,function(t){u(e,t.status===z.MaxZoomStatus.OK&&t.zoom,status),b.ack()})},P.getelevation=function(e){var t,i=[],o=function(t,i){u(e,i===z.ElevationStatus.OK&&t,i),b.ack()};if(e.latLng)i.push(e.latLng);else for(i=y(e.td.locations||[]),t=0;t<i.length;t++)i[t]=m(i[t]);if(i.length)A().getElevationForLocations({locations:i},o);else{if(e.td.path&&e.td.path.length)for(t=0;t<e.td.path.length;t++)i.push(m(e.td.path[t]));i.length?A().getElevationAlongPath({path:i,samples:e.td.samples},o):b.ack()}},P.defaults=function(t){e.each(t.td,function(t,o){i(M[t])?M[t]=e.extend({},M[t],o):M[t]=o}),b.ack(!0)},P.rectangle=function(t){var i=[],o="values"in t.td;return o||(t.td.values=[{options:t.opts}]),t.td.values.length?(e.each(t.td.values,function(e,o){var r,s,a=p(t,o);a.options.bounds=v(a.options.bounds?a.options.bounds:o),I||g(a.options.bounds.getCenter()),a.options.map=I,s=new M.classes.Rectangle(a.options),i.push(s),r=S.add({td:a},"rectangle",s),d(n,{td:a},s,r)}),void h(t,o?i:i[0])):void h(t,!1)},P.polyline=function(e){w(e,"Polyline","path")},P.polygon=function(e){w(e,"Polygon","paths")},P.trafficlayer=function(e){g();var t=S.get("trafficlayer");t||(t=new M.classes.TrafficLayer,t.setMap(I),S.add(e,"trafficlayer",t)),h(e,t)},P.transitlayer=function(e){g();var t=S.get("transitlayer");t||(t=new M.classes.TransitLayer,t.setMap(I),S.add(e,"transitlayer",t)),h(e,t)},P.bicyclinglayer=function(e){g();var t=S.get("bicyclinglayer");t||(t=new M.classes.BicyclingLayer,t.setMap(I),S.add(e,"bicyclinglayer",t)),h(e,t)},P.groundoverlay=function(e){e.opts.bounds=v(e.opts.bounds),e.opts.bounds&&g(e.opts.bounds.getCenter());var t,i=new M.classes.GroundOverlay(e.opts.url,e.opts.bounds,e.opts.opts);i.setMap(I),t=S.add(e,"groundoverlay",i),h(e,i,t)},P.streetviewpanorama=function(t){t.opts.opts||(t.opts.opts={}),t.latLng?t.opts.opts.position=t.latLng:t.opts.opts.position&&(t.opts.opts.position=m(t.opts.opts.position)),
t.td.divId?t.opts.container=document.getElementById(t.td.divId):t.opts.container&&(t.opts.container=e(t.opts.container).get(0));var i,o=new M.classes.StreetViewPanorama(t.opts.container,t.opts.opts);o&&I.setStreetView(o),i=S.add(t,"streetviewpanorama",o),h(t,o,i)},P.kmllayer=function(t){var i=[],o="values"in t.td;return o||(t.td.values=[{options:t.opts}]),t.td.values.length?(e.each(t.td.values,function(e,o){var r,s,a,c=p(t,o);I||g(),a=c.options,c.options.opts&&(a=c.options.opts,c.options.url&&(a.url=c.options.url)),a.map=I,s=l("3.10")?new M.classes.KmlLayer(a):new M.classes.KmlLayer(a.url,a),i.push(s),r=S.add({td:c},"kmllayer",s),d(n,{td:c},s,r)}),void h(t,o?i:i[0])):void h(t,!1)},P.panel=function(t){g();var i,o,s=0,a=0,l=e(document.createElement("div"));l.css({position:"absolute",zIndex:1e3,visibility:"hidden"}),t.opts.content&&(o=e(t.opts.content),l.append(o),n.first().prepend(l),r(t.opts.left)?r(t.opts.right)?t.opts.center&&(s=(n.width()-o.width())/2):s=n.width()-o.width()-t.opts.right:s=t.opts.left,r(t.opts.top)?r(t.opts.bottom)?t.opts.middle&&(a=(n.height()-o.height())/2):a=n.height()-o.height()-t.opts.bottom:a=t.opts.top,l.css({top:a,left:s,visibility:"visible"})),i=S.add(t,"panel",l),h(t,l,i),l=null},P.directionsrenderer=function(t){t.opts.map=I;var i,o=new z.DirectionsRenderer(t.opts);t.td.divId?o.setPanel(document.getElementById(t.td.divId)):t.td.container&&o.setPanel(e(t.td.container).get(0)),i=S.add(t,"directionsrenderer",o),h(t,o,i)},P.getgeoloc=function(e){h(e,e.latLng)},P.styledmaptype=function(e){g();var t=new M.classes.StyledMapType(e.td.styles,e.opts);I.mapTypes.set(e.td.id,t),h(e,t)},P.imagemaptype=function(e){g();var t=new M.classes.ImageMapType(e.opts);I.mapTypes.set(e.td.id,t),h(e,t)},P.autofit=function(t){var i=new z.LatLngBounds;e.each(S.all(),function(e,t){t.getPosition&&t.getPosition()?i.extend(t.getPosition()):t.getBounds&&t.getBounds()?(i.extend(t.getBounds().getNorthEast()),i.extend(t.getBounds().getSouthWest())):t.getPaths&&t.getPaths()?t.getPaths().forEach(function(e){e.forEach(function(e){i.extend(e)})}):t.getPath&&t.getPath()?t.getPath().forEach(function(e){i.extend(e)}):t.getCenter&&t.getCenter()?i.extend(t.getCenter()):"function"==typeof L&&t instanceof L&&(t=S.getById(t.id(),!0),t&&t.autofit(i))}),i.isEmpty()||I.getBounds()&&I.getBounds().equals(i)||("maxZoom"in t.td&&z.event.addListenerOnce(I,"bounds_changed",function(){this.getZoom()>t.td.maxZoom&&this.setZoom(t.td.maxZoom)}),I.fitBounds(i)),h(t,!0)},P.clear=function(t){if(o(t.td)){if(S.clearById(t.td)||S.objClearById(t.td))return void h(t,!0);t.td={name:t.td}}t.td.id?e.each(y(t.td.id),function(e,t){S.clearById(t)||S.objClearById(t)}):(S.clear(y(t.td.name),t.td.last,t.td.first,t.td.tag),S.objClear(y(t.td.name),t.td.last,t.td.first,t.td.tag)),h(t,!0)},P.get=function(i,n,r){var s,a,l=n?i:i.td;return n||(r=l.full),o(l)?(a=S.getById(l,!1,r)||S.objGetById(l),a===!1&&(s=l,l={})):s=l.name,"map"===s&&(a=I),a||(a=[],l.id?(e.each(y(l.id),function(e,t){a.push(S.getById(t,!1,r)||S.objGetById(t))}),F(l.id)||(a=a[0])):(e.each(s?y(s):[t],function(t,i){var o;l.first?(o=S.get(i,!1,l.tag,r),o&&a.push(o)):l.all?e.each(S.all(i,l.tag,r),function(e,t){a.push(t)}):(o=S.get(i,!0,l.tag,r),o&&a.push(o))}),l.all||F(s)||(a=a[0]))),a=F(a)||!l.all?a:[a],n?a:void h(i,a)},P.exec=function(t){e.each(y(t.td.func),function(i,o){e.each(P.get(t.td,!0,!t.td.hasOwnProperty("full")||t.td.full),function(e,t){o.call(n,t)})}),h(t,!0)},P.trigger=function(t){if(o(t.td))z.event.trigger(I,t.td);else{var i=[I,t.td.eventName];t.td.var_args&&e.each(t.td.var_args,function(e,t){i.push(t)}),z.event.trigger.apply(z.event,i)}u(t),b.ack()}}var M,z,B=0,D=e.isFunction,F=e.isArray,H={},W=new S;e.fn.gmap3=function(){var t,i=[],o=!0,n=[];for(s(),t=0;t<arguments.length;t++)arguments[t]&&i.push(arguments[t]);return i.length||i.push("map"),e.each(this,function(){var t=e(this),r=t.data("gmap3");o=!1,r||(r=new $(t),t.data("gmap3",r)),1!==i.length||"get"!==i[0]&&!P(i[0])?r._plan(i):"get"===i[0]?n.push(r.get("map",!0)):n.push(r.get(i[0].get,!0,i[0].get.full))}),n.length?1===n.length?n[0]:n:this}}(jQuery),!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t=-1,i=-1,o=function(e){return parseFloat(e)||0},n=function(t){var i=1,n=e(t),r=null,s=[];return n.each(function(){var t=e(this),n=t.offset().top-o(t.css("margin-top")),a=s.length>0?s[s.length-1]:null;null===a?s.push(t):Math.floor(Math.abs(r-n))<=i?s[s.length-1]=a.add(t):s.push(t),r=n}),s},r=function(t){var i={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof t?e.extend(i,t):("boolean"==typeof t?i.byRow=t:"remove"===t&&(i.remove=!0),i)},s=e.fn.matchHeight=function(t){var i=r(t);if(i.remove){var o=this;return this.css(i.property,""),e.each(s._groups,function(e,t){t.elements=t.elements.not(o)}),this}return this.length<=1&&!i.target?this:(s._groups.push({elements:this,options:i}),s._apply(this,i),this)};s.version="master",s._groups=[],s._throttle=80,s._maintainScroll=!1,s._beforeUpdate=null,s._afterUpdate=null,s._rows=n,s._parse=o,s._parseOptions=r,s._apply=function(t,i){var a=r(i),l=e(t),d=[l],c=e(window).scrollTop(),u=e("html").outerHeight(!0),p=l.parents().filter(":hidden");return p.each(function(){var t=e(this);t.data("style-cache",t.attr("style"))}),p.css("display","block"),a.byRow&&!a.target&&(l.each(function(){var t=e(this),i=t.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block"),t.data("style-cache",t.attr("style")),t.css({display:i,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),d=n(l),l.each(function(){var t=e(this);t.attr("style",t.data("style-cache")||"")})),e.each(d,function(t,i){var n=e(i),r=0;if(a.target)r=a.target.outerHeight(!1);else{if(a.byRow&&n.length<=1)return void n.css(a.property,"");n.each(function(){var t=e(this),i=t.attr("style"),o=t.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block");var n={display:o};n[a.property]="",t.css(n),t.outerHeight(!1)>r&&(r=t.outerHeight(!1)),i?t.attr("style",i):t.css("display","")})}n.each(function(){var t=e(this),i=0;a.target&&t.is(a.target)||("border-box"!==t.css("box-sizing")&&(i+=o(t.css("border-top-width"))+o(t.css("border-bottom-width")),i+=o(t.css("padding-top"))+o(t.css("padding-bottom"))),t.css(a.property,r-i+"px"))})}),p.each(function(){var t=e(this);t.attr("style",t.data("style-cache")||null)}),s._maintainScroll&&e(window).scrollTop(c/u*e("html").outerHeight(!0)),this},s._applyDataApi=function(){var t={};e("[data-match-height], [data-mh]").each(function(){var i=e(this),o=i.attr("data-mh")||i.attr("data-match-height");o in t?t[o]=t[o].add(i):t[o]=i}),e.each(t,function(){this.matchHeight(!0)})};var a=function(t){s._beforeUpdate&&s._beforeUpdate(t,s._groups),e.each(s._groups,function(){s._apply(this.elements,this.options)}),s._afterUpdate&&s._afterUpdate(t,s._groups)};s._update=function(o,n){if(n&&"resize"===n.type){var r=e(window).width();if(r===t)return;t=r}o?-1===i&&(i=setTimeout(function(){a(n),i=-1},s._throttle)):a(n)},e(s._applyDataApi),e(window).bind("load",function(e){s._update(!1,e)}),e(window).bind("resize orientationchange",function(e){s._update(!0,e)})}),!function(e,t){"use strict";function i(e){e=e||{};for(var t=1;t<arguments.length;t++){var i=arguments[t];if(i)for(var o in i)i.hasOwnProperty(o)&&("object"==typeof i[o]?deepExtend(e[o],i[o]):e[o]=i[o])}return e}function o(o,s){function a(){if(S){m=t.createElement("canvas"),m.className="pg-canvas",m.style.display="block",o.insertBefore(m,o.firstChild),v=m.getContext("2d"),l();for(var i=Math.round(m.width*m.height/s.density),n=0;i>n;n++){var r=new f;r.setStackPos(n),x.push(r)}e.addEventListener("resize",function(){c()},!1),t.addEventListener("mousemove",function(e){Y=e.pageX,C=e.pageY},!1),Q&&!j&&e.addEventListener("deviceorientation",function(){A=Math.min(Math.max(-event.beta,-30),30),O=Math.min(Math.max(-event.gamma,-30),30)},!0),d(),g("onInit")}}function l(){m.width=o.offsetWidth,m.height=o.offsetHeight,v.fillStyle=s.dotColor,v.strokeStyle=s.lineColor,v.lineWidth=s.lineWidth}function d(){if(S){w=e.innerWidth,b=e.innerHeight,v.clearRect(0,0,m.width,m.height);for(var t=0;t<x.length;t++)x[t].updatePosition();for(var t=0;t<x.length;t++)x[t].draw();I||(T=requestAnimationFrame(d))}}function c(){l();for(var e=o.offsetWidth,t=o.offsetHeight,i=x.length-1;i>=0;i--)(x[i].position.x>e||x[i].position.y>t)&&x.splice(i,1);var n=Math.round(m.width*m.height/s.density);if(n>x.length)for(;n>x.length;){var r=new f;x.push(r)}else n<x.length&&x.splice(n);for(i=x.length-1;i>=0;i--)x[i].setStackPos(i)}function u(){I=!0}function p(){I=!1,d()}function f(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*m.width),y:Math.ceil(Math.random()*m.height)},this.speed={},s.directionX){case"left":this.speed.x=+(-s.maxSpeedX+Math.random()*s.maxSpeedX-s.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*s.maxSpeedX+s.minSpeedX).toFixed(2);break;default:this.speed.x=+(-s.maxSpeedX/2+Math.random()*s.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?s.minSpeedX:-s.minSpeedX}switch(s.directionY){case"up":this.speed.y=+(-s.maxSpeedY+Math.random()*s.maxSpeedY-s.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*s.maxSpeedY+s.minSpeedY).toFixed(2);break;default:this.speed.y=+(-s.maxSpeedY/2+Math.random()*s.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?s.minSpeedY:-s.minSpeedY}}function h(e,t){return t?void(s[e]=t):s[e]}function y(){console.log("destroy"),m.parentNode.removeChild(m),g("onDestroy"),r&&r(o).removeData("plugin_"+n)}function g(e){void 0!==s[e]&&s[e].call(o)}var m,v,T,w,b,P,k,S=!!t.createElement("canvas").getContext,x=[],Y=0,C=0,j=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),Q=!!e.DeviceOrientationEvent,O=0,A=0,I=!1;return s=i({},e[n].defaults,s),f.prototype.draw=function(){v.beginPath(),v.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,s.particleRadius/2,0,2*Math.PI,!0),v.closePath(),v.fill(),v.beginPath();for(var e=x.length-1;e>this.stackPos;e--){var t=x[e],i=this.position.x-t.position.x,o=this.position.y-t.position.y,n=Math.sqrt(i*i+o*o).toFixed(2);n<s.proximity&&(v.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),s.curvedLines?v.quadraticCurveTo(Math.max(t.position.x,t.position.x),Math.min(t.position.y,t.position.y),t.position.x+t.parallaxOffsetX,t.position.y+t.parallaxOffsetY):v.lineTo(t.position.x+t.parallaxOffsetX,t.position.y+t.parallaxOffsetY))}v.stroke(),v.closePath()},f.prototype.updatePosition=function(){if(s.parallax){if(Q&&!j){var e=(w-0)/60;P=(O- -30)*e+0;var t=(b-0)/60;k=(A- -30)*t+0}else P=Y,k=C;this.parallaxTargX=(P-w/2)/(s.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(k-b/2)/(s.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}var i=o.offsetWidth,n=o.offsetHeight;switch(s.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=i-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>i&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>i||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(s.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=n-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>n&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>n||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},f.prototype.setStackPos=function(e){this.stackPos=e},a(),{option:h,destroy:y,start:p,pause:u}}var n="particleground",r=e.jQuery;e[n]=function(e,t){return new o(e,t)},e[n].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}},r&&(r.fn[n]=function(e){if("string"==typeof arguments[0]){var t,i=arguments[0],s=Array.prototype.slice.call(arguments,1);return this.each(function(){r.data(this,"plugin_"+n)&&"function"==typeof r.data(this,"plugin_"+n)[i]&&(t=r.data(this,"plugin_"+n)[i].apply(this,s))}),void 0!==t?t:this}return"object"!=typeof e&&e?void 0:this.each(function(){r.data(this,"plugin_"+n)||r.data(this,"plugin_"+n,new o(this,e))})})}(window,document),function(){for(var e=0,t=["ms","moz","webkit","o"],i=0;i<t.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[t[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[i]+"CancelAnimationFrame"]||window[t[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var i=(new Date).getTime(),o=Math.max(0,16-(i-e)),n=window.setTimeout(function(){t(i+o)},o);return e=i+o,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var canvasID="particles",canvas=document.getElementById(canvasID);if(canvas){var $headerSizer,width,height,ctx,circles,animateHeader=!0;$headerSizer=$(".full-slider"),initHeader(),addListeners()}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"/local/templates/hd/js/common.js?150015872218661";s:6:"source";s:32:"/local/templates/hd/js/common.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";

$(document).ready(function(){

	/*-------------------------------------
	Top menu - Superfish
	-------------------------------------*/
	$('ul.sf-menu').superfish({
		delay: 200,
		speed: 'fast',
		cssArrows: true,
		disableHI: false,
		easing: 'fade',
		touchMove: false,
		swipe: false
	});

	/*-------------------------------------
	Sticky menu
	-------------------------------------*/
	$('#top-nav').sticky({
		topSpacing:0,
		zIndex: 40
	});

	/*-------------------------------------
	Drag images restagt
	-------------------------------------*/
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });

	/*-------------------------------------
	Smooth Scroll to link
	-------------------------------------*/
	$('a.smooth-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 57
		}, {
			duration: 1000,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
		event.preventDefault();
	});

	/*-------------------------------------
	Full screen slider - Slick
	-------------------------------------*/
	// $('.full-slider').slick({
	// 	dots: false,
	// 	fade: true,
	// 	appendDots: '#dots-control-full-slider',
	// 	dotsClass: 'dots',
	// 	autoplay: false,
	// 	autoplaySpeed: 8000,
	// 	autoHeight: false,
	// 	adaptiveHeight: true,
	// 	mobileFirst: true,
	// 	touch: false,
	// 	cssEase: 'linear',
	// 	prevArrow: $('.prev'),
	// 	focusOnSelect: false,
	// 	nextArrow: $('.next')
	// });

	/*-------------------------------------
	Slider animation full screen
	-------------------------------------*/
	$('.full-slider').on('afterChange', function(event, slick, currentSlide){
		$('.slick-active .heading-title-big').removeClass('opacity-none');
		$('.slick-active .heading-title-big').addClass('animated fadeInDown');
		//
		$('.slick-active .description').removeClass('opacity-none');
		$('.slick-active .description').addClass('animated slideInUp');
		//
		$('.slick-active .buttons-download').removeClass('opacity-none');
		$('.slick-active .buttons-download').addClass('animated fadeInDown');

	});

	$('.full-slider').on('beforeChange', function(event, slick, currentSlide){
		$('.slick-active .heading-title-big').addClass('opacity-none');
		$('.slick-active .heading-title-big').removeClass('animated fadeInDown');
		//
		$('.slick-active .description').addClass('opacity-none');
		$('.slick-active .description').removeClass('animated slideInUp');
		//
		$('.slick-active .buttons-download').addClass('opacity-none');
		$('.slick-active .buttons-download').removeClass('animated fadeInDown');
	});

	/*-------------------------------------
	Background slider function
	-------------------------------------*/
	$('.slide, .hero-background-slider, .fixed-image').each(function(){
		var url = $(this).attr('data-image');
		if(url){
			$(this).css('background-image', 'url(' + url + ')');
		}
	});

	/*-------------------------------------
	Particles
	-------------------------------------*/
	$('#particles-js').particleground({
		dotColor: 'rgba(255, 255, 255, 0.40)',
		lineColor: 'rgba(255, 255, 255, 0.21)',
		parallaxMultiplier: 5,
		particleRadius: 5,
		proximity: 130,
		density: 12000
	});

	/*-------------------------------------
	Accordion
	-------------------------------------*/
	$('#accordion:nth-child(1n)').accordion({
		heightStyle: 'content',
		active: true,
		collapsible: true
	});

	/*-------------------------------------
	Back to top link
	-------------------------------------*/
	$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 500) {
			$('.top').fadeIn('slow');
		} else {
			$('.top').fadeOut('slow');
		}
	});

	/*-------------------------------------
	Animation blocks
	-------------------------------------*/
	if (typeof $.fn.animated !== 'undefined') {
		$(function () {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			} else {
				$('.iphone-nalf').animated('fadeInUp');
				$('.section-class-image > img').animated('fadeInUp');
				$('.iphones > .right-mob-back, .left-mob-back').animated('fadeInUp');
				$('.heading-title > h2').animated('fadeInDown');
				$('.heading-title > p').animated('fadeInUp');
				$('.heading-title > ol').animated('fadeInUp');
				$('.heading-title > ul').animated('fadeInUp');
			}
		}());
	}

	/*-------------------------------------
	MagnificPopup
	-------------------------------------*/
	$('.icon-play').magnificPopup({
		type: 'iframe',
		autoFocusLast: false,
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

			patterns: {
				youtube: {
					index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
					id: 'v=', // String that splits URL in a two parts, second part should be %id%
						// Or null - full URL will be returned
						// Or a function that should return %id%, for example:
						// id: function(url) { return 'parsed id'; }
					src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
				},

				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},

				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}

			},

			srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}
	});

	/*-------------------------------------
	Mobile menu - full screen menu
	-------------------------------------*/
	$(function() {

		var $menu = $('#mobile-menu'),
			$body = $('body'),
			$fn = $('#mobile-menu'),
			$fnToggle = $('.toggle-mnu'),
			$window = $(window);

			$menu.find('.menu-item-has-children > a').on('click', function(e) {
				e.preventDefault();
				if ($(this).next('ul').is(':visible')) {
					$(this).removeClass('sub-active').next('ul').slideUp(250);
				} else {
					$('.menu-item-has-children > a').removeClass('sub-active').next('ul').slideUp(250);
					$(this).addClass('sub-active').next('ul').slideToggle(250);
				}
			});

			var fnOpen = false;

			var fnToggleFunc = function() {
				fnOpen = !fnOpen;
				$body.toggleClass('fullscreen-nav-open');
				$fn.stop().fadeToggle(500);
				$('.toggle-mnu').toggleClass('on');
				$('.logo').toggleClass('on');

				return false;
			};

			$fnToggle.on('click', fnToggleFunc);

			$(document).on('keyup', function(e) {
				if (e.keyCode == 27 && fnOpen) {
					fnToggleFunc();
				}
			});

			$fn.find('li:not(.menu-item-has-children) > a').one('click', function() {
				fnToggleFunc();
				return true;
			});

			$menu.on('click', function(){
				fnToggleFunc();
				return true;
			});

			$('.inner-wrap, .fullscreen-menu-toggle').on('click', function(e){
				e.stopPropagation();
			});
	});

	/*-------------------------------------
	Parallax
	-------------------------------------*/
	if (typeof $.fn.stellar !== 'undefined') {
		$(function () {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			} else {
				$(window).stellar({
					horizontalScrolling: false,
					responsive: true
				});
			}
		}());
	}

	/*-------------------------------------
	YouTube player
	-------------------------------------*/
	if (typeof $.fn.mb_YTPlayer !== 'undefined') {
		$("#bgndVideo").mb_YTPlayer();
	}

	/*-------------------------------------
	Form activation
	-------------------------------------*/
	$('#contact-form').submit(function(){
		var form = $(this);
		var error = false;
	if (!error) {
		var data = form.serialize();
		$.ajax({
			type: 'POST',
			url: 'form.php',
			dataType: 'json',
			data: data,
			beforeSend: function(data) {
				form.find('input[type="submit"]').attr('disabled', 'disabled');
				form.trigger('reset');
			},
			success: function(data){
				if (data['error']) {
					alert(data['error']);
				} else {
					$('#success').slideToggle('slow');
				}
				},
			error: function (xhr, ajaxOptions, thrownError) {
				$('#error').slideToggle('slow');
			},
			complete: function(data) {
				form.find('input[type="submit"]').prop('disabled', false);
				}
			});
		}
		return false;
	});

	/*-------------------------------------
	Mailchimp subscribe form processing
	-------------------------------------*/
	$('#signup').on('submit', function( e ) {
		e.preventDefault();
		// update user interface
		$('#response').html('Adding email address...');
		
		// Prepare query string and send AJAX request
		jQuery.ajax({
			url: 'mailchimp/store-address.php',
			data: 'ajax=true&email=' + escape($('#mailchimp_email').val()),
			success: function(msg) {
				$('#response').html(msg);
				$('#response').slideToggle( 'slow' );
			}
		});
	});
 
	/*-------------------------------------
	Google maps API
	-------------------------------------*/
	if (typeof $.fn.gmap3 !== 'undefined') {
	
		$(".map").each(function() {
			
			var data_zoom = 15,
				data_height;
			
			if ($(this).attr("data-zoom") !== undefined) {
				data_zoom = parseInt($(this).attr("data-zoom"),10);
			}
			if ($(this).attr("data-height") !== undefined) {
				data_height = parseInt($(this).attr("data-height"),10);
			}	
			
			$(this).gmap3({
				marker: {
					values: [{
						address: $(this).attr("data-address"),
						data: $(this).attr("data-address-details")
					}],
					options:{
						draggable: false,
						icon: "img/map-marker.png"
					},
					events:{
						mouseover: function(marker, event, context){
							var map = $(this).gmap3("get"),
							infowindow = $(this).gmap3({get:{name:"infowindow"}});
							if (infowindow){
								infowindow.open(map, marker);
								infowindow.setContent(context.data);
							} else {
								$(this).gmap3({
									infowindow:{
										anchor:marker, 
										options:{content: context.data}
									}
								});
							}
						},
						mouseout: function(){
							var infowindow = $(this).gmap3({get:{name:"infowindow"}});
							if (infowindow){
								infowindow.close();
							}
						}
					}
				},
				map: {
					options: {
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						zoom: data_zoom,
						scrollwheel: false,
						styles: [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"weight":"5.83"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#ff0000"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"color":"#ff0000"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#888686"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"color":"#ff0000"},{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#888686"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e6e6e6"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d3e6e2"}]},{"featureType":"poi.park","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#888686"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fcfcfc"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#aed1ca"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]}] 
					}
				}
			});
			$(this).css("height", data_height + "px");
		});
		
	}

	/*-------------------------------------
	Screenshots slide
	-------------------------------------*/
	$('.screenshot:not(.cancel-action)').slick({
		dots: true,
		focusOnSelect: true,
		dotsClass: 'dots',
		appendDots: '#dots-control-screenshots',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		infinite: true,
		slidesToShow: 4,
		prevArrow: $('.prev-next-block > .prev'),
		nextArrow: $('.prev-next-block > .next'),
		responsive: [
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
			}
		},
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
			}
		},
		{
			breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: false,
			}
		},

		{
		breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1
			}
		},

		{
		breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
	 // You can unslick at a given breakpoint now by adding:
	 // settings: "unslick"
	 // instead of a settings object
		]
	});
	
	/*-------------------------------------
	Partners items
	-------------------------------------*/
	$('.parnters-item').slick({
		dots: false,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 8000,
		infinite: true,
		slidesToShow: 4,
		prevArrow: $('#control-partners > .prev'),
		nextArrow: $('#control-partners > .next'),
		responsive: [
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
			}
		},
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
			}
		},
		{
			breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: false,
			}
		},

		{
		breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
		},

		{
		breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
	 // You can unslick at a given breakpoint now by adding:
	 // settings: "unslick"
	 // instead of a settings object
		]
	});

	/*-------------------------------------
	Testimonials
	-------------------------------------*/
	$('.testimonials-items').slick({
		dots: true,
		dotsClass: 'dots',
		appendDots: '#dots-control-testimonials',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		infinite: true,
		slidesToShow: 3,
		prevArrow: $('#control-testimonials > .prev'),
		nextArrow: $('#control-testimonials > .next'),
		responsive: [
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
				dots: true
			}
		},
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
				dots: true
			}
		},
		{
			breakpoint: 1024,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				dots: true
			}
		},

		{
		breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
		},

		{
		breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
	 // You can unslick at a given breakpoint now by adding:
	 // settings: "unslick"
	 // instead of a settings object
		]
	});

	/*-------------------------------------
	Screenshots
	-------------------------------------*/
	$('.screenshot').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery:{
				enabled: true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random(); 
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					}
				},
				imageLoadComplete: function() { 
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
	});
	
	/*-------------------------------------
	Remove 100vh heigth in slider on the mobile devices
	-------------------------------------*/
	$(function () {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('.slide').removeClass('vertical-align');
		}
	}());

	// Blog sidebar height
		
	if ($(window).width() > 768) {
		$('#sidebar, .single-post').matchHeight();		
	}


});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/hd/js/jquery.geocomplete.min.js?15082844418816";s:6:"source";s:48:"/local/templates/hd/js/jquery.geocomplete.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($,window,document,undefined){var defaults={bounds:true,strictBounds:false,country:null,map:false,details:false,detailsAttribute:"name",detailsScope:null,autoselect:true,location:false,mapOptions:{zoom:14,scrollwheel:false,mapTypeId:"roadmap"},markerOptions:{draggable:false},maxZoom:16,types:["geocode"],blur:false,geocodeAfterResult:false,restoreValueAfterBlur:false};var componentTypes=("street_address route intersection political "+"country administrative_area_level_1 administrative_area_level_2 "+"administrative_area_level_3 colloquial_area locality sublocality "+"neighborhood premise subpremise postal_code natural_feature airport "+"park point_of_interest post_box street_number floor room "+"lat lng viewport location "+"formatted_address location_type bounds").split(" ");var placesDetails=("id place_id url website vicinity reference name rating "+"international_phone_number icon formatted_phone_number").split(" ");function GeoComplete(input,options){this.options=$.extend(true,{},defaults,options);if(options&&options.types){this.options.types=options.types}this.input=input;this.$input=$(input);this._defaults=defaults;this._name="geocomplete";this.init()}$.extend(GeoComplete.prototype,{init:function(){this.initMap();this.initMarker();this.initGeocoder();this.initDetails();this.initLocation()},initMap:function(){if(!this.options.map){return}if(typeof this.options.map.setCenter=="function"){this.map=this.options.map;return}this.map=new google.maps.Map($(this.options.map)[0],this.options.mapOptions);google.maps.event.addListener(this.map,"click",$.proxy(this.mapClicked,this));google.maps.event.addListener(this.map,"dragend",$.proxy(this.mapDragged,this));google.maps.event.addListener(this.map,"idle",$.proxy(this.mapIdle,this));google.maps.event.addListener(this.map,"zoom_changed",$.proxy(this.mapZoomed,this))},initMarker:function(){if(!this.map){return}var options=$.extend(this.options.markerOptions,{map:this.map});if(options.disabled){return}this.marker=new google.maps.Marker(options);google.maps.event.addListener(this.marker,"dragend",$.proxy(this.markerDragged,this))},initGeocoder:function(){var selected=false;var options={types:this.options.types,bounds:this.options.bounds===true?null:this.options.bounds,componentRestrictions:this.options.componentRestrictions,strictBounds:this.options.strictBounds};if(this.options.country){options.componentRestrictions={country:this.options.country}}this.autocomplete=new google.maps.places.Autocomplete(this.input,options);this.geocoder=new google.maps.Geocoder;if(this.map&&this.options.bounds===true){this.autocomplete.bindTo("bounds",this.map)}google.maps.event.addListener(this.autocomplete,"place_changed",$.proxy(this.placeChanged,this));this.$input.on("keypress."+this._name,function(event){if(event.keyCode===13){return false}});if(this.options.geocodeAfterResult===true){this.$input.bind("keypress."+this._name,$.proxy(function(){if(event.keyCode!=9&&this.selected===true){this.selected=false}},this))}this.$input.bind("geocode."+this._name,$.proxy(function(){this.find()},this));this.$input.bind("geocode:result."+this._name,$.proxy(function(){this.lastInputVal=this.$input.val()},this));if(this.options.blur===true){this.$input.on("blur."+this._name,$.proxy(function(){if(this.options.geocodeAfterResult===true&&this.selected===true){return}if(this.options.restoreValueAfterBlur===true&&this.selected===true){setTimeout($.proxy(this.restoreLastValue,this),0)}else{this.find()}},this))}},initDetails:function(){if(!this.options.details){return}if(this.options.detailsScope){var $details=$(this.input).parents(this.options.detailsScope).find(this.options.details)}else{var $details=$(this.options.details)}var attribute=this.options.detailsAttribute,details={};function setDetail(value){details[value]=$details.find("["+attribute+"="+value+"]")}$.each(componentTypes,function(index,key){setDetail(key);setDetail(key+"_short")});$.each(placesDetails,function(index,key){setDetail(key)});this.$details=$details;this.details=details},initLocation:function(){var location=this.options.location,latLng;if(!location){return}if(typeof location=="string"){this.find(location);return}if(location instanceof Array){latLng=new google.maps.LatLng(location[0],location[1])}if(location instanceof google.maps.LatLng){latLng=location}if(latLng){if(this.map){this.map.setCenter(latLng)}if(this.marker){this.marker.setPosition(latLng)}}},destroy:function(){if(this.map){google.maps.event.clearInstanceListeners(this.map);google.maps.event.clearInstanceListeners(this.marker)}this.autocomplete.unbindAll();google.maps.event.clearInstanceListeners(this.autocomplete);google.maps.event.clearInstanceListeners(this.input);this.$input.removeData();this.$input.off(this._name);this.$input.unbind("."+this._name)},find:function(address){this.geocode({address:address||this.$input.val()})},geocode:function(request){if(!request.address){return}if(this.options.bounds&&!request.bounds){if(this.options.bounds===true){request.bounds=this.map&&this.map.getBounds()}else{request.bounds=this.options.bounds}}if(this.options.country){request.region=this.options.country}this.geocoder.geocode(request,$.proxy(this.handleGeocode,this))},selectFirstResult:function(){var selected="";if($(".pac-item-selected")[0]){selected="-selected"}var $span1=$(".pac-container:visible .pac-item"+selected+":first span:nth-child(2)").text();var $span2=$(".pac-container:visible .pac-item"+selected+":first span:nth-child(3)").text();var firstResult=$span1;if($span2){firstResult+=" - "+$span2}this.$input.val(firstResult);return firstResult},restoreLastValue:function(){if(this.lastInputVal){this.$input.val(this.lastInputVal)}},handleGeocode:function(results,status){if(status===google.maps.GeocoderStatus.OK){var result=results[0];this.$input.val(result.formatted_address);this.update(result);if(results.length>1){this.trigger("geocode:multiple",results)}}else{this.trigger("geocode:error",status)}},trigger:function(event,argument){this.$input.trigger(event,[argument])},center:function(geometry){if(geometry.viewport){this.map.fitBounds(geometry.viewport);if(this.map.getZoom()>this.options.maxZoom){this.map.setZoom(this.options.maxZoom)}}else{this.map.setZoom(this.options.maxZoom);this.map.setCenter(geometry.location)}if(this.marker){this.marker.setPosition(geometry.location);this.marker.setAnimation(this.options.markerOptions.animation)}},update:function(result){if(this.map){this.center(result.geometry)}if(this.$details){this.fillDetails(result)}this.trigger("geocode:result",result)},fillDetails:function(result){var data={},geometry=result.geometry,viewport=geometry.viewport,bounds=geometry.bounds;$.each(result.address_components,function(index,object){var name=object.types[0];$.each(object.types,function(index,name){data[name]=object.long_name;data[name+"_short"]=object.short_name})});$.each(placesDetails,function(index,key){data[key]=result[key]});$.extend(data,{formatted_address:result.formatted_address,location_type:geometry.location_type||"PLACES",viewport:viewport,bounds:bounds,location:geometry.location,lat:geometry.location.lat(),lng:geometry.location.lng()});$.each(this.details,$.proxy(function(key,$detail){var value=data[key];this.setDetail($detail,value)},this));this.data=data},setDetail:function($element,value){if(value===undefined){value=""}else if(typeof value.toUrlValue=="function"){value=value.toUrlValue()}if($element.is(":input")){$element.val(value)}else{$element.text(value)}},markerDragged:function(event){this.trigger("geocode:dragged",event.latLng)},mapClicked:function(event){this.trigger("geocode:click",event.latLng)},mapDragged:function(event){this.trigger("geocode:mapdragged",this.map.getCenter())},mapIdle:function(event){this.trigger("geocode:idle",this.map.getCenter())},mapZoomed:function(event){this.trigger("geocode:zoom",this.map.getZoom())},resetMarker:function(){this.marker.setPosition(this.data.location);this.setDetail(this.details.lat,this.data.location.lat());this.setDetail(this.details.lng,this.data.location.lng())},placeChanged:function(){var place=this.autocomplete.getPlace();this.selected=true;if(!place.geometry){if(this.options.autoselect){var autoSelection=this.selectFirstResult();this.find(autoSelection)}}else{this.update(place)}}});$.fn.geocomplete=function(options){var attribute="plugin_geocomplete";if(typeof options=="string"){var instance=$(this).data(attribute)||$(this).geocomplete().data(attribute),prop=instance[options];if(typeof prop=="function"){prop.apply(instance,Array.prototype.slice.call(arguments,1));return $(this)}else{if(arguments.length==2){prop=arguments[1]}return prop}}else{return this.each(function(){var instance=$.data(this,attribute);if(!instance){instance=new GeoComplete(this,options);$.data(this,attribute,instance)}})}}})(jQuery,window,document);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/local/templates/hd/js/jquery.mask.js?150972672522803";s:6:"source";s:37:"/local/templates/hd/js/jquery.mask.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * jquery.mask.js
 * @version: v1.14.12
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

'use strict';

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery || Zepto);
    }

}(function ($) {

    var Mask = function (el, mask, options) {

        var p = {
            invalid: [],
            getCaret: function () {
                try {
                    var sel,
                        pos = 0,
                        ctrl = el.get(0),
                        dSel = document.selection,
                        cSelStart = ctrl.selectionStart;

                    // IE Support
                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
                        sel = dSel.createRange();
                        sel.moveStart('character', -p.val().length);
                        pos = sel.text.length;
                    }
                    // Firefox support
                    else if (cSelStart || cSelStart === '0') {
                        pos = cSelStart;
                    }

                    return pos;
                } catch (e) {}
            },
            setCaret: function(pos) {
                try {
                    if (el.is(':focus')) {
                        var range, ctrl = el.get(0);

                        // Firefox, WebKit, etc..
                        if (ctrl.setSelectionRange) {
                            ctrl.setSelectionRange(pos, pos);
                        } else { // IE
                            range = ctrl.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    }
                } catch (e) {}
            },
            events: function() {
                el
                .on('keydown.mask', function(e) {
                    el.data('mask-keycode', e.keyCode || e.which);
                    el.data('mask-previus-value', el.val());
                    el.data('mask-previus-caret-pos', p.getCaret());
                    p.maskDigitPosMapOld = p.maskDigitPosMap;
                })
                .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
                .on('paste.mask drop.mask', function() {
                    setTimeout(function() {
                        el.keydown().keyup();
                    }, 100);
                })
                .on('change.mask', function(){
                    el.data('changed', true);
                })
                .on('blur.mask', function(){
                    if (oldValue !== p.val() && !el.data('changed')) {
                        el.trigger('change');
                    }
                    el.data('changed', false);
                })
                // it's very important that this callback remains in this position
                // otherwhise oldValue it's going to work buggy
                .on('blur.mask', function() {
                    oldValue = p.val();
                })
                // select all text on focus
                .on('focus.mask', function (e) {
                    if (options.selectOnFocus === true) {
                        $(e.target).select();
                    }
                })
                // clear the value if it not complete the mask
                .on('focusout.mask', function() {
                    if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                       p.val('');
                   }
                });
            },
            getRegexMask: function() {
                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

                for (var i = 0; i < mask.length; i++) {
                    translation = jMask.translation[mask.charAt(i)];

                    if (translation) {

                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
                        optional = translation.optional;
                        recursive = translation.recursive;

                        if (recursive) {
                            maskChunks.push(mask.charAt(i));
                            oRecursive = {digit: mask.charAt(i), pattern: pattern};
                        } else {
                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
                        }

                    } else {
                        maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                    }
                }

                r = maskChunks.join('');

                if (oRecursive) {
                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
                         .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
                }

                return new RegExp(r);
            },
            destroyEvents: function() {
                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
            },
            val: function(v) {
                var isInput = el.is('input'),
                    method = isInput ? 'val' : 'text',
                    r;

                if (arguments.length > 0) {
                    if (el[method]() !== v) {
                        el[method](v);
                    }
                    r = el;
                } else {
                    r = el[method]();
                }

                return r;
            },
            calculateCaretPosition: function() {
                var oldVal = el.data('mask-previus-value') || '',
                    newVal = p.getMasked(),
                    caretPosNew = p.getCaret();
                if (oldVal !== newVal) {
                    var caretPosOld = el.data('mask-previus-caret-pos') || 0,
                        newValL = newVal.length,
                        oldValL = oldVal.length,
                        maskDigitsBeforeCaret = 0,
                        maskDigitsAfterCaret = 0,
                        maskDigitsBeforeCaretAll = 0,
                        maskDigitsBeforeCaretAllOld = 0,
                        i = 0;

                    for (i = caretPosNew; i < newValL; i++) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsAfterCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsBeforeCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (p.maskDigitPosMap[i]) {
                            maskDigitsBeforeCaretAll++;
                        }
                    }

                    for (i = caretPosOld - 1; i >= 0; i--) {
                        if (p.maskDigitPosMapOld[i]) {
                            maskDigitsBeforeCaretAllOld++;
                        }
                    }

                    // if the cursor is at the end keep it there
                    if (caretPosNew > oldValL) {
                      caretPosNew = newValL * 10;
                    } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
                        if (!p.maskDigitPosMapOld[caretPosNew])  {
                          var caretPos = caretPosNew;
                          caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                          caretPosNew -= maskDigitsBeforeCaret;
                          if (p.maskDigitPosMap[caretPosNew])  {
                            caretPosNew = caretPos;
                          }
                        }
                    }
                    else if (caretPosNew > caretPosOld) {
                        caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
                        caretPosNew += maskDigitsAfterCaret;
                    }
                }
                return caretPosNew;
            },
            behaviour: function(e) {
                e = e || window.event;
                p.invalid = [];

                var keyCode = el.data('mask-keycode');

                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
                    var newVal   = p.getMasked(),
                        caretPos = p.getCaret();

                    // this is a compensation to devices/browsers that don't compensate
                    // caret positioning the right way
                    setTimeout(function() {
                      p.setCaret(p.calculateCaretPosition());
                    }, 10);

                    p.val(newVal);
                    p.setCaret(caretPos);
                    return p.callbacks(e);
                }
            },
            getMasked: function(skipMaskChars, val) {
                var buf = [],
                    value = val === undefined ? p.val() : val + '',
                    m = 0, maskLen = mask.length,
                    v = 0, valLen = value.length,
                    offset = 1, addMethod = 'push',
                    resetPos = -1,
                    maskDigitCount = 0,
                    maskDigitPosArr = [],
                    lastMaskChar,
                    check;

                if (options.reverse) {
                    addMethod = 'unshift';
                    offset = -1;
                    lastMaskChar = 0;
                    m = maskLen - 1;
                    v = valLen - 1;
                    check = function () {
                        return m > -1 && v > -1;
                    };
                } else {
                    lastMaskChar = maskLen - 1;
                    check = function () {
                        return m < maskLen && v < valLen;
                    };
                }

                var lastUntranslatedMaskChar;
                while (check()) {
                    var maskDigit = mask.charAt(m),
                        valDigit = value.charAt(v),
                        translation = jMask.translation[maskDigit];

                    if (translation) {
                        if (valDigit.match(translation.pattern)) {
                            buf[addMethod](valDigit);
                             if (translation.recursive) {
                                if (resetPos === -1) {
                                    resetPos = m;
                                } else if (m === lastMaskChar) {
                                    m = resetPos - offset;
                                }

                                if (lastMaskChar === resetPos) {
                                    m -= offset;
                                }
                            }
                            m += offset;
                        } else if (valDigit === lastUntranslatedMaskChar) {
                            // matched the last untranslated (raw) mask character that we encountered
                            // likely an insert offset the mask character from the last entry; fall
                            // through and only increment v
                            maskDigitCount--;
                            lastUntranslatedMaskChar = undefined;
                        } else if (translation.optional) {
                            m += offset;
                            v -= offset;
                        } else if (translation.fallback) {
                            buf[addMethod](translation.fallback);
                            m += offset;
                            v -= offset;
                        } else {
                          p.invalid.push({p: v, v: valDigit, e: translation.pattern});
                        }
                        v += offset;
                    } else {
                        if (!skipMaskChars) {
                            buf[addMethod](maskDigit);
                        }

                        if (valDigit === maskDigit) {
                            maskDigitPosArr.push(v);
                            v += offset;
                        } else {
                            lastUntranslatedMaskChar = maskDigit;
                            maskDigitPosArr.push(v + maskDigitCount);
                            maskDigitCount++;
                        }

                        m += offset;
                    }
                }

                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
                    buf.push(lastMaskCharDigit);
                }

                var newVal = buf.join('');
                p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
                return newVal;
            },
            mapMaskdigitPositions: function(newVal, maskDigitPosArr, valLen) {
              var maskDiff = options.reverse ? newVal.length - valLen : 0;
              p.maskDigitPosMap = {};
              for (var i = 0; i < maskDigitPosArr.length; i++) {
                p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
              }
            },
            callbacks: function (e) {
                var val = p.val(),
                    changed = val !== oldValue,
                    defaultArgs = [val, e, el, options],
                    callback = function(name, criteria, args) {
                        if (typeof options[name] === 'function' && criteria) {
                            options[name].apply(this, args);
                        }
                    };

                callback('onChange', changed === true, defaultArgs);
                callback('onKeyPress', changed === true, defaultArgs);
                callback('onComplete', val.length === mask.length, defaultArgs);
                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
            }
        };

        el = $(el);
        var jMask = this, oldValue = p.val(), regexMask;

        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;

        // public methods
        jMask.mask = mask;
        jMask.options = options;
        jMask.remove = function() {
            var caret = p.getCaret();
            p.destroyEvents();
            p.val(jMask.getCleanVal());
            p.setCaret(caret);
            return el;
        };

        // get value without mask
        jMask.getCleanVal = function() {
           return p.getMasked(true);
        };

        // get masked value without the value being in the input or element
        jMask.getMaskedVal = function(val) {
           return p.getMasked(false, val);
        };

       jMask.init = function(onlyMask) {
            onlyMask = onlyMask || false;
            options = options || {};

            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;
            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;
            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);

            jMask = $.extend(true, {}, jMask, options);

            regexMask = p.getRegexMask();

            if (onlyMask) {
                p.events();
                p.val(p.getMasked());
            } else {
                if (options.placeholder) {
                    el.attr('placeholder' , options.placeholder);
                }

                // this is necessary, otherwise if the user submit the form
                // and then press the "back" button, the autocomplete will erase
                // the data. Works fine on IE9+, FF, Opera, Safari.
                if (el.data('mask')) {
                  el.attr('autocomplete', 'off');
                }

                // detect if is necessary let the user type freely.
                // for is a lot faster than forEach.
                for (var i = 0, maxlength = true; i < mask.length; i++) {
                    var translation = jMask.translation[mask.charAt(i)];
                    if (translation && translation.recursive) {
                        maxlength = false;
                        break;
                    }
                }

                if (maxlength) {
                    el.attr('maxlength', mask.length);
                }

                p.destroyEvents();
                p.events();

                var caret = p.getCaret();
                p.val(p.getMasked());
                p.setCaret(caret);
            }
        };

        jMask.init(!el.is('input'));
    };

    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
            options = {},
            prefix = 'data-mask-',
            mask = input.attr('data-mask');

        if (input.attr(prefix + 'reverse')) {
            options.reverse = true;
        }

        if (input.attr(prefix + 'clearifnotmatch')) {
            options.clearIfNotMatch = true;
        }

        if (input.attr(prefix + 'selectonfocus') === 'true') {
           options.selectOnFocus = true;
        }

        if (notSameMaskObject(input, mask, options)) {
            return input.data('mask', new Mask(this, mask, options));
        }
    },
    notSameMaskObject = function(field, mask, options) {
        options = options || {};
        var maskObject = $(field).data('mask'),
            stringify = JSON.stringify,
            value = $(field).val() || $(field).text();
        try {
            if (typeof mask === 'function') {
                mask = mask(value);
            }
            return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
        } catch (e) {}
    },
    eventSupported = function(eventName) {
        var el = document.createElement('div'), isSupported;

        eventName = 'on' + eventName;
        isSupported = (eventName in el);

        if ( !isSupported ) {
            el.setAttribute(eventName, 'return;');
            isSupported = typeof el[eventName] === 'function';
        }
        el = null;

        return isSupported;
    };

    $.fn.mask = function(mask, options) {
        options = options || {};
        var selector = this.selector,
            globals = $.jMaskGlobals,
            interval = globals.watchInterval,
            watchInputs = options.watchInputs || globals.watchInputs,
            maskFunction = function() {
                if (notSameMaskObject(this, mask, options)) {
                    return $(this).data('mask', new Mask(this, mask, options));
                }
            };

        $(this).each(maskFunction);

        if (selector && selector !== '' && watchInputs) {
            clearInterval($.maskWatchers[selector]);
            $.maskWatchers[selector] = setInterval(function(){
                $(document).find(selector).each(maskFunction);
            }, interval);
        }
        return this;
    };

    $.fn.masked = function(val) {
        return this.data('mask').getMaskedVal(val);
    };

    $.fn.unmask = function() {
        clearInterval($.maskWatchers[this.selector]);
        delete $.maskWatchers[this.selector];
        return this.each(function() {
            var dataMask = $(this).data('mask');
            if (dataMask) {
                dataMask.remove().removeData('mask');
            }
        });
    };

    $.fn.cleanVal = function() {
        return this.data('mask').getCleanVal();
    };

    $.applyDataMask = function(selector) {
        selector = selector || $.jMaskGlobals.maskElements;
        var $selector = (selector instanceof $) ? selector : $(selector);
        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };

    var globals = {
        maskElements: 'input,td,span,div',
        dataMaskAttr: '*[data-mask]',
        dataMask: true,
        watchInterval: 300,
        watchInputs: true,
        // old versions of chrome dont work great with input event
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
        watchDataMask: false,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            '0': {pattern: /\d/},
            '9': {pattern: /\d/, optional: true},
            '#': {pattern: /\d/, recursive: true},
            'A': {pattern: /[a-zA-Z0-9]/},
            'S': {pattern: /[a-zA-Z]/}
        }
    };

    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

    // looking for inputs with data-mask attribute
    if (globals.dataMask) {
        $.applyDataMask();
    }

    setInterval(function() {
        if ($.jMaskGlobals.watchDataMask) {
            $.applyDataMask();
        }
    }, globals.watchInterval);
}, window.jQuery, window.Zepto));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/local/templates/hd/js/jquery.add.js?15097279478955";s:6:"source";s:36:"/local/templates/hd/js/jquery.add.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
window.BXDEBUG = true;

/**
 * Для работы с композитом
 */
// if (window.frameCacheVars !== undefined) {
//     BX.addCustomEvent("onFrameDataReceived", function (json) {
//         initGlobal();
//         initUserActions();
//     });
// } else {
//     BX.ready(function () {
//
//     });
// }

// window.onerror = function (errorMsg, url, lineNumber) {
//     alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);
// }

$(document).ready(function (){
    initGlobal();
    initUserActions();
})

function initGlobal() {
    $('[name="CITY"], .is-city, .i-place').geocomplete()
        .bind("geocode:result", function (event, result) {
            $(this).val(result.formatted_address);
        })
        .bind("geocode:error", function (event, status) {
            console.log("ERROR: " + status);
        });

    $("[name=BDATE]").mask("99.99.9999T99:99");
    $(".i-birthday").mask("99.99.9999 99:99");
    $("#reg-birthday").mask("99.99.9999");
    $("#reg-birthday-time").mask("99:99");

    $('[data-need-confirm]').click(function(){
        if (!confirm('Вы уверены ?')) {
            return false;
        }
    });

    $('[data-form-rc] [data-btn-sbt]').click(function(){
        var $bd = $('.i-birthday').val();
        var $valid = $bd.match( /^([0-9]{2})+\.+([0-9]{2})+\.+([0-9]{4})+\s+([0-9]{2})+\:+([0-9]{2})/i );
        var $btn = $('[data-form-rc] .buttons-download .download');
        console.log($valid);

        if ($valid === null || $('.i-place').val() == '') {
            getMessage('Укажите дату/время и место Вашего рождения', "error", 3000);
        } else {
            if (yaCounter45235053 !== false) {
                yaCounter45235053.reachGoal('BODY');
            }
            $btn.find('i').removeClass('fa-child').addClass('fa-bullseye');
            $btn.find('span').html('<span>Делаем расчеты,<br>пожалуйста, подождите...</span>');
            $btn.prop('disabled', true);
            $(this).closest('form').attr('method', 'post').attr('action', '/hd-result/');
            $(this).closest('form').submit();
        }
        return false;
    });
};


/**
 * Действия пользователя
 */
function initUserActions() {
    var ajaxPath = '/local/tools/.ajax/user.php';
    /**
     * Подписка
     */
    $(document).on('click', '#form-subscribe .btn', function () {
        var _ajax = $('#form-subscribe').data('ajax');
        if (_ajax) {
            _ajax.abort();
        }
        _ajax = $.ajax({
            url: ajaxPath, type: "POST", data: {
                mail: $('#form-subscribe input[name=EMAIL]').val(), action: 'addSubscribe'
            }
        }).done(function (data) {
            if (data == 'ok') {
                getMessage("Вы успешно подписаны на рассылку.", "message", 5000);
            } else if (data == 'not') {
                getMessage("Ошибка, подписаться на рассылку не удалось. Проверьте правильность ввода E-mail.", "error", 5000);
            } else if (data == 'double') {
                getMessage("Вы уже подписывались на рассылку ранее.", "message", 5000);
            }
        });
        $('#form-subscribe').data('ajax', _ajax);
        return false;
    });
}

/**
 * Форматирование числа
 * @param n
 * @returns {string}
 */
function formatInt(n) {
    return (n + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
}
/**
 * Аналог функции in_array в PHP
 * @param needle
 * @param haystack
 * @param strict
 *
 * @returns {boolean}
 */
function in_array(needle, haystack, strict) {   // Checks if a value exists in an array
    var found = false, key, strict = !!strict;
    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            found = true;
            break;
        }
    }
    return found;
}

/**
 * Склонение слов
 * @param num
 * @param expressions
 * @returns {*}
 *
 * Пример: declension(1, ['пользователь','пользователя','пользователей'])
 */
function declension(num, expressions) {
    var result;
    count = num % 100;
    if (count >= 5 && count <= 20) {
        result = expressions['2'];
    } else {
        count = count % 10;
        if (count == 1) {
            result = expressions['0'];
        } else if (count >= 2 && count <= 4) {
            result = expressions['1'];
        } else {
            result = expressions['2'];
        }
    }
    return result;
}

/**
 * Плагин склонения, пример
 * @https://github.com/kalys/jquery.russian-declension
 *
 * $('.days').russian_declension();
 * <div class="days" data-one="день" data-several="дня" data-many="дней">7</div>
 * <div class="days" data-one="день" data-several="дня" data-many="дней">1</div>
 * <div class="days" data-one="день" data-several="дня" data-many="дней">2</div
 *
 *
 * $('span.guest').russian_declension({one: "гость", several:"гостя", many: "гостей"});
 */
(function ($, window, undefined) {

    var pluginName = 'russian_declension', document = window.document, defaults = {
            one: "", several: "", many: "", zero: ""
        };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
        var title_keys = ['one', 'several', 'many'];
        var titles = [];
        for (i = 0; i <= 2; i++) {
            if ($(this.element).data(title_keys[i])) {
                titles.push($(this.element).data(title_keys[i]));
            } else {
                titles.push(this.options[title_keys[i]]);
            }
        }

        var number = parseInt($(this.element).html());

        if (!number) {
            number = 0;
        }

        var zero_title = this.options['zero'] || $(this.element).data('zero');
        var title = this.pluralize(number, titles);

        if (number == 0 && zero_title) {
            $(this.element).html(zero_title);
        } else {
            $(this.element).html(number + " " + title);
        }
    };

    Plugin.prototype.pluralize = function (number, titles) {
        var cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };


    $(window).on('load', function () {
        $('[data-rudecle]').russian_declension()
    });

}(jQuery, window));


Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url  = 'http://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    odnoklassniki: function(purl, text) {
        url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl='    + encodeURIComponent(purl);
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    twitter: function(purl, ptitle) {
        url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    mailru: function(purl, ptitle, pimg, text) {
        url  = 'http://connect.mail.ru/share?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&imageurl='    + encodeURIComponent(pimg);
        Share.popup(url)
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};


/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/local/templates/hd/js/jquery.messages.js?14992475921198";s:6:"source";s:41:"/local/templates/hd/js/jquery.messages.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function getMessage( msg, type, delay ){
    switch(type){
        case 'error':
            cssClass = 'red-popup-thor';
            break;
        case 'accept':
            cssClass = 'popup-thor';
            break;
        case 'message':
        default:
            cssClass = 'green-popup-thor';
    }

    if(delay == undefined){
        delay = 3000;
    }

    if( $('#message-box').length == 0 ){
        $('body').append('<div class="tip-message" id="message-box"><div class="tip-hold"><a href="#" class="btn-close" onclick="$(this).parents(\'#message-box\').remove();return false;">close</a><span>' + msg + '</span></div></div>');
    } else {
        if( $('#message-box').css('display') == 'none' ){
            $('#message-box').removeClass('red-popup-thor green-popup-thor popup-thor').addClass(cssClass).find('span').html(msg);
        } else {
            $('#message-box').remove();
            $('body').append('<div class="tip-message" id="message-box"><div class="tip-hold"><a href="#" class="btn-close">close</a><span>' + msg + '</span></div></div>');
        }
    }
    $('#message-box').addClass(cssClass);
    $('#message-box').fadeIn(200).delay(delay).fadeOut(400);

}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/local/templates/hd/js/js-bodygraph.js?15082910843407";s:6:"source";s:38:"/local/templates/hd/js/js-bodygraph.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
	var bodygraph = $('.js-bodygraph');
	var bodygraph_body = bodygraph.find('.bodygraph__body');
	var bodygraph_leftbar = bodygraph.find('.bodygraph__leftbar');
	var bodygraph_rightbar = bodygraph.find('.bodygraph__rightbar');
	var all_lines = bodygraph_body.find('.line');
	var genders = bodygraph_body.find('.gender');
	var all_centers = bodygraph_body.find('.center');
	var all_points = bodygraph_body.find('.point');
	var all_marks = bodygraph.find('.mark');
	var all_arrow_groups = bodygraph.find('.arrow-group');
	var all_icon_groups = bodygraph.find('.icon-group');

	function get_ajax_data(url, data, on_success){
		$.ajax({
			url: url,
			type: 'GET',
			async: true,
			data: data,
			beforeSend: function(){},
			success: function(data){
				on_success(data);
			},
			error: function(){
				alert('error, wrong path to file');
			}
		});
	};
	function bodygraph_reset(){
		genders.filter('.female').removeClass('disabled');
		genders.filter('.male').addClass('disabled');
		all_centers.addClass('disabled');
		all_points.addClass('disabled');
		all_lines.addClass('disabled').removeClass('color_single color_double color_red color_black');
		all_marks.addClass('disabled').removeClass('mark_up mark_down mark_star');
		all_arrow_groups.find('text').text('');
		all_icon_groups.find('text').text('');
	};
	function bodygraph_update_body(data) {
		genders.addClass('disabled').filter('.' + data.gender).removeClass('disabled');
		for (var i = 0; i < data.lines.length; i++) {
			all_lines.filter('.' + data.lines[i].name).addClass(data.lines[i].type).removeClass('disabled');
			bodygraph_update_points(data.lines[i].name, data.lines[i].chanel);
		};
		for (var i = 0; i < data.arrow_groups.length; i++) {
			all_arrow_groups.filter('.' + data.arrow_groups[i].name)
				.find('.group__green text').text(data.arrow_groups[i].value_green)
				.end()
				.find('.group__yellow text').text(data.arrow_groups[i].value_yellow)
				.end()
				.find('.arrow-'+data.arrow_groups[i].arrow).removeClass('hidden');

		};
	};
	function bodygraph_update_bar(bar, data) {
		for (var i = 0; i < data.values.length; i++) {
			bar.find('.' + data.values[i].name + '  text').text(data.values[i].value);
			if (data.values[i].mark){
				bar.find('.' + data.values[i].name + '  .mark').addClass(data.values[i].mark).removeClass('disabled');
			};
		};
	};
	function bodygraph_enable_center(point){
		point.closest('.center').removeClass('disabled');
	};
	function bodygraph_update_points(line_name, chanel_active){
		var points = line_name.match(/(\d+)/g);
		if (points) {
			for (var i = 0; i < points.length; i++) {
				all_points.filter('.point_' + points[i]).removeClass('disabled');
				if (chanel_active) {
					bodygraph_enable_center(all_points.filter('.point_' + points[i]));
				}
			};
		};
	};
	function bodygraph_update(data) {
		bodygraph_update_body(data.body);
		bodygraph_update_bar(bodygraph_leftbar, data.leftbar);
		bodygraph_update_bar(bodygraph_rightbar, data.rightbar);
	};

	$('.js-update-bodygrapf').on('click', function(e){
		get_ajax_data($(this).attr('data-url'), '', function(data){
			bodygraph_reset();
			bodygraph_update(data);
		});
		e.preventDefault();
	});
	$('.js-reset-bodygrapf').on('click', function(e){
		bodygraph_reset();
		e.preventDefault();
	});
	if ($bodygraphInfo !== false) {
		bodygraph_reset();
		bodygraph_update($bodygraphInfo);
	}
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/local/templates/hd/js/canvg.min.js?150827750062547";s:6:"source";s:35:"/local/templates/hd/js/canvg.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t,e){"use strict";"undefined"!=typeof define&&define.amd?define("canvgModule",["rgbcolor","stackblur"],e):"undefined"!=typeof module&&module.exports&&(module.exports=e(require("rgbcolor"),require("stackblur"))),t.canvg=e(t.RGBColor,t.stackBlur)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e=[0,0,0],i=function(i,n){var s=t.match(i);null!=s&&(e[n]+=s.length,t=t.replace(i," "))};return t=t.replace(/:not\(([^\)]*)\)/g,"     $1 "),t=t.replace(/{[^]*/gm," "),i(o,1),i(l,0),i(h,1),i(u,2),i(c,1),i(f,1),t=t.replace(/[\*\s\+>~]/g," "),t=t.replace(/[#\.]/g," "),i(p,2),e.join("")}function s(s){var r={opts:s};r.FRAMERATE=30,r.MAX_VIRTUAL_PIXELS=3e4,r.log=function(){},1==r.opts.log&&"undefined"!=typeof console&&(r.log=function(t){console.log(t)}),r.init=function(t){var e=0;r.UniqueId=function(){return e++,"canvg"+e},r.Definitions={},r.Styles={},r.StylesSpecificity={},r.Animations=[],r.Images=[],r.ctx=t,r.ViewPort=new function(){this.viewPorts=[],this.Clear=function(){this.viewPorts=[]},this.SetCurrent=function(t,e){this.viewPorts.push({width:t,height:e})},this.RemoveCurrent=function(){this.viewPorts.pop()},this.Current=function(){return this.viewPorts[this.viewPorts.length-1]},this.width=function(){return this.Current().width},this.height=function(){return this.Current().height},this.ComputeSize=function(t){return null!=t&&"number"==typeof t?t:"x"==t?this.width():"y"==t?this.height():Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)}}},r.init(),r.ImagesLoaded=function(){for(var t=0;t<r.Images.length;t++)if(!r.Images[t].loaded)return!1;return!0},r.trim=function(t){return t.replace(/^\s+|\s+$/g,"")},r.compressSpaces=function(t){return t.replace(/[\s\r\t\n]+/gm," ")},r.ajax=function(t){var e;return e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),e?(e.open("GET",t,!1),e.send(null),e.responseText):null},r.parseXml=function(t){if("undefined"!=typeof Windows&&"undefined"!=typeof Windows.Data&&"undefined"!=typeof Windows.Data.Xml){var e=new Windows.Data.Xml.Dom.XmlDocument,i=new Windows.Data.Xml.Dom.XmlLoadSettings;return i.prohibitDtd=!1,e.loadXml(t,i),e}if(window.DOMParser){var n=new DOMParser;return n.parseFromString(t,"text/xml")}t=t.replace(/<!DOCTYPE svg[^>]*>/,"");var e=new ActiveXObject("Microsoft.XMLDOM");return e.async="false",e.loadXML(t),e},r.Property=function(t,e){this.name=t,this.value=e},r.Property.prototype.getValue=function(){return this.value},r.Property.prototype.hasValue=function(){return null!=this.value&&""!==this.value},r.Property.prototype.numValue=function(){if(!this.hasValue())return 0;var t=parseFloat(this.value);return(this.value+"").match(/%$/)&&(t/=100),t},r.Property.prototype.valueOrDefault=function(t){return this.hasValue()?this.value:t},r.Property.prototype.numValueOrDefault=function(t){return this.hasValue()?this.numValue():t},r.Property.prototype.addOpacity=function(e){var i=this.value;if(null!=e.value&&""!=e.value&&"string"==typeof this.value){var n=new t(this.value);n.ok&&(i="rgba("+n.r+", "+n.g+", "+n.b+", "+e.numValue()+")")}return new r.Property(this.name,i)},r.Property.prototype.getDefinition=function(){var t=this.value.match(/#([^\)'"]+)/);return t&&(t=t[1]),t||(t=this.value),r.Definitions[t]},r.Property.prototype.isUrlDefinition=function(){return 0==this.value.indexOf("url(")},r.Property.prototype.getFillStyleDefinition=function(t,e){var i=this.getDefinition();if(null!=i&&i.createGradient)return i.createGradient(r.ctx,t,e);if(null!=i&&i.createPattern){if(i.getHrefAttribute().hasValue()){var n=i.attribute("patternTransform");i=i.getHrefAttribute().getDefinition(),n.hasValue()&&(i.attribute("patternTransform",!0).value=n.value)}return i.createPattern(r.ctx,t)}return null},r.Property.prototype.getDPI=function(){return 96},r.Property.prototype.getEM=function(t){var e=12,i=new r.Property("fontSize",r.Font.Parse(r.ctx.font).fontSize);return i.hasValue()&&(e=i.toPixels(t)),e},r.Property.prototype.getUnits=function(){var t=this.value+"";return t.replace(/[0-9\.\-]/g,"")},r.Property.prototype.toPixels=function(t,e){if(!this.hasValue())return 0;var i=this.value+"";if(i.match(/em$/))return this.numValue()*this.getEM(t);if(i.match(/ex$/))return this.numValue()*this.getEM(t)/2;if(i.match(/px$/))return this.numValue();if(i.match(/pt$/))return this.numValue()*this.getDPI(t)*(1/72);if(i.match(/pc$/))return 15*this.numValue();if(i.match(/cm$/))return this.numValue()*this.getDPI(t)/2.54;if(i.match(/mm$/))return this.numValue()*this.getDPI(t)/25.4;if(i.match(/in$/))return this.numValue()*this.getDPI(t);if(i.match(/%$/))return this.numValue()*r.ViewPort.ComputeSize(t);var n=this.numValue();return e&&1>n?n*r.ViewPort.ComputeSize(t):n},r.Property.prototype.toMilliseconds=function(){if(!this.hasValue())return 0;var t=this.value+"";return t.match(/s$/)?1e3*this.numValue():(t.match(/ms$/),this.numValue())},r.Property.prototype.toRadians=function(){if(!this.hasValue())return 0;var t=this.value+"";return t.match(/deg$/)?this.numValue()*(Math.PI/180):t.match(/grad$/)?this.numValue()*(Math.PI/200):t.match(/rad$/)?this.numValue():this.numValue()*(Math.PI/180)};var o={baseline:"alphabetic","before-edge":"top","text-before-edge":"top",middle:"middle",central:"middle","after-edge":"bottom","text-after-edge":"bottom",ideographic:"ideographic",alphabetic:"alphabetic",hanging:"hanging",mathematical:"alphabetic"};return r.Property.prototype.toTextBaseline=function(){return this.hasValue()?o[this.value]:null},r.Font=new function(){this.Styles="normal|italic|oblique|inherit",this.Variants="normal|small-caps|inherit",this.Weights="normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit",this.CreateFont=function(t,e,i,n,s,a){var o=null!=a?this.Parse(a):this.CreateFont("","","","","",r.ctx.font);return{fontFamily:s||o.fontFamily,fontSize:n||o.fontSize,fontStyle:t||o.fontStyle,fontWeight:i||o.fontWeight,fontVariant:e||o.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")}}};var t=this;this.Parse=function(e){for(var i={},n=r.trim(r.compressSpaces(e||"")).split(" "),s={fontSize:!1,fontStyle:!1,fontWeight:!1,fontVariant:!1},a="",o=0;o<n.length;o++)s.fontStyle||-1==t.Styles.indexOf(n[o])?s.fontVariant||-1==t.Variants.indexOf(n[o])?s.fontWeight||-1==t.Weights.indexOf(n[o])?s.fontSize?"inherit"!=n[o]&&(a+=n[o]):("inherit"!=n[o]&&(i.fontSize=n[o].split("/")[0]),s.fontStyle=s.fontVariant=s.fontWeight=s.fontSize=!0):("inherit"!=n[o]&&(i.fontWeight=n[o]),s.fontStyle=s.fontVariant=s.fontWeight=!0):("inherit"!=n[o]&&(i.fontVariant=n[o]),s.fontStyle=s.fontVariant=!0):("inherit"!=n[o]&&(i.fontStyle=n[o]),s.fontStyle=!0);return""!=a&&(i.fontFamily=a),i}},r.ToNumberArray=function(t){for(var e=r.trim(r.compressSpaces((t||"").replace(/,/g," "))).split(" "),i=0;i<e.length;i++)e[i]=parseFloat(e[i]);return e},r.Point=function(t,e){this.x=t,this.y=e},r.Point.prototype.angleTo=function(t){return Math.atan2(t.y-this.y,t.x-this.x)},r.Point.prototype.applyTransform=function(t){var e=this.x*t[0]+this.y*t[2]+t[4],i=this.x*t[1]+this.y*t[3]+t[5];this.x=e,this.y=i},r.CreatePoint=function(t){var e=r.ToNumberArray(t);return new r.Point(e[0],e[1])},r.CreatePath=function(t){for(var e=r.ToNumberArray(t),i=[],n=0;n<e.length;n+=2)i.push(new r.Point(e[n],e[n+1]));return i},r.BoundingBox=function(t,e,n,s){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN,this.x=function(){return this.x1},this.y=function(){return this.y1},this.width=function(){return this.x2-this.x1},this.height=function(){return this.y2-this.y1},this.addPoint=function(t,e){null!=t&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),null!=e&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))},this.addX=function(t){this.addPoint(t,null)},this.addY=function(t){this.addPoint(null,t)},this.addBoundingBox=function(t){this.addPoint(t.x1,t.y1),this.addPoint(t.x2,t.y2)},this.addQuadraticCurve=function(t,e,i,n,s,a){var r=t+2/3*(i-t),o=e+2/3*(n-e),l=r+1/3*(s-t),h=o+1/3*(a-e);this.addBezierCurve(t,e,r,l,o,h,s,a)},this.addBezierCurve=function(t,e,n,s,a,r,o,l){var h=[t,e],u=[n,s],c=[a,r],f=[o,l];for(this.addPoint(h[0],h[1]),this.addPoint(f[0],f[1]),i=0;i<=1;i++){var p=function(t){return Math.pow(1-t,3)*h[i]+3*Math.pow(1-t,2)*t*u[i]+3*(1-t)*Math.pow(t,2)*c[i]+Math.pow(t,3)*f[i]},m=6*h[i]-12*u[i]+6*c[i],d=-3*h[i]+9*u[i]-9*c[i]+3*f[i],y=3*u[i]-3*h[i];if(0!=d){var v=Math.pow(m,2)-4*y*d;if(!(0>v)){var g=(-m+Math.sqrt(v))/(2*d);g>0&&1>g&&(0==i&&this.addX(p(g)),1==i&&this.addY(p(g)));var x=(-m-Math.sqrt(v))/(2*d);x>0&&1>x&&(0==i&&this.addX(p(x)),1==i&&this.addY(p(x)))}}else{if(0==m)continue;var b=-y/m;b>0&&1>b&&(0==i&&this.addX(p(b)),1==i&&this.addY(p(b)))}}},this.isPointInBox=function(t,e){return this.x1<=t&&t<=this.x2&&this.y1<=e&&e<=this.y2},this.addPoint(t,e),this.addPoint(n,s)},r.Transform=function(t){var e=this;this.Type={},this.Type.translate=function(t){this.p=r.CreatePoint(t),this.apply=function(t){t.translate(this.p.x||0,this.p.y||0)},this.unapply=function(t){t.translate(-1*this.p.x||0,-1*this.p.y||0)},this.applyToPoint=function(t){t.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0])}},this.Type.rotate=function(t){var e=r.ToNumberArray(t);this.angle=new r.Property("angle",e[0]),this.cx=e[1]||0,this.cy=e[2]||0,this.apply=function(t){t.translate(this.cx,this.cy),t.rotate(this.angle.toRadians()),t.translate(-this.cx,-this.cy)},this.unapply=function(t){t.translate(this.cx,this.cy),t.rotate(-1*this.angle.toRadians()),t.translate(-this.cx,-this.cy)},this.applyToPoint=function(t){var e=this.angle.toRadians();t.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]),t.applyTransform([Math.cos(e),Math.sin(e),-Math.sin(e),Math.cos(e),0,0]),t.applyTransform([1,0,0,1,-this.p.x||0,-this.p.y||0])}},this.Type.scale=function(t){this.p=r.CreatePoint(t),this.apply=function(t){t.scale(this.p.x||1,this.p.y||this.p.x||1)},this.unapply=function(t){t.scale(1/this.p.x||1,1/this.p.y||this.p.x||1)},this.applyToPoint=function(t){t.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])}},this.Type.matrix=function(t){this.m=r.ToNumberArray(t),this.apply=function(t){t.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])},this.unapply=function(t){var e=this.m[0],i=this.m[2],n=this.m[4],s=this.m[1],a=this.m[3],r=this.m[5],o=0,l=0,h=1,u=1/(e*(a*h-r*l)-i*(s*h-r*o)+n*(s*l-a*o));t.transform(u*(a*h-r*l),u*(r*o-s*h),u*(n*l-i*h),u*(e*h-n*o),u*(i*r-n*a),u*(n*s-e*r))},this.applyToPoint=function(t){t.applyTransform(this.m)}},this.Type.SkewBase=function(t){this.base=e.Type.matrix,this.base(t),this.angle=new r.Property("angle",t)},this.Type.SkewBase.prototype=new this.Type.matrix,this.Type.skewX=function(t){this.base=e.Type.SkewBase,this.base(t),this.m=[1,0,Math.tan(this.angle.toRadians()),1,0,0]},this.Type.skewX.prototype=new this.Type.SkewBase,this.Type.skewY=function(t){this.base=e.Type.SkewBase,this.base(t),this.m=[1,Math.tan(this.angle.toRadians()),0,1,0,0]},this.Type.skewY.prototype=new this.Type.SkewBase,this.transforms=[],this.apply=function(t){for(var e=0;e<this.transforms.length;e++)this.transforms[e].apply(t)},this.unapply=function(t){for(var e=this.transforms.length-1;e>=0;e--)this.transforms[e].unapply(t)},this.applyToPoint=function(t){for(var e=0;e<this.transforms.length;e++)this.transforms[e].applyToPoint(t)};for(var i=r.trim(r.compressSpaces(t)).replace(/\)([a-zA-Z])/g,") $1").replace(/\)(\s?,\s?)/g,") ").split(/\s(?=[a-z])/),n=0;n<i.length;n++){var s=r.trim(i[n].split("(")[0]),a=i[n].split("(")[1].replace(")",""),o=new this.Type[s](a);o.type=s,this.transforms.push(o)}},r.AspectRatio=function(t,e,i,n,s,a,o,l,h,u){e=r.compressSpaces(e),e=e.replace(/^defer\s/,"");var c=e.split(" ")[0]||"xMidYMid",f=e.split(" ")[1]||"meet",p=i/n,m=s/a,d=Math.min(p,m),y=Math.max(p,m);"meet"==f&&(n*=d,a*=d),"slice"==f&&(n*=y,a*=y),h=new r.Property("refX",h),u=new r.Property("refY",u),h.hasValue()&&u.hasValue()?t.translate(-d*h.toPixels("x"),-d*u.toPixels("y")):(c.match(/^xMid/)&&("meet"==f&&d==m||"slice"==f&&y==m)&&t.translate(i/2-n/2,0),c.match(/YMid$/)&&("meet"==f&&d==p||"slice"==f&&y==p)&&t.translate(0,s/2-a/2),c.match(/^xMax/)&&("meet"==f&&d==m||"slice"==f&&y==m)&&t.translate(i-n,0),c.match(/YMax$/)&&("meet"==f&&d==p||"slice"==f&&y==p)&&t.translate(0,s-a)),"none"==c?t.scale(p,m):"meet"==f?t.scale(d,d):"slice"==f&&t.scale(y,y),t.translate(null==o?0:-o,null==l?0:-l)},r.Element={},r.EmptyProperty=new r.Property("EMPTY",""),r.Element.ElementBase=function(t){if(this.attributes={},this.styles={},this.stylesSpecificity={},this.children=[],this.attribute=function(t,e){var i=this.attributes[t];return null!=i?i:(1==e&&(i=new r.Property(t,""),this.attributes[t]=i),i||r.EmptyProperty)},this.getHrefAttribute=function(){for(var t in this.attributes)if("href"==t||t.match(/:href$/))return this.attributes[t];return r.EmptyProperty},this.style=function(t,e,i){var n=this.styles[t];if(null!=n)return n;var s=this.attribute(t);if(null!=s&&s.hasValue())return this.styles[t]=s,s;if(1!=i){var a=this.parent;if(null!=a){var o=a.style(t);if(null!=o&&o.hasValue())return o}}return 1==e&&(n=new r.Property(t,""),this.styles[t]=n),n||r.EmptyProperty},this.render=function(t){if("none"!=this.style("display").value&&"hidden"!=this.style("visibility").value){if(t.save(),this.style("mask").hasValue()){var e=this.style("mask").getDefinition();null!=e&&e.apply(t,this)}else if(this.style("filter").hasValue()){var i=this.style("filter").getDefinition();null!=i&&i.apply(t,this)}else this.setContext(t),this.renderChildren(t),this.clearContext(t);t.restore()}},this.setContext=function(){},this.clearContext=function(){},this.renderChildren=function(t){for(var e=0;e<this.children.length;e++)this.children[e].render(t)},this.addChild=function(t,e){var i=t;e&&(i=r.CreateElement(t)),i.parent=this,"title"!=i.type&&this.children.push(i)},this.addStylesFromStyleDefinition=function(){for(var e in r.Styles)if("@"!=e[0]&&a(t,e)){var i=r.Styles[e],n=r.StylesSpecificity[e];if(null!=i)for(var s in i){var o=this.stylesSpecificity[s];"undefined"==typeof o&&(o="000"),n>o&&(this.styles[s]=i[s],this.stylesSpecificity[s]=n)}}},null!=t&&1==t.nodeType){for(var e=0;e<t.attributes.length;e++){var i=t.attributes[e];this.attributes[i.nodeName]=new r.Property(i.nodeName,i.value)}if(this.addStylesFromStyleDefinition(),this.attribute("style").hasValue())for(var n=this.attribute("style").value.split(";"),e=0;e<n.length;e++)if(""!=r.trim(n[e])){var s=n[e].split(":"),o=r.trim(s[0]),l=r.trim(s[1]);this.styles[o]=new r.Property(o,l)}this.attribute("id").hasValue()&&null==r.Definitions[this.attribute("id").value]&&(r.Definitions[this.attribute("id").value]=this);for(var e=0;e<t.childNodes.length;e++){var h=t.childNodes[e];if(1==h.nodeType&&this.addChild(h,!0),this.captureTextNodes&&(3==h.nodeType||4==h.nodeType)){var u=h.value||h.text||h.textContent||"";""!=r.compressSpaces(u)&&this.addChild(new r.Element.tspan(h),!1)}}}},r.Element.RenderedElementBase=function(t){this.base=r.Element.ElementBase,this.base(t),this.setContext=function(t){if(this.style("fill").isUrlDefinition()){var e=this.style("fill").getFillStyleDefinition(this,this.style("fill-opacity"));null!=e&&(t.fillStyle=e)}else if(this.style("fill").hasValue()){var i=this.style("fill");"currentColor"==i.value&&(i.value=this.style("color").value),"inherit"!=i.value&&(t.fillStyle="none"==i.value?"rgba(0,0,0,0)":i.value)}if(this.style("fill-opacity").hasValue()){var i=new r.Property("fill",t.fillStyle);i=i.addOpacity(this.style("fill-opacity")),t.fillStyle=i.value}if(this.style("stroke").isUrlDefinition()){var e=this.style("stroke").getFillStyleDefinition(this,this.style("stroke-opacity"));null!=e&&(t.strokeStyle=e)}else if(this.style("stroke").hasValue()){var n=this.style("stroke");"currentColor"==n.value&&(n.value=this.style("color").value),"inherit"!=n.value&&(t.strokeStyle="none"==n.value?"rgba(0,0,0,0)":n.value)}if(this.style("stroke-opacity").hasValue()){var n=new r.Property("stroke",t.strokeStyle);n=n.addOpacity(this.style("stroke-opacity")),t.strokeStyle=n.value}if(this.style("stroke-width").hasValue()){var s=this.style("stroke-width").toPixels();t.lineWidth=0==s?.001:s}if(this.style("stroke-linecap").hasValue()&&(t.lineCap=this.style("stroke-linecap").value),this.style("stroke-linejoin").hasValue()&&(t.lineJoin=this.style("stroke-linejoin").value),this.style("stroke-miterlimit").hasValue()&&(t.miterLimit=this.style("stroke-miterlimit").value),this.style("stroke-dasharray").hasValue()&&"none"!=this.style("stroke-dasharray").value){var a=r.ToNumberArray(this.style("stroke-dasharray").value);"undefined"!=typeof t.setLineDash?t.setLineDash(a):"undefined"!=typeof t.webkitLineDash?t.webkitLineDash=a:"undefined"==typeof t.mozDash||1==a.length&&0==a[0]||(t.mozDash=a);var o=this.style("stroke-dashoffset").numValueOrDefault(1);"undefined"!=typeof t.lineDashOffset?t.lineDashOffset=o:"undefined"!=typeof t.webkitLineDashOffset?t.webkitLineDashOffset=o:"undefined"!=typeof t.mozDashOffset&&(t.mozDashOffset=o)}if("undefined"!=typeof t.font&&(t.font=r.Font.CreateFont(this.style("font-style").value,this.style("font-variant").value,this.style("font-weight").value,this.style("font-size").hasValue()?this.style("font-size").toPixels()+"px":"",this.style("font-family").value).toString()),this.style("transform",!1,!0).hasValue()){var l=new r.Transform(this.style("transform",!1,!0).value);l.apply(t)}if(this.style("clip-path",!1,!0).hasValue()){var h=this.style("clip-path",!1,!0).getDefinition();null!=h&&h.apply(t)}this.style("opacity").hasValue()&&(t.globalAlpha=this.style("opacity").numValue())}},r.Element.RenderedElementBase.prototype=new r.Element.ElementBase,r.Element.PathElementBase=function(t){this.base=r.Element.RenderedElementBase,this.base(t),this.path=function(t){return null!=t&&t.beginPath(),new r.BoundingBox},this.renderChildren=function(t){this.path(t),r.Mouse.checkPath(this,t),""!=t.fillStyle&&("inherit"!=this.style("fill-rule").valueOrDefault("inherit")?t.fill(this.style("fill-rule").value):t.fill()),""!=t.strokeStyle&&t.stroke();var e=this.getMarkers();if(null!=e){if(this.style("marker-start").isUrlDefinition()){var i=this.style("marker-start").getDefinition();i.render(t,e[0][0],e[0][1])}if(this.style("marker-mid").isUrlDefinition())for(var i=this.style("marker-mid").getDefinition(),n=1;n<e.length-1;n++)i.render(t,e[n][0],e[n][1]);if(this.style("marker-end").isUrlDefinition()){var i=this.style("marker-end").getDefinition();i.render(t,e[e.length-1][0],e[e.length-1][1])}}},this.getBoundingBox=function(){return this.path()},this.getMarkers=function(){return null}},r.Element.PathElementBase.prototype=new r.Element.RenderedElementBase,r.Element.svg=function(t){this.base=r.Element.RenderedElementBase,this.base(t),this.baseClearContext=this.clearContext,this.clearContext=function(t){this.baseClearContext(t),r.ViewPort.RemoveCurrent()},this.baseSetContext=this.setContext,this.setContext=function(t){t.strokeStyle="rgba(0,0,0,0)",t.lineCap="butt",t.lineJoin="miter",t.miterLimit=4,"undefined"!=typeof t.font&&"undefined"!=typeof window.getComputedStyle&&(t.font=window.getComputedStyle(t.canvas).getPropertyValue("font")),this.baseSetContext(t),this.attribute("x").hasValue()||(this.attribute("x",!0).value=0),this.attribute("y").hasValue()||(this.attribute("y",!0).value=0),t.translate(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"));var e=r.ViewPort.width(),i=r.ViewPort.height();if(this.attribute("width").hasValue()||(this.attribute("width",!0).value="100%"),this.attribute("height").hasValue()||(this.attribute("height",!0).value="100%"),"undefined"==typeof this.root){e=this.attribute("width").toPixels("x"),i=this.attribute("height").toPixels("y");var n=0,s=0;this.attribute("refX").hasValue()&&this.attribute("refY").hasValue()&&(n=-this.attribute("refX").toPixels("x"),s=-this.attribute("refY").toPixels("y")),"visible"!=this.attribute("overflow").valueOrDefault("hidden")&&(t.beginPath(),t.moveTo(n,s),t.lineTo(e,s),t.lineTo(e,i),t.lineTo(n,i),t.closePath(),t.clip())}if(r.ViewPort.SetCurrent(e,i),this.attribute("viewBox").hasValue()){var a=r.ToNumberArray(this.attribute("viewBox").value),o=a[0],l=a[1];e=a[2],i=a[3],r.AspectRatio(t,this.attribute("preserveAspectRatio").value,r.ViewPort.width(),e,r.ViewPort.height(),i,o,l,this.attribute("refX").value,this.attribute("refY").value),r.ViewPort.RemoveCurrent(),r.ViewPort.SetCurrent(a[2],a[3])}}},r.Element.svg.prototype=new r.Element.RenderedElementBase,r.Element.rect=function(t){this.base=r.Element.PathElementBase,this.base(t),this.path=function(t){var e=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),n=this.attribute("width").toPixels("x"),s=this.attribute("height").toPixels("y"),a=this.attribute("rx").toPixels("x"),o=this.attribute("ry").toPixels("y");return this.attribute("rx").hasValue()&&!this.attribute("ry").hasValue()&&(o=a),this.attribute("ry").hasValue()&&!this.attribute("rx").hasValue()&&(a=o),a=Math.min(a,n/2),o=Math.min(o,s/2),null!=t&&(t.beginPath(),t.moveTo(e+a,i),t.lineTo(e+n-a,i),t.quadraticCurveTo(e+n,i,e+n,i+o),t.lineTo(e+n,i+s-o),t.quadraticCurveTo(e+n,i+s,e+n-a,i+s),t.lineTo(e+a,i+s),t.quadraticCurveTo(e,i+s,e,i+s-o),t.lineTo(e,i+o),t.quadraticCurveTo(e,i,e+a,i),t.closePath()),new r.BoundingBox(e,i,e+n,i+s)}},r.Element.rect.prototype=new r.Element.PathElementBase,r.Element.circle=function(t){this.base=r.Element.PathElementBase,this.base(t),this.path=function(t){var e=this.attribute("cx").toPixels("x"),i=this.attribute("cy").toPixels("y"),n=this.attribute("r").toPixels();return null!=t&&(t.beginPath(),t.arc(e,i,n,0,2*Math.PI,!0),t.closePath()),new r.BoundingBox(e-n,i-n,e+n,i+n)}},r.Element.circle.prototype=new r.Element.PathElementBase,r.Element.ellipse=function(t){this.base=r.Element.PathElementBase,this.base(t),this.path=function(t){var e=4*((Math.sqrt(2)-1)/3),i=this.attribute("rx").toPixels("x"),n=this.attribute("ry").toPixels("y"),s=this.attribute("cx").toPixels("x"),a=this.attribute("cy").toPixels("y");return null!=t&&(t.beginPath(),t.moveTo(s,a-n),t.bezierCurveTo(s+e*i,a-n,s+i,a-e*n,s+i,a),t.bezierCurveTo(s+i,a+e*n,s+e*i,a+n,s,a+n),t.bezierCurveTo(s-e*i,a+n,s-i,a+e*n,s-i,a),t.bezierCurveTo(s-i,a-e*n,s-e*i,a-n,s,a-n),t.closePath()),new r.BoundingBox(s-i,a-n,s+i,a+n)}},r.Element.ellipse.prototype=new r.Element.PathElementBase,r.Element.line=function(t){this.base=r.Element.PathElementBase,this.base(t),this.getPoints=function(){return[new r.Point(this.attribute("x1").toPixels("x"),this.attribute("y1").toPixels("y")),new r.Point(this.attribute("x2").toPixels("x"),this.attribute("y2").toPixels("y"))]},this.path=function(t){var e=this.getPoints();return null!=t&&(t.beginPath(),t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y)),new r.BoundingBox(e[0].x,e[0].y,e[1].x,e[1].y)},this.getMarkers=function(){var t=this.getPoints(),e=t[0].angleTo(t[1]);return[[t[0],e],[t[1],e]]}},r.Element.line.prototype=new r.Element.PathElementBase,r.Element.polyline=function(t){this.base=r.Element.PathElementBase,this.base(t),this.points=r.CreatePath(this.attribute("points").value),this.path=function(t){var e=new r.BoundingBox(this.points[0].x,this.points[0].y);null!=t&&(t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y));for(var i=1;i<this.points.length;i++)e.addPoint(this.points[i].x,this.points[i].y),null!=t&&t.lineTo(this.points[i].x,this.points[i].y);return e},this.getMarkers=function(){for(var t=[],e=0;e<this.points.length-1;e++)t.push([this.points[e],this.points[e].angleTo(this.points[e+1])]);return t.push([this.points[this.points.length-1],t[t.length-1][1]]),t}},r.Element.polyline.prototype=new r.Element.PathElementBase,r.Element.polygon=function(t){this.base=r.Element.polyline,this.base(t),this.basePath=this.path,this.path=function(t){var e=this.basePath(t);return null!=t&&(t.lineTo(this.points[0].x,this.points[0].y),t.closePath()),e}},r.Element.polygon.prototype=new r.Element.polyline,r.Element.path=function(t){this.base=r.Element.PathElementBase,this.base(t);var e=this.attribute("d").value;e=e.replace(/,/gm," ");for(var i=0;2>i;i++)e=e.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,"$1 $2");e=e.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2"),e=e.replace(/([0-9])([+\-])/gm,"$1 $2");for(var i=0;2>i;i++)e=e.replace(/(\.[0-9]*)(\.)/gm,"$1 $2");e=e.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,"$1 $3 $4 "),e=r.compressSpaces(e),e=r.trim(e),this.PathParser=new function(t){this.tokens=t.split(" "),this.reset=function(){this.i=-1,this.command="",this.previousCommand="",this.start=new r.Point(0,0),this.control=new r.Point(0,0),this.current=new r.Point(0,0),this.points=[],this.angles=[]},this.isEnd=function(){return this.i>=this.tokens.length-1},this.isCommandOrEnd=function(){return this.isEnd()?!0:null!=this.tokens[this.i+1].match(/^[A-Za-z]$/)},this.isRelativeCommand=function(){switch(this.command){case"m":case"l":case"h":case"v":case"c":case"s":case"q":case"t":case"a":case"z":return!0}return!1},this.getToken=function(){return this.i++,this.tokens[this.i]},this.getScalar=function(){return parseFloat(this.getToken())},this.nextCommand=function(){this.previousCommand=this.command,this.command=this.getToken()},this.getPoint=function(){var t=new r.Point(this.getScalar(),this.getScalar());return this.makeAbsolute(t)},this.getAsControlPoint=function(){var t=this.getPoint();return this.control=t,t},this.getAsCurrentPoint=function(){var t=this.getPoint();return this.current=t,t},this.getReflectedControlPoint=function(){if("c"!=this.previousCommand.toLowerCase()&&"s"!=this.previousCommand.toLowerCase()&&"q"!=this.previousCommand.toLowerCase()&&"t"!=this.previousCommand.toLowerCase())return this.current;var t=new r.Point(2*this.current.x-this.control.x,2*this.current.y-this.control.y);return t},this.makeAbsolute=function(t){return this.isRelativeCommand()&&(t.x+=this.current.x,t.y+=this.current.y),t},this.addMarker=function(t,e,i){null!=i&&this.angles.length>0&&null==this.angles[this.angles.length-1]&&(this.angles[this.angles.length-1]=this.points[this.points.length-1].angleTo(i)),this.addMarkerAngle(t,null==e?null:e.angleTo(t))},this.addMarkerAngle=function(t,e){this.points.push(t),this.angles.push(e)},this.getMarkerPoints=function(){return this.points},this.getMarkerAngles=function(){for(var t=0;t<this.angles.length;t++)if(null==this.angles[t])for(var e=t+1;e<this.angles.length;e++)if(null!=this.angles[e]){this.angles[t]=this.angles[e];break}return this.angles}}(e),this.path=function(t){var e=this.PathParser;e.reset();var i=new r.BoundingBox;for(null!=t&&t.beginPath();!e.isEnd();)switch(e.nextCommand(),e.command){case"M":case"m":var n=e.getAsCurrentPoint();for(e.addMarker(n),i.addPoint(n.x,n.y),null!=t&&t.moveTo(n.x,n.y),e.start=e.current;!e.isCommandOrEnd();){var n=e.getAsCurrentPoint();e.addMarker(n,e.start),i.addPoint(n.x,n.y),null!=t&&t.lineTo(n.x,n.y)}break;case"L":case"l":for(;!e.isCommandOrEnd();){var s=e.current,n=e.getAsCurrentPoint();e.addMarker(n,s),i.addPoint(n.x,n.y),null!=t&&t.lineTo(n.x,n.y)}break;case"H":case"h":for(;!e.isCommandOrEnd();){var a=new r.Point((e.isRelativeCommand()?e.current.x:0)+e.getScalar(),e.current.y);e.addMarker(a,e.current),e.current=a,i.addPoint(e.current.x,e.current.y),null!=t&&t.lineTo(e.current.x,e.current.y)}break;case"V":case"v":for(;!e.isCommandOrEnd();){var a=new r.Point(e.current.x,(e.isRelativeCommand()?e.current.y:0)+e.getScalar());e.addMarker(a,e.current),e.current=a,i.addPoint(e.current.x,e.current.y),null!=t&&t.lineTo(e.current.x,e.current.y)}break;case"C":case"c":for(;!e.isCommandOrEnd();){var o=e.current,l=e.getPoint(),h=e.getAsControlPoint(),u=e.getAsCurrentPoint();e.addMarker(u,h,l),i.addBezierCurve(o.x,o.y,l.x,l.y,h.x,h.y,u.x,u.y),null!=t&&t.bezierCurveTo(l.x,l.y,h.x,h.y,u.x,u.y)}break;case"S":case"s":for(;!e.isCommandOrEnd();){var o=e.current,l=e.getReflectedControlPoint(),h=e.getAsControlPoint(),u=e.getAsCurrentPoint();e.addMarker(u,h,l),i.addBezierCurve(o.x,o.y,l.x,l.y,h.x,h.y,u.x,u.y),null!=t&&t.bezierCurveTo(l.x,l.y,h.x,h.y,u.x,u.y)}break;case"Q":case"q":for(;!e.isCommandOrEnd();){var o=e.current,h=e.getAsControlPoint(),u=e.getAsCurrentPoint();e.addMarker(u,h,h),i.addQuadraticCurve(o.x,o.y,h.x,h.y,u.x,u.y),null!=t&&t.quadraticCurveTo(h.x,h.y,u.x,u.y)}break;case"T":case"t":for(;!e.isCommandOrEnd();){var o=e.current,h=e.getReflectedControlPoint();e.control=h;var u=e.getAsCurrentPoint();e.addMarker(u,h,h),i.addQuadraticCurve(o.x,o.y,h.x,h.y,u.x,u.y),null!=t&&t.quadraticCurveTo(h.x,h.y,u.x,u.y)}break;case"A":case"a":for(;!e.isCommandOrEnd();){var o=e.current,c=e.getScalar(),f=e.getScalar(),p=e.getScalar()*(Math.PI/180),m=e.getScalar(),d=e.getScalar(),u=e.getAsCurrentPoint(),y=new r.Point(Math.cos(p)*(o.x-u.x)/2+Math.sin(p)*(o.y-u.y)/2,-Math.sin(p)*(o.x-u.x)/2+Math.cos(p)*(o.y-u.y)/2),v=Math.pow(y.x,2)/Math.pow(c,2)+Math.pow(y.y,2)/Math.pow(f,2);v>1&&(c*=Math.sqrt(v),f*=Math.sqrt(v));var g=(m==d?-1:1)*Math.sqrt((Math.pow(c,2)*Math.pow(f,2)-Math.pow(c,2)*Math.pow(y.y,2)-Math.pow(f,2)*Math.pow(y.x,2))/(Math.pow(c,2)*Math.pow(y.y,2)+Math.pow(f,2)*Math.pow(y.x,2)));isNaN(g)&&(g=0);var x=new r.Point(g*c*y.y/f,g*-f*y.x/c),b=new r.Point((o.x+u.x)/2+Math.cos(p)*x.x-Math.sin(p)*x.y,(o.y+u.y)/2+Math.sin(p)*x.x+Math.cos(p)*x.y),E=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))},P=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(E(t)*E(e))},w=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(P(t,e))},B=w([1,0],[(y.x-x.x)/c,(y.y-x.y)/f]),C=[(y.x-x.x)/c,(y.y-x.y)/f],T=[(-y.x-x.x)/c,(-y.y-x.y)/f],V=w(C,T);P(C,T)<=-1&&(V=Math.PI),P(C,T)>=1&&(V=0);var M=1-d?1:-1,S=B+M*(V/2),k=new r.Point(b.x+c*Math.cos(S),b.y+f*Math.sin(S));if(e.addMarkerAngle(k,S-M*Math.PI/2),e.addMarkerAngle(u,S-M*Math.PI),i.addPoint(u.x,u.y),null!=t){var P=c>f?c:f,D=c>f?1:c/f,A=c>f?f/c:1;t.translate(b.x,b.y),t.rotate(p),t.scale(D,A),t.arc(0,0,P,B,B+V,1-d),t.scale(1/D,1/A),t.rotate(-p),t.translate(-b.x,-b.y)}}break;case"Z":case"z":null!=t&&t.closePath(),e.current=e.start}return i},this.getMarkers=function(){for(var t=this.PathParser.getMarkerPoints(),e=this.PathParser.getMarkerAngles(),i=[],n=0;n<t.length;n++)i.push([t[n],e[n]]);return i}},r.Element.path.prototype=new r.Element.PathElementBase,r.Element.pattern=function(t){this.base=r.Element.ElementBase,this.base(t),this.createPattern=function(t){var e=this.attribute("width").toPixels("x",!0),i=this.attribute("height").toPixels("y",!0),n=new r.Element.svg;n.attributes.viewBox=new r.Property("viewBox",this.attribute("viewBox").value),n.attributes.width=new r.Property("width",e+"px"),n.attributes.height=new r.Property("height",i+"px"),n.attributes.transform=new r.Property("transform",this.attribute("patternTransform").value),n.children=this.children;var s=document.createElement("canvas");s.width=e,s.height=i;var a=s.getContext("2d");this.attribute("x").hasValue()&&this.attribute("y").hasValue()&&a.translate(this.attribute("x").toPixels("x",!0),this.attribute("y").toPixels("y",!0));for(var o=-1;1>=o;o++)for(var l=-1;1>=l;l++)a.save(),n.attributes.x=new r.Property("x",o*s.width),n.attributes.y=new r.Property("y",l*s.height),n.render(a),a.restore();var h=t.createPattern(s,"repeat");return h}},r.Element.pattern.prototype=new r.Element.ElementBase,r.Element.marker=function(t){this.base=r.Element.ElementBase,this.base(t),this.baseRender=this.render,this.render=function(t,e,i){t.translate(e.x,e.y),"auto"==this.attribute("orient").valueOrDefault("auto")&&t.rotate(i),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&t.scale(t.lineWidth,t.lineWidth),t.save();var n=new r.Element.svg;n.attributes.viewBox=new r.Property("viewBox",this.attribute("viewBox").value),n.attributes.refX=new r.Property("refX",this.attribute("refX").value),n.attributes.refY=new r.Property("refY",this.attribute("refY").value),n.attributes.width=new r.Property("width",this.attribute("markerWidth").value),n.attributes.height=new r.Property("height",this.attribute("markerHeight").value),n.attributes.fill=new r.Property("fill",this.attribute("fill").valueOrDefault("black")),n.attributes.stroke=new r.Property("stroke",this.attribute("stroke").valueOrDefault("none")),n.children=this.children,n.render(t),t.restore(),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&t.scale(1/t.lineWidth,1/t.lineWidth),"auto"==this.attribute("orient").valueOrDefault("auto")&&t.rotate(-i),t.translate(-e.x,-e.y)
}},r.Element.marker.prototype=new r.Element.ElementBase,r.Element.defs=function(t){this.base=r.Element.ElementBase,this.base(t),this.render=function(){}},r.Element.defs.prototype=new r.Element.ElementBase,r.Element.GradientBase=function(t){this.base=r.Element.ElementBase,this.base(t),this.stops=[];for(var e=0;e<this.children.length;e++){var i=this.children[e];"stop"==i.type&&this.stops.push(i)}this.getGradient=function(){},this.gradientUnits=function(){return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox")},this.attributesToInherit=["gradientUnits"],this.inheritStopContainer=function(t){for(var e=0;e<this.attributesToInherit.length;e++){var i=this.attributesToInherit[e];!this.attribute(i).hasValue()&&t.attribute(i).hasValue()&&(this.attribute(i,!0).value=t.attribute(i).value)}},this.createGradient=function(t,e,i){var n=this;this.getHrefAttribute().hasValue()&&(n=this.getHrefAttribute().getDefinition(),this.inheritStopContainer(n));var s=function(t){if(i.hasValue()){var e=new r.Property("color",t);return e.addOpacity(i).value}return t},a=this.getGradient(t,e);if(null==a)return s(n.stops[n.stops.length-1].color);for(var o=0;o<n.stops.length;o++)a.addColorStop(n.stops[o].offset,s(n.stops[o].color));if(this.attribute("gradientTransform").hasValue()){var l=r.ViewPort.viewPorts[0],h=new r.Element.rect;h.attributes.x=new r.Property("x",-r.MAX_VIRTUAL_PIXELS/3),h.attributes.y=new r.Property("y",-r.MAX_VIRTUAL_PIXELS/3),h.attributes.width=new r.Property("width",r.MAX_VIRTUAL_PIXELS),h.attributes.height=new r.Property("height",r.MAX_VIRTUAL_PIXELS);var u=new r.Element.g;u.attributes.transform=new r.Property("transform",this.attribute("gradientTransform").value),u.children=[h];var c=new r.Element.svg;c.attributes.x=new r.Property("x",0),c.attributes.y=new r.Property("y",0),c.attributes.width=new r.Property("width",l.width),c.attributes.height=new r.Property("height",l.height),c.children=[u];var f=document.createElement("canvas");f.width=l.width,f.height=l.height;var p=f.getContext("2d");return p.fillStyle=a,c.render(p),p.createPattern(f,"no-repeat")}return a}},r.Element.GradientBase.prototype=new r.Element.ElementBase,r.Element.linearGradient=function(t){this.base=r.Element.GradientBase,this.base(t),this.attributesToInherit.push("x1"),this.attributesToInherit.push("y1"),this.attributesToInherit.push("x2"),this.attributesToInherit.push("y2"),this.getGradient=function(t,e){var i="objectBoundingBox"==this.gradientUnits()?e.getBoundingBox():null;this.attribute("x1").hasValue()||this.attribute("y1").hasValue()||this.attribute("x2").hasValue()||this.attribute("y2").hasValue()||(this.attribute("x1",!0).value=0,this.attribute("y1",!0).value=0,this.attribute("x2",!0).value=1,this.attribute("y2",!0).value=0);var n="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("x1").numValue():this.attribute("x1").toPixels("x"),s="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("y1").numValue():this.attribute("y1").toPixels("y"),a="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("x2").numValue():this.attribute("x2").toPixels("x"),r="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("y2").numValue():this.attribute("y2").toPixels("y");return n==a&&s==r?null:t.createLinearGradient(n,s,a,r)}},r.Element.linearGradient.prototype=new r.Element.GradientBase,r.Element.radialGradient=function(t){this.base=r.Element.GradientBase,this.base(t),this.attributesToInherit.push("cx"),this.attributesToInherit.push("cy"),this.attributesToInherit.push("r"),this.attributesToInherit.push("fx"),this.attributesToInherit.push("fy"),this.getGradient=function(t,e){var i=e.getBoundingBox();this.attribute("cx").hasValue()||(this.attribute("cx",!0).value="50%"),this.attribute("cy").hasValue()||(this.attribute("cy",!0).value="50%"),this.attribute("r").hasValue()||(this.attribute("r",!0).value="50%");var n="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("cx").numValue():this.attribute("cx").toPixels("x"),s="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("cy").numValue():this.attribute("cy").toPixels("y"),a=n,r=s;this.attribute("fx").hasValue()&&(a="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("fx").numValue():this.attribute("fx").toPixels("x")),this.attribute("fy").hasValue()&&(r="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("fy").numValue():this.attribute("fy").toPixels("y"));var o="objectBoundingBox"==this.gradientUnits()?(i.width()+i.height())/2*this.attribute("r").numValue():this.attribute("r").toPixels();return t.createRadialGradient(a,r,0,n,s,o)}},r.Element.radialGradient.prototype=new r.Element.GradientBase,r.Element.stop=function(t){this.base=r.Element.ElementBase,this.base(t),this.offset=this.attribute("offset").numValue(),this.offset<0&&(this.offset=0),this.offset>1&&(this.offset=1);var e=this.style("stop-color",!0);""===e.value&&(e.value="#000"),this.style("stop-opacity").hasValue()&&(e=e.addOpacity(this.style("stop-opacity"))),this.color=e.value},r.Element.stop.prototype=new r.Element.ElementBase,r.Element.AnimateBase=function(t){this.base=r.Element.ElementBase,this.base(t),r.Animations.push(this),this.duration=0,this.begin=this.attribute("begin").toMilliseconds(),this.maxDuration=this.begin+this.attribute("dur").toMilliseconds(),this.getProperty=function(){var t=this.attribute("attributeType").value,e=this.attribute("attributeName").value;return"CSS"==t?this.parent.style(e,!0):this.parent.attribute(e,!0)},this.initialValue=null,this.initialUnits="",this.removed=!1,this.calcValue=function(){return""},this.update=function(t){if(null==this.initialValue&&(this.initialValue=this.getProperty().value,this.initialUnits=this.getProperty().getUnits()),this.duration>this.maxDuration){if("indefinite"==this.attribute("repeatCount").value||"indefinite"==this.attribute("repeatDur").value)this.duration=0;else if("freeze"!=this.attribute("fill").valueOrDefault("remove")||this.frozen){if("remove"==this.attribute("fill").valueOrDefault("remove")&&!this.removed)return this.removed=!0,this.getProperty().value=this.parent.animationFrozen?this.parent.animationFrozenValue:this.initialValue,!0}else this.frozen=!0,this.parent.animationFrozen=!0,this.parent.animationFrozenValue=this.getProperty().value;return!1}this.duration=this.duration+t;var e=!1;if(this.begin<this.duration){var i=this.calcValue();if(this.attribute("type").hasValue()){var n=this.attribute("type").value;i=n+"("+i+")"}this.getProperty().value=i,e=!0}return e},this.from=this.attribute("from"),this.to=this.attribute("to"),this.values=this.attribute("values"),this.values.hasValue()&&(this.values.value=this.values.value.split(";")),this.progress=function(){var t={progress:(this.duration-this.begin)/(this.maxDuration-this.begin)};if(this.values.hasValue()){var e=t.progress*(this.values.value.length-1),i=Math.floor(e),n=Math.ceil(e);t.from=new r.Property("from",parseFloat(this.values.value[i])),t.to=new r.Property("to",parseFloat(this.values.value[n])),t.progress=(e-i)/(n-i)}else t.from=this.from,t.to=this.to;return t}},r.Element.AnimateBase.prototype=new r.Element.ElementBase,r.Element.animate=function(t){this.base=r.Element.AnimateBase,this.base(t),this.calcValue=function(){var t=this.progress(),e=t.from.numValue()+(t.to.numValue()-t.from.numValue())*t.progress;return e+this.initialUnits}},r.Element.animate.prototype=new r.Element.AnimateBase,r.Element.animateColor=function(e){this.base=r.Element.AnimateBase,this.base(e),this.calcValue=function(){var e=this.progress(),i=new t(e.from.value),n=new t(e.to.value);if(i.ok&&n.ok){var s=i.r+(n.r-i.r)*e.progress,a=i.g+(n.g-i.g)*e.progress,r=i.b+(n.b-i.b)*e.progress;return"rgb("+parseInt(s,10)+","+parseInt(a,10)+","+parseInt(r,10)+")"}return this.attribute("from").value}},r.Element.animateColor.prototype=new r.Element.AnimateBase,r.Element.animateTransform=function(t){this.base=r.Element.AnimateBase,this.base(t),this.calcValue=function(){for(var t=this.progress(),e=r.ToNumberArray(t.from.value),i=r.ToNumberArray(t.to.value),n="",s=0;s<e.length;s++)n+=e[s]+(i[s]-e[s])*t.progress+" ";return n}},r.Element.animateTransform.prototype=new r.Element.animate,r.Element.font=function(t){this.base=r.Element.ElementBase,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.isRTL=!1,this.isArabic=!1,this.fontFace=null,this.missingGlyph=null,this.glyphs=[];for(var e=0;e<this.children.length;e++){var i=this.children[e];"font-face"==i.type?(this.fontFace=i,i.style("font-family").hasValue()&&(r.Definitions[i.style("font-family").value]=this)):"missing-glyph"==i.type?this.missingGlyph=i:"glyph"==i.type&&(""!=i.arabicForm?(this.isRTL=!0,this.isArabic=!0,"undefined"==typeof this.glyphs[i.unicode]&&(this.glyphs[i.unicode]=[]),this.glyphs[i.unicode][i.arabicForm]=i):this.glyphs[i.unicode]=i)}},r.Element.font.prototype=new r.Element.ElementBase,r.Element.fontface=function(t){this.base=r.Element.ElementBase,this.base(t),this.ascent=this.attribute("ascent").value,this.descent=this.attribute("descent").value,this.unitsPerEm=this.attribute("units-per-em").numValue()},r.Element.fontface.prototype=new r.Element.ElementBase,r.Element.missingglyph=function(t){this.base=r.Element.path,this.base(t),this.horizAdvX=0},r.Element.missingglyph.prototype=new r.Element.path,r.Element.glyph=function(t){this.base=r.Element.path,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.unicode=this.attribute("unicode").value,this.arabicForm=this.attribute("arabic-form").value},r.Element.glyph.prototype=new r.Element.path,r.Element.text=function(t){this.captureTextNodes=!0,this.base=r.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t);var e=this.style("dominant-baseline").toTextBaseline();null==e&&(e=this.style("alignment-baseline").toTextBaseline()),null!=e&&(t.textBaseline=e)},this.getBoundingBox=function(){var t=this.attribute("x").toPixels("x"),e=this.attribute("y").toPixels("y"),i=this.parent.style("font-size").numValueOrDefault(r.Font.Parse(r.ctx.font).fontSize);return new r.BoundingBox(t,e-i,t+Math.floor(2*i/3)*this.children[0].getText().length,e)},this.renderChildren=function(t){this.x=this.attribute("x").toPixels("x"),this.y=this.attribute("y").toPixels("y"),this.attribute("dx").hasValue()&&(this.x+=this.attribute("dx").toPixels("x")),this.attribute("dy").hasValue()&&(this.y+=this.attribute("dy").toPixels("y")),this.x+=this.getAnchorDelta(t,this,0);for(var e=0;e<this.children.length;e++)this.renderChild(t,this,e)},this.getAnchorDelta=function(t,e,i){var n=this.style("text-anchor").valueOrDefault("start");if("start"!=n){for(var s=0,a=i;a<e.children.length;a++){var r=e.children[a];if(a>i&&r.attribute("x").hasValue())break;s+=r.measureTextRecursive(t)}return-1*("end"==n?s:s/2)}return 0},this.renderChild=function(t,e,i){var n=e.children[i];n.attribute("x").hasValue()?(n.x=n.attribute("x").toPixels("x")+e.getAnchorDelta(t,e,i),n.attribute("dx").hasValue()&&(n.x+=n.attribute("dx").toPixels("x"))):(n.attribute("dx").hasValue()&&(e.x+=n.attribute("dx").toPixels("x")),n.x=e.x),e.x=n.x+n.measureText(t),n.attribute("y").hasValue()?(n.y=n.attribute("y").toPixels("y"),n.attribute("dy").hasValue()&&(n.y+=n.attribute("dy").toPixels("y"))):(n.attribute("dy").hasValue()&&(e.y+=n.attribute("dy").toPixels("y")),n.y=e.y),e.y=n.y,n.render(t);for(var i=0;i<n.children.length;i++)e.renderChild(t,n,i)}},r.Element.text.prototype=new r.Element.RenderedElementBase,r.Element.TextElementBase=function(t){this.base=r.Element.RenderedElementBase,this.base(t),this.getGlyph=function(t,e,i){var n=e[i],s=null;if(t.isArabic){var a="isolated";(0==i||" "==e[i-1])&&i<e.length-2&&" "!=e[i+1]&&(a="terminal"),i>0&&" "!=e[i-1]&&i<e.length-2&&" "!=e[i+1]&&(a="medial"),i>0&&" "!=e[i-1]&&(i==e.length-1||" "==e[i+1])&&(a="initial"),"undefined"!=typeof t.glyphs[n]&&(s=t.glyphs[n][a],null==s&&"glyph"==t.glyphs[n].type&&(s=t.glyphs[n]))}else s=t.glyphs[n];return null==s&&(s=t.missingGlyph),s},this.renderChildren=function(t){var e=this.parent.style("font-family").getDefinition();if(null==e)""!=t.fillStyle&&t.fillText(r.compressSpaces(this.getText()),this.x,this.y),""!=t.strokeStyle&&t.strokeText(r.compressSpaces(this.getText()),this.x,this.y);else{var i=this.parent.style("font-size").numValueOrDefault(r.Font.Parse(r.ctx.font).fontSize),n=this.parent.style("font-style").valueOrDefault(r.Font.Parse(r.ctx.font).fontStyle),s=this.getText();e.isRTL&&(s=s.split("").reverse().join(""));for(var a=r.ToNumberArray(this.parent.attribute("dx").value),o=0;o<s.length;o++){var l=this.getGlyph(e,s,o),h=i/e.fontFace.unitsPerEm;t.translate(this.x,this.y),t.scale(h,-h);var u=t.lineWidth;t.lineWidth=t.lineWidth*e.fontFace.unitsPerEm/i,"italic"==n&&t.transform(1,0,.4,1,0,0),l.render(t),"italic"==n&&t.transform(1,0,-.4,1,0,0),t.lineWidth=u,t.scale(1/h,-1/h),t.translate(-this.x,-this.y),this.x+=i*(l.horizAdvX||e.horizAdvX)/e.fontFace.unitsPerEm,"undefined"==typeof a[o]||isNaN(a[o])||(this.x+=a[o])}}},this.getText=function(){},this.measureTextRecursive=function(t){for(var e=this.measureText(t),i=0;i<this.children.length;i++)e+=this.children[i].measureTextRecursive(t);return e},this.measureText=function(t){var e=this.parent.style("font-family").getDefinition();if(null!=e){var i=this.parent.style("font-size").numValueOrDefault(r.Font.Parse(r.ctx.font).fontSize),n=0,s=this.getText();e.isRTL&&(s=s.split("").reverse().join(""));for(var a=r.ToNumberArray(this.parent.attribute("dx").value),o=0;o<s.length;o++){var l=this.getGlyph(e,s,o);n+=(l.horizAdvX||e.horizAdvX)*i/e.fontFace.unitsPerEm,"undefined"==typeof a[o]||isNaN(a[o])||(n+=a[o])}return n}var h=r.compressSpaces(this.getText());if(!t.measureText)return 10*h.length;t.save(),this.setContext(t);var u=t.measureText(h).width;return t.restore(),u}},r.Element.TextElementBase.prototype=new r.Element.RenderedElementBase,r.Element.tspan=function(t){this.captureTextNodes=!0,this.base=r.Element.TextElementBase,this.base(t),this.text=r.compressSpaces(t.value||t.text||t.textContent||""),this.getText=function(){return this.children.length>0?"":this.text}},r.Element.tspan.prototype=new r.Element.TextElementBase,r.Element.tref=function(t){this.base=r.Element.TextElementBase,this.base(t),this.getText=function(){var t=this.getHrefAttribute().getDefinition();return null!=t?t.children[0].getText():void 0}},r.Element.tref.prototype=new r.Element.TextElementBase,r.Element.a=function(t){this.base=r.Element.TextElementBase,this.base(t),this.hasText=t.childNodes.length>0;for(var e=0;e<t.childNodes.length;e++)3!=t.childNodes[e].nodeType&&(this.hasText=!1);this.text=this.hasText?t.childNodes[0].value:"",this.getText=function(){return this.text},this.baseRenderChildren=this.renderChildren,this.renderChildren=function(t){if(this.hasText){this.baseRenderChildren(t);var e=new r.Property("fontSize",r.Font.Parse(r.ctx.font).fontSize);r.Mouse.checkBoundingBox(this,new r.BoundingBox(this.x,this.y-e.toPixels("y"),this.x+this.measureText(t),this.y))}else if(this.children.length>0){var i=new r.Element.g;i.children=this.children,i.parent=this,i.render(t)}},this.onclick=function(){window.open(this.getHrefAttribute().value)},this.onmousemove=function(){r.ctx.canvas.style.cursor="pointer"}},r.Element.a.prototype=new r.Element.TextElementBase,r.Element.image=function(t){this.base=r.Element.RenderedElementBase,this.base(t);var e=this.getHrefAttribute().value;if(""!=e){var i=e.match(/\.svg$/);if(r.Images.push(this),this.loaded=!1,i)this.img=r.ajax(e),this.loaded=!0;else{this.img=document.createElement("img"),1==r.opts.useCORS&&(this.img.crossOrigin="Anonymous");var n=this;this.img.onload=function(){n.loaded=!0},this.img.onerror=function(){r.log('ERROR: image "'+e+'" not found'),n.loaded=!0},this.img.src=e}this.renderChildren=function(t){var e=this.attribute("x").toPixels("x"),n=this.attribute("y").toPixels("y"),s=this.attribute("width").toPixels("x"),a=this.attribute("height").toPixels("y");0!=s&&0!=a&&(t.save(),i?t.drawSvg(this.img,e,n,s,a):(t.translate(e,n),r.AspectRatio(t,this.attribute("preserveAspectRatio").value,s,this.img.width,a,this.img.height,0,0),t.drawImage(this.img,0,0)),t.restore())},this.getBoundingBox=function(){var t=this.attribute("x").toPixels("x"),e=this.attribute("y").toPixels("y"),i=this.attribute("width").toPixels("x"),n=this.attribute("height").toPixels("y");return new r.BoundingBox(t,e,t+i,e+n)}}},r.Element.image.prototype=new r.Element.RenderedElementBase,r.Element.g=function(t){this.base=r.Element.RenderedElementBase,this.base(t),this.getBoundingBox=function(){for(var t=new r.BoundingBox,e=0;e<this.children.length;e++)t.addBoundingBox(this.children[e].getBoundingBox());return t}},r.Element.g.prototype=new r.Element.RenderedElementBase,r.Element.symbol=function(t){this.base=r.Element.RenderedElementBase,this.base(t),this.render=function(){}},r.Element.symbol.prototype=new r.Element.RenderedElementBase,r.Element.style=function(t){this.base=r.Element.ElementBase,this.base(t);for(var e="",i=0;i<t.childNodes.length;i++)e+=t.childNodes[i].data;e=e.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,""),e=r.compressSpaces(e);for(var s=e.split("}"),i=0;i<s.length;i++)if(""!=r.trim(s[i]))for(var a=s[i].split("{"),o=a[0].split(","),l=a[1].split(";"),h=0;h<o.length;h++){var u=r.trim(o[h]);if(""!=u){for(var c=r.Styles[u]||{},f=0;f<l.length;f++){var p=l[f].indexOf(":"),m=l[f].substr(0,p),d=l[f].substr(p+1,l[f].length-p);null!=m&&null!=d&&(c[r.trim(m)]=new r.Property(r.trim(m),r.trim(d)))}if(r.Styles[u]=c,r.StylesSpecificity[u]=n(u),"@font-face"==u)for(var y=c["font-family"].value.replace(/"/g,""),v=c.src.value.split(","),g=0;g<v.length;g++)if(v[g].indexOf('format("svg")')>0)for(var x=v[g].indexOf("url"),b=v[g].indexOf(")",x),E=v[g].substr(x+5,b-x-6),P=r.parseXml(r.ajax(E)),w=P.getElementsByTagName("font"),B=0;B<w.length;B++){var C=r.CreateElement(w[B]);r.Definitions[y]=C}}}},r.Element.style.prototype=new r.Element.ElementBase,r.Element.use=function(t){this.base=r.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t),this.attribute("x").hasValue()&&t.translate(this.attribute("x").toPixels("x"),0),this.attribute("y").hasValue()&&t.translate(0,this.attribute("y").toPixels("y"))};var e=this.getHrefAttribute().getDefinition();this.path=function(t){null!=e&&e.path(t)},this.getBoundingBox=function(){return null!=e?e.getBoundingBox():void 0},this.renderChildren=function(t){if(null!=e){var i=e;"symbol"==e.type&&(i=new r.Element.svg,i.type="svg",i.attributes.viewBox=new r.Property("viewBox",e.attribute("viewBox").value),i.attributes.preserveAspectRatio=new r.Property("preserveAspectRatio",e.attribute("preserveAspectRatio").value),i.attributes.overflow=new r.Property("overflow",e.attribute("overflow").value),i.children=e.children),"svg"==i.type&&(this.attribute("width").hasValue()&&(i.attributes.width=new r.Property("width",this.attribute("width").value)),this.attribute("height").hasValue()&&(i.attributes.height=new r.Property("height",this.attribute("height").value)));var n=i.parent;i.parent=null,i.render(t),i.parent=n}}},r.Element.use.prototype=new r.Element.RenderedElementBase,r.Element.mask=function(t){this.base=r.Element.ElementBase,this.base(t),this.apply=function(t,e){var i=this.attribute("x").toPixels("x"),n=this.attribute("y").toPixels("y"),s=this.attribute("width").toPixels("x"),a=this.attribute("height").toPixels("y");if(0==s&&0==a){for(var o=new r.BoundingBox,l=0;l<this.children.length;l++)o.addBoundingBox(this.children[l].getBoundingBox());var i=Math.floor(o.x1),n=Math.floor(o.y1),s=Math.floor(o.width()),a=Math.floor(o.height())}var h=e.attribute("mask").value;e.attribute("mask").value="";var u=document.createElement("canvas");u.width=i+s,u.height=n+a;var c=u.getContext("2d");this.renderChildren(c);var f=document.createElement("canvas");f.width=i+s,f.height=n+a;var p=f.getContext("2d");e.render(p),p.globalCompositeOperation="destination-in",p.fillStyle=c.createPattern(u,"no-repeat"),p.fillRect(0,0,i+s,n+a),t.fillStyle=p.createPattern(f,"no-repeat"),t.fillRect(0,0,i+s,n+a),e.attribute("mask").value=h},this.render=function(){}},r.Element.mask.prototype=new r.Element.ElementBase,r.Element.clipPath=function(t){this.base=r.Element.ElementBase,this.base(t),this.apply=function(t){var e=CanvasRenderingContext2D.prototype.beginPath;CanvasRenderingContext2D.prototype.beginPath=function(){};var i=CanvasRenderingContext2D.prototype.closePath;CanvasRenderingContext2D.prototype.closePath=function(){},e.call(t);for(var n=0;n<this.children.length;n++){var s=this.children[n];if("undefined"!=typeof s.path){var a=null;s.style("transform",!1,!0).hasValue()&&(a=new r.Transform(s.style("transform",!1,!0).value),a.apply(t)),s.path(t),CanvasRenderingContext2D.prototype.closePath=i,a&&a.unapply(t)}}i.call(t),t.clip(),CanvasRenderingContext2D.prototype.beginPath=e,CanvasRenderingContext2D.prototype.closePath=i},this.render=function(){}},r.Element.clipPath.prototype=new r.Element.ElementBase,r.Element.filter=function(t){this.base=r.Element.ElementBase,this.base(t),this.apply=function(t,e){var i=e.getBoundingBox(),n=Math.floor(i.x1),s=Math.floor(i.y1),a=Math.floor(i.width()),r=Math.floor(i.height()),o=e.style("filter").value;e.style("filter").value="";for(var l=0,h=0,u=0;u<this.children.length;u++){var c=this.children[u].extraFilterDistance||0;l=Math.max(l,c),h=Math.max(h,c)}var f=document.createElement("canvas");f.width=a+2*l,f.height=r+2*h;var p=f.getContext("2d");p.translate(-n+l,-s+h),e.render(p);for(var u=0;u<this.children.length;u++)"function"==typeof this.children[u].apply&&this.children[u].apply(p,0,0,a+2*l,r+2*h);t.drawImage(f,0,0,a+2*l,r+2*h,n-l,s-h,a+2*l,r+2*h),e.style("filter",!0).value=o},this.render=function(){}},r.Element.filter.prototype=new r.Element.ElementBase,r.Element.feMorphology=function(t){this.base=r.Element.ElementBase,this.base(t),this.apply=function(){}},r.Element.feMorphology.prototype=new r.Element.ElementBase,r.Element.feComposite=function(t){this.base=r.Element.ElementBase,this.base(t),this.apply=function(){}},r.Element.feComposite.prototype=new r.Element.ElementBase,r.Element.feColorMatrix=function(t){function e(t,e,i,n,s,a){return t[i*n*4+4*e+a]}function i(t,e,i,n,s,a,r){t[i*n*4+4*e+a]=r}function n(t,e){var i=s[t];return i*(0>i?e-255:e)}this.base=r.Element.ElementBase,this.base(t);var s=r.ToNumberArray(this.attribute("values").value);switch(this.attribute("type").valueOrDefault("matrix")){case"saturate":var a=s[0];s=[.213+.787*a,.715-.715*a,.072-.072*a,0,0,.213-.213*a,.715+.285*a,.072-.072*a,0,0,.213-.213*a,.715-.715*a,.072+.928*a,0,0,0,0,0,1,0,0,0,0,0,1];break;case"hueRotate":var o=s[0]*Math.PI/180,l=function(t,e,i){return t+Math.cos(o)*e+Math.sin(o)*i};s=[l(.213,.787,-.213),l(.715,-.715,-.715),l(.072,-.072,.928),0,0,l(.213,-.213,.143),l(.715,.285,.14),l(.072,-.072,-.283),0,0,l(.213,-.213,-.787),l(.715,-.715,.715),l(.072,.928,.072),0,0,0,0,0,1,0,0,0,0,0,1];break;case"luminanceToAlpha":s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2125,.7154,.0721,0,0,0,0,0,0,1]}this.apply=function(t,s,a,r,o){for(var l=t.getImageData(0,0,r,o),a=0;o>a;a++)for(var s=0;r>s;s++){var h=e(l.data,s,a,r,o,0),u=e(l.data,s,a,r,o,1),c=e(l.data,s,a,r,o,2),f=e(l.data,s,a,r,o,3);i(l.data,s,a,r,o,0,n(0,h)+n(1,u)+n(2,c)+n(3,f)+n(4,1)),i(l.data,s,a,r,o,1,n(5,h)+n(6,u)+n(7,c)+n(8,f)+n(9,1)),i(l.data,s,a,r,o,2,n(10,h)+n(11,u)+n(12,c)+n(13,f)+n(14,1)),i(l.data,s,a,r,o,3,n(15,h)+n(16,u)+n(17,c)+n(18,f)+n(19,1))}t.clearRect(0,0,r,o),t.putImageData(l,0,0)}},r.Element.feColorMatrix.prototype=new r.Element.ElementBase,r.Element.feGaussianBlur=function(t){this.base=r.Element.ElementBase,this.base(t),this.blurRadius=Math.floor(this.attribute("stdDeviation").numValue()),this.extraFilterDistance=this.blurRadius,this.apply=function(t,i,n,s,a){return"undefined"==typeof e.canvasRGBA?void r.log("ERROR: StackBlur.js must be included for blur to work"):(t.canvas.id=r.UniqueId(),t.canvas.style.display="none",document.body.appendChild(t.canvas),e.canvasRGBA(t.canvas.id,i,n,s,a,this.blurRadius),void document.body.removeChild(t.canvas))}},r.Element.feGaussianBlur.prototype=new r.Element.ElementBase,r.Element.title=function(){},r.Element.title.prototype=new r.Element.ElementBase,r.Element.desc=function(){},r.Element.desc.prototype=new r.Element.ElementBase,r.Element.MISSING=function(t){r.log("ERROR: Element '"+t.nodeName+"' not yet implemented.")},r.Element.MISSING.prototype=new r.Element.ElementBase,r.CreateElement=function(t){var e=t.nodeName.replace(/^[^:]+:/,"");e=e.replace(/\-/g,"");var i=null;return i="undefined"!=typeof r.Element[e]?new r.Element[e](t):new r.Element.MISSING(t),i.type=t.nodeName,i},r.load=function(t,e){r.loadXml(t,r.ajax(e))},r.loadXml=function(t,e){r.loadXmlDoc(t,r.parseXml(e))},r.loadXmlDoc=function(t,e){r.init(t);var i=function(e){for(var i=t.canvas;i;)e.x-=i.offsetLeft,e.y-=i.offsetTop,i=i.offsetParent;return window.scrollX&&(e.x+=window.scrollX),window.scrollY&&(e.y+=window.scrollY),e};1!=r.opts.ignoreMouse&&(t.canvas.onclick=function(t){var e=i(new r.Point(null!=t?t.clientX:event.clientX,null!=t?t.clientY:event.clientY));r.Mouse.onclick(e.x,e.y)},t.canvas.onmousemove=function(t){var e=i(new r.Point(null!=t?t.clientX:event.clientX,null!=t?t.clientY:event.clientY));r.Mouse.onmousemove(e.x,e.y)});var n=r.CreateElement(e.documentElement);n.root=!0,n.addStylesFromStyleDefinition();var s=!0,a=function(){r.ViewPort.Clear(),t.canvas.parentNode&&r.ViewPort.SetCurrent(t.canvas.parentNode.clientWidth,t.canvas.parentNode.clientHeight),1!=r.opts.ignoreDimensions&&(n.style("width").hasValue()&&(t.canvas.width=n.style("width").toPixels("x"),t.canvas.style.width=t.canvas.width+"px"),n.style("height").hasValue()&&(t.canvas.height=n.style("height").toPixels("y"),t.canvas.style.height=t.canvas.height+"px"));var i=t.canvas.clientWidth||t.canvas.width,a=t.canvas.clientHeight||t.canvas.height;if(1==r.opts.ignoreDimensions&&n.style("width").hasValue()&&n.style("height").hasValue()&&(i=n.style("width").toPixels("x"),a=n.style("height").toPixels("y")),r.ViewPort.SetCurrent(i,a),null!=r.opts.offsetX&&(n.attribute("x",!0).value=r.opts.offsetX),null!=r.opts.offsetY&&(n.attribute("y",!0).value=r.opts.offsetY),null!=r.opts.scaleWidth||null!=r.opts.scaleHeight){var o=null,l=null,h=r.ToNumberArray(n.attribute("viewBox").value);null!=r.opts.scaleWidth&&(n.attribute("width").hasValue()?o=n.attribute("width").toPixels("x")/r.opts.scaleWidth:isNaN(h[2])||(o=h[2]/r.opts.scaleWidth)),null!=r.opts.scaleHeight&&(n.attribute("height").hasValue()?l=n.attribute("height").toPixels("y")/r.opts.scaleHeight:isNaN(h[3])||(l=h[3]/r.opts.scaleHeight)),null==o&&(o=l),null==l&&(l=o),n.attribute("width",!0).value=r.opts.scaleWidth,n.attribute("height",!0).value=r.opts.scaleHeight,n.style("transform",!0,!0).value+=" scale("+1/o+","+1/l+")"}1!=r.opts.ignoreClear&&t.clearRect(0,0,i,a),n.render(t),s&&(s=!1,"function"==typeof r.opts.renderCallback&&r.opts.renderCallback(e))},o=!0;r.ImagesLoaded()&&(o=!1,a()),r.intervalID=setInterval(function(){var t=!1;if(o&&r.ImagesLoaded()&&(o=!1,t=!0),1!=r.opts.ignoreMouse&&(t|=r.Mouse.hasEvents()),1!=r.opts.ignoreAnimation)for(var e=0;e<r.Animations.length;e++)t|=r.Animations[e].update(1e3/r.FRAMERATE);"function"==typeof r.opts.forceRedraw&&1==r.opts.forceRedraw()&&(t=!0),t&&(a(),r.Mouse.runEvents())},1e3/r.FRAMERATE)},r.stop=function(){r.intervalID&&clearInterval(r.intervalID)},r.Mouse=new function(){this.events=[],this.hasEvents=function(){return 0!=this.events.length},this.onclick=function(t,e){this.events.push({type:"onclick",x:t,y:e,run:function(t){t.onclick&&t.onclick()}})},this.onmousemove=function(t,e){this.events.push({type:"onmousemove",x:t,y:e,run:function(t){t.onmousemove&&t.onmousemove()}})},this.eventElements=[],this.checkPath=function(t,e){for(var i=0;i<this.events.length;i++){var n=this.events[i];e.isPointInPath&&e.isPointInPath(n.x,n.y)&&(this.eventElements[i]=t)}},this.checkBoundingBox=function(t,e){for(var i=0;i<this.events.length;i++){var n=this.events[i];e.isPointInBox(n.x,n.y)&&(this.eventElements[i]=t)}},this.runEvents=function(){r.ctx.canvas.style.cursor="";for(var t=0;t<this.events.length;t++)for(var e=this.events[t],i=this.eventElements[t];i;)e.run(i),i=i.parent;this.events=[],this.eventElements=[]}},r}var a,r=function(t,e,i){if(null!=t||null!=e||null!=i){"string"==typeof t&&(t=document.getElementById(t)),null!=t.svg&&t.svg.stop();var n=s(i||{});(1!=t.childNodes.length||"OBJECT"!=t.childNodes[0].nodeName)&&(t.svg=n);var a=t.getContext("2d");"undefined"!=typeof e.documentElement?n.loadXmlDoc(a,e):"<"==e.substr(0,1)?n.loadXml(a,e):n.load(a,e)}else for(var o=document.querySelectorAll("svg"),l=0;l<o.length;l++){var h=o[l],u=document.createElement("canvas");u.width=h.clientWidth,u.height=h.clientHeight,h.parentNode.insertBefore(u,h),h.parentNode.removeChild(h);var c=document.createElement("div");c.appendChild(h),r(u,c.innerHTML)}};"undefined"!=typeof Element.prototype.matches?a=function(t,e){return t.matches(e)}:"undefined"!=typeof Element.prototype.webkitMatchesSelector?a=function(t,e){return t.webkitMatchesSelector(e)}:"undefined"!=typeof Element.prototype.mozMatchesSelector?a=function(t,e){return t.mozMatchesSelector(e)}:"undefined"!=typeof Element.prototype.msMatchesSelector?a=function(t,e){return t.msMatchesSelector(e)}:"undefined"!=typeof Element.prototype.oMatchesSelector?a=function(t,e){return t.oMatchesSelector(e)}:(("function"==typeof jQuery||"function"==typeof Zepto)&&(a=function(t,e){return $(t).is(e)}),"undefined"==typeof a&&(a=Sizzle.matchesSelector));var o=/(\[[^\]]+\])/g,l=/(#[^\s\+>~\.\[:]+)/g,h=/(\.[^\s\+>~\.\[:]+)/g,u=/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,c=/(:[\w-]+\([^\)]*\))/gi,f=/(:[^\s\+>~\.\[:]+)/g,p=/([^\s\+>~\.\[:]+)/g;return"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.drawSvg=function(t,e,i,n,s){r(this.canvas,t,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:e,offsetY:i,scaleWidth:n,scaleHeight:s})}),r});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:49:"/local/templates/hd/js/rgbcolor.js?15082775007901";s:6:"source";s:34:"/local/templates/hd/js/rgbcolor.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 * @license Use it if you like it
 */
 
(function ( global ) {
 
	function RGBColor(color_string)
	{
		this.ok = false;

		// strip any leading #
		if (color_string.charAt(0) == '#') { // remove # if any
			color_string = color_string.substr(1,6);
		}

		color_string = color_string.replace(/ /g,'');
		color_string = color_string.toLowerCase();

		// before getting into regexps, try simple matches
		// and overwrite the input
		var simple_colors = {
			aliceblue: 'f0f8ff',
			antiquewhite: 'faebd7',
			aqua: '00ffff',
			aquamarine: '7fffd4',
			azure: 'f0ffff',
			beige: 'f5f5dc',
			bisque: 'ffe4c4',
			black: '000000',
			blanchedalmond: 'ffebcd',
			blue: '0000ff',
			blueviolet: '8a2be2',
			brown: 'a52a2a',
			burlywood: 'deb887',
			cadetblue: '5f9ea0',
			chartreuse: '7fff00',
			chocolate: 'd2691e',
			coral: 'ff7f50',
			cornflowerblue: '6495ed',
			cornsilk: 'fff8dc',
			crimson: 'dc143c',
			cyan: '00ffff',
			darkblue: '00008b',
			darkcyan: '008b8b',
			darkgoldenrod: 'b8860b',
			darkgray: 'a9a9a9',
			darkgreen: '006400',
			darkkhaki: 'bdb76b',
			darkmagenta: '8b008b',
			darkolivegreen: '556b2f',
			darkorange: 'ff8c00',
			darkorchid: '9932cc',
			darkred: '8b0000',
			darksalmon: 'e9967a',
			darkseagreen: '8fbc8f',
			darkslateblue: '483d8b',
			darkslategray: '2f4f4f',
			darkturquoise: '00ced1',
			darkviolet: '9400d3',
			deeppink: 'ff1493',
			deepskyblue: '00bfff',
			dimgray: '696969',
			dodgerblue: '1e90ff',
			feldspar: 'd19275',
			firebrick: 'b22222',
			floralwhite: 'fffaf0',
			forestgreen: '228b22',
			fuchsia: 'ff00ff',
			gainsboro: 'dcdcdc',
			ghostwhite: 'f8f8ff',
			gold: 'ffd700',
			goldenrod: 'daa520',
			gray: '808080',
			green: '008000',
			greenyellow: 'adff2f',
			honeydew: 'f0fff0',
			hotpink: 'ff69b4',
			indianred : 'cd5c5c',
			indigo : '4b0082',
			ivory: 'fffff0',
			khaki: 'f0e68c',
			lavender: 'e6e6fa',
			lavenderblush: 'fff0f5',
			lawngreen: '7cfc00',
			lemonchiffon: 'fffacd',
			lightblue: 'add8e6',
			lightcoral: 'f08080',
			lightcyan: 'e0ffff',
			lightgoldenrodyellow: 'fafad2',
			lightgrey: 'd3d3d3',
			lightgreen: '90ee90',
			lightpink: 'ffb6c1',
			lightsalmon: 'ffa07a',
			lightseagreen: '20b2aa',
			lightskyblue: '87cefa',
			lightslateblue: '8470ff',
			lightslategray: '778899',
			lightsteelblue: 'b0c4de',
			lightyellow: 'ffffe0',
			lime: '00ff00',
			limegreen: '32cd32',
			linen: 'faf0e6',
			magenta: 'ff00ff',
			maroon: '800000',
			mediumaquamarine: '66cdaa',
			mediumblue: '0000cd',
			mediumorchid: 'ba55d3',
			mediumpurple: '9370d8',
			mediumseagreen: '3cb371',
			mediumslateblue: '7b68ee',
			mediumspringgreen: '00fa9a',
			mediumturquoise: '48d1cc',
			mediumvioletred: 'c71585',
			midnightblue: '191970',
			mintcream: 'f5fffa',
			mistyrose: 'ffe4e1',
			moccasin: 'ffe4b5',
			navajowhite: 'ffdead',
			navy: '000080',
			oldlace: 'fdf5e6',
			olive: '808000',
			olivedrab: '6b8e23',
			orange: 'ffa500',
			orangered: 'ff4500',
			orchid: 'da70d6',
			palegoldenrod: 'eee8aa',
			palegreen: '98fb98',
			paleturquoise: 'afeeee',
			palevioletred: 'd87093',
			papayawhip: 'ffefd5',
			peachpuff: 'ffdab9',
			peru: 'cd853f',
			pink: 'ffc0cb',
			plum: 'dda0dd',
			powderblue: 'b0e0e6',
			purple: '800080',
			red: 'ff0000',
			rosybrown: 'bc8f8f',
			royalblue: '4169e1',
			saddlebrown: '8b4513',
			salmon: 'fa8072',
			sandybrown: 'f4a460',
			seagreen: '2e8b57',
			seashell: 'fff5ee',
			sienna: 'a0522d',
			silver: 'c0c0c0',
			skyblue: '87ceeb',
			slateblue: '6a5acd',
			slategray: '708090',
			snow: 'fffafa',
			springgreen: '00ff7f',
			steelblue: '4682b4',
			tan: 'd2b48c',
			teal: '008080',
			thistle: 'd8bfd8',
			tomato: 'ff6347',
			turquoise: '40e0d0',
			violet: 'ee82ee',
			violetred: 'd02090',
			wheat: 'f5deb3',
			white: 'ffffff',
			whitesmoke: 'f5f5f5',
			yellow: 'ffff00',
			yellowgreen: '9acd32'
		};
		for (var key in simple_colors) {
			if (color_string == key) {
				color_string = simple_colors[key];
			}
		}
		// emd of simple type-in colors

		// array of color definition objects
		var color_defs = [
			{
				re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
				example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
				process: function (bits){
					return [
						parseInt(bits[1]),
						parseInt(bits[2]),
						parseInt(bits[3])
					];
				}
			},
			{
				re: /^(\w{2})(\w{2})(\w{2})$/,
				example: ['#00ff00', '336699'],
				process: function (bits){
					return [
						parseInt(bits[1], 16),
						parseInt(bits[2], 16),
						parseInt(bits[3], 16)
					];
				}
			},
			{
				re: /^(\w{1})(\w{1})(\w{1})$/,
				example: ['#fb0', 'f0f'],
				process: function (bits){
					return [
						parseInt(bits[1] + bits[1], 16),
						parseInt(bits[2] + bits[2], 16),
						parseInt(bits[3] + bits[3], 16)
					];
				}
			}
		];

		// search through the definitions to find a match
		for (var i = 0; i < color_defs.length; i++) {
			var re = color_defs[i].re;
			var processor = color_defs[i].process;
			var bits = re.exec(color_string);
			if (bits) {
				channels = processor(bits);
				this.r = channels[0];
				this.g = channels[1];
				this.b = channels[2];
				this.ok = true;
			}

		}

		// validate/cleanup values
		this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
		this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
		this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);

		// some getters
		this.toRGB = function () {
			return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
		}
		this.toHex = function () {
			var r = this.r.toString(16);
			var g = this.g.toString(16);
			var b = this.b.toString(16);
			if (r.length == 1) r = '0' + r;
			if (g.length == 1) g = '0' + g;
			if (b.length == 1) b = '0' + b;
			return '#' + r + g + b;
		}

		// help
		this.getHelpXML = function () {

			var examples = new Array();
			// add regexps
			for (var i = 0; i < color_defs.length; i++) {
				var example = color_defs[i].example;
				for (var j = 0; j < example.length; j++) {
					examples[examples.length] = example[j];
				}
			}
			// add type-in colors
			for (var sc in simple_colors) {
				examples[examples.length] = sc;
			}

			var xml = document.createElement('ul');
			xml.setAttribute('id', 'rgbcolor-examples');
			for (var i = 0; i < examples.length; i++) {
				try {
					var list_item = document.createElement('li');
					var list_color = new RGBColor(examples[i]);
					var example_div = document.createElement('div');
					example_div.style.cssText =
							'margin: 3px; '
							+ 'border: 1px solid black; '
							+ 'background:' + list_color.toHex() + '; '
							+ 'color:' + list_color.toHex()
					;
					example_div.appendChild(document.createTextNode('test'));
					var list_item_value = document.createTextNode(
						' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex()
					);
					list_item.appendChild(example_div);
					list_item.appendChild(list_item_value);
					xml.appendChild(list_item);

				} catch(e){}
			}
			return xml;

		}

	}

    // export as AMD...
    if ( typeof define !== 'undefined' && define.amd ) {
        define( function () { return RGBColor; });
    }

    // ...or as browserify
    else if ( typeof module !== 'undefined' && module.exports ) {
        module.exports = RGBColor;
    }

    global.RGBColor = RGBColor;

}( typeof window !== 'undefined' ? window : this ));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/local/templates/hd/js/StackBlur.js?150827750018417";s:6:"source";s:35:"/local/templates/hd/js/StackBlur.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*

StackBlur - a fast almost Gaussian Blur For Canvas

Version: 	0.5
Author:		Mario Klingemann
Contact: 	mario@quasimondo.com
Website:	http://www.quasimondo.com/StackBlurForCanvas
Twitter:	@quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr: 
https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

(function ( global ) {

	var mul_table = [
			512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
			454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
			482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
			437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
			497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
			320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
			446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
			329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
			505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
			399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
			324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
			268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
			451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
			385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
			332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
			289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];
			
	   
	var shg_table = [
			 9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 
			17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 
			19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
			20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
			21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
			21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 
			22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
			22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 
			23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
			23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
			23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 
			23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 
			24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];

	function premultiplyAlpha(imageData)
	{
		var pixels = imageData.data;
		var size = imageData.width * imageData.height * 4;
		
		for (var i=0; i<size; i+=4)
		{
			var a = pixels[i+3] / 255;
			pixels[i  ] *= a;
			pixels[i+1] *= a;
			pixels[i+2] *= a;
		}
	}

	function unpremultiplyAlpha(imageData)
	{
		var pixels = imageData.data;
		var size = imageData.width * imageData.height * 4;
		
		for (var i=0; i<size; i+=4)
		{
			var a = pixels[i+3];
			if (a != 0)
			{
				a = 255 / a;
				pixels[i  ] *= a;
				pixels[i+1] *= a;
				pixels[i+2] *= a;
			}
		}
	}

	function stackBlurImage( imageID, canvasID, radius, blurAlphaChannel )
	{
				
		var img = document.getElementById( imageID );
		var w = img.naturalWidth;
		var h = img.naturalHeight;
		   
		var canvas = document.getElementById( canvasID );
		  
		canvas.style.width  = w + "px";
		canvas.style.height = h + "px";
		canvas.width = w;
		canvas.height = h;
		
		var context = canvas.getContext("2d");
		context.clearRect( 0, 0, w, h );
		context.drawImage( img, 0, 0 );

		if ( isNaN(radius) || radius < 1 ) return;
		
		if ( blurAlphaChannel )
			stackBlurCanvasRGBA( canvasID, 0, 0, w, h, radius );
		else 
			stackBlurCanvasRGB( canvasID, 0, 0, w, h, radius );
	}


	function stackBlurCanvasRGBA( id, top_x, top_y, width, height, radius )
	{
		if ( isNaN(radius) || radius < 1 ) return;
		radius |= 0;
		
		var canvas  = document.getElementById( id );
		var context = canvas.getContext("2d");
		var imageData;
		
		try {
		  try {
			imageData = context.getImageData( top_x, top_y, width, height );
		  } catch(e) {
		  
			// NOTE: this part is supposedly only needed if you want to work with local files
			// so it might be okay to remove the whole try/catch block and just use
			// imageData = context.getImageData( top_x, top_y, width, height );
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
				imageData = context.getImageData( top_x, top_y, width, height );
			} catch(e) {
				alert("Cannot access local image");
				throw new Error("unable to access local image data: " + e);
				return;
			}
		  }
		} catch(e) {
		  alert("Cannot access image");
		  throw new Error("unable to access image data: " + e);
		}
		
		premultiplyAlpha(imageData);
		
		var pixels = imageData.data;
				
		var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, 
		r_out_sum, g_out_sum, b_out_sum, a_out_sum,
		r_in_sum, g_in_sum, b_in_sum, a_in_sum, 
		pr, pg, pb, pa, rbs;
				
		var div = radius + radius + 1;
		var w4 = width << 2;
		var widthMinus1  = width - 1;
		var heightMinus1 = height - 1;
		var radiusPlus1  = radius + 1;
		var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;
		
		var stackStart = new BlurStack();
		var stack = stackStart;
		for ( i = 1; i < div; i++ )
		{
			stack = stack.next = new BlurStack();
			if ( i == radiusPlus1 ) var stackEnd = stack;
		}
		stack.next = stackStart;
		var stackIn = null;
		var stackOut = null;
		
		yw = yi = 0;
		
		var mul_sum = mul_table[radius];
		var shg_sum = shg_table[radius];
		
		for ( y = 0; y < height; y++ )
		{
			r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
			
			r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
			g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
			b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
			a_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );
			
			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			a_sum += sumFactor * pa;
			
			stack = stackStart;
			
			for( i = 0; i < radiusPlus1; i++ )
			{
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack.a = pa;
				stack = stack.next;
			}
			
			for( i = 1; i < radiusPlus1; i++ )
			{
				p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
				r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
				g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
				b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
				a_sum += ( stack.a = ( pa = pixels[p+3])) * rbs;
				
				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				a_in_sum += pa;
				
				stack = stack.next;
			}
			
			stackIn = stackStart;
			stackOut = stackEnd;
			for ( x = 0; x < width; x++ )
			{
				pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
				pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
				pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;
				pixels[yi+3] = (a_sum * mul_sum) >> shg_sum;
				
				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				a_sum -= a_out_sum;
				
				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				a_out_sum -= stackIn.a;
				
				p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;
				
				r_in_sum += ( stackIn.r = pixels[p]);
				g_in_sum += ( stackIn.g = pixels[p+1]);
				b_in_sum += ( stackIn.b = pixels[p+2]);
				a_in_sum += ( stackIn.a = pixels[p+3]);
				
				r_sum += r_in_sum;
				g_sum += g_in_sum;
				b_sum += b_in_sum;
				a_sum += a_in_sum;
				
				stackIn = stackIn.next;
				
				r_out_sum += ( pr = stackOut.r );
				g_out_sum += ( pg = stackOut.g );
				b_out_sum += ( pb = stackOut.b );
				a_out_sum += ( pa = stackOut.a );
				
				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				a_in_sum -= pa;
				
				stackOut = stackOut.next;

				yi += 4;
			}
			yw += width;
		}

		
		for ( x = 0; x < width; x++ )
		{
			g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
			
			yi = x << 2;
			r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
			g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
			b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
			a_out_sum = radiusPlus1 * ( pa = pixels[yi+3]);
			
			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			a_sum += sumFactor * pa;
			
			stack = stackStart;
			
			for( i = 0; i < radiusPlus1; i++ )
			{
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack.a = pa;
				stack = stack.next;
			}
			
			yp = width;
			
			for( i = 1; i <= radius; i++ )
			{
				yi = ( yp + x ) << 2;
				
				r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
				g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
				b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
				a_sum += ( stack.a = ( pa = pixels[yi+3])) * rbs;
			   
				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				a_in_sum += pa;
				
				stack = stack.next;
			
				if( i < heightMinus1 )
				{
					yp += width;
				}
			}
			
			yi = x;
			stackIn = stackStart;
			stackOut = stackEnd;
			for ( y = 0; y < height; y++ )
			{
				p = yi << 2;
				pixels[p]   = (r_sum * mul_sum) >> shg_sum;
				pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
				pixels[p+2] = (b_sum * mul_sum) >> shg_sum;
				pixels[p+3] = (a_sum * mul_sum) >> shg_sum;
				
				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				a_sum -= a_out_sum;
			   
				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				a_out_sum -= stackIn.a;
				
				p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;
				
				r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
				g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
				b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
				a_sum += ( a_in_sum += ( stackIn.a = pixels[p+3]));
			   
				stackIn = stackIn.next;
				
				r_out_sum += ( pr = stackOut.r );
				g_out_sum += ( pg = stackOut.g );
				b_out_sum += ( pb = stackOut.b );
				a_out_sum += ( pa = stackOut.a );
				
				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				a_in_sum -= pa;
				
				stackOut = stackOut.next;
				
				yi += width;
			}
		}
		
		unpremultiplyAlpha(imageData);
		
		context.putImageData( imageData, top_x, top_y );
	}


	function stackBlurCanvasRGB( id, top_x, top_y, width, height, radius )
	{
		if ( isNaN(radius) || radius < 1 ) return;
		radius |= 0;
		
		var canvas  = document.getElementById( id );
		var context = canvas.getContext("2d");
		var imageData;
		
		try {
		  try {
			imageData = context.getImageData( top_x, top_y, width, height );
		  } catch(e) {
		  
			// NOTE: this part is supposedly only needed if you want to work with local files
			// so it might be okay to remove the whole try/catch block and just use
			// imageData = context.getImageData( top_x, top_y, width, height );
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
				imageData = context.getImageData( top_x, top_y, width, height );
			} catch(e) {
				alert("Cannot access local image");
				throw new Error("unable to access local image data: " + e);
				return;
			}
		  }
		} catch(e) {
		  alert("Cannot access image");
		  throw new Error("unable to access image data: " + e);
		}
				
		var pixels = imageData.data;
				
		var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
		r_out_sum, g_out_sum, b_out_sum,
		r_in_sum, g_in_sum, b_in_sum,
		pr, pg, pb, rbs;
				
		var div = radius + radius + 1;
		var w4 = width << 2;
		var widthMinus1  = width - 1;
		var heightMinus1 = height - 1;
		var radiusPlus1  = radius + 1;
		var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;
		
		var stackStart = new BlurStack();
		var stack = stackStart;
		for ( i = 1; i < div; i++ )
		{
			stack = stack.next = new BlurStack();
			if ( i == radiusPlus1 ) var stackEnd = stack;
		}
		stack.next = stackStart;
		var stackIn = null;
		var stackOut = null;
		
		yw = yi = 0;
		
		var mul_sum = mul_table[radius];
		var shg_sum = shg_table[radius];
		
		for ( y = 0; y < height; y++ )
		{
			r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;
			
			r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
			g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
			b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
			
			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			
			stack = stackStart;
			
			for( i = 0; i < radiusPlus1; i++ )
			{
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack = stack.next;
			}
			
			for( i = 1; i < radiusPlus1; i++ )
			{
				p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
				r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
				g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
				b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
				
				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				
				stack = stack.next;
			}
			
			
			stackIn = stackStart;
			stackOut = stackEnd;
			for ( x = 0; x < width; x++ )
			{
				pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
				pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
				pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;
				
				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				
				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				
				p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;
				
				r_in_sum += ( stackIn.r = pixels[p]);
				g_in_sum += ( stackIn.g = pixels[p+1]);
				b_in_sum += ( stackIn.b = pixels[p+2]);
				
				r_sum += r_in_sum;
				g_sum += g_in_sum;
				b_sum += b_in_sum;
				
				stackIn = stackIn.next;
				
				r_out_sum += ( pr = stackOut.r );
				g_out_sum += ( pg = stackOut.g );
				b_out_sum += ( pb = stackOut.b );
				
				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				
				stackOut = stackOut.next;

				yi += 4;
			}
			yw += width;
		}

		
		for ( x = 0; x < width; x++ )
		{
			g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;
			
			yi = x << 2;
			r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
			g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
			b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
			
			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			
			stack = stackStart;
			
			for( i = 0; i < radiusPlus1; i++ )
			{
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack = stack.next;
			}
			
			yp = width;
			
			for( i = 1; i <= radius; i++ )
			{
				yi = ( yp + x ) << 2;
				
				r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
				g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
				b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
				
				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				
				stack = stack.next;
			
				if( i < heightMinus1 )
				{
					yp += width;
				}
			}
			
			yi = x;
			stackIn = stackStart;
			stackOut = stackEnd;
			for ( y = 0; y < height; y++ )
			{
				p = yi << 2;
				pixels[p]   = (r_sum * mul_sum) >> shg_sum;
				pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
				pixels[p+2] = (b_sum * mul_sum) >> shg_sum;
				
				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				
				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				
				p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;
				
				r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
				g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
				b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
				
				stackIn = stackIn.next;
				
				r_out_sum += ( pr = stackOut.r );
				g_out_sum += ( pg = stackOut.g );
				b_out_sum += ( pb = stackOut.b );
				
				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				
				stackOut = stackOut.next;
				
				yi += width;
			}
		}
		
		context.putImageData( imageData, top_x, top_y );
		
	}

	function BlurStack()
	{
		this.r = 0;
		this.g = 0;
		this.b = 0;
		this.a = 0;
		this.next = null;
	}

	var stackBlur = {
		image: stackBlurImage,
		canvasRGBA: stackBlurCanvasRGBA,
		canvasRGB: stackBlurCanvasRGB
	};

	// export as AMD...
	if ( typeof define !== 'undefined' && define.amd ) {
	    define( function () { return stackBlur; });
	}

	// ...or as browserify
	else if ( typeof module !== 'undefined' && module.exports ) {
	    module.exports = stackBlur;
	}

	global.stackBlur = stackBlur;

}( typeof window !== 'undefined' ? window : this ));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/templates/hd/js/FileSaver.min.js?15082775002446";s:6:"source";s:39:"/local/templates/hd/js/FileSaver.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}

/* End */
;; /* /local/templates/hd/js/jquery-1.12.3.min.js?150944903897180*/
; /* /local/templates/hd/js/libs.js?1500158720205918*/
; /* /local/templates/hd/js/common.js?150015872218661*/
; /* /local/templates/hd/js/jquery.geocomplete.min.js?15082844418816*/
; /* /local/templates/hd/js/jquery.mask.js?150972672522803*/
; /* /local/templates/hd/js/jquery.add.js?15097279478955*/
; /* /local/templates/hd/js/jquery.messages.js?14992475921198*/
; /* /local/templates/hd/js/js-bodygraph.js?15082910843407*/
; /* /local/templates/hd/js/canvg.min.js?150827750062547*/
; /* /local/templates/hd/js/rgbcolor.js?15082775007901*/
; /* /local/templates/hd/js/StackBlur.js?150827750018417*/
; /* /local/templates/hd/js/FileSaver.min.js?15082775002446*/
