<template>
  <div>
<!--                                Learn nested components -->
<!--    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>-->
<!--    <app-trucks v-bind:trucks="trucks"></app-trucks>-->
<!--    <app-footer v-bind:title="title"></app-footer>-->
<!-- -->
<!--                                Learn Dynamic Components -->
<!-- -->
<!--    <form-helper>-->
<!--      <div slot="form-header">-->
<!--        <h3>Form title here</h3>-->
<!--        <p>Info about this form could go here</p>-->
<!--      </div>-->
<!--      <div slot="form-fields">-->
<!--        <input type="text" placeholder="Name" required />-->
<!--        <input type="password" placeholder="Password" required />-->
<!--      </div>-->
<!--      <div slot="form-controls">-->
<!--        <button v-on:click="handleSubmit">Submit</button>-->
<!--      </div>-->
<!--    </form-helper>-->
<!-- -->
<!--                               Learn Input Binding -->
<!-- -->
<!--    <add-blog></add-blog>-->
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Trucks from './components/Trucks.vue';
import Footer from './components/Footer.vue';
import formHelper from './components/formHelper.vue';
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default {
  components: {
    'app-header': Header,
    'app-trucks': Trucks,
    'app-footer': Footer,
    'form-helper': formHelper,
    'add-blog': addBlog,
    'show-blogs': showBlogs
  },
  data () {
    return {
      trucks: [
        {name: 'Silverado 1500', size: '1/2 Ton', show: false},
        {name: 'Silverado 2500', size: '3/4 Ton', show: false},
        {name: 'F-150', size: '1/2 Ton', show: false},
        {name: 'F-250', size: '3/4 Ton', show: false},
        {name: 'Ram 1500', size: '1/2 Ton', show: false},
        {name: 'Ram 2500', size: '3/4 Ton', show: false},
        {name: 'Tacoma', size: '1/4 Ton', show: false},
        {name: 'Tundra', size: '1/2 Ton', show: false},
        {name: 'Cybertruck', size: '1/4 Ton', show: false},
      ],
      title: "Vue Trucks"
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    },
    handleSubmit: function(){
      console.log('test');
    }
  }
}
</script>

<style>

</style>
