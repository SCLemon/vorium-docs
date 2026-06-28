<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Video Player</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VVideoPlayer :source="source">
                        <template #info>
                            <VIcon :icon="InfoCircleIcon" :size="24"></VIcon>
                        </template>
                    </VVideoPlayer>
                </div>
                <div class="set-demo-source">Used for demonstration purposes only.</div>
                <div class="set-demo-source">Demo Video Source: <a href="https://www.bilibili.com/video/BV18o98BNEcb/" target="_blank">https://www.bilibili.com/video/BV18o98BNEcb/</a></div>
            </div>
        </div>
        <demo-code :code="demo_code" title="Examples"></demo-code>
        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';
import { VIcon, VVideoPlayer } from 'vorium-ui'
import { InfoCircleIcon } from 'vorium-ui/icons'
import 'vorium-ui/icons/icons.css'
import 'vorium-ui/dist/vorium-ui.css'

export default {
    name: 'VideoPlayer',
    components:{
        VIcon, VVideoPlayer, DemoCode, ParameterList
    },
    setup(){
        const source = reactive([
            {
                quality: '720P',
                name:'《鳴潮 3.3 OST》自無垠處歸航之星',
                src: 'assets/video.mp4?v=720'
            },
            {
                quality: '540P',
                name:'《鳴潮 3.3 OST》自無垠處歸航之星',
                src: 'assets/video.mp4?v=540'
            }
        ])
        const url = process.env.BASE_URL+'demo-code/VideoPlayerDemo.vue'
        
        let demo_code = ref('');
        
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })

        const parameters = [
            {
                name: 'source',
                description: 'Defines the video sources available for playback. The quality field is used as the display label in the quality selection menu and can be customized.',
                type: 'Array',
                necessity: 'Required',
                options: 'Array<{ name: String, quality: String, src: String | File }>',
                default: '[]'
            },
            {
                name: 'aspectRatio',
                description: 'Controls the aspect ratio of the video player.',
                type: 'Number',
                necessity: 'Optional',
                options: 'Any positive number',
                default: '16 / 9'
            },
            {
                name: '#logo',
                description: 'Replaces the default logo displayed in the player header.',
                type: 'Slot',
                necessity: 'Optional',
                options: '-',
                default: '-'
            },
            {
                name: '#info',
                description: 'Provides a customizable area for adding information-related actions, such as an info icon, dropdown menu, tooltip, or any custom interactive content.',
                type: 'Slot',
                necessity: 'Optional',
                options: '-',
                default: '-'
            },
            {
                name: '#controller',
                description: 'Adds custom controls to the right side of the control bar.',
                type: 'Slot',
                necessity: 'Optional',
                options: '-',
                default: '-'
            }
        ]
        
        return {
            demo_code, parameters, source, InfoCircleIcon
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
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }
    .set-demo-box{
        border: 0.1px solid rgba(255,255,255,0.1);
        width: 60%;
    }
    .set-demo-source{
        color: rgba(255,255,255,0.3);
        margin-top: 30px;
    }
    .set-demo-source>a{
        color: rgba(255,255,255,0.3);
        text-decoration: none;
    }
    .set-demo-source>a:hover{
        text-decoration: underline;
    }
</style>