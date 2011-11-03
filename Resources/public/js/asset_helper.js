/**
 * Portions of this code are from the Google Closure Library,
 * received from the Closure Authors under the Apache 2.0 license.
 *
 * All other code is (C) 2011 Jeremy Mikola and subject to the MIT license.
 */
(function() {function e(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function i(a,b){function c(){}c.prototype=b.prototype;a.m=b.prototype;a.prototype=new c};var j=Array.prototype,k=j.map?function(a,b,c){return j.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=Array(d),f=typeof a=="string"?a.split(""):a,h=0;h<d;h++)h in f&&(g[h]=b.call(c,f[h],h,a));return g};function l(a,b){var c=Array.prototype.slice.call(arguments),d=c.shift();if(typeof d=="undefined")throw Error("[goog.string.format] Template required");return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,function(a,b,d,t,z,u,A,B){if(u=="%")return"%";var v=c.shift();if(typeof v=="undefined")throw Error("[goog.string.format] Not enough arguments");arguments[0]=v;return m[u].apply(null,arguments)})}
var m={s:function(a,b,c){if(isNaN(c)||c==""||a.length>=c)return a;b.indexOf("-",0)>-1?a+=Array(c-a.length+1).join(" "):a=Array(c-a.length+1).join(" ")+a;return a},f:function(a,b,c,d,g){d=a.toString();isNaN(g)||g==""||(d=a.toFixed(g));var f;f=a<0?"-":b.indexOf("+")>=0?"+":b.indexOf(" ")>=0?" ":"";a>=0&&(d=f+d);if(isNaN(c)||d.length>=c)return d;d=isNaN(g)?Math.abs(a).toString():Math.abs(a).toFixed(g);a=c-d.length-f.length;return d=b.indexOf("-",0)>=0?f+d+Array(a+1).join(" "):f+Array(a+1).join(b.indexOf("0",
0)>=0?"0":" ")+d}};m.d=function(a,b,c,d,g,f,h,t){return m.f(parseInt(a,10),b,c,d,0,f,h,t)};m.i=m.d;m.u=m.d;function n(){this.b="/";this.k=null;this.h=[]}(function(a){a.l=function(){return a.p||(a.p=new a)}})(n);function o(a,b){return b.hasOwnProperty("baseUrls")?new p(b.baseUrls,b.version,b.format):b.hasOwnProperty("version")?new q(a.b,b.version,b.format):o(a,b["https:"===window.location.protocol?"ssl":"http"])}n.prototype.o=function(a,b,c){this.b=a;this.k=o(this,b);this.h=k(c,function(a){return o(n.prototype,a)})};
n.prototype.e=function(a){if(void 0===a||null===a)return this.k;if(!this.h.hasOwnProperty(a))throw new r(a);return this.h[a]};n.prototype.a=function(a,b){return this.e(b).a(a)};n.prototype.g=function(a){return this.e(a).g()};function s(a,b){this.j=a;this.n=b+""||"%s?%s"}s.prototype.a=function(a){if(!(-1!==a.indexOf("://")||0===a.indexOf("//"))&&null!==this.j){var b=l(this.n,a.replace(/^\/+/,""),this.j);a&&"/"===a.charAt(0)&&(b="/"+b);a=b}return a};s.prototype.g=function(){return this.j};
function q(a,b,c){s.call(this,b,c);a?("/"!==a.charAt(0)&&(a="/"+a),this.b=a.replace(/\/+$/,"")+"/"):this.b="/"}i(q,s);q.prototype.a=function(a){(a=q.m.a.call(this,a))&&"/"!==a.charAt(0)&&(a=this.b+a);return a};function p(a,b,c){s.call(this,b,c);a=a||[];e(a)=="array"||(a=[a]);this.c=k(a,function(a){return a.replace(/\/+$/,"")})}i(p,s);
p.prototype.a=function(a){var b=q.m.a.call(this,a);b&&"/"!==b.charAt(0)&&(b="/"+b);a:switch(this.c.length){case 0:a="";break a;case 1:a=this.c[0];break a;default:var c=new PHP_JS,a=this.c[parseInt(c.md5(a).substring(0,10),16)%this.c.length]}return a+b};function r(a){this.name="InvalidPackageError";this.message='There is no "'+a+'" asset package.'}i(r,Error);var w="jmikola.AssetHelper".split("."),x=this;!(w[0]in x)&&x.execScript&&x.execScript("var "+w[0]);for(var y;w.length&&(y=w.shift());)!w.length&&n!==void 0?x[y]=n:x=x[y]?x[y]:x[y]={};n.getInstance=n.l;n.prototype.init=n.prototype.o;n.prototype.getUrl=n.prototype.a;n.prototype.getVersion=n.prototype.g;n.prototype.getPackage=n.prototype.e;window.AssetHelper=n.l();})();
