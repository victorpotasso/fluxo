"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function connect(mapStateToProps, mapDispatchToProps) {
  const store = window.__fluxo__.store;

  return function (Component) {
    function Container(selector) {
      Component.call(this, selector);
      store.subscribe(() => {
        Container.prototype.props = Object.assign(Container.prototype.props, mapStateToProps(store.getState()));
        Component.prototype.render.call(this);
      });
    };

    Container.prototype.props = Object.assign(mapStateToProps(store.getState()), mapDispatchToProps(store.dispatch, Component.prototype.props));

    Object.setPrototypeOf(Container.prototype, Component.prototype);
    return Container;
  };
}
exports.default = connect;