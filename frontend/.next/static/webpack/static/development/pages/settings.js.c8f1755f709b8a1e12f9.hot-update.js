webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./node_modules/@material-ui/core/Collapse/Collapse.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/Collapse/Collapse.js ***!
  \*************************************************************/
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

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/Transition.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _transitions = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/styles/transitions.js");

var _utils2 = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/transitions/utils.js");

// @inheritedComponent Transition
var styles = function styles(theme) {
  return {
    /* Styles applied to the container element. */
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },

    /* Styles applied to the container element when the transition has entered. */
    entered: {
      height: 'auto',
      overflow: 'visible'
    },

    /* Styles applied to the outer wrapper element. */
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },

    /* Styles applied to the inner wrapper element. */
    wrapperInner: {
      width: '100%'
    }
  };
};
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/demos/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */


exports.styles = styles;

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Collapse, _React$Component);

  function Collapse() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleEnter = function (node) {
      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    };

    _this.handleEntering = function (node) {
      var _this$props = _this.props,
          timeout = _this$props.timeout,
          theme = _this$props.theme;
      var wrapperHeight = _this.wrapperRef ? _this.wrapperRef.clientHeight : 0;

      var _getTransitionProps = (0, _utils2.getTransitionProps)(_this.props, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = "".concat(duration2, "ms");
        _this.autoTransitionDuration = duration2;
      } else {
        node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
      }

      node.style.height = "".concat(wrapperHeight, "px");

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    };

    _this.handleEntered = function (node) {
      node.style.height = 'auto';

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    };

    _this.handleExit = function (node) {
      var wrapperHeight = _this.wrapperRef ? _this.wrapperRef.clientHeight : 0;
      node.style.height = "".concat(wrapperHeight, "px");

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.handleExiting = function (node) {
      var _this$props2 = _this.props,
          timeout = _this$props2.timeout,
          theme = _this$props2.theme;
      var wrapperHeight = _this.wrapperRef ? _this.wrapperRef.clientHeight : 0;

      var _getTransitionProps2 = (0, _utils2.getTransitionProps)(_this.props, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = "".concat(duration2, "ms");
        _this.autoTransitionDuration = duration2;
      } else {
        node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
      }

      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.addEndListener = function (_, next) {
      if (_this.props.timeout === 'auto') {
        _this.timer = setTimeout(next, _this.autoTransitionDuration || 0);
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Collapse, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          classes = _this$props3.classes,
          className = _this$props3.className,
          collapsedHeight = _this$props3.collapsedHeight,
          Component = _this$props3.component,
          onEnter = _this$props3.onEnter,
          onEntered = _this$props3.onEntered,
          onEntering = _this$props3.onEntering,
          onExit = _this$props3.onExit,
          onExiting = _this$props3.onExiting,
          style = _this$props3.style,
          theme = _this$props3.theme,
          timeout = _this$props3.timeout,
          other = (0, _objectWithoutProperties2.default)(_this$props3, ["children", "classes", "className", "collapsedHeight", "component", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "style", "theme", "timeout"]);
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        onEnter: this.handleEnter,
        onEntered: this.handleEntered,
        onEntering: this.handleEntering,
        onExit: this.handleExit,
        onExiting: this.handleExiting,
        addEndListener: this.addEndListener,
        timeout: timeout === 'auto' ? null : timeout
      }, other), function (state, childProps) {
        return _react.default.createElement(Component, (0, _extends2.default)({
          className: (0, _classnames.default)(classes.container, (0, _defineProperty2.default)({}, classes.entered, state === 'entered'), className),
          style: (0, _extends2.default)({}, style, {
            minHeight: collapsedHeight
          })
        }, childProps), _react.default.createElement("div", {
          className: classes.wrapper,
          ref: function ref(_ref) {
            _this2.wrapperRef = _ref;
          }
        }, _react.default.createElement("div", {
          className: classes.wrapperInner
        }, children)));
      });
    }
  }]);
  return Collapse;
}(_react.default.Component);

 true ? Collapse.propTypes = {
  /**
   * The content node to be collapsed.
   */
  children: _propTypes.default.node,

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
   * The height of the container when collapsed.
   */
  collapsedHeight: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntered: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntering: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  onExiting: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])])
} : undefined;
Collapse.defaultProps = {
  collapsedHeight: '0px',
  component: 'div',
  timeout: _transitions.duration.standard
};
Collapse.muiSupportAuto = true;

var _default = (0, _withStyles.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Collapse/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/Collapse/index.js ***!
  \**********************************************************/
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
    return _Collapse.default;
  }
});

var _Collapse = _interopRequireDefault(__webpack_require__(/*! ./Collapse */ "./node_modules/@material-ui/core/Collapse/Collapse.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ExpansionPanel/ExpansionPanel.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/ExpansionPanel/ExpansionPanel.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/inherits.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _Collapse = _interopRequireDefault(__webpack_require__(/*! ../Collapse */ "./node_modules/@material-ui/core/Collapse/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _reactHelpers = __webpack_require__(/*! ../utils/reactHelpers */ "./node_modules/@material-ui/core/utils/reactHelpers.js");

// @inheritedComponent Paper
// Workaround https://github.com/jsdom/jsdom/issues/2026
var edgeFix = typeof window !== 'undefined' && /jsdom/.test(window.navigator.userAgent) ? {} : {
  // Fix a rendering issue on Edge
  '@supports (-ms-ime-align: auto)': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
};

var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        '&:before': {
          display: 'none'
        }
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      }
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      '&:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      '&:last-child': (0, _extends2.default)({
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius
      }, edgeFix)
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {
      margin: '16px 0',
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      },
      '&:before': {
        opacity: 0
      }
    },

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {
      backgroundColor: theme.palette.action.disabledBackground
    }
  };
};

exports.styles = styles;

var ExpansionPanel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ExpansionPanel, _React$Component);

  function ExpansionPanel(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ExpansionPanel);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ExpansionPanel).call(this));

    _this.handleChange = function (event) {
      var expanded = _this.isControlled ? _this.props.expanded : _this.state.expanded;

      if (!_this.isControlled) {
        _this.setState({
          expanded: !expanded
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(event, !expanded);
      }
    };

    _this.isControlled = props.expanded != null;
    _this.state = {};

    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.expanded = props.defaultExpanded !== undefined ? props.defaultExpanded : false;
    }

    return _this;
  }

  (0, _createClass2.default)(ExpansionPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _classNames;

      var _this$props = this.props,
          childrenProp = _this$props.children,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          CollapsePropsProp = _this$props.CollapseProps,
          defaultExpanded = _this$props.defaultExpanded,
          disabled = _this$props.disabled,
          expandedProp = _this$props.expanded,
          onChange = _this$props.onChange,
          square = _this$props.square,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["children", "classes", "className", "CollapseProps", "defaultExpanded", "disabled", "expanded", "onChange", "square"]);
      var expanded = this.isControlled ? expandedProp : this.state.expanded;
      var summary = null;

      var children = _react.default.Children.map(childrenProp, function (child) {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

         true ? (0, _warning.default)(child.type !== _react.default.Fragment, ["Material-UI: the ExpansionPanel component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n')) : undefined;

        if ((0, _reactHelpers.isMuiElement)(child, ['ExpansionPanelSummary'])) {
          summary = _react.default.cloneElement(child, {
            disabled: disabled,
            expanded: expanded,
            onChange: _this2.handleChange
          });
          return null;
        }

        return child;
      });

      var CollapseProps = !expanded ? {
        'aria-hidden': 'true'
      } : null;
      return _react.default.createElement(_Paper.default, (0, _extends2.default)({
        className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.expanded, expanded), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.rounded, !square), _classNames), classNameProp),
        elevation: 1,
        square: square
      }, other), summary, _react.default.createElement(_Collapse.default, (0, _extends2.default)({
        in: expanded,
        timeout: "auto"
      }, CollapseProps, CollapsePropsProp), children));
    }
  }]);
  return ExpansionPanel;
}(_react.default.Component);

 true ? ExpansionPanel.propTypes = {
  /**
   * The content of the expansion panel.
   */
  children: _propTypes.default.node.isRequired,

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
   * Properties applied to the [`Collapse`](/api/collapse/) element.
   */
  CollapseProps: _propTypes.default.object,

  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: _propTypes.default.bool,

  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: _propTypes.default.bool,

  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} expanded The `expanded` state of the panel
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  square: _propTypes.default.bool
} : undefined;
ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false,
  square: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiExpansionPanel'
})(ExpansionPanel);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ExpansionPanel/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/ExpansionPanel/index.js ***!
  \****************************************************************/
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
    return _ExpansionPanel.default;
  }
});

var _ExpansionPanel = _interopRequireDefault(__webpack_require__(/*! ./ExpansionPanel */ "./node_modules/@material-ui/core/ExpansionPanel/ExpansionPanel.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails.js ***!
  \***************************************************************************************/
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

var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    padding: '8px 24px 24px'
  }
};
exports.styles = styles;

function ExpansionPanelDetails(props) {
  var classes = props.classes,
      children = props.children,
      className = props.className,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "children", "className"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, className)
  }, other), children);
}

 true ? ExpansionPanelDetails.propTypes = {
  /**
   * The content of the expansion panel details.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : undefined;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiExpansionPanelDetails'
})(ExpansionPanelDetails);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ExpansionPanelDetails/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/ExpansionPanelDetails/index.js ***!
  \***********************************************************************/
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
    return _ExpansionPanelDetails.default;
  }
});

var _ExpansionPanelDetails = _interopRequireDefault(__webpack_require__(/*! ./ExpansionPanelDetails */ "./node_modules/@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary.js ***!
  \***************************************************************************************/
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

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ButtonBase = _interopRequireDefault(__webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__(/*! ../IconButton */ "./node_modules/@material-ui/core/IconButton/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: '0 24px 0 24px',
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused': {
        backgroundColor: theme.palette.grey[300]
      },
      '&$disabled': {
        opacity: 0.38
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root and children wrapper elements when focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '& > :last-child': {
        paddingRight: 32
      },
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      position: 'absolute',
      top: '50%',
      right: 8,
      transform: 'translateY(-50%) rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'translateY(-50%) rotate(180deg)'
      }
    }
  };
};

exports.styles = styles;

var ExpansionPanelSummary =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ExpansionPanelSummary, _React$Component);

  function ExpansionPanelSummary() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ExpansionPanelSummary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ExpansionPanelSummary)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      focused: false
    };

    _this.handleFocusVisible = function (event) {
      _this.setState({
        focused: true
      });

      if (_this.props.onFocusVisible) {
        _this.props.onFocusVisible(event);
      }
    };

    _this.handleBlur = function (event) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    };

    _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick;

      if (onChange) {
        onChange(event);
      }

      if (onClick) {
        onClick(event);
      }
    };

    return _this;
  }

  (0, _createClass2.default)(ExpansionPanelSummary, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          children = _this$props2.children,
          classes = _this$props2.classes,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          expanded = _this$props2.expanded,
          expandIcon = _this$props2.expandIcon,
          IconButtonProps = _this$props2.IconButtonProps,
          onBlur = _this$props2.onBlur,
          onChange = _this$props2.onChange,
          onClick = _this$props2.onClick,
          onFocusVisible = _this$props2.onFocusVisible,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "classes", "className", "disabled", "expanded", "expandIcon", "IconButtonProps", "onBlur", "onChange", "onClick", "onFocusVisible"]);
      var focused = this.state.focused;
      return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
        focusRipple: false,
        disableRipple: true,
        disabled: disabled,
        component: "div",
        "aria-expanded": expanded,
        className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.expanded, expanded), (0, _defineProperty2.default)(_classNames, classes.focused, focused), _classNames), className),
        onFocusVisible: this.handleFocusVisible,
        onBlur: this.handleBlur,
        onClick: this.handleChange
      }, other), _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.content, (0, _defineProperty2.default)({}, classes.expanded, expanded))
      }, children), expandIcon && _react.default.createElement(_IconButton.default, (0, _extends2.default)({
        disabled: disabled,
        className: (0, _classnames.default)(classes.expandIcon, (0, _defineProperty2.default)({}, classes.expanded, expanded)),
        component: "div",
        tabIndex: -1,
        "aria-hidden": "true"
      }, IconButtonProps), expandIcon));
    }
  }]);
  return ExpansionPanelSummary;
}(_react.default.Component);

 true ? ExpansionPanelSummary.propTypes = {
  /**
   * The content of the expansion panel summary.
   */
  children: _propTypes.default.node,

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
   * If `true`, the summary will be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * @ignore
   * If `true`, expands the summary, otherwise collapse it.
   */
  expanded: _propTypes.default.bool,

  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: _propTypes.default.node,

  /**
   * Properties applied to the `TouchRipple` element wrapping the expand icon.
   */
  IconButtonProps: _propTypes.default.object,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * @ignore
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocusVisible: _propTypes.default.func
} : undefined;
ExpansionPanelSummary.defaultProps = {
  disabled: false
};
ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiExpansionPanelSummary'
})(ExpansionPanelSummary);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ExpansionPanelSummary/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/ExpansionPanelSummary/index.js ***!
  \***********************************************************************/
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
    return _ExpansionPanelSummary.default;
  }
});

var _ExpansionPanelSummary = _interopRequireDefault(__webpack_require__(/*! ./ExpansionPanelSummary */ "./node_modules/@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary.js"));

/***/ }),

/***/ "./node_modules/@material-ui/icons/ExpandMore.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ExpandMore.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/icons/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'ExpandMore');

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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/css/main_custom.css */ "./static/css/main_custom.css");
/* harmony import */ var _static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SnackbarComponent */ "./components/SnackbarComponent.js");
/* harmony import */ var _components_AppbarComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AppbarComponent */ "./components/AppbarComponent.js");
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
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  };
};

var Settings =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Settings, _React$Component);

  function Settings() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Settings);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Settings)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(Settings, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppbarComponent__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), "Settings", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
        item: true,
        xs: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
        item: true,
        xs: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: classes.paper,
        elevation: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h5",
        component: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "This is a sheet of paper."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        component: "p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Paper can be used to build surface or other elements for your application."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
        item: true,
        xs: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }));
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
//# sourceMappingURL=settings.js.c8f1755f709b8a1e12f9.hot-update.js.map