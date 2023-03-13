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
exports.id = "pages/fetch";
exports.ids = ["pages/fetch"];
exports.modules = {

/***/ "./pages/fetch.js":
/*!************************!*\
  !*** ./pages/fetch.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Fetch({ posts  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    post.id,\n                    \",\",\n                    post.email\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\pages\\\\fetch.js\",\n                lineNumber: 5,\n                columnNumber: 11\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\pages\\\\fetch.js\",\n        lineNumber: 3,\n        columnNumber: 7\n    }, this);\n}\nasync function getStaticProps() {\n    try {\n        const res = await fetch(\"https://jsonplaceholder.typicode.com/comments\");\n        const posts = await res.json();\n        return {\n            props: {\n                posts\n            }\n        };\n    } catch (error) {\n        console.log(\"error\");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fetch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZXRjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEVBQUU7SUFDdEIscUJBQ0UsOERBQUNDO2tCQUNFRCxNQUFNRSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNDOztvQkFBSUQsS0FBS0UsRUFBRTtvQkFBQztvQkFBRUYsS0FBS0csS0FBSzs7Ozs7Ozs7Ozs7O0FBSWpDO0FBRU8sZUFBZUMsaUJBQWlCO0lBQ3JDLElBQUc7UUFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU07UUFDM0IsTUFBTVQsUUFBUSxNQUFNUSxJQUFJRSxJQUFJO1FBRTVCLE9BQU87WUFDTEMsT0FBTztnQkFDTFg7WUFDRjtRQUNGO0lBQ0EsRUFDQSxPQUFNWSxPQUFNO1FBQ1JDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtBQUNGLENBQUM7QUFFRCxpRUFBZWYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcnN0LW5leHRwcm9qZWN0Ly4vcGFnZXMvZmV0Y2guanM/NTY0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBGZXRjaCh7IHBvc3RzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICA8bGk+e3Bvc3QuaWR9LHtwb3N0LmVtYWlsfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIHRyeXtcclxuICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHMnKTtcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBwb3N0cyxcclxuICAgICAgfSxcclxuICAgIH0gXHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRmV0Y2giXSwibmFtZXMiOlsiRmV0Y2giLCJwb3N0cyIsInVsIiwibWFwIiwicG9zdCIsImxpIiwiaWQiLCJlbWFpbCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/fetch.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/fetch.js"));
module.exports = __webpack_exports__;

})();