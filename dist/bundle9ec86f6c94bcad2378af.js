/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/notification.js":
/*!*************************************!*\
  !*** ./src/modules/notification.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var notificationEl = document.querySelector('.notification');

var showNotification = function showNotification(msg) {
  // change the message
  notificationEl.innerHTML = msg; // notification enter

  notificationEl.classList.add('notif-enter'); // notification leave

  setTimeout(function () {
    notificationEl.classList.remove('notif-enter');
  }, 2000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNotification);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 20px;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f6f6f6;\n}\n\nheader {\n  background-color: #fff;\n  background-size: cover;\n  border-radius: 5px 5px;\n}\n\n.container {\n  margin-top: -150px;\n  background-color: antiquewhite;\n  width: 600px;\n  height: 150px;\n  position: relative;\n  overflow: none;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  margin-right: 20px;\n  margin-left: 3px;\n}\n\n.app-title {\n  margin-bottom: 20px;\n  font-size: 20px;\n  opacity: 0.5;\n}\n\n.new-todo {\n  width: 100%;\n  height: 50px;\n  padding: 0.25rem 0;\n}\n\n.new-todo form {\n  display: flex;\n  align-items: center;\n}\n\n.new-todo form input {\n  flex: 1;\n  height: 40px;\n  background-color: #fff;\n  outline: transparent;\n  border: none;\n  padding-left: 0.5rem;\n  font-size: 1rem;\n  color: rgb(22, 22, 22);\n}\n\n.new-todo form button {\n  width: 60px;\n  height: 40px;\n  border: none;\n  font-size: 1rem;\n  background-color: #fff;\n  color: rgb(28, 27, 27);\n  cursor: pointer;\n}\n\n.new-todo form button:hover {\n  text-shadow: 1px 1px 20px rgba(0, 0, 0, 0.8);\n}\n\n#todos-list {\n  background-color: #fff;\n  padding: 0.5rem;\n  border: 1px solid rgb(219, 219, 219);\n  overflow-y: scroll;\n  border-radius: 0 0 5px 5px;\n}\n\n#todos-list .todo {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 0.5rem;\n  border-radius: 5px;\n  border-bottom: 1px hidden;\n}\n\n#todos-list .todo:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n#todos-list .todo * {\n  cursor: pointer;\n  margin-right: 0.5rem;\n}\n\n#todos-list .todo i {\n  font-size: 0.9rem;\n}\n\n#todos-list .todo p {\n  flex: 1;\n  word-break: break-all;\n}\n\n.checked {\n  text-decoration: line-through;\n  color: grey;\n}\n\n#todos-list .todo .bi-pencil-square {\n  color: rgb(171, 175, 169);\n}\n\n#todos-list .todo .bi-trash {\n  color: rgb(10, 6, 6);\n  margin: 0;\n}\n\n.notification {\n  position: absolute;\n  width: calc(3 * var(--contaier-width) / 4);\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.9;\n  border-radius: 8px;\n  background-color: rgb(233, 81, 81);\n  top: 10px;\n  right: calc(-3 * var(--contaier-width) / 4);\n  color: #fff;\n  transition: 300ms right ease-in-out;\n}\n\n.notif-enter {\n  right: 10px;\n}\n\n.clear-completed {\n  width: 100%;\n  height: 40px;\n  border: none;\n  color: rgb(64, 60, 60);\n  cursor: pointer;\n  border-bottom: 1px solid;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AACA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AAAF;;AAGA;EACE,eAAA;AAAF;;AAGA;EACE,YAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;AAAF;;AAGA;EACE,sBAAA;EACA,sBAAA;EACA,sBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,8BAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;EACE,mBAAA;EACA,eAAA;EACA,YAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;AAAF;;AAGA;EACE,OAAA;EACA,YAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;EACA,oBAAA;EACA,eAAA;EACA,sBAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,eAAA;AAAF;;AAGA;EACE,4CAAA;AAAF;;AAGA;EACE,sBAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,0BAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;AAAF;;AAGA;EACE,oCAAA;AAAF;;AAGA;EACE,eAAA;EACA,oBAAA;AAAF;;AAGA;EACE,iBAAA;AAAF;;AAGA;EACE,OAAA;EACA,qBAAA;AAAF;;AAGA;EACE,6BAAA;EACA,WAAA;AAAF;;AAGA;EACE,yBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,SAAA;AAAF;;AAGA;EACE,kBAAA;EACA,0CAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,SAAA;EACA,2CAAA;EACA,WAAA;EACA,mCAAA;AAAF;;AAGA;EACE,WAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;EACA,wBAAA;AAAF","sourcesContent":["\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 20px;\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\nheader {\r\n  background-color: #fff;\r\n  background-size: cover;\r\n  border-radius: 5px 5px;\r\n}\r\n\r\n.container {\r\n  margin-top: -150px;\r\n  background-color: antiquewhite;\r\n  width: 600px;\r\n  height: 150px;\r\n  position: relative;\r\n  overflow: none;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-right: 20px;\r\n  margin-left: 3px;\r\n}\r\n\r\n.app-title {\r\n  margin-bottom: 20px;\r\n  font-size: 20px;\r\n  opacity: 0.5;\r\n}\r\n\r\n.new-todo {\r\n  width: 100%;\r\n  height: 50px;\r\n  padding: 0.25rem 0;\r\n}\r\n\r\n.new-todo form {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.new-todo form input {\r\n  flex: 1;\r\n  height: 40px;\r\n  background-color: #fff;\r\n  outline: transparent;\r\n  border: none;\r\n  padding-left: 0.5rem;\r\n  font-size: 1rem;\r\n  color: rgb(22, 22, 22);\r\n}\r\n\r\n.new-todo form button {\r\n  width: 60px;\r\n  height: 40px;\r\n  border: none;\r\n  font-size: 1rem;\r\n  background-color: #fff;\r\n  color: rgb(28, 27, 27);\r\n  cursor: pointer;\r\n}\r\n\r\n.new-todo form button:hover {\r\n  text-shadow: 1px 1px 20px rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n#todos-list {\r\n  background-color: #fff;\r\n  padding: 0.5rem;\r\n  border: 1px solid rgb(219, 219, 219);\r\n  overflow-y: scroll;\r\n  border-radius: 0 0 5px 5px;\r\n}\r\n\r\n#todos-list .todo {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.75rem 0.5rem;\r\n  border-radius: 5px;\r\n  border-bottom: 1px hidden;\r\n}\r\n\r\n#todos-list .todo:hover {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#todos-list .todo * {\r\n  cursor: pointer;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n#todos-list .todo i {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n#todos-list .todo p {\r\n  flex: 1;\r\n  word-break: break-all;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n  color: grey;\r\n}\r\n\r\n#todos-list .todo .bi-pencil-square {\r\n  color: rgb(171, 175, 169);\r\n}\r\n\r\n#todos-list .todo .bi-trash {\r\n  color: rgb(10, 6, 6);\r\n  margin: 0;\r\n}\r\n\r\n.notification {\r\n  position: absolute;\r\n  width: calc(3 * var(--contaier-width) / 4);\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 0.9;\r\n  border-radius: 8px;\r\n  background-color: rgb(233, 81, 81);\r\n  top: 10px;\r\n  right: calc(-3 * var(--contaier-width) / 4);\r\n  color: #fff;\r\n  transition: 300ms right ease-in-out;\r\n}\r\n\r\n.notif-enter {\r\n  right: 10px;\r\n}\r\n\r\n.clear-completed {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: none;\r\n  color: rgb(64, 60, 60);\r\n  cursor: pointer;\r\n  border-bottom: 1px solid;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/notification */ "./src/modules/notification.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var form = document.getElementById('todoform');
var todoInput = document.getElementById('newtodo');
var todosListEl = document.getElementById('todos-list');
var refresh = document.getElementById('clear'); // VARS

var todos = JSON.parse(localStorage.getItem('todos')) || [];
var EditTodoId = -1; // clearAll todo lists when refresh the page

refresh.addEventListener('click', function () {
  window.location.reload();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refresh); // EDIT A TODO

var editTodo = function editTodo(todoId) {
  todoInput.value = todos[todoId].value;
  EditTodoId = todoId;
}; // updateId


var updateId = function updateId() {
  for (var i = 0; i < todos.length; i += 1) {
    todos[i].id = i + 1;
  }
}; // RENDER TODOS


var renderTodos = function renderTodos() {
  if (todos.length === 0) {
    todosListEl.innerHTML = '<center>Nothing to do!</center>';
    return;
  } // CLEAR ELEMENT BEFORE A RE-RENDER


  todosListEl.innerHTML = ''; // RENDER TODOS

  todos.forEach(function (todo, index) {
    todosListEl.innerHTML += "\n      <div class=\"todo\" id=".concat(index, ">\n        <i \n          class=\"bi ").concat(todo.checked ? 'bi bi-check2-square' : 'bi bi-app', "\"\n          style=\"color : ").concat(todo.color, "\"\n          data-action=\"check\"\n        ></i>\n        <p class=\"").concat(todo.checked ? 'checked' : '', "\" data-action=\"check\">").concat(todo.value, "</p>\n        <i class=\"bi bi-pencil-square\" data-action=\"edit\"></i>\n        <i class=\"bi bi-trash\" data-action=\"delete\"></i>\n      </div>\n      ");
  });
}; // CHECK A TODO


var checkTodo = function checkTodo(todoId) {
  todos = todos.map(function (todo, index) {
    return _objectSpread(_objectSpread({}, todo), {}, {
      checked: index === todoId ? !todo.checked : todo.checked
    });
  });
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}; // SAVE TODO


var saveTodo = function saveTodo() {
  var todoValue = todoInput.value; // check if the todo is empty

  var isEmpty = todoValue === ''; // check for duplicate todos

  var isDuplicate = todos.some(function (todo) {
    return todo.value.toUpperCase() === todoValue.toUpperCase();
  });

  if (isEmpty) {
    (0,_modules_notification__WEBPACK_IMPORTED_MODULE_1__["default"])("Todo's input is empty");
  } else if (isDuplicate) {
    (0,_modules_notification__WEBPACK_IMPORTED_MODULE_1__["default"])('Todo already exists!');
  } else {
    if (EditTodoId >= 0) {
      todos = todos.map(function (todo, index) {
        return _objectSpread(_objectSpread({}, todo), {}, {
          value: index === EditTodoId ? todoValue : todo.value
        });
      });
      EditTodoId = -1;
    } else {
      todos.push({
        value: todoValue,
        checked: false,
        id: todos.length + 1
      });
    }

    todoInput.value = '';
  }
}; // FORM SUBMIT


form.addEventListener('submit', function (event) {
  event.preventDefault();
  saveTodo();
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}); // DELETE TODO

var deleteTodo = function deleteTodo(todoId) {
  todos = todos.filter(function (todo, index) {
    return index !== todoId;
  });
  EditTodoId = -1;
  updateId(); // re-render

  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}; // CLICK EVENT LISTENER FOR ALL THE TODOS


todosListEl.addEventListener('click', function (event) {
  var target = event.target;
  var parentElement = target.parentElement;
  if (parentElement.className !== 'todo') return; // t o d o id

  var todo = parentElement;
  var todoId = Number(todo.id); // target action

  var action = target.dataset.action;

  if (action === 'check') {
    checkTodo(todoId);
  }

  if (action === 'edit') {
    editTodo(todoId);
  }

  if (action === 'delete') {
    deleteTodo(todoId);
  }
});
var clearAllBtn = document.querySelector('.clear-completed');

var clearAll = function clearAll() {
  // const localData = JSON.parse(localStorage.getItem('todos'));
  todos = todos.filter(function (i) {
    return !i.checked;
  });
  updateId();
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
};

renderTodos();
clearAllBtn.addEventListener('click', clearAll);
})();

/******/ })()
;
//# sourceMappingURL=bundle9ec86f6c94bcad2378af.js.map