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
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Refresh */ "./node_modules/@material-ui/icons/Refresh.js");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
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
    },
    menu: {
      width: 200
    }
  };
};

var CustomizedAxisTick =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomizedAxisTick, _React$Component);

  function CustomizedAxisTick() {
    _classCallCheck(this, CustomizedAxisTick);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomizedAxisTick).apply(this, arguments));
  }

  _createClass(CustomizedAxisTick, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          stroke = _this$props.stroke,
          payload = _this$props.payload;
      var date = moment__WEBPACK_IMPORTED_MODULE_11___default()(new Date()).subtract(-payload.value, "minutes").format("HH:mm");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        transform: "translate(".concat(x, ",").concat(y, ")"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
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
          lineNumber: 56
        },
        __self: this
      }, date));
    }
  }]);

  return CustomizedAxisTick;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var CustomTooltip = function CustomTooltip(_ref) {
  var active = _ref.active,
      payload = _ref.payload,
      label = _ref.label;

  if (active) {
    var date = moment__WEBPACK_IMPORTED_MODULE_11___default()(new Date()).subtract(-label, "minutes").fromNow();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-tooltip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "".concat(payload[0].value), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "mmol/L")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, date));
  }

  return null;
};

var timeScale = [{
  value: '1',
  label: 'Dernière heure'
}, {
  value: '3',
  label: '3 dernières heures'
}, {
  value: '12',
  label: '12 dernières heures'
}, {
  value: '24',
  label: '24 dernières heures'
}];

var SimpleModal =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SimpleModal, _React$Component2);

  function SimpleModal(props) {
    var _this;

    _classCallCheck(this, SimpleModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleModal).call(this, props));
    _this.state = {
      loaded: false,
      data: props.data,
      allData: props.data,
      timeScale: '1'
    };
    return _this;
  }

  _createClass(SimpleModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        loaded: true
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        if (nextProps.data.readings) {
          this.setState({
            data: nextProps.data.readings.reverse(),
            allData: nextProps.data
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          loaded = _this$state.loaded,
          data = _this$state.data,
          allData = _this$state.allData;

      if (!loaded || !allData._id) {
        return null;
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
          "aria-labelledby": "simple-modal-title",
          "aria-describedby": "simple-modal-description",
          open: this.props.open,
          onClose: this.props.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: getModalStyle(),
          className: classes.paper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
          variant: "h4",
          id: "modal-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, allData.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
          value: allData.latestReading.device,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
          value: allData.location,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "outlined-select-timeScale",
          type: "select",
          label: "Donn\xE9es",
          className: classes.textField,
          value: this.state.timeScale // onChange={this.handleChange('currency')}
          ,
          margin: "normal",
          variant: "outlined",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, timeScale.map(function (option) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
            key: option.value,
            value: option.value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: this
          }, option.label);
        }), ">"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["LineChart"], {
          width: 600,
          height: 500,
          data: data,
          margin: {
            top: 5,
            right: 20,
            left: 0,
            bottom: 5
          },
          className: "line-chart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["XAxis"], {
          domain: [-100, 0],
          type: "number",
          dataKey: "dateFromNowMinutes",
          height: 100,
          tickCount: 10,
          tick: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomizedAxisTick, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          }),
          label: "temps",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["YAxis"], {
          width: 80,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["Label"], {
          value: "mmol/L",
          offset: 5,
          position: "insideTopLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
          content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTooltip, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["CartesianGrid"], {
          stroke: "#f5f5f5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["Line"], {
          yAxisId: 0,
          type: "monotone",
          dataKey: "mmol",
          stroke: "#54a4ef",
          strokeWidth: 2,
          dot: {
            r: 1
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["ReferenceLine"], {
          y: allData.range_min,
          stroke: "#97191b",
          strokeWidth: 2,
          className: "graph-referenece-line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["Label"], {
          value: "MIN " + allData.range_min,
          offset: 5,
          position: "insideTopRight",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["ReferenceLine"], {
          y: allData.range_max,
          stroke: "#97191b",
          strokeWidth: 2,
          className: "graph-referenece-line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__["Label"], {
          value: "MAX " + allData.range_max,
          offset: 5,
          position: "insideBottomRight",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }))))));
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
//# sourceMappingURL=index.js.a90d1828b2e780948048.hot-update.js.map