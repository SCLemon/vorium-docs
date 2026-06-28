<template>
  <div class="demo-box-wrapper">
    <div class="demo-box">
      <VSlider v-model="progress" :showTips="true" :tipText="handleTipText">
        <template #prepend><div class="demo-prepend"><VIcon :icon="VolumeHighIcon" :size="16"></VIcon></div></template>
        <template #append><div class="demo-append">{{ progress.toFixed(1) }} %</div></template>
      </VSlider>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue';

import { VSlider, VIcon } from 'vorium-ui'
import { VolumeHighIcon } from 'vorium-ui/icons'
import 'vorium-ui/icons/icons.css'
import 'vorium-ui/dist/vorium-ui.css'

export default {
  name: 'App',
  components: {
     VSlider, VIcon
  },
  setup(){
    const progress = ref(50);

    function handleTipText(value) {
      if (value === 0) return '靜音';
      if (value < 33) return '低音量';
      if (value < 66) return '中音量';
      return '高音量';
    }

    return{
      progress, VolumeHighIcon, handleTipText
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
.demo-box{
  width: 300px;
}
.demo-prepend{
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-append{
  font-size: 12px;
  width: 7ch;
  display: flex;
  align-items: center;
  justify-content: left;
}

</style>
