<template>
    <div class="demo-box-wrapper">
        <div class="demo-box">
            <VDropdown placement="left" :isVisible="isVisible" arrow-position="15px">
                <div class="demo-item">hello world</div>
                <div class="demo-item">hello world</div>
                <div class="demo-item">hello world</div>
                <div class="demo-item">hello world</div>
            </VDropdown>
        </div>
    </div>
</template>

<script>

import { VDropdown } from 'vorium-ui';
import 'vorium-ui/dist/vorium-ui.css'

export default {
  name: 'DropdownDemo',
  components: {
     VDropdown
  },
}

</script>

<style>

body{
  background: gray;
}

.demo-box-wrapper{
  width: 100%;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  gap:40px;
}
.demo-box{
  width: 100px;
}
.demo-item{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
}
.demo-item:hover{
  cursor: pointer;
  background: rgba(255,255,255,0.075);
}

</style>
