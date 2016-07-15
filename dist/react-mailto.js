'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMailtoLink = exports.toSearchString = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toSearchString = exports.toSearchString = function toSearchString() {
  var searchParams = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Mailto).apply(this, arguments));
  }

  _createClass(Mailto, [{
    key: 'render',
    value: function render() {
      return this.props.obfuscate ? this.renderObfuscatedLink() : this.renderLink();
    }
  }, {
    key: 'renderLink',
    value: function renderLink() {
      var _props = this.props;
      var email = _props.email;
      var obfuscate = _props.obfuscate;
      var headers = _props.headers;
      var children = _props.children;

      var others = _objectWithoutProperties(_props, ['email', 'obfuscate', 'headers', 'children']);

      return _react2.default.createElement(
        'a',
        _extends({ href: createMailtoLink(email, headers) }, others),
        children
      );
    }
  }, {
    key: 'renderObfuscatedLink',
    value: function renderObfuscatedLink() {
      var _props2 = this.props;
      var email = _props2.email;
      var obfuscate = _props2.obfuscate;
      var headers = _props2.headers;
      var children = _props2.children;

      var others = _objectWithoutProperties(_props2, ['email', 'obfuscate', 'headers', 'children']);

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
      var _props3 = this.props;
      var email = _props3.email;
      var headers = _props3.headers;

      window.location.href = createMailtoLink(email, headers);
    }
  }]);

  return Mailto;
}(_react.Component);

Mailto.propTypes = {
  children: _react.PropTypes.node.isRequired,
  email: _react.PropTypes.string.isRequired,
  headers: _react.PropTypes.object,
  obfuscate: _react.PropTypes.bool
};

Mailto.defaultProps = {
  obfuscate: false
};

exports.default = Mailto;