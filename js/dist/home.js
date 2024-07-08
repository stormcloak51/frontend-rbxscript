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

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_createGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/createGrid.js */ \"./js/services/createGrid.js\");\n// IMPORTS\r\n\r\n\r\n\r\n// VARS\r\n\r\n// FUNCTIONS\r\n(0,_services_createGrid_js__WEBPACK_IMPORTED_MODULE_0__.createGrid)();\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/services/createGrid.js":
/*!***********************************!*\
  !*** ./js/services/createGrid.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGrid: () => (/* binding */ createGrid)\n/* harmony export */ });\nfunction createGrid() {\r\n\tconst grid = document.querySelector('.main__gridcontainer'),\r\n\tgridBackground = document.querySelector('.main__gridcontainer-background');\r\n\tcreateGridLayout();\r\n\tfunction createGridLayout() {\r\n\t\tconst gridWidth = parseInt(window.getComputedStyle(grid).width),\r\n\t\t\t\tgridHeight = parseInt(window.getComputedStyle(grid).height),\r\n\t\t\t\tcolItems = Math.floor(gridWidth / 40),\r\n\t\t\t\trowItems = Math.floor(gridHeight / 40) + 2;\r\n\t\tfor (let i = 0; i < (colItems * rowItems); i++) {\r\n\t\t\tif (Math.random() > 0.90) {\r\n\t\t\t\tgrid.innerHTML += '<div class=\"main__gridcontainer__item main__gridcontainer__item-active\"></div>';\r\n\t\t\t} else {\r\n\t\t\t\tgrid.innerHTML += '<div class=\"main__gridcontainer__item\"></div>';\r\n\t\t\t}\r\n\t\t}\r\n\t\t// console.log(window.getComputedStyle(gridBackground).height);\r\n\t\tgrid.style.cssText = `\r\n\t\t\tgrid-template-columns: repeat(${colItems + 1}, 40px);\r\n\t\t\tgrid-template-rows: repeat(${rowItems}, 40px);\r\n\t\t\tgrid-auto-flow: row;\r\n\t\t`\r\n\r\n\t\tconst gridItems = document.querySelectorAll('.main__gridcontainer__item');\r\n\t\tlet cntr = 0, opacId = 1, flag = false;\r\n\t\tgridItems.forEach((item, i) => {\r\n\t\t\t++cntr;\r\n\t\t\tif (cntr % colItems === 0) {\r\n\t\t\t\tflag = true;\r\n\t\t\t\topacId -= `${1 / rowItems}`;\r\n\t\t\t\titem.style.opacity = opacId;\r\n\t\t\t} else if (flag) {\r\n\t\t\t\titem.style.opacity = opacId;\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./js/services/createGrid.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;