webpackHotUpdate(5,{

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/peter/Repos/react-kirby-starter/components/header.js';

// import apiUrl from '../constants'

var apiUrl = 'http://localhost:3000/about/api';

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    _this.state = {
      page: []
    };
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch(apiUrl).then(function (data) {
        return data.json();
      }).then(function (data) {
        console.log(data);
        _this2.setState({
          page: data[0]
        });

        console.log(_this2.state.page);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, page.title));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/peter/Repos/react-kirby-starter/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/peter/Repos/react-kirby-starter/components/header.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz82NTE4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7Ozs7O0FBQ1A7O0FBRUEsSUFBTSxTQUFTOztJQUVNO2tDQUNuQjs7a0JBQVksT0FBTzt3Q0FBQTs7c0lBRWpCOztVQUFLO1lBQ0c7QUFBTjtXQUVIOzs7Ozt3Q0FFbUI7bUJBQ2xCOztZQUFNLFFBQ0gsS0FBSztlQUFRLEtBQUs7QUFEckIsU0FFRyxLQUFLLGdCQUNKO2dCQUFRLElBQ1I7ZUFBSztnQkFDRyxLQUdSO0FBSEU7O2dCQUdNLElBQUksT0FBSyxNQUNwQjtBQUNGOzs7OzZCQUdDO1VBQU0sT0FBTyxLQUFLLE1BQ2xCOzZCQUNFOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0U7O29CQUFBO3NCQUFLO0FBQUw7QUFBQSxjQUdMOzs7OztFQTVCaUMsZ0JBQU07O2tCQUFyQixPIiwiZmlsZSI6IjUuNjY0MjE4YWRjOWNlM2RjMjQ3OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBhcGlVcmwgZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5jb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Fib3V0L2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZTogW11cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaChhcGlVcmwpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBhZ2U6IGRhdGFbMF1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwYWdlID0gdGhpcy5zdGF0ZS5wYWdlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT57cGFnZS50aXRsZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=