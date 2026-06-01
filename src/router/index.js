import { createRouter, createWebHashHistory  } from 'vue-router'

import Introduction from '@/pages/Introduction/Introduction.vue'
import Icons from '@/pages/Icons/Icons.vue'

const routes = [
    {
        path: '/introduction',
        name: 'Introduction',
        component: Introduction
    },
    {
        path: '/icons',
        name: 'Design Icons',
        component: Icons
    },
    {
        path:'/',
        redirect: '/introduction'
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router