import { createRouter, createWebHashHistory  } from 'vue-router'

import Introduction from '@/pages/Overview/Overview.vue'
import Icons from '@/pages/Icons/Icons.vue'
import Button from '@/pages/Button/Button.vue'
import Input from '@/pages/Input/Input.vue'
import ScanLight from '@/pages/ScanLight/ScanLight.vue'
import CodeEditor from '@/pages/CodeEditor/CodeEditor.vue'

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
        path: '/scan-light',
        name: 'Scan Light',
        component: ScanLight
    },
    {
        path: '/code-editor',
        name: 'Code Editor',
        component: CodeEditor
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