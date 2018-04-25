import connect from './../../lib/connect';
import * as selectors from './../data/selectors';
import * as actions from './../data/actions';

class HomeView {
  constructor(selector) {
    this.el = document.querySelector(selector);
    this.title = this.el.querySelector('.value-sample');
    this.count = this.el.querySelector('.value-count');
    this.button = this.el.querySelector('.btn-sample');

    this.button.addEventListener('click', this.onClick.bind(this));
    this.render();
  }

  onClick() {
    if (this.props.update) {
      const randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10).toUpperCase();
      this.props.update(randomString);
      this.props.increment();
    }
  }

  render() {
    console.log('Home::render props', this.props);
    this.title.textContent = this.props['home.sample'];
    this.count.textContent = this.props['home.counter.count'];
  }
}

const mapStateToProps = state => ({
  ['home.sample']: `Sample: ${selectors.sample(state)}`,
  ['home.counter.count']: selectors.count(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: value =>
    dispatch(actions.update(value)),
  increment: () =>
    dispatch(actions.increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
