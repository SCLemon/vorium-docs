<template>
    <demo-code :code="demo_code"></demo-code>
    <parameter-list :parameters="parameters"></parameter-list>
</template>

<script>
import demoCode from '@/components/pageComponents/DemoCode.vue';
import parameterList from '@/components/pageComponents/ParameterList.vue';
import { ref, onMounted } from 'vue';
import { VInput } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
    name: 'Input',
    components:{
        VInput, demoCode, parameterList
    },
    setup(){
        const url = '/demo-code/InputDemo.vue'
        let demo_code = ref('');
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'v-model',
                description: 'The value bound to the input through v-model.',
                type: 'String',
                necessity: 'Required',
                options: 'Any string',
                default: "-"
            },
            {
                name: 'size',
                description: 'Controls the height and font size of the input.',
                type: 'String',
                necessity: 'Optional',
                options: 'xs | sm | md | lg | xl',
                default: 'md'
            },
            {
                name: 'type',
                description: 'Specifies the native HTML input type.',
                type: 'String',
                necessity: 'Optional',
                options: 'text | password',
                default: 'text'
            },
            {
                name: 'disabled',
                description: 'Disables the input and prevents user interaction.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'clearable',
                description: 'Displays a clear icon when the input contains a value.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'showPassword',
                description: 'Displays the password visibility toggle icon when type is password.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'placeholder',
                description: 'Placeholder text displayed when the input is empty.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any string',
                default: 'Input Placeholder...'
            },
            {
                name: 'showIcon',
                description: 'Controls whether the leading icon is displayed.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'icon',
                description: 'The icon component to render. Accepts any icon exported from "vorium-ui/icons" or any valid Vue component that renders an SVG icon.',
                type: 'Component',
                necessity: 'Optional',
                options: 'Any icon component',
                default: 'SearchIcon'
            },
            {
                name: 'hotKey',
                description: 'Keyboard shortcut key used together with Ctrl (or Cmd on macOS) to focus the input.',
                type: 'String',
                necessity: 'Optional',
                options: 'Any keyboard key',
                default: 'F'
            },
            {
                name: 'disabledHotKey',
                description: 'Disables the hotkey shortcut feature.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'suggestionList',
                description: 'Data source for the autocomplete suggestion dropdown.',
                type: 'Array',
                necessity: 'Optional',
                options: 'Array<string>',
                default: '[]'
            },
            {
                name: 'suggestionListDirection',
                description: 'Controls where the suggestion dropdown is displayed relative to the input.',
                type: 'String',
                necessity: 'Optional',
                options: 'top | bottom | left | right',
                default: 'bottom'
            },
            {
                name: 'suggestionListIsLoading',
                description: 'Displays a loading state inside the suggestion dropdown.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            }
        ]

        return {
            demo_code, parameters
        }
    }
}
</script>

<style>

</style>