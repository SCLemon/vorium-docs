<!-- Click the "Click Me" button above to see the demo. -->

<template>
    <VButton type="ghost" size="md" :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton>
</template>

<script>

import { ref, onUnmounted } from 'vue';
import { VButton } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
    name: 'App',
    components: {
        VButton
    },
    setup(){
        let percent = ref(0);
        let loading = ref(false);
        let timer = null;

        // Allows progress status to be displayed within the button during loading.
        function click(){
            loading.value = true;
            timer = setInterval(() => {
                percent.value += parseInt(Math.random()*5 + 1);
                if(percent.value >= 100){
                    clearInterval(timer);
                    loading.value = false;
                    percent.value = 0;
                }
            }, 100);
        }

        onUnmounted(()=>{
            if(timer) clearInterval(timer)
        })

        return {
            percent, loading, click
        }
    }
}
</script>
