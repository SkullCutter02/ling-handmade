webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Featured.js":
/*!********************************!*\
  !*** ./components/Featured.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionTitle */ \"./components/SectionTitle.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ \"./components/Product.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context.js\");\n/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spinner */ \"./spinner.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/components/Featured.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Featured = function Featured() {\n  _s();\n\n  var products = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_5__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      featured = _useState[0],\n      setFeatured = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (products !== undefined) {\n      setFeatured(products.filter(function (item) {\n        return item.featured === true;\n      }));\n    }\n  }, [products]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"jsx-3815920845\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        titleText: \"Featured\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3815920845\" + \" \" + \"grid-container\",\n        children: featured ? featured.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            product: product,\n            imgSrc: \"\".concat(product.photo.formats.medium.url),\n            alternativeTxt: product.photo.alternativeText,\n            name: product.name,\n            price: product.price,\n            categorySlug: product.categories[0].slug,\n            productSlug: product.slug\n          }, product.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 17\n          }, _this);\n        }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: _spinner__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n          alt: \"Spinner\",\n          className: \"jsx-3815920845\" + \" \" + \"spinner\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3815920845\",\n      children: \"section.jsx-3815920845{background:white;padding:1px 0;}.grid-container.jsx-3815920845{margin-top:2em;height:350px;display:grid;grid-auto-flow:row;grid-template-columns:1fr 1fr 1fr;border:1px solid red;}.spinner.jsx-3815920845{grid-column-start:2;}@media screen and (max-width:900px){section.jsx-3815920845{height:840px;}.grid-container.jsx-3815920845{grid-template-columns:1fr 1fr;}.spinner.jsx-3815920845{grid-column:1 / 2;}}@media screen and (max-width:700px){section.jsx-3815920845{height:1170px;}.grid-container.jsx-3815920845{grid-template-columns:1fr;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0ZlYXR1cmVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFHNEIsQUFLRixBQVNLLEFBS0wsQUFJaUIsQUFJWixBQU1KLEFBSVksYUFqQjVCLENBY0EsQ0E1QmEsRUFMQyxDQTJCZCxFQWJGLE1BdUJFLEVBL0JhLEVBaUJiLENBdEJGLFVBTXFCLG1CQUNlLGtDQUNiLHFCQUN2QiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zb2FwLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9GZWF0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4vU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCBzcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCI7XG5cbmNvbnN0IEZlYXR1cmVkID0gKCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW2ZlYXR1cmVkLCBzZXRGZWF0dXJlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldEZlYXR1cmVkKHByb2R1Y3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5mZWF0dXJlZCA9PT0gdHJ1ZSkpO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZVRleHQ9e1wiRmVhdHVyZWRcIn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtmZWF0dXJlZCA/IChcbiAgICAgICAgICAgIGZlYXR1cmVkLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAgICAgICAgICAgaW1nU3JjPXtgJHtwcm9kdWN0LnBob3RvLmZvcm1hdHMubWVkaXVtLnVybH1gfVxuICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUeHQ9e3Byb2R1Y3QucGhvdG8uYWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAgICAgICAgICAgbmFtZT17cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeVNsdWc9e3Byb2R1Y3QuY2F0ZWdvcmllc1swXS5zbHVnfVxuICAgICAgICAgICAgICAgICAgcHJvZHVjdFNsdWc9e3Byb2R1Y3Quc2x1Z31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcGlubmVyXCIgc3JjPXtzcGlubmVyfSBhbHQ9XCJTcGlubmVyXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGhlaWdodDogODQwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMTE3MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWQ7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/soap-website/frontend/components/Featured.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Featured, \"k0hbuf0wgTzBYKfxdmgw7DmIg3E=\");\n\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\n\nvar _c;\n\n$RefreshReg$(_c, \"Featured\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlZC5qcz8zMWI2Il0sIm5hbWVzIjpbIkZlYXR1cmVkIiwicHJvZHVjdHMiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsImRhdGEiLCJ1c2VTdGF0ZSIsImZlYXR1cmVkIiwic2V0RmVhdHVyZWQiLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJpdGVtIiwibWFwIiwicHJvZHVjdCIsInBob3RvIiwiZm9ybWF0cyIsIm1lZGl1bSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIm5hbWUiLCJwcmljZSIsImNhdGVnb3JpZXMiLCJzbHVnIiwiaWQiLCJzcGlubmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUFWLENBQW9CQyxJQUFyQzs7QUFEcUIsa0JBRVdDLHNEQUFRLEVBRm5CO0FBQUEsTUFFZEMsUUFGYztBQUFBLE1BRUpDLFdBRkk7O0FBSXJCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUCxRQUFRLEtBQUtRLFNBQWpCLEVBQTRCO0FBQzFCRixpQkFBVyxDQUFDTixRQUFRLENBQUNTLE1BQVQsQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ0wsUUFBTCxLQUFrQixJQUE1QjtBQUFBLE9BQWhCLENBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNMLFFBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLDhCQUNFLHFFQUFDLHFEQUFEO0FBQWMsaUJBQVMsRUFBRTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLDRDQUFlLGdCQUFmO0FBQUEsa0JBQ0dLLFFBQVEsR0FDUEEsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3hCLDhCQUNFLHFFQUFDLGdEQUFEO0FBRUUsbUJBQU8sRUFBRUEsT0FGWDtBQUdFLGtCQUFNLFlBQUtBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxPQUFkLENBQXNCQyxNQUF0QixDQUE2QkMsR0FBbEMsQ0FIUjtBQUlFLDBCQUFjLEVBQUVKLE9BQU8sQ0FBQ0MsS0FBUixDQUFjSSxlQUpoQztBQUtFLGdCQUFJLEVBQUVMLE9BQU8sQ0FBQ00sSUFMaEI7QUFNRSxpQkFBSyxFQUFFTixPQUFPLENBQUNPLEtBTmpCO0FBT0Usd0JBQVksRUFBRVAsT0FBTyxDQUFDUSxVQUFSLENBQW1CLENBQW5CLEVBQXNCQyxJQVB0QztBQVFFLHVCQUFXLEVBQUVULE9BQU8sQ0FBQ1M7QUFSdkIsYUFDT1QsT0FBTyxDQUFDVSxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFZRCxTQWJELENBRE8sZ0JBZ0JQO0FBQXlCLGFBQUcsRUFBRUMsZ0RBQTlCO0FBQXVDLGFBQUcsRUFBQyxTQUEzQztBQUFBLDhDQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1RUQsQ0FqRkQ7O0dBQU14QixROztLQUFBQSxRO0FBbUZTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmVhdHVyZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuL1NlY3Rpb25UaXRsZVwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgc3Bpbm5lciBmcm9tIFwiLi4vc3Bpbm5lclwiO1xuXG5jb25zdCBGZWF0dXJlZCA9ICgpID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VDb250ZXh0KENvbnRleHQpLmRhdGE7XG4gIGNvbnN0IFtmZWF0dXJlZCwgc2V0RmVhdHVyZWRdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9kdWN0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRGZWF0dXJlZChwcm9kdWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZmVhdHVyZWQgPT09IHRydWUpKTtcbiAgICB9XG4gIH0sIFtwcm9kdWN0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGVUZXh0PXtcIkZlYXR1cmVkXCJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICB7ZmVhdHVyZWQgPyAoXG4gICAgICAgICAgICBmZWF0dXJlZC5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UHJvZHVjdFxuICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgICAgIGltZ1NyYz17YCR7cHJvZHVjdC5waG90by5mb3JtYXRzLm1lZGl1bS51cmx9YH1cbiAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVHh0PXtwcm9kdWN0LnBob3RvLmFsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlTbHVnPXtwcm9kdWN0LmNhdGVnb3JpZXNbMF0uc2x1Z31cbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RTbHVnPXtwcm9kdWN0LnNsdWd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3Bpbm5lclwiIHNyYz17c3Bpbm5lcn0gYWx0PVwiU3Bpbm5lclwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDg0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDExNzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Featured.js\n");

/***/ })

})