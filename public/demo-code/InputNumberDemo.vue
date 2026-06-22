<!-- Supports wheel scrolling, long-press controls, and step-based value adjustment. -->
 
<template>
  <div class="demo-box-wrapper">
    <div class="demo-box">
      <VInputNumber v-model="number"></VInputNumber>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue';
import { VInputNumber} from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
  name: 'App',
  components: {
     VInputNumber
  },
  setup(){
    const number = ref(0)

    return{
      number
    }
  }
}
</script>

<style>
body{
  background: black;
}

.demo-box-wrapper{
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.demo-box{
  width: 200px;
}

</style>
