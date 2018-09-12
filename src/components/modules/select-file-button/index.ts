import * as style from './select-file-button.scss';

export default {
  template: require('./select-file-button.html'),
  data: () => ({
    style
  }),
  props: {
    onSelect: Function
  }
}
