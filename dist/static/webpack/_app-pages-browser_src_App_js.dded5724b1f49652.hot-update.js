"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_App_js",{

/***/ "(app-pages-browser)/./src/component/TopKhaber.js":
/*!************************************!*\
  !*** ./src/component/TopKhaber.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/Api */ \"(app-pages-browser)/./src/Api/Api.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ \"(app-pages-browser)/./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"(app-pages-browser)/./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar TopKhaber = function(param) {\n    var color = param.color;\n    _s();\n    var responsive = {\n        desktop: {\n            breakpoint: {\n                max: 3000,\n                min: 1024\n            },\n            items: 5,\n            slidesToSlide: 3\n        },\n        tablet: {\n            breakpoint: {\n                max: 1024,\n                min: 464\n            },\n            items: 2,\n            slidesToSlide: 2\n        },\n        mobile: {\n            breakpoint: {\n                max: 464,\n                min: 0\n            },\n            items: 1,\n            slidesToSlide: 1\n        }\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), data = _useState[0], setdata = _useState[1];\n    var API = \"http://localhost:5000\";\n    // const API = \"https://news-backend-production.up.railway.app\";\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), id = _useState1[0], setid = _useState1[1];\n    var getdata = function() {\n        (0,_Api_Api__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"blogs?Category=TopKhabare&Status=active\").then(function(response) {\n            setdata(response.data);\n            console.warn(response);\n        // console.warn(response)\n        })[\"catch\"](function(error) {\n        // Handle error\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getdata();\n    }, []);\n    // console.log(color);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"hero-area\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-lg-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: color.BackgroundColor2,\n                            padding: 5,\n                            boxShadow: \"rgba(255, 0, 0, 0.53) 3px 4px 4px 1px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            style: {\n                                gap: \"6px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                swipeable: false,\n                                draggable: false,\n                                showDots: false,\n                                responsive: responsive,\n                                ssr: true,\n                                infinite: true,\n                                autoPlay: false,\n                                autoPlaySpeed: false,\n                                keyBoardControl: false,\n                                customTransition: \"all .5\",\n                                transitionDuration: 500,\n                                containerClass: \"carousel-container\",\n                                removeArrowOnDeviceType: [\n                                    \"tablet\",\n                                    \"mobile\"\n                                ],\n                                deviceType: \"desktop\",\n                                dotListClass: \"custom-dot-list-style\",\n                                itemClass: \"carousel-item-padding-40-px\",\n                                children: data.map(function(item, key) {\n                                    return(// <div\n                                    //     className=\"col-lg-3 col-md-6\"\n                                    //     style={{ paddingRight: 1 }}\n                                    // >\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        style: {\n                                            filter: \"drop-shadow(rgb(102, 102, 102) 4px 4px 1px )\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"hero pos-relative\",\n                                            style: {\n                                                minHeight: 165\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"hero__thumb\",\n                                                    \"data-overlay\": \"dark-gradient\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: \"\".concat(API).concat(item.Image),\n                                                        style: {\n                                                            height: 165\n                                                        },\n                                                        alt: \"hero image\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 57\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 53\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"hero__text hero__text-small\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        className: \"pr-0\",\n                                                        style: {\n                                                            fontWeight: 900,\n                                                            textShadow: \"rgb(21 47 130) 4px 4px\"\n                                                        },\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                            href: \"/inner/\".concat(item._id, \"/TopKhabare\"),\n                                                            children: [\n                                                                item.Heading.slice(0, 40),\n                                                                \" ...\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                                            lineNumber: 94,\n                                                            columnNumber: 61\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 57\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 53\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 49\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 45\n                                    }, _this));\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                lineNumber: 55,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                            lineNumber: 53,\n                            columnNumber: 29\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                        lineNumber: 52,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, _this);\n};\n_s(TopKhaber, \"JEYJhWfZOvpAdj7evYmrpO1gcZE=\");\n_c = TopKhaber;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopKhaber);\nvar _c;\n$RefreshReg$(_c, \"TopKhaber\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvVG9wS2hhYmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUNlO0FBQ0M7QUFDaEI7QUFFN0IsSUFBTUssWUFBWTtRQUFHQyxjQUFBQTs7SUFDakIsSUFBTUMsYUFBYTtRQUNmQyxTQUFTO1lBQ0xDLFlBQVk7Z0JBQUVDLEtBQUs7Z0JBQU1DLEtBQUs7WUFBSztZQUNuQ0MsT0FBTztZQUNQQyxlQUFlO1FBQ25CO1FBQ0FDLFFBQVE7WUFDSkwsWUFBWTtnQkFBRUMsS0FBSztnQkFBTUMsS0FBSztZQUFJO1lBQ2xDQyxPQUFPO1lBQ1BDLGVBQWU7UUFDbkI7UUFDQUUsUUFBUTtZQUNKTixZQUFZO2dCQUFFQyxLQUFLO2dCQUFLQyxLQUFLO1lBQUU7WUFDL0JDLE9BQU87WUFDUEMsZUFBZTtRQUNuQjtJQUNKO0lBRUEsSUFBd0JaLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQTVCZSxPQUFpQmYsY0FBWGdCLFVBQVdoQjtJQUN4QixJQUFNaUIsTUFBTTtJQUNaLGdFQUFnRTtJQUNoRSxJQUFvQmpCLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF0QmtCLEtBQWFsQixlQUFUbUIsUUFBU25CO0lBQ3BCLElBQU1vQixVQUFVO1FBRVpuQixvREFBR0EsQ0FBQywyQ0FBMkNvQixJQUFJLENBQUMsU0FBQ0M7WUFDakROLFFBQVFNLFNBQVNQLElBQUk7WUFDckJRLFFBQVFDLElBQUksQ0FBQ0Y7UUFDYix5QkFBeUI7UUFDN0IsRUFDS0csQ0FBQUEsUUFBSyxDQUFDLFNBQUNDO1FBQ0osZUFBZTtRQUNuQjtJQUNSO0lBRUEzQixnREFBU0EsQ0FBQztRQUNOcUI7SUFDSixHQUFHLEVBQUU7SUFDTCxzQkFBc0I7SUFFdEIscUJBQ0ksOERBQUNPO1FBQVFDLFdBQVU7a0JBQ2YsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ1gsNEVBQUNDO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUlDLE9BQU87NEJBQUVDLGlCQUFpQjFCLE1BQU0yQixnQkFBZ0I7NEJBQUVDLFNBQVM7NEJBQUdDLFdBQVc7d0JBQXlDO2tDQUNuSCw0RUFBQ0w7NEJBQUlELFdBQVU7NEJBQUdFLE9BQU87Z0NBQUVLLEtBQUs7NEJBQU07c0NBRWxDLDRFQUFDakMsNERBQVFBO2dDQUNMa0MsV0FBVztnQ0FDWEMsV0FBVztnQ0FDWEMsVUFBVTtnQ0FDVmhDLFlBQVlBO2dDQUNaaUMsS0FBSztnQ0FDTEMsVUFBVTtnQ0FDVkMsVUFBVTtnQ0FDVkMsZUFBZTtnQ0FDZkMsaUJBQWlCO2dDQUNqQkMsa0JBQWlCO2dDQUNqQkMsb0JBQW9CO2dDQUNwQkMsZ0JBQWU7Z0NBQ2ZDLHlCQUF5QjtvQ0FBQztvQ0FBVTtpQ0FBUztnQ0FDN0NDLFlBQVk7Z0NBQ1pDLGNBQWE7Z0NBQ2JDLFdBQVU7MENBS05uQyxLQUFLb0MsR0FBRyxDQUFDLFNBQUNDLE1BQU1DOzJDQUNaLE9BQU87b0NBQ1Asb0NBQW9DO29DQUNwQyxrQ0FBa0M7b0NBQ2xDLElBQUk7a0RBRUosOERBQUN4Qjt3Q0FBSUQsV0FBVTt3Q0FBR0UsT0FBTzs0Q0FBRXdCLFFBQVE7d0NBQWdEO2tEQUMvRSw0RUFBQ3pCOzRDQUFJRCxXQUFVOzRDQUFvQkUsT0FBTztnREFBRXlCLFdBQVc7NENBQUk7OzhEQUN2RCw4REFBQzFCO29EQUFJRCxXQUFVO29EQUFjNEIsZ0JBQWE7OERBQ3RDLDRFQUFDQzt3REFDR0MsS0FBSyxHQUFTTixPQUFObkMsS0FBaUIsT0FBWG1DLEtBQUtPLEtBQUs7d0RBQ3hCN0IsT0FBTzs0REFBRThCLFFBQVE7d0RBQUk7d0RBQ3JCQyxLQUFJOzs7Ozs7Ozs7Ozs4REFHWiw4REFBQ2hDO29EQUFJRCxXQUFVOzhEQUVYLDRFQUFDa0M7d0RBQUdsQyxXQUFVO3dEQUFPRSxPQUFPOzREQUFFaUMsWUFBWTs0REFBS0MsWUFBWTt3REFBeUI7a0VBQ2hGLDRFQUFDN0QsaURBQUlBOzREQUFDOEQsTUFBTSxVQUFtQixPQUFUYixLQUFLYyxHQUFHLEVBQUM7O2dFQUFlZCxLQUFLZSxPQUFPLENBQUNDLEtBQUssQ0FBQyxHQUFHO2dFQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXBJO0dBdEdNaEU7S0FBQUE7QUF3R04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Ub3BLaGFiZXIuanM/MjFkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uL0FwaS9BcGknO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5pbXBvcnQgJ3JlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFRvcEtoYWJlciA9ICh7IGNvbG9yIH0pID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgICAgICAgZGVza3RvcDoge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICAgICAgICAgIGl0ZW1zOiA1LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlOiAzLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFibGV0OiB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxyXG4gICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgICAgc2xpZGVzVG9TbGlkZTogMiwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcclxuICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgIFxyXG4gICAgY29uc3QgW2RhdGEsIHNldGRhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBBUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xyXG4gICAgLy8gY29uc3QgQVBJID0gXCJodHRwczovL25ld3MtYmFja2VuZC1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwXCI7XHJcbiAgICBjb25zdCBbaWQsIHNldGlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgZ2V0ZGF0YSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgQXBpKCdibG9ncz9DYXRlZ29yeT1Ub3BLaGFiYXJlJlN0YXR1cz1hY3RpdmUnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRkYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4ocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihyZXNwb25zZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRkYXRhKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGNvbG9yKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8tYXJlYVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IuQmFja2dyb3VuZENvbG9yMiwgcGFkZGluZzogNSwgYm94U2hhZG93OiAncmdiYSgyNTUsIDAsIDAsIDAuNTMpIDNweCA0cHggNHB4IDFweCcsIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyBnYXA6ICc2cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEb3RzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVNwZWVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Qm9hcmRDb250cm9sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVHJhbnNpdGlvbj1cImFsbCAuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUFycm93T25EZXZpY2VUeXBlPXtbJ3RhYmxldCcsICdtb2JpbGUnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlVHlwZT17J2Rlc2t0b3AnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJjdXN0b20tZG90LWxpc3Qtc3R5bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJjYXJvdXNlbC1pdGVtLXBhZGRpbmctNDAtcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbUJ1dHRvbkdyb3VwPXs8Q3VzdG9tQnV0dG9uR3JvdXAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGtleSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAxIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IGZpbHRlcjogJ2Ryb3Atc2hhZG93KHJnYigxMDIsIDEwMiwgMTAyKSA0cHggNHB4IDFweCApJywgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBwb3MtcmVsYXRpdmVcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IDE2NSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fdGh1bWJcIiBkYXRhLW92ZXJsYXk9XCJkYXJrLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0ke2l0ZW0uSW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAxNjUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaGVybyBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX190ZXh0IGhlcm9fX3RleHQtc21hbGxcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByLTBcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA5MDAsIHRleHRTaGFkb3c6ICdyZ2IoMjEgNDcgMTMwKSA0cHggNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9pbm5lci8ke2l0ZW0uX2lkfS9Ub3BLaGFiYXJlYH0+e2l0ZW0uSGVhZGluZy5zbGljZSgwLCA0MCl9IC4uLjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEtoYWJlcjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBpIiwiQ2Fyb3VzZWwiLCJMaW5rIiwiVG9wS2hhYmVyIiwiY29sb3IiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsInNsaWRlc1RvU2xpZGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJkYXRhIiwic2V0ZGF0YSIsIkFQSSIsImlkIiwic2V0aWQiLCJnZXRkYXRhIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsIndhcm4iLCJjYXRjaCIsImVycm9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiQmFja2dyb3VuZENvbG9yMiIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJnYXAiLCJzd2lwZWFibGUiLCJkcmFnZ2FibGUiLCJzaG93RG90cyIsInNzciIsImluZmluaXRlIiwiYXV0b1BsYXkiLCJhdXRvUGxheVNwZWVkIiwia2V5Qm9hcmRDb250cm9sIiwiY3VzdG9tVHJhbnNpdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsImNvbnRhaW5lckNsYXNzIiwicmVtb3ZlQXJyb3dPbkRldmljZVR5cGUiLCJkZXZpY2VUeXBlIiwiZG90TGlzdENsYXNzIiwiaXRlbUNsYXNzIiwibWFwIiwiaXRlbSIsImtleSIsImZpbHRlciIsIm1pbkhlaWdodCIsImRhdGEtb3ZlcmxheSIsImltZyIsInNyYyIsIkltYWdlIiwiaGVpZ2h0IiwiYWx0IiwiaDMiLCJmb250V2VpZ2h0IiwidGV4dFNoYWRvdyIsImhyZWYiLCJfaWQiLCJIZWFkaW5nIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/TopKhaber.js\n"));

/***/ })

});