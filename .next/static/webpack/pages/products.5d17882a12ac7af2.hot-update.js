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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Products() {\n    _s();\n    const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [hasilFilter, setHasilfilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const handlefilter = async () => {\n    //   const filterData = await data.filter((e) => {\n    //     return e.category.toLowerCase().includes(keyword.toLowerCase());\n    //   });\n    //   setHasilfilter(filterData);\n    // };\n    setHasilfilter(data);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            const fetchData = async ()=>{\n                const response = await fetch(\"https://api.jsonbin.io/v3/b/640fbd0cace6f33a22ee575e\");\n                const item = await response.json();\n                setData(item.record);\n            };\n            fetchData();\n        } catch (err) {\n            console.log(err);\n        }\n    }, []);\n    function getFiltered(filtered) {\n        if (filtered === 0) {\n            return \"Barang Tidak Ada\";\n        } else {\n            return filtered + \" Products \";\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-7 text-black z-[2] mt-20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"products\",\n                    className: \"max-w-[1240px] mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold text-center\",\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"templateContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"searchInput_Container flex items-center justify-center mx-auto my-0 pt-5 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"border w-3/12 p-2.5 rounded-[10px] border-solid border-black\",\n                                    id: \"searchInput\",\n                                    type: \"text \",\n                                    placeholder: \"Search Here\",\n                                    onChange: (event)=>{\n                                        setSearchTerm(event.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"filter-area\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            className: \"filter border h-[45px] w-[110px] mx-2.5 my-0 rounded-[10px] border-solid border-black\",\n                                            name: \"isAvailable\",\n                                            value: keyword,\n                                            onChange: (e)=>setKeyword(e.target.value),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"\",\n                                                    children: \"All\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Best-Seller\",\n                                                    children: \"Best Seller\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Ready\",\n                                                    children: \"Ready\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Pre-Order\",\n                                                    children: \"Pre Order\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"information w-1/5 text-center mx-auto my-0 pt-2.5\",\n                            children: getFiltered(hasilFilter.length)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"template_Container items-center justify-center grid relative grid-cols-[repeat(4,1fr)] mx-auto my-0 px-[5%] p-[2%] \",\n                            children: [\n                                console.log(hasilFilter),\n                                hasilFilter.length > 0 ? hasilFilter.filter((products)=>searchTerm !== \"\" ? products.name.toLowerCase().includes(searchTerm) : products).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\".concat(item.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"template bg-white border justify-center items-center m-5 p-5 rounded-[10px] border-solid border-[#a7a7a7] hover:transition-[0.4s] hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.4)] hover:z-[3] hover:scale-110\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: item.image,\n                                                    alt: \"\",\n                                                    className: \"h-[200px] w-[200px] border mt-[5px] mb-5 mx-1 rounded-[10px] border-solid border-black\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    class: \"card-name font-bold mb-3\",\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    class: \"card-text \",\n                                                    children: item.description\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"price font-semibold mt-3\",\n                                                    children: [\n                                                        \"$ \",\n                                                        item.price\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, item.id, false, {\n                                        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, this)) : hasilFilter.filter((val)=>{\n                                    if (searchTerm == \"\") {\n                                        return val;\n                                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {\n                                        return val;\n                                    }\n                                }).map((val)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"template\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: val.image,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                class: \"card-name\",\n                                                children: val.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 117,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                class: \"card-text\",\n                                                children: val.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 118,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"price\",\n                                                children: [\n                                                    \"$ \",\n                                                    val.price\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 119,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"px-8 py-2 border\",\n                                                children: \"Shop\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                                lineNumber: 120,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, val.id, true, {\n                                        fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 21\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\NODE\\\\TEFA\\\\Chapter 3\\\\first-nextproject\\\\components\\\\Products.jsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Products, \"d8gkvDxUvpyj8ixltxYMRW6DQY4=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRCxPQUFNOzhEQUFjcEMsS0FBS3NDLFdBQVc7Ozs7Ozs4REFDdkMsOERBQUNEO29EQUFFNUIsV0FBVTs7d0RBQTJCO3dEQUNuQ1QsS0FBS3VDLEtBQUs7Ozs7Ozs7Ozs7Ozs7dUNBVmF2QyxLQUFLVSxFQUFFOzs7O2dEQWUzQ25CLFlBQVlrQyxNQUFNLENBQUMsQ0FBQ2UsTUFBUTtvQ0FDeEIsSUFBSS9DLGNBQWMsSUFBSTt3Q0FDcEIsT0FBTytDO29DQUNULE9BQU8sSUFDTEEsSUFBSW5CLElBQUksQ0FBQ00sV0FBVyxHQUFHQyxRQUFRLENBQUNuQyxXQUFXa0MsV0FBVyxLQUN0RDt3Q0FDQSxPQUFPYTtvQ0FDVCxDQUFDO2dDQUNILEdBQ0NYLEdBQUcsQ0FBQyxDQUFDVyxNQUFRO29DQUNaLHFCQUNFLDhEQUFDaEM7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDc0I7Z0RBQUlDLEtBQUtRLElBQUlQLEtBQUs7Z0RBQUVDLEtBQUk7Ozs7OzswREFDekIsOERBQUNDO2dEQUFHQyxPQUFNOzBEQUFhSSxJQUFJbkIsSUFBSTs7Ozs7OzBEQUMvQiw4REFBQ2dCO2dEQUFFRCxPQUFNOzBEQUFhSSxJQUFJRixXQUFXOzs7Ozs7MERBQ3JDLDhEQUFDRDtnREFBRTVCLFdBQVU7O29EQUFRO29EQUFHK0IsSUFBSUQsS0FBSzs7Ozs7OzswREFDakMsOERBQUNFO2dEQUFPaEMsV0FBVTswREFBbUI7Ozs7Ozs7dUNBTFIrQixJQUFJOUIsRUFBRTs7Ozs7Z0NBUXpDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCO0dBN0hTdEI7S0FBQUE7QUErSFQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qc3g/OGZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICBjb25zdCBba2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaGFzaWxGaWx0ZXIsIHNldEhhc2lsZmlsdGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlZmlsdGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgZmlsdGVyRGF0YSA9IGF3YWl0IGRhdGEuZmlsdGVyKChlKSA9PiB7XHJcbiAgLy8gICAgIHJldHVybiBlLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgc2V0SGFzaWxmaWx0ZXIoZmlsdGVyRGF0YSk7XHJcbiAgLy8gfTtcclxuICBzZXRIYXNpbGZpbHRlcihkYXRhKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmpzb25iaW4uaW8vdjMvYi82NDBmYmQwY2FjZTZmMzNhMjJlZTU3NWVcIik7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXREYXRhKGl0ZW0ucmVjb3JkKTtcclxuICAgICAgfTtcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBnZXRGaWx0ZXJlZChmaWx0ZXJlZCkge1xyXG4gICAgaWYgKGZpbHRlcmVkID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBcIkJhcmFuZyBUaWRhayBBZGFcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZCArIFwiIFByb2R1Y3RzIFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNyB0ZXh0LWJsYWNrIHotWzJdIG10LTIwXCI+XHJcbiAgICAgIDxkaXYgaWQ9J3Byb2R1Y3RzJyBjbGFzc05hbWU9J21heC13LVsxMjQwcHhdIG14LWF1dG8nPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgIHRleHQtY2VudGVyXCI+UHJvZHVjdHM8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wbGF0ZUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoSW5wdXRfQ29udGFpbmVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbXktMCBwdC01IFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LTMvMTIgcC0yLjUgcm91bmRlZC1bMTBweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFja1wiXHJcbiAgICAgICAgICAgIGlkPVwic2VhcmNoSW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dCBcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBIZXJlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYXJlYVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSA+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyIGJvcmRlciBoLVs0NXB4XSB3LVsxMTBweF0gbXgtMi41IG15LTAgcm91bmRlZC1bMTBweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaXNBdmFpbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2tleXdvcmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEtleXdvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCZXN0LVNlbGxlclwiPkJlc3QgU2VsbGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUmVhZHlcIj5SZWFkeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlByZS1PcmRlclwiPlByZSBPcmRlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvcm1hdGlvbiB3LTEvNSB0ZXh0LWNlbnRlciBteC1hdXRvIG15LTAgcHQtMi41XCI+XHJcbiAgICAgICAgICB7Z2V0RmlsdGVyZWQoaGFzaWxGaWx0ZXIubGVuZ3RoKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wbGF0ZV9Db250YWluZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyaWQgcmVsYXRpdmUgZ3JpZC1jb2xzLVtyZXBlYXQoNCwxZnIpXSBteC1hdXRvIG15LTAgcHgtWzUlXSBwLVsyJV0gXCI+XHJcbiAgICAgICAgICB7Y29uc29sZS5sb2coaGFzaWxGaWx0ZXIpfVxyXG4gICAgICAgICAge2hhc2lsRmlsdGVyLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyBoYXNpbEZpbHRlclxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigocHJvZHVjdHMpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaFRlcm0gIT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3RzLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtKVxyXG4gICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdHNcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2l0ZW0uaWR9YH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbXBsYXRlICBiZy13aGl0ZSBib3JkZXIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG0tNSBwLTUgcm91bmRlZC1bMTBweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bI2E3YTdhN10gaG92ZXI6dHJhbnNpdGlvbi1bMC40c10gaG92ZXI6c2hhZG93LVswXzEwcHhfNDBweF8wX3JnYmEoMCwwLDAsMC40KV0gaG92ZXI6ei1bM10gaG92ZXI6c2NhbGUtMTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bMjAwcHhdIHctWzIwMHB4XSBib3JkZXIgbXQtWzVweF0gbWItNSBteC0xIHJvdW5kZWQtWzEwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtbmFtZSBmb250LWJvbGQgbWItM1wiPntpdGVtLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IFwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlIGZvbnQtc2VtaWJvbGQgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkIHtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6IGhhc2lsRmlsdGVyLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wbGF0ZVwiIGtleT17dmFsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2YWwuaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLW5hbWVcIj57dmFsLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3ZhbC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZVwiPiQge3ZhbC5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTggcHktMiBib3JkZXJcIj5TaG9wPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0czsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJQcm9kdWN0cyIsImtleXdvcmQiLCJzZXRLZXl3b3JkIiwiaGFzaWxGaWx0ZXIiLCJzZXRIYXNpbGZpbHRlciIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiaXRlbSIsImpzb24iLCJyZWNvcmQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0RmlsdGVyZWQiLCJmaWx0ZXJlZCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm0iLCJzZWxlY3QiLCJuYW1lIiwiZSIsIm9wdGlvbiIsImxlbmd0aCIsImZpbHRlciIsInByb2R1Y3RzIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsImhyZWYiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImgzIiwiY2xhc3MiLCJwIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInZhbCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products.jsx\n"));

/***/ })

});