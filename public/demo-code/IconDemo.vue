<template>
  <VIcon :icon="PlusIcon" size="xs"></VIcon>
</template>

<script>

import { VIcon } from 'vorium-ui'
import { PlusIcon } from 'vorium-ui/icons'
export default {
    name: 'IconDemo',
    components:{
        VIcon
    },
    setup(){
        return {
            PlusIcon
        }
    }
}
</script>

<style scoped>

</style>