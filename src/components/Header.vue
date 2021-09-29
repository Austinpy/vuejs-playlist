<template>

  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>

</template>

<script>
import { bus } from '../main'
// exports an object to be available for use in main.js
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    changeTitle: function(){
      // this.$emit('changeTitle', 'Vue Changed Title');
      // sets title in this component
      this.title = 'Vue Bus';
      // sets title on the bus B-)
      bus.$emit('titleChanged', 'Vue Bus');
    }
  }
}
</script>

<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
