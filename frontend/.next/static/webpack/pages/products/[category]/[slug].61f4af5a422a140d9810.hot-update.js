webpackHotUpdate_N_E("pages/products/[category]/[slug]",{

/***/ "./components/ProductPage.js":
/*!***********************************!*\
  !*** ./components/ProductPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Carousel */ \"./components/Carousel.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/components/ProductPage.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ProductPage = function ProductPage(_ref) {\n  _s();\n\n  var slug = _ref.slug;\n  var products = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_5__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      product = _useState[0],\n      setProduct = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      items = _useState2[0],\n      setItems = _useState2[1];\n\n  var height = \"320px\";\n  var width = \"500px\";\n  var style = {\n    height: height,\n    width: width,\n    objectFit: \"cover\",\n    margin: \"20px\",\n    border: \"2px solid grey\"\n  };\n\n  var handleDragStart = function handleDragStart(e) {\n    return e.preventDefault();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (products !== undefined) {\n      setProduct(products.filter(function (product) {\n        return product.slug === slug;\n      }));\n      setProduct(function (product) {\n        return product[0];\n      });\n    }\n  }, [products]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (product !== undefined) {\n      var arr = [];\n      arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: product.photo.formats.small.url,\n        alt: product.photo.alternativeText,\n        onDragEnter: handleDragStart,\n        className: \"image-carousel\",\n        style: style\n      }, product.photo.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this));\n      product.carousel.forEach(function (image) {\n        var imgUrl = image.formats.small.url;\n        var altText = image.alternativeText;\n        arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: imgUrl,\n          alt: altText,\n          onDragEnter: handleDragStart,\n          className: \"image-carousel\",\n          style: style\n        }, image.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this));\n      });\n      setItems(arr);\n    }\n  }, [product]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"jsx-3688197815\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3688197815\" + \" \" + \"header-hero-component\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"\".concat(product === null || product === void 0 ? void 0 : product.photo.formats.large.url),\n          alt: product === null || product === void 0 ? void 0 : product.photo.alternativeText,\n          className: \"jsx-3688197815\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3688197815\" + \" \" + \"header-title-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"jsx-3688197815\" + \" \" + \"title\",\n            children: product === null || product === void 0 ? void 0 : product.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3688197815\" + \" \" + \"line\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: \"/products/\".concat(product === null || product === void 0 ? void 0 : product.categories[0].slug),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: \"jsx-3688197815\" + \" \" + \"back\",\n              children: \"BACK\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this), items.length === (product === null || product === void 0 ? void 0 : product.carousel.length) + 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        items: items\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 11\n      }, _this) : items.length === 1 ? items : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3688197815\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3688197815\" + \" \" + \"main-body-section\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n          className: \"jsx-3688197815\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: \"jsx-3688197815\" + \" \" + \"description-title\",\n            children: \"Description:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3688197815\" + \" \" + \"description\",\n            children: product === null || product === void 0 ? void 0 : product.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n          className: \"jsx-3688197815\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: \"jsx-3688197815\",\n            children: [\"Price: $\", product === null || product === void 0 ? void 0 : product.price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            className: \"jsx-3688197815\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n              className: \"jsx-3688197815\",\n              children: \"Ingredients:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 15\n            }, _this), \" \", product === null || product === void 0 ? void 0 : product.ingredients]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3688197815\",\n      children: \".header-hero-component.jsx-3688197815{position:relative;}img.jsx-3688197815{width:100%;height:450px;object-fit:cover;}.header-title-container.jsx-3688197815{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:180px;width:70%;background:rgba(0,0,0,0.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-3688197815{color:white;font-size:50px;text-align:center;margin-bottom:4px;}.line.jsx-3688197815{width:70px;padding-top:5px;border-bottom:4px solid #af9b7d;margin:0 auto;}.back.jsx-3688197815{width:120px;height:15%;margin:20px auto 0;background:#af9b7d;border:3px solid #af9b7d;color:black;font-size:1rem;cursor:pointer;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;}.back.jsx-3688197815:hover{background:none;}.main-body-section.jsx-3688197815{margin-top:20px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;margin:10px;}main.jsx-3688197815{width:45%;margin-right:10px;}aside.jsx-3688197815{margin-right:5px;width:45%;}.description.jsx-3688197815{margin-top:10px;}h4.jsx-3688197815{margin-top:10px;font-weight:400;}strong.jsx-3688197815{font-size:22px;display:block;}@media screen and (max-width:700px){.title.jsx-3688197815{font-size:42px;}.main-body-section.jsx-3688197815{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-3688197815{width:85%;margin-bottom:5px;}aside.jsx-3688197815{width:85%;margin-bottom:15px;}}@media screen and (max-width:600px){.title.jsx-3688197815{font-size:38px;}.back.jsx-3688197815{font-size:0.8rem;}}@media screen and (max-width:500px){.title.jsx-3688197815{font-size:28px;}.back.jsx-3688197815{font-size:0.7rem;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ha0IsQUFLNkIsQUFJUCxBQU1PLEFBYU4sQUFPRCxBQU9DLEFBY0ksQUFNQSxBQVFOLEFBS08sQUFLRCxBQUlBLEFBS0QsQUFRRSxBQUllLEFBS3BCLEFBS0EsQUFPSyxBQUlFLEFBTUYsQUFJRSxVQTdERCxBQW9DRSxBQUtDLENBdEdSLEFBMEJHLENBUEQsQUFjSixHQStDRyxBQVFkLEFBcUJBLEFBVUEsQ0F4RUYsQUFNYSxBQWtCYixBQUlrQixDQVROLEFBK0NWLEFBVUEsQ0EvSEYsQUFVVSxLQTRCVyxDQWpDRixFQU1SLENBYVMsQUFPYyxBQTJCbkIsQUFhZixDQUxBLEFBb0NFLENBakJGLEFBc0JFLEdBM0JGLEdBcEVrQyxNQU5sQyxDQWlDcUIsR0FkRCxjQU9KLEVBUVcsRUFkM0IsVUFPQSxhQVFjLFlBQ0csR0FpQmMsQ0FxQ1IsV0FyRE4sZUFDUyxZQS9CWCxhQUNILFVBQ29CLHFCQThCTCxNQTdCWixLQWlGYiw2QkFyQ1ksWUFDZCxNQWZxQyxzQkE3QmIsd0RBOEJ4QixzQkE3QnlCLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9zb2FwLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IFByb2R1Y3RQYWdlID0gKHsgc2x1ZyB9KSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlQ29udGV4dChDb250ZXh0KS5kYXRhO1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoZWlnaHQgPSBcIjMyMHB4XCI7XG4gIGNvbnN0IHdpZHRoID0gXCI1MDBweFwiO1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgbWFyZ2luOiBcIjIwcHhcIixcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGdyZXlcIixcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFByb2R1Y3QocHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LnNsdWcgPT09IHNsdWcpKTtcbiAgICAgIHNldFByb2R1Y3QoKHByb2R1Y3QpID0+IHByb2R1Y3RbMF0pO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZHVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgYXJyID0gW107XG4gICAgICBhcnIucHVzaChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cHJvZHVjdC5waG90by5mb3JtYXRzLnNtYWxsLnVybH1cbiAgICAgICAgICBhbHQ9e3Byb2R1Y3QucGhvdG8uYWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAgIGtleT17cHJvZHVjdC5waG90by5pZH1cbiAgICAgICAgICBvbkRyYWdFbnRlcj17aGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWNhcm91c2VsXCJcbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgICAgcHJvZHVjdC5jYXJvdXNlbC5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICBjb25zdCBpbWdVcmwgPSBpbWFnZS5mb3JtYXRzLnNtYWxsLnVybDtcbiAgICAgICAgY29uc3QgYWx0VGV4dCA9IGltYWdlLmFsdGVybmF0aXZlVGV4dDtcbiAgICAgICAgYXJyLnB1c2goXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtpbWdVcmx9XG4gICAgICAgICAgICBhbHQ9e2FsdFRleHR9XG4gICAgICAgICAgICBrZXk9e2ltYWdlLmlkfVxuICAgICAgICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWNhcm91c2VsXCJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBzZXRJdGVtcyhhcnIpO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWhlcm8tY29tcG9uZW50XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtgJHtwcm9kdWN0Py5waG90by5mb3JtYXRzLmxhcmdlLnVybH1gfVxuICAgICAgICAgICAgYWx0PXtwcm9kdWN0Py5waG90by5hbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9kdWN0Py5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3Q/LmNhdGVnb3JpZXNbMF0uc2x1Z31gfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYWNrXCI+QkFDSzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7aXRlbXMubGVuZ3RoID09PSBwcm9kdWN0Py5jYXJvdXNlbC5sZW5ndGggKyAxID8gKFxuICAgICAgICAgIDxDYXJvdXNlbCBpdGVtcz17aXRlbXN9IC8+XG4gICAgICAgICkgOiBpdGVtcy5sZW5ndGggPT09IDEgPyAoXG4gICAgICAgICAgaXRlbXNcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvZHktc2VjdGlvblwiPlxuICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRpdGxlXCI+RGVzY3JpcHRpb246PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3Byb2R1Y3Q/LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgPGgyPlByaWNlOiAke3Byb2R1Y3Q/LnByaWNlfTwvaDI+XG4gICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+SW5ncmVkaWVudHM6PC9zdHJvbmc+IHtwcm9kdWN0Py5pbmdyZWRpZW50c31cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAvLyBIZXJvXG5cbiAgICAgICAgLmhlYWRlci1oZXJvLWNvbXBvbmVudCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlci10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5lIHtcbiAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjYWY5YjdkO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2sge1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNhZjliN2Q7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2FmOWI3ZDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFpblxuXG4gICAgICAgIC5tYWluLWJvZHktc2VjdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYXNpZGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNZWRpYSBRdWVyaWVzXG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tYWluLWJvZHktc2VjdGlvbiB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/soap-website/frontend/components/ProductPage.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductPage, \"Ys5nZPDOxQQq2PigWMLEyyKcmcw=\");\n\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZS5qcz84YmEwIl0sIm5hbWVzIjpbIlByb2R1Y3RQYWdlIiwic2x1ZyIsInByb2R1Y3RzIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJkYXRhIiwidXNlU3RhdGUiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsIml0ZW1zIiwic2V0SXRlbXMiLCJoZWlnaHQiLCJ3aWR0aCIsInN0eWxlIiwib2JqZWN0Rml0IiwibWFyZ2luIiwiYm9yZGVyIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwiZmlsdGVyIiwiYXJyIiwicHVzaCIsInBob3RvIiwiZm9ybWF0cyIsInNtYWxsIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0IiwiaWQiLCJjYXJvdXNlbCIsImZvckVhY2giLCJpbWFnZSIsImltZ1VybCIsImFsdFRleHQiLCJsYXJnZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImluZ3JlZGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2hDLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FBVixDQUFvQkMsSUFBckM7O0FBRGdDLGtCQUVGQyxzREFBUSxFQUZOO0FBQUEsTUFFekJDLE9BRnlCO0FBQUEsTUFFaEJDLFVBRmdCOztBQUFBLG1CQUdORixzREFBUSxDQUFDLEVBQUQsQ0FIRjtBQUFBLE1BR3pCRyxLQUh5QjtBQUFBLE1BR2xCQyxRQUhrQjs7QUFLaEMsTUFBTUMsTUFBTSxHQUFHLE9BQWY7QUFDQSxNQUFNQyxLQUFLLEdBQUcsT0FBZDtBQUNBLE1BQU1DLEtBQUssR0FB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QSxPQURqQyx1QkFDaUNBLE9BQU8sQ0FBRW1DLFdBRDFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0xELENBdk9EOztHQUFNMUMsVzs7S0FBQUEsVztBQXlPU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuL0Nhcm91c2VsXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoeyBzbHVnIH0pID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VDb250ZXh0KENvbnRleHQpLmRhdGE7XG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhlaWdodCA9IFwiMzIwcHhcIjtcbiAgY29uc3Qgd2lkdGggPSBcIjUwMHB4XCI7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICBtYXJnaW46IFwiMjBweFwiLFxuICAgIGJvcmRlcjogXCIycHggc29saWQgZ3JleVwiLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZHVjdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0UHJvZHVjdChwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3Quc2x1ZyA9PT0gc2x1ZykpO1xuICAgICAgc2V0UHJvZHVjdCgocHJvZHVjdCkgPT4gcHJvZHVjdFswXSk7XG4gICAgfVxuICB9LCBbcHJvZHVjdHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9kdWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgIGFyci5wdXNoKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtwcm9kdWN0LnBob3RvLmZvcm1hdHMuc21hbGwudXJsfVxuICAgICAgICAgIGFsdD17cHJvZHVjdC5waG90by5hbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAga2V5PXtwcm9kdWN0LnBob3RvLmlkfVxuICAgICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnU3RhcnR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY2Fyb3VzZWxcIlxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgICBwcm9kdWN0LmNhcm91c2VsLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ1VybCA9IGltYWdlLmZvcm1hdHMuc21hbGwudXJsO1xuICAgICAgICBjb25zdCBhbHRUZXh0ID0gaW1hZ2UuYWx0ZXJuYXRpdmVUZXh0O1xuICAgICAgICBhcnIucHVzaChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltZ1VybH1cbiAgICAgICAgICAgIGFsdD17YWx0VGV4dH1cbiAgICAgICAgICAgIGtleT17aW1hZ2UuaWR9XG4gICAgICAgICAgICBvbkRyYWdFbnRlcj17aGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY2Fyb3VzZWxcIlxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHNldEl0ZW1zKGFycik7XG4gICAgfVxuICB9LCBbcHJvZHVjdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaGVyby1jb21wb25lbnRcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2Ake3Byb2R1Y3Q/LnBob3RvLmZvcm1hdHMubGFyZ2UudXJsfWB9XG4gICAgICAgICAgICBhbHQ9e3Byb2R1Y3Q/LnBob3RvLmFsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb2R1Y3Q/Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdD8uY2F0ZWdvcmllc1swXS5zbHVnfWB9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJhY2tcIj5CQUNLPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtpdGVtcy5sZW5ndGggPT09IHByb2R1Y3Q/LmNhcm91c2VsLmxlbmd0aCArIDEgPyAoXG4gICAgICAgICAgPENhcm91c2VsIGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgICAgKSA6IGl0ZW1zLmxlbmd0aCA9PT0gMSA/IChcbiAgICAgICAgICBpdGVtc1xuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9keS1zZWN0aW9uXCI+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGl0bGVcIj5EZXNjcmlwdGlvbjo8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57cHJvZHVjdD8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDI+UHJpY2U6ICR7cHJvZHVjdD8ucHJpY2V9PC9oMj5cbiAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgPHN0cm9uZz5JbmdyZWRpZW50czo8L3N0cm9uZz4ge3Byb2R1Y3Q/LmluZ3JlZGllbnRzfVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC8vIEhlcm9cblxuICAgICAgICAuaGVhZGVyLWhlcm8tY29tcG9uZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmUge1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNhZjliN2Q7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjayB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2FmOWI3ZDtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjYWY5YjdkO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2s6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWluXG5cbiAgICAgICAgLm1haW4tYm9keS1zZWN0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1lZGlhIFF1ZXJpZXNcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1haW4tYm9keS1zZWN0aW9uIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmFjayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductPage.js\n");

/***/ })

})