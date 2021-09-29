<template>

  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>

</template>

<script>
import { bus } from '../main'
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyright: 'Copyright 2021'
    }
  },
  created(){
    // on event 'titleChanged', take data (defined in emit 2nd param) and arrow funct set title in this component = to data passed in
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
  }
}
</script>

<style scoped>
footer{
  background: #222;
  padding: 6px;
}
p{
  color: lightgreen;
  text-align: center;
}
</style>
