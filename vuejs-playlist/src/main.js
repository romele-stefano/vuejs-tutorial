import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'

// Use vue-resource package
Vue.use(VueResource)
Vue.use(VueRouter)

// create new instance of VueRouter
const router = new VueRouter({
  // mode history to remove # from url
  mode: 'history',
  routes: Routes
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    if (binding.value == 'wide'){
      // use camelCase if more than one word
      el.style.maxWidth = "1260px";
    } else if (binding.value = 'narrow'){
      el.style.maxWidth = "560px";
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})