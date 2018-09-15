import * as style from './files-list-table.scss';

export default {
  template: require('./files-list-table.html'),
  data: () => ({
    style
  }),
  props: {
    filesList: Array
  }
}
