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
      this.props.update('FUCK YEAH');
      this.props.increment();
    }
  }
  render() {
    this.title.textContent = this.props.sample;
    this.count.textContent = this.props.count;
  }
}

const mapStateToProps = state => ({
  sample: selectors.sample(state),
  count: selectors.count(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: value =>
    dispatch(actions.update(value)),
  increment: () =>
    dispatch(actions.increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);