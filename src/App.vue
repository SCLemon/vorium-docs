<template>
  <div class="view-wrapper">
    <Column></Column>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Column from './components/Column.vue';

export default {
  name:'App',
  components:{
    Column
  },
  setup(){
    return {
      Column
    }
  }
}
</script>

<style>
  .view-wrapper{
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    background: black;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .view{
    width: calc(100vw - 300px);
    height: 100vh;
    box-sizing: border-box;
  }
</style>