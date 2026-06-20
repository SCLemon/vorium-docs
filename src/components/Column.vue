<template>
  <div class="column-wrapper">
    <div class="column-logo_wrapper">
        <img class="column_logo" src="logo/full_logo.png" alt="">
        <div class="column_version">v0.0.1</div>
    </div>
    <div class="column-search-wrapper">
        <div class="column-search">
            <VInput v-model="keyword"></VInput>
        </div>
    </div>
    <div class="colum-group-wrapper">
        <div class="colum-group">
            <div class="colum-group-title">GET STARTED</div>
            <div class="colum-group-item" @click="goTo('/overview')" :class="{'colum-group-item-selected': $route.path.includes('/overview')}">Overview</div>
            <div class="colum-group-item" @click="goTo('/installation')" :class="{'colum-group-item-selected': $route.path.includes('/installation')}">Installation</div>
            <div class="colum-group-item" @click="goTo('/quick-start')" :class="{'colum-group-item-selected': $route.path.includes('/quick-start')}">Quick Start</div>
        </div>
        <div class="colum-group">
            <div class="colum-group-title">BASICS</div>
            <div class="colum-group-item" @click="goTo('/icons')" :class="{'colum-group-item-selected': $route.path.includes('/icons')}">Icons</div>
            <div class="colum-group-item" @click="goTo('/button')" :class="{'colum-group-item-selected': $route.path.includes('/button')}">Button</div>
            <div class="colum-group-item" @click="goTo('/input')" :class="{'colum-group-item-selected': $route.path.includes('/input')}">Input</div>
            <div class="colum-group-item" @click="goTo('/text-area')" :class="{'colum-group-item-selected': $route.path.includes('/text-area')}">TextArea</div>
            <div class="colum-group-item" @click="goTo('/select')" :class="{'colum-group-item-selected': $route.path.includes('/select')}">Select</div>
            <div class="colum-group-item" @click="goTo('/switch')" :class="{'colum-group-item-selected': $route.path.includes('/switch')}">Switch</div>
        </div>
        <div class="colum-group">
            <div class="colum-group-title">ADVANCED</div>
            <div class="colum-group-item" @click="goTo('/video-player')" :class="{'colum-group-item-selected': $route.path.includes('/video-player')}">VideoPlayer</div>
            <div class="colum-group-item" @click="goTo('/code-editor')" :class="{'colum-group-item-selected': $route.path.includes('/code-editor')}">CodeEditor</div>
            <div class="colum-group-item" @click="goTo('/carousel')" :class="{'colum-group-item-selected': $route.path.includes('/carousel')}">Carousel</div>
        </div>
        <div class="colum-group">
            <div class="colum-group-title">ANIMATIONS</div>
            <div class="colum-group-item" @click="goTo('/scan-light')" :class="{'colum-group-item-selected': $route.path.includes('/scan-light')}">Scan Light</div>
        </div>
        <div class="colum-group">
            <div class="colum-group-title">OTHERS</div>
            <div class="colum-group-item" @click="goTo('/dropdown')" :class="{'colum-group-item-selected': $route.path.includes('/dropdown')}">Dropdown</div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { VIcon, VInput } from 'vorium-ui'
import { SearchIcon } from 'vorium-ui/icons'

import 'vorium-ui/dist/vorium-ui.css'
import 'vorium-ui/icons/icons.css'

export default {
    name:'Column',
    components:{
        VIcon, VInput
    },
    setup(){

        let keyword = ref('');

        const router = useRouter();

        function goTo(path){
            router.replace(path).catch(e=>{})
        }

        const searchInput = ref(null)

        const handleKeydown = (e) => {
            if ((e.ctrlKey || e.metaKey) && (e.key).toLowerCase() === 'f') {
                e.preventDefault()
                console.log(searchInput.value)
                searchInput.value?.focus()
                searchInput.value?.select()
            }
        }

        onMounted(() => {
            window.addEventListener('keydown', handleKeydown)
        })

        onUnmounted(() => {
            window.removeEventListener('keydown', handleKeydown)
        })


        return {
            keyword, goTo, SearchIcon, searchInput
        }
    }
}
</script>

<style scoped>
    .column-wrapper{
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        border-right: 1px solid rgba(255,255,255,0.2);
        overflow: hidden;
    }
    .column-logo_wrapper{
        height: 80px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .column_logo{
        width: 150px;
    }
    .column_version{
        color: white;
        padding: 8px;
        padding-left: 12px;
        padding-right: 12px;
        font-size: 12px;
        border-radius: 15px;
        color: gray;
        border: 1px solid rgba(255,255,255,0.2);
    }
    .column-search-wrapper{
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        border-bottom: 1px solid rgba(255,255,255,0.2);
    }
    .column-search{
        width: 260px;
        height: auto;
        margin: 0 auto;
        box-sizing: border-box;
    }
    .colum-group-wrapper{
        width: 260px;
        height: calc(100vh - 160px);
        box-sizing: border-box;
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 20px;
        overflow-y: scroll;
    }
    .colum-group{
        margin-bottom: 20px;
    }
    .colum-group-title{
        color: gray;
        font-size: 12px;
        margin-bottom: 15px;
        padding-left: 5px;
        box-sizing: border-box;
    }
    .colum-group-item{
        width: 100%;
        color: white;
        height: 40px;
        line-height: 40px;
        border-radius: 2px;
        padding-left: 10px;
        box-sizing: border-box;
        margin-bottom: 5px;
        transition: background 0.5s ease;
    }
    .colum-group-item:hover{
        background:rgba(255,255,255,0.1);
        cursor: pointer;
    }
    .colum-group-item-selected{
        background: rgba(255,255,255,0.1);
    }
</style>