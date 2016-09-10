module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function stripKeysWithEmptyValues(obj) {
	  var nested = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  var newObj = {};

	  if (!nested) {
	    Object.keys(obj).forEach(function (key) {
	      if (obj[key] != false) {
	        newObj[key] = obj[key];
	      }
	    });
	  } else {
	    (function () {
	      var removeEmptyStringElements = function removeEmptyStringElements(obj) {
	        for (var prop in obj) {
	          if (_typeof(obj[prop]) === 'object') {
	            // dive deeper in
	            removeEmptyStringElements(obj[prop]);
	          } else if (obj[prop] === '') {
	            // delete elements that are empty strings
	            delete obj[prop];
	          }
	        }
	        return obj;
	      };

	      newObj = removeEmptyStringElements(obj);
	    })();
	  }

	  return newObj;
	}

	exports.default = stripKeysWithEmptyValues;

/***/ }
/******/ ]);