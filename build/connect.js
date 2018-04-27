"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function connect(mapStateToProps, mapDispatchToProps) {
  const { subscribe, dispatch, getState } = window.__fluxo__;

  return function (Component) {
    function Container(selector) {
      Component.call(this, selector);
      subscribe(() => {
        Container.prototype.props = _extends({}, Container.prototype.props, mapStateToProps(getState()));
        Component.prototype.render.call(this);
      });
    };

    Container.prototype.props = _extends({}, mapStateToProps(getState()), mapDispatchToProps(dispatch, Component.prototype.props));

    Object.setPrototypeOf(Container.prototype, Component.prototype);
    return Container;
  };
}
exports.default = connect;