webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TableComponent.js":
/*!**************************************!*\
  !*** ./components/TableComponent.js ***!
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
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/Table/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _components_ModalComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ModalComponent */ "./components/ModalComponent.js");
var _jsxFileName = "/Users/alexisgj/GitHub/mcgill-design-project/frontend/components/TableComponent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var styles = function styles(theme) {
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
    tableSpan: {
      fontSize: '0.6em',
      fontColor: '#999'
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


var SimpleTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SimpleTable, _React$Component);

  function SimpleTable(props) {
    var _this;

    _classCallCheck(this, SimpleTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleTable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (row) {
      _this.setState({
        open: true,
        row: row
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpen", function () {
      _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
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

  _createClass(SimpleTable, [{
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "Error: ", error.message);
      } else if (!isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "Loading...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
          className: classes.root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: classes.table,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, "Nom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, "Historique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, "Valeur de glucose (mmol/L)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, "Batterie (%)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, "Derni\xE8re valeur"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, rows.map(function (row) {
          return row.latestReading == "err_no_data" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, {
            key: row._id,
            className: classes.tableRow,
            onClick: function onClick() {
              return _this2.handleClick(row);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            component: "th",
            scope: "row",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }, row.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          }, "N/A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, "N/A")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, {
            key: row._id,
            className: classes.tableRow,
            onClick: function onClick() {
              return _this2.handleClick(row);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            component: "th",
            scope: "row",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          }, row.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              width: '100%',
              height: 50
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["ResponsiveContainer"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["LineChart"], {
            data: row.readings,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["XAxis"], {
            type: "number",
            dataKey: "dateFromNowMinutes",
            hide: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["YAxis"], {
            type: "number",
            domain: ['dataMin', 'dataMax'],
            hide: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["Line"], {
            type: "monotone",
            dataKey: "mmol",
            stroke: "#999",
            strokeWidth: 2,
            dot: {
              r: 0
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            className: row.latestReading.mmol < row.range_min ? classes.value_low : row.latestReading.mmol > row.range_max ? classes.value_high : classes.value_normal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }, row.latestReading.mmol, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: {
              fontSize: '1.3em',
              marginTop: '-5px'
            },
            dangerouslySetInnerHTML: {
              __html: row.latestReading.directionArrow
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          })), row.battery ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, row.battery.uploaderBattery, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: classes.tableSpan,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, row.battery.dateFromNow)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, row.latestReading.dateTime, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: classes.tableSpan,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, row.latestReading.dateFromNow)));
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
          open: this.state.open,
          handleOpen: this.handleOpen,
          handleClose: this.handleClose,
          sensorData: this.state.row,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }));
      }
    }
  }]);

  return SimpleTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SimpleTable.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
var SimpleTableWrapped = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SimpleTable);
/* harmony default export */ __webpack_exports__["default"] = (SimpleTableWrapped);

/***/ })

})
//# sourceMappingURL=index.js.597bf1b7dad044b75cbf.hot-update.js.map