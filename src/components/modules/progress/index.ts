import * as style from './progress.scss';

export default {
  template: require('./progress.html'),
  data: () => ({
    style,
  }),
  props: {
    progress: {},
    size: 0,
    speed: 0
  }
}
