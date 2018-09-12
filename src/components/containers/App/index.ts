import Vue from 'vue'
import { MdButton, MdEmptyState, MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton);
Vue.use(MdEmptyState);
Vue.use(MdIcon);

export default {
  template: require('./app.html'),
  data: () => ({
    text: 'select'
  })
}