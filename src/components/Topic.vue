<template>
      <div class="topic_wrapper">
        <div class="topic_title_box">
            <VIcon :icon="MenuIcon" :size="20"></VIcon>
            <div class="topic_title">{{ title }}</div>
        </div>
        <div class="topic_github" @click="goToOuterLink('https://github.com/SCLemon/vorium-ui')">
            <img class="topic_github_img" src="img/github-icon.png" alt="">
            <div class="topic_github_title">GitHub</div>
        </div>
      </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue';
import { VIcon } from 'vorium-ui'
import { MenuIcon } from 'vorium-ui/icons'
import 'vorium-ui/icons/icons.css'

export default {
    name: 'Topic',
    components:{
        VIcon
    },
    setup(){

        const route = useRoute();
        const title = ref('')

        watch(()=>route.name, (newName) => {
            title.value = newName
        }, { immediate: true })

        function goToOuterLink(url){
            window.open(url, '_blank')
        }

        return {
            title, MenuIcon, goToOuterLink
        }
    }
}
</script>

<style scoped>
    .topic_wrapper{
        color: white;
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(255,255,255,0.2);
        line-height: 80px;
        font-size: 20px;
        display: flex;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
    }
    .topic_title_box{
        display: flex;
        align-items: center;
    }
    .topic_title{
        margin-left: 15px;
    }
    .topic_github{
        height: 40px;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 5px;
        margin-left: auto;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding-left: 15px;
        padding-right: 15px;
        transition: border 0.25s ease;
    }
    .topic_github:hover{
        cursor: pointer;
        border: 1px solid rgba(255,255,255,0.4);
    }
    .topic_github_img{
        width: 20px;
        height: 20px;
    }
    .topic_github_title{
        font-size: 14px;
        margin-left: 10px;
    }
</style>