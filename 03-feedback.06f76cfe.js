function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,i,f,a,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,f=e.apply(i,n)}function j(e){return l=e,a=setTimeout(S,t),c?y(e):f}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function S(){var e=v();if(O(e))return T(e);a=setTimeout(S,function(e){var n=t-(e-u);return s?d(n,i-(e-l)):n}(e))}function T(e){return a=void 0,g&&o?y(e):(o=r=void 0,f)}function h(){var e=v(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(S,t),y(u)}return void 0===a&&(a=setTimeout(S,t)),f}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=u=r=a=void 0},h.flush=function(){return void 0===a?f:T(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form")};y.form.addEventListener("input",e(t)((function(){j={email:`${y.form.elements.email.value}`,message:`${y.form.elements.message.value}`},localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")}));let j={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));null!==e&&(y.form.elements.email.value=e.email,y.form.elements.message.value=e.message)}();
//# sourceMappingURL=03-feedback.06f76cfe.js.map
