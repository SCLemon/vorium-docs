<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">InputNumber</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <v-input-number v-model="number1"></v-input-number>
                </div>
                <div class="set-demo-box">
                    <v-input-number v-model="number2"></v-input-number>
                </div>
                <div class="set-demo-box">
                    <v-input-number v-model="number3"></v-input-number>
                </div>
                <div class="set-demo-box">
                    <v-input-number v-model="number4" :disabled="true"></v-input-number>
                </div>
            </div>
        </div>
        <demo-code :code="demo_code" title="Examples"></demo-code>
        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>
import { VInputNumber } from 'vorium-ui';
import { ref, onMounted } from 'vue';
import 'vorium-ui/dist/vorium-ui.css'
import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';

export default {
    name:'Select',
    components:{
        VInputNumber, DemoCode, ParameterList
    },
    setup(){

        const url = process.env.BASE_URL+'demo-code/InputNumberDemo.vue'
        const number1 = ref(0)
        const number2 = ref(100)
        const number3 = ref(-100)
        const number4 = ref(0)

        let demo_code = ref('');
        
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'v-model',
                description: 'The current numeric value of the input. Supports two-way binding via v-model.',
                type: 'Number',
                necessity: 'Required',
                options: '-',
                default: '0'
            },
            {
                name: 'width',
                description: 'Sets the width of the component. A minimum width of 100px is always enforced.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS width value (min-width: 100px)',
                default: '100%'
            },
            {
                name: 'height',
                description: 'Sets the height of the component.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS height value',
                default: '38px'
            },
            {
                name: 'fontSize',
                description: 'Sets the font size of the numeric input value.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS font-size value',
                default: '14px'
            },
            {
                name: 'iconSize',
                description: 'Sets the size of the increase and decrease icons.',
                type: 'Number',
                necessity: 'Optional',
                options: 'Any positive number',
                default: '16'
            },
            {
                name: 'min',
                description: 'Defines the minimum allowed value.',
                type: 'Number',
                necessity: 'Optional',
                options: 'Any valid number',
                default: '-100'
            },
            {
                name: 'max',
                description: 'Defines the maximum allowed value.',
                type: 'Number',
                necessity: 'Optional',
                options: 'Any valid number',
                default: '100'
            },
            {
                name: 'step',
                description: 'Specifies the increment or decrement amount for each interaction.',
                type: 'Number',
                necessity: 'Optional',
                options: 'Any positive number',
                default: '1'
            },
            {
                name: 'disabled',
                description: 'Disables the component and prevents user interaction.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'wheel',
                description: 'Enables value adjustment using the mouse wheel while hovering over the input.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            }
        ]

        return {
            demo_code, parameters, number1, number2, number3, number4
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
        justify-content: center;
        align-items: center;
        gap: 60px;
    }
    .set-demo-box{
        width: 15%;
    }
</style>