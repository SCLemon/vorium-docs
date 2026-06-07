<!-- Reusable light-sweep effect for loading states, active indicators, and highlighted content. -->
<template>
    <div class="set-demo-box-item">
        <VScanLight>Industrial UI System for Engineers</VScanLight>
    </div>
    <div class="set-demo-box-item">
        <VScanLight :scan="'text-shimmer'">Industrial UI System for Engineers</VScanLight>
    </div>
</template>

<script>

import { VScanLight } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
    name: 'ScanLight',
    components:{
        VScanLight
    },
}

</script>

<style scoped>
    /* Feel free to customize the content styles */
    .set-demo-box-item{
        display: inline-block;
        font-size: 34px;
    }
</style>