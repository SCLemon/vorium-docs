<template>
  <div class="stage">
    <VCodeEditor v-model="code"></VCodeEditor>
  </div>
</template>

<script>
import { ref } from 'vue'
import VCodeEditor from './components/VCodeEditor.vue';
export default {
    name: 'CodeEditor',
    components:{
        VCodeEditor
    },
    setup(){
        let code = ref('');
        return {
            code
        }
    }
}
</script>

<style scoped>
    .stage{
        width: 500px;
        height: 500px;
        margin: 0 auto;
        margin-top: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>