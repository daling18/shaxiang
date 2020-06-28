import Vue from 'vue'

import router from './router'
import store from './store'
import {createProvider} from './vue-apollo'
import {typeDefs, resolvers} from './graphql/schema'
import App from './app.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider({typeDefs, resolvers}),
  render: h => h(App),
}).$mount('#app')
