webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Featured.js":
/*!********************************!*\
  !*** ./components/Featured.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionTitle */ \"./components/SectionTitle.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Featured.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Featured = function Featured() {\n  _s();\n\n  var products = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      featured = _useState[0],\n      setFeatured = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (products !== undefined) {\n      setFeatured(products.filter(function (item) {\n        return item.featured === true;\n      }));\n    }\n  }, [products]);\n\n  if (featured.length > 3) {\n    throw new Error(\"More than 3 featured products\");\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"jsx-1873243587\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        titleText: \"Featured\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1873243587\" + \" \" + \"grid-container\",\n        children: featured ? featured.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1873243587\" + \" \" + \"grid-item\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"http://localhost:1337\".concat(product.photo.formats.medium.url),\n              alt: product.photo.alternativeText,\n              className: \"jsx-1873243587\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-1873243587\" + \" \" + \"name\",\n              children: product.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-1873243587\" + \" \" + \"price\",\n              children: [\"$\", product.price]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 17\n          }, _this);\n        }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            margin: \"0 auto\"\n          },\n          className: \"jsx-1873243587\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1873243587\",\n      children: \"section.jsx-1873243587{height:500px;background:#d3d3d3;padding:1px 0;}.grid-container.jsx-1873243587{margin-top:2em;height:350px;display:grid;grid-auto-flow:column;grid-template-columns:1fr 1fr 1fr;}.grid-item.jsx-1873243587{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}p.jsx-1873243587{font-size:1.5rem;}.name.jsx-1873243587{margin-top:10px;}img.jsx-1873243587{width:80%;height:70%;border:3px solid #af9b7d;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9QaHBzdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0ZlYXR1cmVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFHd0IsQUFNRSxBQVFGLEFBT0ksQUFJRCxBQUlOLFVBQ0MsR0E3QlEsRUFNTixDQW1CZixDQUpBLElBUzJCLE9BdkJaLElBTkMsU0FPUSxLQU54QixBQTZCQSxpQkF0Qm9DLFdBS0wsdUJBSi9CLG9HQUtxQiw2RkFDRyw4RUFDeEIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1BocHN0b3JtUHJvamVjdHMvc29hcC13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvRmVhdHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuL1NlY3Rpb25UaXRsZVwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IEZlYXR1cmVkID0gKCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW2ZlYXR1cmVkLCBzZXRGZWF0dXJlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldEZlYXR1cmVkKHByb2R1Y3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5mZWF0dXJlZCA9PT0gdHJ1ZSkpO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgaWYgKGZlYXR1cmVkLmxlbmd0aCA+IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNb3JlIHRoYW4gMyBmZWF0dXJlZCBwcm9kdWN0c1wiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGVUZXh0PXtcIkZlYXR1cmVkXCJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICB7ZmVhdHVyZWQgPyAoXG4gICAgICAgICAgICBmZWF0dXJlZC5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3Byb2R1Y3QucGhvdG8uZm9ybWF0cy5tZWRpdW0udXJsfWB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5waG90by5hbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj4ke3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIgfX0+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2FmOWI3ZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Featured.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Featured, \"k0hbuf0wgTzBYKfxdmgw7DmIg3E=\");\n\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\n\nvar _c;\n\n$RefreshReg$(_c, \"Featured\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlZC5qcz8zMWI2Il0sIm5hbWVzIjpbIkZlYXR1cmVkIiwicHJvZHVjdHMiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsImRhdGEiLCJ1c2VTdGF0ZSIsImZlYXR1cmVkIiwic2V0RmVhdHVyZWQiLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwiRXJyb3IiLCJtYXAiLCJwcm9kdWN0IiwicGhvdG8iLCJmb3JtYXRzIiwibWVkaXVtIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0IiwibmFtZSIsInByaWNlIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUFWLENBQW9CQyxJQUFyQzs7QUFEcUIsa0JBRVdDLHNEQUFRLEVBRm5CO0FBQUEsTUFFZEMsUUFGYztBQUFBLE1BRUpDLFdBRkk7O0FBSXJCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUCxRQUFRLEtBQUtRLFNBQWpCLEVBQTRCO0FBQzFCRixpQkFBVyxDQUFDTixRQUFRLENBQUNTLE1BQVQsQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ0wsUUFBTCxLQUFrQixJQUE1QjtBQUFBLE9BQWhCLENBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNMLFFBQUQsQ0FKTSxDQUFUOztBQU1BLE1BQUlLLFFBQVEsQ0FBQ00sTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUN2QixVQUFNLElBQUlDLEtBQUosQ0FBVSwrQkFBVixDQUFOO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLDhCQUNFLHFFQUFDLHFEQUFEO0FBQWMsaUJBQVMsRUFBRTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLDRDQUFlLGdCQUFmO0FBQUEsa0JBQ0dQLFFBQVEsR0FDUEEsUUFBUSxDQUFDUSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3hCLDhCQUNFO0FBQUEsZ0RBQWUsV0FBZjtBQUFBLG9DQUNFO0FBQ0UsaUJBQUcsaUNBQTBCQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsT0FBZCxDQUFzQkMsTUFBdEIsQ0FBNkJDLEdBQXZELENBREw7QUFFRSxpQkFBRyxFQUFFSixPQUFPLENBQUNDLEtBQVIsQ0FBY0ksZUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRTtBQUFBLGtEQUFhLE1BQWI7QUFBQSx3QkFBcUJMLE9BQU8sQ0FBQ007QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQU1FO0FBQUEsa0RBQWEsT0FBYjtBQUFBLDhCQUF1Qk4sT0FBTyxDQUFDTyxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBVUQsU0FYRCxDQURPLGdCQWNQO0FBQUssZUFBSyxFQUFFO0FBQUVDLGtCQUFNLEVBQUU7QUFBVixXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4REQsQ0E1RUQ7O0dBQU12QixROztLQUFBQSxRO0FBOEVTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmVhdHVyZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuL1NlY3Rpb25UaXRsZVwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IEZlYXR1cmVkID0gKCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW2ZlYXR1cmVkLCBzZXRGZWF0dXJlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldEZlYXR1cmVkKHByb2R1Y3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5mZWF0dXJlZCA9PT0gdHJ1ZSkpO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgaWYgKGZlYXR1cmVkLmxlbmd0aCA+IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNb3JlIHRoYW4gMyBmZWF0dXJlZCBwcm9kdWN0c1wiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGVUZXh0PXtcIkZlYXR1cmVkXCJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICB7ZmVhdHVyZWQgPyAoXG4gICAgICAgICAgICBmZWF0dXJlZC5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3Byb2R1Y3QucGhvdG8uZm9ybWF0cy5tZWRpdW0udXJsfWB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5waG90by5hbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj4ke3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIgfX0+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2FmOWI3ZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Featured.js\n");

/***/ })

})