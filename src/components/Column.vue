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
            <div class="colum-group"  v-for="group in filteredList" :key="group.group">
                <div class="colum-group-title">{{ group.group }}</div>

                <div v-for="item in group.options" :key="item.path" class="colum-group-item"
                    @click="goTo(item.path)" :class="{ 'colum-group-item-selected': item.match ? item.match($route.path) : $route.path.includes(item.path) }"
                >
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { VIcon, VInput } from 'vorium-ui'
import { SearchIcon } from 'vorium-ui/icons'
import pathConfig from './pathConfig/pathConfig'
import 'vorium-ui/dist/vorium-ui.css'
import 'vorium-ui/icons/icons.css'

export default {
    name:'Column',
    components:{
        VIcon, VInput
    },
    setup(){

        
        const list = pathConfig;

        let keyword = ref('');

        const filteredList = computed(() => {

            if (!keyword.value) return list

            return list
                .map(group => ({
                    ...group,
                    options: group.options.filter(item =>
                        item.title
                            .toLowerCase()
                            .includes(keyword.value.toLowerCase())
                    )
                }))
                .filter(group => group.options.length)
        })

        const router = useRouter()

        function goTo(path){
            router.replace(path).catch(() => {})
        }

        return {
            keyword, filteredList, goTo, SearchIcon
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