<template>
  <div>
    <div class="title">Icon Library</div>
    <div class="how-to-use-wrapper">
        <div class="how-to-use-title">使用方法</div>
        <!-- 程式碼框框 -->
        <div class="how-to-use-code">
            <pre><code class="language-javascript">{{ demo_code }}</code></pre>
        </div>
    </div>
  </div>
</template>

<script>
import { nextTick, onMounted, ref } from 'vue'
import { VIcon } from 'vorium-ui'
import { PlusIcon } from 'vorium-ui/icons'

import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export default {
    name:'Icons',
    components:{
        VIcon
    },

    setup(){

        let demo_code = ref('');

        onMounted(async ()=>{
            demo_code.value = await (await fetch('/demo-code/IconDemo.vue')).text();

            await nextTick();

            hljs.highlightAll();
         
        })

        return{
           PlusIcon, demo_code
        }
    }
}
</script>

<style scoped>
    .title{
        color: white;
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        border-bottom: 0.1px solid rgba(255,255,255,0.1);
        line-height: 80px;
        padding-left: 30px;
        font-size: 24px;
    }
    .how-to-use-wrapper{
        margin-top: 30px;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
    }
    .how-to-use-title{
        color: white;
        font-size: 18px;
    }
    .how-to-use-code{
        margin-top: 20px;
        width: 100%;
        color: white;
        background: rgba(255,255,255,0.05);
        padding: 30px;
        line-height: 1.3;
        box-sizing: border-box;
        white-space: pre-wrap;
        font-family: monospace;
    }
    
    .how-to-use-code .hljs {
        background: transparent !important;
        padding: 0;
    }

</style>