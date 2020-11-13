webpackHotUpdate_N_E("pages/products/[category]/[slug]",{

/***/ "./components/ProductPage.js":
/*!***********************************!*\
  !*** ./components/ProductPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/ProductPage.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ProductPage = function ProductPage(_ref) {\n  _s();\n\n  var slug = _ref.slug;\n  var products = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      product = _useState[0],\n      setProduct = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (products !== undefined) {\n      setProduct(products.filter(function (product) {\n        return product.slug === slug;\n      }));\n      setProduct(function (product) {\n        return product[0];\n      });\n    }\n  }, [products]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"jsx-198496393\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"http://188.166.253.111\".concat(product === null || product === void 0 ? void 0 : product.photo.formats.large.url),\n        alt: product === null || product === void 0 ? void 0 : product.photo.alternativeText,\n        className: \"jsx-198496393\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-198496393\" + \" \" + \"header-title-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-198496393\" + \" \" + \"title\",\n          children: product === null || product === void 0 ? void 0 : product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-198496393\" + \" \" + \"line\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/products/\".concat(product === null || product === void 0 ? void 0 : product.categories[0].slug),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"jsx-198496393\" + \" \" + \"back\",\n            children: \"BACK\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-198496393\" + \" \" + \"main-body-section\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n          className: \"jsx-198496393\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: \"jsx-198496393\" + \" \" + \"description-title\",\n            children: \"Description:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-198496393\" + \" \" + \"description\",\n            children: product === null || product === void 0 ? void 0 : product.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n          className: \"jsx-198496393\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: \"jsx-198496393\",\n            children: [\"Price: $\", product === null || product === void 0 ? void 0 : product.price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            className: \"jsx-198496393\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n              className: \"jsx-198496393\",\n              children: \"Ingredients:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this), \" \", product === null || product === void 0 ? void 0 : product.ingredients]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"198496393\",\n      children: \"img.jsx-198496393{width:100%;height:60vh;object-fit:cover;position:relative;}.header-title-container.jsx-198496393{position:absolute;top:25%;left:15%;height:25%;width:70%;background:rgba(0,0,0,0.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-198496393{color:white;font-size:50px;text-align:center;margin-bottom:4px;}.line.jsx-198496393{width:70px;padding-top:5px;border-bottom:4px solid #af9b7d;margin:0 auto;}.back.jsx-198496393{width:120px;height:15%;margin:0 auto;margin-top:20px;background:#af9b7d;border:3px solid #af9b7d;color:black;font-size:1rem;cursor:pointer;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;}.back.jsx-198496393:hover{background:none;}.main-body-section.jsx-198496393{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;margin:10px;}main.jsx-198496393{width:45%;margin-right:10px;}aside.jsx-198496393{margin-right:5px;width:45%;}.description.jsx-198496393{margin-top:10px;}h4.jsx-198496393{margin-top:10px;font-weight:400;}strong.jsx-198496393{font-size:22px;display:block;}@media screen and (max-width:1020px){.header-title-container.jsx-198496393{top:23%;}}@media screen and (max-width:900px){.header-title-container.jsx-198496393{top:20%;}}@media screen and (max-width:700px){.header-title-container.jsx-198496393{top:17%;height:22%;}.title.jsx-198496393{font-size:42px;}.main-body-section.jsx-198496393{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-198496393{width:85%;margin-bottom:5px;}aside.jsx-198496393{width:85%;margin-bottom:15px;}}@media screen and (max-width:600px){.header-title-container.jsx-198496393{top:16%;}.title.jsx-198496393{font-size:38px;}.back.jsx-198496393{font-size:0.8rem;}}@media screen and (max-width:500px){.header-title-container.jsx-198496393{top:16%;height:17%;}.title.jsx-198496393{font-size:32px;}.back.jsx-198496393{font-size:0.7rem;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9QaHBzdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFHc0IsQUFPTyxBQVlOLEFBT0QsQUFPQyxBQWVJLEFBSUwsQUFPRCxBQUtPLEFBS0QsQUFJQSxBQUtELEFBTUwsQUFNQSxBQU1BLEFBS08sQUFJZSxBQUtwQixBQUtBLEFBT0YsQUFJTyxBQUlFLEFBTVQsQUFLTyxBQUlFLFFBNURuQixBQU1BLEFBTWEsQUEwQmIsQUFjYSxFQTdFSyxBQW1ERSxBQUtDLENBbkhULEFBMEJJLEFBMEJILENBakNFLEFBY0osR0E2Q0csQUF1QmQsQUF5QkEsQUFlQSxDQTdGRixBQXFCQSxBQUlrQixDQVROLEFBa0VWLEFBZUEsQ0ExSVEsQ0EwRlIsQUF3Q0EsSUF4SWlCLEFBaUNILEdBMUJMLENBWVMsQUFPYyxBQXNDbEMsQ0FMQSxBQW1ERSxDQWhDRixBQXFDRSxHQTFDRixHQWpFYSxFQTBCSyxHQWpDRSxLQW1CQSxDQVhSLE9BMEJTLEdBekJXLEVBUmhDLENBeUJnQixJQU5oQixTQWUyQixDQVIzQixVQWpCZSxFQXlDZ0IsWUFmakIsS0FtRVMsT0FsRU4sZUFDQSxlQUNTLGtCQTVCRixzQ0E2QkcsQUFnRXpCLGFBcERZLFlBQ2QsZUF6Q3lCLGtCQTZCWSw4RUFDckMsR0E3QkEiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1BocHN0b3JtUHJvamVjdHMvc29hcC13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvUHJvZHVjdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoeyBzbHVnIH0pID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VDb250ZXh0KENvbnRleHQpLmRhdGE7XG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZHVjdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0UHJvZHVjdChwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3Quc2x1ZyA9PT0gc2x1ZykpO1xuICAgICAgc2V0UHJvZHVjdCgocHJvZHVjdCkgPT4gcHJvZHVjdFswXSk7XG4gICAgfVxuICB9LCBbcHJvZHVjdHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2BodHRwOi8vMTg4LjE2Ni4yNTMuMTExJHtwcm9kdWN0Py5waG90by5mb3JtYXRzLmxhcmdlLnVybH1gfVxuICAgICAgICAgIGFsdD17cHJvZHVjdD8ucGhvdG8uYWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvZHVjdD8ubmFtZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3Q/LmNhdGVnb3JpZXNbMF0uc2x1Z31gfT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFja1wiPkJBQ0s8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9keS1zZWN0aW9uXCI+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGl0bGVcIj5EZXNjcmlwdGlvbjo8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57cHJvZHVjdD8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDI+UHJpY2U6ICR7cHJvZHVjdD8ucHJpY2V9PC9oMj5cbiAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgPHN0cm9uZz5JbmdyZWRpZW50czo8L3N0cm9uZz4ge3Byb2R1Y3Q/LmluZ3JlZGllbnRzfVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgbGVmdDogMTUlO1xuICAgICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmUge1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNhZjliN2Q7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjayB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2FmOWI3ZDtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjYWY5YjdkO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2s6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1ib2R5LXNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjBweCkge1xuICAgICAgICAgIC5oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRvcDogMjMlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgLmhlYWRlci10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB0b3A6IDE3JTtcbiAgICAgICAgICAgIGhlaWdodDogMjIlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1haW4tYm9keS1zZWN0aW9uIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmhlYWRlci10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgdG9wOiAxNiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmFjayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIC5oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRvcDogMTYlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNyU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmFjayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/ProductPage.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductPage, \"5/7BZAsw1DkHlAc6Rhf6dLR5vhU=\");\n\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZS5qcz84YmEwIl0sIm5hbWVzIjpbIlByb2R1Y3RQYWdlIiwic2x1ZyIsInByb2R1Y3RzIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJkYXRhIiwidXNlU3RhdGUiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsImZpbHRlciIsInBob3RvIiwiZm9ybWF0cyIsImxhcmdlIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0IiwibmFtZSIsImNhdGVnb3JpZXMiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaW5ncmVkaWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEMsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUFWLENBQW9CQyxJQUFyQzs7QUFEZ0Msa0JBRUZDLHNEQUFRLEVBRk47QUFBQSxNQUV6QkMsT0FGeUI7QUFBQSxNQUVoQkMsVUFGZ0I7O0FBSWhDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUCxRQUFRLEtBQUtRLFNBQWpCLEVBQTRCO0FBQzFCRixnQkFBVSxDQUFDTixRQUFRLENBQUNTLE1BQVQsQ0FBZ0IsVUFBQ0osT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ04sSUFBUixLQUFpQkEsSUFBOUI7QUFBQSxPQUFoQixDQUFELENBQVY7QUFDQU8sZ0JBQVUsQ0FBQyxVQUFDRCxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDLENBQUQsQ0FBcEI7QUFBQSxPQUFELENBQVY7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDTCxRQUFELENBTE0sQ0FBVDtBQU9BLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUE7QUFBQSw4QkFDRTtBQUNFLFdBQUcsa0NBQTJCSyxPQUEzQixhQUEyQkEsT0FBM0IsdUJBQTJCQSxPQUFPLENBQUVLLEtBQVQsQ0FBZUMsT0FBZixDQUF1QkMsS0FBdkIsQ0FBNkJDLEdBQXhELENBREw7QUFFRSxXQUFHLEVBQUVSLE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFSyxLQUFULENBQWVJLGVBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFBLDJDQUFlLHdCQUFmO0FBQUEsZ0NBQ0U7QUFBQSw2Q0FBYyxPQUFkO0FBQUEsb0JBQXVCVCxPQUF2QixhQUF1QkEsT0FBdkIsdUJBQXVCQSxPQUFPLENBQUVVO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLDZDQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxzQkFBZVYsT0FBZixhQUFlQSxPQUFmLHVCQUFlQSxPQUFPLENBQUVXLFVBQVQsQ0FBb0IsQ0FBcEIsRUFBdUJqQixJQUF0QyxDQUFWO0FBQUEsaUNBQ0U7QUFBQSwrQ0FBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBWUU7QUFBQSwyQ0FBZSxtQkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQSxrQ0FDRTtBQUFBLCtDQUFjLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSwrQ0FBYSxhQUFiO0FBQUEsc0JBQTRCTSxPQUE1QixhQUE0QkEsT0FBNUIsdUJBQTRCQSxPQUFPLENBQUVZO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFBQTtBQUFBLGtDQUNFO0FBQUE7QUFBQSxtQ0FBYVosT0FBYixhQUFhQSxPQUFiLHVCQUFhQSxPQUFPLENBQUVhLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLE9BQ2lDYixPQURqQyxhQUNpQ0EsT0FEakMsdUJBQ2lDQSxPQUFPLENBQUVjLFdBRDFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxTEQsQ0FoTUQ7O0dBQU1yQixXOztLQUFBQSxXO0FBa01TQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdFBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoeyBzbHVnIH0pID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VDb250ZXh0KENvbnRleHQpLmRhdGE7XG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZHVjdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0UHJvZHVjdChwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3Quc2x1ZyA9PT0gc2x1ZykpO1xuICAgICAgc2V0UHJvZHVjdCgocHJvZHVjdCkgPT4gcHJvZHVjdFswXSk7XG4gICAgfVxuICB9LCBbcHJvZHVjdHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2BodHRwOi8vMTg4LjE2Ni4yNTMuMTExJHtwcm9kdWN0Py5waG90by5mb3JtYXRzLmxhcmdlLnVybH1gfVxuICAgICAgICAgIGFsdD17cHJvZHVjdD8ucGhvdG8uYWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvZHVjdD8ubmFtZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3Q/LmNhdGVnb3JpZXNbMF0uc2x1Z31gfT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFja1wiPkJBQ0s8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9keS1zZWN0aW9uXCI+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGl0bGVcIj5EZXNjcmlwdGlvbjo8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57cHJvZHVjdD8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDI+UHJpY2U6ICR7cHJvZHVjdD8ucHJpY2V9PC9oMj5cbiAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgPHN0cm9uZz5JbmdyZWRpZW50czo8L3N0cm9uZz4ge3Byb2R1Y3Q/LmluZ3JlZGllbnRzfVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgbGVmdDogMTUlO1xuICAgICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmUge1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNhZjliN2Q7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjayB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2FmOWI3ZDtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjYWY5YjdkO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2s6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1ib2R5LXNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjBweCkge1xuICAgICAgICAgIC5oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRvcDogMjMlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgLmhlYWRlci10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB0b3A6IDE3JTtcbiAgICAgICAgICAgIGhlaWdodDogMjIlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1haW4tYm9keS1zZWN0aW9uIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmhlYWRlci10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgdG9wOiAxNiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmFjayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIC5oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRvcDogMTYlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNyU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmFjayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductPage.js\n");

/***/ })

})