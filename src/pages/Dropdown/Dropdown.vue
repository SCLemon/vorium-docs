<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Dropdown</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VDropdown placement="top">
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                    </VDropdown>
                </div>
                <div class="set-demo-box">
                    <VDropdown placement="left" arrow-position="15px">
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                    </VDropdown>
                </div>
                <div class="set-demo-box">
                    <VDropdown placement="right" arrow-position="15px">
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                    </VDropdown>
                </div>
                <div class="set-demo-box">
                    <VDropdown placement="bottom">
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                        <div class="demo-item">hello world</div>
                    </VDropdown>
                </div>
            </div>
        </div>
        <demo-code :code="demo_code" title="Examples"></demo-code>
        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>
import { VDropdown } from 'vorium-ui';
import { ref, onMounted } from 'vue';
import 'vorium-ui/dist/vorium-ui.css'
import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';

export default {
    name:'Dropdown',
    components:{
        VDropdown, DemoCode, ParameterList
    },
    setup(){
        const url = process.env.BASE_URL+'demo-code/DdownDemo.vue'
        
        let demo_code = ref('');
        
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'placement',
                description: 'Determines the side on which the dropdown arrow is rendered relative to the dropdown container.',
                type: 'String',
                necessity: 'Optional',
                options: 'top | right | bottom | left',
                default: 'bottom'
            },
            {
                name: 'width',
                description: 'Sets the width of the dropdown container. Accepts any valid CSS width value.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS width value',
                default: '100%'
            },
            {
                name: 'minHeight',
                description: 'Sets the minimum height of the dropdown container.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS length value',
                default: '30px'
            },
            {
                name: 'isVisible',
                description: 'Controls the visibility state of the dropdown. Visibility changes are animated using opacity transitions.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'background',
                description: 'Sets the background color of the dropdown container and arrow.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS color value',
                default: 'black'
            },
            {
                name: 'hasBorder',
                description: 'Controls whether a border is rendered around the dropdown container and arrow.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'dropDownBorderColor',
                description: 'Sets the border color of the dropdown container.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS color value',
                default: 'rgba(255,255,255,0.12)'
            },
            {
                name: 'arrowBorderColor',
                description: 'Sets the border color of the dropdown arrow independently from the container border.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS color value',
                default: 'rgba(255,255,255,0.12)'
            },
            {
                name: 'arrowPosition',
                description: 'Controls the position of the dropdown arrow along the corresponding edge. Accepts percentages or CSS length values.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS percentage or length value',
                default: '50%'
            },
            {
                name: 'arrowSize',
                description: 'Sets the size of the dropdown arrow triangle.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS length value',
                default: '8px'
            }
        ]

        return {
            demo_code, parameters
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
        width: 120px;
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