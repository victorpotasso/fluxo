function connect(mapStateToProps, mapDispatchToProps) {
  const { subscribe, dispatch, getState } = window.__fluxo__;

  return function (Component) {
    function Container(...args) {
      Component.call(this, ...args);
      Component.prototype.render.call(this);

      subscribe(() => {
        Container.prototype.props = {
          ...Container.prototype.props,
          ...mapStateToProps(getState),
        }
        Component.prototype.render.call(this);
      });
    };

    Container.prototype.props = {
      ...mapStateToProps(getState),
      ...mapDispatchToProps(dispatch, Component.prototype.props),
    };

    Object.setPrototypeOf(Container.prototype, Component.prototype);

    return Container;
  }
}
export default connect;
