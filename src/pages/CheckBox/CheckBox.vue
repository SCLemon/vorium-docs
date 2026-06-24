
<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">CheckBox</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VCheckBoxGroup ref="group" v-model="fruits" :max="4">
                        <VCheckBoxOption label="Apple" value="apple" :disabled="true" :hasBorder="true"/>
                        <VCheckBoxOption label="Banana" value="banana" :hasBorder="true"/>
                        <VCheckBoxOption label="Orange" value="orange" :disabled="true" :hasBorder="true"/>
                        <VCheckBoxOption label="Mango" value="mango" :hasBorder="true"/>
                        <VCheckBoxOption label="Grape" value="grape" :hasBorder="true"/>
                        <VCheckBoxOption label="Pineapple" value="pineapple" :hasBorder="true"/>
                        <VCheckBoxOption label="Watermelon" value="watermelon" :hasBorder="true"/>
                    </VCheckBoxGroup>
                </div>
                <div class="set-demo-box">
                    <VButton class="btn-left" @click="selectAll">selectAll (Demo)</VButton>
                    <VButton type="ghost" class="btn-right" @click="clearAll">clearAll (Demo)</VButton>
                </div>
            </div>
        </div>
        <demo-code :code="demo_code" title="Examples"></demo-code>
        <parameter-list title="VCheckBoxGroup" :parameters="parameters1"></parameter-list>
        <parameter-list title="VCheckBoxOption" :parameters="parameters2"></parameter-list>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { VCheckBoxGroup, VCheckBoxOption, VButton } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'
import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';

export default {
    name:'Select',
    components:{
        VCheckBoxGroup, VCheckBoxOption, VButton, DemoCode, ParameterList
    },
    setup(){

        const url = process.env.BASE_URL+'demo-code/CheckBoxDemo.vue'

        const group = ref(null);
        const fruits = ref(['apple']);

        let demo_code = ref('');
        
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters1 = [
            {
                name: 'v-model',
                description: 'The selected values of the checkbox group. Supports two-way binding via v-model.',
                type: 'Array',
                necessity: 'Required',
                options: '-',
                default: '[]'
            },
            {
                name: 'width',
                description: 'Sets the width of the checkbox group container.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS width value',
                default: '100%'
            },
            {
                name: 'gap',
                description: 'Defines the spacing between checkbox options.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS gap value',
                default: '15px'
            },
            {
                name: 'min',
                description: 'Minimum number of selected options allowed. Disabled selected options are included in the count.',
                type: 'Number',
                necessity: 'Optional',
                options: '>= 0',
                default: 'undefined'
            },
            {
                name: 'max',
                description: 'Maximum number of selected options allowed. Disabled selected options are included in the count. When selectAll() is called, only the first max available options will be selected.',
                type: 'Number',
                necessity: 'Optional',
                options: '>= 0',
                default: 'undefined'
            },
            {
                name: 'clearAll()',
                description: 'Clears all selected options except disabled selected options.',
                type: 'Method',
                necessity: '-',
                options: '-',
                default: '-'
            },
            {
                name: 'selectAll()',
                description: 'Selects all available options. Disabled options are ignored. Respects the max limit and only selects up to the maximum allowed count.',
                type: 'Method',
                necessity: '-',
                options: '-',
                default: '-'
            }
        ]

        const parameters2 = [
            {
                name: 'value',
                description: 'The value associated with the checkbox option.',
                type: 'Any',
                necessity: 'Required',
                options: '-',
                default: 'null'
            },
            {
                name: 'label',
                description: 'The display text of the checkbox option.',
                type: 'String',
                necessity: 'Required',
                options: '-',
                default: ''
            },
            {
                name: 'width',
                description: 'Sets the width of the checkbox option.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS width value',
                default: 'fit-content'
            },
            {
                name: 'height',
                description: 'Sets the height of the checkbox option.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS height value',
                default: '38px'
            },
            {
                name: 'fontSize',
                description: 'Sets the font size of the checkbox label.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS font-size value',
                default: '16px'
            },
            {
                name: 'disabled',
                description: 'Disables the checkbox option. Disabled options cannot be toggled, are ignored by selectAll(), and are not affected by clearAll(). Disabled selected options are still counted toward min and max limits.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'hasBorder',
                description: 'Whether to display a border around the checkbox option.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'showCheckBox',
                description: 'Whether to display the native checkbox input.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'checkBoxTheme',
                description: 'Defines the visual theme of the checkbox input.',
                type: 'String',
                necessity: 'Optional',
                options: 'white | black',
                default: 'white'
            }
        ]

        function clearAll(){
            group.value.clearAll()
        }

        function selectAll(){
            group.value.selectAll()
        }

        return {
            demo_code, parameters1, parameters2, group, fruits, clearAll, selectAll
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
        padding-top: -10px;
        padding-bottom: 40px;
        padding-left: 30px;
        padding-right: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        box-sizing: border-box;
        align-items: center;
        gap: 60px;
    }
    .set-demo-box{
        margin: 0 auto;
        width: fit-content;
        display: flex;
        justify-content: left;
        align-items: center;
        margin-top: 40px;
    }
    .btn-right{
        margin-left: 20px;
    }
</style>