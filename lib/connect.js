function connect(mapStateToProps, mapDispatchToProps) {
  const store = window.__fluxo__.store;

  return function (Component) {
    function Container(selector) {
      Component.call(this, selector);
      for (let key in props) {
        store.observe(key, (value) => {
          Container.prototype.props[key] = value;
          Component.prototype.render.call(this);
        });
      }
    };

    let props = mapStateToProps(store.getState());
    Container.prototype.props = Object.assign(
      props,
      mapDispatchToProps(store.dispatch, Component.prototype.props)
    );

    Object.setPrototypeOf(Container.prototype, Component.prototype);
    return Container;
  }
}
export default connect;
