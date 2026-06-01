<template>
  <VIcon :icon="PlusIcon" :size="24"></VIcon>
</template>

<script>

import { VIcon } from 'vorium-ui'
import { PlusIcon } from 'vorium-ui/icons'
import 'vorium-ui/icons/icons.css'

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