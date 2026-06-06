<template>
    <div class="how-to-use-wrapper">
        <div class="how-to-use-title">{{title}}</div>
        <div class="how-to-use-code">
            <pre><code :class="`language-${type}`" ref="codeElement">{{ code }}</code></pre>
        </div>
    </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { nextTick, watch, ref } from 'vue';
export default {
    name: 'demoCode',
    props:{
        title:{
            type: String,
            default: 'Examples',
        },
        code:{
            type: String,
            default:''
        },
        type:{
            type: String,
            default: 'xml'
        }
    },
    setup(props){

        const codeElement = ref()

        watch(() => props.code, async (code) => {

            if (!code) return

            await nextTick()

            hljs.highlightElement(codeElement.value)

        }, { immediate: true })

        return {
            codeElement
        }
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
        line-height: 1.5;
        box-sizing: border-box;
        white-space: pre-wrap;
        font-family: monospace;
    }
    
    .how-to-use-code .hljs {
        background: transparent !important;
        padding: 0;
    }
</style>