<template>
  <div id="trucks">
    <ul>
      <li v-for="truck in trucks" v-on:click="truck.show = !truck.show">
        <h2>{{ truck.name }}</h2>
        <h3 v-show="truck.show">{{ truck.size }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteTruck">Delete Truck</button>
  </div>
</template>

<script>
export default {
  props: {
    trucks: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    deleteTruck: function(){
      this.trucks.pop()
    }
  }
}
</script>

<style>
#trucks{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
