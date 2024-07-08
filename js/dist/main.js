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

/***/ "./js/main/index.js":
/*!**************************!*\
  !*** ./js/main/index.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst grid = document.querySelector('.main__gridcontainer'),\r\n\t\t\tgridWidth = parseInt(window.getComputedStyle(grid).width),\r\n\t\t\tgridHeight = parseInt(window.getComputedStyle(grid).height),\r\n\t\t\tcolItems = Math.floor(gridWidth / 40),\r\n\t\t\trowItems = Math.floor(gridHeight / 40);\r\n\r\nfunction createGrid() {\r\n\t\r\n\tfor (let i = 0; i < (colItems * rowItems); i++) {\r\n\t\tif (Math.random() > 0.90) {\r\n\t\t\tgrid.innerHTML += '<div class=\"main__gridcontainer__item main__gridcontainer__item-active\"></div>';\r\n\t\t} else {\r\n\t\t\tgrid.innerHTML += '<div class=\"main__gridcontainer__item\"></div>';\r\n\t\t}\r\n\t}\r\n\r\n\tgrid.style.cssText = `\r\n\t\tgrid-template-columns: repeat(${colItems}, 40px);\r\n\t\tgrid-template-rows: repeat(${rowItems}, 40px);\r\n\t\tgrid-auto-flow: row;\r\n\t\twidth: ${colItems * 40}px;\r\n\t\theight: ${rowItems * 40}px;\r\n\t`\r\n\r\n\tconst gridItems = document.querySelectorAll('.main__gridcontainer__item');\r\n\tlet cntr = 0, opacId = 1, flag = false;\r\n\tgridItems.forEach((item, i) => {\r\n\t\t++cntr;\r\n\t\tif (cntr % 28 === 0) {\r\n\t\t\tflag = true;\r\n\t\t\topacId -= `${1 / rowItems}`;\r\n\t\t\titem.style.opacity = opacId;\r\n\t\t} else if (flag) {\r\n\t\t\titem.style.opacity = opacId;\r\n\t\t}\r\n\t})\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./js/main/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;