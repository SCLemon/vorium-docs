<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Slider</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VSlider v-model="progress"></VSlider>
                </div>
                <div class="set-demo-box">
                    <VSlider v-model="progress" :showTips="false"></VSlider>
                </div>
                <div class="set-demo-box">
                    <VSlider v-model="progress" :disabled="true"></VSlider>
                </div>
                <div class="set-demo-box">
                    <VSlider v-model="progress" color="#ef4444"></VSlider>
                </div>
                <div class="set-demo-box">
                    <VSlider v-model="progress" :tipText="progress.toFixed(1)">
                        <template #prepend><div class="demo-prepend"><VIcon :icon="VolumeHighIcon" :size="16"></VIcon></div></template>
                        <template #append><div class="demo-append">{{ progress.toFixed(1) }} %</div></template>
                    </VSlider>
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
import { VSlider, VIcon } from 'vorium-ui'
import { VolumeHighIcon } from 'vorium-ui/icons'
import 'vorium-ui/icons/icons.css'
import 'vorium-ui/dist/vorium-ui.css'

export default {
    name: 'Switch',
    components:{
        VSlider, VIcon, DemoCode, ParameterList
    },
    setup(){
        
 const progress = ref(50);

    
        const url = process.env.BASE_URL+'demo-code/SliderDemo.vue'
        
        let demo_code = ref('');
        
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'v-model',
                description: 'The current slider value. Supports two-way binding via v-model.',
                type: 'Number',
                necessity: 'Required',
                options: '0 ~ 100',
                default: '0'
            },
            {
                name: 'height',
                description: 'Defines the thickness of the slider track and progress bar.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS size value',
                default: '4.5px'
            },
            {
                name: 'circleRadius',
                description: 'Defines the diameter of the slider thumb controller.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS size value',
                default: '14.5px'
            },
            {
                name: 'color',
                description: 'Defines the color of the progress bar and thumb controller.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS color value',
                default: 'white'
            },
            {
                name: 'disabledColor',
                description: 'Defines the color of the progress bar and thumb controller when the slider is disabled.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS color value',
                default: '#4a4a4a'
            },
            {
                name: 'disabled',
                description: 'Disables slider interaction and applies disabled styling.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'showTips',
                description: 'Controls whether the tooltip is displayed while hovering over or dragging the thumb controller.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'tipText',
                description: 'The content displayed inside the slider tooltip.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any string',
                default: ''
            }
        ]

        return {
            demo_code, parameters, progress, VolumeHighIcon
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
        gap: 30px;
    }
    .set-demo-box{
        width: 17.5%;
    }
    .demo-prepend{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .demo-append{
        font-size: 12px;
        width: 7ch;
        display: flex;
        align-items: center;
        justify-content: left;
    }
</style>