webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Featured.js":
/*!********************************!*\
  !*** ./components/Featured.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionTitle */ \"./components/SectionTitle.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Featured.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Featured = function Featured() {\n  _s();\n\n  var products = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      featured = _useState[0],\n      setFeatured = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (products !== undefined) {\n      setFeatured(products.filter(function (item) {\n        return item.featured === true;\n      }));\n    }\n  }, [products]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"jsx-3837902920\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        titleText: \"Featured\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3837902920\" + \" \" + \"grid-container\",\n        children: featured ? featured.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3837902920\" + \" \" + \"grid-item\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-3837902920\" + \" \" + \"overlay\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"http://localhost:1337\".concat(product.photo.formats.medium.url),\n                alt: product.photo.alternativeText,\n                className: \"jsx-3837902920\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3837902920\" + \" \" + \"name\",\n              children: product.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3837902920\" + \" \" + \"price\",\n              children: [\"$\", product.price]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 19\n            }, _this)]\n          }, product.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 17\n          }, _this);\n        }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            margin: \"0 auto\"\n          },\n          className: \"jsx-3837902920\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3837902920\",\n      children: \"section.jsx-3837902920{height:500px;background:#d3d3d3;padding:1px 0;}.grid-container.jsx-3837902920{margin-top:2em;height:350px;display:grid;grid-auto-flow:column;grid-template-columns:1fr 1fr 1fr;}.grid-item.jsx-3837902920{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}p.jsx-3837902920{font-size:1.5rem;}.name.jsx-3837902920{margin-top:10px;}.overlay.jsx-3837902920{width:80%;height:70%;}img.jsx-3837902920{width:100%;height:100%;object-fit:cover;border:3px solid #af9b7d;cursor:pointer;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9QaHBzdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0ZlYXR1cmVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHd0IsQUFNRSxBQVFGLEFBT0ksQUFJRCxBQUlOLEFBS0MsVUFKQSxDQUtDLEVBbENPLEVBTU4sQ0FtQmYsQ0FKQSxJQVNBLEVBS21CLEtBNUJKLElBTkMsUUFtQ1csQ0E1QkgsS0FOeEIsaUJBT29DLEVBNEJuQixTQXZCYyxNQXdCL0IsaUJBNUJBLG9HQUtxQiw2RkFDRyw4RUFDeEIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1BocHN0b3JtUHJvamVjdHMvc29hcC13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvRmVhdHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuL1NlY3Rpb25UaXRsZVwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IEZlYXR1cmVkID0gKCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW2ZlYXR1cmVkLCBzZXRGZWF0dXJlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldEZlYXR1cmVkKHByb2R1Y3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5mZWF0dXJlZCA9PT0gdHJ1ZSkpO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZVRleHQ9e1wiRmVhdHVyZWRcIn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtmZWF0dXJlZCA/IChcbiAgICAgICAgICAgIGZlYXR1cmVkLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8YnV0dG9uIHR5cGU9e1wiY2xpY2tcIn0+TGVhcm4gTW9yZTwvYnV0dG9uPiovfVxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtwcm9kdWN0LnBob3RvLmZvcm1hdHMubWVkaXVtLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5waG90by5hbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj57cHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+JHtwcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjAgYXV0b1wiIH19PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gICAgICAgICAgcGFkZGluZzogMXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjYWY5YjdkO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Featured.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Featured, \"k0hbuf0wgTzBYKfxdmgw7DmIg3E=\");\n\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\n\nvar _c;\n\n$RefreshReg$(_c, \"Featured\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlZC5qcz8zMWI2Il0sIm5hbWVzIjpbIkZlYXR1cmVkIiwicHJvZHVjdHMiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsImRhdGEiLCJ1c2VTdGF0ZSIsImZlYXR1cmVkIiwic2V0RmVhdHVyZWQiLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJpdGVtIiwibWFwIiwicHJvZHVjdCIsInBob3RvIiwiZm9ybWF0cyIsIm1lZGl1bSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIm5hbWUiLCJwcmljZSIsImlkIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUFWLENBQW9CQyxJQUFyQzs7QUFEcUIsa0JBRVdDLHNEQUFRLEVBRm5CO0FBQUEsTUFFZEMsUUFGYztBQUFBLE1BRUpDLFdBRkk7O0FBSXJCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUCxRQUFRLEtBQUtRLFNBQWpCLEVBQTRCO0FBQzFCRixpQkFBVyxDQUFDTixRQUFRLENBQUNTLE1BQVQsQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ0wsUUFBTCxLQUFrQixJQUE1QjtBQUFBLE9BQWhCLENBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNMLFFBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLDhCQUNFLHFFQUFDLHFEQUFEO0FBQWMsaUJBQVMsRUFBRTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLDRDQUFlLGdCQUFmO0FBQUEsa0JBQ0dLLFFBQVEsR0FDUEEsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3hCLDhCQUNFO0FBQUEsZ0RBQWUsV0FBZjtBQUFBLG9DQUNFO0FBQUEsa0RBQWUsU0FBZjtBQUFBLHFDQUVFO0FBQ0UsbUJBQUcsaUNBQTBCQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsT0FBZCxDQUFzQkMsTUFBdEIsQ0FBNkJDLEdBQXZELENBREw7QUFFRSxtQkFBRyxFQUFFSixPQUFPLENBQUNDLEtBQVIsQ0FBY0ksZUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBUUU7QUFBQSxrREFBYSxNQUFiO0FBQUEsd0JBQXFCTCxPQUFPLENBQUNNO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFBLGtEQUFhLE9BQWI7QUFBQSw4QkFBdUJOLE9BQU8sQ0FBQ08sS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUEsYUFBZ0NQLE9BQU8sQ0FBQ1EsRUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWFELFNBZEQsQ0FETyxnQkFpQlA7QUFBSyxlQUFLLEVBQUU7QUFBRUMsa0JBQU0sRUFBRTtBQUFWLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RUQsQ0FsRkQ7O0dBQU10QixROztLQUFBQSxRO0FBb0ZTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmVhdHVyZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuL1NlY3Rpb25UaXRsZVwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IEZlYXR1cmVkID0gKCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW2ZlYXR1cmVkLCBzZXRGZWF0dXJlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldEZlYXR1cmVkKHByb2R1Y3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5mZWF0dXJlZCA9PT0gdHJ1ZSkpO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZVRleHQ9e1wiRmVhdHVyZWRcIn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtmZWF0dXJlZCA/IChcbiAgICAgICAgICAgIGZlYXR1cmVkLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8YnV0dG9uIHR5cGU9e1wiY2xpY2tcIn0+TGVhcm4gTW9yZTwvYnV0dG9uPiovfVxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtwcm9kdWN0LnBob3RvLmZvcm1hdHMubWVkaXVtLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5waG90by5hbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj57cHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+JHtwcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjAgYXV0b1wiIH19PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gICAgICAgICAgcGFkZGluZzogMXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjYWY5YjdkO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Featured.js\n");

/***/ })

})