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
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Refresh */ "./node_modules/@material-ui/icons/Refresh.js");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
var _jsxFileName = "/Users/alexisgj/GitHub/mcgill-design-project/frontend/components/ModalComponent.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      var date = moment__WEBPACK_IMPORTED_MODULE_10___default()(new Date()).subtract(-payload.value, "minutes").format("HH:mm");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        transform: "translate(".concat(x, ",").concat(y, ")"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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
          lineNumber: 52
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
    var date = moment__WEBPACK_IMPORTED_MODULE_10___default()(new Date()).subtract(-label, "minutes").fromNow();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-tooltip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "".concat(payload[0].value), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "mmol/L")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, date));
  }

  return null;
};

var getAxisYDomain = function getAxisYDomain(data, from, to, ref, offset) {
  var refData = data.slice(from, to);
  var _ref2 = [refData[0][ref], refData[0][ref]],
      bottom = _ref2[0],
      top = _ref2[1];
  refData.forEach(function (d) {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });
  return [(bottom | 0) - offset, (top | 0) + offset];
};

var initialState = {
  left: -100,
  right: 0,
  refAreaLeft: '',
  refAreaRight: '',
  top: 10,
  bottom: 0,
  animation: true
};

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
      initialState: initialState
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
    key: "zoom",
    value: function zoom() {
      var _this$state = this.state,
          refAreaLeft = _this$state.refAreaLeft,
          refAreaRight = _this$state.refAreaRight,
          data = _this$state.data;
      console.log(this.state.data);

      if (refAreaLeft === refAreaRight || refAreaRight === '') {
        this.setState(function () {
          return {
            refAreaLeft: '',
            refAreaRight: ''
          };
        });
        return;
      } // xAxis domain


      if (refAreaLeft > refAreaRight) {
        var _ref3 = [refAreaRight, refAreaLeft];
        refAreaLeft = _ref3[0];
        refAreaRight = _ref3[1];
      }

      var leftArrayIndex = 0;

      for (var i = 0; i < data.length; i++) {
        if (data[i].dateFromNowMinutes > refAreaLeft) {
          leftArrayIndex = i;
          break;
        }
      }

      var rightArrayIndex = 0;

      for (var i = data.length - 1; i >= 0; i--) {
        if (data[i].dateFromNowMinutes < refAreaRight) {
          rightArrayIndex = i;
          break;
        }
      } // yAxis domain


      var _getAxisYDomain = getAxisYDomain(data, leftArrayIndex, rightArrayIndex, 'mmol', 1),
          _getAxisYDomain2 = _slicedToArray(_getAxisYDomain, 2),
          bottom = _getAxisYDomain2[0],
          top = _getAxisYDomain2[1];

      this.setState(function () {
        return {
          refAreaLeft: '',
          refAreaRight: '',
          data: data.slice(),
          left: refAreaLeft,
          right: refAreaRight,
          bottom: bottom,
          top: top
        };
      });
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      var data = this.state.data;
      this.setState(function () {
        return {
          data: data.slice(),
          refAreaLeft: '',
          refAreaRight: '',
          left: 'dataMin',
          right: '0',
          top: 'dataMax+1',
          bottom: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _this$state2 = this.state,
          loaded = _this$state2.loaded,
          data = _this$state2.data,
          allData = _this$state2.allData,
          barIndex = _this$state2.barIndex,
          left = _this$state2.left,
          right = _this$state2.right,
          refAreaLeft = _this$state2.refAreaLeft,
          refAreaRight = _this$state2.refAreaRight,
          top = _this$state2.top,
          bottom = _this$state2.bottom;

      if (!loaded || !allData._id) {
        return null;
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
          "aria-labelledby": "simple-modal-title",
          "aria-describedby": "simple-modal-description",
          open: this.props.open,
          onClose: this.props.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: getModalStyle(),
          className: classes.paper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
          variant: "h4",
          id: "modal-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, allData.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
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
          value: allData.latestReading.device,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
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
          value: allData.location,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8___default.a, {
          color: "primary",
          "aria-label": "Add",
          style: {
            float: 'right',
            marginTop: '12px'
          },
          onClick: this.zoomOut.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["LineChart"], {
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
          onMouseDown: function onMouseDown(e) {
            if (e) {
              _this2.setState({
                refAreaLeft: e.activeLabel
              });
            }
          },
          onMouseMove: function onMouseMove(e) {
            return _this2.state.refAreaLeft && _this2.setState({
              refAreaRight: e.activeLabel
            });
          },
          onMouseUp: this.zoom.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["XAxis"], {
          allowDataOverflow: true,
          domain: [left, right],
          type: "number",
          dataKey: "dateFromNowMinutes",
          height: 140,
          tick: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomizedAxisTick, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 244
            },
            __self: this
          }),
          label: "temps",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], {
          allowDataOverflow: true,
          domain: [bottom, top],
          width: 80,
          yAxisId: "first",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Label"], {
          value: "mmol/L",
          offset: 5,
          position: "insideTopLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
          content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTooltip, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 248
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
          stroke: "#f5f5f5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
          yAxisId: "first",
          type: "monotone",
          dataKey: "mmol",
          stroke: "#54a4ef",
          strokeWidth: 2,
          dot: {
            r: 1
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["ReferenceLine"], {
          yAxisId: "second",
          y: data.range_min,
          stroke: "#97191b",
          strokeWidth: 2,
          className: "graph-referenece-line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Label"], {
          value: "MIN " + data.range_min,
          offset: 5,
          position: "insideTopRight",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["ReferenceLine"], {
          yAxisId: "second",
          y: data.range_max,
          stroke: "#97191b",
          strokeWidth: 2,
          className: "graph-referenece-line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Label"], {
          value: "MAX " + data.range_max,
          offset: 5,
          position: "insideBottomRight",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        })), refAreaLeft && refAreaRight ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["ReferenceArea"], {
          yAxisId: "first",
          x1: refAreaLeft,
          x2: refAreaRight,
          strokeOpacity: 0.3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }) : null))));
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
//# sourceMappingURL=index.js.eb547159c46b0382f7cd.hot-update.js.map