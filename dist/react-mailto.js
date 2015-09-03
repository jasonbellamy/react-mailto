"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Mailto = _react2["default"].createClass({
  displayName: "Mailto",

  propTypes: {
    email: _react2["default"].PropTypes.string.isRequired,
    obfuscate: _react2["default"].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      obfuscate: false
    };
  },

  render: function render() {
    return this.props.obfuscate ? this._renderObfuscatedLink() : this._renderLink();
  },

  _renderLink: function _renderLink() {
    return _react2["default"].createElement(
      "a",
      _extends({ href: "mailto:" + this.props.email }, this.props),
      this.props.children
    );
  },

  _renderObfuscatedLink: function _renderObfuscatedLink() {
    return _react2["default"].createElement(
      "a",
      _extends({ onClick: this._handleClick, href: "mailto:obfuscated" }, this.props),
      this.props.children
    );
  },

  _handleClick: function _handleClick(e) {
    e.preventDefault();
    document.location.href = "mailto:" + this.props.email;
  }

});

exports["default"] = Mailto;
module.exports = exports["default"];