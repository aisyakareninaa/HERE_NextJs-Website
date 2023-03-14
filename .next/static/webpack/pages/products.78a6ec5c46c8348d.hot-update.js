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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Products() {\n    _s();\n    const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [hasilFilter, setHasilfilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    console.log(data);\n    const handlefilter = async ()=>{\n        const filterData = await data.filter((e)=>{\n            return e.category.toLowerCase().includes(keyword.toLowerCase());\n        });\n        setHasilfilter(filterData);\n    };\n    console.log(keyword);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        try {\n            const fetchData = async ()=>{\n                const response = await fetch(\"https://api.jsonbin.io/v3/b/640fbd0cace6f33a22ee575e\");\n                const data = await response.json();\n                setData(data.record);\n            };\n            fetchData();\n        } catch (err) {\n            console.log(err);\n        }\n    }, []);\n    function getFiltered(filtered) {\n        if (filtered === 0) {\n            return \"Barang Tidak Ada\";\n        } else {\n            return filtered + \" Products \";\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-7 text-black z-[2] mt-20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"products\",\n                    className: \"max-w-[1240px] mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold text-center\",\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"templateContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"searchInput_Container flex items-center justify-center mx-auto my-0 pt-5 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"border w-3/12 p-2.5 rounded-[10px] border-solid border-black\",\n                                    id: \"searchInput\",\n                                    type: \"text \",\n                                    placeholder: \"Search Here\",\n                                    onChange: (event)=>{\n                                        setSearchTerm(event.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"filter-area\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        onChange: handlefilter,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            className: \"filter border h-[45px] w-[110px] mx-2.5 my-0 rounded-[10px] border-solid border-black\",\n                                            name: \"isAvailable\",\n                                            value: keyword,\n                                            onChange: (e)=>setKeyword(e.target.value),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"\",\n                                                    children: \"All\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Best-Seller\",\n                                                    children: \"Best Seller\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Ready\",\n                                                    children: \"Ready\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Pre-Order\",\n                                                    children: \"Pre Order\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"information w-1/5 text-center mx-auto my-0 pt-2.5\",\n                            children: getFiltered(hasilFilter.length)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"template_Container items-center justify-center grid relative grid-cols-[repeat(4,1fr)] mx-auto my-0 px-[5%] p-[2%] \",\n                            children: hasilFilter.length > 0 ? hasilFilter.filter((products)=>searchTerm !== \"\" ? products.name.toLowerCase().includes(searchTerm) : products).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\".concat(item.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"template bg-white border justify-center items-center m-5 p-5 rounded-[10px] border-solid border-[#a7a7a7] hover:transition-[0.4s] hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.4)] hover:z-[3] hover:scale-110\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: item.image,\n                                                alt: \"\",\n                                                className: \"h-[200px] w-[200px] border mt-[5px] mb-5 mx-1 rounded-[10px] border-solid border-black\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                class: \"card-name font-bold mb-3\",\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                class: \"card-text \",\n                                                children: item.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"price font-semibold mt-3\",\n                                                children: [\n                                                    \"$ \",\n                                                    item.price\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 21\n                                    }, this)\n                                }, item.id, false, {\n                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 19\n                                }, this)) : hasilFilter.filter((val)=>{\n                                if (searchTerm == \"\") {\n                                    return val;\n                                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {\n                                    return val;\n                                }\n                            }).map((val)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"template\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: val.image,\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            class: \"card-name\",\n                                            children: val.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"card-text\",\n                                            children: val.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"price\",\n                                            children: [\n                                                \"$ \",\n                                                val.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"px-8 py-2 border\",\n                                            children: \"Shop\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 23\n                                        }, this)\n                                    ]\n                                }, val.id, true, {\n                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 21\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Products, \"d8gkvDxUvpyj8ixltxYMRW6DQY4=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDQyxLQUFLSCxLQUFLSSxLQUFLO2dEQUNmQyxLQUFJO2dEQUNKdEIsV0FBVTs7Ozs7OzBEQUVaLDhEQUFDdUI7Z0RBQUdDLE9BQU07MERBQTRCUCxLQUFLTCxJQUFJOzs7Ozs7MERBQy9DLDhEQUFDYTtnREFBRUQsT0FBTTswREFBY1AsS0FBS1MsV0FBVzs7Ozs7OzBEQUN2Qyw4REFBQ0Q7Z0RBQUV6QixXQUFVOztvREFBMkI7b0RBQ25DaUIsS0FBS1UsS0FBSzs7Ozs7Ozs7Ozs7OzttQ0FWYVYsS0FBS2hCLEVBQUU7Ozs7NENBZTNDeEIsWUFBWVMsTUFBTSxDQUFDLENBQUMwQyxNQUFRO2dDQUN4QixJQUFJakQsY0FBYyxJQUFJO29DQUNwQixPQUFPaUQ7Z0NBQ1QsT0FBTyxJQUNMQSxJQUFJaEIsSUFBSSxDQUFDdkIsV0FBVyxHQUFHQyxRQUFRLENBQUNYLFdBQVdVLFdBQVcsS0FDdEQ7b0NBQ0EsT0FBT3VDO2dDQUNULENBQUM7NEJBQ0gsR0FDQ1osR0FBRyxDQUFDLENBQUNZLE1BQVE7Z0NBQ1oscUJBQ0UsOERBQUM3QjtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNtQjs0Q0FBSUMsS0FBS1EsSUFBSVAsS0FBSzs0Q0FBRUMsS0FBSTs7Ozs7O3NEQUN6Qiw4REFBQ0M7NENBQUdDLE9BQU07c0RBQWFJLElBQUloQixJQUFJOzs7Ozs7c0RBQy9CLDhEQUFDYTs0Q0FBRUQsT0FBTTtzREFBYUksSUFBSUYsV0FBVzs7Ozs7O3NEQUNyQyw4REFBQ0Q7NENBQUV6QixXQUFVOztnREFBUTtnREFBRzRCLElBQUlELEtBQUs7Ozs7Ozs7c0RBQ2pDLDhEQUFDRTs0Q0FBTzdCLFdBQVU7c0RBQW1COzs7Ozs7O21DQUxSNEIsSUFBSTNCLEVBQUU7Ozs7OzRCQVF6QyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCO0dBOUhTM0I7S0FBQUE7QUFnSVQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qc3g/OGZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS5qc29uXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICBjb25zdCBba2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaGFzaWxGaWx0ZXIsIHNldEhhc2lsZmlsdGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlZmlsdGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGF3YWl0IGRhdGEuZmlsdGVyKChlKSA9PiB7XHJcbiAgICAgIHJldHVybiBlLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG4gICAgc2V0SGFzaWxmaWx0ZXIoZmlsdGVyRGF0YSk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhrZXl3b3JkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5qc29uYmluLmlvL3YzL2IvNjQwZmJkMGNhY2U2ZjMzYTIyZWU1NzVlXCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0RGF0YShkYXRhLnJlY29yZCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0RmlsdGVyZWQoZmlsdGVyZWQpIHtcclxuICAgIGlmIChmaWx0ZXJlZCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gXCJCYXJhbmcgVGlkYWsgQWRhXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmlsdGVyZWQgKyBcIiBQcm9kdWN0cyBcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTcgdGV4dC1ibGFjayB6LVsyXSBtdC0yMFwiPlxyXG4gICAgICA8ZGl2IGlkPSdwcm9kdWN0cycgY2xhc3NOYW1lPSdtYXgtdy1bMTI0MHB4XSBteC1hdXRvJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkICB0ZXh0LWNlbnRlclwiPlByb2R1Y3RzPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcGxhdGVDb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaElucHV0X0NvbnRhaW5lciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG15LTAgcHQtNSBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgdy0zLzEyIHAtMi41IHJvdW5kZWQtWzEwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItYmxhY2tcIlxyXG4gICAgICAgICAgICBpZD1cInNlYXJjaElucHV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQgXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggSGVyZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWFyZWFcIj5cclxuICAgICAgICAgICAgPGZvcm0gb25DaGFuZ2U9e2hhbmRsZWZpbHRlcn0+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyIGJvcmRlciBoLVs0NXB4XSB3LVsxMTBweF0gbXgtMi41IG15LTAgcm91bmRlZC1bMTBweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaXNBdmFpbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2tleXdvcmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEtleXdvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCZXN0LVNlbGxlclwiPkJlc3QgU2VsbGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUmVhZHlcIj5SZWFkeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlByZS1PcmRlclwiPlByZSBPcmRlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvcm1hdGlvbiB3LTEvNSB0ZXh0LWNlbnRlciBteC1hdXRvIG15LTAgcHQtMi41XCI+XHJcbiAgICAgICAgICB7Z2V0RmlsdGVyZWQoaGFzaWxGaWx0ZXIubGVuZ3RoKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wbGF0ZV9Db250YWluZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyaWQgcmVsYXRpdmUgZ3JpZC1jb2xzLVtyZXBlYXQoNCwxZnIpXSBteC1hdXRvIG15LTAgcHgtWzUlXSBwLVsyJV0gXCI+XHJcbiAgICAgICAgICB7aGFzaWxGaWx0ZXIubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICA/IGhhc2lsRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChwcm9kdWN0cykgPT5cclxuICAgICAgICAgICAgICAgICAgc2VhcmNoVGVybSAhPT0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gcHJvZHVjdHMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7aXRlbS5pZH1gfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcGxhdGUgIGJnLXdoaXRlIGJvcmRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS01IHAtNSByb3VuZGVkLVsxMHB4XSBib3JkZXItc29saWQgYm9yZGVyLVsjYTdhN2E3XSBob3Zlcjp0cmFuc2l0aW9uLVswLjRzXSBob3ZlcjpzaGFkb3ctWzBfMTBweF80MHB4XzBfcmdiYSgwLDAsMCwwLjQpXSBob3Zlcjp6LVszXSBob3ZlcjpzY2FsZS0xMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLVsyMDBweF0gdy1bMjAwcHhdIGJvcmRlciBtdC1bNXB4XSBtYi01IG14LTEgcm91bmRlZC1bMTBweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC1uYW1lIGZvbnQtYm9sZCBtYi0zXCI+e2l0ZW0ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2UgZm9udC1zZW1pYm9sZCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQge2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIDogaGFzaWxGaWx0ZXIuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbXBsYXRlXCIga2V5PXt2YWwuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbC5pbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtbmFtZVwiPnt2YWwubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57dmFsLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+JCB7dmFsLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtOCBweS0yIGJvcmRlclwiPlNob3A8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJuYW1lcyI6WyJkYXRhIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJQcm9kdWN0cyIsImtleXdvcmQiLCJzZXRLZXl3b3JkIiwiaGFzaWxGaWx0ZXIiLCJzZXRIYXNpbGZpbHRlciIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVmaWx0ZXIiLCJmaWx0ZXJEYXRhIiwiZmlsdGVyIiwiZSIsImNhdGVnb3J5IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicmVjb3JkIiwiZXJyIiwiZ2V0RmlsdGVyZWQiLCJmaWx0ZXJlZCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm0iLCJzZWxlY3QiLCJuYW1lIiwib3B0aW9uIiwibGVuZ3RoIiwicHJvZHVjdHMiLCJtYXAiLCJpdGVtIiwiaHJlZiIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaDMiLCJjbGFzcyIsInAiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwidmFsIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Products.jsx\n"));

/***/ })

});