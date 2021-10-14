<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="searchParam" placeholder="Search Blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
export default {
  data () {
    return {
      blogs: [],
      searchParam: ""
    }
  },
  methods: {
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      // get first 10 elements
      this.blogs = data.body.slice(0,10);
    })
  },
  computed: {
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    },
    snippet(value){
      return value.slice(0,100) + '...';
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [
    searchMixin
  ]
}
</script>

<style>
input {
  padding: 10px;
}
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
