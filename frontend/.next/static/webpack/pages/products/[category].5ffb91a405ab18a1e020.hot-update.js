webpackHotUpdate_N_E("pages/products/[category]",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ \"./components/Product.js\");\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SectionTitle */ \"./components/SectionTitle.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/components/Products.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s();\n\n  var category = _ref.category;\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_3__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (data !== undefined) {\n      setProducts(data.filter(function (product) {\n        return product.categories[0].slug === category;\n      }));\n    }\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      titleText: category && category.charAt(0).toUpperCase() + category.slice(1).replaceAll(\"-\", \" \")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-933507976\" + \" \" + \"grid-container\",\n      children: products ? products.map(function (product) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          imgSrc: \"\".concat(product.photo.formats.medium.url),\n          alternativeTxt: product.photo.alternativeText,\n          name: product.name,\n          price: product.price,\n          categorySlug: category,\n          productSlug: product.slug\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 15\n        }, _this);\n      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-933507976\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"933507976\",\n      children: \".grid-container.jsx-933507976{width:100%;height:100%;margin-top:2em;display:grid;grid-template-columns:1fr 1fr 1fr;}@media screen and (max-width:1000px){.grid-container.jsx-933507976{grid-template-columns:1fr 1fr;}}@media screen and (max-width:600px){.grid-container.jsx-933507976{grid-template-columns:1fr;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDa0IsQUFHc0IsQUFTcUIsQUFNSixXQWRoQixZQUNHLEdBY2YsSUFOQSxRQVBhLGFBQ3FCLGtDQUNwQyIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zb2FwLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9Qcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi9TZWN0aW9uVGl0bGVcIjtcblxuY29uc3QgUHJvZHVjdHMgPSAoeyBjYXRlZ29yeSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VDb250ZXh0KENvbnRleHQpLmRhdGE7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFByb2R1Y3RzKFxuICAgICAgICBkYXRhLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5jYXRlZ29yaWVzWzBdLnNsdWcgPT09IGNhdGVnb3J5KVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgIHRpdGxlVGV4dD17XG4gICAgICAgICAgY2F0ZWdvcnkgJiZcbiAgICAgICAgICBjYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjYXRlZ29yeS5zbGljZSgxKS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIilcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAge3Byb2R1Y3RzID8gKFxuICAgICAgICAgIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFByb2R1Y3RcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgaW1nU3JjPXtgJHtwcm9kdWN0LnBob3RvLmZvcm1hdHMubWVkaXVtLnVybH1gfVxuICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVHh0PXtwcm9kdWN0LnBob3RvLmFsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlTbHVnPXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICBwcm9kdWN0U2x1Zz17cHJvZHVjdC5zbHVnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/soap-website/frontend/components/Products.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Products, \"j+b6dgtwseimWkGUStVZEmhxHkg=\");\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcz83MTQwIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwiY2F0ZWdvcnkiLCJkYXRhIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2F0ZWdvcmllcyIsInNsdWciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicmVwbGFjZUFsbCIsIm1hcCIsInBob3RvIiwiZm9ybWF0cyIsIm1lZGl1bSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIm5hbWUiLCJwcmljZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ2pDLE1BQU1DLElBQUksR0FBR0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FBVixDQUFvQkYsSUFBakM7O0FBRGlDLGtCQUVERyxzREFBUSxFQUZQO0FBQUEsTUFFMUJDLFFBRjBCO0FBQUEsTUFFaEJDLFdBRmdCOztBQUlqQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSU4sSUFBSSxLQUFLTyxTQUFiLEVBQXdCO0FBQ3RCRixpQkFBVyxDQUNUTCxJQUFJLENBQUNRLE1BQUwsQ0FBWSxVQUFDQyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxVQUFSLENBQW1CLENBQW5CLEVBQXNCQyxJQUF0QixLQUErQlosUUFBNUM7QUFBQSxPQUFaLENBRFMsQ0FBWDtBQUdEO0FBQ0YsR0FOUSxFQU1OLENBQUNDLElBQUQsQ0FOTSxDQUFUO0FBUUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMscURBQUQ7QUFDRSxlQUFTLEVBQ1BELFFBQVEsSUFDUkEsUUFBUSxDQUFDYSxNQUFULENBQWdCLENBQWhCLEVBQW1CQyxXQUFuQixLQUNFZCxRQUFRLENBQUNlLEtBQVQsQ0FBZSxDQUFmLEVBQWtCQyxVQUFsQixDQUE2QixHQUE3QixFQUFrQyxHQUFsQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVFFO0FBQUEseUNBQWUsZ0JBQWY7QUFBQSxnQkFDR1gsUUFBUSxHQUNQQSxRQUFRLENBQUNZLEdBQVQsQ0FBYSxVQUFDUCxPQUFELEVBQWE7QUFDeEIsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFFRSxnQkFBTSxZQUFLQSxPQUFPLENBQUNRLEtBQVIsQ0FBY0MsT0FBZCxDQUFzQkMsTUFBdEIsQ0FBNkJDLEdBQWxDLENBRlI7QUFHRSx3QkFBYyxFQUFFWCxPQUFPLENBQUNRLEtBQVIsQ0FBY0ksZUFIaEM7QUFJRSxjQUFJLEVBQUVaLE9BQU8sQ0FBQ2EsSUFKaEI7QUFLRSxlQUFLLEVBQUViLE9BQU8sQ0FBQ2MsS0FMakI7QUFNRSxzQkFBWSxFQUFFeEIsUUFOaEI7QUFPRSxxQkFBVyxFQUFFVSxPQUFPLENBQUNFO0FBUHZCLFdBQ09GLE9BQU8sQ0FBQ2UsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBV0QsT0FaRCxDQURPLGdCQWVQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9ERCxDQWhFRDs7R0FBTTFCLFE7O0tBQUFBLFE7QUFrRVNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi9TZWN0aW9uVGl0bGVcIjtcblxuY29uc3QgUHJvZHVjdHMgPSAoeyBjYXRlZ29yeSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VDb250ZXh0KENvbnRleHQpLmRhdGE7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFByb2R1Y3RzKFxuICAgICAgICBkYXRhLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5jYXRlZ29yaWVzWzBdLnNsdWcgPT09IGNhdGVnb3J5KVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgIHRpdGxlVGV4dD17XG4gICAgICAgICAgY2F0ZWdvcnkgJiZcbiAgICAgICAgICBjYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBjYXRlZ29yeS5zbGljZSgxKS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIilcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAge3Byb2R1Y3RzID8gKFxuICAgICAgICAgIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFByb2R1Y3RcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgaW1nU3JjPXtgJHtwcm9kdWN0LnBob3RvLmZvcm1hdHMubWVkaXVtLnVybH1gfVxuICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVHh0PXtwcm9kdWN0LnBob3RvLmFsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlTbHVnPXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICBwcm9kdWN0U2x1Zz17cHJvZHVjdC5zbHVnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products.js\n");

/***/ })

})