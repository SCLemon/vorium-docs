<template>
  <div class="demo-box-wrapper">
    <VVideoPlayer :source="source"></VVideoPlayer>
  </div>
</template>

<script>

import { reactive } from 'vue';
import { VVideoPlayer } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
  name: 'VideoPlayerDemo',
  components: {
     VVideoPlayer
  },
  setup(){
    let source = reactive(
      [
        {
          quality: '1080P', // could be any string, such as '高清' and so on...
          name: '<Video Name>', // could be any string
          src: 'assets/video.mp4' // could be file or url
        },
        {
          quality: '720P',
          name: '<Video Name>',
          src: File
        }
      ]
    )
    return {
      source
    }
  }
}
</script>

<style>

.demo-box-wrapper{
  width: 700px;
  margin: 0 auto;
  margin-top: 200px;
}

</style>
