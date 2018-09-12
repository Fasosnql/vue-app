import Vue from 'vue'
import { MdEmptyState, MdIcon } from 'vue-material/dist/components'

import inputUpload from 'modules/select-file-button/index';

Vue.use(MdEmptyState);
Vue.use(MdIcon);

export default {
  template: require('./app.html'),
  methods: {
    onSelect(e) {
      //TODO: handler on select
    }
  },
  components: {
    inputUpload
  }
}
