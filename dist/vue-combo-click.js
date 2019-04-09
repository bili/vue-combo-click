(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueComboClick", [], factory);
	else if(typeof exports === 'object')
		exports["VueComboClick"] = factory();
	else
		root["VueComboClick"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/vue-combo-click.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/vue-combo-click.js":
/*!********************************!*\
  !*** ./src/vue-combo-click.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    install(Vue, options) {\n        Vue.directive('combo-click', {\n            bind(el, binding) {\n                const delay = parseInt(binding.value.delay)\n                const countAmount = parseInt(binding.value.count)\n                const reset = binding.value.reset\n                let changeFn = binding.value.change\n                let finishFn = binding.value.finish\n                let now, lastTime, timeout, count = 0\n\n                el.addEventListener('click', () => {\n                    if (typeof reset == 'undefined' || reset == true) {\n                        if (timeout) clearTimeout(timeout)\n                        timeout = setTimeout(() => {\n                            count = 0\n                            now = lastTime = null\n                            if (changeFn) changeFn(0)\n                        }, delay)\n                    }\n                    if (countAmount === 1) {\n                        if (changeFn) changeFn(1)\n                        if (finishFn) finishFn(1)\n                    } else {\n                        now = new Date().getTime()\n                        if (count === 0) {\n                            count++\n                            if (changeFn) changeFn(count)\n                            lastTime = now\n                        } else {\n                            if (now - lastTime <= delay) {\n                                count++\n                                if (changeFn) changeFn(count)\n                                if (count >= countAmount) {\n                                    if (finishFn) finishFn(countAmount)\n                                    count = 0\n                                    now = lastTime = null\n                                } else lastTime = now\n                            } else {\n                                count = 1\n                                if (changeFn) changeFn(count)\n                                lastTime = now\n                            }\n                        }\n                    }\n                }, false)\n            },\n            unbind(el) {\n                el.removeEventListen('click')\n            }\n        })\n    }\n});\n\n//# sourceURL=webpack://VueComboClick/./src/vue-combo-click.js?");

/***/ })

/******/ });
});