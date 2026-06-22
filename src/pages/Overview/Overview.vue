<template>
    <div class="overview-wrapper">
        <div class="title-box-wrapper">
            <div class="title-image-wrapper"><img class="title-image" src="logo/full_logo.png" alt="" ></div>
            <div class="title-subTitle reveal title-text-scan">Industrial UI System for Engineers</div>
            <div class="title-subTitle2 reveal title-text-scan">Built by Engineers, for Engineers.</div>
            <div class="title-button-wrapper reveal">
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
        padding-top: 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title-image{
        width: 500px;
    }
    .title-subTitle{
        color: rgba(220,220,220);
        font-size: 34px;
        margin-top: 22.5px;
        padding: 5px;
    }
    .title-subTitle2{
        color: rgba(190,190,190);
        font-size: 18px;
        margin-top: 28px;
        padding: 5px;
    }
    .title-button-wrapper{
        margin-top: 32px;
        padding: 2px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .title-button-left{
        margin-right: 10px;
    }
    .title-button-right{
        margin-left: 10px;
        white-space: nowrap;
    }
    .title-button-left-text{
        margin-right: 7.5px;
    }

    /* =========================
    title-box-wrapper
    ========================= */

    .title-box-wrapper{
        position: relative;
        overflow: hidden;

        height: 400px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: center;

        opacity: 0;
        transform: translateY(100px);

        animation:
            title-fade-in 3s ease forwards,
            title-slide-up 3s ease forwards;
    }
    @keyframes title-fade-in{

        from{
            opacity: 0;
        }

        to{
            opacity: 1;
        }

    }

    @keyframes title-slide-up{

        from{
            transform: translateY(100px);
        }

        to{
            transform: translateY(0);
        }

    }

    /* =========================
    reveal
    ========================= */

    .reveal{
        position: relative;
        overflow: hidden;
    }
    .reveal::before{
        content: "";

        position: absolute;

        top: 0;
        right: 0;

        width: 100%;
        height: 100%;

        background: #000;

        animation:
            reveal-left-right 1.2s cubic-bezier(.77,0,.18,1)
            forwards;
    }

    .title-subTitle::before{
        animation-delay: 2.8s;
    }

    .title-subTitle2::before{
        animation-delay: 3.3s;
    }
    .title-button-wrapper::before{
        animation-delay: 3.45s;
        z-index: 1;
    }

    @keyframes reveal-left-right{

        from{
            width: 100%;
        }

        to{
            width: 0%;
        }

    }


    /* =========================
    title-text-scan
    ========================= */

    .title-text-scan{
        position: relative;
        overflow: hidden;
    }

    .title-text-scan::after{
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
        animation: title-scan 4.4s linear infinite;
        animation-delay: 5.1s;

        pointer-events: none;
    }

    @keyframes title-scan{
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

</style>