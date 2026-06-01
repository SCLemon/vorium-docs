<template>
  <div class="view-wrapper">
    <Column class="column"></Column>
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
    background: black;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: scroll;
  }
  .view{
    width: calc(100vw - 300px);
    min-width: 1140px;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  .column{
    width: 300px;
    min-width: 300px;
    overflow-y: scroll;
    height: 100vh;
    box-sizing: border-box;
  }
</style>