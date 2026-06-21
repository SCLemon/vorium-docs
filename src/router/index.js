import { createRouter, createWebHashHistory  } from 'vue-router'

import Introduction from '@/pages/Overview/Overview.vue'
import Icons from '@/pages/Icons/Icons.vue'
import Button from '@/pages/Button/Button.vue'
import Input from '@/pages/Input/Input.vue'
import ScanLight from '@/pages/ScanLight/ScanLight.vue'
import CodeEditor from '@/pages/CodeEditor/CodeEditor.vue'
import Carousel from '@/pages/Carousel/Carousel.vue'
import VVideoPlayer from '@/pages/VVideoPlayer/VVideoPlayer.vue'
import Dropdown from '@/pages/Dropdown/Dropdown.vue'
import Select from '@/pages/Select/Select.vue'
import TextArea from '@/pages/TextArea/TextArea.vue'
import Switch from '@/pages/Switch/Switch.vue'
import Slider from '@/pages/Slider/Slider.vue'
import PdfViewer from '@/pages/PdfViewer/PdfViewer.vue'

const routes = [
    {
        path: '/overview',
        name: 'VORIUM UI',
        component: Introduction
    },
    {
        path: '/icons',
        name: 'Design Icons',
        component: Icons
    },
    {
        path: '/button',
        name: 'Design Button',
        component: Button
    },
    {
        path: '/input',
        name: 'Design Input',
        component: Input
    },
    {
        path: '/select',
        name: 'Design Select',
        component: Select
    },
    {
        path: '/text-area',
        name: 'Design TextArea',
        component: TextArea
    },
    {
        path: '/switch',
        name: 'Design Switch',
        component: Switch
    },
    {
        path: '/slider',
        name: 'Design Slider',
        component: Slider
    },
    {
        path: '/dropdown',
        name: 'Design Dropdown',
        component: Dropdown
    },
    {
        path: '/scan-light',
        name: 'Scan Light',
        component: ScanLight
    },
    {
        path: '/code-editor',
        name: 'Design Code Editor',
        component: CodeEditor
    },
    {
        path: '/carousel',
        name: 'Design Carousel',
        component: Carousel
    },
        {
        path: '/video-player',
        name: 'Design VideoPlayer',
        component: VVideoPlayer
    },
    {
        path: '/pdf-viewer',
        name: 'Design PdfViewer',
        component: PdfViewer
    },
    {
        path:'/',
        redirect: '/overview'
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router