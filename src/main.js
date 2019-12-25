
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Application imports
import App from './App'
import router from './routes'
import store from './store';
import Chartkick from 'vue-chartkick';
import chart from 'chart.js';

Vue.use(Chartkick.use(chart));


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
