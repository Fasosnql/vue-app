import * as style from './files-list-table.scss';

import Progress from 'modules/progress/index';

export default {
  template: require('./files-list-table.html'),
  data: () => ({
    style
  }),
  props: {
    filesList: Array
  },
  components: {
    Progress
  }
}
