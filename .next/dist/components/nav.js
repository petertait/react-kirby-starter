'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/peter/Repos/react-kirby-starter/components/nav.js';
// import apiUrl from '../constants'


var apiUrl = 'http://localhost:3000/api';

var Nav = function (_React$Component) {
  (0, _inherits3.default)(Nav, _React$Component);

  function Nav(props) {
    (0, _classCallCheck3.default)(this, Nav);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call(this, props));

    _this.state = {
      nav: []
    };
    return _this;
  }

  (0, _createClass3.default)(Nav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch(apiUrl).then(function (data) {
        return data.json();
      }).then(function (data) {
        // console.log(data)
        _this2.setState({
          nav: data.data
        });

        console.log(_this2.state.nav);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var nav = this.state.nav;
      var links = this.state.nav.map(function (link) {
        return _react2.default.createElement('li', {
          key: link.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, _react2.default.createElement(_link2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, _react2.default.createElement('a', { href: link.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, link.title)));
      });
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, links));
    }
  }]);

  return Nav;
}(_react2.default.Component);

exports.default = Nav;