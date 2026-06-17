<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">TextArea</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VTextArea v-model="input"></VTextArea>
                </div>
                <div class="set-demo-box">
                    <VTextArea v-model="input" :disabled="true" placeholder="disabled = true"></VTextArea>
                </div>
                <div class="set-demo-box">
                    <VTextArea v-model="input" :hasBorder="false" placeholder="hasBorder = false"></VTextArea>
                </div>
                <div class="set-demo-box">
                    <VTextArea v-model="input" :setMaxLengthLimit="false" placeholder="setMaxLengthLimit = false"></VTextArea>
                </div>
            </div>
        </div>
        <demo-code :code="demo_code" title="Examples"></demo-code>
        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';
import { VTextArea } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
    name: 'TextArea',
    components:{
        VTextArea, DemoCode, ParameterList
    },
    setup(){
        const input = ref('');

        const url = process.env.BASE_URL+'demo-code/TextAreaDemo.vue'
        
        let demo_code = ref('');
        
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'v-model',
                description: 'The current value of the textarea. Supports two-way binding via v-model.',
                type: 'String',
                necessity: 'Optional',
                options: '-',
                default: "''"
            },
            {
                name: 'minRows',
                description: 'Defines the minimum number of visible rows displayed by the textarea.',
                type: 'Number',
                necessity: 'Optional',
                options: '>= 1',
                default: '1'
            },
            {
                name: 'maxRows',
                description: 'Defines the maximum number of visible rows before vertical scrolling is enabled.',
                type: 'Number',
                necessity: 'Optional',
                options: '>= minRows',
                default: '10'
            },
            {
                name: 'setMaxLengthLimit',
                description: 'Determines whether the maximum character length restriction is enabled.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'maxLength',
                description: 'Defines the maximum number of characters allowed in the textarea.',
                type: 'Number',
                necessity: 'Optional',
                options: '> 0',
                default: '100'
            },
            {
                name: 'fontSize',
                description: 'Defines the font size of the textarea content.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS font-size value',
                default: "14px"
            },
            {
                name: 'lineHeight',
                description: 'Defines the line height of the textarea content.',
                type: 'Number',
                necessity: 'Optional',
                options: '> 0',
                default: '1.35'
            },
            {
                name: 'textAlign',
                description: 'Defines the horizontal alignment of the textarea content.',
                type: 'String',
                necessity: 'Optional',
                options: "'left' | 'center' | 'right' | 'justify'",
                default: "left"
            },
            {
                name: 'placeholder',
                description: 'Defines the placeholder text displayed when the textarea is empty.',
                type: 'String',
                necessity: 'Optional',
                options: '-',
                default: "Input Something..."
            },
            {
                name: 'disabled',
                description: 'Determines whether the textarea is disabled and cannot be edited.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'readonly',
                description: 'Determines whether the textarea is read-only while still allowing text selection.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'hasBorder',
                description: 'Determines whether the textarea wrapper displays a border.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'borderColor',
                description: 'Defines the border color of the textarea wrapper.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS color value',
                default: "rgba(255,255,255,0.12)"
            }
        ]
        
        return {
            demo_code, parameters, input
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
        width: 22.5%;
    }
</style>