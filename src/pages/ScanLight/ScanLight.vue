<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Scan Light</div>
            <div class="set-demo-box-wrapper">
                <div>
                    <div class="title scan">Industrial UI System for Engineers</div>
                </div>
                <div>
                    <div class="title2 scan-text2">Industrial UI System for Engineers</div>
                </div>
            </div>
        </div>
        <demo-code :code="demo_code" title="Example I - Light Sweep"></demo-code>
        <demo-code :code="demo_code2" title="Example II - Text Shimmer"></demo-code>
    </div>
</template>

<script>

import demoCode from '@/components/pageComponents/DemoCode.vue';
import parameterList from '@/components/pageComponents/ParameterList.vue';
import { ref, onMounted, onUnmounted } from 'vue';

import { VButton, VIcon } from 'vorium-ui'
import 'vorium-ui/icons/icons.css'
import 'vorium-ui/dist/vorium-ui.css'

export default {
    name: 'ScanLight',
    components:{
        demoCode, parameterList, VButton, VIcon
    },
    setup(){

        const url = process.env.BASE_URL+'demo-code/ScanLightDemo.vue'
        const url2 = process.env.BASE_URL+'demo-code/ScanLightDemo2.vue'
        let demo_code = ref('');
        let demo_code2 = ref('');
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
            demo_code2.value = await (await fetch(url2)).text();
        })

        return {
            demo_code, demo_code2
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

    /* ScanLight */
    .title{
        display: inline-block;
        color: rgba(220,220,220);
        font-size: 34px;
        padding: 5px;
    }
    .scan{
        position: relative;
        overflow: hidden;
    }

    .scan::after{
        content: "";
        position: absolute;
        inset: 0;

        background: linear-gradient(
            90deg,
            transparent 0%,
        rgba(255,255,255,.05) 30%,
        rgba(255,255,255,.15) 40%,
        rgba(255,255,255,.4) 50%,
        rgba(255,255,255,.15) 60%,
        rgba(255,255,255,.05) 70%,
            transparent 100%
        );

        transform: translateX(-100%);
        animation: scan-light 4.4s linear infinite;

        pointer-events: none;
    }

    @keyframes scan-light{
        0%{
            transform: translateX(-100%);
        }

        75%{
            transform: translateX(100%);
        }

        100%{
            transform: translateX(100%);
        }
    }
    
     /* ScanLight2 */

    .title2{
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 5px;
        display: inline-block;
        font-size: 34px;
        color: transparent;
        background: linear-gradient(
            90deg,
            #8a8a8a 0%,
            #8a8a8a 45%,
            #ffffff 50%,
            #8a8a8a 55%,
            #8a8a8a 100%
        );

        background-size: 400% 100%;
        background-position: -400% 0;

        -webkit-background-clip: text;
        background-clip: text;

        filter: drop-shadow(
            0 0 6px rgba(255,255,255,.08)
        );
    }

    .scan-text2{
        animation: scan-light2 26s linear infinite;
        will-change: background-position;
    }

    @keyframes scan-light2{
        from{
            background-position: 400% 0;
        }

        to{
            background-position: -400% 0;
        }
    }

</style>