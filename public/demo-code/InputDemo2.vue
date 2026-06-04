<!-- Try the "Custom Slot" input above to see the feature in action. -->
<template>
    <VInput size="md" v-model="keyword" round :hotKey="'P'" placeholder="Cutsom Slot">
      <template #action>
        <VButton type="ghost" size="xs" round>
          <VIcon :icon="SendIcon" :size="14"></VIcon>
        </VButton>
      </template>
    </VInput>
</template>

<script>

import { ref  } from 'vue';
import { VInput, VButton, VIcon } from 'vorium-ui'
import { SendIcon } from 'vorium-ui/icons'
import 'vorium-ui/icons/icons.css'
import 'vorium-ui/dist/vorium-ui.css'

export default {
  name: 'InputDemo2',
  components: {
    VInput, VButton, VIcon
  },
  setup(){
    let keyword = ref('');
    return {
      keyword, SendIcon
    }
  }
}
</script>
