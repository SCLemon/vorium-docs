<template>
  <div class="demo-box-wrapper">
    <VCarousel :aspectRatio="16/9" :autoPlay="true" :interval="3000">
        <v-carousel-item><div class="set-demo-box-item">Build. Measure. Iterate.</div></v-carousel-item>
        <v-carousel-item><div class="set-demo-box-item">Data Drives Decisions.</div></v-carousel-item>
        <v-carousel-item><div class="set-demo-box-item">Precision Over Complexity.</div></v-carousel-item>
        <v-carousel-item><div class="set-demo-box-item">Optimize The Pipeline.</div></v-carousel-item>
        <v-carousel-item><div class="set-demo-box-item">Engineering The Future.</div></v-carousel-item>
    </VCarousel>
  </div>
</template>

<script>

import { VCarousel, VCarouselItem } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
  name: 'CarouselDemo',
  components: {
    VCarousel, VCarouselItem
  },
}
</script>

<style>

.demo-box-wrapper{
  width: 700px;
  margin: 0 auto;
}
.demo-box{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.07);
  height: 100%;
}

</style>
