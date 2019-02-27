webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./node_modules/@material-ui/core/Switch/Switch.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Switch/Switch.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

var _SwitchBase = _interopRequireDefault(__webpack_require__(/*! ../internal/SwitchBase */ "./node_modules/@material-ui/core/internal/SwitchBase.js"));

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      width: 62,
      position: 'relative',
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      // For correct alignment with the text.
      verticalAlign: 'middle'
    },

    /* Styles used to create the `icon` passed to the internal `SwitchBase` component `icon` prop. */
    icon: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },

    /* Styles applied the icon element component if `checked={true}`. */
    iconChecked: {
      boxShadow: theme.shadows[2]
    },

    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      padding: 0,
      height: 48,
      width: 48,
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },

    /* Styles applied to the internal `SwitchBase` component's `checked` class. */
    checked: {
      transform: 'translateX(14px)',
      '& + $bar': {
        opacity: 0.5
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '& + $bar': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '& + $bar': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the internal SwitchBase component's disabled class. */
    disabled: {
      '& + $bar': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      },
      '& $icon': {
        boxShadow: theme.shadows[1]
      },
      '&$switchBase': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
        '& + $bar': {
          backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
        }
      }
    },

    /* Styles applied to the bar element. */
    bar: {
      borderRadius: 14 / 2,
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      width: 34,
      height: 14,
      top: '50%',
      left: '50%',
      marginTop: -7,
      marginLeft: -17,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
};

exports.styles = styles;

function Switch(props) {
  var classes = props.classes,
      className = props.className,
      color = props.color,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "color"]);
  return _react.default.createElement("span", {
    className: (0, _classnames.default)(classes.root, className)
  }, _react.default.createElement(_SwitchBase.default, (0, _extends2.default)({
    type: "checkbox",
    icon: _react.default.createElement("span", {
      className: classes.icon
    }),
    classes: {
      root: (0, _classnames.default)(classes.switchBase, classes["color".concat((0, _helpers.capitalize)(color))]),
      checked: classes.checked,
      disabled: classes.disabled
    },
    checkedIcon: _react.default.createElement("span", {
      className: (0, _classnames.default)(classes.icon, classes.iconChecked)
    })
  }, other)), _react.default.createElement("span", {
    className: classes.bar
  }));
}

 true ? Switch.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['primary', 'secondary', 'default']),

  /**
   * @ignore
   */
  defaultChecked: _propTypes.default.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes.default.node,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes.default.func,

  /**
   * The input component property `type`.
   */
  type: _propTypes.default.string,

  /**
   * The value of the component.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool])
} : undefined;
Switch.defaultProps = {
  color: 'secondary'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiSwitch'
})(Switch);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Switch/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/core/Switch/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Switch.default;
  }
});

var _Switch = _interopRequireDefault(__webpack_require__(/*! ./Switch */ "./node_modules/@material-ui/core/Switch/Switch.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/SwitchBase.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/SwitchBase.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withFormControlContext = _interopRequireDefault(__webpack_require__(/*! ../FormControl/withFormControlContext */ "./node_modules/@material-ui/core/FormControl/withFormControlContext.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _IconButton = _interopRequireDefault(__webpack_require__(/*! ../IconButton */ "./node_modules/@material-ui/core/IconButton/index.js"));

// @inheritedComponent IconButton
var styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none',
    '&:hover': {
      // Disable the hover effect for the IconButton.
      backgroundColor: 'transparent'
    }
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  }
};
/**
 * @ignore - internal component.
 */

exports.styles = styles;

var SwitchBase =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SwitchBase, _React$Component);

  function SwitchBase(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SwitchBase);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SwitchBase).call(this));

    _this.handleFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      var muiFormControl = _this.props.muiFormControl;

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      }
    };

    _this.handleBlur = function (event) {
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      var muiFormControl = _this.props.muiFormControl;

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      }
    };

    _this.handleInputChange = function (event) {
      var checked = event.target.checked;

      if (!_this.isControlled) {
        _this.setState({
          checked: checked
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(event, checked);
      }
    };

    _this.isControlled = props.checked != null;
    _this.state = {};

    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false;
    }

    return _this;
  }

  (0, _createClass2.default)(SwitchBase, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          checkedProp = _this$props.checked,
          checkedIcon = _this$props.checkedIcon,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          defaultChecked = _this$props.defaultChecked,
          disabledProp = _this$props.disabled,
          icon = _this$props.icon,
          id = _this$props.id,
          inputProps = _this$props.inputProps,
          inputRef = _this$props.inputRef,
          muiFormControl = _this$props.muiFormControl,
          name = _this$props.name,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          readOnly = _this$props.readOnly,
          required = _this$props.required,
          tabIndex = _this$props.tabIndex,
          type = _this$props.type,
          value = _this$props.value,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "muiFormControl", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);
      var disabled = disabledProp;

      if (muiFormControl) {
        if (typeof disabled === 'undefined') {
          disabled = muiFormControl.disabled;
        }
      }

      var checked = this.isControlled ? checkedProp : this.state.checked;
      var hasLabelFor = type === 'checkbox' || type === 'radio';
      return _react.default.createElement(_IconButton.default, (0, _extends2.default)({
        component: "span",
        className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.checked, checked), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp),
        disabled: disabled,
        tabIndex: null,
        role: undefined,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, other), checked ? checkedIcon : icon, _react.default.createElement("input", (0, _extends2.default)({
        autoFocus: autoFocus,
        checked: checkedProp,
        defaultChecked: defaultChecked,
        className: classes.input,
        disabled: disabled,
        id: hasLabelFor && id,
        name: name,
        onChange: this.handleInputChange,
        readOnly: readOnly,
        ref: inputRef,
        required: required,
        tabIndex: tabIndex,
        type: type,
        value: value
      }, inputProps)));
    }
  }]);
  return SwitchBase;
}(_react.default.Component); // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.


 true ? SwitchBase.propTypes = {
  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  defaultChecked: _propTypes.default.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes.default.node.isRequired,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * @ignore
   */
  muiFormControl: _propTypes.default.object,

  /*
   * @ignore
   */
  name: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: _propTypes.default.bool,

  /**
   * If `true`, the input will be required.
   */
  required: _propTypes.default.bool,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * The input component property `type`.
   */
  type: _propTypes.default.string.isRequired,

  /**
   * The value of the component.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool])
} : undefined;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiPrivateSwitchBase'
})((0, _withFormControlContext.default)(SwitchBase));

exports.default = _default;

/***/ }),

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
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/Chip/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/Switch/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../static/css/main_custom.css */ "./static/css/main_custom.css");
/* harmony import */ var _static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/SnackbarComponent */ "./components/SnackbarComponent.js");
/* harmony import */ var _components_AppbarComponent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/AppbarComponent */ "./components/AppbarComponent.js");
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
      fontSize: theme.typography.pxToRem(15)
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
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
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    }
  };
};

var rows = [{
  "panelId": 'panel' + Math.random() * 1000,
  "panelTitle": "General settings",
  "panelDescription": "Hey this is a description",
  "panelText": "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."
}, {
  "panelId": 'panel' + Math.random() * 1000,
  "panelTitle": "General settings",
  "panelDescription": "Hey this is a description",
  "panelText": "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."
}];

var Settings =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Settings, _React$Component);

  function Settings(props) {
    var _this;

    _classCallCheck(this, Settings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Settings).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (panel) {
      return function (event, expanded) {
        _this.setState({
          expanded: expanded ? panel : false
        });
      };
    });

    _this.state = {
      error: null,
      isLoaded: false,
      expanded: null,
      data: []
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
          expanded = _this$state.expanded;

      if (error) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, "Error: ", error.message);
      } else if (!isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, "Loading...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppbarComponent__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          container: true,
          spacing: 24,
          className: classes.root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          className: classes.paper,
          elevation: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, data.map(function (row, key) {
          return (// <ExpansionPanel expanded={expanded === row._id} onChange={this.handleChange(row._id)}>
            //     <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            //         <Typography className={classes.heading}>{row.name}</Typography>
            //         <Typography className={classes.secondaryHeading}>{row.location}</Typography>
            //     </ExpansionPanelSummary>
            //     <ExpansionPanelDetails>
            //         <Typography>
            //         {row.collection_id}
            //         </Typography>
            //     </ExpansionPanelDetails>
            // </ExpansionPanel>
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9___default.a, {
              key: row._id,
              expanded: expanded === row._id,
              onChange: _this3.handleChange(row._id),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11___default.a, {
              expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default.a, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                },
                __self: this
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 162
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: classes.column,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
              className: classes.heading,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              },
              __self: this
            }, row.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: classes.column,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
              className: classes.secondaryHeading,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167
              },
              __self: this
            }, row.location))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10___default.a, {
              className: classes.details,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 170
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
              container: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 171
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
              item: true,
              xs: 4,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
              id: "outlined-name-input",
              label: "Nom",
              className: classes.textField,
              type: "text",
              name: "name",
              margin: "normal",
              variant: "outlined",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 173
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
              item: true,
              xs: 4,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 183
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
              id: "outlined-sensorId-input",
              label: "ID du capteur",
              className: classes.textField,
              type: "text",
              name: "sensorId",
              margin: "normal",
              variant: "outlined",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 184
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
              item: true,
              xs: 4,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 194
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
              id: "outlined-location-input",
              label: "Location",
              className: classes.textField,
              type: "text",
              name: "location",
              margin: "normal",
              variant: "outlined",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
              item: true,
              xs: 4,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 205
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
              item: true,
              xs: 4,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 206
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
              id: "outlined-rangemin-input",
              label: "Range minimum",
              className: classes.textField,
              type: "number",
              name: "rangemin",
              margin: "normal",
              variant: "outlined",
              value: row.range_min,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 207
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
              item: true,
              xs: 4,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 218
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
              id: "outlined-rangemax-input",
              label: "Range maximal",
              className: classes.textField,
              type: "number",
              name: "rangemin",
              margin: "normal",
              variant: "outlined",
              value: row.range_max,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 219
              },
              __self: this
            })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15___default.a, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 247
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12___default.a, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 248
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
              size: "small",
              onClick: _this3.handleChange(row._id),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 249
              },
              __self: this
            }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
              size: "small",
              color: "primary",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 250
              },
              __self: this
            }, "Save")))
          );
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          xs: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }));
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
//# sourceMappingURL=settings.js.651af3e0c9f1f60ba7ed.hot-update.js.map