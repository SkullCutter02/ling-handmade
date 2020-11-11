webpackHotUpdate_N_E("pages/products/[category]",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ \"./components/Product.js\");\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SectionTitle */ \"./components/SectionTitle.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Products.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s();\n\n  var category = _ref.category;\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_3__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (data !== undefined) {\n      setProducts(data.filter(function (product) {\n        return product.categories[0].slug === category;\n      }));\n    }\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      titleText: category || category.charAt(0).toUpperCase() + category.slice(1)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-498636396\" + \" \" + \"grid-container\",\n      children: products ? products.map(function (product) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          product: product,\n          imgSrc: \"http://localhost:1337\".concat(product.photo.formats.medium.url),\n          alternativeTxt: product.photo.alternativeText,\n          name: product.name,\n          price: product.price\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 15\n        }, _this);\n      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-498636396\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"498636396\",\n      children: \".grid-container.jsx-498636396{width:100%;height:100%;margin-top:2em;display:grid;grid-template-columns:1fr 1fr 1fr;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9QaHBzdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFHc0IsV0FDQyxZQUNHLGVBQ0YsYUFDcUIsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9QaHBzdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0XCI7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuL1NlY3Rpb25UaXRsZVwiO1xuXG5jb25zdCBQcm9kdWN0cyA9ICh7IGNhdGVnb3J5IH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0UHJvZHVjdHMoXG4gICAgICAgIGRhdGEuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3JpZXNbMF0uc2x1ZyA9PT0gY2F0ZWdvcnkpXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTZWN0aW9uVGl0bGVcbiAgICAgICAgdGl0bGVUZXh0PXtcbiAgICAgICAgICBjYXRlZ29yeSB8fCBjYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhdGVnb3J5LnNsaWNlKDEpXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgIHtwcm9kdWN0cyA/IChcbiAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgICAgaW1nU3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtwcm9kdWN0LnBob3RvLmZvcm1hdHMubWVkaXVtLnVybH1gfVxuICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVHh0PXtwcm9kdWN0LnBob3RvLmFsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Products.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Products, \"j+b6dgtwseimWkGUStVZEmhxHkg=\");\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcz83MTQwIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwiY2F0ZWdvcnkiLCJkYXRhIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2F0ZWdvcmllcyIsInNsdWciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibWFwIiwicGhvdG8iLCJmb3JtYXRzIiwibWVkaXVtIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0IiwibmFtZSIsInByaWNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDakMsTUFBTUMsSUFBSSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUFWLENBQW9CRixJQUFqQzs7QUFEaUMsa0JBRURHLHNEQUFRLEVBRlA7QUFBQSxNQUUxQkMsUUFGMEI7QUFBQSxNQUVoQkMsV0FGZ0I7O0FBSWpDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixJQUFJLEtBQUtPLFNBQWIsRUFBd0I7QUFDdEJGLGlCQUFXLENBQ1RMLElBQUksQ0FBQ1EsTUFBTCxDQUFZLFVBQUNDLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLENBQUNDLFVBQVIsQ0FBbUIsQ0FBbkIsRUFBc0JDLElBQXRCLEtBQStCWixRQUE1QztBQUFBLE9BQVosQ0FEUyxDQUFYO0FBR0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ0MsSUFBRCxDQU5NLENBQVQ7QUFRQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRSxxRUFBQyxxREFBRDtBQUNFLGVBQVMsRUFDUEQsUUFBUSxJQUFJQSxRQUFRLENBQUNhLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUJDLFdBQW5CLEtBQW1DZCxRQUFRLENBQUNlLEtBQVQsQ0FBZSxDQUFmO0FBRm5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FO0FBQUEseUNBQWUsZ0JBQWY7QUFBQSxnQkFDR1YsUUFBUSxHQUNQQSxRQUFRLENBQUNXLEdBQVQsQ0FBYSxVQUFDTixPQUFELEVBQWE7QUFDeEIsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFFRSxpQkFBTyxFQUFFQSxPQUZYO0FBR0UsZ0JBQU0saUNBQTBCQSxPQUFPLENBQUNPLEtBQVIsQ0FBY0MsT0FBZCxDQUFzQkMsTUFBdEIsQ0FBNkJDLEdBQXZELENBSFI7QUFJRSx3QkFBYyxFQUFFVixPQUFPLENBQUNPLEtBQVIsQ0FBY0ksZUFKaEM7QUFLRSxjQUFJLEVBQUVYLE9BQU8sQ0FBQ1ksSUFMaEI7QUFNRSxlQUFLLEVBQUVaLE9BQU8sQ0FBQ2E7QUFOakIsV0FDT2IsT0FBTyxDQUFDYyxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFVRCxPQVhELENBRE8sZ0JBY1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQWpERDs7R0FBTXpCLFE7O0tBQUFBLFE7QUFtRFNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi9TZWN0aW9uVGl0bGVcIjtcblxuY29uc3QgUHJvZHVjdHMgPSAoeyBjYXRlZ29yeSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VDb250ZXh0KENvbnRleHQpLmRhdGE7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFByb2R1Y3RzKFxuICAgICAgICBkYXRhLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5jYXRlZ29yaWVzWzBdLnNsdWcgPT09IGNhdGVnb3J5KVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgIHRpdGxlVGV4dD17XG4gICAgICAgICAgY2F0ZWdvcnkgfHwgY2F0ZWdvcnkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjYXRlZ29yeS5zbGljZSgxKVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICB7cHJvZHVjdHMgPyAoXG4gICAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UHJvZHVjdFxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAgICAgICAgIGltZ1NyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cHJvZHVjdC5waG90by5mb3JtYXRzLm1lZGl1bS51cmx9YH1cbiAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVR4dD17cHJvZHVjdC5waG90by5hbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgICAgICAgbmFtZT17cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products.js\n");

/***/ })

})