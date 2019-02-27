webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./node_modules/@material-ui/core/Avatar/Avatar.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Avatar/Avatar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none'
    },

    /* Styles applied to the root element if there are children and not `src` or `srcSet`. */
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },

    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      // Handle non-square image. The property isn't supported by IE 11.
      objectFit: 'cover'
    }
  };
};

exports.styles = styles;

function Avatar(props) {
  var alt = props.alt,
      childrenProp = props.children,
      childrenClassNameProp = props.childrenClassName,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      imgProps = props.imgProps,
      sizes = props.sizes,
      src = props.src,
      srcSet = props.srcSet,
      other = (0, _objectWithoutProperties2.default)(props, ["alt", "children", "childrenClassName", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet"]);
  var children = null;
  var img = src || srcSet;

  if (img) {
    children = _react.default.createElement("img", (0, _extends2.default)({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    }, imgProps));
  } else if (childrenClassNameProp && _react.default.isValidElement(childrenProp)) {
    children = _react.default.cloneElement(childrenProp, {
      className: (0, _classnames.default)(childrenClassNameProp, childrenProp.props.className)
    });
  } else {
    children = childrenProp;
  }

  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, classes.system, (0, _defineProperty2.default)({}, classes.colorDefault, !img), classNameProp)
  }, other), children);
}

 true ? Avatar.propTypes = {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: _propTypes.default.string,

  /**
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   * The className of the child element.
   * Used by Chip and ListItemIcon to style the Avatar icon.
   */
  childrenClassName: _propTypes.default.string,

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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * Attributes applied to the `img` element if the component
   * is used to display an image.
   */
  imgProps: _propTypes.default.object,

  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: _propTypes.default.string,

  /**
   * The `src` attribute for the `img` element.
   */
  src: _propTypes.default.string,

  /**
   * The `srcSet` attribute for the `img` element.
   */
  srcSet: _propTypes.default.string
} : undefined;
Avatar.defaultProps = {
  component: 'div'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiAvatar'
})(Avatar);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Chip/Chip.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Chip/Chip.js ***!
  \*****************************************************/
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

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _Cancel = _interopRequireDefault(__webpack_require__(/*! ../internal/svg-icons/Cancel */ "./node_modules/@material-ui/core/internal/svg-icons/Cancel.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");

var _unsupportedProp = _interopRequireDefault(__webpack_require__(/*! ../utils/unsupportedProp */ "./node_modules/@material-ui/core/utils/unsupportedProp.js"));

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

__webpack_require__(/*! ../Avatar/Avatar */ "./node_modules/@material-ui/core/Avatar/Avatar.js");

// So we don't have any override priority issue.
var styles = function styles(theme) {
  var height = 32;
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = (0, _colorManipulator.fade)(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none',
      textDecoration: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      WebkitTapHighlightColor: 'transparent',
      // Remove grey highlight
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.12)
      }
    },

    /**
     * Styles applied to the root element if
     * `onClick` and `color="primary"` is defined or `clickable={true}`.
     */
    clickableColorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(theme.palette.primary.main, 0.08)
      },
      '&:active': {
        backgroundColor: (0, _colorManipulator.emphasize)(theme.palette.primary.main, 0.12)
      }
    },

    /**
     * Styles applied to the root element if
     * `onClick` and `color="secondary"` is defined or `clickable={true}`.
     */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(theme.palette.secondary.main, 0.08)
      },
      '&:active': {
        backgroundColor: (0, _colorManipulator.emphasize)(theme.palette.secondary.main, 0.12)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      '& $avatar': {
        marginLeft: -1
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the `avatar` element. */
    avatar: {
      marginRight: -4,
      width: height,
      height: height,
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      fontSize: theme.typography.pxToRem(16)
    },

    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.dark
    },

    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.dark
    },

    /* Styles applied to the `avatar` elements children. */
    avatarChildren: {
      width: 19,
      height: 19
    },

    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 4,
      marginRight: -8
    },

    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit'
    },

    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit'
    },

    /* Styles applied to the label `span` element`. */
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit'
    },

    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      cursor: 'pointer',
      height: 'auto',
      margin: '0 4px 0 -8px',
      '&:hover': {
        color: (0, _colorManipulator.fade)(deleteIconColor, 0.4)
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
    deleteIconColorPrimary: {
      color: (0, _colorManipulator.fade)(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: (0, _colorManipulator.fade)(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: (0, _colorManipulator.fade)(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: (0, _colorManipulator.fade)(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main
      }
    }
  };
};
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


exports.styles = styles;

var Chip =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Chip, _React$Component);

  function Chip() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Chip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Chip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleDeleteIconClick = function (event) {
      // Stop the event from bubbling up to the `Chip`
      event.stopPropagation();
      var onDelete = _this.props.onDelete;

      if (onDelete) {
        onDelete(event);
      }
    };

    _this.handleKeyDown = function (event) {
      var onKeyDown = _this.props.onKeyDown;

      if (onKeyDown) {
        onKeyDown(event);
      } // Ignore events from children of `Chip`.


      if (event.currentTarget !== event.target) {
        return;
      }

      var key = event.key;

      if (key === ' ' || key === 'Enter' || key === 'Backspace' || key === 'Escape') {
        event.preventDefault();
      }
    };

    _this.handleKeyUp = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onDelete = _this$props.onDelete,
          onKeyUp = _this$props.onKeyUp;

      if (onKeyUp) {
        onKeyUp(event);
      } // Ignore events from children of `Chip`.


      if (event.currentTarget !== event.target) {
        return;
      }

      var key = event.key;

      if (onClick && (key === ' ' || key === 'Enter')) {
        onClick(event);
      } else if (onDelete && key === 'Backspace') {
        onDelete(event);
      } else if (key === 'Escape' && _this.chipRef) {
        _this.chipRef.blur();
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Chip, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          avatarProp = _this$props2.avatar,
          classes = _this$props2.classes,
          classNameProp = _this$props2.className,
          clickableProp = _this$props2.clickable,
          color = _this$props2.color,
          Component = _this$props2.component,
          deleteIconProp = _this$props2.deleteIcon,
          iconProp = _this$props2.icon,
          label = _this$props2.label,
          onClick = _this$props2.onClick,
          onDelete = _this$props2.onDelete,
          onKeyDown = _this$props2.onKeyDown,
          onKeyUp = _this$props2.onKeyUp,
          tabIndexProp = _this$props2.tabIndex,
          variant = _this$props2.variant,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "tabIndex", "variant"]);
      var clickable = clickableProp !== false && onClick ? true : clickableProp;
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.clickable, clickable), (0, _defineProperty2.default)(_classNames, classes["clickableColor".concat((0, _helpers.capitalize)(color))], clickable && color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.deletable, onDelete), (0, _defineProperty2.default)(_classNames, classes["deletableColor".concat((0, _helpers.capitalize)(color))], onDelete && color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.outlined, variant === 'outlined'), (0, _defineProperty2.default)(_classNames, classes.outlinedPrimary, variant === 'outlined' && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.outlinedSecondary, variant === 'outlined' && color === 'secondary'), _classNames), classNameProp);
      var deleteIcon = null;

      if (onDelete) {
        var _customClasses;

        var customClasses = (_customClasses = {}, (0, _defineProperty2.default)(_customClasses, classes["deleteIconColor".concat((0, _helpers.capitalize)(color))], color !== 'default' && variant !== 'outlined'), (0, _defineProperty2.default)(_customClasses, classes["deleteIconOutlinedColor".concat((0, _helpers.capitalize)(color))], color !== 'default' && variant === 'outlined'), _customClasses);
        deleteIcon = deleteIconProp && _react.default.isValidElement(deleteIconProp) ? _react.default.cloneElement(deleteIconProp, {
          className: (0, _classnames.default)(deleteIconProp.props.className, classes.deleteIcon, customClasses),
          onClick: this.handleDeleteIconClick
        }) : _react.default.createElement(_Cancel.default, {
          className: (0, _classnames.default)(classes.deleteIcon, customClasses),
          onClick: this.handleDeleteIconClick
        });
      }

      var avatar = null;

      if (avatarProp && _react.default.isValidElement(avatarProp)) {
        avatar = _react.default.cloneElement(avatarProp, {
          className: (0, _classnames.default)(classes.avatar, avatarProp.props.className, (0, _defineProperty2.default)({}, classes["avatarColor".concat((0, _helpers.capitalize)(color))], color !== 'default')),
          childrenClassName: (0, _classnames.default)(classes.avatarChildren, avatarProp.props.childrenClassName)
        });
      }

      var icon = null;

      if (iconProp && _react.default.isValidElement(iconProp)) {
        icon = _react.default.cloneElement(iconProp, {
          className: (0, _classnames.default)(classes.icon, iconProp.props.className, (0, _defineProperty2.default)({}, classes["iconColor".concat((0, _helpers.capitalize)(color))], color !== 'default'))
        });
      }

      var tabIndex = tabIndexProp;

      if (!tabIndex) {
        tabIndex = onClick || onDelete || clickable ? 0 : -1;
      }

       true ? (0, _warning.default)(!avatar || !icon, 'Material-UI: the Chip component can not handle the avatar ' + 'and the icon property at the same time. Pick one.') : undefined;
      return _react.default.createElement(Component, (0, _extends2.default)({
        role: "button",
        className: className,
        tabIndex: tabIndex,
        onClick: onClick,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        ref: function ref(_ref) {
          _this2.chipRef = _ref;
        }
      }, other), avatar || icon, _react.default.createElement("span", {
        className: classes.label
      }, label), deleteIcon);
    }
  }]);
  return Chip;
}(_react.default.Component);

 true ? Chip.propTypes = {
  /**
   * Avatar element.
   */
  avatar: _propTypes.default.element,

  /**
   * This property isn't supported.
   * Use the `component` property if you need to change the children structure.
   */
  children: _unsupportedProp.default,

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
   * If true, the chip will appear clickable, and will raise when pressed,
   * even if the onClick property is not defined.
   * If false, the chip will not be clickable, even if onClick property is defined.
   * This can be used, for example,
   * along with the component property to indicate an anchor Chip is clickable.
   */
  clickable: _propTypes.default.bool,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['default', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: _propTypes.default.element,

  /**
   * Icon element.
   */
  icon: _propTypes.default.element,

  /**
   * The content of the label.
   */
  label: _propTypes.default.node,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyUp: _propTypes.default.func,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['default', 'outlined'])
} : undefined;
Chip.defaultProps = {
  component: 'div',
  color: 'default',
  variant: 'default'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiChip'
})(Chip);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Chip/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/core/Chip/index.js ***!
  \******************************************************/
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
    return _Chip.default;
  }
});

var _Chip = _interopRequireDefault(__webpack_require__(/*! ./Chip */ "./node_modules/@material-ui/core/Chip/Chip.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Divider/Divider.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/Divider/Divider.js ***!
  \***********************************************************/
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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },

    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },

    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },

    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.divider, 0.08)
    },

    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2
    }
  };
};

exports.styles = styles;

function Divider(props) {
  var _classNames;

  var absolute = props.absolute,
      classes = props.classes,
      className = props.className,
      Component = props.component,
      inset = props.inset,
      light = props.light,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["absolute", "classes", "className", "component", "inset", "light", "variant"]);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.inset, inset || variant === 'inset'), (0, _defineProperty2.default)(_classNames, classes.middle, variant === 'middle'), (0, _defineProperty2.default)(_classNames, classes.absolute, absolute), (0, _defineProperty2.default)(_classNames, classes.light, light), _classNames), className)
  }, other));
}

 true ? Divider.propTypes = {
  /**
   * Absolutely position the element.
   */
  absolute: _propTypes.default.bool,

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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the divider will be indented.
   * __WARNING__: `inset` is deprecated.
   * Instead use `variant="inset"`.
   */
  inset: (0, _utils.chainPropTypes)(_propTypes.default.bool, function (props) {
    /* istanbul ignore if */
    if (props.inset) {
      return new Error('Material-UI: you are using the deprecated `inset` property ' + 'that will be removed in the next major release. The property `variant="inset"` ' + 'is equivalent and should be used instead.');
    }

    return null;
  }),

  /**
   * If `true`, the divider will have a lighter color.
   */
  light: _propTypes.default.bool,

  /**
   *  The variant to use.
   */
  variant: _propTypes.default.oneOf(['fullWidth', 'inset', 'middle'])
} : undefined;
Divider.defaultProps = {
  absolute: false,
  component: 'hr',
  light: false,
  variant: 'fullWidth'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDivider'
})(Divider);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Divider/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Divider/index.js ***!
  \*********************************************************/
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
    return _Divider.default;
  }
});

var _Divider = _interopRequireDefault(__webpack_require__(/*! ./Divider */ "./node_modules/@material-ui/core/Divider/Divider.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/Cancel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/Cancel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _pure = _interopRequireDefault(__webpack_require__(/*! recompose/pure */ "./node_modules/recompose/pure.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! ../../SvgIcon */ "./node_modules/@material-ui/core/SvgIcon/index.js"));

var _ref = _react.default.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
});

/**
 * @ignore - internal component.
 */
var Cancel = function Cancel(props) {
  return _react.default.createElement(_SvgIcon.default, props, _ref);
};

Cancel = (0, _pure.default)(Cancel);
Cancel.muiName = 'SvgIcon';
var _default = Cancel;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/unsupportedProp.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/utils/unsupportedProp.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function unsupportedProp(props, propName, componentName, location, propFullName) {
  /* istanbul ignore if */
  if (false) {}

  var propFullNameSafe = propFullName || propName;

  if (typeof props[propName] !== 'undefined') {
    return new Error("The property `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }

  return null;
}

var _default = unsupportedProp;
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
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/Chip/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/css/main_custom.css */ "./static/css/main_custom.css");
/* harmony import */ var _static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/SnackbarComponent */ "./components/SnackbarComponent.js");
/* harmony import */ var _components_AppbarComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/AppbarComponent */ "./components/AppbarComponent.js");
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
        console.log(result);

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
            lineNumber: 126
          },
          __self: this
        }, "Error: ", error.message);
      } else if (!isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, "Loading...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppbarComponent__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }), "Settings", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
          item: true,
          xs: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
          item: true,
          xs: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: classes.paper,
          elevation: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_8___default.a, {
              defaultExpanded: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_10___default.a, {
              expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default.a, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 155
                },
                __self: this
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: classes.column,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 156
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
              className: classes.heading,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              },
              __self: this
            }, "Location")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: classes.column,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
              className: classes.secondaryHeading,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              },
              __self: this
            }, "Select trip destination"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_9___default.a, {
              className: classes.details,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: classes.column,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: classes.column,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12___default.a, {
              label: "Barbados",
              className: classes.chip,
              onDelete: function onDelete() {},
              __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: classNames(classes.column, classes.helper),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
              variant: "caption",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 169
              },
              __self: this
            }, "Select your destination of choice", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 171
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#sub-labels-and-columns",
              className: classes.link,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              },
              __self: this
            }, "Learn more")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 178
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExpansionPanelActions, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 179
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
              size: "small",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 180
              },
              __self: this
            }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
              size: "small",
              color: "primary",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 181
              },
              __self: this
            }, "Save")))
          );
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
          item: true,
          xs: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
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
//# sourceMappingURL=settings.js.941ec403168d6ffeda48.hot-update.js.map