<template>
    <div class="title scan-text">Industrial UI System for Engineers</div>
</template>

<script>
export default {
    name: 'ScanLightDemo2'
}
</script>

<style scoped>

.title{
    display: inline-block;
    font-size: 34px;
    color: transparent;
    background: linear-gradient(
        90deg,
        #8a8a8a 0%,
        #8a8a8a 45%,
        #ffffff 50%,
        #8a8a8a 55%,
        #8a8a8a 100%
    );
    background-size: 400% 100%;
    background-position: -400% 0;
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(
        0 0 6px rgba(255,255,255,.08)
    );
}

.scan-text{
    animation: scan-light 26s linear infinite;
    will-change: background-position;
}

@keyframes scan-light{
    from{
        background-position: 400% 0;
    }

    to{
        background-position: -400% 0;
    }
}

</style>