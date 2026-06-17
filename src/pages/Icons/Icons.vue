<template>
  <div>
    <div class="set-wrapper">
        <div class="set-title">Icons</div>
        <div class="icon-set-grid">
            <div class="icon-set-grid-item"  v-for="[name, Icon] in IconList" :key="name" @click="copy(name)">
                <div class="icon-set-grid-item-icon">
                   <component :is="Icon"></component>
                </div>
                <div class="icon-set-grid-item-title">{{name}}</div>
            </div>
        </div>
    </div>
    <demo-code :code="demo_code"></demo-code>
    <parameter-list :parameters="parameters"></parameter-list>
  </div>
</template>

<script>

import { onMounted, ref } from 'vue'
import { VIcon, VButton }  from 'vorium-ui';
import * as Icons from 'vorium-ui/icons'
import 'vorium-ui/icons/icons.css'

import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';


export default {
    name:'Icons',
    components:{
        VIcon, VButton, DemoCode, ParameterList
    },

    setup(){

        const url = process.env.BASE_URL+'demo-code/IconDemo.vue'
        let demo_code = ref('');
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const IconList = Object.entries(Icons);

        const parameters = [
            {
                name: 'icon',
                description: 'The icon component to render. Accepts any icon exported from "vorium-ui/icons" or any valid Vue component that renders an SVG icon.',
                type: 'Component',
                necessity: 'Required',
                options: 'Any icon component',
                default: '-'
            },
            {
                name: 'size',
                description: 'Controls the rendered icon size in pixels. The value is applied to both width and height of the icon.',
                type: 'Number',
                necessity: 'Optional',
                options: 'Any positive number',
                default: '16'
            }
        ]

        function copy(name){
            try{
                let text = `<VIcon :icon="${name}" :size="16"></VIcon>`
                navigator.clipboard.writeText(text);
            }
            catch(e){}
        }

        return{
            demo_code, IconList, parameters, copy
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

    .icon-set-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 8px;
    }

    .icon-set-grid-item{
        width: 90px;
        height: 90px;
        box-sizing: border-box;
        background: rgba(255,255,255,0.1);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        transition: box-shadow 0.3s ease;
    }
    .icon-set-grid-item:hover{
        cursor: pointer;
        box-shadow: 2px 2px 5px rgba(255,255,255, 0.2);
    }
    .icon-set-grid-item-icon{
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon-set-grid-item-title{
        text-align: center;
        font-size: 10px;
        margin-top: 15px;
    }

</style>