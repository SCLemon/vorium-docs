<template>
    <div class="set-wrapper">
        <div class="set-title">Buttons</div>
        <div class="set-demo-box-wrapper">
            <div class="set-demo-box">
                <div class="set-demo-box-item"><VButton class="t" type="primary" size="md" :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                <div class="set-demo-box-item"><VButton class="t" type="info" size="md" :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                <div class="set-demo-box-item"><VButton class="t" type="success" size="md" :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                <div class="set-demo-box-item"><VButton class="t" type="warning" size="md" :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                <div class="set-demo-box-item"><VButton class="t" type="danger" size="md" :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                <div class="set-demo-box-item"><VButton class="t" type="ghost" size="md" :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
            </div>
            <div class="set-demo-box">
                <div class="set-demo-box-item"><VButton type="primary" size="md" :disabled="true">Primary</VButton></div>
                <div class="set-demo-box-item"><VButton type="info" size="md" :disabled="true">Info</VButton></div>
                <div class="set-demo-box-item"><VButton type="success" size="md" :disabled="true">Success</VButton></div>
                <div class="set-demo-box-item"><VButton type="warning" size="md" :disabled="true">Warning</VButton></div>
                <div class="set-demo-box-item"><VButton type="danger" size="md" :disabled="true">Danger</VButton></div>
                <div class="set-demo-box-item"><VButton type="ghost" size="md" :disabled="true">Ghost</VButton></div>
            </div>
            <div class="set-demo-box">
                <div class="set-demo-box-item"><VButton type="primary" size="md" :loading="true">Primary</VButton></div>
                <div class="set-demo-box-item"><VButton type="info" size="md" :loading="true">Success</VButton></div>
                <div class="set-demo-box-item"><VButton type="success" size="md" :loading="true">Success</VButton></div>
                <div class="set-demo-box-item"><VButton type="warning" size="md" :loading="true">Warning</VButton></div>
                <div class="set-demo-box-item"><VButton type="danger" size="md" :loading="true">Danger</VButton></div>
                <div class="set-demo-box-item"><VButton type="ghost" size="md" :loading="true">Ghost</VButton></div>
            </div>
            <div class="set-demo-box">
                <div class="set-demo-box-item"><VButton type="primary" size="xs" >Primary</VButton></div>
                <div class="set-demo-box-item"><VButton type="info" size="sm" >Info</VButton></div>
                <div class="set-demo-box-item"><VButton type="success" size="sm" >Success</VButton></div>
                <div class="set-demo-box-item"><VButton type="warning" size="md" >Warning</VButton></div>
                <div class="set-demo-box-item"><VButton type="danger" size="lg" >Danger</VButton></div>
                <div class="set-demo-box-item"><VButton type="ghost" size="xl" >Ghost</VButton></div>
            </div>
            <div class="set-demo-box">
                <div class="set-demo-box-item"><VButton type="primary" size="md" round>Primary</VButton></div>
                <div class="set-demo-box-item"><VButton type="info" size="md" round>Info</VButton></div>
                <div class="set-demo-box-item"><VButton type="success" size="md" round>Success</VButton></div>
                <div class="set-demo-box-item"><VButton type="warning" size="md" round>Warning</VButton></div>
                <div class="set-demo-box-item"><VButton type="danger" size="md" round>Danger</VButton></div>
                <div class="set-demo-box-item"><VButton type="ghost" size="md" round>Ghost</VButton></div>
            </div>
            <div class="set-demo-box">
                <div class="set-demo-box-item">
                    <VButton type="primary" size="md" circle>
                        <VIcon :icon="PlusIcon"></VIcon>
                    </VButton>
                </div>
                <div class="set-demo-box-item">
                    <VButton type="info" size="md" circle>
                        <VIcon :icon="UserIcon"></VIcon>
                    </VButton>
                </div>
                <div class="set-demo-box-item">
                    <VButton type="success" size="md" circle>
                        <VIcon :icon="CheckIcon"></VIcon>
                    </VButton>
                </div>
                <div class="set-demo-box-item">
                    <VButton type="warning" size="md" circle>
                        <VIcon :icon="ExclamationIcon"></VIcon>
                    </VButton>
                </div>
                <div class="set-demo-box-item">
                    <VButton type="danger" size="md" circle>
                        <VIcon :icon="CloseIcon"></VIcon>
                    </VButton>
                </div>
                <div class="set-demo-box-item">
                    <VButton type="ghost" size="md" circle>
                        <VIcon :icon="MenuIcon"></VIcon>
                    </VButton>
                </div>
            </div>
        </div>
    </div>
    <demo-code :code="demo_code"></demo-code>
    <parameter-list :parameters="parameters"></parameter-list>
</template>

<script>

import demoCode from '@/components/pageComponents/DemoCode.vue';
import parameterList from '@/components/pageComponents/ParameterList.vue';
import { ref, onMounted, onUnmounted } from 'vue';

import { VButton } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

import { VIcon } from 'vorium-ui'
import { PlusIcon, CheckIcon, CloseIcon, ExclamationIcon, MenuIcon, UserIcon } from 'vorium-ui/icons'
import 'vorium-ui/icons/icons.css'

export default {
    name: 'Button',
    components:{
        demoCode, parameterList, VButton, VIcon
    },
    setup(){

        const url = '/demo-code/ButtonDemo.vue'
        let demo_code = ref('');
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'type',
                description: 'Defines the visual style of the button.',
                type: 'String',
                necessity: 'Optional',
                options: 'primary | danger | warning | success | info | ghost',
                default: 'primary'
            },
            {
                name: 'size',
                description: 'Controls the size of the button and its loading icon.',
                type: 'String',
                necessity: 'Optional',
                options: 'xs | sm | md | lg | xl',
                default: 'md'
            },
            {
                name: 'disabled',
                description: 'Disables the button and prevents user interaction.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'circle',
                description: 'Displays the button as a circle. Takes precedence over round when both are enabled.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'round',
                description: 'Applies a rounded-pill appearance to the button.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'loading',
                description: 'Displays the loading state and temporarily disables the button.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'loadingText',
                description: 'Custom text displayed while the button is in loading state.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any string',
                default: 'Loading'
            },
            {
                name: 'loadingIcon',
                description: 'The icon component to render. Accepts any icon exported from "vorium-ui/icons" or any valid Vue component that renders an SVG icon.',
                type: 'Component',
                necessity: 'Optional',
                options: 'Any icon component',
                default: 'LoadingIcon'
            }
        ]


        // Demo Used
        let percent = ref(0);
        let loading = ref(false);
        let timer = null;

        function click(){
            loading.value = true;
            timer = setInterval(() => {
                percent.value += parseInt(Math.random()*5 + 1);
                if(percent.value >= 100){
                    clearInterval(timer);
                    loading.value = false;
                    percent.value = 0;
                }
            }, 100);
        }

        onUnmounted(()=>{
            if(timer) clearInterval(timer)
        })

        return {
            demo_code, parameters, percent, loading, click, 
            PlusIcon, CheckIcon, CloseIcon, ExclamationIcon, MenuIcon, UserIcon
        }
    }
}
</script>

<style scoped>
    .set-wrapper{
        padding-left: 20px;
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
        padding-bottom: 10px;
        padding-left: 20px;
        border: 1px solid rgba(255,255,255,0.2);
        box-sizing: border-box;
    }
    .set-demo-box{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    .set-demo-box-item{
        margin-left: 10px;
    }
    .t{
        font-variant-numeric: tabular-nums;
    }
    :deep(.v-button-loading-text--md){
        
        min-width: 4ch;
    }
</style>