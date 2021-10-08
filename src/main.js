import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// HTTP get/post
Vue.use(VueResource);

// Global directives
Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value === 'wide'){
      el.style.maxWidth = "1200px";
    } else if (binding.value === 'narrow'){
      el.style.maxWidth = "560px";
    }
    if(binding.arg === 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

// Global Event Bus
export const bus = new Vue();

// Main Vue instance
new Vue({
  el: '#app',
  render: h => h(App)
})
