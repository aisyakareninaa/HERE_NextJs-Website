"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/fetchtest";
exports.ids = ["pages/fetchtest"];
exports.modules = {

/***/ "./pages/fetchtest.js":
/*!****************************!*\
  !*** ./pages/fetchtest.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n//buat percobaan manggil public API \n\nfunction Fetchtest({ posts  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center mt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold\",\n                children: \" Testing Fetch API using Dummy data from internet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\pages\\\\fetchtest.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        post.id,\n                        \",\",\n                        post.email\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\pages\\\\fetchtest.js\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\pages\\\\fetchtest.js\",\n        lineNumber: 5,\n        columnNumber: 7\n    }, this);\n}\nasync function getStaticProps() {\n    try {\n        const res = await fetch(\"https://jsonplaceholder.typicode.com/comments\");\n        const posts = await res.json();\n        return {\n            props: {\n                posts\n            }\n        };\n    } catch (error) {\n        console.log(\"error\");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fetchtest);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZXRjaHRlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLG9DQUFvQzs7QUFFcEMsU0FBU0EsVUFBVSxFQUFFQyxNQUFLLEVBQUUsRUFBRTtJQUMxQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFZOzs7Ozs7WUFDMUJGLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0g7O3dCQUFLRyxLQUFLQyxFQUFFO3dCQUFDO3dCQUFFRCxLQUFLRSxLQUFLOzs7Ozs7Ozs7Ozs7O0FBSWxDO0FBRU8sZUFBZUMsaUJBQWlCO0lBQ3JDLElBQUc7UUFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU07UUFDM0IsTUFBTVQsUUFBUSxNQUFNUSxJQUFJRSxJQUFJO1FBRTVCLE9BQU87WUFDTEMsT0FBTztnQkFDTFg7WUFDRjtRQUNGO0lBQ0EsRUFDQSxPQUFNWSxPQUFNO1FBQ1JDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtBQUNGLENBQUM7QUFFRCxpRUFBZWYsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcnN0LW5leHRwcm9qZWN0Ly4vcGFnZXMvZmV0Y2h0ZXN0LmpzP2VhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9idWF0IHBlcmNvYmFhbiBtYW5nZ2lsIHB1YmxpYyBBUEkgXHJcblxyXG5mdW5jdGlvbiBGZXRjaHRlc3QoeyBwb3N0cyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTIwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj4gVGVzdGluZyBGZXRjaCBBUEkgdXNpbmcgRHVtbXkgZGF0YSBmcm9tIGludGVybmV0PC9kaXY+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdj57cG9zdC5pZH0se3Bvc3QuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzJyk7XHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHMsXHJcbiAgICAgIH0sXHJcbiAgICB9IFxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEZldGNodGVzdDsiXSwibmFtZXMiOlsiRmV0Y2h0ZXN0IiwicG9zdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3N0IiwiaWQiLCJlbWFpbCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/fetchtest.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/fetchtest.js"));
module.exports = __webpack_exports__;

})();