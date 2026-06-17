<template>
    <div class="demo-box">
      <VTextArea v-model="input"></VTextArea>
    </div>
</template>

<script>

import { ref } from 'vue';
import { VTextArea } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
  name: 'App',
  components: {
     VTextArea
  },
  setup(){
    const input = ref('');
    return {
        input
    }
  }
}
</script>

<style>
body{
  background: black;
}

.demo-box{
  width: 200px;
}

</style>
