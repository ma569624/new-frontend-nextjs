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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/Api */ \"(app-pages-browser)/./src/Api/Api.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ \"(app-pages-browser)/./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"(app-pages-browser)/./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar hrefpKhaber = function(param) {\n    var color = param.color;\n    _s();\n    var responsive = {\n        deskhrefp: {\n            breakpoint: {\n                max: 3000,\n                min: 1024\n            },\n            items: 5,\n            slideshrefSlide: 3\n        },\n        tablet: {\n            breakpoint: {\n                max: 1024,\n                min: 464\n            },\n            items: 2,\n            slideshrefSlide: 2\n        },\n        mobile: {\n            breakpoint: {\n                max: 464,\n                min: 0\n            },\n            items: 1,\n            slideshrefSlide: 1\n        }\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), data = _useState[0], setdata = _useState[1];\n    var API = \"http://localhost:5000\";\n    // const API = \"https://news-backend-production.up.railway.app\";\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), id = _useState1[0], setid = _useState1[1];\n    var getdata = function() {\n        (0,_Api_Api__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"blogs?Category=hrefpKhabare&Status=active\").then(function(response) {\n            setdata(response.data);\n            console.warn(response);\n        // console.warn(response)\n        })[\"catch\"](function(error) {\n        // Handle error\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getdata();\n    }, []);\n    // console.log(color);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"hero-area\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-lg-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: color.BackgroundColor2,\n                            padding: 5,\n                            boxShadow: \"rgba(255, 0, 0, 0.53) 3px 4px 4px 1px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            style: {\n                                gap: \"6px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                swipeable: false,\n                                draggable: false,\n                                showDots: false,\n                                responsive: responsive,\n                                ssr: true,\n                                infinite: true,\n                                auhrefPlay: false,\n                                auhrefPlaySpeed: false,\n                                keyBoardControl: false,\n                                cushrefmTransition: \"all .5\",\n                                transitionDuration: 500,\n                                containerClass: \"carousel-container\",\n                                removeArrowOnDeviceType: [\n                                    \"tablet\",\n                                    \"mobile\"\n                                ],\n                                deviceType: \"deskhrefp\",\n                                dotListClass: \"cushrefm-dot-list-style\",\n                                itemClass: \"carousel-item-padding-40-px\",\n                                children: data.map(function(item, key) {\n                                    return(// <div\n                                    //     className=\"col-lg-3 col-md-6\"\n                                    //     style={{ paddingRight: 1 }}\n                                    // >\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        style: {\n                                            filter: \"drop-shadow(rgb(102, 102, 102) 4px 4px 1px )\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"hero pos-relative\",\n                                            style: {\n                                                minHeight: 165\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"hero__thumb\",\n                                                    \"data-overlay\": \"dark-gradient\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: \"\".concat(API).concat(item.Image),\n                                                        style: {\n                                                            height: 165\n                                                        },\n                                                        alt: \"hero image\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 57\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 53\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"hero__text hero__text-small\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        className: \"pr-0\",\n                                                        style: {\n                                                            fontWeight: 900,\n                                                            textShadow: \"rgb(21 47 130) 4px 4px\"\n                                                        },\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                            href: \"/inner/\".concat(item._id, \"/hrefpKhabare\"),\n                                                            children: [\n                                                                item.Heading.slice(0, 40),\n                                                                \" ...\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                                            lineNumber: 93,\n                                                            columnNumber: 61\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 57\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 53\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 49\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 45\n                                    }, _this));\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                                lineNumber: 55,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                            lineNumber: 53,\n                            columnNumber: 29\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                        lineNumber: 52,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\TopKhaber.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, _this);\n};\n_s(hrefpKhaber, \"JEYJhWfZOvpAdj7evYmrpO1gcZE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (hrefpKhaber);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvVG9wS2hhYmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUNlO0FBQ0M7QUFDaEI7QUFFN0IsSUFBTUssY0FBYztRQUFHQyxjQUFBQTs7SUFDbkIsSUFBTUMsYUFBYTtRQUNmQyxXQUFXO1lBQ1BDLFlBQVk7Z0JBQUVDLEtBQUs7Z0JBQU1DLEtBQUs7WUFBSztZQUNuQ0MsT0FBTztZQUNQQyxpQkFBaUI7UUFDckI7UUFDQUMsUUFBUTtZQUNKTCxZQUFZO2dCQUFFQyxLQUFLO2dCQUFNQyxLQUFLO1lBQUk7WUFDbENDLE9BQU87WUFDUEMsaUJBQWlCO1FBQ3JCO1FBQ0FFLFFBQVE7WUFDSk4sWUFBWTtnQkFBRUMsS0FBSztnQkFBS0MsS0FBSztZQUFFO1lBQy9CQyxPQUFPO1lBQ1BDLGlCQUFpQjtRQUNyQjtJQUNKO0lBRUEsSUFBd0JaLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQTVCZSxPQUFpQmYsY0FBWGdCLFVBQVdoQjtJQUN4QixJQUFNaUIsTUFBTTtJQUNaLGdFQUFnRTtJQUNoRSxJQUFvQmpCLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF0QmtCLEtBQWFsQixlQUFUbUIsUUFBU25CO0lBQ3BCLElBQU1vQixVQUFVO1FBRVpuQixvREFBR0EsQ0FBQyw2Q0FBNkNvQixJQUFJLENBQUMsU0FBQ0M7WUFDbkROLFFBQVFNLFNBQVNQLElBQUk7WUFDckJRLFFBQVFDLElBQUksQ0FBQ0Y7UUFDYix5QkFBeUI7UUFDN0IsRUFDS0csQ0FBQUEsUUFBSyxDQUFDLFNBQUNDO1FBQ0osZUFBZTtRQUNuQjtJQUNSO0lBRUEzQixnREFBU0EsQ0FBQztRQUNOcUI7SUFDSixHQUFHLEVBQUU7SUFDTCxzQkFBc0I7SUFFdEIscUJBQ0ksOERBQUNPO1FBQVFDLFdBQVU7a0JBQ2YsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ1gsNEVBQUNDO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUlDLE9BQU87NEJBQUVDLGlCQUFpQjFCLE1BQU0yQixnQkFBZ0I7NEJBQUVDLFNBQVM7NEJBQUdDLFdBQVc7d0JBQXlDO2tDQUNuSCw0RUFBQ0w7NEJBQUlELFdBQVU7NEJBQUdFLE9BQU87Z0NBQUVLLEtBQUs7NEJBQU07c0NBRWxDLDRFQUFDakMsNERBQVFBO2dDQUNMa0MsV0FBVztnQ0FDWEMsV0FBVztnQ0FDWEMsVUFBVTtnQ0FDVmhDLFlBQVlBO2dDQUNaaUMsS0FBSztnQ0FDTEMsVUFBVTtnQ0FDVkMsWUFBWTtnQ0FDWkMsaUJBQWlCO2dDQUNqQkMsaUJBQWlCO2dDQUNqQkMsb0JBQW1CO2dDQUNuQkMsb0JBQW9CO2dDQUNwQkMsZ0JBQWU7Z0NBQ2ZDLHlCQUF5QjtvQ0FBQztvQ0FBVTtpQ0FBUztnQ0FDN0NDLFlBQVk7Z0NBQ1pDLGNBQWE7Z0NBQ2JDLFdBQVU7MENBS05uQyxLQUFLb0MsR0FBRyxDQUFDLFNBQUNDLE1BQU1DOzJDQUNaLE9BQU87b0NBQ1Asb0NBQW9DO29DQUNwQyxrQ0FBa0M7b0NBQ2xDLElBQUk7a0RBRUosOERBQUN4Qjt3Q0FBSUQsV0FBVTt3Q0FBR0UsT0FBTzs0Q0FBRXdCLFFBQVE7d0NBQWdEO2tEQUMvRSw0RUFBQ3pCOzRDQUFJRCxXQUFVOzRDQUFvQkUsT0FBTztnREFBRXlCLFdBQVc7NENBQUk7OzhEQUN2RCw4REFBQzFCO29EQUFJRCxXQUFVO29EQUFjNEIsZ0JBQWE7OERBQ3RDLDRFQUFDQzt3REFDR0MsS0FBSyxHQUFTTixPQUFObkMsS0FBaUIsT0FBWG1DLEtBQUtPLEtBQUs7d0RBQ3hCN0IsT0FBTzs0REFBRThCLFFBQVE7d0RBQUk7d0RBQ3JCQyxLQUFJOzs7Ozs7Ozs7Ozs4REFHWiw4REFBQ2hDO29EQUFJRCxXQUFVOzhEQUNYLDRFQUFDa0M7d0RBQUdsQyxXQUFVO3dEQUFPRSxPQUFPOzREQUFFaUMsWUFBWTs0REFBS0MsWUFBWTt3REFBeUI7a0VBQ2hGLDRFQUFDN0QsaURBQUlBOzREQUFDOEQsTUFBTSxVQUFtQixPQUFUYixLQUFLYyxHQUFHLEVBQUM7O2dFQUFpQmQsS0FBS2UsT0FBTyxDQUFDQyxLQUFLLENBQUMsR0FBRztnRUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWV0STtHQXJHTWhFO0FBdUdOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvVG9wS2hhYmVyLmpzPzIxZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwaSBmcm9tICcuLi9BcGkvQXBpJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBocmVmcEtoYWJlciA9ICh7IGNvbG9yIH0pID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgICAgICAgZGVza2hyZWZwOiB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcclxuICAgICAgICAgICAgaXRlbXM6IDUsXHJcbiAgICAgICAgICAgIHNsaWRlc2hyZWZTbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaHJlZiAxLlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFibGV0OiB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxyXG4gICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgICAgc2xpZGVzaHJlZlNsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBocmVmIDEuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2JpbGU6IHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXHJcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNocmVmU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGhyZWYgMS5cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0ZGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IEFQSSA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXHJcbiAgICAvLyBjb25zdCBBUEkgPSBcImh0dHBzOi8vbmV3cy1iYWNrZW5kLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHBcIjtcclxuICAgIGNvbnN0IFtpZCwgc2V0aWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBnZXRkYXRhID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBBcGkoJ2Jsb2dzP0NhdGVnb3J5PWhyZWZwS2hhYmFyZSZTdGF0dXM9YWN0aXZlJykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0ZGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4ocmVzcG9uc2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0ZGF0YSgpO1xyXG4gICAgfSwgW10pXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb2xvcik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvLWFyZWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLkJhY2tncm91bmRDb2xvcjIsIHBhZGRpbmc6IDUsIGJveFNoYWRvdzogJ3JnYmEoMjU1LCAwLCAwLCAwLjUzKSAzcHggNHB4IDRweCAxcHgnLCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgZ2FwOiAnNnB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2lwZWFibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RG90cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1aHJlZlBsYXk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWhyZWZQbGF5U3BlZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlCb2FyZENvbnRyb2w9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXNocmVmbVRyYW5zaXRpb249XCJhbGwgLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZT17Wyd0YWJsZXQnLCAnbW9iaWxlJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZVR5cGU9eydkZXNraHJlZnAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJjdXNocmVmbS1kb3QtbGlzdC1zdHlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DbGFzcz1cImNhcm91c2VsLWl0ZW0tcGFkZGluZy00MC1weFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3VzaHJlZm1CdXRocmVmbkdyb3VwPXs8Q3VzaHJlZm1CdXRocmVmbkdyb3VwIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBrZXkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyBmaWx0ZXI6ICdkcm9wLXNoYWRvdyhyZ2IoMTAyLCAxMDIsIDEwMikgNHB4IDRweCAxcHggKScsIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8gcG9zLXJlbGF0aXZlXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAxNjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX3RodW1iXCIgZGF0YS1vdmVybGF5PVwiZGFyay1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9JHtpdGVtLkltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMTY1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImhlcm8gaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fdGV4dCBoZXJvX190ZXh0LXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByLTBcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA5MDAsIHRleHRTaGFkb3c6ICdyZ2IoMjEgNDcgMTMwKSA0cHggNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9pbm5lci8ke2l0ZW0uX2lkfS9ocmVmcEtoYWJhcmVgfT57aXRlbS5IZWFkaW5nLnNsaWNlKDAsIDQwKX0gLi4uPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaHJlZnBLaGFiZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwaSIsIkNhcm91c2VsIiwiTGluayIsImhyZWZwS2hhYmVyIiwiY29sb3IiLCJyZXNwb25zaXZlIiwiZGVza2hyZWZwIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzaHJlZlNsaWRlIiwidGFibGV0IiwibW9iaWxlIiwiZGF0YSIsInNldGRhdGEiLCJBUEkiLCJpZCIsInNldGlkIiwiZ2V0ZGF0YSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJ3YXJuIiwiY2F0Y2giLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkJhY2tncm91bmRDb2xvcjIiLCJwYWRkaW5nIiwiYm94U2hhZG93IiwiZ2FwIiwic3dpcGVhYmxlIiwiZHJhZ2dhYmxlIiwic2hvd0RvdHMiLCJzc3IiLCJpbmZpbml0ZSIsImF1aHJlZlBsYXkiLCJhdWhyZWZQbGF5U3BlZWQiLCJrZXlCb2FyZENvbnRyb2wiLCJjdXNocmVmbVRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJjb250YWluZXJDbGFzcyIsInJlbW92ZUFycm93T25EZXZpY2VUeXBlIiwiZGV2aWNlVHlwZSIsImRvdExpc3RDbGFzcyIsIml0ZW1DbGFzcyIsIm1hcCIsIml0ZW0iLCJrZXkiLCJmaWx0ZXIiLCJtaW5IZWlnaHQiLCJkYXRhLW92ZXJsYXkiLCJpbWciLCJzcmMiLCJJbWFnZSIsImhlaWdodCIsImFsdCIsImgzIiwiZm9udFdlaWdodCIsInRleHRTaGFkb3ciLCJocmVmIiwiX2lkIiwiSGVhZGluZyIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/TopKhaber.js\n"));

/***/ })

});