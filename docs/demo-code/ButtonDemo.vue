<!-- Click the "Click Me" button above to see the demo. -->

<template>
    <VButton type="ghost" :loading="loading" :loadingText="percent +'%'" @click="click()">Click Me</VButton>
    
    <!-- Circle Demo -->
    <VButton type="success" circle width="38px"><VIcon :icon="CheckIcon"></VIcon></VButton>
</template>

<script>

import { ref, onUnmounted } from 'vue';
import { VButton, VIcon } from 'vorium-ui'
import { CheckIcon } from 'vorium-ui/icons'
import 'vorium-ui/dist/vorium-ui.css'
import 'vorium-ui/icons/icons.css'

export default {
    name: 'ButtonDemo',
    components: {
        VButton, VIcon
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
            percent, loading, click, CheckIcon
        }
    }
}

</script>
