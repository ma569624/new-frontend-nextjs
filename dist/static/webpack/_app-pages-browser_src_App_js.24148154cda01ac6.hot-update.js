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

/***/ "(app-pages-browser)/./src/component/newscomponent/MainNews.js":
/*!*************************************************!*\
  !*** ./src/component/newscomponent/MainNews.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n// import { NavLink } from 'react-router-dom';\nvar MainNews = function(param) {\n    var data = param.data, category = param.category;\n    // const API = \"https://news-backend-production.up.railway.app\";\n    var API = \"http://localhost:5000\";\n    // console.warn(data)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"postbox mb-25\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"postbox__thumb\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"\".concat(API).concat(data.Image),\n                        style: {\n                            width: 752,\n                            height: 275,\n                            filter: \"drop-shadow(rgb(102, 102, 102) 4px 4px 1px )\"\n                        },\n                        alt: \"hero image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\newscomponent\\\\MainNews.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\newscomponent\\\\MainNews.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\newscomponent\\\\MainNews.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"postbox__text pt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"title-18 pr-0 mainheading\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            to: \"/inner/\".concat(data._id, \"/\").concat(category),\n                            children: data.Heading\n                        }, void 0, false, {\n                            fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\newscomponent\\\\MainNews.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\newscomponent\\\\MainNews.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"title-16 pr-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: data && data.Matter ? data.Matter.slice(0, 250) : \"\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\newscomponent\\\\MainNews.js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\newscomponent\\\\MainNews.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\newscomponent\\\\MainNews.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\newscomponent\\\\MainNews.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\work\\\\news -ssr\\\\src\\\\component\\\\newscomponent\\\\MainNews.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, _this);\n};\n_c = MainNews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNews);\nvar _c;\n$RefreshReg$(_c, \"MainNews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvbmV3c2NvbXBvbmVudC9NYWluTmV3cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRCO0FBQ0g7QUFDekIsOENBQThDO0FBRzlDLElBQU1FLFdBQVc7UUFBR0MsYUFBQUEsTUFBTUMsaUJBQUFBO0lBQ3RCLGdFQUFnRTtJQUNoRSxJQUFNQyxNQUFNO0lBRVoscUJBQXFCO0lBQ3JCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFFQyxNQUFLOzhCQUNKLDRFQUFDQzt3QkFDR0MsS0FBSyxHQUFTUixPQUFORSxLQUFpQixPQUFYRixLQUFLUyxLQUFLO3dCQUN4QkMsT0FBTzs0QkFBRUMsT0FBTzs0QkFBS0MsUUFBUTs0QkFBS0MsUUFBUTt3QkFBK0M7d0JBQ3pGQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzBCQU9oQiw4REFBQ1g7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDVzt3QkFBR1gsV0FBVTtrQ0FDViw0RUFBQ1AsaURBQUlBOzRCQUFDbUIsSUFBSSxVQUFzQmYsT0FBWkQsS0FBS2lCLEdBQUcsRUFBQyxLQUFZLE9BQVRoQjtzQ0FDM0JELEtBQUtrQixPQUFPOzs7Ozs7Ozs7OztrQ0FHckIsOERBQUNIO3dCQUFHWCxXQUFVO2tDQUNWLDRFQUFDRDtzQ0FDRyw0RUFBQ0E7Z0NBQUlnQix5QkFBeUI7b0NBQUVDLFFBQVFwQixRQUFRQSxLQUFLcUIsTUFBTSxHQUFHckIsS0FBS3FCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsT0FBTztnQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9ySDtLQWxDTXZCO0FBb0NOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvbmV3c2NvbXBvbmVudC9NYWluTmV3cy5qcz9jOTYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5cclxuY29uc3QgTWFpbk5ld3MgPSAoeyBkYXRhLCBjYXRlZ29yeSB9KSA9PiB7XHJcbiAgICAvLyBjb25zdCBBUEkgPSBcImh0dHBzOi8vbmV3cy1iYWNrZW5kLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHBcIjtcclxuICAgIGNvbnN0IEFQSSA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXHJcblxyXG4gICAgLy8gY29uc29sZS53YXJuKGRhdGEpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGJveCBtYi0yNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3Rib3hfX3RodW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9JHtkYXRhLkltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA3NTIsIGhlaWdodDogMjc1LCBmaWx0ZXI6ICdkcm9wLXNoYWRvdyhyZ2IoMTAyLCAxMDIsIDEwMikgNHB4IDRweCAxcHggKScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaGVybyBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJwb3N0LWNhdCBwb3N0LWFic29sdXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5wb2xpdGljPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGJveF9fdGV4dCBwdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlLTE4IHByLTAgbWFpbmhlYWRpbmdcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvaW5uZXIvJHtkYXRhLl9pZH0vJHtjYXRlZ29yeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuSGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlLTE2IHByLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YSAmJiBkYXRhLk1hdHRlciA/IGRhdGEuTWF0dGVyLnNsaWNlKDAsIDI1MCkgOiBcIlwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OZXdzIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIk1haW5OZXdzIiwiZGF0YSIsImNhdGVnb3J5IiwiQVBJIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJJbWFnZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJmaWx0ZXIiLCJhbHQiLCJoNCIsInRvIiwiX2lkIiwiSGVhZGluZyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiTWF0dGVyIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/newscomponent/MainNews.js\n"));

/***/ })

});