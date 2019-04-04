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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
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

var CustomizedLabel =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: x,
        y: y,
        fill: stroke,
        textAnchor: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "hEYYYYYY YOUUUU");
    }
  }]);

  return CustomizedLabel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var CustomizedAxisTick =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        transform: "translate(".concat(x, ",").concat(y, ")"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        x: 0,
        y: 0,
        dy: 16,
        textAnchor: "end",
        fill: "#666",
        transform: "rotate(-45)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, -payload.value));
    }
  }]);

  return CustomizedAxisTick;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var CustomTooltip = function CustomTooltip(_ref) {
  var active = _ref.active,
      payload = _ref.payload,
      label = _ref.label;

  if (active) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-tooltip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "".concat(payload[0].value), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "mmol/L")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "il y a ", "".concat(-label), " minutes"));
  }

  return null;
};

function formatXAxis(tickItem) {
  // If using moment.js
  console.log(tickItem);
  return moment__WEBPACK_IMPORTED_MODULE_10___default()(now).subtract(-tickItem, "minutes").format("HH:mm");
}

var SimpleModal =
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
          "aria-labelledby": "simple-modal-title",
          "aria-describedby": "simple-modal-description",
          open: this.props.open,
          onClose: this.props.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: getModalStyle(),
          className: classes.paper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
          variant: "h4",
          id: "modal-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, sensorData.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
          value: sensorData.latestReading.device,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
          value: sensorData.location,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
          value: sensorData.latestReading.direction,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["LineChart"], {
          width: 600,
          height: 400,
          data: sensorData.readings.reverse(),
          margin: {
            top: 5,
            right: 20,
            left: 0,
            bottom: 5
          },
          className: "line-chart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["XAxis"], {
          type: "number",
          dataKey: "dateFromNowMinutes",
          height: 140,
          tick: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomizedAxisTick, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }),
          tickFormatter: formatXAxis,
          abel: "minutes \xE0 partir de maintenant",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["YAxis"], {
          width: 80,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Label"], {
          value: "mmol/L",
          offset: 5,
          position: "insideTopLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
          content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTooltip, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["CartesianGrid"], {
          stroke: "#f5f5f5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["ReferenceLine"], {
          y: sensorData.range_min,
          stroke: "#97191b",
          strokeWidth: 2,
          className: "graph-referenece-line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Label"], {
          value: "MIN " + sensorData.range_min,
          offset: 5,
          position: "insideTopRight",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["ReferenceLine"], {
          y: sensorData.range_max,
          stroke: "#97191b",
          strokeWidth: 2,
          className: "graph-referenece-line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Label"], {
          value: "MAX " + sensorData.range_max,
          offset: 5,
          position: "insideBottomRight",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Line"], {
          type: "monotone",
          dataKey: "mmol",
          stroke: "#54a4ef",
          strokeWidth: 2,
          dot: {
            r: 1
          },
          yAxisId: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
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
//# sourceMappingURL=index.js.a494da8124a48f80a6f4.hot-update.js.map