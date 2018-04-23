import { connect } from './../../index';
import * as selectors from './../data/selectors';
import * as actions from './../data/actions';

class HomeView {
  constructor(selector) {
    this.el = document.querySelector(selector);
    this.title = this.el.querySelector('.value-sample');
    this.button = this.el.querySelector('.btn-sample');

    this.button.addEventListener('click', this.onClick.bind(this));
    this.render();
  }

  onClick() {
    if (this.props.update) this.props.update('FUCK YEAH');
  }
  render() {
    this.title.textContent = this.props.sample;
  }
}

const mapStateToProps = state => ({
  sample: selectors.sample(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: value =>
    dispatch(actions.update(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);