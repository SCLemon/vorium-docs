<template>
        <div class="set-wrapper">
            <div class="set-title">Inputs</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <div class="set-demo-box-item"><VInput size="xs" v-model="keyword" :hotKey="'A'" placeholder="Input (xs size)"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="sm" v-model="keyword" :hotKey="'B'" placeholder="Input (sm size)"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" v-model="keyword" :hotKey="'C'" placeholder="Input (md size)"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="lg" v-model="keyword" :hotKey="'D'" placeholder="Input (lg size)"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="xl" v-model="keyword" :hotKey="'E'" placeholder="Input (xl size)"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" type="password" v-model="keyword" :hotKey="'G'" placeholder="showPassword = false" :showPassword="false"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" type="password" v-model="keyword" :hotKey="'H'" :disabled="true" placeholder="disabled = true" :showPassword="false"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" type="password" v-model="keyword" :hotKey="''" placeholder="disabledHotKey = true" :disabledHotKey = "true"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" v-model="keyword" round :hotKey="'I'" placeholder="round = true"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" v-model="keyword" :showIcon="false" :hotKey="'J'" placeholder="showIcon = false"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" v-model="keyword" :hasBorder="false" :hotKey="'K'" placeholder="hasBorder = false"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" v-model="keyword" :showIcon="false" :hasBorder="false" :disabledHotKey = "true" placeholder="Input without Icon/Key/Border"></VInput></div>
                    <div class="set-demo-box-item">
                        <VInput size="md" v-model="keyword" round :hotKey="'P'" placeholder="Cutsom Slot">
                            <template #action>
                                <VButton type="ghost" size="xs" round>
                                    <VIcon :icon="SendIcon" :size="14"></VIcon>
                                </VButton>
                            </template>
                        </VInput>
                    </div>
                    <div class="set-demo-box-item"><VInput size="md" v-model="suggestionKeyword" :suggestionListDirection="'bottom'" :suggestionList="suggestionList" :suggestionListIsLoading="isLoading" :hotKey="'L'" placeholder="SuggestionList (bottom)"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" v-model="suggestionKeyword" :suggestionListDirection="'left'" :suggestionList="suggestionList" :suggestionListIsLoading="isLoading"  :hotKey="'N'" placeholder="SuggestionList (left)"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" v-model="suggestionKeyword" :suggestionListDirection="'top'" :suggestionList="suggestionList" :suggestionListIsLoading="isLoading"  :hotKey="'M'" placeholder="SuggestionList (top)"></VInput></div>
                    <div class="set-demo-box-item"><VInput size="md" v-model="suggestionKeyword" :suggestionListDirection="'right'" :suggestionList="suggestionList" :suggestionListIsLoading="isLoading"  :hotKey="'O'" placeholder="SuggestionList (right)"></VInput></div>
                    <div class="set-demo-box-item">
                        <VInput size="md"  v-model="suggestionKeyword" :suggestionListDirection="'bottom'" :suggestionList="suggestionList" :suggestionListIsLoading="isLoading" round :hotKey="'Q'" :disabled="is_demo_send" placeholder="Complete Example">
                            <template #action>
                                <VButton type="ghost" size="xs" round @click.stop="demo_send()" :loading="is_demo_send" :loadingIcon="demo_send_status=='Processing'? LoadingIcon: CheckIcon" :loadingText="demo_send_status">
                                    <VIcon :icon="SendIcon" :size="14"></VIcon>
                                </VButton>
                            </template>
                        </VInput>
                    </div>
                </div>
            </div>
        </div>
    <demo-code :title="'Example I'" :code="demo_code"></demo-code>
    <demo-code :title="'Example II'" :code="demo_code2"></demo-code>
    <parameter-list :parameters="parameters"></parameter-list>
</template>

<script>
import demoCode from '@/components/pageComponents/DemoCode.vue';
import parameterList from '@/components/pageComponents/ParameterList.vue';
import { ref, onMounted } from 'vue';
import { VInput, VButton, VIcon } from 'vorium-ui'
import { SendIcon, LoadingIcon, CheckIcon } from 'vorium-ui/icons'
import 'vorium-ui/dist/vorium-ui.css'
import 'vorium-ui/icons/icons.css'

import { useInputDemo } from './hooks/useInputDemo';

export default {
    name: 'Input',
    components:{
        VInput, VButton, VIcon, demoCode, parameterList
    },
    setup(){

        let keyword = ref('');
        const url = '/demo-code/InputDemo.vue'
        const url2 = '/demo-code/InputDemo2.vue'
        let demo_code = ref('');
        let demo_code2 = ref('')
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
            demo_code2.value = await (await fetch(url2)).text();
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
                name: 'action',
                description: 'Custom content displayed on the right side of the input. Rendered only when the input has a value. Use with <template #action></template>.',
                type: 'Slot',
                necessity: 'Optional',
                options: '-',
                default: '-'
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
                name: 'round',
                description: 'Applies a fully rounded border radius to the input.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'hasBorder',
                description: 'Controls whether the input displays a border.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
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
                description: 'Data source for the autocomplete suggestion dropdown. The dropdown will not be displayed when the array is empty.',
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

        // Suggestion Demo
        let { keyword: suggestionKeyword, isLoading, suggestionList } = useInputDemo();

        // Full Demo
        let is_demo_send = ref(false);
        let demo_send_status = ref('');
        async function demo_send(){
            is_demo_send.value = true;

            demo_send_status.value = 'Processing';

            await new Promise((resolve, reject)=> setTimeout(() => {
                resolve();
            }, 6000))

            demo_send_status.value = 'Finish';

            await new Promise((resolve, reject)=> setTimeout(() => {
                resolve();
            }, 2000))
            
            suggestionKeyword.value = '';
            is_demo_send.value = false;
        }
        

        return {
            keyword, demo_code, demo_code2, parameters,
            isLoading, suggestionList, suggestionKeyword,
            SendIcon, LoadingIcon, CheckIcon,
            is_demo_send,demo_send_status, demo_send
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
    }
    .set-demo-box-item{
        width: 300px;
        height: 40px;
        margin-left: 10px;
        margin-bottom: 20px;
    }
    :deep(.v-input-suggestion-list-wrapper-with-triangle){
        z-index: 9999;
    }
</style>