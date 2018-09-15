import * as style from './button.scss';

export default {
  template: require('./button.html'),
  data: () => ({
    style
  }),
  props: {
    onClick: Function,
    text: String,
    type: String
  }
}
