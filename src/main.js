import 'babel-polyfill'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import {getRuntimeArgs} from './runtime-args'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueCompositionApi)
Vue.config.productionTip = false

const esm = importCall => importCall.then(mod => mod.default || mod)

getRuntimeArgs().then(async () => {
  const router = await esm(import('./router'))
  const store = await esm(import('./store'))
  const {createProvider} = await esm(import('./apollo/'))
  const App = await esm(import('./app.vue'))

  new Vue({
    router,
    store,
    apolloProvider: createProvider(),
    ...App,
  }).$mount('#app')
})
