webpackHotUpdate_N_E("pages/products/[category]/[slug]",{

/***/ "./components/ProductPage.js":
/*!***********************************!*\
  !*** ./components/ProductPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/components/ProductPage.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ProductPage = function ProductPage(_ref) {\n  _s();\n\n  var slug = _ref.slug;\n  var products = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_5__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      product = _useState[0],\n      setProduct = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      items = _useState2[0],\n      setItems = _useState2[1];\n\n  var height = \"320px\";\n  var width = \"500px\";\n\n  var handleDragStart = function handleDragStart(e) {\n    return e.preventDefault();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (products !== undefined) {\n      setProduct(products.filter(function (product) {\n        return product.slug === slug;\n      }));\n      setProduct(function (product) {\n        return product[0];\n      });\n    }\n  }, [products]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (product !== undefined) {\n      var carousel = product.carousel;\n      carousel.forEach(function (image) {\n        var imgUrl = image.formats.small.url;\n        var altText = image.alternativeText;\n        setItems([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items), [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          src: imgUrl,\n          alt: altText,\n          onDragEnter: handleDragStart,\n          className: \"image-carousel\",\n          style: {\n            height: height,\n            width: width,\n            objectFit: \"cover\"\n          }\n        }, image.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)]));\n      });\n    }\n  }, [product]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"header\", {\n      className: \"jsx-3787852736\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3787852736\" + \" \" + \"header-hero-component\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          src: \"\".concat(product === null || product === void 0 ? void 0 : product.photo.formats.large.url),\n          alt: product === null || product === void 0 ? void 0 : product.photo.alternativeText,\n          className: \"jsx-3787852736\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3787852736\" + \" \" + \"header-title-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n            className: \"jsx-3787852736\" + \" \" + \"title\",\n            children: product === null || product === void 0 ? void 0 : product.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3787852736\" + \" \" + \"line\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/products/\".concat(product === null || product === void 0 ? void 0 : product.categories[0].slug),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n              className: \"jsx-3787852736\" + \" \" + \"back\",\n              children: \"BACK\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), items.length === (product === null || product === void 0 ? void 0 : product.carousel.length) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3787852736\",\n        children: items\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3787852736\",\n        children: \"failed\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3787852736\" + \" \" + \"main-body-section\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n          className: \"jsx-3787852736\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            className: \"jsx-3787852736\" + \" \" + \"description-title\",\n            children: \"Description:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3787852736\" + \" \" + \"description\",\n            children: product === null || product === void 0 ? void 0 : product.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"aside\", {\n          className: \"jsx-3787852736\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            className: \"jsx-3787852736\",\n            children: [\"Price: $\", product === null || product === void 0 ? void 0 : product.price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n            className: \"jsx-3787852736\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              className: \"jsx-3787852736\",\n              children: \"Ingredients:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 15\n            }, _this), \" \", product === null || product === void 0 ? void 0 : product.ingredients]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"3787852736\",\n      children: \".header-hero-component.jsx-3787852736{position:relative;}img.jsx-3787852736{width:100%;height:450px;object-fit:cover;}.header-title-container.jsx-3787852736{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:180px;width:70%;background:rgba(0,0,0,0.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-3787852736{color:white;font-size:50px;text-align:center;margin-bottom:4px;}.line.jsx-3787852736{width:70px;padding-top:5px;border-bottom:4px solid #af9b7d;margin:0 auto;}.back.jsx-3787852736{width:120px;height:15%;margin:20px auto 0;background:#af9b7d;border:3px solid #af9b7d;color:black;font-size:1rem;cursor:pointer;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;}.back.jsx-3787852736:hover{background:none;}.main-body-section.jsx-3787852736{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;margin:10px;}main.jsx-3787852736{width:45%;margin-right:10px;}aside.jsx-3787852736{margin-right:5px;width:45%;}.description.jsx-3787852736{margin-top:10px;}h4.jsx-3787852736{margin-top:10px;font-weight:400;}strong.jsx-3787852736{font-size:22px;display:block;}@media screen and (max-width:700px){.title.jsx-3787852736{font-size:42px;}.main-body-section.jsx-3787852736{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-3787852736{width:85%;margin-bottom:5px;}aside.jsx-3787852736{width:85%;margin-bottom:15px;}}@media screen and (max-width:600px){.title.jsx-3787852736{font-size:38px;}.back.jsx-3787852736{font-size:0.8rem;}}@media screen and (max-width:500px){.title.jsx-3787852736{font-size:28px;}.back.jsx-3787852736{font-size:0.7rem;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGa0IsQUFLNkIsQUFJUCxBQU1PLEFBYU4sQUFPRCxBQU9DLEFBY0ksQUFNTCxBQU9ELEFBS08sQUFLRCxBQUlBLEFBS0QsQUFRRSxBQUllLEFBS3BCLEFBS0EsQUFPSyxBQUlFLEFBTUYsQUFJRSxVQTdERCxBQW9DRSxBQUtDLENBckdSLEFBMEJHLEFBMkJILENBbENFLEFBY0osR0E4Q0csQUFRZCxBQXFCQSxBQVVBLENBdkVGLEFBdUJBLEFBSWtCLENBVE4sQUErQ1YsQUFVQSxDQTlIRixBQVVVLEtBNEJXLENBakNGLEVBTVIsQ0FhUyxBQU9jLEFBdUNsQyxDQUxBLEFBb0NFLENBakJGLEFBc0JFLEdBM0JGLEdBbkVrQyxNQU5sQyxDQWlDcUIsR0FkRCxjQU9KLEVBUVcsRUFkM0IsVUFPQSxZQXlCK0IsQ0FqQmpCLFlBQ0csSUFxRE0sV0FwRE4sZUFDUyxZQS9CWCxhQUNILFVBQ29CLHFCQThCTCxNQTdCWixLQWdGYixhQXJDWSxZQUNkLHNCQWRxQyxzQkE3QmIsd0RBOEJ4QixzQkE3QnlCLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zb2FwLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCBQcm9kdWN0UGFnZSA9ICh7IHNsdWcgfSkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGVpZ2h0ID0gXCIzMjBweFwiO1xuICBjb25zdCB3aWR0aCA9IFwiNTAwcHhcIjtcblxuICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFByb2R1Y3QocHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LnNsdWcgPT09IHNsdWcpKTtcbiAgICAgIHNldFByb2R1Y3QoKHByb2R1Y3QpID0+IHByb2R1Y3RbMF0pO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZHVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjYXJvdXNlbCA9IHByb2R1Y3QuY2Fyb3VzZWw7XG4gICAgICBjYXJvdXNlbC5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICBjb25zdCBpbWdVcmwgPSBpbWFnZS5mb3JtYXRzLnNtYWxsLnVybDtcbiAgICAgICAgY29uc3QgYWx0VGV4dCA9IGltYWdlLmFsdGVybmF0aXZlVGV4dDtcbiAgICAgICAgc2V0SXRlbXMoW1xuICAgICAgICAgIC4uLml0ZW1zLFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17aW1nVXJsfVxuICAgICAgICAgICAgYWx0PXthbHRUZXh0fVxuICAgICAgICAgICAga2V5PXtpbWFnZS5pZH1cbiAgICAgICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnU3RhcnR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1jYXJvdXNlbFwiXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAgICAgICAgIC8+LFxuICAgICAgICBdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWhlcm8tY29tcG9uZW50XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtgJHtwcm9kdWN0Py5waG90by5mb3JtYXRzLmxhcmdlLnVybH1gfVxuICAgICAgICAgICAgYWx0PXtwcm9kdWN0Py5waG90by5hbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9kdWN0Py5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3Q/LmNhdGVnb3JpZXNbMF0uc2x1Z31gfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYWNrXCI+QkFDSzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7aXRlbXMubGVuZ3RoID09PSBwcm9kdWN0Py5jYXJvdXNlbC5sZW5ndGggPyAoXG4gICAgICAgICAgPGRpdj57aXRlbXN9PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5mYWlsZWQ8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9keS1zZWN0aW9uXCI+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGl0bGVcIj5EZXNjcmlwdGlvbjo8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57cHJvZHVjdD8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDI+UHJpY2U6ICR7cHJvZHVjdD8ucHJpY2V9PC9oMj5cbiAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgPHN0cm9uZz5JbmdyZWRpZW50czo8L3N0cm9uZz4ge3Byb2R1Y3Q/LmluZ3JlZGllbnRzfVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC8vIEhlcm9cblxuICAgICAgICAuaGVhZGVyLWhlcm8tY29tcG9uZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmUge1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNhZjliN2Q7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjayB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2FmOWI3ZDtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjYWY5YjdkO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2s6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWluXG5cbiAgICAgICAgLm1haW4tYm9keS1zZWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYXNpZGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNZWRpYSBRdWVyaWVzXG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tYWluLWJvZHktc2VjdGlvbiB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/soap-website/frontend/components/ProductPage.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductPage, \"Ys5nZPDOxQQq2PigWMLEyyKcmcw=\");\n\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZS5qcz84YmEwIl0sIm5hbWVzIjpbIlByb2R1Y3RQYWdlIiwic2x1ZyIsInByb2R1Y3RzIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJkYXRhIiwidXNlU3RhdGUiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsIml0ZW1zIiwic2V0SXRlbXMiLCJoZWlnaHQiLCJ3aWR0aCIsImhhbmRsZURyYWdTdGFydCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsImZpbHRlciIsImNhcm91c2VsIiwiZm9yRWFjaCIsImltYWdlIiwiaW1nVXJsIiwiZm9ybWF0cyIsInNtYWxsIiwidXJsIiwiYWx0VGV4dCIsImFsdGVybmF0aXZlVGV4dCIsIm9iamVjdEZpdCIsImlkIiwicGhvdG8iLCJsYXJnZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImluZ3JlZGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEMsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUFWLENBQW9CQyxJQUFyQzs7QUFEZ0Msa0JBRUZDLHNEQUFRLEVBRk47QUFBQSxNQUV6QkMsT0FGeUI7QUFBQSxNQUVoQkMsVUFGZ0I7O0FBQUEsbUJBR05GLHNEQUFRLENBQUMsRUFBRCxDQUhGO0FBQUEsTUFHekJHLEtBSHlCO0FBQUEsTUFHbEJDLFFBSGtCOztBQUtoQyxNQUFNQyxNQUFNLEdBQUcsT0FBZjtBQUNBLE1BQU1DLEtBQUssR0FBRyxPQUFkOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMs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QUFBLDRDQUFlLG1CQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBLGtDQUNFO0FBQUEsZ0RBQWMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLGdEQUFhLGFBQWI7QUFBQSxzQkFBNEJGLE9BQTVCLGFBQTRCQSxPQUE1Qix1QkFBNEJBLE9BQU8sQ0FBRTRCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFBQTtBQUFBLGtDQUNFO0FBQUE7QUFBQSxtQ0FBYTVCLE9BQWIsYUFBYUEsT0FBYix1QkFBYUEsT0FBTyxDQUFFNkIsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsT0FDaUM3QixPQURqQyxhQUNpQ0EsT0FEakMsdUJBQ2lDQSxPQUFPLENBQUU4QixXQUQxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZLRCxDQW5ORDs7R0FBTXJDLFc7O0tBQUFBLFc7QUFxTlNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCBQcm9kdWN0UGFnZSA9ICh7IHNsdWcgfSkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGVpZ2h0ID0gXCIzMjBweFwiO1xuICBjb25zdCB3aWR0aCA9IFwiNTAwcHhcIjtcblxuICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFByb2R1Y3QocHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LnNsdWcgPT09IHNsdWcpKTtcbiAgICAgIHNldFByb2R1Y3QoKHByb2R1Y3QpID0+IHByb2R1Y3RbMF0pO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZHVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjYXJvdXNlbCA9IHByb2R1Y3QuY2Fyb3VzZWw7XG4gICAgICBjYXJvdXNlbC5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICBjb25zdCBpbWdVcmwgPSBpbWFnZS5mb3JtYXRzLnNtYWxsLnVybDtcbiAgICAgICAgY29uc3QgYWx0VGV4dCA9IGltYWdlLmFsdGVybmF0aXZlVGV4dDtcbiAgICAgICAgc2V0SXRlbXMoW1xuICAgICAgICAgIC4uLml0ZW1zLFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17aW1nVXJsfVxuICAgICAgICAgICAgYWx0PXthbHRUZXh0fVxuICAgICAgICAgICAga2V5PXtpbWFnZS5pZH1cbiAgICAgICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnU3RhcnR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1jYXJvdXNlbFwiXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAgICAgICAgIC8+LFxuICAgICAgICBdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWhlcm8tY29tcG9uZW50XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtgJHtwcm9kdWN0Py5waG90by5mb3JtYXRzLmxhcmdlLnVybH1gfVxuICAgICAgICAgICAgYWx0PXtwcm9kdWN0Py5waG90by5hbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9kdWN0Py5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3Q/LmNhdGVnb3JpZXNbMF0uc2x1Z31gfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYWNrXCI+QkFDSzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7aXRlbXMubGVuZ3RoID09PSBwcm9kdWN0Py5jYXJvdXNlbC5sZW5ndGggPyAoXG4gICAgICAgICAgPGRpdj57aXRlbXN9PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5mYWlsZWQ8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9keS1zZWN0aW9uXCI+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGl0bGVcIj5EZXNjcmlwdGlvbjo8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57cHJvZHVjdD8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDI+UHJpY2U6ICR7cHJvZHVjdD8ucHJpY2V9PC9oMj5cbiAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgPHN0cm9uZz5JbmdyZWRpZW50czo8L3N0cm9uZz4ge3Byb2R1Y3Q/LmluZ3JlZGllbnRzfVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC8vIEhlcm9cblxuICAgICAgICAuaGVhZGVyLWhlcm8tY29tcG9uZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmUge1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNhZjliN2Q7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjayB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2FmOWI3ZDtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjYWY5YjdkO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2s6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWluXG5cbiAgICAgICAgLm1haW4tYm9keS1zZWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYXNpZGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNZWRpYSBRdWVyaWVzXG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tYWluLWJvZHktc2VjdGlvbiB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductPage.js\n");

/***/ })

})