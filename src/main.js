// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import {sync} from 'vuex-router-sync'
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhhOTZiOTE5OGJkMDZlNGE2YTQ3NWI4ZTc5NTE3ZGRiMzcyNjAzYmE4NTk5ODZiNjZjMjVmZmVhZThhZjM3NWRjMDBhZjdmYjg5ZThhMDA1In0.eyJhdWQiOiIyIiwianRpIjoiOGE5NmI5MTk4YmQwNmU0YTZhNDc1YjhlNzk1MTdkZGIzNzI2MDNiYTg1OTk4NmI2NmMyNWZmZWFlOGFmMzc1ZGMwMGFmN2ZiODllOGEwMDUiLCJpYXQiOjE1NDAzODY1MTIsIm5iZiI6MTU0MDM4NjUxMiwiZXhwIjoxNTcxOTIyNTExLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.vmstEMZXSy_xCqnbBzT_ELGDgnVOZi5pwfe9Cholvyiv2maV8jrzne5fbImPHlQUF90Av5uMz3SQ851NhulTWnztd_U3n7YnXh8FhZ7BRwFCbFkTOuCfmqJ9eNfYAWjr3scrWiDN5rcge9_aUd0LgOHzjUwcLFl4pJJgOhpSJDFWtHPajR59J7_GekKzvjv6IIFuSH_f9zhSixyBstBg3X4qTX-NYQVYQWfCtJMEdHP5uDaUWoeUgTfG1uVolnz-Y93CPoBiW3mmFGN7unjGBw-cWzHXUnJcVDSc0bJFrnwJHxNMHGPiPkw8b78Nvoi4shjWmohyOpFXfpqSnLltrBqPD0HrsMZe0NCElR2pnqK77vvRjnExFG4vuZgfkU6hR1IWH5ecdqtmuId0yvRYz99wIdbNR7T_0tkszwcc3oiWpTW9ZAy5cp2iJSTUcAjZOGsgxw7LoHNQBkzKeOZmKqk_1MWZlIMfNca0onnGIaO5qyhk6GEoayceqIpRQJX091pwwzdi6h0-_Uk3jdh-0YqFB56uaNK0Rbkv2RuA3Dw-_fRFcJPIqYwWVK_Lo4NS0g92mm0bpdP3QQD3JlbrHW37AsVmHxogPJnoBywaAXF6RJniZB7b8VGKKAGb20sJHdAvUAMwdslt3lZaSWCBRBq5-wjhjALGYWaHp1iJFoo')
  next()
})

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
