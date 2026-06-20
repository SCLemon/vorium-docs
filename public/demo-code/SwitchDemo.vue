<template>
  <div class="demo-box-wrapper">
    <VSwitch v-model="status" inactiveText="Disabled" activeText="Enabled"></VSwitch>
  </div>
</template>

<script>

import { ref } from 'vue';
import { VSwitch } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'
export default {
  name: 'SwitchDemo',
  components: {
     VSwitch
  },
  setup(){
    const status = ref(false);
    return{
      status
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
  margin-top: 200px;
  display: flex;
  justify-content: center;
}

</style>
