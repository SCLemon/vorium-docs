<template>
  <div class="demo-box-wrapper">
    <div class="demo-box">
      <VPdfViewer :pdfFile="file" />
    </div>
  </div>
</template>

<script>

import { onMounted, ref } from 'vue';
import { VPdfViewer } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'
export default {
  name: 'VPdfViewer',
  components: {
     VPdfViewer
  },
  setup(){
    const file = ref(null);

    onMounted(async ()=>{
      const response = await fetch('/assets/test.pdf')
      const blob = await response.blob()
      file.value = new File([blob], 'test.pdf',{ type: 'application/pdf' })
    })

    return{
      file
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

/* Automatically matches the size of its parent container. */
.demo-box{
  width: 400px;
  height: 570px;
}

</style>
