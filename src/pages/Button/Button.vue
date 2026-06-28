<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Button</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <div class="set-demo-box-item"><VButton class="t" type="primary"  :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                    <div class="set-demo-box-item"><VButton class="t" type="info"  :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                    <div class="set-demo-box-item"><VButton class="t" type="success"  :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                    <div class="set-demo-box-item"><VButton class="t" type="warning"  :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                    <div class="set-demo-box-item"><VButton class="t" type="danger"  :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                    <div class="set-demo-box-item"><VButton class="t" type="ghost"  :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton></div>
                </div>
                <div class="set-demo-box">
                    <div class="set-demo-box-item"><VButton type="primary"  :disabled="true">Primary</VButton></div>
                    <div class="set-demo-box-item"><VButton type="info"  :disabled="true">Info</VButton></div>
                    <div class="set-demo-box-item"><VButton type="success"  :disabled="true">Success</VButton></div>
                    <div class="set-demo-box-item"><VButton type="warning"  :disabled="true">Warning</VButton></div>
                    <div class="set-demo-box-item"><VButton type="danger"  :disabled="true">Danger</VButton></div>
                    <div class="set-demo-box-item"><VButton type="ghost"  :disabled="true">Ghost</VButton></div>
                </div>
                <div class="set-demo-box">
                    <div class="set-demo-box-item"><VButton type="primary"  :loading="true">Primary</VButton></div>
                    <div class="set-demo-box-item"><VButton type="info"  :loading="true">Success</VButton></div>
                    <div class="set-demo-box-item"><VButton type="success"  :loading="true">Success</VButton></div>
                    <div class="set-demo-box-item"><VButton type="warning"  :loading="true">Warning</VButton></div>
                    <div class="set-demo-box-item"><VButton type="danger"  :loading="true">Danger</VButton></div>
                    <div class="set-demo-box-item"><VButton type="ghost"  :loading="true">Ghost</VButton></div>
                </div>
                <div class="set-demo-box">
                    <div class="set-demo-box-item"><VButton type="primary"  round>Primary</VButton></div>
                    <div class="set-demo-box-item"><VButton type="info"  round>Info</VButton></div>
                    <div class="set-demo-box-item"><VButton type="success"  round>Success</VButton></div>
                    <div class="set-demo-box-item"><VButton type="warning"  round>Warning</VButton></div>
                    <div class="set-demo-box-item"><VButton type="danger"  round>Danger</VButton></div>
                    <div class="set-demo-box-item"><VButton type="ghost"  round>Ghost</VButton></div>
                </div>
                <div class="set-demo-box">
                    <div class="set-demo-box-item">
                        <VButton type="primary"  circle  width="38px">
                            <VIcon :icon="PlusIcon"></VIcon>
                        </VButton>
                    </div>
                    <div class="set-demo-box-item">
                        <VButton type="info"  circle width="38px">
                            <VIcon :icon="UserIcon"></VIcon>
                        </VButton>
                    </div>
                    <div class="set-demo-box-item">
                        <VButton type="success" circle width="38px">
                            <VIcon :icon="CheckIcon"></VIcon>
                        </VButton>
                    </div>
                    <div class="set-demo-box-item">
                        <VButton type="warning" circle width="38px">
                            <VIcon :icon="ExclamationIcon"></VIcon>
                        </VButton>
                    </div>
                    <div class="set-demo-box-item">
                        <VButton type="danger" circle width="38px">
                            <VIcon :icon="CloseIcon"></VIcon>
                        </VButton>
                    </div>
                    <div class="set-demo-box-item">
                        <VButton type="ghost" circle width="38px">
                            <VIcon :icon="MenuIcon"></VIcon>
                        </VButton>
                    </div>
                </div>
            </div>
        </div>
        <demo-code :code="demo_code"></demo-code>
        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>

import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';
import { ref, onMounted } from 'vue';

import { VButton, VIcon } from 'vorium-ui'
import { PlusIcon, CheckIcon, CloseIcon, ExclamationIcon, MenuIcon, UserIcon } from 'vorium-ui/icons'
import 'vorium-ui/icons/icons.css'
import 'vorium-ui/dist/vorium-ui.css'

import { useButtonDemo } from './hooks/useButtonDemo';

export default {
    name: 'Button',
    components:{
        DemoCode, ParameterList, VButton, VIcon
    },
    setup(){

        const url = process.env.BASE_URL+'demo-code/ButtonDemo.vue'
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
                name: 'width',
                description: 'Sets the width of the button.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS width value',
                default: '100%'
            },
            {
                name: 'height',
                description: 'Sets the height of the button. Ignored when circle is enabled.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS height value',
                default: '38px'
            },
            {
                name: 'fontSize',
                description: 'Sets the font size of the button content.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS font-size value',
                default: '16px'
            },
            {
                name: 'iconSize',
                description: 'Sets the size of the loading icon.',
                type: 'Number',
                necessity: 'Optional',
                options: 'Any positive number',
                default: '14'
            },
            {
                name: 'padding',
                description: 'Sets the inner spacing of the button. Ignored when circle is enabled.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS padding value',
                default: '0 20px'
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
                description: 'Displays the button as a circle. Takes precedence over round and overrides padding settings.',
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
                description: 'The icon component displayed during loading. Accepts any icon exported from "vorium-ui/icons" or any valid Vue component that renders an SVG icon.',
                type: 'Component',
                necessity: 'Optional',
                options: 'Any icon component',
                default: 'LoadingIcon'
            }
        ]

        // Demo Used
        const { percent, loading, click } = useButtonDemo();

        return {
            demo_code, parameters, percent, loading, click, 
            PlusIcon, CheckIcon, CloseIcon, ExclamationIcon, MenuIcon, UserIcon
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
        margin-bottom: 10px;
    }
</style>