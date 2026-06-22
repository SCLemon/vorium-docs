<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Dropdown</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VRadio v-model="select1" label="水果" value="fruit"/>
                    <VRadio v-model="select1" label="蛋糕" value="cake"/>
                    <VRadio v-model="select1" label="飲料" value="drink"/>
                    <VRadio v-model="select1"  disabled label="零食" value="snack"/>
                    <VRadio v-model="select1" label="冰品" value="ice"/>
                </div>
                <div class="set-demo-box">
                    <VRadio v-model="select2" hasBorder label="水果" value="fruit"/>
                    <VRadio v-model="select2" hasBorder label="蛋糕" value="cake"/>
                    <VRadio v-model="select2" hasBorder label="飲料" value="drink"/>
                    <VRadio v-model="select2" hasBorder disabled label="零食" value="snack"/>
                    <VRadio v-model="select2" hasBorder label="冰品" value="ice"/>
                </div>
                <div class="set-demo-box">
                    <VRadio v-model="select3" radioTheme="black" hasBorder label="水果" value="fruit"/>
                    <VRadio v-model="select3" radioTheme="black" hasBorder label="蛋糕" value="cake"/>
                    <VRadio v-model="select3" radioTheme="black" hasBorder label="飲料" value="drink"/>
                    <VRadio v-model="select3" radioTheme="black" hasBorder disabled label="零食" value="snack"/>
                    <VRadio v-model="select3" radioTheme="black" hasBorder label="冰品" value="ice"/>
                </div>
                <div class="set-demo-box">
                    <VRadio v-model="select4" hasBorder :showRadio="false" label="水果" value="fruit"/>
                    <VRadio v-model="select4" hasBorder :showRadio="false" label="蛋糕" value="cake"/>
                    <VRadio v-model="select4" hasBorder :showRadio="false" label="飲料" value="drink"/>
                    <VRadio v-model="select4" hasBorder :showRadio="false" disabled label="零食" value="snack"/>
                    <VRadio v-model="select4" hasBorder :showRadio="false" label="冰品" value="ice"/>
                </div>
            </div>
        </div>
        <demo-code :code="demo_code" title="Examples"></demo-code>
        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>
import { VRadio } from 'vorium-ui';
import { ref, onMounted } from 'vue';
import 'vorium-ui/dist/vorium-ui.css'
import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';

export default {
    name:'Select',
    components:{
        VRadio, DemoCode, ParameterList
    },
    setup(){

        const url = process.env.BASE_URL+'demo-code/RadioDemo.vue'

        const select1 = ref('fruit')
        const select2 = ref('fruit')
        const select3 = ref('fruit')
        const select4 = ref('fruit')

        let demo_code = ref('');
        
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'v-model',
                description: 'The current selected value of the radio group. Supports two-way binding via v-model.',
                type: 'Any',
                necessity: 'Required',
                options: '-',
                default: 'null'
            },
            {
                name: 'value',
                description: 'The value represented by this radio option. When it matches v-model, the radio is selected.',
                type: 'Any',
                necessity: 'Required',
                options: '-',
                default: 'null'
            },
            {
                name: 'label',
                description: 'The text content displayed next to the radio button.',
                type: 'String',
                necessity: 'Required',
                options: '-',
                default: "''"
            },
            {
                name: 'width',
                description: 'Sets the width of the radio wrapper.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS width value',
                default: "100%"
            },
            {
                name: 'height',
                description: 'Sets the height of the radio wrapper.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS height value',
                default: "38px"
            },
            {
                name: 'fontSize',
                description: 'Controls the font size of the label text.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS font-size value',
                default: "16px"
            },
            {
                name: 'disabled',
                description: 'Disables user interaction and prevents the radio from being selected.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'hasBorder',
                description: 'Displays a bordered container around the radio component.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'showRadio',
                description: 'Controls whether the native radio input is displayed.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'radioTheme',
                description: 'Defines the visual theme of the native radio input accent color.',
                type: 'String',
                necessity: 'Optional',
                options: 'white | black',
                default: "white"
            }
        ]

        return {
            demo_code, parameters, select1, select2, select3, select4
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
        padding-top: 10px;
        padding-bottom: 30px;
        padding-left: 30px;
        padding-right: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        box-sizing: border-box;
        align-items: center;
        gap: 60px;
    }
    .set-demo-box{
        margin: 0 auto;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-top: 20px;
    }
</style>