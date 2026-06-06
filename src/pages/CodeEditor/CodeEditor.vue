<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Code Editor</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VCodeEditor v-model="code"></VCodeEditor>
                </div>
            </div>
        </div>
    
        <demo-code type="bash" title="Installation Dependency" :code="demo_code"></demo-code>
        <demo-code type="javascript" title="Configure Support Language" :code="demo_code2"></demo-code>
        <demo-code type="javascript" title="If Static class blocks are not enabled" :code="demo_code3"></demo-code>
        <demo-code title="Copy and Paste Source Code - VCodeEditor" :code="demo_code5"></demo-code>
        <demo-code title="Example - How To Use" :code="demo_code4"></demo-code>

        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import demoCode from '@/components/pageComponents/DemoCode.vue';
import parameterList from '@/components/pageComponents/ParameterList.vue';
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
        VCodeEditor, demoCode, parameterList
    },
    setup(){
        let code = ref(codeStr);

        const url = process.env.BASE_URL+'demo-code/codeEditor/step1.bash'
        const url2 = process.env.BASE_URL+'demo-code/codeEditor/step2.js'
        const url3 = process.env.BASE_URL+'demo-code/codeEditor/step3.js'
        const url4 = process.env.BASE_URL+'demo-code/codeEditor/step4.vue'
        const url5 = process.env.BASE_URL+'demo-code/codeEditor/step5.vue'
        let demo_code = ref('');
        let demo_code2 = ref('');
        let demo_code3 = ref('');
        let demo_code4 = ref('');
        let demo_code5 = ref('');
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
            demo_code2.value = await (await fetch(url2)).text();
            demo_code3.value = await (await fetch(url3)).text();
            demo_code4.value = await (await fetch(url4)).text();
            demo_code5.value = await (await fetch(url5)).text();
        })

        const parameters = [
            {
                name: 'modelValue',
                description: 'The content value of the editor. Supports v-model two-way binding.',
                type: 'String',
                necessity: 'Required',
                options: '-',
                default: "''"
            },
            {
                name: 'language',
                description: 'Sets the Monaco Editor language mode for syntax highlighting and language features. Refer to the Monaco Editor documentation for the complete list of supported languages.',
                type: 'String',
                necessity: 'Optional',
                options: 'javascript | typescript | html | css | json | markdown | ...',
                default: 'javascript'
            },
            {
                name: 'size',
                description: 'Controls editor font size, line height, and header size.',
                type: 'String',
                necessity: 'Optional',
                options: 'xs | sm | md | lg | xl',
                default: 'sm'
            },
            {
                name: 'autoResize',
                description: 'Automatically adjusts editor height based on content line count. When disabled, the editor fills the height of its parent container.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'theme',
                description: 'Defines the visual theme of the editor.',
                type: 'String',
                necessity: 'Optional',
                options: 'dark | light',
                default: 'dark'
            },
            {
                name: 'placeholder',
                description: 'Default content inserted when the editor is initially empty.',
                type: 'String',
                necessity: 'Optional',
                options: '-',
                default: '// Write your code here'
            },
            {
                name: 'minimap',
                description: 'Displays the Monaco Editor minimap panel.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'readOnly',
                description: 'Prevents users from editing the content.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'minRows',
                description: 'Minimum number of visible rows when autoResize is enabled.',
                type: 'Number',
                necessity: 'Optional',
                options: '-',
                default: '1'
            },
            {
                name: 'maxRows',
                description: 'Maximum number of visible rows when autoResize is enabled.',
                type: 'Number',
                necessity: 'Optional',
                options: '-',
                default: '-'
            },
            {
                name: 'maxLines',
                description: 'Limits the maximum number of lines allowed in the editor.',
                type: 'Number',
                necessity: 'Optional',
                options: '-',
                default: '-'
            },
            {
                name: 'header',
                description: 'Controls whether the editor header bar is displayed.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'headerTitle',
                description: 'Custom title displayed in the header. Falls back to language when empty.',
                type: 'String',
                necessity: 'Optional',
                options: '-',
                default: "''"
            },
            {
                name: '#action',
                description: 'Customizes the action area in the header. When provided, it replaces the default copy button and status indicators.',
                type: 'Slot',
                necessity: 'Optional',
                default: '-'
            }
        ]

        return {
            code, demo_code, demo_code2, demo_code3, demo_code4, demo_code5, parameters
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
        width: 100%;
        height: 500px;
    }
</style>