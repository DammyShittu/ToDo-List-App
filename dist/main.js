/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #f1f2f5;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.clear-completed,\\r\\n#to-do,\\r\\n.todo-title,\\r\\n#form,\\r\\n.task {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#to-do {\\r\\n  height: 100vh;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 60px;\\r\\n  margin-bottom: 30px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nbutton i {\\r\\n  color: #c3c4c7;\\r\\n  transition: 250ms ease-in-out;\\r\\n}\\r\\n\\r\\n.clear-completed {\\r\\n  margin: 0 auto;\\r\\n  text-decoration: none;\\r\\n  color: #000;\\r\\n  opacity: 0.8;\\r\\n  height: 30px;\\r\\n  background-color: #c3c4c7;\\r\\n  transition: 300ms;\\r\\n  font-size: 15px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nh1,\\r\\nbutton i:hover,\\r\\n.clear-completed:hover {\\r\\n  color: brown;\\r\\n}\\r\\n\\r\\n.to-do-child {\\r\\n  width: 80%;\\r\\n  margin: 0 auto;\\r\\n  background-color: #fff;\\r\\n  border-radius: 5px;\\r\\n  height: auto;\\r\\n  box-shadow: 2px 2px 4px #4a4c52;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.todo-title,\\r\\n#form,\\r\\n.task {\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid #dadadc;\\r\\n  min-height: 30px;\\r\\n  max-height: 70px;\\r\\n  width: 95%;\\r\\n  margin: 0 auto;\\r\\n  gap: 15px;\\r\\n  padding: 0 5px;\\r\\n}\\r\\n\\r\\nbutton,\\r\\n.text,\\r\\nlabel {\\r\\n  appearance: none;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  background-color: inherit;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  padding-right: 80px;\\r\\n}\\r\\n\\r\\nlabel:hover {\\r\\n  cursor: text;\\r\\n}\\r\\n\\r\\n.todo-title h2,\\r\\n#todo-lists li label {\\r\\n  color: #545862;\\r\\n  font-size: 15px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\nbutton i:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.text {\\r\\n  font-size: 14px;\\r\\n  caret-color: red;\\r\\n  color: #545862;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.text::placeholder {\\r\\n  font-style: italic;\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n#todo-lists {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n#todo-lists li {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n#todo-lists li input[type=\\\"checkbox\\\"] {\\r\\n  margin-right: 5px;\\r\\n  outline: 0;\\r\\n}\\r\\n\\r\\n#todo-lists .ellipsis i:hover {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.clear-completed:hover {\\r\\n  text-decoration: underline;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.box:checked + .form-label {\\r\\n  text-decoration: line-through;\\r\\n  opacity: 0.6;\\r\\n}\\r\\n\\r\\n.opaque {\\r\\n  opacity: 0.8;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 768px) {\\r\\n  .to-do-child {\\r\\n    width: 45%;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clearCompleted.js":
/*!*******************************!*\
  !*** ./src/clearCompleted.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTasks */ \"./src/showTasks.js\");\n/* harmony import */ var _setLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLocalStorage */ \"./src/setLocalStorage.js\");\n/* harmony import */ var _getTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTasks */ \"./src/getTasks.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n// eslint-disable-next-line import/no-cycle\n\n\nconst removeCompletedTasks = () => {\n  let tasks = (0,_getTasks__WEBPACK_IMPORTED_MODULE_2__.default)();\n  tasks = tasks.filter((item) => item.completed === false);\n  (0,_index__WEBPACK_IMPORTED_MODULE_3__.default)(tasks);\n  (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)(tasks);\n  (0,_showTasks__WEBPACK_IMPORTED_MODULE_0__.default)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeCompletedTasks);\n\n//# sourceURL=webpack://webpack-setup/./src/clearCompleted.js?");

/***/ }),

/***/ "./src/complete.js":
/*!*************************!*\
  !*** ./src/complete.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst completeTask = (box, task) => {\n  task.completed = box.checked;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completeTask);\n\n\n//# sourceURL=webpack://webpack-setup/./src/complete.js?");

/***/ }),

/***/ "./src/deleteOne.js":
/*!**************************!*\
  !*** ./src/deleteOne.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTasks */ \"./src/showTasks.js\");\n/* harmony import */ var _setLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLocalStorage */ \"./src/setLocalStorage.js\");\n/* harmony import */ var _getTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTasks */ \"./src/getTasks.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n// eslint-disable-next-line import/no-cycle\n\n\nconst deleteTodo = (key) => {\n  const tasks = (0,_getTasks__WEBPACK_IMPORTED_MODULE_2__.default)();\n  tasks.splice((key - 1), 1);\n  (0,_index__WEBPACK_IMPORTED_MODULE_3__.default)(tasks);\n  (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)(tasks);\n  (0,_showTasks__WEBPACK_IMPORTED_MODULE_0__.default)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTodo);\n\n//# sourceURL=webpack://webpack-setup/./src/deleteOne.js?");

/***/ }),

/***/ "./src/getTasks.js":
/*!*************************!*\
  !*** ./src/getTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTasksFromLocalStorage = () => {\n  let myTasks;\n  if (localStorage.getItem('allTasks') === null) {\n    myTasks = [];\n  } else {\n    myTasks = JSON.parse(localStorage.getItem('allTasks'));\n  }\n  return myTasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTasksFromLocalStorage);\n\n//# sourceURL=webpack://webpack-setup/./src/getTasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _showTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showTasks */ \"./src/showTasks.js\");\n/* harmony import */ var _setLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setLocalStorage */ \"./src/setLocalStorage.js\");\n/* harmony import */ var _getTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTasks */ \"./src/getTasks.js\");\n/* harmony import */ var _deleteOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteOne */ \"./src/deleteOne.js\");\n/* harmony import */ var _clearCompleted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearCompleted */ \"./src/clearCompleted.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\n\n\nconst input = document.querySelector('.text');\nconst form = document.getElementById('form');\nconst removeCompleted = document.querySelector('.clear-completed');\n\nfunction clearInput() {\n  input.value = '';\n}\n\n// Add Task\n\nconst addTodoTask = (e) => {\n  const tasks = (0,_getTasks__WEBPACK_IMPORTED_MODULE_3__.default)();\n  e.preventDefault();\n\n  if (input.value === '') {\n    return;\n  }\n\n  const todo = {\n    description: input.value,\n    completed: false,\n    index: tasks.length + 1,\n  };\n\n  clearInput();\n  (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_2__.addToLocalStorage)(todo);\n  (0,_showTasks__WEBPACK_IMPORTED_MODULE_1__.default)();\n};\n\nconst setIndex = (tasks) => {\n  tasks.forEach((task, index) => {\n    task.index = index + 1;\n  });\n};\n\n// Event Listener To Add Form\nform.addEventListener('submit', addTodoTask);\n\n// Event Listener To Delete One Task\nconst listContainer = document.getElementById('todo-lists');\nlistContainer.addEventListener('click', (event) => {\n  if (event.target.classList.contains('delete-task')) {\n    const listKey = event.target.parentElement.parentElement.dataset.key;\n    (0,_deleteOne__WEBPACK_IMPORTED_MODULE_4__.default)(listKey);\n  }\n});\n\n// Event Listener To Clear Completed\nremoveCompleted.addEventListener('click', _clearCompleted__WEBPACK_IMPORTED_MODULE_5__.default);\n\n(0,_showTasks__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setIndex);\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/setLocalStorage.js":
/*!********************************!*\
  !*** ./src/setLocalStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage),\n/* harmony export */   \"addToLocalStorage\": () => (/* binding */ addToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _getTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasks */ \"./src/getTasks.js\");\n\n\nconst setLocalStorage = (lists) => {\n  localStorage.setItem('allTasks', JSON.stringify(lists));\n};\n\nconst addToLocalStorage = (item) => {\n  const tasks = (0,_getTasks__WEBPACK_IMPORTED_MODULE_0__.default)();\n  tasks.push(item);\n  setLocalStorage(tasks);\n};\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/setLocalStorage.js?");

/***/ }),

/***/ "./src/showTasks.js":
/*!**************************!*\
  !*** ./src/showTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasks */ \"./src/getTasks.js\");\n/* harmony import */ var _complete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete */ \"./src/complete.js\");\n/* harmony import */ var _setLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setLocalStorage */ \"./src/setLocalStorage.js\");\n\n\n\n\nconst listContainer = document.getElementById('todo-lists');\n\nconst showTasks = () => {\n  listContainer.innerHTML = '';\n  const tasks = (0,_getTasks__WEBPACK_IMPORTED_MODULE_0__.default)();\n  for (let i = 0; i < tasks.length; i += 1) {\n    const holder = document.createElement('div');\n    holder.innerHTML += ` <li class=\"task\" id=\"${tasks[i].index}\" data-key=\"${tasks[i].index}\" draggable=\"true\">\n    <div>\n      <input id=\"box-${i}\" type=\"checkbox\" class=\"box\" id=\"list-box\" name=\"list-box\">\n      <label id=\"label-${i}\" class=\"form-label\">${tasks[i].description}</label>\n    </div>\n  \n    <button id=\"${tasks[i].index}\" class=\"delete\"><i class='fas fa-trash-alt delete-task'></i></button>\n  </li>`;\n\n    while (holder.firstChild) {\n      listContainer.appendChild(holder.firstChild);\n    }\n\n    const label = document.getElementById(`label-${i}`);\n    const box = document.getElementById(`box-${i}`);\n\n    box.checked = tasks[i].completed;\n    box.addEventListener('change', (event) => {\n      (0,_complete__WEBPACK_IMPORTED_MODULE_1__.default)(event.target, tasks[i]);\n      (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)(tasks);\n    });\n\n    label.addEventListener('dblclick', () => {\n      label.setAttribute('contenteditable', 'true');\n    });\n\n    label.addEventListener('focus', () => {\n      label.parentElement.parentElement.style.backgroundColor = '#dadadc';\n    });\n\n    label.addEventListener('blur', () => {\n      label.parentElement.parentElement.style.backgroundColor = '#fff';\n      tasks[i].description = label.innerHTML;\n      (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)(tasks);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTasks);\n\n//# sourceURL=webpack://webpack-setup/./src/showTasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;