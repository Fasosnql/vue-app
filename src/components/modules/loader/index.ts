import * as style from './loader.scss';

export default {
  template: require('./loader.html'),
  data: () => ({
    style
  }),
  props: {
    show: Boolean
  }
}
