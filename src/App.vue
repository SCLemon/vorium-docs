<template>
  <div class="view-wrapper">
    <div class="column">
      <Column></Column>
    </div>
    <div class="view_box">
      <Topic></Topic>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Column from './components/Column.vue';
import Topic from './components/Topic.vue';

export default {
  name:'App',
  components:{
    Column, Topic
  },
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
  }
  .view_box{
    width: calc(100vw - 300px);
    min-width: 1140px;
    height: 100vh;
    box-sizing: border-box;
  }
  .view{
    width: 100%;
    height: calc(100vh - 80px);
    box-sizing: border-box;
    padding-bottom: 20px;
    overflow-y: scroll;
  }
  .column{
    width: 300px;
    overflow-y: scroll;
    height: 100vh;
    box-sizing: border-box;
  }
  *::-webkit-scrollbar{
    display: none;
  }
  *{
    font-family: "Inter", sans-serif;
  }
</style>