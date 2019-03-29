module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22);
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















var variantIcon = {
  success: _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4___default.a,
  warning: _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_13___default.a,
  error: _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5___default.a,
  info: _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6___default.a
};

var styles = function styles(theme) {
  return {
    success: {
      backgroundColor: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8___default.a[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9___default.a[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  };
};

function MySnackbarContent(props) {
  var classes = props.classes,
      className = props.className,
      message = props.message,
      onClose = props.onClose,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["classes", "className", "message", "onClose", "variant"]);

  var Icon = variantIcon[variant];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes[variant], className),
    "aria-describedby": "client-snackbar",
    message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      id: "client-snackbar",
      className: classes.message
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.icon, classes.iconVariant)
    }), message),
    action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      className: classes.close,
      onClick: onClose
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.icon
    }))]
  });
}

var MySnackbarContentWrapper = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["withStyles"])(styles)(MySnackbarContent);
/* harmony default export */ __webpack_exports__["a"] = (MySnackbarContentWrapper);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Error");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/amber");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Warning");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  progress: {
    marginLeft: '20px'
  }
};

var ButtonAppBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonAppBar, _React$Component);

  function ButtonAppBar(props) {
    var _this;

    _classCallCheck(this, ButtonAppBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonAppBar).call(this, props));
    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(ButtonAppBar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.setState({
        loading: this.props.loading
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        position: "static"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        as: "/",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "h6",
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Camp Carowanis"), " Station de Supervision"), this.state.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.progress,
        color: "secondary",
        size: 20
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.grow
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        as: "/settings",
        href: "/settings"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        color: "inherit"
      }, "D\xE9connexion"))));
    }
  }]);

  return ButtonAppBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ButtonAppBar));

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),
/* 32 */
/***/ (function(module, exports) {



/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Modal");

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(13);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(9);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(1);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__(12);
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(15);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./static/css/main_custom.css
var main_custom = __webpack_require__(32);

// EXTERNAL MODULE: external "@material-ui/core/Table"
var Table_ = __webpack_require__(36);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// EXTERNAL MODULE: external "@material-ui/core/TableBody"
var TableBody_ = __webpack_require__(37);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);

// EXTERNAL MODULE: external "@material-ui/core/TableCell"
var TableCell_ = __webpack_require__(4);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);

// EXTERNAL MODULE: external "@material-ui/core/TableHead"
var TableHead_ = __webpack_require__(38);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);

// EXTERNAL MODULE: external "@material-ui/core/TableRow"
var TableRow_ = __webpack_require__(31);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(16);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(6);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Modal"
var Modal_ = __webpack_require__(39);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(7);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@material-ui/core/Fab"
var Fab_ = __webpack_require__(54);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(55);

// EXTERNAL MODULE: external "d3-scale"
var external_d3_scale_ = __webpack_require__(56);

// CONCATENATED MODULE: ./components/ModalComponent.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














function getModalStyle() {
  var top = 50;
  var left = 50;
  return {
    top: "".concat(top, "%"),
    left: "".concat(left, "%"),
    transform: "translate(-".concat(top, "%, -").concat(left, "%)"),
    borderRadius: '5px'
  };
}

var styles = function styles(theme) {
  return {
    paper: {
      position: 'absolute',
      // width: theme.spacing.unit * 50,
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none'
    }
  };
};

var ModalComponent_CustomizedLabel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomizedLabel, _React$Component);

  function CustomizedLabel() {
    _classCallCheck(this, CustomizedLabel);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomizedLabel).apply(this, arguments));
  }

  _createClass(CustomizedLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          stroke = _this$props.stroke,
          value = _this$props.value;
      return external_react_default.a.createElement("text", {
        x: x,
        y: y,
        fill: stroke,
        textAnchor: "middle"
      }, "hEYYYYYY YOUUUU");
    }
  }]);

  return CustomizedLabel;
}(external_react_default.a.Component);

var ModalComponent_CustomizedAxisTick =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(CustomizedAxisTick, _React$Component2);

  function CustomizedAxisTick() {
    _classCallCheck(this, CustomizedAxisTick);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomizedAxisTick).apply(this, arguments));
  }

  _createClass(CustomizedAxisTick, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          x = _this$props2.x,
          y = _this$props2.y,
          stroke = _this$props2.stroke,
          payload = _this$props2.payload;
      return external_react_default.a.createElement("g", {
        transform: "translate(".concat(x, ",").concat(y, ")")
      }, external_react_default.a.createElement("text", {
        x: 0,
        y: 0,
        dy: 16,
        textAnchor: "end",
        fill: "#666",
        transform: "rotate(-45)"
      }, -payload.value));
    }
  }]);

  return CustomizedAxisTick;
}(external_react_default.a.Component);

var ModalComponent_CustomTooltip = function CustomTooltip(_ref) {
  var active = _ref.active,
      payload = _ref.payload,
      label = _ref.label;

  if (active) {
    return external_react_default.a.createElement("div", {
      className: "custom-tooltip"
    }, external_react_default.a.createElement("div", {
      className: "value"
    }, "".concat(payload[0].value), " ", external_react_default.a.createElement("span", null, "mmol/L")), external_react_default.a.createElement("div", {
      className: "time"
    }, "il y a ", "".concat(-label), " minutes"));
  }

  return null;
};

var ModalComponent_SimpleModal =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(SimpleModal, _React$Component3);

  function SimpleModal() {
    _classCallCheck(this, SimpleModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleModal).apply(this, arguments));
  }

  _createClass(SimpleModal, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          classes = _this$props3.classes,
          sensorData = _this$props3.sensorData;

      if (!sensorData._id) {
        return null;
      } else {
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Modal_default.a, {
          "aria-labelledby": "simple-modal-title",
          "aria-describedby": "simple-modal-description",
          open: this.props.open,
          onClose: this.props.handleClose
        }, external_react_default.a.createElement("div", {
          style: getModalStyle(),
          className: classes.paper
        }, external_react_default.a.createElement(Typography_default.a, {
          variant: "h4",
          id: "modal-title"
        }, sensorData.name), external_react_default.a.createElement(Grid_default.a, {
          container: true
        }, external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 4
        }, external_react_default.a.createElement(TextField_default.a, {
          id: "outlined-name-input",
          label: "Appareil",
          className: classes.textField,
          type: "text",
          name: "device",
          margin: "normal",
          variant: "outlined",
          InputProps: {
            readOnly: true
          },
          value: sensorData.latestReading.device
        })), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 4
        }, external_react_default.a.createElement(TextField_default.a, {
          id: "outlined-sensorId-input",
          label: "Emplacement",
          className: classes.textField,
          type: "text",
          name: "location",
          margin: "normal",
          variant: "outlined",
          InputProps: {
            readOnly: true
          },
          value: sensorData.location
        })), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 4
        }, external_react_default.a.createElement(TextField_default.a, {
          id: "outlined-location-input",
          label: "Direction",
          className: classes.textField,
          type: "text",
          name: "direction",
          margin: "normal",
          variant: "outlined",
          InputProps: {
            readOnly: true
          },
          value: sensorData.latestReading.direction
        }))), external_react_default.a.createElement(external_recharts_["LineChart"], {
          width: 600,
          height: 400,
          data: sensorData.readings.reverse(),
          margin: {
            top: 5,
            right: 20,
            left: 0,
            bottom: 5
          },
          className: "line-chart"
        }, external_react_default.a.createElement(external_recharts_["XAxis"], {
          type: "number",
          dataKey: "dateFromNowMinutes",
          height: 140,
          tick: external_react_default.a.createElement(ModalComponent_CustomizedAxisTick, null),
          label: "minutes \xE0 partir de maintenant"
        }), external_react_default.a.createElement(external_recharts_["YAxis"], {
          width: 80
        }, external_react_default.a.createElement(external_recharts_["Label"], {
          value: "mmol/L",
          offset: 5,
          position: "insideTopLeft"
        })), external_react_default.a.createElement(external_recharts_["Tooltip"], {
          content: external_react_default.a.createElement(ModalComponent_CustomTooltip, null)
        }), external_react_default.a.createElement(external_recharts_["CartesianGrid"], {
          stroke: "#f5f5f5"
        }), external_react_default.a.createElement(external_recharts_["ReferenceLine"], {
          y: sensorData.range_min,
          stroke: "#97191b",
          strokeWidth: 2,
          className: "graph-referenece-line"
        }, external_react_default.a.createElement(external_recharts_["Label"], {
          value: "MIN " + sensorData.range_min,
          offset: 5,
          position: "insideTopRight"
        })), external_react_default.a.createElement(external_recharts_["ReferenceLine"], {
          y: sensorData.range_max,
          stroke: "#97191b",
          strokeWidth: 2,
          className: "graph-referenece-line"
        }, external_react_default.a.createElement(external_recharts_["Label"], {
          value: "MAX " + sensorData.range_max,
          offset: 5,
          position: "insideBottomRight"
        })), external_react_default.a.createElement(external_recharts_["Line"], {
          type: "monotone",
          dataKey: "mmol",
          stroke: "#54a4ef",
          strokeWidth: 2,
          dot: {
            r: 1
          },
          yAxisId: 0
        })))));
      }
    }
  }]);

  return SimpleModal;
}(external_react_default.a.Component);

// We need an intermediary variable for handling the recursive nesting.
var SimpleModalWrapped = Object(styles_["withStyles"])(styles)(ModalComponent_SimpleModal);
/* harmony default export */ var ModalComponent = (SimpleModalWrapped);
// CONCATENATED MODULE: ./components/TableComponent.js
function TableComponent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableComponent_typeof = function _typeof(obj) { return typeof obj; }; } else { TableComponent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableComponent_typeof(obj); }

function TableComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableComponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableComponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableComponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableComponent_defineProperties(Constructor, staticProps); return Constructor; }

function TableComponent_possibleConstructorReturn(self, call) { if (call && (TableComponent_typeof(call) === "object" || typeof call === "function")) { return call; } return TableComponent_assertThisInitialized(self); }

function TableComponent_getPrototypeOf(o) { TableComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableComponent_getPrototypeOf(o); }

function TableComponent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableComponent_setPrototypeOf(subClass, superClass); }

function TableComponent_setPrototypeOf(o, p) { TableComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableComponent_setPrototypeOf(o, p); }

function TableComponent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var TableComponent_styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {// minWidth: 700,
    },
    tableRow: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.grey[200]
      }
    },
    value_normal: {
      fontWeight: 'bold'
    },
    value_low: {
      color: 'red',
      fontWeight: 'bold'
    },
    value_high: {
      color: 'red',
      fontWeight: 'bold'
    }
  };
};

var id = 0;

function createData(name, sensor, sgv, battery, lastTime) {
  id += 1;
  return {
    id: id,
    name: name,
    sensor: sensor,
    sgv: sgv,
    battery: battery,
    lastTime: lastTime
  };
} // const rows = [
//   createData('Ege Ozer', 'Dexcom G5', 2.4, 24, '2019-01-29 11:30:12'),
//   createData('Rami Djema', 'FreeStyle Libre', 4.4, 51, '2019-01-29 14:58:12'),
//   createData('Alexis Giguere', 'Dexcom G5', 5.2, 12, '2019-01-29 09:03:12'),
//   createData('Ahmad Prof', 'Dexcom G5', 3.0, 87, '2019-01-29 17:45:12'),
// ];


var TableComponent_SimpleTable =
/*#__PURE__*/
function (_React$Component) {
  TableComponent_inherits(SimpleTable, _React$Component);

  function SimpleTable(props) {
    var _this;

    TableComponent_classCallCheck(this, SimpleTable);

    _this = TableComponent_possibleConstructorReturn(this, TableComponent_getPrototypeOf(SimpleTable).call(this, props));

    _defineProperty(TableComponent_assertThisInitialized(TableComponent_assertThisInitialized(_this)), "handleClick", function (row) {
      _this.setState({
        open: true,
        row: row
      });
    });

    _defineProperty(TableComponent_assertThisInitialized(TableComponent_assertThisInitialized(_this)), "handleOpen", function () {
      _this.setState({
        open: true
      });
    });

    _defineProperty(TableComponent_assertThisInitialized(TableComponent_assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    _this.state = {
      error: null,
      isLoaded: false,
      data: props.data,
      open: false,
      row: {
        name: "",
        sensor: ""
      },
      rows: []
    };
    return _this;
  }

  TableComponent_createClass(SimpleTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        rows: this.props.data,
        isLoaded: true
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.setState({
        rows: this.props.data,
        isLoaded: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _this$state = this.state,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded,
          rows = _this$state.rows;

      if (error) {
        return external_react_default.a.createElement("div", null, "Error: ", error.message);
      } else if (!isLoaded) {
        return external_react_default.a.createElement("div", null, "Loading...");
      } else {
        return external_react_default.a.createElement(Paper_default.a, {
          className: classes.root
        }, external_react_default.a.createElement(Table_default.a, {
          className: classes.table
        }, external_react_default.a.createElement(TableHead_default.a, null, external_react_default.a.createElement(TableRow_default.a, null, external_react_default.a.createElement(TableCell_default.a, null, "Nom"), external_react_default.a.createElement(TableCell_default.a, {
          align: "right"
        }, "Historique"), external_react_default.a.createElement(TableCell_default.a, {
          align: "right"
        }, "Valeur de glucose (mmol/L)"), external_react_default.a.createElement(TableCell_default.a, {
          align: "right"
        }, "Batterie (%)"), external_react_default.a.createElement(TableCell_default.a, {
          align: "right"
        }, "Derni\xE8re valeur"))), external_react_default.a.createElement(TableBody_default.a, null, rows.map(function (row) {
          return row.latestReading == "err_no_data" ? external_react_default.a.createElement(TableRow_default.a, {
            key: row._id,
            className: classes.tableRow,
            onClick: function onClick() {
              return _this2.handleClick(row);
            }
          }, external_react_default.a.createElement(TableCell_default.a, {
            component: "th",
            scope: "row"
          }, row.name), external_react_default.a.createElement(TableCell_default.a, {
            align: "right"
          }), external_react_default.a.createElement(TableCell_default.a, {
            align: "right"
          }, "N/A"), external_react_default.a.createElement(TableCell_default.a, {
            align: "right"
          }), external_react_default.a.createElement(TableCell_default.a, {
            align: "right"
          }, "N/A")) : external_react_default.a.createElement(TableRow_default.a, {
            key: row._id,
            className: classes.tableRow,
            onClick: function onClick() {
              return _this2.handleClick(row);
            }
          }, external_react_default.a.createElement(TableCell_default.a, {
            component: "th",
            scope: "row"
          }, row.name), external_react_default.a.createElement(TableCell_default.a, {
            align: "right"
          }, external_react_default.a.createElement("div", {
            style: {
              width: '100%',
              height: 50
            }
          }, external_react_default.a.createElement(external_recharts_["ResponsiveContainer"], null, external_react_default.a.createElement(external_recharts_["LineChart"], {
            data: row.readings
          }, external_react_default.a.createElement(external_recharts_["YAxis"], {
            type: "number",
            domain: ['dataMin', 'dataMax'],
            hide: true
          }), external_react_default.a.createElement(external_recharts_["Line"], {
            type: "monotone",
            dataKey: "mmol",
            stroke: "#999",
            strokeWidth: 2,
            dot: {
              r: 0
            }
          }))))), external_react_default.a.createElement(TableCell_default.a, {
            align: "right",
            className: row.latestReading.mmol < row.range_min ? classes.value_low : row.latestReading.mmol > row.range_max ? classes.value_high : classes.value_normal
          }, row.latestReading.mmol), row.battery ? external_react_default.a.createElement(TableCell_default.a, {
            align: "right"
          }, row.battery.uploaderBattery, " (", row.battery.dateFromNow, ")") : external_react_default.a.createElement(TableCell_default.a, {
            align: "right"
          }), external_react_default.a.createElement(TableCell_default.a, {
            align: "right"
          }, row.latestReading.dateFromNow));
        }))), external_react_default.a.createElement(ModalComponent, {
          open: this.state.open,
          handleOpen: this.handleOpen,
          handleClose: this.handleClose,
          sensorData: this.state.row
        }));
      }
    }
  }]);

  return SimpleTable;
}(external_react_default.a.Component);

var SimpleTableWrapped = Object(styles_["withStyles"])(TableComponent_styles)(TableComponent_SimpleTable);
/* harmony default export */ var TableComponent = (SimpleTableWrapped);
// EXTERNAL MODULE: ./components/SnackbarComponent.js
var SnackbarComponent = __webpack_require__(17);

// EXTERNAL MODULE: ./components/AppbarComponent.js
var AppbarComponent = __webpack_require__(25);

// CONCATENATED MODULE: ./pages/index.js



function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var pages_Post = function Post(props) {
  return external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    as: "/".concat(props.slug),
    href: "/post?title=".concat(props.title)
  }, external_react_default.a.createElement("a", null, props.title)));
};

var pages_styles = function styles(theme) {
  return {
    root: {
      padding: 20
    },
    snackbarContainer: {
      minWidth: 500
    },
    snackbarMargin: {
      margin: theme.spacing.unit
    }
  };
};

var theme = Object(styles_["createMuiTheme"])({
  palette: {
    primary: {
      main: '#455a64'
    },
    secondary: {
      main: '#ffffff'
    }
  },
  typography: {
    useNextVariants: true
  }
});

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages_inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    pages_classCallCheck(this, Index);

    _this = pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).call(this, props));

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "convertData", function (data) {
      external_moment_default.a.locale('fr-CA');

      for (var i = 0; i < data.length; i++) {
        if (data[i]['readings'] && data[i]['readings'].length > 0) {
          for (var j = 0; j < data[i]['readings'].length; j++) {
            var now = external_moment_default()(new Date());
            var measurementDate = external_moment_default()(data[i]['readings'][j]['dateString']);
            var diffMinutes = Math.round(external_moment_default.a.duration(now.diff(measurementDate)).asMinutes());
            data[i]['readings'][j]['mmol'] = Math.round(data[i]['readings'][j]['sgv'] / 18 * 100) / 100; // convert from mg/dl to mmol/L

            data[i]['readings'][j]['dateFromNow'] = measurementDate.fromNow();
            data[i]['readings'][j]['dateFromNowMinutes'] = -diffMinutes;
            data[i]['readings'][j]['dateTime'] = measurementDate.format('HH:mm');
          }

          data[i]['latestReading'] = data[i]['readings'][0];

          if (data[i]['battery']) {
            data[i]['battery']['dateFromNow'] = external_moment_default()(data[i]['battery']['created_at']).fromNow();
          }
        } else {
          data[i]['latestReading'] = "err_no_data";
        }
      }

      return data;
    });

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "showSnackbarMessage", function (message, variant) {
      _this.setState({
        snackbarOpen: true,
        snackbarMessage: message,
        snackbarVariant: variant
      });
    });

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "snackbarClose", function (event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      _this.setState({
        snackbarOpen: false
      });
    });

    _this.state = {
      error: null,
      isLoaded: false,
      loadingData: false,
      data: [],
      dataFirstHalf: [],
      dataSecondHalf: [],
      snackbarOpen: false,
      snackbarMessage: "",
      snackbarVariant: "info"
    };
    return _this;
  }

  pages_createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getData();
      this.timer = setInterval(function () {
        return _this2.getData();
      }, 0.5 * 60 * 1000);
    }
  }, {
    key: "getData",
    value: function () {
      var _getData = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var _this3 = this;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("getData started!");
                this.setState({
                  loadingData: true
                });
                fetch("http://localhost:1234/api/reading/allActiveChildren").then(function (res) {
                  return res.json();
                }).then(function (result) {
                  var convertedData = _this3.convertData(result);

                  _this3.setState({
                    error: null,
                    isLoaded: true,
                    loadingData: false,
                    data: convertedData,
                    dataFirstHalf: convertedData.splice(0, Math.ceil(convertedData.length / 2)),
                    dataSecondHalf: convertedData
                  });

                  setTimeout(function () {
                    _this3.showSnackbarMessage("Données mises à jour", "success");
                  }, 1000);
                }, // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                function (error) {
                  _this3.setState({
                    error: error,
                    isLoaded: true
                  });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _getData.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      if (this.state.error) {
        return external_react_default.a.createElement("div", null, "Error: ", this.state.error.message);
      } else if (!this.state.isLoaded) {
        return external_react_default.a.createElement("div", null, "Loading...");
      } else {
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(styles_["MuiThemeProvider"], {
          theme: theme
        }, external_react_default.a.createElement(AppbarComponent["a" /* default */], {
          loading: this.state.loadingData
        }), external_react_default.a.createElement(Grid_default.a, {
          container: true,
          spacing: 8,
          className: classes.root
        }, external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 6
        }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(TableComponent, {
          data: this.state.dataFirstHalf
        }))), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 6
        }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(TableComponent, {
          data: this.state.dataSecondHalf
        })))), external_react_default.a.createElement(Snackbar_default.a, {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          open: this.state.snackbarOpen,
          autoHideDuration: 4000,
          onClose: this.snackbarClose,
          className: classes.snackbarContainer
        }, external_react_default.a.createElement(SnackbarComponent["a" /* default */], {
          variant: this.state.snackbarVariant,
          className: classes.snackbarMargin,
          message: this.state.snackbarMessage
        }))));
      }
    }
  }]);

  return Index;
}(external_react_default.a.Component);

var IndexWrapped = Object(styles_["withStyles"])(pages_styles)(pages_Index);
/* harmony default export */ var pages = __webpack_exports__["default"] = (IndexWrapped);

/***/ })
/******/ ]);