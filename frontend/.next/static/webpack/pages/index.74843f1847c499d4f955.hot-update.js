webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Product.js\",\n    _this = undefined;\n\n\n\nvar Product = function Product(_ref) {\n  var imgSrc = _ref.imgSrc,\n      alternativeTxt = _ref.alternativeTxt,\n      name = _ref.name,\n      price = _ref.price;\n\n  function showOverlay(e) {\n    e.target.parentNode.firstElementChild.style.opacity = \"100%\";\n  }\n\n  function hideOverlay(e) {\n    e.target.parentNode.firstElementChild.style.opacity = \"0\";\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid-item\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"overlay\",\n          onMouseEnter: showOverlay,\n          onMouseLeave: hideOverlay\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"click\",\n          onMouseEnter: showOverlay,\n          children: \"LEARN MORE\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: imgSrc,\n          alt: product.photo.alternativeText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"name\",\n        children: product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"price\",\n        children: [\"$\", product.price]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzPzlkMDYiXSwibmFtZXMiOlsiUHJvZHVjdCIsImltZ1NyYyIsImFsdGVybmF0aXZlVHh0IiwibmFtZSIsInByaWNlIiwic2hvd092ZXJsYXkiLCJlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGUiLCJvcGFjaXR5IiwiaGlkZU92ZXJsYXkiLCJwcm9kdWN0IiwicGhvdG8iLCJhbHRlcm5hdGl2ZVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUE2QztBQUFBLE1BQTFDQyxNQUEwQyxRQUExQ0EsTUFBMEM7QUFBQSxNQUFsQ0MsY0FBa0MsUUFBbENBLGNBQWtDO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDM0QsV0FBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0I7QUFDdEJBLEtBQUMsQ0FBQ0MsTUFBRixDQUFTQyxVQUFULENBQW9CQyxpQkFBcEIsQ0FBc0NDLEtBQXRDLENBQTRDQyxPQUE1QyxHQUFzRCxNQUF0RDtBQUNEOztBQUVELFdBQVNDLFdBQVQsQ0FBcUJOLENBQXJCLEVBQXdCO0FBQ3RCQSxLQUFDLENBQUNDLE1BQUYsQ0FBU0MsVUFBVCxDQUFvQkMsaUJBQXBCLENBQXNDQyxLQUF0QyxDQUE0Q0MsT0FBNUMsR0FBc0QsR0FBdEQ7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMsU0FEWjtBQUVFLHNCQUFZLEVBQUVOLFdBRmhCO0FBR0Usc0JBQVksRUFBRU87QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQVEsY0FBSSxFQUFFLE9BQWQ7QUFBdUIsc0JBQVksRUFBRVAsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFTRTtBQUFLLGFBQUcsRUFBRUosTUFBVjtBQUFrQixhQUFHLEVBQUVZLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBWUU7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBQSxrQkFBcUJGLE9BQU8sQ0FBQ1Y7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLGVBYUU7QUFBRyxpQkFBUyxFQUFDLE9BQWI7QUFBQSx3QkFBdUJVLE9BQU8sQ0FBQ1QsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBNUJEOztLQUFNSixPO0FBOEJTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUHJvZHVjdCA9ICh7IGltZ1NyYywgYWx0ZXJuYXRpdmVUeHQsIG5hbWUsIHByaWNlIH0pID0+IHtcbiAgZnVuY3Rpb24gc2hvd092ZXJsYXkoZSkge1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUub3BhY2l0eSA9IFwiMTAwJVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoZSkge1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXlcIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtzaG93T3ZlcmxheX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGlkZU92ZXJsYXl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wiY2xpY2tcIn0gb25Nb3VzZUVudGVyPXtzaG93T3ZlcmxheX0+XG4gICAgICAgICAgICBMRUFSTiBNT1JFXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGltZyBzcmM9e2ltZ1NyY30gYWx0PXtwcm9kdWN0LnBob3RvLmFsdGVybmF0aXZlVGV4dH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj57cHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj4ke3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ })

})