<template>
    <div>
        <div class="set-wrapper">
            <div class="set-title">Embeded PdfViewer</div>
            <div class="set-demo-box-wrapper">
                <div class="set-demo-box">
                    <VPdfViewer :pdfFile="file1" :preloadCount="3"></VPdfViewer>
                </div>
                <div class="set-demo-box">
                    <VPdfViewer :pdfFile="file2" :preloadCount="3"></VPdfViewer>
                </div>
            </div>
        </div>
        <demo-code :code="demo_code" title="Examples"></demo-code>
        <parameter-list :parameters="parameters"></parameter-list>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import DemoCode from '@/components/pageComponents/DemoCode.vue';
import ParameterList from '@/components/pageComponents/ParameterList.vue';
import { VPdfViewer } from 'vorium-ui'
import 'vorium-ui/dist/vorium-ui.css'

export default {
    name: 'PdfViewer',
    components:{
        VPdfViewer, DemoCode, ParameterList
    },
    setup(){

        const url = process.env.BASE_URL+'demo-code/PdfViewerDemo.vue'
        let demo_code = ref('');
        
        const file1 = ref(null);
        const file2 = ref(null);

        onMounted(async ()=>{
            demo_code.value = await (await fetch(url)).text();

            const response1 = await fetch('assets/pdf1.pdf')
            const blob1 = await response1.blob()
            file1.value = new File([blob1], 'pdf1.pdf',{ type: 'application/pdf' })

            const response2 = await fetch('assets/pdf2.pdf')
            const blob2 = await response2.blob()
            file2.value = new File([blob2], 'pdf2.pdf',{ type: 'application/pdf' })
        })

        const parameters = [
            {
                name: 'pdfFile',
                description: 'PDF file object to be rendered in the viewer. The document is automatically reloaded when the file changes.',
                type: 'File',
                necessity: 'Required',
                options: 'File',
                default: 'null'
            },
            {
                name: 'preloadCount',
                description: 'Number of pages to preload around the current viewport for smoother scrolling and rendering performance.',
                type: 'Number',
                necessity: 'Optional',
                options: '>= 0',
                default: '1'
            },
            {
                name: 'contextLayer',
                description: 'Enables the PDF text layer, allowing text selection, copying, and search functionality.',
                type: 'Boolean',
                necessity: 'Optional',
                options: 'true | false',
                default: 'true'
            }
        ]
        
        return {
            file1, file2, demo_code, parameters
        }
    }
}
</script>

<style scoped>
    .set-wrapper{
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
    }
    .set-title{
        color: white;
        font-size: 18px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .set-demo-box-wrapper{
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        gap: 60px;
    }
    .set-demo-box{
        width: 400px;
        height: 570px;
    }
</style>