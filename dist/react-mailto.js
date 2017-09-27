'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMailtoLink = exports.toSearchString = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toSearchString = exports.toSearchString = function toSearchString() {
  var searchParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return Object.keys(searchParams).map(function (key) {
    return key + '=' + encodeURIComponent(searchParams[key]);
  }).join('&');
};

var createMailtoLink = exports.createMailtoLink = function createMailtoLink(email, headers) {
  var link = 'mailto:' + email;
  if (headers) {
    link += '?' + toSearchString(headers);
  }
  return link;
};

var Mailto = function (_Component) {
  _inherits(Mailto, _Component);

  function Mailto() {
    _classCallCheck(this, Mailto);

    return _possibleConstructorReturn(this, (Mailto.__proto__ || Object.getPrototypeOf(Mailto)).apply(this, arguments));
  }

  _createClass(Mailto, [{
    key: 'render',
    value: function render() {
      return this.props.obfuscate ? this.renderObfuscatedLink() : this.renderLink();
    }
  }, {
    key: 'renderLink',
    value: function renderLink() {
      var _props = this.props,
          email = _props.email,
          obfuscate = _props.obfuscate,
          headers = _props.headers,
          children = _props.children,
          others = _objectWithoutProperties(_props, ['email', 'obfuscate', 'headers', 'children']);

      return _react2.default.createElement(
        'a',
        _extends({ href: createMailtoLink(email, headers) }, others),
        children
      );
    }
  }, {
    key: 'renderObfuscatedLink',
    value: function renderObfuscatedLink() {
      var _props2 = this.props,
          email = _props2.email,
          obfuscate = _props2.obfuscate,
          headers = _props2.headers,
          children = _props2.children,
          others = _objectWithoutProperties(_props2, ['email', 'obfuscate', 'headers', 'children']);

      return _react2.default.createElement(
        'a',
        _extends({ onClick: this.handleClick.bind(this), href: 'mailto:obfuscated' }, others),
        children
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      var _props3 = this.props,
          email = _props3.email,
          headers = _props3.headers;

      window.location.href = createMailtoLink(email, headers);
    }
  }]);

  return Mailto;
}(_react.Component);

Mailto.propTypes = {
  children: _propTypes2.default.node.isRequired,
  email: _propTypes2.default.string.isRequired,
  headers: _propTypes2.default.object,
  obfuscate: _propTypes2.default.bool
};

Mailto.defaultProps = {
  obfuscate: false
};

exports.default = Mailto;
