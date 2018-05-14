<template>
    <div>
        <div class="title">Content</div>
        <router-link to="/content/movie">movie</router-link>
        <router-link to="/content/music">music</router-link>
        <router-link to="/content/picture">picture</router-link>
        <router-link to="/content/article">article</router-link>
        <router-view></router-view>
    </div>
</template>
<style lang='less' scoped>
    .title{
        color:red;
    }
</style>