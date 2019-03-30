webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelActions */ "./node_modules/@material-ui/core/ExpansionPanelActions/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/Switch/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../static/css/main_custom.css */ "./static/css/main_custom.css");
/* harmony import */ var _static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/SnackbarComponent */ "./components/SnackbarComponent.js");
/* harmony import */ var _components_AppbarComponent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/AppbarComponent */ "./components/AppbarComponent.js");
var _jsxFileName = "/Users/alexisgj/GitHub/mcgill-design-project/frontend/pages/settings.js";

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


























var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
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

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      padding: 20
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      textAlign: 'left'
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      textAlign: 'left'
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20
    },
    details: {
      alignItems: 'center'
    },
    column: {
      flexBasis: '33.33%'
    },
    helper: {
      borderLeft: "2px solid ".concat(theme.palette.divider),
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px")
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    textField: {
      width: '95%'
    },
    close: {
      padding: theme.spacing.unit / 2
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    },
    snackbarContainer: {
      minWidth: 500
    },
    snackbarMargin: {
      margin: theme.spacing.unit
    },
    childActiveTrue: {
      color: 'green'
    },
    childActiveFalse: {
      color: 'red'
    }
  };
};

var Settings =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Settings, _React$Component);

  function Settings(props) {
    var _this;

    _classCallCheck(this, Settings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Settings).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showSnackbarMessage", function (message, variant) {
      _this.setState({
        snackbarOpen: true,
        snackbarMessage: message,
        snackbarVariant: variant
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "snackbarClose", function (event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      _this.setState({
        snackbarOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function (panel) {
      return function (event, expanded) {
        _this.setState({
          expanded: expanded ? panel : false
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (key, field, e) {
      var tempData = _this.state.data;
      var newValue = e.target.value;

      if (field == 'active') {
        newValue = !tempData[key].active;
      }

      tempData[key][field] = newValue;

      _this.setState({
        data: tempData
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeNewChild", function (field, e) {
      var tempData = _this.state.newChild;
      var newValue = e.target.value;

      if (field == 'active') {
        newValue = !tempData.active;
      }

      tempData[field] = newValue;

      _this.setState({
        newChild: tempData
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateChild", function (row) {
      fetch('http://localhost:1234/api/child/' + row._id + '/update', {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(row)
      }).then(function (response) {
        if (response.status == 200) {
          _this.showSnackbarMessage("Enregistré avec succès", "success");
        } else {
          _this.showSnackbarMessage("Il y a eu une erreur lors de l'enregistrement", "error");
        }
      });
      console.log(row);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createChild", function () {
      fetch('http://localhost:1234/api/child/create', {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_this.state.newChild)
      }).then(function (response) {
        if (response.status == 200) {
          _this.showSnackbarMessage("Enregistré avec succès", "success");

          _this.setState({
            newChild: {
              name: "",
              collection_id: "",
              location: "Tente #",
              range_min: 4,
              range_max: 8,
              active: true
            }
          });
        } else {
          _this.showSnackbarMessage("Il y a eu une erreur lors de l'enregistrement", "error");
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deleteChild", function (row) {
      fetch('http://localhost:1234/api/child/' + row._id + '/delete', {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(row)
      }).then(function (response) {
        if (response.status == 200) {
          _this.showSnackbarMessage("Supprimé avec succès", "success");
        } else {
          _this.showSnackbarMessage("Il y a eu une erreur lors de la suppression", "error");
        }
      });
    });

    _this.state = {
      error: null,
      isLoaded: false,
      expanded: null,
      snackbarOpen: false,
      snackbarMessage: "",
      snackbarVariant: "info",
      data: [],
      newChild: {
        name: "",
        collection_id: "",
        location: "Tente #",
        range_min: 4,
        range_max: 8,
        active: true
      }
    };
    return _this;
  }

  _createClass(Settings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("http://localhost:1234/api/child/all").then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          isLoaded: true,
          data: result
        });
      }, // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classes = this.props.classes;
      var _this$state = this.state,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded,
          data = _this$state.data,
          expanded = _this$state.expanded,
          newChild = _this$state.newChild;

      if (error) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, "Error: ", error.message);
      } else if (!isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, "Loading...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["MuiThemeProvider"], {
          theme: theme,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppbarComponent__WEBPACK_IMPORTED_MODULE_23__["default"], {
          loading: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          container: true,
          spacing: 24,
          className: classes.root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          className: classes.paper,
          elevation: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: 'create_child',
          expanded: expanded === 'create_child',
          onChange: this.handleClose('create_child'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11___default.a, {
          expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 259
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.column,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: classes.heading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, "Ajouter une nouvelle entr\xE9e"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10___default.a, {
          className: classes.details,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
          id: "outlined-name-input",
          label: "Nom",
          className: classes.textField,
          type: "text",
          name: "name",
          margin: "normal",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this3.handleChangeNewChild('name', e);
          },
          value: newChild.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
          id: "outlined-sensorId-input",
          label: "ID du capteur",
          className: classes.textField,
          type: "text",
          name: "sensorId",
          margin: "normal",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this3.handleChangeNewChild('collection_id', e);
          },
          value: newChild.collection_id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
          id: "outlined-location-input",
          label: "Location",
          className: classes.textField,
          type: "text",
          name: "location",
          margin: "normal",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this3.handleChangeNewChild('location', e);
          },
          value: newChild.location,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
          id: "outlined-rangemin-input",
          label: "Range minimum",
          className: classes.textField,
          type: "number",
          name: "rangemin",
          margin: "normal",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this3.handleChangeNewChild('range_min', e);
          },
          value: newChild.range_min,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
          id: "outlined-rangemax-input",
          label: "Range maximal",
          className: classes.textField,
          type: "number",
          name: "rangemin",
          margin: "normal",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this3.handleChangeNewChild('range_max', e);
          },
          value: newChild.range_max,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16___default.a, {
          control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17___default.a, {
            checked: newChild.active,
            onChange: function onChange(e) {
              return _this3.handleChangeNewChild('active', e);
            },
            color: "primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 338
            },
            __self: this
          }),
          label: "Actif",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
          size: "small",
          color: "primary",
          onClick: function onClick(e) {
            return _this3.createChild();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          },
          __self: this
        }, "Save"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9___default.a, {
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11___default.a, {
          expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 359
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: classes.heading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 360
          },
          __self: this
        }))), data.map(function (row, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9___default.a, {
            key: row._id,
            expanded: expanded === row._id,
            onChange: _this3.handleClose(row._id),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 365
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11___default.a, {
            expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default.a, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 366
              },
              __self: this
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 366
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: classes.column,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 367
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
            className: classes.heading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: row.active ? classes.childActiveTrue : classes.childActiveFalse,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            },
            __self: this
          }, "\u25CF"), " ", row.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: classes.column,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 370
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
            className: classes.secondaryHeading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 371
            },
            __self: this
          }, row.location))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10___default.a, {
            className: classes.details,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 374
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            container: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 375
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            xs: 4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 376
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
            id: "outlined-name-input",
            label: "Nom",
            className: classes.textField,
            type: "text",
            name: "name",
            margin: "normal",
            variant: "outlined",
            onChange: function onChange(e) {
              return _this3.handleChange(key, 'name', e);
            },
            value: row.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 377
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            xs: 4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 389
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
            id: "outlined-sensorId-input",
            label: "ID du capteur",
            className: classes.textField,
            type: "text",
            name: "sensorId",
            margin: "normal",
            variant: "outlined",
            onChange: function onChange(e) {
              return _this3.handleChange(key, 'collection_id', e);
            },
            value: row.collection_id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 390
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            xs: 4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 402
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
            id: "outlined-location-input",
            label: "Location",
            className: classes.textField,
            type: "text",
            name: "location",
            margin: "normal",
            variant: "outlined",
            onChange: function onChange(e) {
              return _this3.handleChange(key, 'location', e);
            },
            value: row.location,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 403
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            xs: 4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 415
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            xs: 4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 416
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
            id: "outlined-rangemin-input",
            label: "Range minimum",
            className: classes.textField,
            type: "number",
            name: "rangemin",
            margin: "normal",
            variant: "outlined",
            onChange: function onChange(e) {
              return _this3.handleChange(key, 'range_min', e);
            },
            value: row.range_min,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 417
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            xs: 4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 429
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
            id: "outlined-rangemax-input",
            label: "Range maximal",
            className: classes.textField,
            type: "number",
            name: "rangemin",
            margin: "normal",
            variant: "outlined",
            onChange: function onChange(e) {
              return _this3.handleChange(key, 'range_max', e);
            },
            value: row.range_max,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 430
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            xs: 4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 443
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            xs: 4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 444
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            xs: 4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 445
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16___default.a, {
            control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17___default.a, {
              checked: row.active,
              onChange: function onChange(e) {
                return _this3.handleChange(key, 'active', e);
              },
              color: "primary",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 448
              },
              __self: this
            }),
            label: "Actif",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 446
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 461
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 462
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
            size: "small",
            color: "red",
            onClick: function onClick(e) {
              return _this3.deleteChild(row);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 463
            },
            __self: this
          }, "Delete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
            size: "small",
            color: "primary",
            onClick: function onClick(e) {
              return _this3.updateChild(row);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 464
            },
            __self: this
          }, "Save")));
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_18___default.a, {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          open: this.state.snackbarOpen,
          autoHideDuration: 6000,
          onClose: this.snackbarClose,
          className: classes.snackbarContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_22__["default"], {
          variant: this.state.snackbarVariant,
          className: classes.snackbarMargin,
          message: this.state.snackbarMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 486
          },
          __self: this
        }))));
      }
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Settings.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
var SettingsWrapped = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Settings);
/* harmony default export */ __webpack_exports__["default"] = (SettingsWrapped);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/settings")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=settings.js.40b5e49e3949f7999ee2.hot-update.js.map