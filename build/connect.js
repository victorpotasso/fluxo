'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connect(mapStateToProps, mapDispatchToProps) {
  const { subscribe, dispatch, getState } = window.__fluxo__;

  return function (Component) {
    function Container(...args) {
      Component.call(this, ...args);
      Component.prototype.render.call(this);

      subscribe(() => {
        const newProps = mapStateToProps(getState);
        const oldProps = _lodash2.default.pick(Container.prototype.props, Object.keys(newProps));
        const isEqual = _lodash2.default.isEqual(oldProps, newProps);

        Container.prototype.props = _extends({}, Container.prototype.props, newProps);

        if (!isEqual) Component.prototype.render.call(this);
      });
    };

    Container.prototype.props = _extends({}, mapStateToProps(getState), mapDispatchToProps(dispatch, Component.prototype.props));

    Object.setPrototypeOf(Container.prototype, Component.prototype);

    return Container;
  };
}
exports.default = connect;