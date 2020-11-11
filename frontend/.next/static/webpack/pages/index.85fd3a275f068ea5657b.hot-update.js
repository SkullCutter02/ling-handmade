webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Featured.js":
/*!********************************!*\
  !*** ./components/Featured.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionTitle */ \"./components/SectionTitle.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Featured.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Featured = function Featured() {\n  _s();\n\n  var products = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      featured = _useState[0],\n      setFeatured = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (products !== undefined) {\n      setFeatured(products.filter(function (item) {\n        return item.featured === true;\n      }));\n    }\n  }, [products]);\n\n  function showOverlay(e) {\n    e.target.parentNode.firstElementChild.style.opacity = \"100%\";\n  }\n\n  function hideOverlay(e) {\n    e.target.parentNode.firstElementChild.style.opacity = \"0\";\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"jsx-88511842\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        titleText: \"Featured\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-88511842\" + \" \" + \"grid-container\",\n        children: featured ? featured.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-88511842\" + \" \" + \"grid-item\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-88511842\" + \" \" + \"container\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                id: \"overlay\",\n                className: \"jsx-88511842\" + \" \" + \"overlay\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"click\",\n                onMouseEnter: showOverlay,\n                onMouseLeave: hideOverlay,\n                className: \"jsx-88511842\",\n                children: \"LEARN MORE\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"http://localhost:1337\".concat(product.photo.formats.medium.url),\n                alt: product.photo.alternativeText,\n                className: \"jsx-88511842\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-88511842\" + \" \" + \"name\",\n              children: product.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-88511842\" + \" \" + \"price\",\n              children: [\"$\", product.price]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 19\n            }, _this)]\n          }, product.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 17\n          }, _this);\n        }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            margin: \"0 auto\"\n          },\n          className: \"jsx-88511842\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"88511842\",\n      children: \"section.jsx-88511842{height:500px;background:white;padding:1px 0;}.grid-container.jsx-88511842{margin-top:2em;height:350px;display:grid;grid-auto-flow:column;grid-template-columns:1fr 1fr 1fr;}.grid-item.jsx-88511842{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}p.jsx-88511842{font-size:1.5rem;}.name.jsx-88511842{margin-top:10px;}.container.jsx-88511842{width:80%;height:70%;border:3px solid #af9b7d;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.overlay.jsx-88511842{opacity:0;position:absolute;width:100%;height:100%;background:rgba(0,0,0,0.3);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;}.overlay.jsx-88511842:hover{opacity:100%;}img.jsx-88511842{width:100%;height:100%;object-fit:cover;}button.jsx-88511842{opacity:0;position:absolute;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;width:40%;height:15%;background:#af9b7d;border:3px solid #af9b7d;color:black;font-size:1rem;cursor:pointer;z-index:3;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;}.overlay.jsx-88511842:hover~button.jsx-88511842{opacity:100%;}button.jsx-88511842:hover{opacity:100%;background:none;}button.jsx-88511842:hover~.overlay.jsx-88511842{opacity:100%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9QaHBzdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0ZlYXR1cmVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEa0IsQUFHd0IsQUFNRSxBQVFGLEFBT0ksQUFJRCxBQUlOLEFBU0EsQUFXRyxBQUlGLEFBTUQsQUFpQkcsQUFJQSxBQUtBLFVBdkRGLEFBU08sQUFxQkEsQ0FOTixFQXJESyxBQWlEbkIsQUEyQkEsQUFJa0IsQUFLbEIsRUEvRWUsQ0FtQmYsQ0FKQSxJQVMyQixFQXdCUixLQS9DSixBQWdDRixBQXFCTyxDQXFCcEIsQ0FoRmdCLFNBdUNGLENBZWQsQ0EvQ3dCLEdBTnhCLEVBNkJvQixLQVVZLFlBaENJLENBdUJyQixVQWxCZ0IsSUE0QkwsbUJBaEMxQixFQW1EWSxVQUNDLFdBQ1EsY0FwQk0sSUFWRixDQStCRSx5QkFDYixZQUNHLGVBQ0EsQ0F2Qm9CLEtBN0JoQixTQXFEVCxVQUNjLHFCQW5DMUIsaUNBV0EsRUF5QjJCLGtCQXRESCx3Q0F1RGEsc0NBdERyQyx3Q0F1REEiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1BocHN0b3JtUHJvamVjdHMvc29hcC13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvRmVhdHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuL1NlY3Rpb25UaXRsZVwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IEZlYXR1cmVkID0gKCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW2ZlYXR1cmVkLCBzZXRGZWF0dXJlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldEZlYXR1cmVkKHByb2R1Y3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5mZWF0dXJlZCA9PT0gdHJ1ZSkpO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgZnVuY3Rpb24gc2hvd092ZXJsYXkoZSkge1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUub3BhY2l0eSA9IFwiMTAwJVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoZSkge1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZVRleHQ9e1wiRmVhdHVyZWRcIn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtmZWF0dXJlZCA/IChcbiAgICAgICAgICAgIGZlYXR1cmVkLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIGlkPVwib3ZlcmxheVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcImNsaWNrXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtzaG93T3ZlcmxheX1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hpZGVPdmVybGF5fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgTEVBUk4gTU9SRVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cHJvZHVjdC5waG90by5mb3JtYXRzLm1lZGl1bS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QucGhvdG8uYWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+e3Byb2R1Y3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZVwiPiR7cHJvZHVjdC5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiB9fT5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNhZjliN2Q7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vdmVybGF5OmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNhZjliN2Q7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2FmOWI3ZDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLm92ZXJsYXk6aG92ZXIgfiBidXR0b24ge1xuICAgICAgICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB+IC5vdmVybGF5IHtcbiAgICAgICAgICBvcGFjaXR5OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/Featured.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Featured, \"k0hbuf0wgTzBYKfxdmgw7DmIg3E=\");\n\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\n\nvar _c;\n\n$RefreshReg$(_c, \"Featured\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlZC5qcz8zMWI2Il0sIm5hbWVzIjpbIkZlYXR1cmVkIiwicHJvZHVjdHMiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsImRhdGEiLCJ1c2VTdGF0ZSIsImZlYXR1cmVkIiwic2V0RmVhdHVyZWQiLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJpdGVtIiwic2hvd092ZXJsYXkiLCJlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGUiLCJvcGFjaXR5IiwiaGlkZU92ZXJsYXkiLCJtYXAiLCJwcm9kdWN0IiwicGhvdG8iLCJmb3JtYXRzIiwibWVkaXVtIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0IiwibmFtZSIsInByaWNlIiwiaWQiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLGdEQUFELENBQVYsQ0FBb0JDLElBQXJDOztBQURxQixrQkFFV0Msc0RBQVEsRUFGbkI7QUFBQSxNQUVkQyxRQUZjO0FBQUEsTUFFSkMsV0FGSTs7QUFJckJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlQLFFBQVEsS0FBS1EsU0FBakIsRUFBNEI7QUFDMUJGLGlCQUFXLENBQUNOLFFBQVEsQ0FBQ1MsTUFBVCxDQUFnQixVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDTCxRQUFMLEtBQWtCLElBQTVCO0FBQUEsT0FBaEIsQ0FBRCxDQUFYO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0wsUUFBRCxDQUpNLENBQVQ7O0FBTUEsV0FBU1csV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0I7QUFDdEJBLEtBQUMsQ0FBQ0MsTUFBRixDQUFTQyxVQUFULENBQW9CQyxpQkFBcEIsQ0FBc0NDLEtBQXRDLENBQTRDQyxPQUE1QyxHQUFzRCxNQUF0RDtBQUNEOztBQUVELFdBQVNDLFdBQVQsQ0FBcUJOLENBQXJCLEVBQXdCO0FBQ3RCQSxLQUFDLENBQUNDLE1BQUYsQ0FBU0MsVUFBVCxDQUFvQkMsaUJBQXBCLENBQXNDQyxLQUF0QyxDQUE0Q0MsT0FBNUMsR0FBc0QsR0FBdEQ7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFBO0FBQUEsOEJBQ0UscUVBQUMscURBQUQ7QUFBYyxpQkFBUyxFQUFFO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUEsMENBQWUsZ0JBQWY7QUFBQSxrQkFDR1osUUFBUSxHQUNQQSxRQUFRLENBQUNjLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFDeEIsOEJBQ0U7QUFBQSw4Q0FBZSxXQUFmO0FBQUEsb0NBQ0U7QUFBQSxnREFBZSxXQUFmO0FBQUEsc0NBQ0U7QUFBeUIsa0JBQUUsRUFBQyxTQUE1QjtBQUFBLGtEQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQ0Usb0JBQUksRUFBRSxPQURSO0FBRUUsNEJBQVksRUFBRVQsV0FGaEI7QUFHRSw0QkFBWSxFQUFFTyxXQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBU0U7QUFDRSxtQkFBRyxpQ0FBMEJFLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxPQUFkLENBQXNCQyxNQUF0QixDQUE2QkMsR0FBdkQsQ0FETDtBQUVFLG1CQUFHLEVBQUVKLE9BQU8sQ0FBQ0MsS0FBUixDQUFjSSxlQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFlRTtBQUFBLGdEQUFhLE1BQWI7QUFBQSx3QkFBcUJMLE9BQU8sQ0FBQ007QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRixlQWdCRTtBQUFBLGdEQUFhLE9BQWI7QUFBQSw4QkFBdUJOLE9BQU8sQ0FBQ08sS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhCRjtBQUFBLGFBQWdDUCxPQUFPLENBQUNRLEVBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFvQkQsU0FyQkQsQ0FETyxnQkF3QlA7QUFBSyxlQUFLLEVBQUU7QUFBRUMsa0JBQU0sRUFBRTtBQUFWLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4SEQsQ0FoSkQ7O0dBQU05QixROztLQUFBQSxRO0FBa0pTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmVhdHVyZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuL1NlY3Rpb25UaXRsZVwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IEZlYXR1cmVkID0gKCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW2ZlYXR1cmVkLCBzZXRGZWF0dXJlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldEZlYXR1cmVkKHByb2R1Y3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5mZWF0dXJlZCA9PT0gdHJ1ZSkpO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgZnVuY3Rpb24gc2hvd092ZXJsYXkoZSkge1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUub3BhY2l0eSA9IFwiMTAwJVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoZSkge1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZVRleHQ9e1wiRmVhdHVyZWRcIn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtmZWF0dXJlZCA/IChcbiAgICAgICAgICAgIGZlYXR1cmVkLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIGlkPVwib3ZlcmxheVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcImNsaWNrXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtzaG93T3ZlcmxheX1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hpZGVPdmVybGF5fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgTEVBUk4gTU9SRVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cHJvZHVjdC5waG90by5mb3JtYXRzLm1lZGl1bS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QucGhvdG8uYWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+e3Byb2R1Y3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZVwiPiR7cHJvZHVjdC5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiB9fT5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNhZjliN2Q7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vdmVybGF5OmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNhZjliN2Q7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2FmOWI3ZDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLm92ZXJsYXk6aG92ZXIgfiBidXR0b24ge1xuICAgICAgICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB+IC5vdmVybGF5IHtcbiAgICAgICAgICBvcGFjaXR5OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Featured.js\n");

/***/ })

})