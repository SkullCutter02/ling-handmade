webpackHotUpdate_N_E("pages/cart",{

/***/ "./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/*! exports provided: CartContext, CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartProvider\", function() { return CartProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/context/CartContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])(null);\nvar CartProvider = function CartProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    setItem: function setItem(item) {\n      setState(function (old) {\n        return _objectSpread(_objectSpread({}, old), {}, {\n          cartItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(old.cartItems), [item])\n        });\n      });\n      localStorage.setItem(\"cartItems\", JSON.stringify(state.cartItems));\n    },\n    removeItem: function removeItem(item) {\n      var arr = state.cartItems.filter(function (cartItem) {\n        return cartItem.name !== item.name;\n      });\n      setState(function (old) {\n        return _objectSpread(_objectSpread({}, old), {}, {\n          cartItems: arr\n        });\n      });\n    },\n    cartItems: []\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var cartItems = localStorage.getItem(\"cartItems\");\n\n    if (cartItems) {\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        cartItems: JSON.parse(cartItems)\n      }));\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (state.cartItems) {\n      console.log(\"dd\");\n      localStorage.setItem(\"cartItems\", JSON.stringify(state.cartItems));\n    }\n  }, [state]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(CartContext.Provider, {\n    value: state,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CartProvider, \"dvNmiHs9kt91K0HKqsszt/6VJYI=\");\n\n_c = CartProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CartProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9DYXJ0Q29udGV4dC5qcz9jNGE0Il0sIm5hbWVzIjpbIkNhcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNhcnRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRJdGVtIiwiaXRlbSIsInNldFN0YXRlIiwib2xkIiwiY2FydEl0ZW1zIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXRlIiwicmVtb3ZlSXRlbSIsImFyciIsImZpbHRlciIsImNhcnRJdGVtIiwibmFtZSIsInVzZUVmZmVjdCIsImdldEl0ZW0iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBakM7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQztBQUNqQ0MsV0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCQyxjQUFRLENBQUMsVUFBQ0MsR0FBRDtBQUFBLCtDQUNKQSxHQURJO0FBRVBDLG1CQUFTLHlHQUFNRCxHQUFHLENBQUNDLFNBQVYsSUFBcUJILElBQXJCO0FBRkY7QUFBQSxPQUFELENBQVI7QUFJQUksa0JBQVksQ0FBQ0wsT0FBYixDQUFxQixXQUFyQixFQUFrQ00sSUFBSSxDQUFDQyxTQUFMLENBQWVDLEtBQUssQ0FBQ0osU0FBckIsQ0FBbEM7QUFDRCxLQVBnQztBQVFqQ0ssY0FBVSxFQUFFLG9CQUFVUixJQUFWLEVBQWdCO0FBQzFCLFVBQU1TLEdBQUcsR0FBR0YsS0FBSyxDQUFDSixTQUFOLENBQWdCTyxNQUFoQixDQUNWLFVBQUNDLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNDLElBQVQsS0FBa0JaLElBQUksQ0FBQ1ksSUFBckM7QUFBQSxPQURVLENBQVo7QUFHQVgsY0FBUSxDQUFDLFVBQUNDLEdBQUQ7QUFBQSwrQ0FBZUEsR0FBZjtBQUFvQkMsbUJBQVMsRUFBRU07QUFBL0I7QUFBQSxPQUFELENBQVI7QUFDRCxLQWJnQztBQWNqQ04sYUFBUyxFQUFFO0FBZHNCLEdBQUQsQ0FERztBQUFBLE1BQzlCSSxLQUQ4QjtBQUFBLE1BQ3ZCTixRQUR1Qjs7QUFrQnJDWSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNVixTQUFTLEdBQUdDLFlBQVksQ0FBQ1UsT0FBYixDQUFxQixXQUFyQixDQUFsQjs7QUFFQSxRQUFJWCxTQUFKLEVBQWU7QUFDYkYsY0FBUSxpQ0FDSE0sS0FERztBQUVOSixpQkFBUyxFQUFFRSxJQUFJLENBQUNVLEtBQUwsQ0FBV1osU0FBWDtBQUZMLFNBQVI7QUFJRDtBQUNGLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFXQVUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSU4sS0FBSyxDQUFDSixTQUFWLEVBQXFCO0FBQ25CYSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FiLGtCQUFZLENBQUNMLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0NNLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxLQUFLLENBQUNKLFNBQXJCLENBQWxDO0FBQ0Q7QUFDRixHQUxRLEVBS04sQ0FBQ0ksS0FBRCxDQUxNLENBQVQ7QUFPQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVBLEtBQTdCO0FBQUEsY0FBcUNWLEtBQUssQ0FBQ3FCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBdkNNOztHQUFNdEIsWTs7S0FBQUEsWSIsImZpbGUiOiIuL2NvbnRleHQvQ2FydENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIHNldEl0ZW06IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBzZXRTdGF0ZSgob2xkKSA9PiAoe1xuICAgICAgICAuLi5vbGQsXG4gICAgICAgIGNhcnRJdGVtczogWy4uLm9sZC5jYXJ0SXRlbXMsIGl0ZW1dLFxuICAgICAgfSkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUuY2FydEl0ZW1zKSk7XG4gICAgfSxcbiAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgY29uc3QgYXJyID0gc3RhdGUuY2FydEl0ZW1zLmZpbHRlcihcbiAgICAgICAgKGNhcnRJdGVtKSA9PiBjYXJ0SXRlbS5uYW1lICE9PSBpdGVtLm5hbWVcbiAgICAgICk7XG4gICAgICBzZXRTdGF0ZSgob2xkKSA9PiAoeyAuLi5vbGQsIGNhcnRJdGVtczogYXJyIH0pKTtcbiAgICB9LFxuICAgIGNhcnRJdGVtczogW10sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIik7XG5cbiAgICBpZiAoY2FydEl0ZW1zKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IEpTT04ucGFyc2UoY2FydEl0ZW1zKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmNhcnRJdGVtcykge1xuICAgICAgY29uc29sZS5sb2coXCJkZFwiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KHN0YXRlLmNhcnRJdGVtcykpO1xuICAgIH1cbiAgfSwgW3N0YXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57cHJvcHMuY2hpbGRyZW59PC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/CartContext.js\n");

/***/ })

})