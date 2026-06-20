<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Switch</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VSwitch v-model="status"></VSwitch>
                </div>
                <div class="set-demo-box">
                    <VSwitch v-model="status1"></VSwitch>
                </div>
                <div class="set-demo-box">
                    <VSwitch v-model="status2" :disabled="true"></VSwitch>
                </div>
                <div class="set-demo-box">
                    <VSwitch v-model="status3" activeText="Enabled" inactiveText="Disabled"></VSwitch>
                </div>
                <div class="set-demo-box">
                    <VSwitch v-model="status4" activeText="Enabled" inactiveText="Disabled"></VSwitch>
                </div>
                <div class="set-demo-box">
                    <VSwitch v-model="status5" activeText="Enabled" inactiveText="Disabled" :disabled="true"></VSwitch>
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
import { VSwitch } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
    name: 'Switch',
    components:{
        VSwitch, DemoCode, ParameterList
    },
    setup(){
        const status = ref(false);
        const status1 = ref(true);
        const status2 = ref(false);
        const status3 = ref(false);
        const status4 = ref(true);
        const status5 = ref(false);

        const url = process.env.BASE_URL+'demo-code/SwitchDemo.vue'
        
        let demo_code = ref('');
        
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'v-model',
                description: 'The current state of the switch. Supports two-way binding via v-model.',
                type: 'Boolean',
                necessity: 'Required',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'width',
                description: 'Sets the width of the switch component.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS width value',
                default: "40px"
            },
            {
                name: 'height',
                description: 'Sets the height of the switch component.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any valid CSS height value',
                default: "20px"
            },
            {
                name: 'disabled',
                description: 'Disables user interaction with the switch.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'activeText',
                description: 'Text displayed on the right side when the switch is enabled.',
                type: 'String',
                necessity: 'Optional',
                options: '-',
                default: "''"
            },
            {
                name: 'inactiveText',
                description: 'Text displayed on the left side when the switch is disabled.',
                type: 'String',
                necessity: 'Optional',
                options: '-',
                default: "''"
            }
        ]
        
        return {
            demo_code, parameters, status, status1, status2, status3, status4, status5
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
        gap: 60px;
    }
    .set-demo-box{
    }
</style>