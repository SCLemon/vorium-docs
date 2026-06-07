<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Scan Light</div>
            <div class="set-demo-box-wrapper">
                <div>
                    <div class="set-demo-box-item">
                        <VScanLight>Industrial UI System for Engineers</VScanLight>
                    </div>
                </div>
                <div>
                    <div class="set-demo-box-item">
                        <VScanLight :scan="'text-shimmer'">Industrial UI System for Engineers</VScanLight>
                    </div>
                </div>
            </div>
        </div>
        <demo-code :code="demo_code" title="Examples"></demo-code>
        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>

import demoCode from '@/components/pageComponents/DemoCode.vue';
import parameterList from '@/components/pageComponents/ParameterList.vue';
import { ref, onMounted } from 'vue';

import { VScanLight } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
    name: 'ScanLight',
    components:{
        demoCode, parameterList, VScanLight
    },
    setup(){

        const url = process.env.BASE_URL+'demo-code/ScanLightDemo.vue'
        let demo_code = ref('');
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'scan',
                description: 'Controls the scan animation style.',
                type: 'String',
                necessity: 'Optional',
                options: 'light-sweep | text-shimmer',
                default: 'light-sweep'
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
        padding: 30px;
        padding-top: 15px;
        padding-bottom: 10px;
        padding-left: 20px;
        border: 1px solid rgba(255,255,255,0.2);
        box-sizing: border-box;
    }
    .set-demo-box-item{
        display: inline-block;
        font-size: 34px;
    }
</style>