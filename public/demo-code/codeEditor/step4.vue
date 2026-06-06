<!-- Example rendered above (CodeEditor.vue) -->
<template>
    <div class="set-wrapper">
        <div class="set-title">Code Editor</div>
        <div class="set-demo-box-wrapper">
            <div class="set-demo-box">
                <VCodeEditor v-model="code"></VCodeEditor>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import VCodeEditor from './components/VCodeEditor.vue';
import 'vorium-ui/dist/vorium-ui.css'

const codeStr = 
`
function becomeSuccessful() {
    const skills = [
        "Learn",
        "Practice",
        "Build"
    ];

    skills.forEach(skill => {
        console.log(skill);
    });

    console.log("Repeat until successful.");
}

becomeSuccessful();
`

export default {
    name: 'CodeEditor',
    components:{
        VCodeEditor, demoCode
    },
    setup(){
        let code = ref(codeStr);

        return {
            code,
        }
    }
}
</script>

<style scoped>
    .set-wrapper{
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
    }
    .set-title{
        color: white;
        font-size: 18px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .set-demo-box-wrapper{
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        box-sizing: border-box;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .set-demo-box{
        width: 45%;
        height: 500px;
    }
</style>