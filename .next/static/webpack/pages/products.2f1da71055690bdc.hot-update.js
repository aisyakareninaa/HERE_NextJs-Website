"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./components/Products.jsx":
/*!*********************************!*\
  !*** ./components/Products.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ \"./data.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Products() {\n    _s();\n    const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [hasilFilter, setHasilfilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    console.log(_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const handlefilter = (e)=>{\n        const filterData = _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter((e)=>{\n            return e.category.toLowerCase().includes(keyword.toLowerCase());\n        });\n        setHasilfilter(filterData);\n    };\n    console.log(keyword);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        handlefilter();\n    }, [\n        _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        keyword\n    ]);\n    function getFiltered(filtered) {\n        if (filtered === 0) {\n            return \"Barang Tidak Ada\";\n        } else {\n            return filtered + \" Products \";\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-7 text-black z-[2] mt-20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"products\",\n                    className: \"max-w-[1240px] mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold text-center\",\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"templateContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"searchInput_Container flex items-center justify-center mx-auto my-0 pt-5 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"border w-3/12 p-2.5 rounded-[10px] border-solid border-black\",\n                                    id: \"searchInput\",\n                                    type: \"text \",\n                                    placeholder: \"Search Here\",\n                                    onChange: (event)=>{\n                                        setSearchTerm(event.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"filter-area\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        onChange: handlefilter,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            className: \"filter border h-[45px] w-[110px] mx-2.5 my-0 rounded-[10px] border-solid border-black\",\n                                            name: \"isAvailable\",\n                                            value: keyword,\n                                            onChange: (e)=>setKeyword(e.target.value),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"\",\n                                                    children: \"All\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Best-Seller\",\n                                                    children: \"Best Seller\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Ready\",\n                                                    children: \"Ready\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Pre-Order\",\n                                                    children: \"Pre Order\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"information w-1/5 text-center mx-auto my-0 pt-2.5\",\n                            children: getFiltered(hasilFilter.length)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"template_Container items-center justify-center grid relative grid-cols-[repeat(4,1fr)] mx-auto my-0 px-[5%] p-[2%] \",\n                            children: hasilFilter.length > 0 ? hasilFilter.filter((products)=>searchTerm !== \"\" ? products.name.toLowerCase().includes(searchTerm) : products).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\".concat(item.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" template bg-white border justify-center items-center m-5 p-5 rounded-[10px] border-solid border-[#a7a7a7] hover:transition-[0.4s] hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.4)] hover:z-[3] hover:scale-110\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: item.image,\n                                                alt: \"\",\n                                                className: \"h-[200px] w-[200px] border mt-[5px] mb-5 mx-1 rounded-[10px] border-solid border-black\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                class: \"card-name font-bold mb-3\",\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                class: \"card-text \",\n                                                children: item.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"price font-semibold mt-3\",\n                                                children: [\n                                                    \"Rp. \",\n                                                    item.price\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 21\n                                    }, this)\n                                }, item.id, false, {\n                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 19\n                                }, this)) : hasilFilter.filter((val)=>{\n                                if (searchTerm == \"\") {\n                                    return val;\n                                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {\n                                    return val;\n                                }\n                            }).map((val)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"template\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: val.image,\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            class: \"card-name\",\n                                            children: val.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"card-text\",\n                                            children: val.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"price\",\n                                            children: [\n                                                \"Rp \",\n                                                val.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"px-8 py-2 border\",\n                                            children: \"Shop\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 112,\n                                            columnNumber: 23\n                                        }, this)\n                                    ]\n                                }, val.id, true, {\n                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 21\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Products, \"oxbvNeQzUlbf69eN5ctMTScJAEg=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7bUNBVldWLEtBQUtoQixFQUFFOzs7OzRDQWUzQ2pCLFlBQVlTLE1BQU0sQ0FBQyxDQUFDbUMsTUFBUTtnQ0FDeEIsSUFBSTFDLGNBQWMsSUFBSTtvQ0FDcEIsT0FBTzBDO2dDQUNULE9BQU8sSUFDTEEsSUFBSWhCLElBQUksQ0FBQ2pCLFdBQVcsR0FBR0MsUUFBUSxDQUFDVixXQUFXUyxXQUFXLEtBQ3REO29DQUNBLE9BQU9pQztnQ0FDVCxDQUFDOzRCQUNILEdBQ0NaLEdBQUcsQ0FBQyxDQUFDWSxNQUFRO2dDQUNaLHFCQUNFLDhEQUFDN0I7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDbUI7NENBQUlDLEtBQUtRLElBQUlQLEtBQUs7NENBQUVDLEtBQUk7Ozs7OztzREFDekIsOERBQUNDOzRDQUFHQyxPQUFNO3NEQUFhSSxJQUFJaEIsSUFBSTs7Ozs7O3NEQUMvQiw4REFBQ2E7NENBQUVELE9BQU07c0RBQWFJLElBQUlGLFdBQVc7Ozs7OztzREFDckMsOERBQUNEOzRDQUFFekIsV0FBVTs7Z0RBQVE7Z0RBQUk0QixJQUFJRCxLQUFLOzs7Ozs7O3NEQUNsQyw4REFBQ0U7NENBQU83QixXQUFVO3NEQUFtQjs7Ozs7OzttQ0FMUjRCLElBQUkzQixFQUFFOzs7Ozs0QkFRekMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQjtHQW5IU3BCO0tBQUFBO0FBcUhULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4PzhmYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGFcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtoYXNpbEZpbHRlciwgc2V0SGFzaWxmaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVmaWx0ZXIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGRhdGEuZmlsdGVyKChlKSA9PiB7XHJcbiAgICAgIHJldHVybiBlLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG4gICAgc2V0SGFzaWxmaWx0ZXIoZmlsdGVyRGF0YSk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhrZXl3b3JkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhhbmRsZWZpbHRlcigpO1xyXG4gIH0sIFtkYXRhLCBrZXl3b3JkXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEZpbHRlcmVkKGZpbHRlcmVkKSB7XHJcbiAgICBpZiAoZmlsdGVyZWQgPT09IDApIHtcclxuICAgICAgcmV0dXJuIFwiQmFyYW5nIFRpZGFrIEFkYVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZpbHRlcmVkICsgXCIgUHJvZHVjdHMgXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC03IHRleHQtYmxhY2sgei1bMl0gbXQtMjBcIj5cclxuICAgICAgPGRpdiBpZD0ncHJvZHVjdHMnIGNsYXNzTmFtZT0nbWF4LXctWzEyNDBweF0gbXgtYXV0byc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCAgdGV4dC1jZW50ZXJcIj5Qcm9kdWN0czwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbXBsYXRlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hJbnB1dF9Db250YWluZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBteS0wIHB0LTUgXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHctMy8xMiBwLTIuNSByb3VuZGVkLVsxMHB4XSBib3JkZXItc29saWQgYm9yZGVyLWJsYWNrXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWFyY2hJbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0IFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEhlcmVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uQ2hhbmdlPXtoYW5kbGVmaWx0ZXJ9PlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlciBib3JkZXIgaC1bNDVweF0gdy1bMTEwcHhdIG14LTIuNSBteS0wIHJvdW5kZWQtWzEwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImlzQXZhaWxhYmxlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRLZXl3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQmVzdC1TZWxsZXJcIj5CZXN0IFNlbGxlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJlYWR5XCI+UmVhZHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQcmUtT3JkZXJcIj5QcmUgT3JkZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb3JtYXRpb24gdy0xLzUgdGV4dC1jZW50ZXIgbXgtYXV0byBteS0wIHB0LTIuNVwiPlxyXG4gICAgICAgICAge2dldEZpbHRlcmVkKGhhc2lsRmlsdGVyLmxlbmd0aCl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcGxhdGVfQ29udGFpbmVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncmlkIHJlbGF0aXZlIGdyaWQtY29scy1bcmVwZWF0KDQsMWZyKV0gbXgtYXV0byBteS0wIHB4LVs1JV0gcC1bMiVdIFwiPlxyXG4gICAgICAgICAge2hhc2lsRmlsdGVyLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyBoYXNpbEZpbHRlclxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigocHJvZHVjdHMpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaFRlcm0gIT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3RzLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtKVxyXG4gICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdHNcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2l0ZW0uaWR9YH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZW1wbGF0ZSAgYmctd2hpdGUgYm9yZGVyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtLTUgcC01IHJvdW5kZWQtWzEwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItWyNhN2E3YTddIGhvdmVyOnRyYW5zaXRpb24tWzAuNHNdIGhvdmVyOnNoYWRvdy1bMF8xMHB4XzQwcHhfMF9yZ2JhKDAsMCwwLDAuNCldIGhvdmVyOnotWzNdIGhvdmVyOnNjYWxlLTExMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzIwMHB4XSB3LVsyMDBweF0gYm9yZGVyIG10LVs1cHhdIG1iLTUgbXgtMSByb3VuZGVkLVsxMHB4XSBib3JkZXItc29saWQgYm9yZGVyLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLW5hbWUgZm9udC1ib2xkIG1iLTNcIj57aXRlbS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZSBmb250LXNlbWlib2xkIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUnAuIHtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6IGhhc2lsRmlsdGVyLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wbGF0ZVwiIGtleT17dmFsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2YWwuaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLW5hbWVcIj57dmFsLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3ZhbC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZVwiPlJwIHt2YWwucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC04IHB5LTIgYm9yZGVyXCI+U2hvcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sIm5hbWVzIjpbImRhdGEiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIlByb2R1Y3RzIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJoYXNpbEZpbHRlciIsInNldEhhc2lsZmlsdGVyIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlZmlsdGVyIiwiZSIsImZpbHRlckRhdGEiLCJmaWx0ZXIiLCJjYXRlZ29yeSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnZXRGaWx0ZXJlZCIsImZpbHRlcmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZm9ybSIsInNlbGVjdCIsIm5hbWUiLCJvcHRpb24iLCJsZW5ndGgiLCJwcm9kdWN0cyIsIm1hcCIsIml0ZW0iLCJocmVmIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoMyIsImNsYXNzIiwicCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJ2YWwiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Products.jsx\n"));

/***/ })

});