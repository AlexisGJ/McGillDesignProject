webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ModalComponent.js":
/*!**************************************!*\
  !*** ./components/ModalComponent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/Modal/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
var _jsxFileName = "/Users/alexisgj/GitHub/mcgill-design-project/frontend/components/ModalComponent.js";

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
    transform: "translate(-".concat(top, "%, -").concat(left, "%)")
  };
}

var styles = function styles(theme) {
  return {
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none'
    }
  };
};

var data = [{
  name: 'Page A',
  uv: 1000,
  pv: 2400,
  amt: 2400,
  uvError: [75, 20]
}, {
  name: 'Page B',
  uv: 300,
  pv: 4567,
  amt: 2400,
  uvError: [90, 40]
}, {
  name: 'Page C',
  uv: 280,
  pv: 1398,
  amt: 2400,
  uvError: 40
}, {
  name: 'Page D',
  uv: 200,
  pv: 9800,
  amt: 2400,
  uvError: 20
}, {
  name: 'Page E',
  uv: 278,
  pv: null,
  amt: 2400,
  uvError: 28
}, {
  name: 'Page F',
  uv: 189,
  pv: 4800,
  amt: 2400,
  uvError: [90, 20]
}, {
  name: 'Page G',
  uv: 189,
  pv: 4800,
  amt: 2400,
  uvError: [28, 40]
}, {
  name: 'Page H',
  uv: 189,
  pv: 4800,
  amt: 2400,
  uvError: 28
}, {
  name: 'Page I',
  uv: 189,
  pv: 4800,
  amt: 2400,
  uvError: 28
}, {
  name: 'Page J',
  uv: 189,
  pv: 4800,
  amt: 2400,
  uvError: [15, 60]
}];

var SimpleModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SimpleModal, _React$Component);

  function SimpleModal() {
    _classCallCheck(this, SimpleModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleModal).apply(this, arguments));
  }

  _createClass(SimpleModal, [{
    key: "render",
    // handleOpen = () => {
    //   this.setState({ open: true });
    // };
    // handleClose = () => {
    //   this.setState({ open: false });
    // };
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          sensorData = _this$props.sensorData;

      if (!sensorData._id) {
        return null;
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
          "aria-labelledby": "simple-modal-title",
          "aria-describedby": "simple-modal-description",
          open: this.props.open,
          onClose: this.props.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: getModalStyle(),
          className: classes.paper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
          variant: "h6",
          id: "modal-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, sensorData.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
          variant: "subtitle1",
          id: "simple-modal-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "Sensor device: ", sensorData.latestReading.device), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, "Location: ", sensorData.location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Direction: ", sensorData.latestReading.direction)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["LineChart"], {
          width: 100,
          height: 400,
          data: sensorData.readings.reverse(),
          margin: {
            top: 5,
            right: 20,
            left: 10,
            bottom: 5
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["XAxis"], {
          dataKey: "dateFromNowMinutes",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["CartesianGrid"], {
          stroke: "#f5f5f5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["ReferenceLine"], {
          y: sensorData.range_min,
          label: "Min",
          stroke: "red",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["ReferenceLine"], {
          y: sensorData.range_max,
          label: "Max",
          stroke: "red",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__["Line"], {
          type: "monotone",
          dataKey: "sgv",
          stroke: "#ff7300",
          yAxisId: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        })))));
      }
    }
  }]);

  return SimpleModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SimpleModal.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
}; // We need an intermediary variable for handling the recursive nesting.

var SimpleModalWrapped = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SimpleModal);
/* harmony default export */ __webpack_exports__["default"] = (SimpleModalWrapped);

/***/ })

})
//# sourceMappingURL=index.js.c278a7b10bc1b9dfed2b.hot-update.js.map