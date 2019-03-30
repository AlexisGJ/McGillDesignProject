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
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/TableSortLabel/index.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _components_ModalComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ModalComponent */ "./components/ModalComponent.js");
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

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function getSorting(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return desc(a, b, orderBy);
  } : function (a, b) {
    return -desc(a, b, orderBy);
  };
}

var rows = [{
  id: 'nom',
  numeric: false,
  disablePadding: false,
  label: 'Nom'
}, {
  id: 'historique',
  numeric: false,
  disablePadding: true,
  label: 'Historique'
}, {
  id: 'sgv',
  numeric: true,
  disablePadding: true,
  label: 'Niveau de glucose (mmol/L)'
}, {
  id: 'battery',
  numeric: true,
  disablePadding: true,
  label: 'Batterie'
}, {
  id: 'time',
  numeric: true,
  disablePadding: false,
  label: 'Dernière valeur'
}];

var EnhancedTableHead =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EnhancedTableHead, _React$Component);

  function EnhancedTableHead() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EnhancedTableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnhancedTableHead)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createSortHandler", function (property) {
      return function (event) {
        _this.props.onRequestSort(event, property);
      };
    });

    return _this;
  }

  _createClass(EnhancedTableHead, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          order = _this$props.order,
          orderBy = _this$props.orderBy;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, rows.map(function (row) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
          key: row.id,
          align: "right",
          padding: row.disablePadding ? 'none' : 'default',
          sortDirection: orderBy === row.id ? order : false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8___default.a, {
          title: "Sort",
          placement: row.numeric ? 'bottom-end' : 'bottom-start',
          enterDelay: 300,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_9___default.a, {
          active: orderBy === row.id,
          direction: order,
          onClick: _this2.createSortHandler(row.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, row.label)));
      }, this)));
    }
  }]);

  return EnhancedTableHead;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

EnhancedTableHead.propTypes = {
  onRequestSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  orderBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

var SimpleTable =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SimpleTable, _React$Component2);

  function SimpleTable(props) {
    var _this3;

    _classCallCheck(this, SimpleTable);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(SimpleTable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleRequestSort", function (event, property) {
      var orderBy = property;
      var order = 'desc';

      if (_this3.state.orderBy === property && _this3.state.order === 'desc') {
        order = 'asc';
      }

      _this3.setState({
        order: order,
        orderBy: orderBy
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleClick", function (row) {
      _this3.setState({
        open: true,
        row: row
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleOpen", function () {
      _this3.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleClose", function () {
      _this3.setState({
        open: false
      });
    });

    _this3.state = {
      error: null,
      isLoaded: false,
      data: props.data,
      open: false,
      row: {
        name: "",
        sensor: ""
      },
      rows: [],
      order: 'asc',
      orderBy: 'nom'
    };
    return _this3;
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
      var _this4 = this;

      var classes = this.props.classes;
      var _this$state = this.state,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded,
          rows = _this$state.rows,
          order = _this$state.order,
          orderBy = _this$state.orderBy;

      if (error) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, "Error: ", error.message);
      } else if (!isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, "Loading...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
          className: classes.root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: classes.table,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnhancedTableHead, {
          order: order,
          orderBy: orderBy,
          onRequestSort: this.handleRequestSort,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, stableSort(rows, getSorting(order, orderBy)).map(function (row) {
          return row.latestReading == "err_no_data" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, {
            key: row._id,
            className: classes.tableRow,
            onClick: function onClick() {
              return _this4.handleClick(row);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            component: "th",
            scope: "row",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          }, row.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          }, "N/A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            },
            __self: this
          }, "N/A")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, {
            key: row._id,
            className: classes.tableRow,
            onClick: function onClick() {
              return _this4.handleClick(row);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 230
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            component: "th",
            scope: "row",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 231
            },
            __self: this
          }, row.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              width: '100%',
              height: 50
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 235
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["ResponsiveContainer"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["LineChart"], {
            data: row.readings,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 237
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["XAxis"], {
            type: "number",
            dataKey: "dateFromNowMinutes",
            hide: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 238
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["YAxis"], {
            type: "number",
            domain: ['dataMin', 'dataMax'],
            hide: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 239
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Line"], {
            type: "monotone",
            dataKey: "mmol",
            stroke: "#999",
            strokeWidth: 2,
            dot: {
              r: 0
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 240
            },
            __self: this
          }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            className: row.latestReading.mmol < row.range_min ? classes.value_low : row.latestReading.mmol > row.range_max ? classes.value_high : classes.value_normal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
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
              lineNumber: 246
            },
            __self: this
          })), row.battery ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 249
            },
            __self: this
          }, row.battery.uploaderBattery, " %", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 249
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: classes.tableSpan,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 249
            },
            __self: this
          }, row.battery.dateFromNow)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 251
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
            align: "right",
            padding: "dense",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            },
            __self: this
          }, row.latestReading.dateTime, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: classes.tableSpan,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            },
            __self: this
          }, row.latestReading.dateFromNow)));
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ModalComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
          open: this.state.open,
          handleOpen: this.handleOpen,
          handleClose: this.handleClose,
          sensorData: this.state.row,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
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
//# sourceMappingURL=index.js.505da8462f1fed37b4e7.hot-update.js.map