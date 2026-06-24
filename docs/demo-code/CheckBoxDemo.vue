<!-- 
    ** VCheckBoxOption must be used inside VCheckBoxGroup.
    ** VCheckBoxOption shares the same styling and usage as VRadio.
    When the maximum selection limit is reached, unselected options are automatically disabled until a selected option is deselected.
 -->
<template>
  <div class="demo-box-wrapper">
    <div class="demo-box">
        <VCheckBoxGroup ref="group" v-model="fruits" :max="4">
            <VCheckBoxOption label="Apple" value="apple" :disabled="true" :hasBorder="true"/>
            <VCheckBoxOption label="Banana" value="banana" :hasBorder="true"/>
            <VCheckBoxOption label="Orange" value="orange" :disabled="true" :hasBorder="true"/>
            <VCheckBoxOption label="Mango" value="mango" :hasBorder="true"/>
            <VCheckBoxOption label="Grape" value="grape" :hasBorder="true"/>
            <VCheckBoxOption label="Pineapple" value="pineapple" :hasBorder="true"/>
            <VCheckBoxOption label="Watermelon" value="watermelon" :hasBorder="true"/>
        </VCheckBoxGroup>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue';
import { VCheckBoxGroup, VCheckBoxOption } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
  name: 'App',
  components: {
     VCheckBoxGroup, VCheckBoxOption
  },
  setup(){
    const group = ref(null);
    const fruits = ref(['apple']); // do not use reactive()

    // Disabled options are not affected by clearAll() or selectAll().
    function clearAll(){
      group.value.clearAll()
    }

    // selectAll() respects the max limit and only selects the first max available options.
    // Disabled options are included in min/max counting.
    function selectAll(){
      group.value.selectAll()
    }

    return{
      group, fruits, selectAll, clearAll
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
  margin-top: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

</style>
