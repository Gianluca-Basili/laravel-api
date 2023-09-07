<script>

import { store } from '../store.js';
export default {
    name:"PostCard",
    props:{
        post:Object
    },
 data(){
    return{
        store,
        maxNumCharacters: 250,
    }
 },
 methods:{
    truncateText(text){
            if(text.length > this.maxNumCharacters ){
                return text.substr(0,this.maxNumCharacters) + '...';
            }
            
            return text;
        }

 }
}
</script>
<template lang="">
  <div class="card min-height-200">
        <div class="card-header">
            {{post.title}}

        </div>
        <div class="card-image-top">
            <img :src="`${this.store.baseUrl}/storage/${post.cover_image}`" class="img-fluid">
        </div>
        <div class="card-body">
            <p>
                <span v-if="post.category"><strong><em>{{post.category.name}}</em></strong></span>
                <span v-else><strong><em>Categoria non assegnata</em></strong></span>
            </p>
            <p v-if="post.tags">
                <span class="badge text-bg-primary me-3" v-for="tag in post.tags" :key="tag.id">{{tag.name}}</span>
            </p>
            <p>{{truncateText(post.content)}}</p>
        </div>
        <div class="card-footer">
            <router-link class="btn btn-sm btn-primary" :to="{name: 'single-post', params: {slug: post.slug}}">Leggi l'articolo</router-link>
        </div>
    </div>
    
</template>
<style lang="">
    
</style>