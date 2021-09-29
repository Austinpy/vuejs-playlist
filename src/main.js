import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

// Custom directives
Vue.directive('rainbow', {
  // bind is like a life-cycle hook that executes when the v-rainbow is called
  // el is the element, binding is the v-rainbow="this stuff here", vnode not important rn
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})
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

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
