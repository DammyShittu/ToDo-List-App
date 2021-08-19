(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f1f2f5;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  font-size: 16px;\r\n}\r\n\r\n#to-do {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nh1 {\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n  color: brown;\r\n  text-align: center;\r\n}\r\n\r\n.to-do-child {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  height: auto;\r\n  box-shadow: 2px 2px 4px #4a4c52;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.todo-title,\r\n#form,\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #dadadc;\r\n  height: auto;\r\n  width: 95%;\r\n  margin: 0 auto;\r\n  align-items: center;\r\n  gap: 15px;\r\n  margin-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\nbutton,\r\n.text,\r\nlabel {\r\n  appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  background-color: #fff;\r\n}\r\n\r\nlabel:hover {\r\n  cursor: text;\r\n}\r\n\r\n.todo-title h2,\r\n#todo-lists li label {\r\n  color: #545862;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n}\r\n\r\nbutton i {\r\n  color: #c3c4c7;\r\n  transition: 250ms ease-in-out;\r\n}\r\n\r\nbutton i:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n.text {\r\n  font-size: 12px;\r\n  caret-color: red;\r\n  color: #545862;\r\n  width: 70%;\r\n}\r\n\r\n.text::placeholder {\r\n  font-style: italic;\r\n  opacity: 0.5;\r\n}\r\n\r\n#todo-lists {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#todo-lists li {\r\n  list-style: none;\r\n}\r\n\r\n#todo-lists li input[type=\"checkbox\"] {\r\n  margin-right: 5px;\r\n}\r\n\r\n#todo-lists li button i:hover {\r\n  cursor: move;\r\n}\r\n\r\n.clear-completed {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  text-decoration: none;\r\n  color: #000;\r\n  opacity: 0.8;\r\n  font-size: 13px;\r\n  height: 30px;\r\n  background-color: #c3c4c7;\r\n  transition: 300ms;\r\n}\r\n\r\n.clear-completed:hover {\r\n  text-decoration: underline;\r\n  opacity: 1;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n  opacity: 0.5;\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n  .to-do-child {\r\n    width: 45%;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n",""]);const i=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(r[p].references++,r[p].updater(f)):r.push({identifier:u,updater:o(f,t),references:1}),a.push(u)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),l=e(216),d=e.n(l),u=e(589),p=e.n(u),f=e(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=[{description:"Start a web project",completed:!1,index:1},{description:"Walk the dog",completed:!1,index:2},{description:"Do laundry",completed:!1,index:3},{description:"Do laundry",completed:!1,index:3},{description:"Do laundry",completed:!1,index:3}],b=document.getElementById("todo-lists");window.onload=()=>{for(let n=0;n<h.length;n+=1){const r=h[n],e=` <li class="task" id="${r.index}" draggable="true">\n    <div>\n      <input type="checkbox" class="box" id="list-box" name="list-box">\n      <label contenteditable="true" class="form-label">${r.description}</label>\n    </div>\n    <button type="submit"><i class="fas fa-ellipsis-v fa-xs"></i></button>\n  </li>`;b.innerHTML+=e}}})()})();