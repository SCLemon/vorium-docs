<template>
  <div class="column-wrapper">
    <div class="column-title">VORIUM UI</div>
    <div class="column-search-wrapper">
       <div class="column-search">
         <input type="text" class="column-search-input" placeholder="Search Components...">
       </div>
    </div>
    <div class="colum-group-wrapper">
        <div class="colum-group">
            <div class="colum-group-title">GET STARTED</div>
            <div class="colum-group-item" @click="goTo('/introduction')" :class="{'colum-group-item-selected': $route.path.includes('/introduction')}">Introduction</div>
            <div class="colum-group-item" @click="goTo('/installation')" :class="{'colum-group-item-selected': $route.path.includes('/installation')}">Installation</div>
            <div class="colum-group-item" @click="goTo('/quick-start')" :class="{'colum-group-item-selected': $route.path.includes('/quick-start')}">Quick Start</div>
        </div>
        <div class="colum-group">
            <div class="colum-group-title">COMPONENTS</div>
            <div class="colum-group-item" @click="goTo('/icons')" :class="{'colum-group-item-selected': $route.path.includes('/icons')}">Icons</div>
            <div class="colum-group-item" @click="goTo('/button')" :class="{'colum-group-item-selected': $route.path.includes('/button')}">Button</div>
            <div class="colum-group-item" @click="goTo('/input')" :class="{'colum-group-item-selected': $route.path.includes('/input')}">Input</div>
        </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
export default {
    name:'Column',
    setup(){
        
        function goTo(path){
            router.replace(path).catch(e=>{})
        }

        return {
            goTo
        }
    }
}
</script>

<style scoped>
    .column-wrapper{
        width: 300px;
        height: 100vh;
        box-sizing: border-box;
        border-right: 0.1px solid rgba(255,255,255,0.1);
    }
    .column-title{
        color: white;
        text-align: center;
        height: 80px;
        line-height: 80px;
        box-sizing: border-box;
        font-size: 32px;
    }
    .column-search-wrapper{
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        border-bottom: 0.1px solid rgba(255,255,255,0.1);
    }
    .column-search{
        width: 260px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        display: block;
        border: 0.1px solid rgba(255,255,255,0.1);
        border-radius: 5px;
        display: flex;
        justify-content: left;
        align-items: center;
        padding-left: 20px;
        box-sizing: border-box;
    }
    .column-search-input{
        height: 25px;
        width: 150px;
        background: transparent;
        border: none;
        outline: none;
        color: white;
    }
    .colum-group-wrapper{
        width: 260px;
        margin: 0 auto;
        padding-top: 20px;
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
        border-radius: 3px;
        padding-left: 10px;
        box-sizing: border-box;
        margin-bottom: 5px;
        transition: background 0.3s ease;
    }
    .colum-group-item:hover{
        background:rgba(255,255,255,0.1);
        cursor: pointer;
    }
    .colum-group-item-selected{
        background: rgba(255,255,255,0.1);
    }
</style>