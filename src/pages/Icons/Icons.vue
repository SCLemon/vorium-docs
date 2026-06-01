<template>
  <div>
    <div class="how-to-use-wrapper">
        <div class="how-to-use-title">Examples</div>
        <div class="how-to-use-code">
            <pre><code class="language-javascript">{{ demo_code }}</code></pre>
        </div>
    </div>
    <div class="icon-set-wrapper">
        <div class="icon-set-title">Icons</div>
        <div class="icon-set-grid">
            <div class="icon-set-grid-item"  v-for="[name, Icon] in IconList" :key="name">
                <div class="icon-set-grid-item-icon">
                   <component :is="Icon"></component>
                </div>
                <div class="icon-set-grid-item-title">{{name}}</div>
            </div>
        </div>
    </div>
    <div class="parameter-wrapper">
        <div class="parameter-title">Parameters</div>
        <table class="parameter-table">
            <thead>
                <tr>
                    <th >Parameter</th>
                    <th >Description</th>
                    <th >Type</th>
                    <th >Necessity</th>
                    <th >Options</th>
                    <th >Default</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in parameters" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.type }}</td>
                    <td>{{ item.necessity }}</td>
                    <td>{{ item.options }}</td>
                    <td>{{ item.default }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>

import { nextTick, onMounted, shallowRef, ref, reactive } from 'vue'
import { VIcon, VButton }  from 'vorium-ui';
import * as Icons from 'vorium-ui/icons'
import 'vorium-ui/icons/icons.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export default {
    name:'Icons',
    components:{
        VIcon, VButton
    },

    setup(){

        let demo_code = ref('');

        const IconList = shallowRef(Object.entries(Icons)).value

        const parameters = reactive([
            {
                name: 'icon',
                description: 'The icon component to render. Accepts any icon exported from "vorium-ui/icons" or any valid Vue component that renders an SVG icon.',
                type: 'Component',
                necessity: 'Required',
                options: 'Any icon component',
                default: '-'
            },
            {
                name: 'size',
                description: 'Controls the rendered icon size in pixels. The value is applied to both width and height of the icon.',
                type: 'Number',
                necessity: 'Optional',
                options: 'Any positive number',
                default: '16'
            }
        ])

        const url = '/demo-code/IconDemo.vue'

        onMounted(async ()=>{

            demo_code.value = await (await fetch(url)).text();

            await nextTick();

            hljs.highlightAll();
         
        })

        return{
            demo_code, IconList, parameters
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
        line-height: 1.35;
        box-sizing: border-box;
        white-space: pre-wrap;
        font-family: monospace;
    }
    
    .how-to-use-code .hljs {
        background: transparent !important;
        padding: 0;
    }

    .icon-set-wrapper{
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
    }
    .icon-set-title{
        color: white;
        font-size: 18px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .icon-set-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 8px;
    }

    .icon-set-grid-item{
        width: 90px;
        height: 90px;
        box-sizing: border-box;
        background: rgba(255,255,255,0.1);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        transition: box-shadow 0.3s ease;
    }
    .icon-set-grid-item:hover{
        cursor: pointer;
        box-shadow: 2px 2px 5px rgba(255,255,255, 0.2);
    }
    .icon-set-grid-item-icon{
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon-set-grid-item-title{
        text-align: center;
        font-size: 10px;
        margin-top: 15px;
    }

    .parameter-wrapper{
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
    }
    .parameter-title{
        color: white;
        font-size: 18px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .parameter-table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        color: white;
        text-align: justify;
        margin-top: 20px;
    }
    .parameter-table th,td {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 15px;
        box-sizing: border-box;
        line-height: 1.5;
        font-size: 14px;
    }

    .parameter-table thead{
        box-sizing: border-box;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .parameter-table th:nth-child(1),
    .parameter-table td:nth-child(1) {
        width: 14%;
        padding-left: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Description */
    .parameter-table th:nth-child(2),
    .parameter-table td:nth-child(2) {
        width: 34%;
    }
    .parameter-table td:nth-child(2){
        padding-right: 30px;
    }

    /* Type */
    .parameter-table th:nth-child(3),
    .parameter-table td:nth-child(3) {
        width: 12%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Necessity */
    .parameter-table th:nth-child(4),
    .parameter-table td:nth-child(4) {
        width: 10%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Options */
    .parameter-table th:nth-child(5),
    .parameter-table td:nth-child(5) {
        width: 20%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Default */
    .parameter-table th:nth-child(6),
    .parameter-table td:nth-child(6) {
        width: 10%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .parameter-table tbody tr {
        transition: background-color 0.25s ease;
    }

    .parameter-table tbody tr:hover {
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
    }
</style>