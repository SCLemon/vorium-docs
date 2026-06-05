<!-- Reusable light-sweep effect for loading states, active indicators, and highlighted content. -->
<template>
    <div class="title scan">Industrial UI System for Engineers</div>
</template>

<script>
export default {
    name: 'ScanLightDemo'
}
</script>

<style scoped>

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

</style>