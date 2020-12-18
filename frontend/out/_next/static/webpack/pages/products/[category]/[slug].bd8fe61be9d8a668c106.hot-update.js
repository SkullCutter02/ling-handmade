webpackHotUpdate_N_E("pages/products/[category]/[slug]",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/components/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Carousel = function Carousel(_ref) {\n  _s();\n\n  var items = _ref.items;\n  var responsive = {\n    0: {\n      items: 1\n    },\n    1024: {\n      items: 3\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setWindowSize(window.innerWidth);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.addEventListener(\"resize\", function () {\n      setWindowSize(window.innerWidth);\n      return function () {\n        window.removeEventListener(\"resize\", function () {\n          setWindowSize(window.innerWidth);\n        });\n      };\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // console.log(windowSize);\n    var images = Array.from(document.getElementsByClassName(\"image-carousel\"));\n\n    if (windowSize < 550) {\n      images.map(function (image) {\n        image.style.height = \"190px\";\n        image.style.width = \"270px\";\n      });\n    } else if (windowSize < 700) {\n      images.map(function (image) {\n        image.style.height = \"300px\";\n        image.style.width = \"500px\";\n      });\n    } else if (windowSize > 700) {\n      images.map(function (image) {\n        return image.style.height = \"340px\";\n      });\n    }\n  }, [windowSize]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3948379276\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_alice_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        mouseTracking: true,\n        autoWidth: true,\n        autoHeight: true,\n        autoPlay: true,\n        autoPlayDirection: \"ltr\",\n        autoPlayInterval: 5000,\n        items: items,\n        responsive: responsive,\n        infinite: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3948379276\",\n      children: \"div.jsx-3948379276{width:100%;margin:0 auto;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFa0IsQUFHc0IsV0FDRyxjQUNoQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zb2FwLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tIFwicmVhY3QtYWxpY2UtY2Fyb3VzZWxcIjtcblxuaW1wb3J0IFwicmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2FsaWNlLWNhcm91c2VsLmNzc1wiO1xuXG5jb25zdCBDYXJvdXNlbCA9ICh7IGl0ZW1zIH0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICAwOiB7IGl0ZW1zOiAxIH0sXG4gICAgMTAyNDogeyBpdGVtczogMyB9LFxuICB9O1xuXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgc2V0V2luZG93U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvd1NpemUpO1xuICAgIGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW1hZ2UtY2Fyb3VzZWxcIilcbiAgICApO1xuXG4gICAgaWYgKHdpbmRvd1NpemUgPCA1NTApIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IFwiMTkwcHhcIjtcbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBcIjI3MHB4XCI7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvd1NpemUgPCA3MDApIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IFwiMzAwcHhcIjtcbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBcIjUwMHB4XCI7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvd1NpemUgPiA3MDApIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiAoaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCIzNDBweFwiKSk7XG4gICAgfVxuICB9LCBbd2luZG93U2l6ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICBtb3VzZVRyYWNraW5nXG4gICAgICAgICAgYXV0b1dpZHRoXG4gICAgICAgICAgYXV0b0hlaWdodFxuICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgYXV0b1BsYXlEaXJlY3Rpb249e1wibHRyXCJ9XG4gICAgICAgICAgYXV0b1BsYXlJbnRlcnZhbD17NTAwMH1cbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICBpbmZpbml0ZVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/soap-website/frontend/components/Carousel.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"lpkvN1vVU2OjWjKqOgejQox2LLY=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qcz83M2IzIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiaXRlbXMiLCJyZXNwb25zaXZlIiwidXNlU3RhdGUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImltYWdlcyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1hcCIsImltYWdlIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDOUIsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCLE9BQUc7QUFBRUQsV0FBSyxFQUFFO0FBQVQsS0FEYztBQUVqQixVQUFNO0FBQUVBLFdBQUssRUFBRTtBQUFUO0FBRlcsR0FBbkI7O0FBRDhCLGtCQU1NRSxzREFBUSxFQU5kO0FBQUEsTUFNdkJDLFVBTnVCO0FBQUEsTUFNWEMsYUFOVzs7QUFROUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDRSxNQUFNLENBQUNDLFVBQVIsQ0FBYjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUYseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0Q0osbUJBQWEsQ0FBQ0UsTUFBTSxDQUFDQyxVQUFSLENBQWI7QUFFQSxhQUFPLFlBQU07QUFDWEQsY0FBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxZQUFNO0FBQ3pDTCx1QkFBYSxDQUFDRSxNQUFNLENBQUNDLFVBQVIsQ0FBYjtBQUNELFNBRkQ7QUFHRCxPQUpEO0FBS0QsS0FSRDtBQVNELEdBVlEsQ0FBVDtBQVlBRix5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBLFFBQU1LLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQ2JDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBRGEsQ0FBZjs7QUFJQSxRQUFJWCxVQUFVLEdBQUcsR0FBakIsRUFBc0I7QUFDcEJPLFlBQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQkEsYUFBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosR0FBcUIsT0FBckI7QUFDQUYsYUFBSyxDQUFDQyxLQUFOLENBQVlFLEtBQVosR0FBb0IsT0FBcEI7QUFDRCxPQUhEO0FBSUQsS0FMRCxNQUtPLElBQUloQixVQUFVLEdBQUcsR0FBakIsRUFBc0I7QUFDM0JPLFlBQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQkEsYUFBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosR0FBcUIsT0FBckI7QUFDQUYsYUFBSyxDQUFDQyxLQUFOLENBQVlFLEtBQVosR0FBb0IsT0FBcEI7QUFDRCxPQUhEO0FBSUQsS0FMTSxNQUtBLElBQUloQixVQUFVLEdBQUcsR0FBakIsRUFBc0I7QUFDM0JPLFlBQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSxlQUFZQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixHQUFxQixPQUFqQztBQUFBLE9BQVg7QUFDRDtBQUNGLEdBbkJRLEVBbUJOLENBQUNmLFVBQUQsQ0FuQk0sQ0FBVDtBQXFCQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBO0FBQUEsNkJBQ0UscUVBQUMsMkRBQUQ7QUFDRSxxQkFBYSxNQURmO0FBRUUsaUJBQVMsTUFGWDtBQUdFLGtCQUFVLE1BSFo7QUFJRSxnQkFBUSxNQUpWO0FBS0UseUJBQWlCLEVBQUUsS0FMckI7QUFNRSx3QkFBZ0IsRUFBRSxJQU5wQjtBQU9FLGFBQUssRUFBRUgsS0FQVDtBQVFFLGtCQUFVLEVBQUVDLFVBUmQ7QUFTRSxnQkFBUTtBQVRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0FyRUQ7O0dBQU1GLFE7O0tBQUFBLFE7QUF1RVNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tIFwicmVhY3QtYWxpY2UtY2Fyb3VzZWxcIjtcblxuaW1wb3J0IFwicmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2FsaWNlLWNhcm91c2VsLmNzc1wiO1xuXG5jb25zdCBDYXJvdXNlbCA9ICh7IGl0ZW1zIH0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICAwOiB7IGl0ZW1zOiAxIH0sXG4gICAgMTAyNDogeyBpdGVtczogMyB9LFxuICB9O1xuXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgc2V0V2luZG93U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvd1NpemUpO1xuICAgIGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW1hZ2UtY2Fyb3VzZWxcIilcbiAgICApO1xuXG4gICAgaWYgKHdpbmRvd1NpemUgPCA1NTApIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IFwiMTkwcHhcIjtcbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBcIjI3MHB4XCI7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvd1NpemUgPCA3MDApIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IFwiMzAwcHhcIjtcbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBcIjUwMHB4XCI7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvd1NpemUgPiA3MDApIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiAoaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCIzNDBweFwiKSk7XG4gICAgfVxuICB9LCBbd2luZG93U2l6ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICBtb3VzZVRyYWNraW5nXG4gICAgICAgICAgYXV0b1dpZHRoXG4gICAgICAgICAgYXV0b0hlaWdodFxuICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgYXV0b1BsYXlEaXJlY3Rpb249e1wibHRyXCJ9XG4gICAgICAgICAgYXV0b1BsYXlJbnRlcnZhbD17NTAwMH1cbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICBpbmZpbml0ZVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.js\n");

/***/ })

})