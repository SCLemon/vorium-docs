<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Dropdown</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VSelect direction="bottom" v-model="selected" :list="list"></VSelect>
                </div>
                <div class="set-demo-box">
                    <VSelect direction="bottom" disabled="true" v-model="selected" :list="list"></VSelect>
                </div>
                <div class="set-demo-box">
                    <VSelect direction="top" v-model="selected" :list="list" :maxVisibleItems="2"></VSelect>
                </div>
                <div class="set-demo-box2">
                    <VSelect direction="bottom" :hasBorder="false" v-model="selected2" :list="list2" textAlign="center"></VSelect>
                </div>
                <div class="set-demo-box">
                    <VSelect direction="bottom" v-model="selected" :list="[]"></VSelect>
                </div>
            </div>
        </div>
        <demo-code :code="demo_code" title="Examples"></demo-code>
        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>
import { VSelect } from 'vorium-ui';
import { ref,reactive, onMounted } from 'vue';
import 'vorium-ui/dist/vorium-ui.css'
import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';

export default {
    name:'Select',
    components:{
        VSelect, DemoCode, ParameterList
    },
    setup(){

        let selected = ref(null);
        let selected2 = ref({ label: '720p', value: 720, disabled: false });

        const list = reactive([
            { label: '蘿蔔糕', value: '菜頭糕', disabled: false },
            { label: '煎餅', value: '煎餅', disabled: false },
            { label: '蛋餅', value: '蛋餅', disabled: false },
            { label: '蔥抓餅', value: '蔥抓餅', disabled: false },
            { label: '超級無敵豪華雙層起司培根牛肉漢堡套餐加大薯條與可樂', value: 'burger', disabled: true },
            { label: '鐵板麵', value: '鐵板麵', disabled: true },
            { label: '三明治', value: '三明治' , disabled: true},
            { label: '蘿蔔糕加蛋', value: '蘿蔔糕加蛋', disabled: false },
            { label: '飯糰', value: '飯糰', disabled: true },
            { label: '燒餅油條搭配特大杯冰豆漿早餐組合', value: 'breakfast', disabled: true }
        ]);

        const list2 = reactive([
            { label: '360p', value: 360, disabled: false },
            { label: '480p', value: 480, disabled: false },
            { label: '720p', value: 720, disabled: false },
            { label: '1080p', value: 1080, disabled: false },
            { label: '1440p', value: 1440, disabled: false },
        ]);

        const url = process.env.BASE_URL+'demo-code/SelectDemo.vue'
        
        let demo_code = ref('');
        
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'v-model',
                description: 'The currently selected option object. Used with v-model for two-way binding.',
                type: 'Object',
                necessity: 'Required',
                options: '-',
                default: 'null'
            },
            {
                name: 'direction',
                description: 'Determines whether the dropdown menu is displayed above or below the select component.',
                type: 'String',
                necessity: 'Optional',
                options: 'top | bottom',
                default: 'bottom'
            },
            {
                name: 'width',
                description: 'Sets the width of the select component.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS width value',
                default: '100%'
            },
            {
                name: 'height',
                description: 'Sets the height of the select component and each dropdown item.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS height value',
                default: '35px'
            },
            {
                name: 'fontSize',
                description: 'Defines the font size used by the select component and dropdown items.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS font-size value',
                default: '12px'
            },
            {
                name: 'textAlign',
                description: 'Defines the horizontal alignment of the text displayed in each dropdown item.',
                type: 'String',
                necessity: 'Optional',
                options: 'left | center | right',
                default: 'left'
            },
            {
                name: 'placeholder',
                description: 'Placeholder text displayed when no option is selected.',
                type: 'String',
                necessity: 'Optional',
                options: '-',
                default: 'Select Something...'
            },
            {
                name: 'disabled',
                description: 'Disables user interaction with the select component.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'maxVisibleItems',
                description: 'Maximum number of dropdown items visible before vertical scrolling is enabled.',
                type: 'Number',
                necessity: 'Optional',
                options: 'Any positive integer',
                default: '4'
            },
            {
                name: 'emptyText',
                description: 'Text displayed when the option list is empty.',
                type: 'String',
                necessity: 'Optional',
                options: '-',
                default: 'Nothing here'
            },
            {
                name: 'hasBorder',
                description: 'Controls whether a border is rendered around the select component and dropdown.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'borderColor',
                description: 'Defines the border color used by the select component and dropdown.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS color value',
                default: 'rgba(255,255,255,0.12)'
            },
            {
                name: 'dropDownBackground',
                description: 'Sets the background color of the dropdown menu.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS color value',
                default: 'black'
            },
            {
                name: 'arrowPosition',
                description: 'Defines the horizontal position of the dropdown arrow indicator.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS length value',
                default: '40px'
            },
            {
                name: 'arrowSize',
                description: 'Defines the size of the dropdown arrow indicator.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS length value',
                default: '8px'
            },
            {
                name: 'list',
                description: 'Defines the selectable options displayed in the dropdown menu. Each item should contain label, value, and an optional disabled property.',
                type: 'Array<Object>',
                necessity: 'Optional',
                options: `
        [
            {
                label: String,
                value: Any,
                disabled?: Boolean
            }
        ]
                `,
                default: '[]'
            }
        ]

        return {
            demo_code, parameters, list, list2, selected, selected2
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
        gap:60px;
    }
    .set-demo-box{
        width: 150px;
    }
    .set-demo-box2{
        width: 100px;
    }
    .demo-item{
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
    }
    .demo-item:hover{
        cursor: pointer;
        background: rgba(255,255,255,0.075);
    }
</style>