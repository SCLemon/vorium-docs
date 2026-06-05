<template>
    <div class="overview-wrapper">
        <div class="title-box-wrapper">
            <img class="title-image" src="logo/full_logo.png" alt="">
            <div class="title-subTitle">Industrial UI System for Engineers</div>
            <div class="title-subTitle2">Design for AI, Data, Silicon</div>
            <div class="title-button-wrapper">
                <VButton class="title-button-left" @click="goTo('/installation')">
                    <div class="title-button-left-text">Get Started</div>
                    <VIcon :icon="ArrowRightIcon"></VIcon>
                </VButton>
                <VButton class="title-button-right" type="ghost" @click="goTo('/icons')">View Components</VButton>
            </div>
        </div>
    </div>
</template>

<script>

import { VButton, VIcon } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'
import { ArrowRightIcon } from 'vorium-ui/icons'
import { useRouter } from 'vue-router'
export default {
    name: 'Overview',
    components:{
        VButton, VIcon
    },
    setup(){
        
        const router = useRouter();

        function goTo(path){
            router.replace(path).catch(e=>{})
        }

        return {
            ArrowRightIcon, goTo
        }
    }
}
</script>

<style scoped>
    .overview-wrapper{
        width: 100%;
        height: calc(100vh - 100px);
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title-box-wrapper{
        height: 400px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title-image{
        width: 500px;
    }
    .title-subTitle{
        color: rgba(220,220,220);
        font-size: 34px;
        margin-top: 22.5px;
    }
    .title-subTitle2{
        color: rgba(190,190,190);
        font-size: 18px;
        margin-top: 28px;
    }
    .title-button-wrapper{
        margin-top: 34px;
    }
    .title-button-left{
        margin-right: 7px;
    }
    .title-button-right{
        margin-left: 7px;
    }
    .title-button-left-text{
        margin-right: 7.5px;
    }
</style>