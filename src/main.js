import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { MdButton, MdField, MdMenu, MdList} from 'vue-material/dist/components'

Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdMenu)
Vue.use(MdList)

Vue.component('MdSelect', Vue.options.components.MdSelect.extend({
  methods: {
    isInvalidValue: function isInvalidValue () {
      return this.$el.validity ? this.$el.validity.badInput : this.$el.querySelector('input').validity.badInput
    }
  }
}))

new Vue({
  render: h => h(App),
}).$mount('#app')
