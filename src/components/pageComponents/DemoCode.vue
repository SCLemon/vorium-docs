<template>
    <div class="how-to-use-wrapper">
        <div class="how-to-use-title">Examples</div>
        <div class="how-to-use-code">
            <pre><code class="language-xml">{{ code }}</code></pre>
        </div>
    </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { nextTick, watch } from 'vue';
export default {
    name: 'demoCode',
    props:{
        code:{
            type: String,
            default:''
        }
    },
    setup(props){

        watch(() => props.code, async (code) => {

            if(!code) return

            await nextTick()

            hljs.highlightAll()
            
        }, { immediate:true })
    }
}
</script>

<style scoped>
    .how-to-use-wrapper{
        margin-top: 30px;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
    }
    .how-to-use-title{
        color: white;
        font-size: 18px;
        margin-bottom: 30px;
    }
    .how-to-use-code{
        width: 100%;
        color: white;
        background: rgba(255,255,255,0.1);
        padding: 30px;
        line-height: 1.35;
        box-sizing: border-box;
        white-space: pre-wrap;
        font-family: monospace;
    }
    
    .how-to-use-code .hljs {
        background: transparent !important;
        padding: 0;
    }
</style>