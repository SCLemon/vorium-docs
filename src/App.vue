<template>
  <div class="view-wrapper">
    <div class="column">
      <Column></Column>
    </div>
    <div class="view_box">
      <Topic></Topic>
      <div class="view" ref="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';
import Column from './components/Column.vue';
import Topic from './components/Topic.vue';


export default {
  name:'App',
  components:{
    Column, Topic
  },
  setup(){
      const view = ref();
      const route = useRoute();
      watch(()=>route.name, (newName) => {

          const target = view.value;
          if(!target) return;
          target.scrollTo({top: 0, behavior: 'smooth'})

      }, { immediate: true })

      return {
        view
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
    overflow-y: auto;
  }
  .column{
    min-width: 300px;
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