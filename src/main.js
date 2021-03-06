import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import {createProvider} from './vue-apollo'
import {typeDefs, resolvers} from './graphql/schema'
import App from './app.vue'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  apolloProvider: createProvider({typeDefs, resolvers}),
  render: h => h(App),
}).$mount('#app')
