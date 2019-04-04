webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ModalComponent.js":
/*!**************************************!*\
  !*** ./components/ModalComponent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/Modal/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Refresh */ "./node_modules/@material-ui/icons/Refresh.js");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");

var _jsxFileName = "/Users/alexisgj/GitHub/mcgill-design-project/frontend/components/ModalComponent.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      var date = moment__WEBPACK_IMPORTED_MODULE_12___default()(new Date()).subtract(-payload.value, "minutes").format("HH:mm");
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(".concat(x, ",").concat(y, ")"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
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
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var CustomTooltip = function CustomTooltip(_ref) {
  var active = _ref.active,
      payload = _ref.payload,
      label = _ref.label;

  if (active) {
    var date = moment__WEBPACK_IMPORTED_MODULE_12___default()(new Date()).subtract(-label, "minutes").fromNow();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-tooltip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "".concat(payload[0].value), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "mmol/L")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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

var timeScaleOptions = [{
  value: 1,
  label: 'Dernière heure'
}, {
  value: 3,
  label: '3 dernières heures'
}, {
  value: 12,
  label: '12 dernières heures'
}, {
  value: 24,
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertData", function (data) {
      moment__WEBPACK_IMPORTED_MODULE_12___default.a.locale('fr-CA');
      var now = moment__WEBPACK_IMPORTED_MODULE_12___default()(new Date());

      for (var i = 0; i < data.length; i++) {
        var measurementDate = moment__WEBPACK_IMPORTED_MODULE_12___default()(data[i]['dateString']);
        var diffMinutes = Math.round(moment__WEBPACK_IMPORTED_MODULE_12___default.a.duration(now.diff(measurementDate)).asMinutes());
        data[i]['mmol'] = Math.round(data[i]['sgv'] / 18 * 100) / 100; // convert from mg/dl to mmol/L

        data[i]['dateFromNowMinutes'] = -diffMinutes;
      }

      return data;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (name) {
      return function (event) {
        _this.setState(_defineProperty({}, name, event.target.value));
      };
    });

    _this.state = {
      loaded: false,
      data: props.data,
      allData: props.data,
      timeScale: 1
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
            allData: nextProps.data,
            timeScale: 1
          });
          this.getData();
        }
      }
    }
  }, {
    key: "getData",
    value: function () {
      var _getData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetch(API_URL + "/api/reading/" + allData.collection_id + "/" + this.state.timeScale).then(function (res) {
                  return res.json();
                }).then(function (result) {
                  if (result && result.length > 0) {
                    var convertedData = _this2.convertData(result);

                    _this2.setState({
                      data: convertedData
                    });
                  }
                }, // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                function (error) {
                  console.log(error);
                });

              case 1:
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
      var _this$state = this.state,
          loaded = _this$state.loaded,
          data = _this$state.data,
          allData = _this$state.allData,
          timeScale = _this$state.timeScale;

      if (!loaded || !allData._id) {
        return null;
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
          "aria-labelledby": "simple-modal-title",
          "aria-describedby": "simple-modal-description",
          open: this.props.open,
          onClose: this.props.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: getModalStyle(),
          className: classes.paper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
          variant: "h4",
          id: "modal-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, allData.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
            lineNumber: 190
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
            lineNumber: 205
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "outlined-select-timeScale",
          select: true,
          label: "Donn\xE9es",
          className: classes.textField,
          value: timeScale,
          onChange: this.handleChange('timeScale'),
          margin: "normal",
          variant: "outlined",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, timeScaleOptions.map(function (option) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
            key: option.value,
            value: option.value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 231
            },
            __self: this
          }, option.label);
        }), ">"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["LineChart"], {
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
            lineNumber: 239
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["XAxis"], {
          allowDataOverflow: true,
          domain: [-(timeScale * 60), 'auto'],
          type: "number",
          dataKey: "dateFromNowMinutes",
          height: 100,
          tickCount: 10,
          tick: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomizedAxisTick, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 246
            },
            __self: this
          }),
          label: "temps",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["YAxis"], {
          allowDataOverflow: true,
          width: 80,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Label"], {
          value: "mmol/L",
          offset: 5,
          position: "insideTopLeft",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Tooltip"], {
          content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomTooltip, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 250
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["CartesianGrid"], {
          stroke: "#f5f5f5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Line"], {
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
            lineNumber: 253
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["ReferenceLine"], {
          y: allData.range_min,
          stroke: "#97191b",
          strokeWidth: 2,
          className: "graph-referenece-line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Label"], {
          value: "MIN " + allData.range_min,
          offset: 5,
          position: "insideTopRight",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["ReferenceLine"], {
          y: allData.range_max,
          stroke: "#97191b",
          strokeWidth: 2,
          className: "graph-referenece-line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Label"], {
          value: "MAX " + allData.range_max,
          offset: 5,
          position: "insideBottomRight",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }))))));
      }
    }
  }]);

  return SimpleModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SimpleModal.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
}; // We need an intermediary variable for handling the recursive nesting.

var SimpleModalWrapped = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(SimpleModal);
/* harmony default export */ __webpack_exports__["default"] = (SimpleModalWrapped);

/***/ })

})
//# sourceMappingURL=index.js.456594a4192b0eb036fd.hot-update.js.map