<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Carousel</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VCarousel :aspectRatio="16/9" :autoPlay="false">
                        <v-carousel-item><div class="set-demo-box-item">Build. Measure. Iterate.</div></v-carousel-item>
                        <v-carousel-item><div class="set-demo-box-item">Data Drives Decisions.</div></v-carousel-item>
                        <v-carousel-item><div class="set-demo-box-item">Precision Over Complexity.</div></v-carousel-item>
                        <v-carousel-item><div class="set-demo-box-item">Optimize The Pipeline.</div></v-carousel-item>
                        <v-carousel-item><div class="set-demo-box-item">Engineering The Future.</div></v-carousel-item>
                    </VCarousel>
                </div>
                <div class="set-demo-box">
                    <VCarousel :aspectRatio="16/9" :autoPlay="true" :interval="3000">
                        <v-carousel-item><div class="set-demo-box-item">Build. Measure. Iterate.</div></v-carousel-item>
                        <v-carousel-item><div class="set-demo-box-item">Data Drives Decisions.</div></v-carousel-item>
                        <v-carousel-item><div class="set-demo-box-item">Precision Over Complexity.</div></v-carousel-item>
                        <v-carousel-item><div class="set-demo-box-item">Optimize The Pipeline.</div></v-carousel-item>
                        <v-carousel-item><div class="set-demo-box-item">Engineering The Future.</div></v-carousel-item>
                    </VCarousel>
                </div>
            </div>
        </div>
    
        <demo-code title="Examples" :code="demo_code"></demo-code>

        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>
import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';
import { ref, onMounted } from 'vue'
import { VCarousel, VCarouselItem } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'
export default {
    name: 'Carousel',
    components:{
        VCarousel, VCarouselItem, DemoCode, ParameterList
    },
    setup(){
        const demo_code = ref('');
        const url = process.env.BASE_URL+'demo-code/CarouselDemo.vue'
        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();
        })
         const parameters = [
            {
                name: 'aspectRatio',
                description: 'Sets the aspect ratio of the carousel container.',
                type: 'Number',
                necessity: 'Optional',
                options: '-',
                default: '16 / 9'
            },
            {
                name: 'indicators',
                description: 'Controls whether the bottom navigation indicators are displayed.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            },
            {
                name: 'autoPlay',
                description: 'Enables automatic slide playback at a specified interval.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'false'
            },
            {
                name: 'interval',
                description: 'Specifies the delay between automatic slide transitions in milliseconds.',
                type: 'Number',
                necessity: 'Optional',
                options: 'Any positive number',
                default: '3000'
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
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        box-sizing: border-box;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .set-demo-box{
        width: 45%;
    }
    .set-demo-box-item{
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255,255,255,0.07);
        height: 100%;
    }
</style>