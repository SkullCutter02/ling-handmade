webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Featured.js":
/*!********************************!*\
  !*** ./components/Featured.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionTitle */ \"./components/SectionTitle.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Featured.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Featured = function Featured() {\n  _s();\n\n  var products = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      featured = _useState[0],\n      setFeatured = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (products !== undefined) {\n      setFeatured(products.filter(function (item) {\n        return item.featured === true;\n      }));\n    }\n  }, [products]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"jsx-3356866849\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        titleText: \"Featured\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3356866849\" + \" \" + \"grid-container\",\n        children: featured ? featured.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3356866849\" + \" \" + \"grid-item\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"http://localhost:1337\".concat(product.photo.formats.medium.url),\n              alt: product.photo.alternativeText,\n              className: \"jsx-3356866849\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-3356866849\" + \" \" + \"overlay\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"click\",\n                className: \"jsx-3356866849\",\n                children: \"Learn More\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3356866849\" + \" \" + \"name\",\n              children: product.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3356866849\" + \" \" + \"price\",\n              children: [\"$\", product.price]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 19\n            }, _this)]\n          }, product.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 17\n          }, _this);\n        }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            margin: \"0 auto\"\n          },\n          className: \"jsx-3356866849\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3356866849\",\n      children: \"section.jsx-3356866849{height:500px;background:#d3d3d3;padding:1px 0;}.grid-container.jsx-3356866849{margin-top:2em;height:350px;display:grid;grid-auto-flow:column;grid-template-columns:1fr 1fr 1fr;}.grid-item.jsx-3356866849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}p.jsx-3356866849{font-size:1.5rem;}.name.jsx-3356866849{margin-top:10px;}img.jsx-3356866849{width:80%;height:70%;object-fit:cover;border:3px solid #af9b7d;cursor:pointer;}.overlay.jsx-3356866849{width:80%;height:70%;border:1px solid tomato;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9QaHBzdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0ZlYXR1cmVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHd0IsQUFNRSxBQVFGLEFBT0ksQUFJRCxBQUlOLEFBUUEsVUFQQyxBQVFBLEdBckNRLEVBTU4sQ0FtQmYsQ0FKQSxJQVNtQixBQVFPLE9BL0JYLElBTkMsTUE4QlcsR0F2QkgsSUErQnhCLENBckNBLGlCQU9vQyxBQXVCbkIsV0FsQmMsSUFtQi9CLG1CQXZCQSxvR0FLcUIsNkZBQ0csOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9QaHBzdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0ZlYXR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCBGZWF0dXJlZCA9ICgpID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VDb250ZXh0KENvbnRleHQpLmRhdGE7XG4gIGNvbnN0IFtmZWF0dXJlZCwgc2V0RmVhdHVyZWRdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9kdWN0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRGZWF0dXJlZChwcm9kdWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZmVhdHVyZWQgPT09IHRydWUpKTtcbiAgICB9XG4gIH0sIFtwcm9kdWN0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGVUZXh0PXtcIkZlYXR1cmVkXCJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICB7ZmVhdHVyZWQgPyAoXG4gICAgICAgICAgICBmZWF0dXJlZC5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cHJvZHVjdC5waG90by5mb3JtYXRzLm1lZGl1bS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnBob3RvLmFsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcImNsaWNrXCJ9PkxlYXJuIE1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj4ke3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIgfX0+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2FmOWI3ZDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0b21hdG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWQ7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Featured.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Featured, \"k0hbuf0wgTzBYKfxdmgw7DmIg3E=\");\n\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\n\nvar _c;\n\n$RefreshReg$(_c, \"Featured\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlZC5qcz8zMWI2Il0sIm5hbWVzIjpbIkZlYXR1cmVkIiwicHJvZHVjdHMiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsImRhdGEiLCJ1c2VTdGF0ZSIsImZlYXR1cmVkIiwic2V0RmVhdHVyZWQiLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJpdGVtIiwibWFwIiwicHJvZHVjdCIsInBob3RvIiwiZm9ybWF0cyIsIm1lZGl1bSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIm5hbWUiLCJwcmljZSIsImlkIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUFWLENBQW9CQyxJQUFyQzs7QUFEcUIsa0JBRVdDLHNEQUFRLEVBRm5CO0FBQUEsTUFFZEMsUUFGYztBQUFBLE1BRUpDLFdBRkk7O0FBSXJCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUCxRQUFRLEtBQUtRLFNBQWpCLEVBQTRCO0FBQzFCRixpQkFBVyxDQUFDTixRQUFRLENBQUNTLE1BQVQsQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ0wsUUFBTCxLQUFrQixJQUE1QjtBQUFBLE9BQWhCLENBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNMLFFBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLDhCQUNFLHFFQUFDLHFEQUFEO0FBQWMsaUJBQVMsRUFBRTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLDRDQUFlLGdCQUFmO0FBQUEsa0JBQ0dLLFFBQVEsR0FDUEEsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3hCLDhCQUNFO0FBQUEsZ0RBQWUsV0FBZjtBQUFBLG9DQUNFO0FBQ0UsaUJBQUcsaUNBQTBCQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsT0FBZCxDQUFzQkMsTUFBdEIsQ0FBNkJDLEdBQXZELENBREw7QUFFRSxpQkFBRyxFQUFFSixPQUFPLENBQUNDLEtBQVIsQ0FBY0ksZUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRTtBQUFBLGtEQUFlLFNBQWY7QUFBQSxxQ0FDRTtBQUFRLG9CQUFJLEVBQUUsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQVFFO0FBQUEsa0RBQWEsTUFBYjtBQUFBLHdCQUFxQkwsT0FBTyxDQUFDTTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0U7QUFBQSxrREFBYSxPQUFiO0FBQUEsOEJBQXVCTixPQUFPLENBQUNPLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBLGFBQWdDUCxPQUFPLENBQUNRLEVBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFhRCxTQWRELENBRE8sZ0JBaUJQO0FBQUssZUFBSyxFQUFFO0FBQUVDLGtCQUFNLEVBQUU7QUFBVixXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUVELENBbkZEOztHQUFNdEIsUTs7S0FBQUEsUTtBQXFGU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCBGZWF0dXJlZCA9ICgpID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VDb250ZXh0KENvbnRleHQpLmRhdGE7XG4gIGNvbnN0IFtmZWF0dXJlZCwgc2V0RmVhdHVyZWRdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9kdWN0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRGZWF0dXJlZChwcm9kdWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZmVhdHVyZWQgPT09IHRydWUpKTtcbiAgICB9XG4gIH0sIFtwcm9kdWN0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGVUZXh0PXtcIkZlYXR1cmVkXCJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICB7ZmVhdHVyZWQgPyAoXG4gICAgICAgICAgICBmZWF0dXJlZC5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cHJvZHVjdC5waG90by5mb3JtYXRzLm1lZGl1bS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnBob3RvLmFsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcImNsaWNrXCJ9PkxlYXJuIE1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj4ke3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIgfX0+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2FmOWI3ZDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0b21hdG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Featured.js\n");

/***/ })

})