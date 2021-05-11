<template>
  <h1 class="title">TO-DO LISTS</h1>
  <to-do />
</template>

<script>
import todo from './views/ToDo'
import ToDo from './views/ToDo.vue'
export default {
  components: { ToDo },
  compoents:{
    "to-do": todo
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .title{
    border:none;
    color: #4aa96c;
  }
</style>
