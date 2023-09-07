<script>
import axios from 'axios';
import { store } from '../store';
import AppLoader from '../components/AppLoader.vue';
export default {
    name:'SinglePost',
    components: {
        AppLoader
    },
    data(){
        return{
            store,
            post:null
        }
    },
    
    created(){
        this.getSinglePost();
    },

    methods:{
        getSinglePost(){
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
               if(response.data.success){
                    this.post = response.data.post;
                    this.store.loading = false
               }
               else{
                    this.$router.push({name: 'Not-Found'});
               }
            })
        },
    }


}
</script>
<template lang="">
    <div>
        <AppLoader v-if="store.loading" />
        <div v-else>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">{{post.title}}</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mb-3">
                        <img :src="`${store.baseUrl}/storage/${post.cover_image}`" width=200 alt="">
                    </div>
                    <div class="col-12 mb-3" v-if="post.category">
                        <strong>Categoria:</strong>{{post.category.name}}
                    </div>
                    <div class="col-12" v-if="post.tags">
                        <span class=" text-bg-primary me-2" v-for="tag in tags">{{tag.name}}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p>{{post.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>